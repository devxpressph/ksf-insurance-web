<script setup>
  import Section from "~/components/section"
</script>

<template>
  <div class="container mx-auto pt-[86px]">
    <Section 
      title="The best way to connect"
      details="AHub is the foremost platform for financial advisors to connect with clients."
      subDetails="~FREE 30 DAYS TRIAL"
    >
      <template v-slot:graphic>
        <img src="~/assets/img/home-01.png" /> 
      </template>
      
      <template v-slot:cta>
        <div class="flex flex-col lg:flex-row gap-2">
          <NuxtLink to="/signup">
            <ButtonPrimaryFilled label="Try for free" />
          </NuxtLink>
          <NuxtLink to="/pricing">
            <ButtonOutlined label="See how it works" />
          </NuxtLink>
        </div>
      </template>
    </Section>

    <Section
      title="Always free!"
      details="AHub is free for members to find your best fit financial advisor!"
      :reverse="true"
    >
      <template v-slot:graphic>
        <img src="~/assets/img/home-02.png" /> 
      </template>
      
      <template v-slot:cta>
        <div class="flex gap-2">
          <NuxtLink to="/signup">
            <ButtonPrimaryFilled label="Signup now" />
          </NuxtLink>
        </div>
      </template>
    </Section>

    <Section 
      title="Get started today"
      details="Work on your future finances now! We'll help you find the perfect financial advisor!"
    >
      <template v-slot:graphic>
        <img src="~/assets/img/home-03.png" /> 
      </template>
      
      <template v-slot:cta>
        <div class="flex gap-2">
          <NuxtLink to="/signup">
            <ButtonPrimaryFilled label="Get started" />
          </NuxtLink>
        </div>
      </template>
    </Section>
  </div>
</template>