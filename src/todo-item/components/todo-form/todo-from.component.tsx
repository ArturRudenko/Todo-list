import type {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';

interface ITodoFormProps {
  defaultValue?: string;

  onSubmit(dto: ITodoItemCreateFormDto): void;
}

interface ITodoItemCreateFormDto {
  text: string;
}

const TodoForm: FC<ITodoFormProps> = ({defaultValue, onSubmit}) => {
  const {handleSubmit, control, reset} = useForm<ITodoItemCreateFormDto>();

  const onFormSubmit = (dto: ITodoItemCreateFormDto): void => {
    onSubmit(dto);
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

export {TodoForm};
export type {ITodoFormProps, ITodoItemCreateFormDto};
