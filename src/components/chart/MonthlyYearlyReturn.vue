<template>
  <div>
    <table class="table is-striped">
      <thead>
        <tr>
          <th>YEAR</th>
          <th>Jan</th>
          <th>Feb</th>
          <th>Mar</th>
          <th>Apr</th>
          <th>May</th>
          <th>Jun</th>
          <th>Jul</th>
          <th>Aug</th>
          <th>Sep</th>
          <th>Oct</th>
          <th>Nov</th>
          <th>Dec</th>
          <th>YEARSLY RETURN</th>
          <th>GAGR</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="year in dataset">
          <td>{{year.year}}</td>
          <td v-for="value in year.months"><router-link to="/chart/transection" >{{value}}</router-link></td>
          <td>{{year.return}}</td>
          <td>{{year.gagr}}</td>
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
          year: 2016,
          months: ['14%', '15%', '13%', '14%', '15%', '13%', '14%', '15%', '13%', '14%', '15%', '13%'],
          return: '18%',
          gagr: '20%'
        },
        {
          year: 2015,
          months: ['14%', '15%', '13%', '14%', '15%', '13%', '14%', '15%', '13%', '14%', '15%', '13%'],
          return: '18%',
          gagr: '20%'
        },
        {
          year: 2014,
          months: ['14%', '15%', '13%', '14%', '15%', '13%', '14%', '15%', '13%', '14%', '15%', '13%'],
          return: '18%',
          gagr: '20%'
        },
        {
          year: 2013,
          months: ['14%', '15%', '13%', '14%', '15%', '13%', '14%', '15%', '13%', '14%', '15%', '13%'],
          return: '18%',
          gagr: '20%'
        },
        {
          year: 2012,
          months: ['14%', '15%', '13%', '14%', '15%', '13%', '14%', '15%', '13%', '14%', '15%', '13%'],
          return: '18%',
          gagr: '20%'
        }
      ]
    }
  }
}
</script>
