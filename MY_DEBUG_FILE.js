import todoApp from './reducers/index.js';

var initialState = todoApp({}, {});
console.log(initialState);

var nextState = todoApp(initialState, {type: 'ADD_TODO', id:1, text: 'Frist todo'});
console.log(nextState);
