<template>
    <section class="h-72 bg-violet-500 py-10 flex flex-col justify-end md:h-96">
        <AppContainer class="lg:max-w-[1000px]">
            <h1 class="uppercase text-white text-5xl md:text-8xl">Colophon</h1>
            <p class="text-white md:text-xl">This page describes how the site is made, with what tools, supporting what technologies.</p>
        </AppContainer>
    </section>

    <section class="bg-gray-100 py-10">
        <AppContainer class="space-y-10 lg:max-w-[1000px]">
            <p class="text-xl">Commonhood is a web application designed and developed using a modern, open-source technology stack, with a focus on modularity, scalability, and user experience.</p>

            <div class="colophons">
                <div class="colophon">
                    <h5>Contributors</h5>
                    <ul>
                        <li>
                            <p>Development</p>
                            <ul class="sublist">
                                <li>
                                    Peter Aichner,
                                    <NuxtLink to="https://www.bcommonslab.org" external target="_blank">
                                        b*CommonsLAB
                                    </NuxtLink>
                                </li>
                                <li>
                                    Christoph Buettner,
                                    <NuxtLink to="https://www.monospace.design/en/" external target="_blank">
                                        Monospace
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <p>Design</p>
                            <ul class="sublist">
                                <li>
                                    <NuxtLink to="https://www.jonasvogt.com" external target="_blank">
                                        Jonas Vogt
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <p>Custom and web fonts are used for branding and readability</p>
                            <ul class="sublist">
                                <li>
                                    <NuxtLink to="https://abcdinamo.com/typefaces/stefan-marx" external target="_blank">
                                        Stefan, Dinamo & Stefan Marx
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="https://www.giuliaboggio.xyz/fonts/bastardo-grotesk" external target="_blank">
                                        Bastardo Grotesk, Giulia Boggio
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="https://type.hanli.eu/timezone/" external target="_blank">
                                        Timezone, HAL Typfaces
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="colophon">
                    <h5>Technology</h5>
                    <ul>
                        <li>
                            <p>Frontend Framework</p>
                            <ul class="sublist">
                                <li>
                                    <NuxtLink to="https://nextjs.org" external target="_blank">Next.js</NuxtLink> (React-based, App Router, likely v13+), providing server-side rendering, static site generation, and API routes for a seamless full-stack experience.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>Programming Languages</p>
                            <ul class="sublist">
                                <li>TypeScript (primary language for both frontend and backend code)</li>
                                <li>JavaScript (for scripts and some backend utilities)</li>
                            </ul>
                        </li>
                        <li>
                            <p>Styling & UI</p>
                            <ul class="sublist">
                                <li>CSS Modules and global stylesheets</li>
                                <li>Custom UI components (see <code>src/components/ui/</code>)</li>
                                <li>Font integration with custom and web fonts (see <code>public/fonts/</code>)</li>
                            </ul>
                        </li>
                        <li>
                            <p>Backend & API</p>
                            <ul class="sublist">
                                <li>
                                    <NuxtLink to="https://nextjs.org" external target="_blank">Next.js</NuxtLink> API routes (in <code>src/app/api/</code>) for server-side logic and data handling
                                </li>
                                <li>
                                    <NuxtLink to="https://www.mongodb.com" external target="_blank">MongoDB</NuxtLink> for data persistence, accessed via custom service modules (<code>src/lib/mongodb-service.ts</code>)
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>Authentication</p>
                            <ul class="sublist">
                                <li>
                                    <NuxtLink to="https://clerk.com" external target="_blank">Clerk</NuxtLink> (as referenced in documentation) for user authentication and management
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>AI & Semantic Search</p>
                            <ul class="sublist">
                                <li>
                                    Integration with <NuxtLink to="https://openai.com" external target="_blank">OpenAI</NuxtLink> APIs for embeddings and semantic search (see <code>src/lib/api/openai-embeddings.ts</code> and related docs)
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>Data Import & Scripting</p>
                            <ul class="sublist">
                                <li>
                                    <NuxtLink to="https://nodejs.org/en" external target="_blank">Node.js</NuxtLink> scripts for data import, classification, and repair (see <code>scripts/</code> directory)
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="colophon">
                    <h5>Design frameworks & principles</h5>
                    <ul>
                        <li>
                            <p>Component-Driven Design</p>
                            <ul class="sublist">
                                <li>Modular React components for reusable UI elements</li>
                                <li>Design documentation and analysis in <code>/docs/Concept/ReactComponents/</code></li>
                            </ul>
                        </li>
                        <li>
                            <p>User Experience</p>
                            <ul class="sublist">
                                <li>Focus on accessibility, clarity, and responsive design</li>
                                <li>Custom overlays and dialogs for asset creation, user profiles, and reasoning</li>
                            </ul>
                        </li>
                        <li>
                            <p>Information Architecture</p>
                            <ul class="sublist">
                                <li>Semantic asset search and classification</li>
                                <li>Structured documentation for user flows and UI concepts</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="colophon">
                    <h5>Hosting & deployment</h5>
                    <ul>
                        <li>
                            <p>Hosting Platform</p>
                            <ul class="sublist">
                                <li>
                                    <NuxtLink to="https://vercel.com" external target="_blank">Vercel</NuxtLink> for seamless deployment, serverless functions, and CDN-backed static assets
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>Containerization</p>
                            <ul class="sublist">
                                <li>Docker support for local development and production builds (<code>Dockerfile</code>, <code>Dockerfile.minimal</code>)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="colophon">
                    <h5>Documentation</h5>
                    <ul>
                        <li>
                            <p>Extensive internal documentation in the <code>/docs/</code> directory, covering</p>
                            <ul class="sublist">
                                <li>Authentication strategies</li>
                                <li>Component concepts and UI analysis</li>
                                <li>Data import and semantic search implementation</li>
                                <li>User flows and feature guides</li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </AppContainer>
    </section>

    <Coversation />
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.colophons {
    @apply space-y-6 md:space-y-10;

    .colophon {
        h5 {
            @apply mb-3 text-3xl md:mb-6 md:text-5xl;
        }
        
        li {
            @apply leading-7 marker:text-violet-500 md:text-xl md:leading-8;

            a {
                @apply font-semibold text-violet-500 hover:underline;
            }
        }

        .sublist {
            @apply list-disc pl-6;
        }
    }
}
</style>
