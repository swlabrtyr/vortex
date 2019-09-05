import store from '../index';

console.log(store.getState());

window.onload = function () {
  const audioContext = new AudioContext();
//  const output = audioContext.destination;
  const scheduleAheadTime = 0.1;

  let futureTickTime = audioContext.currentTime;
  let current16thNote = 1;
//  let timerID, secondsPerBeat;
  let stopTime = 0.0;

  function scheduleNote(beatDivisionNumber, start, stop) {
    for (let i = 0; i < store.getState().events.length; i++) {
      beatDivisionNumber === store.getState().events[i].id
        ? (notes[i].scheduled = true)
        : (notes[i].scheduled = false);

      if (notes[i].isArmed === true && store.getState().events[i].selected === true) {
        let pitch = note2freq(notes[i].pitch);
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
    futureTickTime = audioContext.currentTime;
    scheduler();
  }
}