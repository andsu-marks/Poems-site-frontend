"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function RegisterForm() {
  const router = useRouter();

  const formSchema = z.object({
    username: z.string().min(3, { message: "Password must be at least 3 characters." }).max(50),
    email: z.string().email({ message: "Invalid email address" }),
    confirmEmail: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." }).max(50),
    confirmPassword: z.string().min(6, { message: "Confirm password must be at least 6 characters." }),
  }).refine(data => data.email === data.confirmEmail, { 
    message: "Emails do not match.", 
    path: ["confirmEmail"] 
  }).refine(data => data.password === data.confirmPassword, { 
    message: "Passwords do not match.", 
    path: ["confirmPassword"] 
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: ""
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push("./home");
    return null;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-96 space-y-4">
        <div className="flex flex-col items-center">
          <span className="mb-5 text-2xl font-semibold">Register</span> 
          <span>Please enter your info below to create an account</span>  
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" placeholder="username" {...field}/>
              </FormControl>
              <FormMessage>{form.formState.errors.username?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="email" {...field}/>
              </FormControl>
              <FormMessage>{form.formState.errors.email?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmEmail"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="confirm email" {...field}/>
              </FormControl>
              <FormMessage>{form.formState.errors.confirmEmail?.message}</FormMessage>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="password" {...field}/>
              </FormControl>
              <FormMessage>{form.formState.errors.password?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="confirm password" {...field}/>
              </FormControl>
              <FormMessage>{form.formState.errors.confirmPassword?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Save</Button>
      </form>
    </Form>
  )
}