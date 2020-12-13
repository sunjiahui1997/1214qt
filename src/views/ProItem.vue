<template>
  <div>
    <div class="item">
      <!-- <div class="item-1">
         <router-link to = "/product/gooditem/"><img src="../assets/产品图.png" alt=""></router-link>
        <div class="detail"><router-link to = "/product/gooditem/">35℃～40℃不透明中性泡化碱</router-link></div>
      </div>
      <div class="item-1">
        <router-link to="/product/paohua1/"><img src="../assets/产品图.png" alt=""></router-link>
        <div class="detail"><router-link to="/product/paohua1/">35℃～40℃透明中性泡化碱</router-link></div>
      </div>
      <div class="item-1">
        <router-link to="/product/paohua2/"><img src="../assets/产品图.png" alt=""></router-link>
        <div class="detail"><router-link to="/product/paohua2/">40℃～52℃碱性泡化碱</router-link></div>
      </div>
      <div class="item-1">
        <router-link to="/product/paohua3/"><img src="../assets/产品图.png" alt=""></router-link>
        <div class="detail"><router-link to="/product/paohua3/">40℃碱性泡化碱</router-link></div>
      </div>
      <div class="item-1">
        <router-link to="/product/paohua4/"><img src="../assets/产品图.png" alt=""></router-link>
        <div class="detail"><router-link to="/product/paohua4/">51℃碱性泡化碱</router-link></div>
      </div> -->
      <pro-item-na
        v-for="(item, index) in pro"
        :key="index"
        :news-item="item"
      ></pro-item-na>
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
    </div>
  </div>
</template>

<script>
import axios from "axios";

import proItemNa from "./ProItem-na";

export default {
  data() {
    return {
      pro: [],
      total: 0,
      pageSize: 6,
    };
  },
  components: {
    proItemNa,
  },
  created() {
   
  },
  mounted() {
    this.getList(1);
  },

  methods: {
    getList(val) {
      axios
        .post("http://122.114.162.87:8080/system/api/jscpzx", {
          pageIndex: val,
          pageSize: this.pageSize,
          type: "0",
        })
        .then((res) => {
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
  cursor: pointer;
}
a {
  text-decoration: none;
}
.pageNo{
  display: block;
  position: absolute;
  top: 500px;
  right: 80px;
}
</style>