<script setup lang="ts">
  const isOpen = ref(false)
  const route = useRoute()

  console.log(route.name,`route`)

  watch(() => route.query, () => isOpen.value = false)
</script>

<template>
  <div class="fixed w-full top-0 bg-gray-50 shadow-sm" :class="{['h-full z-20']: isOpen}">
    <div class="container mx-auto py-1 px-6 xl:px-0 ">
      <div class="flex justify-between items-center py-3">
        <div class="flex items-center gap-2">
          <NuxtLink to="/" class="h-full">
            <img src="~/assets/img/logo.png" class="max-w-[126px]" />
          </NuxtLink>
          <div>
          <ul class="menu menu-horizontal hidden ml-6 md:flex gap-6">
            <NuxtLink to="/" class="hover:text-primary">Home</NuxtLink>
            <NuxtLink to="/pricing" class="hover:text-primary">Pricing</NuxtLink>
            <NuxtLink to="/about" class="hover:text-primary">About us</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-primary">Contact</NuxtLink>
          </ul>
          </div>
        </div>
        <div class="flex gap-2">
          <button  @click="(isOpen = true)" class="btn btn-sm btn-outline flex md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <NuxtLink to="/signup" class="hidden text-white md:flex btn btn-md capitalize bg-main border-main hover:bg-white hover:text-main hover:border-main">Sign up</NuxtLink>
          <NuxtLink to="/login" class="hidden text-black md:flex btn btn-md btn-outline capitalize hover:bg-white hover:text-main hover:border-main">Login</NuxtLink>
        </div>
      </div>
    </div>

    <div v-show="isOpen" class="fixed top-0 right-0 bottom-0 left-p h-screen w-full bg-white/90 z-20">
      <button @click="(isOpen = false)" class="text-gray-500 absolute right-2 top-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
        </svg>
      </button>

      <div class="py-10 px-6">
        <ul class="menu menu-vertical gap-8">
          <NuxtLink to="/" class="hover:text-primary text-4xl uppercase">Home</NuxtLink>
          <NuxtLink to="/pricing" class="hover:text-primary text-4xl uppercase">Pricing</NuxtLink>
          <NuxtLink to="/about" class="hover:text-primary text-4xl uppercase">About us</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-primary text-4xl uppercase">Contact</NuxtLink>
        </ul>
      </div>
    </div>
  </div>
</template>