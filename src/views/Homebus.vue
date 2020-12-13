<template>
  <div class="xinwen">
    <!-- <div class="new1">
      <div class="new-item1">
        <div class="img1"><img class="img1"  src="../assets/公司简介（外部）.png" alt=""></div>
        <div class="title1">此处是新闻标题</div>
        <div class="time">2020-11-19</div>
        <div class="line"></div>
        <div class="line2"></div>
        <div class="content">
          此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容
        </div>
      </div>
      <div class="new-item2">
        <div class="img1"><img class="img1"  src="../assets/公司简介（外部）.png" alt=""></div>
        <div class="title1">此处是新闻标题</div>
        <div class="time">2020-11-19</div>
        <div class="line"></div>
        <div class="line2"></div>
        <div class="content">
          此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容
        </div>
      </div>
    </div>
    <div class="new1">
      <div class="new-item1">
        <div class="img1"><img class="img1"  src="../assets/公司简介（外部）.png" alt=""></div>
        <div class="title1">此处是新闻标题</div>
        <div class="time">2020-11-19</div>
        <div class="line"></div>
        <div class="line2"></div>
        <div class="content">
          此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容
        </div>
      </div>
      <div class="new-item2">
        <div class="img1"><img class="img1"  src="../assets/公司简介（外部）.png" alt=""></div>
        <div class="title1">此处是新闻标题</div>
        <div class="time">2020-11-19</div>
        <div class="line"></div>
        <div class="line2"></div>
        <div class="content">
          此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容
        </div>
      </div>
    </div> -->

    <home-bus-item
      v-for="(item, index) in pro"
      :key="index"
      :news-item="item"
    ></home-bus-item>
  </div>
</template>

<script>
import axios from "axios";

import homeBusItem from "./Homebus-item";

export default {
  data() {
    return {
      pro: [],
    };
  },
  components: {
    homeBusItem,
  },
  created() {
    axios
      .post("http://122.114.162.87:8080/system/api/xwzxList", {
        pageIndex: "1",
        pageSize: "4",
        type:"1"
      })
      .then((res) => {
        console.log(res);
        // this.total = res.data.result.total;
        // this.list = res.data.result.rowsList;
        // console.log(res.data.result.rowsList);
        this.pro.push(...res.data.result.rowsList);
        console.log(res.data.result.rowsList);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.new1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.new-item1 {
  position: relative;
  display: flex;
  width: 540px;
  height: 240px;
}

.new-item2 {
  position: relative;
  display: flex;
  width: 540px;
  height: 240px;
}
.xinwen{
  display: flex;
  margin: 0 0 0 420px;
  width: 1090px;
  /* justify-content: center;
  align-items: center; */
  flex-wrap: wrap;
}
.title1 {
  margin: 23px 161px 199px 254px;
  position: absolute;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  white-space: nowrap;
  cursor: pointer;
}

.time {
  position: absolute;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #999999;
  margin: 53px 161px 199px 254px;
}

.line {
  width: 50px;
  height: 3px;
  background: #359eae;
  position: absolute;
  margin: 83px 236px 154px 254px;
}

.line2 {
  width: 274px;
  height: 1px;
  background: #000000;
  opacity: 0.1;
  position: absolute;
  margin: 84px 12px 155px 254px;
}

.content {
  width: 266px;
  height: 62px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #999999;
  line-height: 24px;
  position: absolute;
  margin: 103px 20px 75px 254px;
}
.img1 {
  width: 240px;
  height: 160px;
  /* background: #4489b0; */
  margin: 24px 300px 56px 0px;
  cursor: pointer;
}
</style>