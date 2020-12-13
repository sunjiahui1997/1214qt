<template>
  <div class="content333">
    <div class="center">
    <div class="bo-x">
      <div class="img1"><img src="../assets/电话.png" alt="" /></div>
      <div class="title33">联系我们</div>
      <div class="line33"></div>
      <div class="content11">
        联系人： 夏仁玉 <br />手 机：13805768895 <br />销售经理：黄广建<br />电
        话：18268115945 <br />
        邮箱：3536127966@qq.com <br />
        名称：湖州宏盛新材料科技有限公司 <br />
      </div>
      <div class="content22">地址：湖州市南浔区菱湖镇下昂工业园丰泰路<br>928号</div>
    </div>
    <div class="content-new">
      <div class="logo11"><img src="../assets/新闻01.png" alt="" /></div>
      <div class="title44">新闻中心</div>
      <div class="news-list">
        <router-view id="contentt"></router-view> 
      </div>
      <div class="position">
        当前位置：湖州宏盛新材料科技有限公司 >>新闻中心
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      pageTotal: 1, //总页数
      rows: 1, //总条数
      num: 7, //
      pageNo: 1, //当前页码
      pageSize: 4 // 条数
    };
  }
};
</script>

<style scoped>
.content333 {
  position: absolute;
  width: 1920px;
  height: auto;
}
.bo-x {
  width: 360px;
  height: 400px;
  background: #ffffff;
  border: 1px solid #ebebeb;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.06);
  border-radius: 9px;
  position: relative;
  left: 420px;
  margin-top: 30px;
  /* top: 550px; */
}
.center{
  display: flex;
}
.img1 {
  position: absolute;
  top: 19px;
  left: 16px;
  width: 20px;
  height: 26px;
}
.contentt{
  height: auto;
}
.title33 {
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #333333;
  position: absolute;
  top: 17px;
  left: 50px;
}
.line33 {
  width: 320px;
  height: 1px;
  background: #ebebeb;
  position: absolute;
  top: 60px;
  left: 20px;
}
.content11 {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  width: 271px;
  height: 170px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  position: absolute;
  top: 95px;
  left: 30px;
  line-height: 35px;
  white-space: nowrap;
}
.content22 {
  position: absolute;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  top: 320px;
  left: 31px;
}
.logo11 {
  width: 28px;
  height: 25px;
}
.content-new {
  position: relative;
  /* top: 550px; */
  left: 460px;
  width: 750px;
  height: auto;
  margin-top: 51px;
}
.title44 {
  position: absolute;
  top: -2px;
  left: 40px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #333333;
}
.position {
  position: absolute;
  top: 5px;
  left: 337px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #999999;
}
.news-list {
  /* position: relative; */
  width: 680px;
  height: auto;
  margin-top: 46px;
  /* top: 46px; */
  /* display: flex; */
  /* flex-wrap: nowrap; */
}
.line-new {
  width: 680px;
  height: 1px;
  background: #ebebeb;
  position: absolute;
  top: 40px;
}
.foot {
  position: relative;
  width: 100%;
  height: 80px;
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