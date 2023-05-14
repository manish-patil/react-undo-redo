import React from 'react';

type Props = {
  done: boolean;
  onChange: (value: boolean) => void;
};

export const Done = (props: Props) => {
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    setDone(props.done);
  }, [props.done]);

  return (
    <div className='row'>
      <div className='cellLabel'>
        <label>Done</label>
      </div>
      <div
        className='cellContent'
        style={{ alignItems: 'flex-start', marginLeft: -4 }}
      >
        <input
          type='checkbox'
          checked={done}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setDone(e.currentTarget.checked);
            props.onChange(e.currentTarget.checked);
          }}
        />
      </div>
    </div>
  );
};
