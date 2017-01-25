<template>
  <div id='chartjs'></div>
</template>
<script>
import c3 from 'c3'
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  mounted () {
    var vm = this
    axios.get('http://classai.muchrm.me/data/dataDD2.json')
    .then(function (response) {
      vm.dd = response.data
      vm.render()
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    render () {
      var vm = this
      console.log(vm)
      c3.generate({
        bindto: vm.$el,
        size: {
          height: 220
        },
        // onmouseover: function () {
        //   checkChart2 = true
        // },
        // onmouseout: function () {
        //   checkChart2 = false
        // },
        data: {
          json: vm.dd.data,
          keys: {
            x: 'date',
            value: vm.dd.rule
          },
          type: 'spline'
          // onmouseover: function (d) {
          //   if (checkChart2) {
          //     chart1.tooltip.show({x: d.x});
          //   }
          // },
          // onmouseout: function (d) {
          //   if (checkChart2) {
          //     chart1.tooltip.hide();
          //   }
          // }
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              count: 10,
              format: '%e %b %Y' // https://github.com/mbostock/d3/wiki/Time-Formatting#wiki-format
            }
          },
          y: {
            inner: true,
            label: {
              text: 'Drawdown',
              position: 'outer-middle'
            },
            tick: {
              format: function (x) { return x.toFixed(2) + ' %' }
            }
          }
        },
        point: {
          show: false
        },
        transition: {
          duration: 0
        },
        subchart: {
          show: true,
          onbrush: function (domain) {
            // chart1.zoom(domain)
          },
          size: {
            height: 20
          }
        }
      })
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