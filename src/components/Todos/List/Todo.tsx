import React from 'react';
import { ITodo } from './../../../types';
import ChangePropertyCommand from '../../../commands/ChangePropertyCommand';
import { UndoRedoContext } from '../../../UndoRedoProvider';
import { Title } from '../Editor/Title';
import { Description } from '../Editor/Description';
import { Done } from '../Editor/Done';

type Props = {
  todo: ITodo;
};

const Todo = (props: Props) => {
  const undoRedoContext = React.useContext(UndoRedoContext);
  const [todo, setTodo] = React.useState<ITodo>(props.todo);

  React.useEffect(() => {
    setTodo(props.todo);
  }, [props.todo]);

  const onChangeTitle = (value: string) => {
    setTodo((prev) => {
      const newTodo = { ...prev, title: value };

      undoRedoContext?.execute(
        new ChangePropertyCommand(undoRedoContext.records, newTodo, 'title')
      );

      return newTodo;
    });
  };

  const onChangeDescription = (value: string) => {
    setTodo((prev) => {
      const newTodo = { ...prev, description: value };

      undoRedoContext?.execute(
        new ChangePropertyCommand(
          undoRedoContext.records,
          newTodo,
          'description'
        )
      );

      return newTodo;
    });
  };

  const onChangeDone = (value: boolean) => {
    setTodo((prev) => {
      const newTodo = { ...prev, done: value };

      return newTodo;
    });

    undoRedoContext?.execute(
      new ChangePropertyCommand(
        undoRedoContext.records,
        { ...todo, done: !todo.done },
        'done'
      )
    );
  };

  return (
    <div className='todo'>
      <Title title={todo?.title} onChange={onChangeTitle} />
      <Description
        description={todo?.description}
        onChange={onChangeDescription}
      />
      <Done done={todo?.done || false} onChange={onChangeDone} />
    </div>
  );
};

export default Todo;
