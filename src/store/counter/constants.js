export const COUNTER_ADD = 'COUNTER_ADD';
export const COUNTER_SUBTRACT = 'COUNTER_SUBTRACT';

export default {
  counterAdd: () => {
    return {
      type: COUNTER_ADD,
    };
  },
  counterSubtract: () => {
    return {
      type: COUNTER_SUBTRACT,
    };
  },
};
