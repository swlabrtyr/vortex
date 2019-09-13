import store from "../index";
import note2freq from "../utils/note2freq";

const audioContext = new AudioContext();
const output = audioContext.createGain();
const scheduleAheadTime = 0.1;

output.gain.value = 0.2;
output.connect(audioContext.destination);
let futureTickTime = audioContext.currentTime;
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
    ? (element.style.listStyle = "circle")
    : (element.style.listStyle = "none");
};

function scheduleNote(beatDivisionNumber, start, stop) {
  if (store === undefined) return;

  events = store.getState().events;

  for (let i = 0; i < events.length; ++i) {
    if (beatDivisionNumber === events[i].id) {
      // Show scheduled event

      showScheduledEvent(document.getElementById(i), true, i);
      console.log("beat #: ", beatDivisionNumber);

      if (events[i].isArmed === true) {
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
  let tempo = 120;
  secondsPerBeat = 120.0 / tempo;
  futureTickTime += 0.25 * secondsPerBeat; // future note
}

function scheduler() {
  //  console.log("tick");
  // sequencer loop

  while (futureTickTime < audioContext.currentTime + scheduleAheadTime) {
    current8thNote++;
    if (current8thNote >= events.length) {
      current8thNote = 0;
    }
    // console.log('current 8th note: ', current8thNote);
    scheduleNote(current8thNote, futureTickTime, futureTickTime + stopTime);
    futureTick();
  }
  timerID = window.setTimeout(scheduler, 25.0);
}

export default scheduler;
