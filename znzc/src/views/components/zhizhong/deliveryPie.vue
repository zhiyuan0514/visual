<template>
  <div
    class="delivery_pie"
    :id="id"
  ></div>
</template>

<script>
export default {
  name: '',
  props: {
    id: String
  },
  data() {
    return {

    }
  },
  methods: {
    setChart() {
      let option = {
        title: [
          // {
          //   text: "【短信送达】",
          //   left: '18%',
          //   bottom: '45%',
          //   textStyle: {
          //     color: "#fff",
          //     fontSize: 12
          //   }
          // },
          // {
          //   text: "【邮件送达】",
          //   left: '68%',
          //   bottom: '45%',
          //   textStyle: {
          //     color: "#fff",
          //     fontSize: 12
          //   }
          // },
          {
            text: "【短链查看】",
            left: '8%',
            bottom: '12%',
            textStyle: {
              color: "#fff",
              fontSize: 12
            }
          },
          {
            text: "【应裁情况】",
            right: '8%',
            bottom: '12%',
            textStyle: {
              color: "#fff",
              fontSize: 12
            }
          }
        ],
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // legend: {
        //     data:[
        //         {name:'一部',icon:'circle'},
        //         {name:'二部',icon:'circle'},
        //         {name:'三部',icon:'circle'},
        //         {name:'四部',icon:'circle'},
        //         {name:'五部',icon:'circle'},
        //         ],
        //     left:"8%",
        //     top:"10%",
        //     itemWidth:7,
        //     itemHeight:7,
        //     textStyle:{
        //        color:'#00CCFF',
        //        fontSize:10
        //     }
        // },
        series: [
          // {
          //   name: '【短信送达】',
          //   type: 'pie',
          //   radius: '25%',
          //   center: ['25%', '25%'],
          //   data: [
          //     { value: 335, name: '已送达' },
          //     { value: 50, name: '未送达' },
          //   ],
          //   label: {
          //     fontSize: 8,
          //     color: '#00CCFF'
          //   },
          //   labelLine: {
          //     length: 15,
          //     length2: 10,
          //     lineStyle: {
          //       color: '#3F3F5C'
          //     }
          //   },
          //   itemStyle: {
          //     color: function (params) {
          //       var colorList = ['#1456FE','#00CCFF','#142AFE','#1493FE','#252448'];
          //       return colorList[params.dataIndex];
          //     },
          //     emphasis: {
          //       shadowBlur: 10,
          //       shadowOffsetX: 0,
          //       shadowColor: 'rgba(0, 0, 0, 0.5)'
          //     }
          //   }
          // },
          // {
          //   name: '【邮件送达】',
          //   type: 'pie',
          //   radius: '25%',
          //   center: ['75%', '25%'],
          //   data: [
          //     { value: 545, name: '已送达' },
          //     { value: 50, name: '未送达' },
          //   ],
          //   label: {
          //     fontSize: 8,
          //     color: '#00CCFF'
          //   },
          //   labelLine: {
          //     length: 15,
          //     length2: 10,
          //     lineStyle: {
          //       color: '#3F3F5C'
          //     }
          //   },
          //   itemStyle: {
          //     color: function (params) {
          //      var colorList = ['#1456FE','#00CCFF','#142AFE','#1493FE','#252448'];
          //       return colorList[params.dataIndex];
          //     },
          //     emphasis: {
          //       shadowBlur: 10,
          //       shadowOffsetX: 0,
          //       shadowColor: 'rgba(0, 0, 0, 0.5)'
          //     }
          //   }
          // },
          {
            name: '【短链查看】',
            type: 'pie',
            radius: '40%',
            center: ['20%', '45%'],
            data: [
              { value: 1500, name: '已查看' },
              { value: 80, name: '未查看' },
            ],
            label: {
              fontSize: 8,
              color: '#00CCFF'
            },
            labelLine: {
              length: 15,
              length2: 10,
              lineStyle: {
                color: '#3F3F5C'
              }
            },
            itemStyle: {
              color: function (params) {
                 var colorList = ['#1456FE','#00CCFF','#142AFE','#1493FE','#252448'];
                return colorList[params.dataIndex];
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          {
            name: '【应裁情况】',
            type: 'pie',
            radius: '40%',
            center: ['82%', '45%'],
            data: [
              { value: 435, name: '已应裁' },
              { value: 80, name: '未应裁' },
            ],
            label: {
              fontSize: 8,
              color: '#00CCFF'
            },
            labelLine: {
              length: 15,
              length2: 10,
              lineStyle: {
                color: '#3F3F5C'
              }
            },
            itemStyle: {
              color: function (params) {
                 var colorList = ['#1456FE','#00CCFF','#142AFE','#1493FE','#252448'];
                return colorList[params.dataIndex];
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
        ]
      };
      let myChart = echarts.init(document.getElementById(this.id));

      myChart.clear();
      myChart.resize(
        {
          width: document.getElementById(this.id).width,
          height: document.getElementById(this.id).heidth
        }
      )
      myChart.setOption(option);
    }
  },
  mounted() {
    this.setChart()
  },
}
</script>

<style lang="less" scoped>
.delivery_pie {
  height: 100%;
  width: 100%;
  padding: 0 20px;
}
</style>