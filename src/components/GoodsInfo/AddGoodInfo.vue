<template>
    <div class="add-good">
        <m-header>
            <div slot="title">添加商品信息</div>
        </m-header>
        <div class="content">
            <div class="good-tax">
                <div class="good-name">
                    <div class="name">商品名称</div>
                    <input type="text" placeholder="必填，请输入商品名称">
                </div>
                <div  class="tax-code">
                    <div class="tax-number">税收分类编码</div>
                    <div class="detail">
                        <input type="text" placeholder="必填，请选择税收分类编码">
                        <router-link to='chooseTaxTypeCode'>
                            <i class="iconfont iconyoujiantou" ></i>
                        </router-link> 
                    </div>
                </div> 
                <div class="tax-area">
                    <div class="tax">商品名称</div>
                    <input type="text" placeholder="根据税收分类编码自动带出">
                </div>
            </div>
            <div class="type-measure">
                 <div class="type-area">
                    <div class="type">规格型号</div>
                    <input type="text" placeholder="请输入规格型号">
                </div>
                 <div class="measure-area">
                    <div class="measure">计量单位</div>
                    <input type="text" placeholder="请输入计量单位">
                </div>
            </div>
            <div class="price-modify">
                <div class="price-area">
                    <div class="price">单价</div>
                    <input type="text" placeholder="选择输入商品单价">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MHeader from "../common/MHeader";
export default {
  components: {
    MHeader
  }
};
</script>
<style lang="less" scoped>
.add-good {
  .head-wrap {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  .content {
    .good-tax {
      background: #fff;
      .good-name,
      .tax-area {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        .name,
        .tax {
          flex: 1.5;
        }
        input {
          height: 25px;
          border: none;
          flex-grow: 1;
        }
      }
      .tax-code {
        display: flex;
        // margin: 10px auto;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        .tax-number {
          flex: 1.8;
        }
        .detail {
          flex-grow: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          input {
            height: 25px;
            border: none;
          }
        }
      }
    }
    .type-measure {
      background: #fff;
      margin-top: 10px;
      .type-area,
      .measure-area {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        .type,
        .measure {
          flex: 1.5;
        }
        input {
          height: 25px;
          border: none;
          flex-grow: 1;
        }
      }
    }
    .price-modify {
      background: #fff;
      margin-top: 10px;
      .price-area {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        .price {
          flex: 1.5;
        }
        input {
          height: 25px;
          border: none;
          flex-grow: 1;
        }
      }
    }
  }
}
</style>

