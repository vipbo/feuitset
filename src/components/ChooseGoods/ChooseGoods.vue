<template>
    <div class="choose-goods">
        <m-header>
             <div slot="title">选择商品</div>
        </m-header>
        <div class="search-area">
            <div class="search">
                <input type="text" placeholder="请输入至少一个字符">
                <span class="cancel">取消</span>
            </div>
        </div>
        <div class="content">
            <choose-item title class="list-name" />
            <div class="type-goods">企业默认商品</div>
            <choose-item item v-for="val in companyGoods" :key='val.id' :obj='val'/>
            <div class="type-goods">部门默认商品</div>
            <choose-item item v-for="val in departmentGoods" :key='val.id' :obj='val'/>
            <div class="type-goods">其他商品</div>
            <choose-item item v-for="val in otherGoods" :key='val.id' :obj='val'/>
        </div>
    </div>
</template>
<script>
import MHeader from "../common/MHeader";
import ChooseItem from "./ChooseItem";

export default {
  components: {
    MHeader,
    ChooseItem
  },
  data() {
    return {
      companyGoods: [
        { id: 1, name: "中华", type: "香烟", tax: "80%" },
        { id: 2, name: "茅台", type: "白酒", tax: "80%" }
      ],
      departmentGoods: [
        { id: 3, name: "西瓜", type: "开封", tax: "2%" },
        { id: 4, name: "梨", type: "砀山", tax: "2%" },
        { id: 5, name: "新疆哈密瓜", type: "哈密", tax: "2%" }
      ],
      otherGoods: [
        { id: 6, name: "巧克力1", type: "德芙", tax: "12%" },
        { id: 7, name: "巧克力2", type: "德芙", tax: "12%" },
        { id: 8, name: "巧克力3", type: "德芙", tax: "12%" },
        { id: 9, name: "巧克力4", type: "德芙", tax: "12%" },
        { id: 10, name: "巧克力5", type: "德芙", tax: "12%" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.choose-goods {
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
    .list-name {
      margin-top: 10px;
    }
    .type-goods {
      padding: 10px;
      height: 20px;
    }
  }
}
</style>
