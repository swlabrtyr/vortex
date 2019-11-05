import store from "../index";
import note2freq from "../utils/note2freq";
import { adsr } from "../constants";

const init = ctx => {
  const audioCtx = ctx;
  const output = audioCtx.createGain();
  const scheduleAheadTime = 0.1;

  output.gain.value = 0.2;
  output.connect(audioCtx.destination);
  let futureTickTime = audioCtx.currentTime;
  let current8thNote = 1;
  let timerID, secondsPerBeat;
  let stopTime = 0.0;
  let events = [];

  function createADSR(param, adsr, initVal) {
    let time = audioCtx.currentTime;
    param.setValueAtTime(initVal, time);

    let atk = adsr.attack.time;
    let atkTime = time + atk;

    param.exponentialRampToValueAtTime(adsr.attack.amnt, atkTime);

    let dec = adsr.decay.time;
    let decTime = time + atk + dec;

    param.exponentialRampToValueAtTime(adsr.decay.amnt, decTime);

    let sus = adsr.sustain.time;
    let susTime = time + atk + dec + sus;

    param.exponentialRampToValueAtTime(adsr.sustain.amnt, susTime);

    let rel = adsr.release.time;
    let relTime = time + atk + dec + sus + rel;

    param.exponentialRampToValueAtTime(adsr.release.amnt, relTime);

    stopTime = atk + dec + sus + rel + 0.01;
  }

  function createGain(adsrVals, initVal, callback) {
    let gain = audioCtx.createGain();
    if (!arguments) return gain;
    callback && callback(gain.gain, adsrVals, initVal);
    return gain;
  }

  function createFilter(type, adsrVals, initVal, callback) {
    let filter = audioCtx.createBiquadFilter();
    filter.type = type;
    if (!arguments) return filter;
    callback && callback(filter.frequency, adsrVals, initVal);
    return filter;
  }

  function createOsc(type) {
    let osc = audioCtx.createOscillator();
    osc.type = type;
    return osc;
  }

  const showScheduledEvent = (element, isScheduled, eventID) => {
    if (eventID === undefined || !element)
      return; /* <---- Need to check eventID against undefined,
  as zero is a falsey value which
  will cause the first (zeroeth) event not to be effected
  */

    isScheduled
      ? (element.style.border = "0.12em solid palevioletred")
      : (element.style.border = "0.12em solid lightskyblue");
  };

  function scheduleNote(beatDivisionNumber, start, stop) {
    if (store === undefined) return;

    events = store.getState().events;

    for (let i = 0; i < events.length; ++i) {
      if (beatDivisionNumber === events[i].id) {
        // Show scheduled event
        showScheduledEvent(document.getElementById(i), true, i);

        if (events[i].isArmed === true) {
          const osc1 = createOsc("triangle");
          const osc2 = createOsc("sawtooth");

          let filterEnv = createFilter(
            "lowpass",
            adsr.filter,
            0.001,
            createADSR
          );

          let ampEnv = createGain(
            adsr.gain, 
            0.001, 
            createADSR
            );

          osc1
            .connect(filterEnv)
            .connect(ampEnv)
            .connect(output);
          osc2
            .connect(filterEnv)
            .connect(ampEnv)
            .connect(output);

          osc1.start(audioCtx.currentTime);
          osc2.start(audioCtx.currentTime);

          osc1.stop(futureTickTime + 2.8);
          osc2.stop(futureTickTime + 2.8);

          osc1.frequency.value = note2freq(events[i].content)/ 2;
          osc2.frequency.value = note2freq(events[i].content) / 4;

          osc1.detune.value = 7;
          osc2.detune.value = -13;
        }
      } else if (beatDivisionNumber !== events[i].id) {
        showScheduledEvent(document.getElementById(i), false, i);
      }
    }
  }

  function ADSR(param, adsr, initVal) {
    let time = audioCtx.currentTime;
    param.setValueAtTime(initVal, time);

    let atk = adsr.attack.time;
    let atkTime = time + atk;

    param.exponentialRampToValueAtTime(adsr.attack.amnt, atkTime);

    let dec = adsr.decay.time;
    let decTime = time + atk + dec;

    param.exponentialRampToValueAtTime(adsr.decay.amnt, decTime);

    let sus = adsr.sustain.time;
    let susTime = time + atk + dec + sus;

    param.exponentialRampToValueAtTime(adsr.sustain.amnt, susTime);

    let rel = adsr.release.time;
    let relTime = time + atk + dec + sus + rel;

    param.exponentialRampToValueAtTime(adsr.release.amnt, relTime);

    stopTime = atk + dec + sus + rel + 0.01;
  }

  function futureTick() {
    let tempo = 120;
    secondsPerBeat = 120.0 / tempo;
    futureTickTime += 0.25 * secondsPerBeat; // future note
  }

  function scheduler() {
    // sequencer loop
    while (futureTickTime < audioCtx.currentTime + scheduleAheadTime) {
      current8thNote++;
      if (current8thNote >= events.length) {
        current8thNote = 0;
      }
      scheduleNote(current8thNote, futureTickTime, futureTickTime + stopTime);
      futureTick();
    }
    timerID = window.setTimeout(sequence, 25.0);
  }

  function sequence() {
    store.getState().playback.playback ? scheduler() : clearTimeout(timerID);
  }

  sequence();
};

export default init;
