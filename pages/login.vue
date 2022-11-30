<script setup>

 import Login from "~/features/login"

</script>

<template>
  <div class="container mx-auto pt-[86px]">
    <div class="flex flex-col-reverse lg:flex-row items-start">
      <div class="flex-1">
        <img src="~/assets/img/login.png" />
      </div>
      <div class="flex-1 w-3/4 mx-auto pt-8 lg:pt-20">
      <div class="w-full md:w-3/4 mx-auto">
        <div class="pb-6">
          <h3 class="text-4xl font-bold text-black">Login</h3>
        </div>
        <Login />
        <div class="flex border-t border-ink500 flex-1 flex-col items-center pt-6 mt-6">
          <span>or signup for an account</span>
          <NuxtLink to="/signup" class="mt-3 text-primary btn btn-md text-base capitalize bg-white border-primary hover:bg-primary hover:text-white hover:border-main">
            Create a Free Account
          </NuxtLink>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>