<script setup>

 import Signup from "~/features/signup/user"

</script>

<template>
  <div class="container mx-auto py-[86px]">
    <div class="flex flex-col lg:flex-row items-center">
      <div class="flex-1 w-3/4 mx-auto pt-8 lg:pt-20">
        <div class="w-full md:w-3/4 mx-auto">
          <div class="pb-6">
            <h3 class="text-4xl font-bold text-black">Get Started</h3>
            <span>Connect and match with professionals</span>
          </div>
          <Signup />
          <div class="flex border-t border-ink500 flex-1 flex-col items-center pt-6 mt-6">
            <span>or Create a financial advisor account</span>
            <NuxtLink to="/signup/advisor" class="mt-3 text-primary btn btn-md text-base capitalize bg-white border-primary hover:bg-primary hover:text-white hover:border-main">
              Become an Advisor
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <img src="~/assets/img/login.png" />
      </div>
    </div>
  </div>
</template>