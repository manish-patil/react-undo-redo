import React from 'react';

type Props = {
  title: string;
  onChange: (value: string) => void;
};

export const Title = (props: Props) => {
  const [title, setTitle] = React.useState('');

  React.useEffect(() => {
    setTitle(props.title);
  }, [props.title]);

  const handleOnChange = () => {
    props.onChange(title);
  };

  return (
    <div className='row'>
      <div className='cellLabel'>
        <label>Title</label>
      </div>
      <div className='cellContent'>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.code === 'NumpadEnter' || e.code === 'Enter') {
              console.log(e.code);
              handleOnChange();
            }
          }}
          onBlur={() => handleOnChange()}
        />
      </div>
    </div>
  );
};
