<template>
  <div>
    <div class="new-item">
      <div class="line"></div>
      <div class="img11">
        <img class="img11" :src="newsItem.ip1" alt="" />
      </div>
      <div class="title" @click="o(newsItem)">{{ newsItem.title }}</div>
      <div class="date">{{ newsItem.time | ellipsis }}</div>
      <div class="content">
        {{ newsItem.content }}
      </div>
    </div>
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
  methods: {
    o(item) {
      console.log(item);
      this.$router.push({
        path: "/news/newsitem1",
        query: {
         title:item.title,
         content:item.content,
         time:item.time,
         ip1:item.ip1
        },
      });
    },
  },
};
</script>

<style scoped>
.new-item {
  display: flex;
  margin-bottom: 40px;
  border: 1px solid black;
  position: relative;
}
.img11 {
  width: 140px;
  height: 140px;
  /* background: #cccccc; */
  position: relative;
  cursor: pointer;
}
img {
  width: 140px;
  height: 140px;
}
.title {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #333333;
  position: absolute;
  left: 22%;
  cursor: pointer;
  white-space: nowrap;
}
a {
  text-decoration: none;
}
.date {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #cccccc;
  position: absolute;
  left: 22%;
  top: 20%;
}
#pageBox {
  position: absolute;
  right: -310px;
  top: 677px;
}
.content {
  width: 508px;
  height: 50px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #666666;
  word-wrap: break-word;
  white-space: wrap;
  position: absolute;
  top: 38%;
  left: 154px;
}
.line {
  width: 680px;
  height: 1px;
  background: #ebebeb;
  position: absolute;
  top: -20px;
}
</style>