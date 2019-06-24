<template>
    <div class="choose-tax-code">
        <m-header>
            <div slot="title">选择税收分类编码</div>
        </m-header>
        <div class="search-area">
            <div class="search">
                <input type="text" placeholder="请输入至少一个字符" v-model="inputTaxCode">
                <span class="cancel">取消</span>
            </div>
        </div>
        <div class="content">
            <empty-info 
                :tip="'请输入商品名称'" 
                :descript="'系统将根据商品名称自动匹配税收分类编码'" 
                v-if="!inputTaxCode&&!taxCodeGood.length" 
            />
            <empty-info 
                :tip="'暂无匹配结果'" 
                v-if="!taxCodeGood.length&&inputTaxCode" 
            />
            <div class="has-goods">
                <div class="tax-list-title">
                    <div class="code">税收分类编码</div>
                    <div class="name">编码名称</div>
                </div>
                <ul>
                    <li v-for="good in taxCodeGood" :key="good.id" class="tax-list-item">
                        <div class="code">{{good.code}}</div>
                        <div class="name">{{good.name}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import EmptyInfo from "./EmptyInfo";
import MHeader from "../common/MHeader";
export default {
  components: {
    MHeader,
    EmptyInfo
  },
  data() {
    return {
      inputTaxCode: "",
      taxCodeGood: [{ id: 0, code: 12346541, name: "南瓜" }]
    };
  }
};
</script>
<style lang="less" scoped>
.choose-tax-code {
  .search-area {
    height: 60px;
    background: #fff;
    border-top: 1px solid transparent;
    .search {
      border-radius: 30px;
      height: 40px;
      width: 85%;
      margin: 10px auto;
      border: 1px solid #ccc;
      display: flex;
      align-items: center;
      padding: 0 10px;
      input {
        flex: 5;
        height: 25px;
        border: none;
      }
      .cancel {
        flex: 0.8;
        display: inline-block;
        padding-left: 10px;
        border-left: 1px solid #ccc;
      }
    }
  }
  .content {
    margin-top: 10px;
    background: #fff;
    .has-goods {
      .tax-list-title {
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: 15px;
        .code,
        .name {
          flex: 1;
        }
      }
      .tax-list-item {
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: 15px;
        .code,
        .name {
          flex: 1;
        }
      }
    }
  }
}
</style>

