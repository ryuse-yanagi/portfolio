<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="site">
    <SiteHeader />
    <main id="main" class="container page error-page">
      <h1>{{ error.statusCode ?? 500 }}</h1>
      <p>ページが見つかりません。</p>
      <button class="button button-primary" type="button" @click="goHome">
        トップページへ
      </button>
    </main>
  </div>
</template>
