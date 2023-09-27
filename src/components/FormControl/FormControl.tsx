import React, { ComponentProps } from 'react';
import useStyles from './FormControl.style';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

type IFormControl = {
    label?: string,
    register: UseFormRegisterReturn,
    errors: FieldErrors
} & ComponentProps<'input'>

const FormControl = ({
  label,
  name,
  register,
  errors,
  ...rest
}: IFormControl) => {
  
    const error = errors[name as keyof typeof errors];
    const classes = useStyles();

    return (
      <div className={`${classes.container} ${(error) ? classes.controlError : ''}`}>
        <div className={classes.controlGroup}>
          <label htmlFor={name}>{label}</label>
          <input id={name} {...register} {...rest} />
          {error && <p style={{ marginTop: '5px' }}>{error?.message?.toString()}</p>}
        </div>
      </div>
    );
};

export default React.memo(FormControl);