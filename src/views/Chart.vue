<template>
  <div class="block is-flex">
        <tabs animation="slide" :only-fade="false">
          <tab-pane label="Net Profit & Drawdown" selected>
            NET PROFIT
            <net-profit></net-profit>
            DRAWDOWN
            <drawdown></drawdown>
          </tab-pane>
          <tab-pane label="Daily Return">
            DAILY RETURN
            <daily-return></daily-return>
          </tab-pane>
          <tab-pane label="Monthly-Yearly Return" >
            Monthly-Yearly Return
            <monthly-yearly-return></monthly-yearly-return>
            </tab-pane>
          <tab-pane label="%Win Chart">
            %Win Chart
            <win-chart></win-chart>
          </tab-pane>
        </tabs>
  </div>
</template>

<script>
import { Tabs, TabPane } from 'vue-bulma-tabs'
import NetProfit from 'components/chart/NetProfit'
import Drawdown from 'components/chart/Drawdown'
import DailyReturn from 'components/chart/DailyReturn'
import MonthlyYearlyReturn from 'components/chart/MonthlyYearlyReturn'
import WinChart from 'components/chart/WinChart'

export default {
  components: {
    Tabs,
    TabPane,
    NetProfit,
    Drawdown,
    DailyReturn,
    MonthlyYearlyReturn,
    WinChart
  }
}
</script>

