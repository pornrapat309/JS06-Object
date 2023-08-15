const state1 = { username: 'john', point: 100, loading: true };

const state2 = { point: 75, loading: false, success: true};

const state3 = Object.assign({}, state1, state2);

console.log(state3);