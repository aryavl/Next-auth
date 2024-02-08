import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-auto  hero-bg flex items-center justify-center '>
        <div className=''>
         {children}
        </div>
        
        </div>
  )
}

export default AuthLayout