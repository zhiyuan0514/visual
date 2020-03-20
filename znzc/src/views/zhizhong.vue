
<template>
  <div class="circle">
<Spin size="large" fix v-if="spinShow"></Spin>

    <Row class='content'>
      <Col span="6">
      <div
        class="list"
        style="margin:35px 0 25px 0;"
      >
        <div class="left">
          <span class='title'><span class="title-6">案件月度统计</span></span>
          <span class="angle1"></span>
          <span class="angle2"></span>
          <span class="angle3"></span>
          <span class="angle4"></span>
          <div class="chart-68 my_chart">
            <line-bar
              ref="chart1"
              id="left_1"
            ></line-bar>
          </div>
          <!-- <div class="chart-32">
                            <radar-chart ref="chart2" id="left_2" title='各部门聊天对比' :data="chatRadarData"></radar-chart>
                        </div> -->
        </div>
      </div>
      <div class="list" style="margin-bottom:25px;">
        <div class="left">
          <span class='title'><span class="title-10">送达情况</span></span>
          <span class="angle1"></span>
          <span class="angle2"></span>
          <span class="angle3"></span>
          <span class="angle4"></span>
          <div class="chart-68 my_chart">
            <delivery-pie
              ref="chart12"
              id="bottom_4"
            ></delivery-pie>
          </div>

        </div>
      </div>
      <div class="list">
        <div class="left">
          <span class='title'><span class="title-8">送达消息</span></span>
          <span class="angle1"></span>
          <span class="angle2"></span>
          <span class="angle3"></span>
          <span class="angle4"></span>
          <div class="chart-68 my_chart">
            <ul class="send_msg_title">
              <li><span>送达情况</span><span>送达方式</span><span>接收人</span><span>送达内容</span></li>
            </ul>
            <div style="overflow: hidden;height: 83%;">
              <ul class="send_msg">
                <li
                  v-for="item in sendMsg"
                  class=""
                ><span>已送达</span><span>{{item.sendway}}</span><span style="padding-right:5px;">{{item.accepter}}</span><span>{{item.sendcontent}}</span></li>
              </ul>
            </div>
            <!-- <double-line
              ref="chart9"
              id="bottom_1"
            ></double-line> -->
          </div>
        </div>
      </div>
      </Col>
      <Col span="12" style="margin-top:30px">
      <div class="circlePie">
        <span class="my_title">案件总标的金额</span>
        <div class="center-num">
          <ul>
            <li v-for="item in moneySum"><span>{{item}}</span></li>
          </ul>
        </div>
        <div
          class="center-map"
          style="height:75%;margin-top: 38px;"
        >
          <china-case-map-line ref="chinaMap"></china-case-map-line>
        </div>
        <canvas
          id="dot"
          width="500"
          height="500"
          style=""
        ></canvas>
      </div>
      </Col>
      <Col span="6">
      <div
        class="list"
        style="margin:35px 0 25px 0;"
      >
        <div class="right">
          <span class='title'><span class="title-10">案件科类分布</span></span>
          <span class="angle1"></span>
          <span class="angle2"></span>
          <span class="angle3"></span>
          <span class="angle4"></span>
          <!-- <div class="chart-32">
            <radar-chart
              ref="chart5"
              id="right_1"
              title='各部门好友数量对比'
              :data="friendRadarData"
            ></radar-chart>
          </div> -->
          <div class="chart-68 my_chart">
            <case-class
              ref="chart6"
              id="right_2"
            ></case-class>
            <!-- <double-bar-chart
              ref="chart6"
              id="right_2"
            ></double-bar-chart> -->
          </div>

        </div>
      </div>
      <div
        class="list"
        style="margin-bottom:25px;"
      >
        <div class="right">
          <span class='title'><span class="title-10">实时案件信息</span></span>
          <span class="angle1"></span>
          <span class="angle2"></span>
          <span class="angle3"></span>
          <span class="angle4"></span>

          <div class="chart-68 my_chart">
            <rt-chart
              ref="chart8"
              id="right_4"
            ></rt-chart>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="right">
          <span class='title'><span class="title-10">被申请人动态</span></span>
          <span class="angle1"></span>
          <span class="angle2"></span>
          <span class="angle3"></span>
          <span class="angle4"></span>
          <div class="chart-68 my_chart">
            <ul class="respondent_msg_title">
              <li><span>地区</span><span>被申请人</span><span>联络方式</span></li>
            </ul>
            <div style="overflow: hidden;height: 83%;">
              <ul class="respondent_msg">
                <li
                  v-for="item in respondentMsg"
                  class=""
                ><span>{{item.district}}</span><span style="">{{item.respondent}}</span><span>{{item.phone}}</span></li>
              </ul>
            </div>
            <!-- <three-bar-chart
              ref="chart11"
              id="bottom_3"
            ></three-bar-chart> -->
          </div>
        </div>
      </div>
      </Col>
    </Row>

  </div>
</template>

<script>
// import echarts from 'echarts';
import $ from 'jquery';
//
// import areaChart from './components/mobileMaket/areaChart.vue'
// import radarChart from './components/mobileMaket/radarChart.vue'
// import barChart from './components/mobileMaket/barChart.vue'
// import doubleBarChart from './components/mobileMaket/doubleBarChart.vue'
// import singleAreaChart from './components/mobileMaket/singleAreaChart.vue'
// import doubleLine from './components/mobileMaket/doubleLine.vue'
// import threeBarChart from './components/mobileMaket/threeBarChart.vue'
// import pieChart from './components/mobileMaket/pieChart.vue'
// import doubleBars from './components/mobileMaket/doubleBars.vue'
//
import lineBar from './components/zhizhong/lineBar'
import deliveryPie from './components/zhizhong/deliveryPie'
import caseClass from './components/zhizhong/caseClass'
import rtChart from './components/zhizhong/rtChart'
import chinaCaseMap from './components/zhizhong/chinaCaseMap';
import chinaCaseMapLine from './components/zhizhong/chinaCaseMapLine';
export default {
  components: {
    // 
    // areaChart,
    // radarChart,
    // barChart,
    // doubleBarChart,
    // singleAreaChart,
    // doubleLine,
    // threeBarChart,
    // pieChart,
    // doubleBars,
    // 
    lineBar,
    deliveryPie,
    caseClass,
    rtChart,
    chinaCaseMap,
    chinaCaseMapLine
  },
  data() {
    return {
      spinShow:true,
      moneySum: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      inintMoney: '1500940',
      sendMsgUpTimer: '',
      respondentUpTimer: '',
      animateS_num: 1,
      animateR_num: 0,
      sendMsg: [
        { sendway: '邮件通知', accepter: '李某', sendcontent: '组庭通知书' },
        { sendway: '短信通知', accepter: '赵某', sendcontent: '裁决通知书' },
        { sendway: '短信通知', accepter: '张某', sendcontent: '答辩通知书' },
        { sendway: '邮件通知', accepter: '张某', sendcontent: '组庭通知书' },
        { sendway: '短信通知', accepter: '刘某', sendcontent: '答辩通知书' },
        { sendway: '邮件通知', accepter: '陈某', sendcontent: '受理通知书' },

        { sendway: '邮件通知', accepter: '李某', sendcontent: '组庭通知书' },
        { sendway: '短信通知', accepter: '赵某', sendcontent: '裁决通知书' },
        { sendway: '短信通知', accepter: '张某', sendcontent: '答辩通知书' },
        { sendway: '邮件通知', accepter: '张某', sendcontent: '组庭通知书' },
        { sendway: '短信通知', accepter: '刘某', sendcontent: '答辩通知书' },
        { sendway: '邮件通知', accepter: '陈某', sendcontent: '受理通知书' },
      ],
      respondentMsg: [
        { district: '四川', respondent: '李某', phone: '150xxxx0512' },
        { district: '北京', respondent: '张某', phone: '178xxxx0618' },
        { district: '安徽', respondent: '陈某', phone: '189xxxx8789' },
        { district: '福建', respondent: '赵某', phone: '157xxxx0916' },
        { district: '海南', respondent: '李某', phone: '189xxxx1658' },
        { district: '河南', respondent: '张某', phone: '155xxxx8512' },
        { district: '北京', respondent: '张某', phone: '178xxxx0618' },

        { district: '四川', respondent: '李某', phone: '150xxxx0512' },
        { district: '北京', respondent: '张某', phone: '178xxxx0618' },
        { district: '安徽', respondent: '陈某', phone: '189xxxx8789' },
        { district: '福建', respondent: '赵某', phone: '157xxxx0916' },
        { district: '海南', respondent: '李某', phone: '189xxxx1658' },
        { district: '河南', respondent: '张某', phone: '155xxxx8512' },
        { district: '北京', respondent: '张某', phone: '178xxxx0618' },

      ],
      everyPer: 0,
      xOffset: 0,
      IsdrawCircled: false,
      circle: {
        x: 250,
        y: 250,
        radius: 218
      },
      title: ['累计话术违规个数:456,789', '累计办公次数:123,12', '累计办公时长:134,23', '累计服务好友次数:234,234', '累计服务好友数量:123,123', '累计设备违规个数:678,123'],
      chatLineData: [
        {
          name: '聊天次数',
          color: ['158,112,255', '110,94,255'],
          data: [200, 12, 21, 54, 260, 130, 210],
        },
        {
          name: '聊天人数',
          color: ['72,206,253', '83,86,241'],
          data: [50, 182, 234, 191, 190, 30, 10],
        }
      ],
      chatRadarData: [
        {
          name: '聊天次数',
          color: '#0DF5F8',
          data: [100, 8, 0.40, -80, 2000, 332],
        },
        {
          name: '聊天人数',
          color: '#7921AD',
          data: [60, 5, 0.30, -100, 1500, 221],
        }
      ],
      officeRadarData: [
        {
          name: '办公时长',
          color: '#55D35B',
          data: [100, 8, 0.40, -80, 2000, 332],
        }
      ],
      friendRadarData: [
        {
          name: '好友总数',
          color: '#FA8486',
          data: [100, 8, 0.40, -80, 2000, 332],
        }
      ],
      momentsRadarData: [
        {
          name: '朋友圈个数',
          color: '#D91748',
          data: [100, 8, 0.40, -80, 2000, 332],
        }
      ],
      warea: { x: 250, y: 250, max: 700 },
      dots: []
    }
  },

  methods: {
    setMoneySum() {
      let moneyArr = this.inintMoney.split('');
      // console.log(moneyArr)
      this.moneySum.splice(this.moneySum.length - moneyArr.length);
      this.moneySum = this.moneySum.concat(moneyArr);
    },
    drawDot() {
      let canvas = document.getElementById('dot');
      let ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let that = this;


      // 将鼠标坐标添加进去，产生一个用于比对距离的点数组

      var ndots = [that.warea].concat(that.dots);

      that.dots.forEach(function (dot) {




        // 粒子位移

        dot.x += dot.xa;

        dot.y += dot.ya;




        // 遇到边界将加速度反向

        dot.xa *= (dot.x > canvas.width || dot.x < 0) ? -1 : 1;

        dot.ya *= (dot.y > canvas.height || dot.y < 0) ? -1 : 1;




        // 绘制点
        ctx.fillStyle = '#013D7A';
        ctx.beginPath();
        ctx.arc(dot.x - 0.5, dot.y - 0.5, 1, 0, 2 * Math.PI, true);
        ctx.closePath();
        ctx.fill();




        // 循环比对粒子间的距离

        for (var i = 0; i < ndots.length; i++) {

          var d2 = ndots[i];
          if (dot === d2 || d2.x === null || d2.y === null) continue;
          var xc = dot.x - d2.x;

          var yc = dot.y - d2.y;




          // 两个粒子之间的距离

          var dis = xc * xc + yc * yc;




          // 距离比

          var ratio;




          // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线

          if (dis < d2.max) {




            // 如果是鼠标，则让粒子向鼠标的位置移动

            if (d2 === that.warea && dis > (d2.max / 2)) {

              dot.x -= xc * 0.03;

              dot.y -= yc * 0.03;

            }




            // 计算距离比

            ratio = (d2.max - dis) / d2.max;




            // 画线

            ctx.beginPath();

            ctx.lineWidth = ratio / 2;
            if (d2 == that.warea) {
              ctx.strokeStyle = 'rgba(0,0,0,0)';
            } else {
              ctx.strokeStyle = 'rgba(0,0,0,' + (ratio + 0.2) + ')';
            }



            ctx.moveTo(dot.x, dot.y);

            ctx.lineTo(d2.x, d2.y);

            ctx.stroke();

          }

        }




        // 将已经计算过的粒子从数组中删除

        ndots.splice(ndots.indexOf(dot), 1);

      });
      window.requestAnimationFrame(this.drawDot);
    },
    rads(x) { // 弧度转换
      return Math.PI * x / 180;
    },
    act() {
      //清空画布
      let context = $("#main").get(0).getContext('2d');
      context.clearRect(0, 0, $("#main").get(0).width, $("#main").get(0).height);
      this.drawPie(this.everyPer);
      window.requestAnimationFrame(this.act);
      this.everyPer += Math.PI / 180;
      var speed = 0.07; //波浪速度，数越大速度越快
      this.xOffset += speed;

    },
    drawPie(everyPer) {
      let context = $("#main").get(0).getContext('2d');
      context.save();
      context.fillStyle = 'rgba(18,55,88,.2)';
      context.beginPath();
      context.arc(this.circle.x, this.circle.y, 245, 0, 2 * Math.PI, true);
      context.closePath();
      context.fill();
      context.restore();

      //外圆
      context.save();
      context.shadowBlur = 50;
      context.shadowColor = "#123959";
      context.fillStyle = '#080D27';
      context.beginPath();
      context.arc(this.circle.x, this.circle.y, 235, 0, 2 * Math.PI, true);
      context.closePath();
      context.fill();
      context.restore();
      for (let i = 0; i < 6; i++) {//绘制文字。
        context.save()
        this.drawCircularText(this.circle, this.title[i], this.rads(i * 60 - 110), this.rads(i * 60 - 65), i);
        context.restore();
      }
      // 旋转小球
      var x = 240 * Math.cos(everyPer);
      var y = 240 * Math.sin(everyPer);
      context.save();
      context.fillStyle = 'rgb(56,252,253)';
      context.shadowBlur = 80;
      context.shadowColor = "#39E9EE";
      context.translate(this.circle.x, this.circle.y);
      context.beginPath();
      // context.arc(x,y,5,0,2*Math.PI);
      // context.arc(-x,-y,5,0,2*Math.PI);
      context.closePath();
      context.fill();
      context.restore();
      // 
      context.save();
      context.fillStyle = '#153776';
      context.beginPath();
      context.arc(this.circle.x, this.circle.y, 200, 0, 2 * Math.PI, true);
      context.closePath();
      context.fill();

      context.fillStyle = "#121535";
      context.beginPath();
      context.arc(this.circle.x, this.circle.y, 190, 0, 2 * Math.PI, true);
      context.closePath();
      context.fill();
      //内圆
      var nowRange = 36;
      context.save();
      if (this.IsdrawCircled == false) {
        this.drawCircle(context);
      }

      this.drawSin(this.xOffset, context, nowRange);
      this.drawText(context, nowRange);
      context.restore();
      for (let i = 0; i < 6; i++) {//绘制刻度。
        context.save();
        context.translate(this.circle.x, this.circle.y);
        context.rotate((-Math.PI / 2 + Math.PI / 6) + i * Math.PI / 3);  //旋转坐标轴。坐标轴x的正方形从 向上开始算起
        context.beginPath();
        context.moveTo(190, 0);
        context.lineTo(200, 0);
        context.lineWidth = 4;
        context.strokeStyle = '#0A122D';
        context.stroke();
        context.closePath();
        context.restore();
      }
    },
    drawCircle(ctx) { // 画圆
      ctx.beginPath();
      ctx.fillStyle = '#209ADF';
      ctx.arc(this.circle.x, this.circle.y, 120, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(this.circle.x, this.circle.y, 120, 0, 2 * Math.PI);
      ctx.clip();

    },
    drawSin(xOffset, ctx, nowRange) { //画sin 曲线函数
      var mW = 240;
      var mH = 240;
      var sX = 0;
      var sY = mH / 2;
      var axisLength = mW; //轴长
      var waveWidth = 0.04; //波浪宽度,数越小越宽
      var waveHeight = 12; //波浪高度,数越大越高
      ctx.save();
      ctx.translate(130, 130);
      var points = []; //用于存放绘制Sin曲线的点
      ctx.beginPath();
      //在整个轴长上取点
      for (var x = sX; x < sX + axisLength; x += 20 / axisLength) {
        //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
        var y = -Math.sin((sX + x) * waveWidth + xOffset);
        var dY = mH * (1 - nowRange / 100);
        points.push([x, dY, dY + y * waveHeight]);
        ctx.lineTo(x, dY + y * waveHeight);
      }
      //封闭路径
      ctx.lineTo(axisLength, mH);
      ctx.lineTo(sX, mH);
      ctx.lineTo(points[0][0], points[0][1]);
      ctx.fillStyle = '#2C50B1';
      ctx.fill();

      ctx.restore();
    },
    drawText(ctx, nowRange) {
      ctx.save();
      ctx.translate(130, 130);
      var size = 50;
      ctx.font = size + 'px Microsoft Yahei';
      ctx.textAlign = 'center';
      ctx.fillStyle = "#95EFFF";
      ctx.fillText(nowRange + '%', 120, 120 - size / 2);


      ctx.restore();
      ctx.save()
      var size = 25;
      ctx.translate(130, 130);
      ctx.font = size + 'px Microsoft Yahei';
      ctx.textAlign = 'center';
      ctx.fillStyle = "#95EFFF";
      ctx.fillText("平均营销质量指数", 120, 120 + size);
      ctx.restore();
    },
    drawCircularText(s, string, startAngle, endAngle, n) {
      let context = $("#main").get(0).getContext('2d');
      var radius = s.radius,
        angleDecrement,
        angle = parseFloat(startAngle),
        index = 0,
        character;
      var arr = string.split(':')

      context.save();
      context.fillStyle = '#fff';
      context.font = '12px 微软雅黑 ';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      if (n < 2 || n == 5) {
        while (index < string.length) {
          character = string.charAt(index);
          if (arr[0].indexOf(character) >= 0) {
            if (arr[0].length > 6) {
              angleDecrement = (startAngle - endAngle) / (string.length - 3)
            } else {
              angleDecrement = (startAngle - endAngle) / (string.length - 1)
            }

          } else {
            angleDecrement = (startAngle - endAngle) / (string.length + 6)
          }
          context.save();
          context.beginPath();
          context.translate(s.x + Math.cos(angle) * radius,
            s.y + Math.sin(angle) * radius);
          context.rotate(Math.PI / 2 + angle);
          context.fillText(character, 0, 0);
          angle -= angleDecrement;
          index++;
          context.restore();
        }
      } else {
        while (index < string.length) {
          character = string.split("").reverse().join("").charAt(index);// 字符串反转
          if (arr[1].indexOf(character) >= 0) {
            angleDecrement = (startAngle - endAngle) / (string.length + 6)
          } else {
            if (arr[0].length > 6) {
              angleDecrement = (startAngle - endAngle) / (string.length - 3)
            } else {
              angleDecrement = (startAngle - endAngle) / (string.length - 1)
            }
          }
          context.save();
          context.beginPath();
          context.translate(s.x + Math.cos(angle) * radius,
            s.y + Math.sin(angle) * radius);
          context.rotate(-Math.PI / 2 + angle);// 旋转文字
          context.fillText(character, 0, 0);
          angle -= angleDecrement;
          index++;
          context.restore();
        }
      }
      context.restore();
    },
    // 送达滚动
    animateS() {
      let parent = document.querySelector('.send_msg');
      parent.style.transition = 'transform 1s';
      parent.style.transform = 'translateY(-' + this.animateS_num * 36 + 'px)'
      if (this.animateS_num == 6) {
        setTimeout(() => {
          parent.style.transition = 'none';
          parent.style.transform = 'translateY(0)';
          this.animateS_num = 1
        }, 1000)
      }
      this.animateS_num = this.animateS_num + 1
    },
    // 被申请人滚动
    animateR() {
      window.cancelAnimationFrame(this.respondentUpTimer)
      let parent = document.querySelector('.respondent_msg');
      let height = parent.offsetHeight / 2;
      this.animateR_num += 0.5
      parent.style.transform = 'translateY(-' + this.animateR_num + 'px)'
      this.respondentUpTimer = window.requestAnimationFrame(this.animateR)
      if (this.animateR_num >= height) {
        this.animateR_num = 0
        parent.style.transform = 'translateY(-' + this.animateR_num + 'px)'
      }

    }
  },
  created(){

  },
  mounted() {

    this.spinShow=false;
    this.setMoneySum();
    // 数字增加
    var timer = setInterval(() => {
      this.inintMoney = parseInt(this.inintMoney) + Math.floor(Math.random() * 1000 + 1);
      this.inintMoney = this.inintMoney.toString();
      this.setMoneySum();
    }, 3000)
    // 送达滚动
    this.sendMsgUpTimer = setInterval(this.animateS, 2500)
    // 被申请人滚动
    this.animateR();
    $("#main").height($(".circlePie").height())
    $("#main").width($(".circlePie").height())
    $("#dot").height($(".circlePie").height())
    $("#dot").width($(".circlePie").height())
    for (let i = 0; i < 200; i++) {

      let x = Math.random() * $(".circlePie").height();

      let y = Math.random() * $(".circlePie").height();

      let xa = Math.random() * 2 - 1;

      let ya = Math.random() * 2 - 1;




      this.dots.push({

        x: x,

        y: y,

        xa: xa,

        ya: ya,

        max: 60

      })

    }
    setTimeout(() => {

      this.drawDot();

    }, 100);
    this.act();
    let _this = this;
    window.onresize = function () {
      // 通过捕获系统的onresize事件触发我们需要执行的事件
      $("#main").height($(".circlePie").height())
      $("#main").width($(".circlePie").height());
      $("#dot").height($(".circlePie").height())
      $("#dot").width($(".circlePie").height());
      for (let i = 1; i < 13; i++) {
        _this.$refs['chart' + i].setChart();
      }
    }

  }
}
</script>

<style lang="less" scoped>
@keyframes numChange {
  0% {
   background-color: #6eddf1;
  }
  50% {
     background-color: #09102e;
  }
  100% {
    background-color: #6eddf1;
  }
}
.circle {
  height: 100%;
  width: 100%;
  padding: 50px;
  background: #09102e;
  position: relative;
  .header {
    text-align: center;
    height: 54px;
  }
  .content {
    // height: 65%;
    height: 100%;

    .ivu-col {
      height: 100%;
    }
    .circlePie {
      height: 100%;
      // padding: 0 0 40px;
      text-align: center;
      position: relative;
      .center-num {
        height: 18%;
        span {
          // color: #fff;
          // background-color: #2043aa;
          animation: numChange 3s ease infinite;
          background: radial-gradient(
            30px 100px ellipse,
            rgba(7, 9, 34, 0.8) 60%,
            #154391
          );
          color: #6eddf1;
        }
      }
      // .center-bottom {
      // }
      canvas {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, 0);
      }
      #dot {
        background: rgba(0, 0, 0, 0);
      }
    }
    .list {
      // height: 33%;
      height: 31%;
      .left,
      .right {
        background: #0d1341;
      }
      .left,
      .right,
      .center {
        width: 100%;
        // height: 90%;
        height: 100%;
        border: 1px solid #0d2451;
        position: relative;
        #left1,
        #left2,
        #left3,
        #right1,
        #right2,
        #right3,
        #center2 {
          height: 100%;
        }
        .chart-68 {
          width: 68%;
          height: 100%;
          float: left;
        }
        .chart-68.my_chart {
          width: 100% !important;
        }
        .chart-32 {
          width: 32%;
          height: 100%;
          float: left;
        }
        .angle1 {
          display: inline-block;
          position: absolute;
          width: 10px;
          height: 10px;
          top: 0;
          left: 0;
          border-top: 1px solid #1c5ab3;
          border-left: 1px solid #1c5ab3;
        }
        .angle2 {
          display: inline-block;
          position: absolute;
          width: 10px;
          height: 10px;
          top: 0;
          right: 0;
          border-top: 1px solid #1c5ab3;
          border-right: 1px solid #1c5ab3;
        }
        .angle3 {
          display: inline-block;
          position: absolute;
          width: 10px;
          height: 10px;
          bottom: 0;
          left: 0;
          border-bottom: 1px solid #1c5ab3;
          border-left: 1px solid #1c5ab3;
        }
        .angle4 {
          display: inline-block;
          position: absolute;
          width: 10px;
          height: 10px;
          bottom: 0;
          right: 0;
          border-bottom: 1px solid #1c5ab3;
          border-right: 1px solid #1c5ab3;
        }
        .title {
          position: absolute;
          display: inline-block;
          color: #6eddf1;
          background: #14418e;
          left: 50%;
          transform: translate(-50%, -50%);
          .title-6 {
            display: inline-block;
            padding: 5px 15px;
            //border-radius: 5px;
            background: radial-gradient(
              60px 18px ellipse,
              rgba(7, 9, 34, 0.8) 60%,
              rgb(21, 67, 145)
            );
          }
          .title-8 {
            display: inline-block;
            padding: 5px 15px;
            //border-radius: 5px;
            background: radial-gradient(
              75px 18px ellipse,
              rgba(7, 9, 34, 0.8) 60%,
              rgb(21, 67, 145)
            );
          }
          .title-10 {
            display: inline-block;
            padding: 5px 15px;
            //border-radius: 5px;
            background: radial-gradient(
              95px 18px ellipse,
              rgba(7, 9, 34, 0.8) 60%,
              rgb(21, 67, 145)
            );
          }
        }
      }
    }
  }
  .bottom-list {
    height: 35%;
    .ivu-col {
      height: 100%;
      .list {
        height: 100%;
        width: 33.3333%;
        padding-right: 1.5%;
        float: left;
        #bottom_4 {
          padding: 0 20px;
        }
        .bottom {
          width: 100%;
          height: 100%;
          border: 1px solid #0d2451;
          position: relative;
          .angle1 {
            display: inline-block;
            position: absolute;
            width: 10px;
            height: 10px;
            top: 0;
            left: 0;
            border-top: 1px solid #1c5ab3;
            border-left: 1px solid #1c5ab3;
          }
          .angle2 {
            display: inline-block;
            position: absolute;
            width: 10px;
            height: 10px;
            top: 0;
            right: 0;
            border-top: 1px solid #1c5ab3;
            border-right: 1px solid #1c5ab3;
          }
          .angle3 {
            display: inline-block;
            position: absolute;
            width: 10px;
            height: 10px;
            bottom: 0;
            left: 0;
            border-bottom: 1px solid #1c5ab3;
            border-left: 1px solid #1c5ab3;
          }
          .angle4 {
            display: inline-block;
            position: absolute;
            width: 10px;
            height: 10px;
            bottom: 0;
            right: 0;
            border-bottom: 1px solid #1c5ab3;
            border-right: 1px solid #1c5ab3;
          }
          .title {
            position: absolute;
            display: inline-block;
            color: #6eddf1;
            background: #14418e;
            left: 50%;
            transform: translate(-50%, -50%);
            .title-6 {
              display: inline-block;
              padding: 5px 15px;
              //border-radius: 5px;
              background: radial-gradient(
                60px 18px ellipse,
                rgba(7, 9, 34, 0.8) 60%,
                rgb(21, 67, 145)
              );
            }
            .title-8 {
              display: inline-block;
              padding: 5px 15px;
              //border-radius: 5px;
              background: radial-gradient(
                75px 18px ellipse,
                rgba(7, 9, 34, 0.8) 60%,
                rgb(21, 67, 145)
              );
            }
            .title-10 {
              display: inline-block;
              padding: 5px 15px;
              //border-radius: 5px;
              background: radial-gradient(
                95px 18px ellipse,
                rgba(7, 9, 34, 0.8) 60%,
                rgb(21, 67, 145)
              );
            }
          }
        }
      }
      .right-bottom {
        width: 100%;
        padding-right: 0;
        .bottom1 {
          width: 100%;
        }
      }
    }
  }
}
#chinaMap {
  height: 100%;
}
.center-num {
  ul {
    width: 100%;
    height: 100%;
    li {
      display: inline-block;
      height: 100%;
      width: 8.5%;
      font-size: 100px;
      color: #6eddf1;
    }
  }
}
.send_msg_title,
.respondent_msg_title {
  margin-top: 22px;
  width: 100%;
  list-style: none;
  li {
    text-align: center;
    color: #6eddf1;
    span {
      display: inline-block;
      width: 24%;
      font-size: 15px;
      // color: #93adb1;
    }
  }
}
.send_msg,
.respondent_msg {
  width: 100%;
  // height: 83%;
  list-style: none;
  line-height: 35px;
  overflow: hidden;

  li {
    text-align: center;
    color: #6eddf1;
    // transition: all .6s ease;
    span {
      display: inline-block;
      width: 24%;
      text-align: center;
      font-size: 13px;
      color: #93adb1;
    }
  }
}
.respondent_msg_title,
.respondent_msg li {
  span {
    &:nth-child(1) {
      width: 23%;
    }
    &:nth-child(2) {
      width: 30%;
    }
    &:nth-child(3) {
      width: 46%;
    }
  }
}

.respondent_msg li {
  span {
    letter-spacing: 1px;
  }
}
// .respondent_msg{
//   animation: myMove 8s linear infinite;
//   animation-fill-mode: forwards;
//   animation-delay: 1s;
// }

/*文字无缝滚动*/
// @keyframes myMove {
//   0% {
//     transform: translateY(0);
//   }
//   100% {
//     transform: translateY(-216px);
//   }
// }
.my_title {
  display: inline-block;
  padding: 5px 15px;
  background: radial-gradient(
    60px 18px ellipse,
    rgba(7, 9, 34, 0.8) 60%,
    #154391
  );
  color: #6eddf1;
  font-size: 13px;
}
</style>
