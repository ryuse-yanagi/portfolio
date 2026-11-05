<script setup lang="ts">
import {
  basicInfoRows,
  introductionParagraphs,
  careerRows,
  experienceGroups,
  projects,
  techStackRows,
} from '~/data/site'

useSeoMeta({
  title: 'Portfolio',
  description: 'ryuse-yanagiのポートフォリオ。志望職種はクラウドエンジニア。',
})
</script>

<template>
  <div class="container page">
    <section class="home-section" aria-labelledby="basic-heading">
      <h2 id="basic-heading">【基本情報】</h2>
      <table class="stack-table">
        <tbody>
          <tr v-for="row in basicInfoRows" :key="row.label">
            <th scope="row">{{ row.label }}</th>
            <td>{{ row.value }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="home-section" aria-labelledby="intro-heading">
      <h2 id="intro-heading">【自己紹介】</h2>
      <div class="text-panel">
        <p
          v-for="paragraph in introductionParagraphs"
          :key="paragraph"
        >
          {{ paragraph }}
        </p>
      </div>
    </section>

    <section class="home-section" aria-labelledby="career-heading">
      <h2 id="career-heading">【経歴】</h2>
      <table class="stack-table career-table">
        <colgroup>
          <col class="career-period" />
          <col class="career-category" />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">期間</th>
            <th scope="col">区分</th>
            <th scope="col">内容</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in careerRows" :key="`${row.period}-${row.category}`">
            <td>{{ row.period }}</td>
            <td>{{ row.category }}</td>
            <td>{{ row.detail }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="home-section" aria-labelledby="experience-heading">
      <h2 id="experience-heading">【実務経験】</h2>
      <div v-for="group in experienceGroups" :key="group.title" class="subsection">
        <h3>{{ group.title }}</h3>
        <table class="stack-table">
          <thead>
            <tr>
              <th scope="col">{{ group.columns[0] }}</th>
              <th scope="col">{{ group.columns[1] }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in group.rows" :key="row.label">
              <th scope="row">{{ row.label }}</th>
              <td>{{ row.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="home-section" aria-labelledby="stack-heading">
      <h2 id="stack-heading">【技術スタック】</h2>
      <table class="stack-table">
        <thead>
          <tr>
            <th scope="col">分類</th>
            <th scope="col">技術</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in techStackRows" :key="row.category">
            <th scope="row">{{ row.category }}</th>
            <td>{{ row.technologies }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="home-section" aria-labelledby="projects-heading">
      <h2 id="projects-heading">【プロジェクト一覧】</h2>
      <ul class="project-list">
        <li v-for="project in projects" :key="project.slug">
          <ProjectCard :project="project" />
        </li>
      </ul>
    </section>
  </div>
</template>
