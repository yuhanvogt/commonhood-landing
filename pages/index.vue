<template>
    <Hero />

    <section class="bg-gray-100 py-6 scroll-mt-24 lg:py-10">
        <AppContainer class="space-y-6 lg:space-y-10">
            <p class="text-2xl lg:text-5xl">
                Commonhood is a prototype digital platform developed through research in design, political economy, and technology. It supports groups in organising shared provisioning without relying on markets, money, or extractive platform logics.
            </p>

            <p class="indent-6 text-2xl lg:indent-20 lg:text-5xl">
                Born out of collective questions about how we meet needs together, Commonhood enables communities to articulate, share, and connect offers and needs in a way that centres trust, slowness, and care.
            </p>

            <p class="indent-6 text-2xl lg:indent-20 lg:text-5xl">
                Commonhood is not for "scaling communities", but a tool designed to surface relational potential and make the commons feel more real. It continues to be developed through a process of iterative design, partnership, and testing with people already engaged in diverse economies.
            </p>

            <img :src="CommonhoodIntroImage" alt="Commonhood Intro Image" class="w-full">
        </AppContainer>
    </section>

    <section class="bg-gray-100 py-6 lg:py-10">
        <AppContainer class="space-y-6 lg:space-y-10">
            <h2 class="text-2xl lg:text-5xl">
                How does it work?
            </h2>

            <p class="indent-6 text-2xl lg:indent-20 lg:text-5xl">
                A group forms a constellation: a defined collective with shared context and mutual commitments. Participants in that constellation can:
            </p>

            <p class="indent-6 text-2xl lg:indent-20 lg:text-5xl">
                Add their own offers and needs, browse the constellation's relational commons, explore matching relationships surfaced through a hybrid logic (semantic similarity + shared value orientation), and reach out beyond the platform to connect, coordinate, or collaborate
            </p>

            <p class="indent-6 text-2xl lg:indent-20 lg:text-5xl">
                Participants decide which entries are visible, and to whom. Access to each constellation is held through real-life relationships, not open sign-ups.
            </p>
        </AppContainer>
    </section>

    <section class="bg-gray-100 py-10 scroll-mt-24 lg:py-20">
        <AppContainer class="grid grid-cols-12 gap-y-6 gap-x-0 md:gap-x-10">
            <div class="col-span-12 md:col-span-6 lg:col-span-8">
                <img :src="ContributeFeatureImage" alt="Commonhood Features - Contribute" class="w-full">
            </div>

            <div class="col-span-12 md:col-span-6 lg:col-span-4">
                <p class="mb-6 text-2xl lg:text-4xl xl:text-5xl">
                    Contribute offers and needs that reflect your capacities and situations
                </p>

                <span class="inline-block p-2 mb-2 leading-3 text-sm text-gray-500 border border-gray-500 rounded-full">Coming soon</span>

                <p class="text-xl text-gray-500">
                    Collective offers and needs, surfaced when multiple participants overlap
                </p>
            </div>

            <div class="col-span-12 md:col-span-6 lg:col-span-8">
                <img :src="BrowseFeatureImage" alt="Commonhood Features - Browse" class="w-full">
            </div>

            <div class="col-span-12 md:col-span-6 lg:col-span-4">
                <p class="text-2xl lg:text-4xl xl:text-5xl">
                    Browse contributions from others
                </p>
            </div>

            <div class="col-span-12 md:col-span-6 lg:col-span-8">
                <img :src="DiscoverFeatureImage" alt="Commonhood Features - Discover" class="w-full">
            </div>

            <div class="col-span-12 md:col-span-6 lg:col-span-4">
                <p class="mb-6 text-2xl lg:text-4xl xl:text-5xl">
                    Discover matches based on what you need or what you offer
                </p>

                <span class="inline-block p-2 mb-2 leading-3 text-sm text-gray-500 border border-gray-500 rounded-full">Coming soon</span>

                <p class="text-xl text-gray-500">
                    Form connections across constellations and enable translocal reciprocity
                </p>
            </div>

            <div class="col-span-12 md:col-span-6 lg:col-span-8">
                <img :src="LearnFeatureImage" alt="Commonhood Features - Learn" class="w-full">
            </div>

            <div class="col-span-12 md:col-span-6 lg:col-span-4">
                <p class="mb-6 text-2xl lg:text-4xl xl:text-5xl">
                    Learn why a match might matter
                </p>

                <span class="inline-block p-2 mb-2 leading-3 text-sm text-gray-500 border border-gray-500 rounded-full">Coming soon</span>

                <p class="text-xl text-gray-500">
                    Community storytelling to reflect on shared provisioning patterns
                </p>
            </div>
        </AppContainer>
    </section>

    <section class="bg-gray-100 py-6 lg:py-10">
        <AppContainer class="space-y-6 lg:space-y-10">
            <p class="text-2xl lg:text-5xl">
                Commonhood is not just another platform. It is built to resist extractive defaults and support collective autonomy. Here’s how it stands apart:
            </p>

            <p class="indent-6 text-2xl lg:indent-20 lg:text-5xl">
                Selective permeability: No open sign-up. Joining a constellation requires real-world trust, and shared commitments.
            </p>

            <p class="indent-6 text-2xl lg:indent-20 lg:text-5xl">
                Peer governance: Decisions are made in facilitated assemblies using consent-based methods like sociocracy.
            </p>

            <p class="indent-6 text-2xl lg:indent-20 lg:text-5xl">
                Cash-free: No money changes hands. The platform supports needs and capacities, not transactions.
            </p>
        </AppContainer>
    </section>

    <section>
        <AppContainer>
            <Coversation />
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import CommonhoodIntroImage from 'assets/images/commonhood-intro.webp'
import ContributeFeatureImage from 'assets/images/features-contribute.webp'
import BrowseFeatureImage from 'assets/images/features-browse.webp'
import DiscoverFeatureImage from 'assets/images/features-discover.webp'
import LearnFeatureImage from 'assets/images/features-learn.webp'
import OGImage from 'assets/images/og-image.png'
import Coversation from "~/components/Coversation.vue";

definePageMeta({
    title: 'Commonhood'
})

useHead({
    meta: [
        {
            property: 'og:title',
            content: 'About Commonhood'
        },
        {
            property: 'og:description',
            content: "Commonhood is a digital platform for collective care and mutual provisioning—built not to scale markets, but to support commons. Designed with slowness, trust, and reciprocity in mind, it helps communities connect through what they need and what they can offer."
        },
        {
            property: 'og:image',
            content: OGImage
        }
    ]
})
</script>