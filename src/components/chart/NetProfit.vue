<template>
    <div id="chartJs"></div>
</template>
<script>
import c3 from 'c3'
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  mounted () {
    var vm = this
    axios.get('http://classai.muchrm.me/data/dataEquity2.json')
    .then(function (response) {
      vm.equity = response.data
      vm.render()
      vm.setValueChart1(true)
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  computed: mapGetters({
    valueChart1: 'menuitems',
    valueChart2: 'menuitems'
  }),
  methods: {
    ...mapActions([
      'setValueChart1',
      'setValueChart2'
    ]),
    render () {
      var vm = this
      c3.generate({
        bindto: vm.$el,
        size: {
          height: 400
        },
      // onmouseover: function () {
      //   checkChart1 = true
      // },
      // onmouseout: function () {
      //   checkChart1 = false
      // },
        data: {
          json: vm.equity.data,
          keys: {
            x: 'date',
            value: vm.equity.rule
          },
          type: 'spline'
          // onmouseover: function (d) {
          //   if (checkChart1) {
          //     chart2.tooltip.show({x: d.x});
          //   }
          // },
          // onmouseout: function (d) {
          //   if (checkChart1) {
          //     chart2.tooltip.hide();
          //   }
          // }
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              count: 10,
              format: '%e %b %Y'
            }
          },
          y: {
            inner: true,
            label: {
              text: 'Equity',
              position: 'outer-middle'
            },
            tick: {
              format: function (x) {
                return vm.format(x) + ' ฿'
              }
            }
          }
        },
        point: {
          show: false
        },
        transition: {
          duration: 0
        }
      })
    },
    format (num) {
      return num
      // var p = num.toFixed(fix).split('.')
      // return p[0].split('').reduceRight(function (acc, num, i, orig) {
      //   if (num === '-' && i === 0) {
      //     return num + acc
      //   }
      //   var pos = orig.length - i - 1
      //   return num + (pos && !(pos % 3) ? ',' : '') + acc
      // }, '') + (p[1] ? '.' + p[1] : '')
    }
  }
}
</script>
<style lang="scss">
canvas.chartjs {
  max-width: 100% !important;
  height: 400px;
}
</style>