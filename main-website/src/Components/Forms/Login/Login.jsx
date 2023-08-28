import LoginBg from '../../../assets/login-bg.png'
import Button from '../../Button'
import { NavLink } from 'react-router-dom'
function Login() {
    return (
        <section className="md:p-10 min-h-screen" style={{
            backgroundImage: `url(${LoginBg})`,
            backgroundSize:'cover',
            backgroundPosition:'100%',
            backgroundRepeat:'no-repeat'

           
        }}>
           <form action="" className='form pb-7 h-auto m-auto mt-8 '>
             <h2>Welcome!</h2>  
             <div className='flex flex-col gap-4 px-5 md:mt-5'>
             <label>Email
             <input type='email' placeholder='example@mail.com'  />
             </label>
             <label>Password
             <input type='password' placeholder='**********************' />
             </label>
             <div className='flex items-center justify-between  w-[90%]'>
                <label className='flex flex-row-reverse items-center justify-center'>Remember me
                    <input type='checkbox'  className='w-[30px] h-3 mt-0 px-1'/>
                </label>
                <p className='text-sm text-[var(--deep-blue)]'>Forgot Password?</p>
             </div>
             </div>
             
             <div className='flex items-center justify-center mt-8'> 
             <Button text='Sign In'  />
             </div>
             <p className='text-[15px] text-center mt-5'>Do not have an account? <NavLink to='/register' style={{color:'var(--deep-blue)',fontWeight:'bold'}}> Sign Up</NavLink> </p>
           </form>
           
        </section>
    )
}

export default Login
