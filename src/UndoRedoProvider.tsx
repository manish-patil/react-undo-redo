import React from 'react';
import { ITodo, ICommand, UndoRedoContextType, Record } from './types';

export const UndoRedoContext =
  React.createContext<UndoRedoContextType<Record> | null>(null);

type CommandStack = {
  stack: Array<ICommand<ITodo>>;
  stackPointer: number;
};

export const UndoRedoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const commandStack = React.useRef<CommandStack>({
    stack: [],
    stackPointer: -1,
  });

  const [records, setRecords] = React.useState<Record[]>([]);

  const execute = (command: ICommand<ITodo>) => {
    commandStack.current = {
      ...commandStack.current,
      stack: [
        ...commandStack.current.stack.slice(
          0,
          commandStack.current.stackPointer + 1
        ),
        command,
      ],
      stackPointer: commandStack.current.stackPointer + 1,
    };

    setRecords(command.execute());

    // console.log(
    //   'Execute',
    //   commandStack.current.stack.length,
    //   commandStack.current.stackPointer
    // );
  };

  const undo = () => {
    const previousCommandPointer = commandStack.current.stackPointer - 1;

    setRecords(
      commandStack.current.stack[commandStack.current.stackPointer].undo()
    );

    commandStack.current = {
      ...commandStack.current,
      stackPointer: previousCommandPointer,
    };

    // console.log(
    //   'Undo',
    //   commandStack.current.stack.length,
    //   commandStack.current.stackPointer
    // );
  };

  const redo = () => {
    const nextCommandPointer = commandStack.current.stackPointer + 1;

    setRecords(commandStack.current.stack[nextCommandPointer].redo());

    commandStack.current = {
      ...commandStack.current,
      stackPointer: nextCommandPointer,
    };

    // console.log(
    //   'Redo',
    //   commandStack.current.stack.length,
    //   commandStack.current.stackPointer
    // );
  };

  const canUndo = () => {
    return commandStack.current.stackPointer >= 0;
  };

  const canRedo = () => {
    return (
      // stackPointer is Zero based
      commandStack.current.stackPointer + 1 < commandStack.current.stack.length
    );
  };

  return (
    <UndoRedoContext.Provider
      value={{
        records,
        execute,
        undo,
        redo,
        canUndo,
        canRedo,
      }}
    >
      {children}
    </UndoRedoContext.Provider>
  );
};
