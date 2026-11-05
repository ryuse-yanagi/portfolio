<template>
  <div class="site">
    <a class="skip-link" href="#main">本文へスキップ</a>
    <SiteHeader />
    <main id="main">
      <slot />
    </main>
    <footer class="site-footer">
      <div class="container">
        <p>Cloud Engineer Portfolio</p>
      </div>
    </footer>
  </div>
</template>
