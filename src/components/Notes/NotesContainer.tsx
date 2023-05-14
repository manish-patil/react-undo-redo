import React from 'react';
import { NoteList } from './List';
import { RecordType } from '../../types';
import { UndoRedoContext } from '../../UndoRedoProvider';
import AddNoteCommand from '../../commands/AddRecordCommand';

const NotesContainer = () => {
  const undoRedoContext = React.useContext(UndoRedoContext);

  const handleNewNote = () => {
    undoRedoContext?.execute(
      new AddNoteCommand(undoRedoContext.records, {
        type: RecordType.NOTE,
        title: '',
        description: '',
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
        <h3>Notes</h3>
        <div>
          <button
            style={{
              border: 'none',
              fontSize: '1.25em',
              background: 'transparent',
              cursor: 'pointer',
            }}
            onClick={handleNewNote}
          >
            +
          </button>
        </div>
      </div>
      <NoteList />
    </div>
  );
};

export default NotesContainer;
