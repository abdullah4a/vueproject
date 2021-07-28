<template>
  <div>
    <h1>Hello</h1>
    <h2>{{ hero.firstName + ' ' + hero.lastName }}!</h2>
    <br />
  </div>
</template>

<script>
export default {
  name: 'HeroDetail',
  props: {
    hero: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
