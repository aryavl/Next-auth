"use client"
import * as z from 'zod'
import React, { useState } from "react";
import CardWrapper from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { LoginSchema } from '@/schemas';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import FormError from '../form-error';
import FormSuccess from '../form-success';
import Image from 'next/image';
import { CardFooter } from '../ui/card';
import Social from './social';
import BackButton from './back-button';
import { fetchUser } from '@/helpers/fetchers';
interface LoginFormProps {
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
  }
const LoginForm = ({backButtonHref,backButtonLabel,showSocial}:LoginFormProps) => {
    const [error,setError] = useState<string | undefined>("")
    const [success,setSuccess] = useState<string | undefined>("")

    const onSubmittt = async(values:z.infer<typeof LoginSchema>)=>{
      setError("")
      setSuccess("")
      const userss= await fetchUser(values)
      console.log(userss);
      
      setSuccess(userss.success)
      if(userss.ok){
      }else{
        setError(userss.error)
      }
    }
    const form =useForm<z.infer<typeof LoginSchema>>({
        resolver:zodResolver(LoginSchema),
        defaultValues:{
            email: "",
            passoword:"",
        }
    })

  return (
    <CardWrapper
      headerLabel="Welcome Back"
    >
        <div className="grid lg:gap-x-8 lg:grid-cols-12 lg:gap-y-8 grid-cols-1  ">
        <div className="hidden lg:col-span-5 lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="rounded-2xl w-full h-full object-cover"
                  alt="imgg"
                  width={1548}
                  height={1000}
                />
              </div>
              <div className="pt-6 pr-6 pb-6 pl-6 lg:col-span-7">
           <div className='mb-4'>   
            <CardFooter>
                <Social/> 
            </CardFooter>
           <hr />
                  </div>
      <Form {...form}>
        <form action=""
        onSubmit={form.handleSubmit(onSubmittt)}
        className='space-y-6'
        >
            <div className='space-y-4'>
                <FormField
                control={form.control}
                name='email'
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input
                            {...field}
                            placeholder='john.foe@example.com'
                            type='email'
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                 <FormField
                control={form.control}
                name='passoword'
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input
                            {...field}
                            placeholder='******'
                            type='password'
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
            </div>
            <FormError message={error}/>
            <FormSuccess message={success}/>
            <Button
            className='w-full'
            type='submit'
            >
                Login
            </Button>
        </form>
      </Form>
      <div className='mt-4'>
      <CardFooter>
            <BackButton
            label={backButtonLabel}
             href={backButtonHref}/>
        </CardFooter>
        </div>
      </div>
      </div>
    </CardWrapper>
  );
};

export default LoginForm;
