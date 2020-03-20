<template>
  <div
    :id="id"
    class="case_class"
  ></div>
</template>

<script>
export default {
  props: {
    id: String,
    data: Array
  },
  name: '',
  data() {
    return {

    }
  },
  methods: {
    // 网播风险分析
    setWebcasts() {
      let option = {


        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          data: [
            { name: '借款纠纷', icon: 'circle' },
            { name: '融资租赁', icon: 'circle' },
            { name: '消费分期', icon: 'circle' },
          ],
          gridIndex: 3,
          left: '0',
          top: "6%",
          orient: 'vertical',
          itemWidth: 7,
          itemHeight: 7,
          textStyle: {
            color: '#00CCFF',
            fontSize: 12
          }
        },
        grid: {
          top: '15%',
          left: '10%',
          right: '0%',
          bottom: '5%',
          containLabel: true
        },


        series: [
          {
            type: 'pie',
            radius: ['20%', '21%'],
            center: ['62%', '60%'],
            data: [{ value: '1' }],
            label: { show: false },
            itemStyle: {
              color: '#7D7DA2'
            },

          },
          {
            type: 'pie',
            radius: ['40%', '65%'],
            roseType: 'area',
            center: ['62%', '60%'],
            avoidLabelOverlap: true,
            startAngle: 180,
            label: {
              normal: {
                show: true,
                padding: [0, -30],
                formatter: '{c} \n\n',
                position: 'outside',
                color: '#fff'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              show: true,
              length2: 30,
              lineStyle: {
                //color:["#408BE8",'#FE405C',"#3E3E7F","#FFC740"]
              },

            },
            itemStyle: {
              color: function (params) {
                let corList = ["#142AFE", '#3FA0FF', "#00CCFF", "#1456FE"];
                return corList[params.dataIndex]
              }
            },
            data: [
              { value: 535, name: '借款纠纷' },
              { value: 310, name: '融资租赁' },
              { value: 135, name: '消费分期' },
            ]
          }
        ]
      };
      let myChart = this.$echarts.init(document.getElementById(this.id));

      myChart.clear();
      myChart.resize(
        {
          width: document.getElementById(this.id).width,
          height: document.getElementById(this.id).heidth
        }
      )
      myChart.setOption(option);
      let c = 0;
      let timer;
      function calssTimer() {
        if (c < 3) {
          myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 1,
            dataIndex: c
          })
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 1,
            dataIndex: c,
          })
          if (c > 0) {
            myChart.dispatchAction({
              type: 'downplay',
              seriesIndex: 1,
              dataIndex: c - 1,
            })
          }
          c++
        } else {
          
            myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 1,
            dataIndex: 0
          })
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 1,
            dataIndex: 0,
          })
          myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 1,
            dataIndex: 2,
          })
          c=1
        }
         timer = setTimeout(calssTimer,3000)
      }
      calssTimer()


    },
  },
  mounted() {
    this.setWebcasts()
  },
}
</script>

<style lang="less" scoped>
.case_class {
  height: 100%;
}
</style>