<script setup lang="ts">

import { LoginUser } from './api'

interface FormProps {
  email: string
  password: string
}

const submitHandler = async (formData: FormProps) => {
  const data = await LoginUser(formData)

  if (data?.user) {
    return navigateTo("/", { replace: true })
  }
}

</script>

<template>
  <div id="login">
    <FormKit
      type="form"
      :actions="false"
      @submit="submitHandler"
    >
      <FormKit
        id="email"
        type="email"
        label="Email"
        name="email"
        validation="required"
      />

      <FormKit
        id="password"
        type="password"
        label="Password"
        name="password"
        validation="required"
      />

      <div class="mb-4 flex justify-end">
        <NuxtLink to="/forgot-password" class="text-sm text-light hover:text-primary">Forgot Password?</NuxtLink>
      </div>

      <button
        class="mt-3 w-full text-white btn btn-md text-base capitalize bg-primary border-primary hover:bg-white hover:text-primary hover:border-main"
          on:click="submitHandler"
        >
        Submit
      </button>
    </FormKit>
  </div>
</template>