<template>
  <div>
      <div class="columns box is-multiline">
        <h4 class="title">BUY-SIGNAL</h4>
        <div class="column is-child box is-12">
          <div class="columns">
            <div class="column">
              First column
            </div>
            <div class="column">
              <span class="tag is-primary is-medium">EMA</span>
              <br>
              <p class="isunderline tag is-dark">37</p>
            </div>
            <div class="column">
              <span class="tag is-info is-medium">Cross Above</span>  <br>
              <p class="isunderline tag is-dark">37</p><span class="day">day</span>
            </div>
            <div class="column">
                <span class="tag is-primary is-medium">EMA</span><br>
                <p class="isunderline tag is-dark">73</p>
            </div>
          </div>
        </div>
        <h4 class="title">BUY-FILTER</h4>
        <div class="column is-child box is-12">
          <div class="columns">
            <div class="column">
              First column
            </div>
            <div class="column">
              <span class="tag is-primary is-medium">ADOSC</span>
              <br>
              <p class="isunderline tag is-dark">8</p>,
              <p class="isunderline tag is-dark">20</p>
            </div>
            <div class="column">
              <span class="tag is-info is-medium">มากกว่า</span>  <br>
              <p class="isunderline tag is-dark">1</p><span class="day">day</span>
            </div>
            <div class="column">
                <span class="tag is-primary is-medium">EMA</span><br>
                <p class="isunderline tag is-dark">73</p>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/chart" class="button is-primary column is-2 is-offset-5" >View Chart</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
  .isunderline{
      margin: 5px;
    }
    .day{
      line-height: 2.2;
    }
</style>
