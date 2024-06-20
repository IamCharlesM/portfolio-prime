<template>
  <div class="w-full h-fit grid grid-cols-2 max-w-5xl mx-auto bg-muted p-8">
    <div class="flex flex-col gap-10">
      <div class="flex flex-col">
        <span>Have an awesome idea?</span>
        <span class="text-primary">Let's Discuss</span>
      </div>

      <div class="gap-4 flex flex-col">
        <span class="w-full flex gap-3"><PhoneCall /> 1234567</span>
        <span class="w-full flex gap-3"><PhoneCall /> 1234567</span>
        <span class="w-full flex gap-3"><PhoneCall /> 1234567</span>
      </div>
    </div>
    <div class="flex w-full">
      <form
        @submit="onSubmit"
        class="gap-4 flex flex-col w-full max-w-md mx-auto justify-between"
      >
        <FormField
          v-slot="{ componentField }"
          name="username"
        >
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="full name"
                v-bind="componentField"
              />
            </FormControl>

            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="email"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea
                type="text"
                placeholder="message"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button
          class="w-fit"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PhoneCall } from "lucide-vue-next";

  import { useForm } from "vee-validate";
  import { toTypedSchema } from "@vee-validate/zod";
  import * as z from "zod";

  import { Button } from "@/components/ui/button";
  import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import { Textarea } from "@/components/ui/textarea";

  const formSchema = toTypedSchema(
    z.object({
      username: z.string().min(2).max(50),
    })
  );

  const form = useForm({
    validationSchema: formSchema,
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log("Form submitted!", values);
  });
</script>
