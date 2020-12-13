<template>
  <div class="container">
    <div class="new">
      <div class="line"></div>
      <div class="title">{{xinwen.title}}</div>
      <div class="date">{{xinwen.time}}</div>
      <div class="img"><img class="img" :src="xinwen.ip1" alt="" /></div>
      <div class="content">
        {{xinwen.content}}
      </div>
      <div class="foot">
        <div class="foot1" style="padding-top: 24px">
          Copyright© 2020 湖州宏盛新材料科技有限公司 版权所有
        </div>
        <div class="foot1" style="margin-top: 7px">浙ICP备案号17000000号</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data(){
        return{
            xinwen:''
        }
    },
  created() {
    console.log(this.$route.query);
    this.xinwen = this.$route.query;
  },
};
</script>

<style scoped>
.line {
  width: 680px;
  height: 1px;
  background: #ebebeb;
  position: absolute;
  top: -30px;
}
.new {
  width: 680px;
  height: 1000px;
  /* display: ; */
}
.title {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #333333;
  /* position: absolute; */
  /* margin-left: 305px; */
  /* top: 10px; */
  /* left: 305px; */
  text-align: center;
}
.date {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #cccccc;
  /* position: absolute; */
  /* left: 305px; */
  /* top: 37px; */
  text-align: center;
  margin: 12px 0;
}
.img {
  width: 680px;
  height: 180px;
  background: #cccccc;
  /* position: absolute; */
  /* top: 78px; */
}
.content {
  /* width: 679px; */
  height: auto;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #666666;
  /* position: absolute; */
  /* top: 292px; */
  line-height: 24px;
  word-wrap:break-word;
  margin: 10px 0px 80px 10px;
}
.foot {
  position: relative;
  width: 1920px;
  height: 80px;
  left: -818px;
  /* top: 1300px; */
  bottom: 0px;
  background: #359eae;
}
.foot1 {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
}
</style>