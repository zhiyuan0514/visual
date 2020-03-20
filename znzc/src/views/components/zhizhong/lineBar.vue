<template>
  <div
    class="line_bar"
    :id="id"
  ></div>
</template>
<script>
export default {
  props: {
    id: String,
    data: Array
  },
  data() {
    return {

    }
  },
  mounted() {
    this.setChart()
  },
  methods: {
    setChart() {
      let option = {
        // title: {
        //   text: '动态数据',
        //   subtext: '纯属虚构'
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56'
            }
          }
        },
        grid: {
          x:85,
          y: 60,
          y2: 30,
        },

        legend: {
          data: ['案件数量', '标的金额'],
          left:'0',
          textStyle: {
            color: 'rgb(92,177,193)',
            fontSize: 10
          },
          itemWidth:7,
          itemHeight:7,
        },
        // toolbox: {
        //   show: true,
        //   feature: {
        //     dataView: { readOnly: false },
        //     restore: {},
        //     saveAsImage: {}
        //   }
        // },
        dataZoom: {
          show: false,
          start: 0,
          end: 100
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLine: {
              lineStyle: {
                color: 'rgb(18,44,73)'
              }
            },
            axisLabel: {
              color: 'rgb(97,185,200)',
            },
          },
          {
            type: 'category',
            boundaryGap: true,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
             axisLine: {
              lineStyle: {
                color: 'rgb(18,44,73)'
              }
            },
            axisLabel: {
              color: 'rgb(97,185,200)',
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            name: '金额',
            max: 100000000,
            min: 0,
            nameTextStyle:{
              color:'rgb(97,185,200)',
               padding:[0,40,0,0],
            },
            boundaryGap: [0.2, 0.2],
             axisLine: {
              lineStyle: {
                color: 'rgb(18,44,73)'
              }
            },
            axisLabel: {
              color: 'rgb(97,185,200)',
            },
          },
          {
            type: 'value',
            scale: true,
            name: '数量',
            max: 1200,
            min: 0,
            nameTextStyle:{
              color:'rgb(97,185,200)',
              padding:[0,0,0,40], 
            },
            boundaryGap: [0.2, 0.2],
             axisLine: {
              lineStyle: {
                color: 'rgb(18,44,73)'
              }
            },
            axisLabel: {
              color: 'rgb(97,185,200)',
            },
          }
        ],
        series: [

          {
            name: '案件数量',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [500, 200, 300, 700, 500, 300, 700, 800, 600, 500, 900, 1000],
            barWidth : 10,
            itemStyle: {
              barBorderRadius: [3, 3, 0, 0],
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0, color: 'rgba(0,204,255,1)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(8,59,126,1)' // 100% 处的颜色
              }]), //背景渐变色
            }
          },
          {
            name: '标的金额',
            type: 'line',
            data: [5000000, 20000000, 30000000, 70000000, 50000000, 30000000, 70050000, 80099999, 60066666, 50055555, 90999990, 89999999],
            itemStyle: {
              barBorderRadius: [3, 3, 0, 0],
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0, color: 'rgba(144,20,238,1)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(74,8,211,1)' // 100% 处的颜色
              }]), //背景渐变色
            }
          }
        ]
      };
      let myChart = this.$echarts.init(document.getElementById(this.id));
      myChart.clear();
      myChart.resize(
        {
          width: document.getElementById(this.id).offsetWidth,
          height: document.getElementById(this.id).offsetHeight
        }
      ),

        myChart.setOption(option);
    }
  }
}
</script>

<style lang="less" scoped>
.line_bar {
  width: 100%;
  height: 100%;
}
</style>