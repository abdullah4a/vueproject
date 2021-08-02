<template>
  <div id="app">
    <HeaderBar />
    <div class="main-section columns">
      <Navbar />
      <main class="column">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/header-bar';
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: { HeaderBar, Navbar },
};
</script>

<style lang="scss">
@import '@/design/index.scss';
</style>
