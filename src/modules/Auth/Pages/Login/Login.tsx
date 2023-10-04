import FormControl from '@/components/FormControl/FormControl';
import { useForm } from 'react-hook-form';
import useStyles from './Login.styles';

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({ mode: 'all' });

  const submit = (e: FormValues) => {
    // Auth Login endpoint called here
    console.log(e);
    return;
  };
  const classes = useStyles();

  return (
    <div className={classes.loginForm}>
      <form onSubmit={handleSubmit(submit)}>
        <FormControl
          errors={errors}
          label="User ID"
          name="email"
          register={register('email', { required: 'Please check the user id' })}
          type="text"
        />
        <FormControl
          errors={errors}
          label="Password"
          name="password"
          register={register('password', { required: 'Please check the password' })}
          type="password"
        />

        <button className={classes.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
