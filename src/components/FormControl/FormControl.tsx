import React, { ComponentProps } from 'react';
import useStyles from './FormControl.style';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

type IFormControl = {
  label?: string;
  register?: UseFormRegisterReturn;
  errors?: FieldErrors;
  containerClass?: string;
} & ComponentProps<'input'>;

const FormControl = ({ containerClass, errors, label, register, ...rest }: IFormControl) => {
  const error = errors ? errors[rest.name as keyof typeof errors] : undefined;
  const classes = useStyles();

  return (
    <div
      className={`${classes.container} ${containerClass ? containerClass : ''} ${
        error ? classes.controlError : ''
      }`}
    >
      <div className={classes.controlGroup}>
        {label ? <label htmlFor={rest.id}>{label}</label> : null}
        <input {...register} {...rest} />
        {error && <p style={{ marginTop: '5px' }}>{error?.message?.toString()}</p>}
      </div>
    </div>
  );
};

export default React.memo(FormControl);
