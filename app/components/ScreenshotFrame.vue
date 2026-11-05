<script setup lang="ts">
const props = withDefaults(defineProps<{
  src: string
  alt: string
  natural?: boolean
}>(), {
  natural: false,
})

const image = ref<HTMLImageElement | null>(null)
const config = useRuntimeConfig()
const nuxtApp = useNuxtApp()

const url = computed(() => publicAssetUrl(config.app.baseURL, props.src))
const showImmediately = !import.meta.server && !nuxtApp.isHydrating && isImageReady(url.value)
const loaded = ref(showImmediately)

function revealIfDecoded() {
  const element = image.value
  if (!element?.complete || element.naturalWidth === 0) return
  loaded.value = true
}

onMounted(() => {
  if (loaded.value) return
  revealIfDecoded()
})
</script>

<template>
  <div
    class="screenshot"
    :class="{ 'is-loaded': loaded, 'is-natural': natural }"
    :aria-busy="!loaded"
  >
    <img
      ref="image"
      :src="url"
      :alt="alt"
      :decoding="showImmediately ? 'sync' : 'async'"
      @load="revealIfDecoded"
      @error="loaded = false"
    >
    <div v-if="!loaded" class="screenshot-skeleton" aria-hidden="true" />
  </div>
</template>
