<template>
  <div class="block is-flex">
        <tabs animation="slide" :only-fade="false">
          <tab-pane label="Pictures" selected>Pictures Tab</tab-pane>
          <tab-pane label="Music">Music Tab</tab-pane>
          <tab-pane label="Videos" >Video Tab</tab-pane>
          <tab-pane label="Documents">Document Tab</tab-pane>
        </tabs>
  </div>
</template>

<script>
import { Tabs, TabPane } from 'vue-bulma-tabs'

export default {
  components: {
    Tabs,
    TabPane
  }
}
</script>
