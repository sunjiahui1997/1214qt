<template>
  <div>
    <div class="nihao">
      <img :src="xinwen.ip" alt="" />
      <div class="desc">{{xinwen.name}}</div>
      <div class="item" id="item1">
        <div class="name">模数：</div>
        <div class="para">{{xinwen.ms | hava }}</div>
      </div>
      <div class="line" id="line1"></div>
      <div class="item" id="item2">
        <div class="name">浓度：</div>
        <div class="para">{{xinwen.nd | hava}}</div>
      </div>
      <div class="line" id="line2"></div>
      <div class="item" id="item3">
        <div class="name" id="name3">分子式：</div>
        <div class="para">{{xinwen.fzs| hava}}</div>
      </div>
      <div class="line" id="line3"></div>
      <div class="item" id="item4">
        <div class="name">外观：</div>
        <div class="para">{{xinwen.wg| hava}}</div>
      </div>
      <div class="line" id="line4"></div>
      <div class="item" id="item5">
        <div class="name">比重：</div>
        <div class="para">{{xinwen.bz| hava}}</div>
      </div>
      <div class="line" id="line5"></div>
      <div class="item" id="item6">
        <div class="name">加工说明：</div>
        <div class="para">{{xinwen.show| hava}}</div>
      </div>
      <div class="line" id="line6"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xinwen: "",
    };
  },
  created() {
    console.log(this.$route.query);
    this.xinwen = this.$route.query;
  },
  filters:{
      hava(val){
          if(val === '' || val === null){
              return '暂无'
          }else{
              return val
          }
      }
  }
};
</script>

<style scoped>
.nihao {
  position: relative;
  left: 220px;
  width: 240px;
}
img {
  width: 240px;
  height: 240px;
}
.desc {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
  margin-top: 13px;
  text-align: center;
  /* margin-left: 22px; */
}
.item {
  display: flex;
  position: relative;
}
#item1 {
  top: 30px;
}
#item2 {
  top: 50px;
}
#item3 {
  top: 70px;
}
#item4 {
  top: 100px;
}
#item5 {
  top: 130px;
}
#item6 {
  top: 160px;
}
#line1 {
  top: 41px;
}
#line2 {
  top: 61px;
}
#line3 {
  top: 81px;
}
#line4 {
  top: 111px;
}
#line5 {
  top: 131px;
}
#line6 {
  top: 161px;
}
.name {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #666666;
  line-height: 24px;
  position: relative;
  right: 42px;
}
#name3{
    left: -47px;
}
#para3{
    left: 120px;
}
.para {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #666666;
  line-height: 24px;
  position: absolute;
  left: 159px;
}
.line {
  width: 680px;
  height: 1px;
  background: #ebebeb;
  position: relative;
  right: 226px;
}
</style>