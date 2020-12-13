<template>
  <div>
    <!-- <div class="newItem"> -->
    <!-- <div class="line"></div> -->
    <!-- <router-link to="/news/newsitem/" -->
    <!-- ><div class="img11"> -->
    <!-- <img src="../assets/公司简介（外部）.png" alt="" /></div -->
    <!-- ></router-link> -->
    <!-- <div class="title"> -->
    <!-- <router-link to="/news/newsitem/">新闻标题</router-link> -->
    <!-- </div> -->
    <!-- <div class="date">2020-11-20</div> -->
    <!-- <div class="content"> -->
    <!-- 此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容此处为新闻内容 -->
    <!-- </div> -->
    <!-- </div> -->
    <news-item
      v-for="(item, index) in pro"
      :key="index"
      :news-item="item"
    ></news-item>
    <div class="pageNo">
      <div class="block">
        <el-pagination
          layout="prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
    <div class="foot">
      <div class="foot1" style="padding-top: 24px">
        Copyright© 2020 湖州宏盛新材料科技有限公司 版权所有
      </div>
      <div class="foot1" style="margin-top: 7px">浙ICP备案号17000000号</div>
    </div>
    <!-- <div id="pageBox"><div id="test1"></div></div> -->
  </div>
</template>

<script>
import axios from "axios";

import newsItem from "./NewsListItem";

export default {
  data() {
    return {
      pro: [],
      total: 0,
      pageSize:4
    };
  },
  components: {
    newsItem,
  },
  mounted() {
    this.getList(1);
  },

  methods: {
    getList(val) {
      axios
        .post("http://122.114.162.87:8080/system/api/xwzxList", {
          pageIndex: val,
          pageSize: this.pageSize,
        })
        .then((res) => {
          // console.log(res);
          // this.pro.push(...res.data.result.rowsList);
          // console.log(res.data.result.rowsList);
          this.total = res.data.result.total;
          this.pro = res.data.result.rowsList;
          console.log(res.data.result.rowsList);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleCurrentChange(val) {
      this.getList(val);
    },
  },
};
</script>

<style scoped>
.newItem {
  display: flex;
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
  left: 20%;
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
  left: 20%;
  top: 27%;
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
  top: 50px;
}
.layui-laypage a {
  margin-right: 8px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}
.foot {
  position: relative;
  width: 1920px;
  height: 80px;
  left: -818px;
  /* top: 900px; */
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