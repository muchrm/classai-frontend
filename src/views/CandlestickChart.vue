<template>
  <div>
    <table class="table is-striped">
      <thead>
        <tr>
          <th>SYMBOL</th>
          <th>LOT</th>
          <th>RETURN</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in dataset">
          <td>{{data.symbol}}</td>
          <td>{{data.lot}}</td>
          <td>{{data.return}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataset: [
        {
          symbol: 'GBPUSD',
          lot: 0.5,
          return: '18%'
        },
        {
          symbol: 'GBPUSD',
          lot: 0.5,
          return: '18%'
        },
        {
          symbol: 'GBPUSD',
          lot: 0.5,
          return: '18%'
        },
        {
          symbol: 'GBPUSD',
          lot: 0.5,
          return: '18%'
        },
        {
          symbol: 'GBPUSD',
          lot: 0.5,
          return: '18%'
        },
        {
          symbol: 'GBPUSD',
          lot: 0.5,
          return: '18%'
        }
      ]
    }
  }
}
</script>
