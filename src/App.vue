<template>
<div id="#app">
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</div>
</template>

<style lang="scss">
#app, .app {
  height: 100%;
}
</style>
