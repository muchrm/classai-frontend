<template>
  <div>
      <div class="columns box is-multiline">
        <h4 class="title">BUY-SIGNAL</h4>
        <div class="column is-child box is-12">
          <div class="columns">
            <div class="column">
              <br>
              <p>-</p>
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
              <br>
              <p>-</p>
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
      <!-- - -->
      <div class="columns box is-multiline">
        <h4 class="title">SELL-SIGNAL</h4>
        <div class="column is-child box is-12">
          <div class="columns">
            <div class="column">
              <br>
              <p>-</p>
            </div>
            <div class="column">
              <span class="tag is-primary is-medium">SMA</span>
              <br>
              <p class="isunderline tag is-dark">70</p>
            </div>
            <div class="column">
              <span class="tag is-info is-medium">Cross Above</span>  <br>
              <p class="isunderline tag is-dark">1</p><span class="day">day</span>
            </div>
            <div class="column">
                <span class="tag is-primary is-medium">Closs Price</span><br>
                <p class="isunderline tag is-dark">-</p>
            </div>
          </div>
        </div>
        <h4 class="title">SELL-FILTER</h4>
        <div class="column is-child box is-12">
          <div class="columns">
            <div class="column">
              <br>
              <p>-</p>
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
      <!-- - -->
      <!-- EXit -->
      <div class="columns box is-multiline">
        <h4 class="title">EXIT</h4>
        <div class="column is-child box is-12">
          <div class="columns">
            <div class="column">
              <br>
              <p class="has-text-centered">STOP LOSS:</p>
            </div>
          </div>
        </div>

      </div>
      <!-- End Exit -->
      <div class="card">
        <header class="card-header">
          <p class="card-header-title notification is-success">
            Benefit(ด้านผลกำไร)
          </p>
        </header>
        <div class="card-content">
          <div class="columns">
            <div class="column is-6">
              <p class="title">Account Balance</p>
              <p>(มูลค่าเงินในพอร์ต)</p>
            </div>
            <div class="column is-3">
              <p class="title">4316603</p>
            </div>
            <div class="column is-3">
              <p class="title">7084313</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6">
              <p class="title">Net Profit</p>
              <p>(ผลตอบแทน)</p>
            </div>
            <div class="column is-3">
              <p class="title">331.66%</p>
            </div>
            <div class="column is-3">
              <p class="title">608.43%</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6">
              <p class="title has-text-left">Expectancy (Risk-Based Expectancy)</p>
              <p>(ค่ากำไรคาดหวังต่อความเสี่ยง)</p>
            </div>
            <div class="column is-3">
              <p class="title">0.68</p>
            </div>
            <div class="column is-3">
              <p class="title">0.88</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6">
              <p class="title has-text-left">CAGR</p>
              <p>(อัตราการเติบโตโดยเฉลี่ยต่อปี)</p>
            </div>
            <div class="column is-3">
              <p class="title">14.22 %</p>
            </div>
            <div class="column is-3">
              <p class="title">19.48 %<p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title notification is-danger">
            Risk(ด้านความเสี่ยง)
          </p>
        </header>
        <div class="card-content">
          <div class="columns">
            <div class="column is-6">
              <p class="title">Maximum Drawdown</p>
              <p>(Drowdown ที่ติดลบมากที่สุดเท่าที่เคยมีมา)</p>
            </div>
            <div class="column is-3">
              <p class="title">-28.50 %</p>
              <p>(-฿ 299875)</p>
            </div>
            <div class="column is-3">
              <p class="title">-14.80 %</p>
              <p>(-฿ 147039)</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6">
              <p class="title">Longest Drawdown</p>
              <p>(เวลาในการทำจุดสูงสุดใหม่ที่นานที่สุด)</p>
            </div>
            <div class="column is-3">
              <p class="title">1701 day</p>
            </div>
            <div class="column is-3">
              <p class="title">668 day</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6">
              <p class="title has-text-left">MAR Ratio</p>
              <p>(สัดส่วนการแบกรับความเสี่ยงกับผลตอบแทน)</p>
            </div>
            <div class="column is-3">
              <p class="title">0.50</p>
            </div>
            <div class="column is-3">
              <p class="title">1.32</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6">
              <p class="title has-text-left">Risk of ruin</p>
              <p>(% โอกาสที่จะทำให้เราหมดตัว)</p>
            </div>
            <div class="column is-3">
              <p class="title">31.40 %</p>
            </div>
            <div class="column is-3">
              <p class="title">1.74 %</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title notification is-warning">
            State of mind (ด้านสภาพจิตใจ)
          </p>
        </header>
        <div class="card-content">
          <div class="columns">
            <div class="column is-6">
              <p class="title">Total Trade</p>
              <p>(จำนวนครั้งในการเทรด)</p>
            </div>
            <div class="column is-3">
              <p class="title">476</p>
              <p>Low-freq(จำนวนซื้อขายน้อย)</p>
            </div>
            <div class="column is-3">
              <p class="title">708</p>
              <p>Middle-freq(จำนวนซื้อขายปานกลาง)</p>
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
