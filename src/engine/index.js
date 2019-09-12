import store from "../index";
import note2freq from "../utils/note2freq";

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

const showScheduledEvent = (element, isScheduled, eventID) => {
  if (!eventID || !element) return;

  isScheduled
    ? (element.style.listStyle = "circle")
    : (element.style.listStyle = "none");
};

console.log(audioContext);
function scheduleNote(beatDivisionNumber, start, stop) {
  if (store === undefined) return;

  events = store.getState().events;

  for (let i = 0; i < events.length; i++) {
    if (beatDivisionNumber === events[i].id) {
      // Show scheduled event

      showScheduledEvent(document.getElementById(i), true, i);
      console.log("beat #: ", beatDivisionNumber);

      if (store.getState().events[i].isArmed === true) {
        // Process audio graph

        // processAudioGraph(pitch, start, stop);
        let osc = audioContext.createOscillator();
        console.log(note2freq(events[i].content));
        osc.frequency.value = note2freq(events[i].content);
        osc.connect(output);
        osc.start(audioContext.currentTime);
        osc.stop(futureTickTime + 0.2);
      }
    } else if (beatDivisionNumber !== events[i].id) {
      showScheduledEvent(document.getElementById(i), false, i);
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
