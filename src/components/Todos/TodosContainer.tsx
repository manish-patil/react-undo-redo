import React from 'react';
import { TodoList } from './List';
import { RecordType } from '../../types';
import { UndoRedoContext } from '../../UndoRedoProvider';
import AddNoteCommand from '../../commands/AddRecordCommand';

const TodosContainer = () => {
  const undoRedoContext = React.useContext(UndoRedoContext);

  const handleNewTodo = () => {
    undoRedoContext?.execute(
      new AddNoteCommand(undoRedoContext.records, {
        type: RecordType.TODO,
        title: '',
        description: '',
        done: false,
      })
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
      }}
    >
      <div className='title'>
        <h3>Todos</h3>
        <div>
          <button
            style={{
              border: 'none',
              fontSize: '1.25em',
              background: 'transparent',
              cursor: 'pointer',
            }}
            onClick={handleNewTodo}
          >
            +
          </button>
        </div>
      </div>
      <TodoList />
    </div>
  );
};

export default TodosContainer;
