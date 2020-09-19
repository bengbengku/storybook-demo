import React from 'react';
import TodoContainer from '../TodoContainer';


export default {
  title: 'TodoContainer',
  component: TodoContainer,
};


export const NormalTodoContainer = () => {
  return <TodoContainer todos={
  [
    
    "Teach React", "Take dogs out",
    "Do this homework"
  
  ]}/>
};

