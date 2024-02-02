import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateUserName } from '../../features/fetch/fetchdata';
import { useNavigate } from "react-router-dom"
import './registration.css'

const Registration = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, watch } = useForm();

  const password = watch("password"); // Watching the "password" field directly

  const onSubmit = (data) => {
    dispatch(updateUserName({ userName: data.firstName }));
    navigate("/")
  };

  return (
    <div className='form-box'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='firstName'
          type="text"
          placeholder='Enter your first name'
          {...register("firstName", {
            required: "First name is required",
            minLength: { value: 3, message: "Must be at least 3 characters long" },
            maxLength: { value: 30, message: "Cannot exceed 30 characters" }
          })}
        />
        {errors.firstName && <p className='error'>{errors.firstName.message}</p>}

        <input
          name='lastName'
          type='text'
          placeholder='Enter your last name'
          {...register("lastName", {
            required: "Last name is required"
          })}
        />
        {errors.lastName && <p className='error'>{errors.lastName.message}</p>}

        <input
          name='email'
          type='email'
          placeholder='Enter your email'
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address"
            }
          })}
        />
        {errors.email && <p className='error'>{errors.email.message}</p>}

        <input
          type='password'
          name="password"
          placeholder='Enter your password'
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 10,
              message: "Minimum length should be 10"
            },
            maxLength: {
              value: 20,
              message: "Max length 20"
            },
            pattern: {
              value: /^(?=.*[!@#$%^&*()])/,
              message: "Password must contain at least one special character"
            }
          })}
        />
        {errors.password && <p className='error'>{errors.password.message}</p>}

        <input
          type='password'
          name="repeatPassword"
          placeholder='Repeat your password'
          {...register("repeatPassword", {
            required: "Please repeat your password ",
            validate: value => value === password || "Passwords do not match"
          })}
        />
        {errors.repeatPassword && <p className='error'>{errors.repeatPassword.message}</p>}

        <button className='register-button' type="submit">{isSubmitSuccessful ? 'Registered!' : 'Register'}</button>
      </form>
    </div>
  );
};

export default Registration;