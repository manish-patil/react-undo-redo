import React from 'react';
import { INote } from './../../../types';
import ChangePropertyCommand from '../../../commands/ChangePropertyCommand';
import { UndoRedoContext } from '../../../UndoRedoProvider';
import { Title } from '../Editor/Title';
import { Description } from '../Editor/Description';

type Props = {
  note: INote;
};

const Note = (props: Props) => {
  const undoRedoContext = React.useContext(UndoRedoContext);
  const [note, setNote] = React.useState<INote>(props.note);

  React.useEffect(() => {
    setNote(props.note);
  }, [props.note]);

  const onChangeTitle = (value: string) => {
    setNote((prev) => {
      const newNote = { ...prev, title: value };

      undoRedoContext?.execute(
        new ChangePropertyCommand(undoRedoContext.records, newNote, 'title')
      );

      return newNote;
    });
  };

  const onChangeDescription = (value: string) => {
    setNote((prev) => {
      const newNote = { ...prev, description: value };

      undoRedoContext?.execute(
        new ChangePropertyCommand(
          undoRedoContext.records,
          newNote,
          'description'
        )
      );

      return newNote;
    });
  };

  return (
    <div className='note'>
      <Title title={note?.title} onChange={onChangeTitle} />
      <Description
        description={note?.description}
        onChange={onChangeDescription}
      />
    </div>
  );
};

export default Note;
