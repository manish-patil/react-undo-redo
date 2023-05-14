import React from 'react';

type Props = {
  description: string;
  onChange: (value: string) => void;
};

export const Description = (props: Props) => {
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setDescription(props.description!);
  }, [props.description]);

  const handleOnChange = () => {
    props.onChange(description);
  };

  return (
    <div className='row'>
      <div className='cellLabel'>
        <label>Description</label>
      </div>
      <div className='cellContent'>
        <input
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.code === 'NumpadEnter' || e.code === 'Enter') {
              handleOnChange();
            }
          }}
          onBlur={() => handleOnChange()}
        />
      </div>
    </div>
  );
};
