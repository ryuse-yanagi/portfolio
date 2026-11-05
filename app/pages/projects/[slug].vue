<script setup lang="ts">
import { ExternalLink }from 'lucide-vue-next'
import { findProject } from '~/data/site'

const route = useRoute()
const project = findProject(String(route.params.slug))

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found',
  })
}

useSeoMeta({
  title: `${project.name} | Portfolio`,
  description: project.summary.join(''),
})
</script>

<template>
  <div class="container page">
    <p class="back-link">
      <NuxtLink to="/">トップページに戻る</NuxtLink>
    </p>

    <h1>{{ project.name }}</h1>

    <section class="detail-block" aria-labelledby="overview-heading">
      <h2 id="overview-heading">【概要】</h2>
      <div class="text-panel">
        <p v-for="paragraph in project.overview" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </section>

    <ul class="screenshot-grid">
      <li v-for="shot in project.images.screenshots" :key="shot.src">
        <ScreenshotFrame :src="shot.src" :alt="shot.alt" />
      </li>
    </ul>

    <section class="detail-block" aria-labelledby="features-heading">
      <h2 id="features-heading">【主要機能】</h2>
      <table class="stack-table feature-table">
        <colgroup>
          <col class="feature-col" />
          <col class="item-col" />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">機能</th>
            <th scope="col">分類</th>
            <th scope="col">内容</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(feature, featureIndex) in project.features" :key="feature.title">
            <tr v-for="(item, itemIndex) in feature.items" :key="`${feature.title}-${item.name}`">
              <th
                v-if="itemIndex === 0"
                class="feature-name"
                :class="{ 'is-last-group': featureIndex === project.features.length - 1 }"
                scope="rowgroup"
                :rowspan="feature.items.length"
              >
                {{ feature.title }}
              </th>
              <th class="feature-item" scope="row">{{ item.name }}</th>
              <td>{{ item.description }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>

    <section class="detail-block" aria-labelledby="stack-heading">
      <h2 id="stack-heading">【技術スタック】</h2>
      <table class="stack-table">
        <thead>
          <tr>
            <th scope="col">分類</th>
            <th scope="col">技術</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in project.stackRows" :key="row.category">
            <th scope="row">{{ row.category }}</th>
            <td>{{ row.technologies }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="detail-block" aria-labelledby="architecture-heading">
      <h2 id="architecture-heading">【システムアーキテクチャ】</h2>
      <ScreenshotFrame
        class="architecture-frame"
        natural
        :src="project.architectureImage"
        alt="AWSアーキテクチャ構成図"
      />
      <div class="subsection">
        <h3 id="design-points-heading">設計上のポイント</h3>
        <table class="stack-table" aria-labelledby="design-points-heading">
          <thead>
            <tr>
              <th scope="col">分類</th>
              <th scope="col">内容</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="point in project.designPoints" :key="point.item">
              <th scope="row">{{ point.item }}</th>
              <td>{{ point.content }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="subsection">
        <h3 id="design-points-heading">セキュリティ設計</h3>
        <table class="stack-table">
        <thead>
          <tr>
            <th scope="col">分類</th>
            <th scope="col">内容</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in project.securityRows" :key="row.category">
            <th scope="row">{{ row.category }}</th>
            <td>{{ row.implementation }}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </section>

    <section class="detail-block" aria-labelledby="efforts-heading">
      <h2 id="efforts-heading">【開発で取り組んだこと】</h2>
      <table class="stack-table">
        <thead>
          <tr>
            <th scope="col">分類</th>
            <th scope="col">内容</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in project.developmentEfforts" :key="row.label">
            <th scope="row">{{ row.label }}</th>
            <td>{{ row.value }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="detail-block" aria-labelledby="repository-heading">
      <h2 id="repository-heading">【GitHub】</h2>
      <a
        class="repo-link"
        :href="project.repositoryUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>GitHubでソースコードを確認する</span>
        <ExternalLink :size="16" aria-hidden="true" />
      </a>
    </section>
  </div>
</template>
