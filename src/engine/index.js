import store from "../index";
import note2freq from "../utils/note2freq";

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
          let osc1 = audioCtx.createOscillator();
          let osc2 = audioCtx.createOscillator();

          osc1.type = "sine";
          osc2.type = "triangle";

          let osc1Amp = audioCtx.createGain();
          let osc2Amp = audioCtx.createGain();

          let filter1 = audioCtx.createBiquadFilter();
          let filter2 = audioCtx.createBiquadFilter()

          filter1.type = "lowpass";
          filter2.type = "highpass";

          filter1.frequency.value = 200;
          filter2.frequency.value = 300;

          console.log(filter1.frequency.value, filter1.type)

          osc1.connect(filter1);
          osc2.connect(filter2);

          filter1.connect(osc1Amp);
          filter2.connect(osc2Amp);

          osc1Amp.connect(output);
          osc2Amp.connect(output);

          osc1.start(audioCtx.currentTime);
          osc2.start(audioCtx.currentTime);

          ADSR(
            osc1Amp.gain,
            {
              attack: {
                time: 0.01,
                amnt: 0.8
              },
              decay: {
                time: 0.1,
                amnt: 0.5
              },
              sustain: {
                time: 0.5,
                amnt: 0.2
              },
              release: {
                time: 0.1,
                amnt: 0.01
              }
            },
            0.001
          );

          ADSR(
            osc2Amp.gain,
            {
              attack: {
                time: 0.02,
                amnt: 0.5
              },
              decay: {
                time: 0.1,
                amnt: 0.5
              },
              sustain: {
                time: 0.5,
                amnt: 0.2
              },
              release: {
                time: 0.3,
                amnt: 0.01
              }
            },
            0.001
          );

          ADSR(
            filter1.frequency,
            {
              attack: {
                time: 0.02,
                amnt: 8000
              },
              decay: {
                time: 0.1,
                amnt: 2300
              },
              sustain: {
                time: 0.5,
                amnt: 2000
              },
              release: {
                time: 0.3,
                amnt: 300
              }
            },
           0.001
          );

          osc1.stop(futureTickTime + 1.8);
          osc2.stop(futureTickTime + 1.8);

          osc1.frequency.value = note2freq(events[i].content);
          osc2.frequency.value = note2freq(events[i].content) / 2;

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
