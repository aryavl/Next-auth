import RegisterForm from '@/components/auth/registerForm'
import React from 'react'

const Register = () => {
  return (
    <>
    <RegisterForm backButtonHref='/login' backButtonLabel='Already have an account?'/>
    </>
  )
}

export default Register