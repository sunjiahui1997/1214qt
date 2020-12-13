<template>
  <div>
    <div class="item-1">
      <img @click="n(newsItem)" :src="newsItem.ip1" alt="" />

      <div @click="n(newsItem)" class="detail">
        {{ newsItem.name }}
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
  methods: {
    n(item) {
      this.$router.push({
        path: "/product/progoods",
        query: {
          name: item.name,
          ms: item.ms,
          nd: item.nd,
          fzs:item.fzs,
          wg:item.wg,
          bz:item.bz,
          show:item.show,
          ip: item.ip,
        },
      });
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  width: 720px;
  flex-wrap: wrap;
}
.item-1 {
  margin-right: 50px;
  margin-bottom: 28px;
}
img {
  width: 190px;
  height: 190px;
}
.detail {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
}
a {
  text-decoration: none;
}
</style>