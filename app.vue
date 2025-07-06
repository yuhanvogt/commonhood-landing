<template>
    <NuxtLayout>
        <header class="sticky top-0 bg-white border-b-2 border-gray-100">
            <AppContainer class="h-24 flex justify-between items-center">
                <Bars3Icon @click="toggleMobileMenu" class="size-10 md:hidden" />

                <Transition mode="out-in">
                    <div v-show="mobileMenuOpen" class="w-full bg-gray-300 absolute top-0 left-0">
                        <AppContainer>
                            <div class="h-24 flex justify-between items-center">
                                <XMarkIcon @click="toggleMobileMenu" class="size-10 md:hidden" />

                                <NuxtLink to="https://google.com" external target="_blank" class="h-12 px-6 pt-1 bg-black text-white rounded-full flex items-center gap-4" >
                                    <span class="uppercase text-2xl leading-4">launch v1.0</span>

                                    <ArrowUpRightIcon class="size-6 mb-1" />
                                </NuxtLink>
                            </div>

                            <nav class="py-6">
                                <ul class="space-y-6">
                                    <li>
                                        <NuxtLink :to="{ name: 'index', hash: '#about' }" @click="toggleMobileMenu" class="uppercase py-3 text-3xl">
                                            About
                                        </NuxtLink>
                                    </li>

                                    <li>
                                        <NuxtLink :to="{ name: 'index', hash: '#features' }" @click="toggleMobileMenu" class="uppercase py-3 text-3xl">
                                            Features
                                        </NuxtLink>
                                    </li>

                                    <li>
                                        <NuxtLink :to="{ name: 'index', hash: '#connect' }" @click="toggleMobileMenu" class="uppercase py-3 text-3xl">
                                            Connect
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </nav>
                        </AppContainer>
                    </div>
                </Transition>

                <nav class="hidden md:block">
                    <ul class="flex items-center gap-6">
                        <li>
                            <NuxtLink :to="{ name: 'index', hash: '#about' }" class="uppercase py-3 text-3xl border-black hover:border-b-2">
                                About
                            </NuxtLink>
                        </li>

                        <li>
                            <NuxtLink :to="{ name: 'index', hash: '#features' }" class="uppercase py-3 text-3xl border-black hover:border-b-2">
                                Features
                            </NuxtLink>
                        </li>

                        <li>
                            <NuxtLink :to="{ name: 'index', hash: '#connect' }" class="uppercase py-3 text-3xl border-black hover:border-b-2">
                                Connect
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>

                <NuxtLink to="https://google.com" external target="_blank" class="h-12 px-6 pt-1 bg-black text-white rounded-full flex items-center gap-4" >
                    <span class="uppercase text-2xl leading-4">launch v1.0</span>

                    <ArrowUpRightIcon class="size-6 mb-1" />
                </NuxtLink>
            </AppContainer>
        </header>

        <main>
            <NuxtPage/>
        </main>

        <footer class="pt-16 pb-6 lg:pt-32">
            <AppContainer>
                <p class="md:max-w-[80%] lg:text-xl">
                    Commonhood is an ongoing open-source project stemming for the masters thesis by Jonas Vogt, co-developed by Peter Aichner and Christoph Buettner, created at the Masters in Eco-Social Design of the Free University of Bozen-Bolzano. This website is set in Bastardo Grotesk by Giulia Boggio, and developed by Moein Mirkiani.
                </p>
            </AppContainer>
        </footer>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowUpRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline"

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
