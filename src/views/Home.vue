<template>
  <div>
    <div class="columns is-multiline">
      <div v-for="item in items" class="tile is-parent is-4">
        <article class="tile is-child box">
          <h4 class="title">{{item.message}}</h4>
          <h4 class="title">{{item.message}}</h4>
          <h4 class="title">{{item.message}}</h4>
          <h4 class="title">{{item.message}}</h4>
          <h4 class="title">{{item.message}}</h4>
          <h4 class="title">{{item.message}}</h4>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pkg: this.$store.state.pkg,
      items: [
        { message: '1' },
        { message: '2' },
        { message: '3' },
        { message: '4' },
        { message: '5' },
        { message: '6' },
        { message: '7' }
      ]
    }
  }
}
</script>
