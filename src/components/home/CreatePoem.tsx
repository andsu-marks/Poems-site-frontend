"use client";

import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { Textarea } from "../ui/textarea";

export function CreatePoem() {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  const formSchema = z.object({
    title: z.string().max(50, { message: "title must have a maximum of 50 characters" }),
    content: z.string().max(200, { message: "Content must have a maximum of 50 characters" })
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: ""
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    const createPoem = await axios.post(`${url}/api/poems`, values);
    console.log(createPoem);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add your Poem</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={ form.handleSubmit(onSubmit) } className="w-full" >
            <FormField
              control={ form.control }
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Add a title" { ...field }/>
                  </FormControl>
                  <FormMessage>{ form.formState.errors.title?.message }</FormMessage>
                </FormItem>
              )}
            />

              <FormField
              control={ form.control }
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Add your poem" { ...field }/>
                  </FormControl>
                  <FormMessage>{ form.formState.errors.content?.message }</FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit">Add</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}