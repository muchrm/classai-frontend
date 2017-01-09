<template>
  <div id="app">
    <navbar :show="true"></navbar>
    <sidebar :show="sidebar.opened && !sidebar.hidden"></sidebar>
    <app-main></app-main>
  </div>
</template>

<script>
import Navbar from 'components/layout/Navbar'
import Sidebar from 'components/layout/Sidebar'
import AppMain from 'components/layout/AppMain'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: mapGetters({
    sidebar: 'sidebar'
  }),
  methods: mapActions([
    'toggleDevice',
    'toggleSidebar'
  ])
}
</script>

<style lang="scss">
@import '~animate.css';
.animated {
  animation-duration: .377s;
}
@import '~bulma';
$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome';
.nprogress-container {
  position: fixed !important;
  width: 100%;
  height: 50px;
  z-index: 2048;
  pointer-events: none;
  #nprogress {
    $color: #48e79a;
    .bar {
      background: $color;
    }
    .peg {
      box-shadow: 0 0 10px $color, 0 0 5px $color;
    }
    .spinner-icon {
      border-top-color: $color;
      border-left-color: $color;
    }
  }
}
</style>
