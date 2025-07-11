<template>
    <section class="h-72 bg-blue-500 py-10 flex flex-col justify-end md:h-96">
        <AppContainer class="lg:max-w-[1000px]">
            <h1 class="uppercase text-white text-5xl md:text-8xl">Changelog</h1>
            <p class="text-white md:text-xl">This page keeps track of updates, releases, bug-fixes and new content.</p>
        </AppContainer>
    </section>

    <section class="logs bg-gray-100 py-10">
        <AppContainer class="space-y-10 lg:max-w-[1000px]">
            <div class="log">
                <h5>July 2025</h5>
                <ul>
                    <li>
                        <NuxtLink to="/" external target="_blank">
                            Commonhood v0.1.14
                        </NuxtLink>
                        has a changed and navigation and now links to an about page, a colophon, and this changelog
                    </li>

                    <li>
                        <NuxtLink to="/" external target="_blank">
                            My Contributions
                        </NuxtLink>
                        is now only accessible to signed in participants.
                    </li>

                    <li>In v0.1.14 offer and need cards are enhanced, they now display details (location, date range, virtual exchange) as tags.</li>

                    <li>There is now a corrected singular/plural logic for community, offer, and need counters.</li>

                    <li>Participant profile bar is now only rendered when specific parameters are present.</li>

                    <li>Breadcrumbs now render consistently regardless of user authentication.</li>

                    <li>This version contains general bug fixes & cleanup.</li>
                </ul>
            </div>

            <div class="log">
                <h5>June 2025</h5>
                <ul>
                    <li>
                        Implemented participant authentication and session management using
                        <NuxtLink to="/" external target="_blank">
                            Clerk
                        </NuxtLink>
                        , including protected routes, sign-in/sign-up pages, and middleware for route protection.</li>

                    <li>Redesign of the card component with new display options (emoji icon and background colour), improved aspect ratio (3:4), and enhanced hover/animation effects.</li>

                    <li>Introduced a fullscreen reasoning overlay and asset creation overlay with click anywhere or ESC to close as well as z-index fixes.</li>

                    <li>Upgraded the asset matching system to display both semantic and Max-Neef scores, with dynamic reasoning explanations.</li>

                    <li>Improved API routes for asset creation and user profile management. Unified type definitions between frontend and backend for display options and author handling.</li>

                    <li>Updated and expanded documentation. Cleaned up obsolete scripts and improved code comments and TypeScript linting.</li>
                </ul>
            </div>
        </AppContainer>
    </section>

    <Coversation />
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.logs {
    .log {
        h5 {
            @apply mb-3 text-3xl md:mb-6 md:text-5xl;
        }

        ul {
            @apply list-disc pl-6;

            li {
                &::marker {
                    @apply text-blue-500 text-xl;
                }

                a {
                    @apply font-semibold text-blue-500 hover:underline;
                }
            }
        }
    }
}
</style>
