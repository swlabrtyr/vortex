import store from "../index";
import scheduleEvent from "../reducers";

console.log(store.getState());

window.onload = function() {
  const audioContext = new AudioContext();
  const output = audioContext.destination;
  const scheduleAheadTime = 0.1;

  let futureTickTime = audioContext.currentTime;
  let current16thNote = 1;
  let timerID, secondsPerBeat;
  let stopTime = 0.0;

  function scheduleNote(beatDivisionNumber, start, stop) {
    for (let i = 0; i < store.getState().events.length; i++) {
      if (beatDivisionNumber === store.getState().events[i].id) {
        scheduleEvent(i); // Need to dispatch a "schedule note" action
      }

      if (
        store.getState().events[i].isArmed === true &&
        store.getState().events[i].isScheduled === true
      ) {
       // let pitch = note2freq(notes[i].pitch);
        //processAudioGraph(pitch, start, stop);
      }
    }
  }

  function scheduler() {
    // sequencer loop
    while (futureTickTime < audioContext.currentTime + scheduleAheadTime) {
      current16thNote++;
      if (current16thNote === 36) {
        current16thNote = 0;
      }
      scheduleNote(current16thNote, futureTickTime, futureTickTime + stopTime);
      futureTick();
    }
    timerID = window.setTimeout(scheduler, 25.0);
  }

  function playBack() {
    console.log('playing back')
    futureTickTime = audioContext.currentTime;
    scheduler();
  }
};

export default playBack;