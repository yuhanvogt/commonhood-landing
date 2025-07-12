<template>
    <section class="max-w-[1536px] mx-auto relative h-[400px] sm:h-[480px] md:h-[560px] lg:h-[680px] xl:h-[960px]">
        <img :src="HeroImage" alt="Commonhood" class="w-full h-full object-cover" />

        <ClientOnly>
            <div class="max-w-[240px] mx-auto text-center absolute top-[136px] left-1/2 transform -translate-x-1/2 sm:max-w-[320px] sm:top-[156px] md:max-w-[400px] md:top-[188px] lg:max-w-[500px] lg:top-[212px] xl:max-w-[600px] xl:top-[308px] 2xl:max-w-[760px] 2xl:top-[280px]">
                <h1 class="uppercase text-gray-500 text-2xl leading-6 sm:text-4xl sm:leading-8 md:text-[42px] md:leading-9 lg:text-[52px] lg:leading-[48px] xl:text-[68px] xl:leading-[60px] 2xl:text-[84px] 2xl:leading-[72px]">Commonhood is</h1>

                <swiper-container ref="swiperRef" :init="false">
                    <swiper-slide v-for="(item, index) in swiperItems" :key="index">
                        <h3 class="uppercase text-2xl leading-6 sm:text-4xl sm:leading-8 md:text-[42px] md:leading-9 lg:text-[52px] lg:leading-[48px] xl:text-[68px] xl:leading-[60px] 2xl:text-[84px] 2xl:leading-[72px]">{{ item }}</h3>
                    </swiper-slide>
                </swiper-container>
            </div>
        </ClientOnly>
    </section>
</template>

<script setup lang="ts">
import HeroImage from 'assets/images/hero.webp'

const swiperRef = ref(null)
const swiperItems: string[] = [
    'relational infrastructure',
    'future in practice',
    'tech for togetherness',
    'shared abundance',
    'post-market logic',
    'radical care'
]

const swiper = useSwiper(swiperRef, {
    loop: true,
    autoplay: {
        delay: 3000
    }
})
</script>
