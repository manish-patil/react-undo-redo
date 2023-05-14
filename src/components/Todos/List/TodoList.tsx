import React from 'react';
import { ITodo, RecordType } from './../../../types';
import { UndoRedoContext } from './../../../UndoRedoProvider';
import Todo from './Todo';

const TodoList = () => {
  const undoRedoContext = React.useContext(UndoRedoContext);

  const todos = undoRedoContext?.records.filter((record) => {
    return record.type === RecordType.TODO;
  });

  return (
    <div>
      {todos?.map((todo: ITodo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;
