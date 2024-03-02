'use client';

import { ModeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import background from '../../public/Background.jpg';
import logo from "../../public/Premium.png";
import Image from "next/image";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

export default function Home() {
  const [working, setWorking] = useState<'LOG IN' | 'REGISTER'>('LOG IN');

  function workingSwitcher() {
    if (working === 'LOG IN')
      setWorking('REGISTER');
    else
      setWorking('LOG IN');
  };

  return (
    <main className="sm:bg-first-image">
      <div className="min-h-screen flex flex-col p-2 bg-gradient-to-br from-background from-30% dark:from-40%  to-transparent">
        <nav>
          <Image
            src={logo}
            alt="CONNECT SPHERE"
            className="h-64 w-64 text-primary z-10"
          />
        </nav>
        <div className='flex-grow z-10 flex flex-col justify-center md:pl-8'>
          <div>
            <p className='font-extrabold text-slate-500'>{(working === 'LOG IN') ? 'CHECK OUT ON FRIENDS' : 'START FOR FREE'}</p>
            <p className='font-extrabold text-5xl'>{(working === 'LOG IN') ? 'Log in to your account' : 'Create new account'} <span className='text-9xl leading-3 text-primary'>.</span> </p>
            <p className='py-2 text-slate-500 font-mono text-sm'>{(working === 'LOG IN') ? 'New To Campus Connect?' : 'Already A Member?'} <Button onClick={workingSwitcher} className='bg-transparent text-primary' variant='link'>{(working !== 'LOG IN') ? 'Log in' : 'Register'}</Button> </p>
          </div>
          <div
            className='w-full sm:w-[26rem]'
          >
            {
              (working === 'LOG IN') ? (
                <Login />
              ) : (
                <Register />
              )
            }
          </div>
        </div>
        <div className="absolute z-10 right-4 top-4">
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}