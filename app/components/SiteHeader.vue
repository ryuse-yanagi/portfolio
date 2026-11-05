<script setup lang="ts">
import { Home } from 'lucide-vue-next'
import { githubProfileUrl } from '~/data/site'
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <div class="brand">
        <img
          src="/icons/logo.png"
          alt=""
          class="brand-logo"
          width="36"
          height="36"
        />
        <span>Portfolio</span>
      </div>
      <nav class="header-nav" aria-label="メイン">
        <NuxtLink to="/" class="nav-button">
          <Home :size="16" aria-hidden="true" class="nav-icon" />
          Home
        </NuxtLink>
        <a
          class="nav-button nav-button-github"
          :href="githubProfileUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/github.svg"
            alt=""
            class="nav-icon"
            width="16"
            height="16"
          />
          GitHub
        </a>
      </nav>
    </div>
  </header>
</template>
