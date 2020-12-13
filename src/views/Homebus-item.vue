<template>
  <div>
    <!-- <div class="img1"><img class="img1" :src="newsItem.ip1" alt=""></div>
        <div class="title"></div>
        <div class="time"></div>
        <div class="content"></div>
        <div class="new1"> -->
    <div class="new-item">
      <div class="img1">
        <img class="img1" :src="newsItem.ip1" alt="" />
      </div>
      <div class="title1">{{ newsItem.title  }}</div>
      <div class="time">{{ newsItem.time | ellipsis}}</div>
      <div class="line"></div>
      <div class="line2"></div>
      <div class="content">
        {{ newsItem.content }}
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    newsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 1) {
        return value.slice(0, 10);
      }
      return value;
    },
  },
};
</script>

<style scoped>
.new1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.new-item {
  position: relative;
  display: flex;
  width: 540px;
  height: 240px;
  /* border: 1px solid black; */
}

.title1 {
  top: 43px;
  left: 254px;
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
  /* margin: 53px 161px 199px 254px; */
  top: 66px;
  left: 254px;
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
  /* display: flex; */
  /* flex-wrap: wrap; */
  width: 270px;
  height: 100px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  word-wrap:break-word;
  color: #999999;
  line-height: 24px;
  position: absolute;
  /* margin: 103px 20px 75px 254px; */
  top: 103px;
  right: 20px;
  left: 254px;
}
.img1 {
  width: 240px;
  height: 160px;
  /* background: #4489b0; */
  margin: 24px 300px 56px 0px;
  cursor: pointer;
}
</style>