<script setup>

 import Contact from "~/features/contact"

</script>

<template>
  <div class="container mx-auto pt-[86px]">
    <div class="flex flex-col-reverse lg:flex-row items-start">
      <div class="flex-1">
        <img src="~/assets/img/contact.png" />
      </div>
      <div class="flex-1 w-3/4 mx-auto pt-8 lg:pt-20">
      <div class="w-full md:w-3/4 mx-auto">
        <div class="pb-6">
          <h3 class="text-4xl font-bold text-black">Contact us</h3>
        </div>
        <Contact />
      </div>
      </div>
    </div>
  </div>
</template>