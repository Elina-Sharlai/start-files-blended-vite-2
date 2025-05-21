import Text from '../components/Text/Text';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import TodoListItem from '../components/TodoListItem/TodoListItem';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = text => {
    const newTodo = {
      id: nanoid(),
      text,
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };
  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };
  const addNewTodo = inputValue => {
    console.log(inputValue); // має вивести значення інпуту під час сабміту форми
  };
  return (
    <>
      <Form onSubmit={addNewTodo} />
      <Form onAddTodo={addTodo} />
      <ul>
        {todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
