import React from 'react';
import { UndoRedoContext } from '../../UndoRedoProvider';
import { NotesContainer } from '../Notes';
import { TodosContainer } from '../Todos';

const OrganiserContainer = () => {
  const undoRedoContext = React.useContext(UndoRedoContext);

  return (
    <>
      <div className='organiser'>
        <div className='organiserAlleys'>
          <TodosContainer />
        </div>
        <div className='organiserAlleys'>
          <NotesContainer />
        </div>
      </div>
      {undoRedoContext?.records.length! <= 0 ? (
        <div>
          Add Todos/Notes. <br /> Use Undo/Redo.
        </div>
      ) : null}
    </>
  );
};

export default OrganiserContainer;
