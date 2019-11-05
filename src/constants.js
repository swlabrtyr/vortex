export const INIT_STATE_LENGTH = 8; // Number of initial objects in state.events
export const MAX_EVENTS = 16;
export const adsr = {
  gain: {
    attack: {
      time: 0.1,
      amnt: 0.8
    },
    decay: {
      time: 0.5,
      amnt: 0.1
    },
    sustain: {
      time: 0.5,
      amnt: 0.1
    },
    release: {
      time: 0.8,
      amnt: 0.01
    }
  },
  filter: {
    attack: {
      time: 0.1,
      amnt: 8700
    },
    decay: {
      time: 0.5,
      amnt: 600
    },
    sustain: {
      time: 0.5,
      amnt: 500
    },
    release: {
      time: 0.8,
      amnt: 200
    }
  }
};
