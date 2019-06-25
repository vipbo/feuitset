<template>
    <div class="time-filter">
        <m-header >
            <div slot="title">时间筛选</div>
        </m-header>
        <div class="search-area">
            <div class="month-filter">
              <router-link to="/timeFilter" class="month">
                <span>本月</span>
                  <i class="iconfont iconxiaosanjiaoup"></i>
              </router-link>
              <div class="filter">筛选</div>
            </div>
            <div class="search-btn">
                <span>搜索</span>
                <i class="iconfont iconfangdajing"></i>
            </div>
        </div>
        <hr>
        <div class="container">
          <common-button text="按日选择" class="one" :choosedStatus="btnStatus" @click.native="changeBtnStatus"/>
          <common-button text="开票中" class="one" :choosedStatus="btnStatus" @click.native="changeBtnStatus"/>
          <common-button text="发票生成" class="one" :choosedStatus="btnStatus" @click.native="changeBtnStatus"/>
        </div>
    </div>
</template>
<script>
import MHeader from "../common/MHeader";
import CommonButton from "./CommonButton";
export default {
  components: {
    MHeader,
    CommonButton
  },
  data() {
    return {
      btnStatus: true
    };
  },
  methods: {
    changeBtnStatus() {
      console.log("11", this.btnStatus);
      // this.btnStatus != this.btnStatus;
    }
  }
};
</script>

<style lang="less" scoped>
.time-filter {
  .search-area {
    background: #fff;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    .month-filter {
      display: flex;
      align-items: center;
      .month {
        border: 1px solid #1091fb;
        border-radius: 20px;
        padding: 0px 10px;
        color: #222222;
      }
      .filter {
        border-radius: 20px;
        border: 1px solid #ccc;
        padding: 0 15px;
        margin-left: 10px;
      }
    }
    .search-btn {
      border-radius: 20px;
      border: 1px solid #ccc;
      padding: 0 15px;
    }
  }
  .container {
    height: 400px;
    background: #fff;
    border-top: 1px solid transparent;
    .one {
      margin: 5px;
    }
  }
}
</style>

