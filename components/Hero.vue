<template>
    <section class="bg-gray-100">
        <div class="max-w-[1536px] mx-auto relative h-[400px] sm:h-[480px] md:h-[560px] lg:h-[680px] xl:h-[960px]">
            <img :src="HeroImage" alt="Commonhood" class="w-full h-full object-cover 2xl:object-contain 2xl:object-top" />

            <ClientOnly>
                <div class="max-w-[280px] mx-auto text-center absolute top-[112px] left-1/2 transform -translate-x-1/2 sm:max-w-[320px] sm:top-[136px] md:max-w-[440px] md:top-[156px] lg:max-w-[500px] lg:top-[192px] xl:max-w-[640px] xl:top-[260px] 2xl:max-w-[680px] 2xl:top-[240px]">
                    <h1 class="uppercase text-gray-500 text-3xl leading-7 sm:text-4xl sm:leading-8 md:text-[44px] md:leading-10 lg:text-[52px] lg:leading-[48px] xl:text-7xl xl:leading-[64px] 2xl:text-[70px] 2xl:leading-[60px]">Commonhood is</h1>

                    <swiper-container ref="swiperRef" :init="false">
                        <swiper-slide v-for="(item, index) in swiperItems" :key="index">
                            <h3 class="uppercase text-3xl leading-7 sm:text-4xl sm:leading-8 md:text-[44px] md:leading-10 lg:text-[52px] lg:leading-[48px] xl:text-7xl xl:leading-[64px] 2xl:text-[70px] 2xl:leading-[60px]">{{ item }}</h3>
                        </swiper-slide>
                    </swiper-container>
                </div>
            </ClientOnly>
        </div>
    </section>
</template>

<script setup lang="ts">
import HeroImage from 'assets/images/hero.png'

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
