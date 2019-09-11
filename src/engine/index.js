import store from "../index";

const audioContext = new AudioContext();
// const output = audioContext.destination;
const scheduleAheadTime = 0.1;

let futureTickTime = audioContext.currentTime;
let current16thNote = 1;
let timerID;
let secondsPerBeat;
let stopTime = 0.0;
let events = [];

function scheduleNote(beatDivisionNumber, start, stop) {
  if (store === undefined) return;
  events = store.getState().events;
  for (let i = 0; i < events.length; i++) {
    if (beatDivisionNumber === events[i].id) {
      document.getElementById(i).style.listStyle = "circle";
      console.log("beat #: ", beatDivisionNumber);

      if (store.getState().events[i].isArmed === true) {
        console.log(store.getState().events[i].content);
        // let pitch = note2freq(notes[i].pitch);
        // processAudioGraph(pitch, start, stop);
      }
    } else if (beatDivisionNumber !== events[i].id) {
      document.getElementById(i).style.listStyle = "none";
    }
  }
}

// function getTempo() {
//   return store.getters.getTempo;
// }

function futureTick() {
  // let tempo = getTempo();
  let tempo = 10;
  secondsPerBeat = 60.0 / tempo;
  futureTickTime += 0.25 * secondsPerBeat; // future note
}

function scheduler() {
  //  console.log("tick");
  // sequencer loop

  while (futureTickTime < audioContext.currentTime + scheduleAheadTime) {
    current16thNote++;
    if (current16thNote >= events.length) {
      current16thNote = 0;
    }
    // console.log('current 16th note: ', current16thNote);
    scheduleNote(current16thNote, futureTickTime, futureTickTime + stopTime);
    futureTick();
  }
  timerID = window.setTimeout(scheduler, 25.0);
}

export default scheduler;
