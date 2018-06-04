export default(state = [], payload) => {
  switch (payload) {
      case 'set':
          return [...state, payload.item];
      default:
          return state;
  }
};