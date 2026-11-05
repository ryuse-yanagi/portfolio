<script setup lang="ts">
import type { Project } from '~/data/site'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="project-card">
    <ScreenshotFrame
      :src="project.images.card"
      :alt="`${project.name}のスクリーンショット`"
    />
    <div class="project-card-body">
      <h3 class="project-card-title">{{ project.name }}</h3>
      <div class="project-card-summary">
        <p v-for="paragraph in project.summary" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
      <ul class="tags">
        <li v-for="item in project.stack" :key="item">{{ item }}</li>
      </ul>
      <NuxtLink class="button button-primary" :to="`/projects/${project.slug}`">
        プロジェクト詳細
      </NuxtLink>
    </div>
  </article>
</template>
