export enum RecordType {
  TODO,
  NOTE,
}

export interface IWithID {
  type: RecordType;
  id: number;
}

export interface ITodo extends IWithID {
  title: string;
  description: string;
  done: boolean;
}

export interface INote extends IWithID {
  title: string;
  description: string;
  done: boolean; // Will hide this member for Note
}

export type Record = ITodo | INote;

export interface ICommand<T extends IWithID> {
  execute: () => Array<T>;
  undo: () => Array<T>;
  redo: () => Array<T>;
}

export type UndoRedoContextType<T extends IWithID> = {
  records: Array<T>;
  execute: (command: ICommand<T>) => void;
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
};
