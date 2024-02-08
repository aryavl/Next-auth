import LoginForm from '@/components/auth/loginForm'
import React from 'react'

const LoginPage = () => {
  return (
    <LoginForm backButtonHref='/register' backButtonLabel='Dont&apos;t have any account?'/>
  )
}

export default LoginPage