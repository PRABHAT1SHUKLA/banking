import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions';

const SignUp = async () => {
    const loggedinUser = await getLoggedInUser();
    console.log(loggedinUser)
  
  
    return (

    
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  )
}

export default SignUp