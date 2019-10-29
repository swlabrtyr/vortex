import store from "../index";
import note2freq from "../utils/note2freq";

const init = ctx => {
  const audioCtx = ctx;
  const output = audioCtx.createGain();
  const scheduleAheadTime = 0.1;
  let futureTickTime = audioCtx.currentTime;
  let current8thNote = 1;
  let timerID, secondsPerBeat;
  let stopTime = 0.0;
  let events = [];

  output.gain.value = 0.2;
  output.connect(audioCtx.destination);

  const showScheduledEvent = (element, isScheduled) => {
    if (element === undefined || !element)
      return; /* <---- Need to check eventID against undefined,
  as zero is a falsey value which
  will cause the first (zeroeth) event not to be effected
  */

    isScheduled
      ? (element.style.border = "1px solid Pink")
      : (element.style.border = "1px solid white")
  };

  function scheduleNote(beatDivisionNumber, start, stop) {
    if (store === undefined) return;

    events = store.getState().events;

    for (let i = 0; i < events.length; ++i) {
      if (beatDivisionNumber === events[i].indexOf) {
        // Show scheduled event
        showScheduledEvent(document.getElementById(i), true);

        if (events[i].isArmed === true) {
          let osc = audioCtx.createOscillator();
          let oscAmp = audioCtx.createGain();

          osc.connect(oscAmp);
          oscAmp.connect(output);
          osc.start(audioCtx.currentTime);

          ADSR(
            oscAmp.gain,
            {
              attack: {
                time: 0.5,
                amnt: 0.8
              },
              decay: {
                time: 0.1,
                amnt: 0.5
              },
              sustain: {
                time: 1.0,
                amnt: 0.2
              },
              release: {
                time: 0.1,
                amnt: 0.01
              }
            },
            0.001
          );

          osc.stop(futureTickTime + 1.8);
          osc.frequency.value = note2freq(events[i].content);
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
