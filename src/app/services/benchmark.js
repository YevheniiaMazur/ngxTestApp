// @flow
/* global suite, benchmark */

// import TodoStorage from "todoStorage.service";

// suite('TodoStorage', () => {
//   benchmark('adding new todo', () => {
//     return add(todoName);
//   })
// }, {
//   setup: () => {
//     todos = [
//       new Todo('create todo-app'),
//       new Todo('create tests for todo-app')
//     ];
//     todoName = 'newTodo'
//     todoStorage = TodoStorage();
//   }
// })


var bench1 = new Benchmark(
  {'fn':add, 'cycles':0,'count':1,'name':'bench1','async':true}
);

function add(x, y) {
  return x + y;
}

function log(result){console.log(JSON.parse(JSON.stringify(result.target.stats)))};

bench1.on('complete', log);
bench1.run();
