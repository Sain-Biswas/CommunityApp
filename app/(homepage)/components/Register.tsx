'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import Email from '@/resources/Icons/Email';
import Person from '@/resources/Icons/Person';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import axios from 'axios';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';


const registerSchema = z.object({
    name: z.string({
        required_error: 'First Name is Required.'
    }),
    email: z.string().email(),
    password: z.string().min(6, {
        message: 'Password must be between 6 to 20 characters.'
    }).max(20, {
        message: 'Password must be between 6 to 20 characters.'
    }),
});

type registerFormType = z.infer<typeof registerSchema>

const Register = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const registerForm = useForm<registerFormType>({
        resolver: zodResolver(registerSchema),
    })
    async function onRegisterSubmit(values: registerFormType) {
        setIsUploading(true);
        await axios.post('/api/register', {
            name: values.name,
            email: values.email,
            password: values.password,
        })
            .then((res) => toast.success('Account created Successfully.'))
            .catch((err) => toast.error("Server Error."))
            .finally(() => setIsUploading(false))
    }

    return (
        <Form {...registerForm}>
            <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className='w-full font-mono'>
                <FormField
                    control={registerForm.control}
                    name='name'
                    render={({ field }) => (
                        <div className='rounded-xl p-1 w-full bg-card ring-1 flex justify-center mb-2 items-center'>
                            <FormItem className='px-4 flex-grow'>
                                <FormLabel className='p-0 m-0 h-1 text-sm'>Name</FormLabel>
                                <FormControl className='m-0 p-0'>
                                    <Input className='border-none h-5 shadow-none focus-visible:ring-0' placeholder='Name' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            <Person className='mr-1' />
                        </div>
                    )}
                />
                <FormField
                    control={registerForm.control}
                    name='email'
                    render={({ field }) => (
                        <div className='rounded-xl p-1 w-full bg-card ring-1 flex justify-center items-center'>
                            <FormItem className='px-4 flex-grow'>
                                <FormLabel className='p-0 m-0 h-1 text-sm'>Email</FormLabel>
                                <FormControl className='m-0 p-0'>
                                    <Input className='border-none h-5 shadow-none focus-visible:ring-0' placeholder='Email' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            <Email className='mr-1' />
                        </div>
                    )}
                />
                <FormField
                    control={registerForm.control}
                    name='password'
                    render={({ field }) => (
                        <div className='my-2 rounded-xl p-1 w-full bg-card ring-1 flex justify-center items-center'>
                            <FormItem className='px-4 flex-grow'>
                                <FormLabel className='text-sm'>Password</FormLabel>
                                <FormControl className='m-0 p-0'>
                                    <Input
                                        className='border-none h-5 shadow-none focus-visible:ring-0'
                                        placeholder='Password'
                                        type={(showPassword) ? 'text' : 'password'}
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            <Button
                                size='icon'
                                variant='ghost'
                                onClick={() => setShowPassword(current => !current)}
                            >
                                {
                                    (showPassword) ? <EyeOpenIcon /> : <EyeClosedIcon />
                                }
                            </Button>
                        </div>
                    )}
                />
                <Button disabled={isUploading} type='submit' size='lg' className='text-lg font-mono w-full'>Register</Button>
            </form>
        </Form>
    )
}

export default Register