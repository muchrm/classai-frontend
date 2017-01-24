<template>
  <div>
    <div class="columns is-multiline">
      <div v-for="item in items" class="tile is-parent is-4">
        <article class="tile is-child box">
          <div class="columns">
            <div class="column">
              <h2 class="title is-2">CAGR</h2>
              <h6 class="subtitle is-smalles">อัตราการเจริญเติบโตโดยเฉลี่ยต่อปี</h6>
              <p class="subtitle is-3">30.76%</p>
            </div>
            <div class="column">
              <h2 class="title is-2 has-text-right">MacDD</h2>
              <h6 class="subtitle is-smalles has-text-right">การติดลบมากที่สุด</h6>
              <p class="subtitle is-3 has-text-right">-15.39%</p>
            </div>
          </div>


          <router-link to="/detail" class="button is-primary is-fullwidth"  >View Detail</router-link>
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
<style lang="scss">
    .is-smalles{
      font-size: 10px !important;
    }
</style>
