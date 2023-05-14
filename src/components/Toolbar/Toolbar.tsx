import React from 'react';
import { UndoRedoContext } from '../../UndoRedoProvider';

type Props = {};

const Toolbar = (props: Props) => {
  const undoRedoContext = React.useContext(UndoRedoContext);

  return (
    <div className='appTitle'>
      <h1>Organiser</h1>
      <div>
        <button
          style={{
            fontSize: '2em',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            transform: 'rotate(-90deg)',
          }}
          disabled={!undoRedoContext?.canUndo()}
          onClick={() => {
            undoRedoContext?.undo();
          }}
        >
          &#8634;
        </button>
        <button
          style={{
            fontSize: '2em',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            transform: 'rotate(90deg)',
          }}
          disabled={!undoRedoContext?.canRedo()}
          onClick={() => {
            undoRedoContext?.redo();
          }}
        >
          &#8635;
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
