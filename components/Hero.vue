<template>
    <section class="max-w-[1536px] mx-auto relative h-[400px] sm:h-[480px] md:h-[560px] lg:h-[680px] xl:h-[960px]">
        <img :src="HeroImage" alt="Commonhood" class="w-full h-full object-cover" />

        <ClientOnly>
            <div class="max-w-[300px] mx-auto text-center absolute top-[128px] left-1/2 transform -translate-x-1/2 sm:top-[156px] md:max-w-[460px] md:top-[172px] lg:top-[200px] xl:max-w-[544px] xl:top-[288px] 2xl:max-w-[680px] 2xl:top-[260px]">
                <h1 class="uppercase text-gray-500 text-xl leading-5 sm:text-3xl sm:leading-7 md:text-4xl md:leading-9 lg:text-5xl xl:text-6xl 2xl:text-7xl">Commonhood is</h1>

                <swiper-container ref="swiperRef" :init="false">
                    <swiper-slide v-for="(item, index) in swiperItems" :key="index">
                        <h3 class="uppercase text-xl leading-5 sm:text-3xl sm:leading-7 md:text-4xl md:leading-9 lg:text-5xl xl:text-6xl 2xl:text-7xl">{{ item }}</h3>
                    </swiper-slide>
                </swiper-container>

                <p class="text-gray-400 mt-4 text-xs lg:mt-6 lg:text-xl xl:mt-10 2xl:mt-12 2xl:text-2xl">Scroll to discover</p>
            </div>
        </ClientOnly>
    </section>
</template>

<script setup lang="ts">
import HeroImage from 'assets/images/hero.webp'

const swiperRef = ref(null)
const swiperItems: string[] = [
    'relational 1 infrastructure',
    'relational 2 infrastructure',
    'relational 3 infrastructure'
]

const swiper = useSwiper(swiperRef, {
    loop: true,
    autoplay: {
        delay: 3000
    }
})
</script>
