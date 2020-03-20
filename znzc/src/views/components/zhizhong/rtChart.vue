<template>
  <div
    class="rt_chart"
    :id="id"
  ></div>
</template>

<script>
export default {
  props: {
    id: String,
    data: Array,
  },
  name: '',
  data() {
    return {

    }
  },
  methods: {

    setChart() {
      var colors = ['#5793f3', '#d14a61', '#ffff00'];
      let option = {
        color: colors,

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          right: '22%',
          top: '30%',
          bottom: '15%'
        },
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        legend: {
          data: ['提交案件', '裁决案件', '平均标的金额'],
          textStyle: {
            color: 'rgb(92,177,193)',
            fontSize: 10
          },
          top: '2%',
          left: 0
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            splitLine: {
              show: false     //去掉网格线
            },
            axisLine: {

              lineStyle: {
                color: 'rgb(18,44,73)'
              }
            },
            axisLabel: {
              color: 'rgb(97,185,200)',
            },
            data: (function () {
              var now = new Date();
              var res = [];
              var len = 3;
              while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                now = new Date(now - 60000);
              }
              return res;
            })()
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '提交案件',
            min: 0,
            max: 200,
            position: 'left',
            splitLine: {
              show: false     //去掉网格线
            },
            axisLine: {
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '裁决案件',
            min: 0,
            max: 300,
            position: 'right',
            offset: 0,
            splitLine: {
              show: false     //去掉网格线
            },
            axisLine: {
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '平均标的金额(万元)',
            min: 0,
            max: 100,
            offset: 60,
            position: 'right',
            splitLine: {
              show: false     //去掉网格线
            },
            axisLine: {
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              formatter: '{value}'
            },
            nameTextStyle: {
              padding: [0, 30, 20, 0],
            },
          }
        ],
        series: [
          {
            name: '提交案件',
            type: 'bar',
            data: (function () {
              var res = [];
              var len = 3;
              while (len--) {
                res.push(Math.round(Math.random() * 100));
              }
              return res;
            })()
          },
          {
            name: '裁决案件',
            type: 'bar',
            yAxisIndex: 1,
            data: (function () {
              var res = [];
              var len = 3;
              while (len--) {
                res.push(Math.round(Math.random() * 200));
              }
              return res;
            })()
          },
          {
            name: '平均标的金额(万) ',
            type: 'line',
            yAxisIndex: 2,
            data: (function () {
              var res = [];
              var len = 3;
              while (len--) {
                res.push(Math.round(Math.random() * 100));
              }
              return res;
            })()
          }
        ]
      };
      let myChart = echarts.init(document.getElementById(this.id));
      myChart.clear();
      myChart.resize(
        {
          width: document.getElementById(this.id).offsetWidth,
          height: document.getElementById(this.id).offsetHidth
        }
      ),
        myChart.setOption(option);
      setInterval(function () {
        var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');

        var data0 = option.series[0].data;
        var data1 = option.series[1].data;
        var data2 = option.series[2].data;
        data0.shift();
        data0.push(Math.round(Math.random() * 100));
        data1.shift();
        data1.push(Math.round(Math.random() * 200));
        data2.shift();
        data2.push(Math.round(Math.random() * 100));

        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);


        myChart.setOption(option);
        setTimeout(function () {
          myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 1,
            dataIndex: 2
          })
        }, 100)

      }, 5000);
    },
  },
  mounted() {
    this.setChart();
  }
}
</script>

<style lang="less" scoped>
.rt_chart {
  width: 100%;
  height: 100%;
}
</style>


