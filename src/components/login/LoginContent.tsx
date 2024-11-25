"use client";

import { useIsRegistering } from "@/hooks/useRegisterMode";
import { Button } from "../ui/button";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { Separator } from "../ui/separator";

export function LoginContent() {
  const [isRegistering, toogleForm] = useIsRegistering();

  return (
    <div className='flex min-h-screen items-center justify-center font-serif'>
          <div className="flex flex-col items-start justify-between text-2xl text-oldPaper bg-grayDefault h-screen w-full">
            <span className="p-20">Poems</span>
            <div className="flex flex-col p-20">
              <span>A community of <span className="font-handwriting text-4xl">Poets </span>
                Unleash your <span className="font-handwriting text-4xl">Creativity</span>
              </span>
              <span>Write, read and <span className="font-handwriting text-4xl mb-5">Get inspired...</span></span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-ful space-y-2">
            { isRegistering ? <RegisterForm/> : <LoginForm/> }
            <span className="flex items-center justify-center w-96 text-2xl">
              <Separator className="w-1/3 mx-4"/>
                Or
              <Separator className="w-1/3 mx-4"/>
            </span>
            <Button className="w-96" onClick={toogleForm}>{isRegistering ? "Back to Login" : "Createan Account"}</Button>
          </div>
    </div>
  )
}
