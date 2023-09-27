import FormControl from "@/components/FormControl/FormControl"
import { useForm } from "react-hook-form";
import useStyles from './Login.styles';

type FormValues = {
    email: string;
    password: string;
};

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ mode: 'all' });
    const submit = () => {
        // Auth Login endpoint called here 
        
        return;
    }
    const classes = useStyles();

    return (
      <div className={classes.loginForm}>
          <form onSubmit={handleSubmit(submit)}>
            <FormControl
              name='email'
              type='text'
              label='User ID' 
              register={register("email", { required: 'Please check the user id' })}
              errors={errors}
            />
            <FormControl
              name='password'
              type='password'
              label='Password' 
              register={register("password", { required: 'Please check the password' })}
              errors={errors}
            />

            <button type="submit" className={classes.button}>Login</button>
          </form>
      </div>
    )
}

export default Login;