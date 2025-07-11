<template>
    <div class="container mx-auto px-4 md:px-6">
        <slot />
    </div>
</template>

<script setup lang="ts">
interface Props {
    maxWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
    maxWidth: 'max-w-full'
})
</script>
