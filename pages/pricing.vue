<template>
  <div class="container mx-auto py-[86px]">
    <div class="flex flex-col items-center py-12 px-6">
      <h3 class="text-4xl font-bold text-black">Pricing</h3>
      <p>Our pricing is not expensive, but it's not cheap either, it's exactly what it should be.</p>
    </div>

    <div class="flex flex-col lg:flex-row items-center justify-center gap-4">
      <Pricing
        title="Basic"
        price="999"
        :infos="[
          'For starting financial advisor',
          '30 connects per month',
          'Advisor profile',
          'Client messaging',
          'Client search',
          'Profile match',
          '-',
          '-'
        ]"
      />
      <Pricing
        title="Pro"
        price="1499"
        :infos="[
          'For experienced financial advisors',
          '50 connects per month',
          'Everything basic',
          'Content feeds',
          'Verified profile',
          'Ad-on Calendly',
          'Featured profile',
          '-'
        ]"
        :active="true"
      />
      <Pricing
        title="Elite"
        price="1999"
        :infos="[
          'For highly profiled financial advisors',
          'Unlimited connects',
          'Everything pro',
          'Featured search',
          'Sponsored contents',
          'Coupon credits',
          'Merch and giveaways',
          'Physical call card'
        ]"
      />
    </div>
  </div>
</template>