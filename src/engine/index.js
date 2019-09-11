import store from "../index";

const audioContext = new AudioContext();
const output = audioContext.createGain();
const scheduleAheadTime = 0.1;

output.gain.value = 0.2;
output.connect(audioContext.destination);
let futureTickTime = audioContext.currentTime;
let current16thNote = 1;
let timerID, secondsPerBeat;
let stopTime = 0.0;
let events = [];

console.log(audioContext);
function scheduleNote(beatDivisionNumber, start, stop) {
  if (store === undefined) return;
  events = store.getState().events;
  for (let i = 0; i < events.length; i++) {
    if (beatDivisionNumber === events[i].id) {
      // Show scheduled event
      document.getElementById(i).style.listStyle = "circle";
      console.log("beat #: ", beatDivisionNumber);

      if (store.getState().events[i].isArmed === true) {
        console.log(store.getState().events[i].content);
        // Process audio graph
        console.log("ishouldplay");
        // let pitch = note2freq(notes[i].pitch);
        // processAudioGraph(pitch, start, stop);
        let osc = audioContext.createOscillator();
        osc.frequency.value = 220;
        osc.connect(output);
        osc.start(audioContext.currentTime);
        osc.stop(futureTickTime + 0.2);
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
  let tempo = 60;
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
