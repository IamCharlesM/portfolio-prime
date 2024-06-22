<template>
  <div class="flex w-full">
    <form
      class="gap-4 flex flex-col w-full max-w-md mx-auto justify-between"
      @submit="onSubmit"
    >
      <FormField
        name="fullName"
        v-slot="{ field }"
      >
        <FormItem>
          <FormLabel for="fullName">Full Name</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder="full name"
              v-bind="field"
              id="fullName"
              name="entry.2131897017"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField
        name="email"
        v-slot="{ field }"
      >
        <FormItem>
          <FormLabel for="email">Email</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder="email"
              v-bind="field"
              id="email"
              name="entry.67801850"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField
        name="message"
        v-slot="{ field }"
      >
        <FormItem>
          <FormLabel for="message">Message</FormLabel>
          <FormControl>
            <Textarea
              type="text"
              placeholder="message"
              v-bind="field"
              id="message"
              name="entry.188599615"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <Button
        class="w-fit"
        type="submit"
        >Submit</Button
      >
    </form>
  </div>
</template>

<script setup lang="ts">
  import { useForm } from "vee-validate";
  import { toTypedSchema } from "@vee-validate/zod";
  import * as z from "zod";

  import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";

  const formSchema = toTypedSchema(
    z.object({
      fullName: z.string().min(2).max(50),
      email: z.string().email(),
      message: z.string().min(2).max(500),
    })
  );

  const form = useForm({
    validationSchema: formSchema,
  });

  const emit = defineEmits(["emit"]);

  const onSubmit = form.handleSubmit(
    (values: {
      fullName: string | Blob;
      email: string | Blob;
      message: string | Blob;
    }) => {
      const formData = new FormData();
      formData.append("entry.2131897017", values.fullName);
      formData.append("entry.67801850", values.email);
      formData.append("entry.188599615", values.message);

      fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfEA6HDpmPPf6aY-HyvfCiQ_xlCL4N5xnuvXOj4JdASmdAgSQ/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      )
        .then(() => {
          emit("emit", "success");
          form.resetForm();
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    }
  );
</script>
