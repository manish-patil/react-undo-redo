import React from 'react';
import { INote, RecordType } from './../../../types';
import { UndoRedoContext } from './../../../UndoRedoProvider';
import Note from './Note';

const NoteList = () => {
  const undoRedoContext = React.useContext(UndoRedoContext);

  const notes = undoRedoContext?.records.filter((record) => {
    return record.type === RecordType.NOTE;
  });

  return (
    <div>
      {notes?.map((note: INote) => {
        return <Note note={note} key={note.id} />;
      })}
    </div>
  );
};

export default NoteList;
