import { renderTodos } from './utils';
import * as reduxStore from './store';

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

const reducers = {
  todo : reduxStore.reducer
}

var store = new reduxStore.Store(reducers, reduxStore.initialState);

console.log(store.value)
button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;

    const payload = { label: input.value, complete: false };
    store.dispatch({type : "ADD_TODO", payload : payload});
    store.subscribe((data) => {
      renderTodos(data.todo.data);
    })
    input.value = '';
  },
  false
);

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    console.log(target);
  }
});
