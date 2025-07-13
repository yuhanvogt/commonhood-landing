<template>
    <section class="bg-gray-100">
        <div class="max-w-[1536px] mx-auto relative h-[400px] sm:h-[480px] md:h-[560px] lg:h-[680px] xl:h-[960px]">
            <img :src="HeroImage" alt="Commonhood" class="w-full h-full object-cover 2xl:object-contain 2xl:object-top" />

            <div class="min-w-max mx-auto text-center absolute top-[112px] left-1/2 transform -translate-x-1/2 sm:top-[124px] md:top-[148px] lg:max-w-[500px] lg:top-[180px] xl:max-w-[640px] xl:top-[260px] 2xl:max-w-[680px] 2xl:top-[240px]">
                <h1 class="uppercase mb-1 text-3xl leading-7 sm:mb-2 sm:text-5xl sm:leading-[44px] md:text-[56px] md:leading-[52px] lg:mb-3 lg:text-[68px] lg:leading-[56px] xl:text-8xl xl:leading-[80px]">
                    Mutual Aid<br />Made Visible
                </h1>

                <h3 class="w-[240px] mx-auto text-sm leading-4 sm:w-[280px] sm:text-base sm:leading-4 md:w-[320px] md:text-lg md:leading-5 lg:w-[360px] lg:leading-5 lg:text-xl">
                    A quiet tool to surface what’s needed, what’s offered, and who can respond.
                </h3>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import HeroImage from 'assets/images/hero.png'
</script>
