import './styles.css';

import { Todo,TodoList } from "./classes";
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

todoList.todos[0].imprimirClase();

console.log('todos', todoList.todos);