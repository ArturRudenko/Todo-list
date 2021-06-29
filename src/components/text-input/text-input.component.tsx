import type {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';

interface ITextInputProps {
  defaultValue?: string;

  onSubmit(text: string): void;
}

interface ITodoItemCreateFormDTO {
  text: string;
}

const TextInput: FC<ITextInputProps> = ({defaultValue, onSubmit}) => {
  const {handleSubmit, control, reset} = useForm<ITodoItemCreateFormDTO>();

  const onFormSubmit = (dto: ITodoItemCreateFormDTO): void => {
    onSubmit(dto.text);
    reset({text: ''});
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
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
