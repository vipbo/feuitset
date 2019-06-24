<template>
    <div class="goods-info">
        <m-header three >
            <div slot="title">商品信息</div>
            <router-link to="addGoodInfo" slot="add"  class="add-btn" >添加</router-link>
        </m-header>

        <div class="content">
          <empty-info
              :tip="'您还没有添加过商品'"
              :descript="'请通过右上角添加按钮添加商品'"
              v-if="!otherGoods.length"
            />
          <div class="has-goods" v-else>
              <div class="search-area">
                <div class="search">
                    <input type="text" placeholder="请输入至少一个字符">
                    <span class="cancel">取消</span>
                </div>
              </div>
              <div class="goods">
                <div class="other-goods">企业默认商品</div>
                <fe-slidbtn :right-width="150"  v-for="val in companyGoods" :key='val.id' >
                    <fe-group >
                        <goods-info-item item  :obj='val'/>
                    </fe-group>
                    <span slot="right" class="inner-wrap" >
                        <span class="default"  @click="defaultFunction">
                            设为默认
                        </span>
                        <span class="delete-btn" @click="deleteFunction">
                            删除
                        </span>
                    </span>
                </fe-slidbtn>
                <div class="other-goods">部门默认商品</div>
                <fe-slidbtn :right-width="150"  v-for="val in departmentGoods" :key='val.id' >
                    <fe-group >
                        <goods-info-item item  :obj='val'/>
                    </fe-group>
                    <span slot="right" class="inner-wrap" >
                        <span class="default"  @click="defaultFunction">
                            设为默认
                        </span>
                        <span class="delete-btn" @click="deleteFunction">
                            删除
                        </span>
                    </span>
                </fe-slidbtn>
                <div class="other-goods">其他商品</div>
                <fe-slidbtn :right-width="150"  v-for="val in otherGoods" :key='val.id' >
                    <fe-group >
                        <goods-info-item item  :obj='val'/>
                    </fe-group>
                    <span slot="right" class="inner-wrap" >
                        <span class="default"  @click="defaultFunction">
                            设为默认
                        </span>
                        <span class="delete-btn" @click="deleteFunction">
                            删除
                        </span>
                    </span>
                </fe-slidbtn>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
import { Slidbtn, Group, Divider } from "feui";
import MHeader from "../common/MHeader";
import EmptyInfo from "./EmptyInfo";
import GoodsInfoItem from "./GoodsInfoItem";
export default {
  components: {
    [Slidbtn.name]: Slidbtn,
    [Group.name]: Group,
    MHeader,
    EmptyInfo,
    GoodsInfoItem
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
  },
  methods: {
    clickRight() {
      alert("点击了 Right");
    },
    defaultFunction() {
      alert("defaultFunction");
    },
    deleteFunction() {
      alert("deleteFunction");
    }
  }
};
</script>
<style lang="less" scoped>
.goods-info {
  .add-btn {
    color: #007aff;
  }

  .content {
    margin-top: 10px;
    .no-good {
      background: #fff;
    }
    .has-goods {
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
      .goods {
        margin-top: 10px;
        .other-goods {
          padding: 15px;
        }
      }
    }
  }
  .fe-slidbtn {
    .fe-slidbtn_right .inner-wrap {
      display: flex;
      align-items: center;
      width: 150px;
      .default {
        color: #fff;
        background: #1f5ce6;
        width: 75px;
        height: 50px;
      }
      .delete-btn {
        color: #fff;
        background: #fa515c;
        width: 75px;
        height: 50px;
      }
    }
  }
}
</style>
