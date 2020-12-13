<template>
  <div>
    <div id="black"></div>
    <div id="profile">
      <div id="left"><img src="../assets/公司简介（外部）.png" alt="" /></div>
      <div id="right">
        <div id="title2">Company Profile</div>
        <div id="title3">公司简介</div>
        <div id="line3"></div>
        <p id="content2">
          我公司坐落在美丽的富春江边，离杭州35公里，离杭千高速8公里，富阳至萧山的主要公路春永线贯穿其间，水陆交通便利。我公司从1991年建厂（原江南水玻璃厂）至今已20余年。
          我公司主要生产硅酸钾、硅酸钠、和硅酸钾钠，俗称水玻璃（泡花碱）。主要用于焊接、制皂、洗衣粉、铸造、陶瓷、白碳黑、浇注、造纸、印染等工业领域。
        </p>
        <div id="more"><router-link to="/intro">More</router-link></div>
      </div>
    </div>
    <div class="center">
      <div id="new-center">Product Center</div>
      <div id="news">产品中心</div>
    </div>
    <div id="iTem">
      <div class="item1" id="left1">
        <div class="tiTle">碳酸钠</div>
        <div class="readMore">
          <router-link to="/product/proitem/">查看详情</router-link>
        </div>
      </div>
      <div class="item1" id="center1">
        <div class="tiTle">碳酸钾</div>
        <div class="readMore">
          <router-link to="/product/prok/">查看详情</router-link>
        </div>
      </div>
      <div class="item1" id="right1">
        <div class="tiTle">碳酸钾钠</div>
        <div class="readMore">
          <router-link to="/product/prokna/">查看详情</router-link>
        </div>
      </div>
    </div>
    <div id="product">
      <div class="product-item">
        <img src="../assets/产品图.png" alt="" />
        <div class="text">35℃～40℃不透明中性泡化碱</div>
      </div>

      <div class="product-item">
        <img src="../assets/产品图.png" alt="" />
        <div class="text">35℃～40℃透明中性泡化碱</div>
      </div>
      <div class="product-item">
        <img src="../assets/产品图.png" alt="" />
        <div class="text">40℃～52℃碱性泡化碱</div>
      </div>
      <div class="product-item">
        <img src="../assets/产品图.png" alt="" />
        <div class="text">40℃碱性泡化碱</div>
      </div>
      <div class="product-item">
        <img src="../assets/产品图.png" alt="" />
        <div class="text">51℃碱性泡化碱</div>
      </div>
    </div>
    <div class="center">
      <div id="new-center">News Center</div>
      <div id="news">新闻中心</div>
    </div>
    <div class="btn">
      <div class="con2">
        <div
          class="con-item"
          :class="{ active: 0 === currentIndex }"
          @click="change(0)"
        >
          <router-link to="/home/homeitem">企业咨询</router-link>
        </div>
      </div>
      <div class="con2">
        <div
          class="con-item"
          :class="{ active: 1 === currentIndex }"
          @click="change(1)"
        >
          <router-link to="/home/homebus">行业动态</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="end">
      <div class="title-end1">联系我们</div>
      <div class="contact">销售经理：黄广建<br />手 机：18268115945</div>
      <div class="title-content">
        名称： 湖州宏盛新材料科技有限公司<br />地址：湖州市南浔区菱湖镇下昂工业园丰泰路928号<br />联系人：夏仁玉<br />手
        机：13805768895 <br />邮箱：3536127966@qq.com
      </div>
      <div class="title-end2">在线留言</div>
      <input
        class="input-end1"
        type="text"
        v-model="form.name"
        placeholder="请输入您的姓名"
        id="input1"
      />
      <input
        type="text"
        class="input-end1"
        v-model="form.phone"
        placeholder="请输入您的电话号码"
        id="input2"
      />
      <textarea
        style="resize: none;"
        name=""
        id=""
        cols="30"
        rows="10"
        form.title
        placeholder="请在此输入留言内容，我们会尽快联系您"
      ></textarea>
      <div class="submit" @click="btn3">提交留言</div>
    </div>
    <div class="foot">
      <div class="foot1" style="margin-top: 24px;">
        Copyright© 2020 湖州宏盛新材料科技有限公司 版权所有
      </div>
      <div class="foot1" style="margin-top: 7px;">浙ICP备案号17000000号</div>
    </div>
    <div v-if="commit" class="submit1">
      <div class="header">
        <div class="header1">提交信息</div>
        <div>
          <img
            @click="close"
            @mousemove="nihao"
            @mouseout="nihaoya"
            id="close"
            src="../assets/关闭.png"
            alt=""
          />
        </div>
      </div>
      <div class="confirm">
        您的信息已提交成功 <br />我们的工作人员会尽快与您联系
      </div>
      <div><img class="success" src="../assets/成功.png" alt="" /></div>
      <div class="button" @click="btn2">确定</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      currentIndex: 0,
      commit: false,
      form: {
        phone: "",
        title: "",
        name: ""
      },
      elId: ""
    };
  },
  methods: {
    change(index) {
      this.currentIndex = index;
    },
    btn2() {
      this.commit = false;
      document.getElementById("black").style.visibility = "hidden";
    },
    close() {
      this.commit = false;
      document.getElementById("black").style.visibility = "hidden";
    },
    nihao() {
      document.getElementById("close").style.opacity = 0.8;
    },
    nihaoya() {
      document.getElementById("close").style.opacity = 1;
    },
    btn3() {
      axios
        .post("http://122.114.162.87:8080/system/api/zxlyadd", {
          id: this.elId,
          name: this.form.name,
          tel: this.form.phone,
          email: this.form.email,
          message: this.form.title
        })
        .then(response => {
          //成功
          this.commit = true;
          document.getElementById("black").style.visibility = "visible";
          this.form.email = "";
          this.form.phone = "";
          this.form.title = "";
          this.form.name = "";
        })
        .catch(function(error) {
          console.log(error); //失败
        });
    }
  },
  created() {
    
  }
};
</script>

<style scoped>


#new-center {
  /* text-align: center; */
  margin: 53px 0 13px 858px;
  font-size: 36px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  /* margin: 53px 0 13px 0; */
}

#news {
  /* text-align: center; */
  margin: 0 0 0 901px;
  font-size: 30px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
}

.btn {
  display: flex;
  /* justify-content: center;
  align-items: center; */
  margin: 0 0 0 820px;
  margin-top: 44px;
  margin-bottom: 30px;
  cursor: pointer;
}

.con2 {
  width: 140px;
  height: 40px;
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  text-align: center;
  line-height: 40px;
}

.active {
  background-color: #4489b0;
  color: #ffffff;
}
.submit {
  width: 109px;
  height: 40px;
  background: #5ce6fb;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 40px;
  text-align: center;
  position: absolute;
  top: 335px;
  left: 1351px;
}
#profile {
  display: flex;
  margin-top: 100px;
}

#left {
  width: 960px;
  height: 540px;
  background: #4489b0;
}

#right {
  width: 960px;
  height: 540px;
  background: #359eae;
  position: relative;
}

#title2 {
  /* margin: 108px 694px 412px 50px; */
  top: 108px;
  right: 694px;
  left: 50px;
  bottom: 412px;
  position: absolute;
  white-space: nowrap;
  width: 100px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 24px;
}
.contact {
  position: absolute;
  left: 588px;
  top: 183px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 24px;
}
#title3 {
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 24px;
  position: absolute;
  /* margin: 144px 815px 373px 50px; */
  top: 144px;
  right: 815px;
  bottom: 373px;
  left: 50px;
  white-space: nowrap;
}

#line3 {
  width: 61px;
  height: 4px;
  background: #ffffff;
  position: absolute;
  top: 194px;
  right: 848px;
  bottom: 342px;
  left: 51px;
}

#content2 {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 24px;
  position: absolute;
  width: 440px;

  top: 240px;
  right: 470px;
  bottom: 164px;
  left: 50px;
  line-height: 24px;
  white-space: normal;
  display: inline;
}

#more {
  width: 120px;
  height: 36px;
  border: 1px solid #ffffff;
  border-radius: 18px;
  position: absolute;
  top: 418px;
  right: 786px;
  bottom: 86px;
  left: 54px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  line-height: 36px;
  cursor: pointer;
}

#iTem {
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  margin: 56px 0 0px 420px ;
  margin-top: 56px;
  /* position: absolute; */
}

#left1 {
  background: #359eae;
}

#center1 {
  background-color: #298c9b;
}

#right1 {
  background: #359eae;
}

.item1 {
  width: 360px;
  height: 260px;
  position: relative;
  margin-bottom: 29px;
}

.tiTle {
  text-align: center;
  position: absolute;
  top: 74px;
  right: 128px;
  bottom: 151px;
  left: 126px;
  font-size: 36px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
  line-height: 24px;
  white-space: nowrap;
}

.readMore {
  width: 120px;
  height: 36px;
  border: 1px solid #ffffff;
  position: absolute;
  top: 165px;
  right: 120px;
  bottom: 59px;
  left: 120px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
}

#product {
  position: relative;
  /* left: 420px; */
  margin-left: 420px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  width: 1140px;
}

.product-item {
  margin-right: 60px;
  margin-top: 60px;
  position: relative;
}

.text {
  width: 320px;
  height: 60px;
  background: #000000;
  background-image: linear-gradient(#cccccc, #000000);
  opacity: 0.6;
  position: absolute;
  top: 260px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 60px;
  text-align: center;
}

.end {
  margin-top: 140px;
  width: 100%;
  height: 400px;
  background: #359eae;
  position: relative;
}

.title-end1 {
  position: absolute;
  font-size: 30px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 24px;
  top: 60px;
  right: 1382px;
  bottom: 311px;
  left: 421px;
  white-space: nowrap;
}

.title-content {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 24px;
  position: absolute;
  top: 133px;
  left: 420px;
  bottom: 140px;
}

.title-end2 {
  font-size: 30px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 24px;
  position: absolute;
  white-space: nowrap;
  top: 60px;
  right: 840px;
  bottom: 311px;
  left: 962px;
}

.input-end {
  position: absolute;
  top: 107px;
  left: 960px;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #999999;
}

.input-end1 {
  width: 188px;
  height: 40px;
  background: #ffffff;
  padding-left: 12px;
}

input {
  border: none;
  outline: none;
}
#input1 {
  position: absolute;
  top: 107px;
  right: 760px;
  bottom: 253px;
  left: 960px;
}

#input2 {
  position: absolute;
  top: 107px;
  right: 546px;
  bottom: 253px;
  left: 1174px;
}

textarea {
  width: 488px;
  height: 147px;
  background: #ffffff;
  border: none;
  padding-left: 12px;
  padding-top: 13px;
  position: absolute;
  top: 161px;
  right: 460px;
  bottom: 79px;
  left: 960px;
  outline: none;
}
.foot {
  width: 1910px;
  height: 80px;
  background: #ffffff;
}
.foot1 {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  text-align: center;
}
.submit1 {
  width: 400px;
  height: 290px;
  background: #ffffff;
  position: absolute;
  left: 760px;
  top: 2360px;
  /* border: olive 1px solid; */
  z-index: 1000;
}
.header {
  width: 400px;
  height: 40px;
  background: #cccccc;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  position: relative;
}
.header1 {
  position: absolute;
  top: 13px;
  left: 20px;
}
#close {
  position: absolute;
  cursor: pointer;
  left: 373px;
  top: 13px;
}
.success {
  width: 53px;
  height: 52px;
  position: absolute;
  top: 155px;
  left: 174px;
}
.confirm {
  width: 307px;
  height: 53px;
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  line-height: 16px;
  white-space: nowrap;
  text-align: center;
  position: absolute;
  top: 78px;
  left: 46px;
  line-height: 30px;
}
.button {
  width: 244px;
  height: 36px;
  background: #359eae;
  border-radius: 3px;

  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 227px;
  left: 78px;
}
#black {
  visibility: hidden;
  position: absolute;
  width: 1920px;
  background: black;
  height: 3713px;
  top: 1px;
  opacity: 0.5;
  z-index: 100;
}
</style>