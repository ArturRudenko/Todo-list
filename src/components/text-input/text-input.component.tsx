import type {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';

interface ITextInputProps {
  defaultValue?: string | number;

  onSubmit(text: string): void;
}

const TextInput: FC<ITextInputProps> = ({defaultValue, onSubmit}) => {
  const {handleSubmit, control} = useForm();

  return (
    <form onSubmit={handleSubmit(({text}) => onSubmit(text))}>
      <Controller
        control={control}
        name="text"
        rules={{required: true}}
        defaultValue={defaultValue ? defaultValue : ''}
        render={({field: {onChange, value}}) => (
          <input onChange={onChange} value={value} type="text" />
        )}
      />
    </form>
  );
};

export {TextInput};
export type {ITextInputProps};
