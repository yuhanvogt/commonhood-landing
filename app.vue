<template>
    <NuxtLayout>
        <header class="sticky top-0 z-20 bg-white border-b-2 border-gray-100">
            <AppContainer class="h-16 flex justify-between items-center">
                <NuxtLink to="/">
                    <Logo filled class="h-7" />
                </NuxtLink>

                <Bars3Icon @click="toggleMobileMenu" class="size-8 lg:hidden" />

                <Transition mode="out-in">
                    <div v-show="mobileMenuOpen" class="w-full bg-gray-300 absolute top-0 left-0">
                        <AppContainer>
                            <div class="h-16 flex justify-between items-center">
                                <NuxtLink to="/">
                                    <Logo filled class="h-7" />
                                </NuxtLink>

                                <XMarkIcon @click="toggleMobileMenu" class="size-8 lg:hidden" />
                            </div>

                            <nav class="py-4 flex flex-col items-start">
                                <ul class="mb-3 space-y-3">
                                    <li v-for="item in navItems" :key="item.name">
                                        <NuxtLink :to="item.to" @click="toggleMobileMenu" class="uppercase py-1 text-lg border-black hover:border-b-2">
                                            {{ item.name }}
                                        </NuxtLink>
                                    </li>
                                </ul>

                                <NuxtLink to="https://app.commonhood.cc" external target="_blank" class="h-9 px-4 pt-1 bg-black text-white rounded-full flex items-center gap-2" >
                                    <span class="uppercase text-lg leading-4">launch v1.0</span>
                                    <ArrowUpRightIcon class="size-5 mb-1" />
                                </NuxtLink>
                            </nav>
                        </AppContainer>
                    </div>
                </Transition>

                <nav class="hidden lg:flex items-center gap-6">
                    <ul class="flex items-center gap-6">
                        <li v-for="item in navItems" :key="item.name">
                            <NuxtLink :to="item.to" class="uppercase py-1 text-lg border-black hover:border-b-2">
                                {{ item.name }}
                            </NuxtLink>
                        </li>
                    </ul>

                    <NuxtLink to="https://app.commonhood.cc" external target="_blank" class="h-9 px-4 pt-1 bg-black text-white rounded-full flex items-center gap-2" >
                        <span class="uppercase text-lg leading-4">launch v1.0</span>
                        <ArrowUpRightIcon class="size-5 mb-1" />
                    </NuxtLink>
                </nav>


            </AppContainer>
        </header>

        <main>
            <NuxtPage />
        </main>

        <footer class="pt-16 pb-6 lg:pt-32">
            <AppContainer>
                <p class="md:max-w-[80%] lg:text-xl">
                    Commonhood is an ongoing open-source project stemming for the masters thesis by
                    <a href="https://jonasvogt.com" target="_blank">Jonas Vogt</a>
                    , co-developed by
                    <a href="https://www.bcommonslab.org" target="_blank">Peter Aichner</a>
                    and
                    <a href="https://www.monospace.design/en/" target="_blank">Christoph Buettner</a>
                    , created at the
                    <a href="https://designdisaster.unibz.it" target="_blank">Masters in Eco-Social Design</a>
                    of the
                    <a href="https://www.unibz.it/en/faculties/design-art/" target="_blank">Free University of Bozen-Bolzano</a>
                    . This website is set in Bastardo Grotesk by
                    <a href="https://www.giuliaboggio.xyz" target="_blank">Giulia Boggio</a>
                    , and developed by
                    <a href="https://www.linkedin.com/in/moeinmirkiani/" target="_blank">Moein Mirkiani</a>
                    .
                </p>
            </AppContainer>
        </footer>
    </NuxtLayout>
</template>

<script setup lang="ts">
import Logo from '@/assets/icons/commonhood-logo.svg?component'
import { ArrowUpRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline"

const navItems: { name: string, to: string }[] = [
    { name: 'About', to: '/' },
    { name: 'Changelog', to: '/changelog' },
    { name: 'Colophon', to: '/colophon' }
]

const mobileMenuOpen = ref<boolean>(false)

function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
