<template>
    <div class="good-detail">
        <m-header>
            <div slot="title">商品详情</div>
        </m-header>
        <div class="content">
            <div class="good-tax">
                <div class="good-name">
                    <div class="name">商品名称</div>
                    <input type="text" placeholder="必填，请输入商品名称">
                </div>
                <div class="tax-code">
                    <div class="tax-number">税收分类编码</div>
                    <div class="detail">
                        <input type="text" placeholder="必填，请选择税收分类编码">
                        <router-link to='chooseTaxTypeCode'>
                            <i class="iconfont iconyoujiantou" ></i>
                        </router-link>
                    </div>
                </div>
                 <div class="tax-type-name">
                    <div class="name">税收分类名称</div>
                    <input type="text" placeholder="必填，请输入商品名称">
                </div>
                <div class="short-name">
                    <div class="short">简称</div>
                    <input type="text" placeholder="根据税收分类编码自动带出">
                </div>
                <div class="tax-area">
                    <div class="tax">税率</div>
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
                <div class="tax-flag">
                    <div>含税标志</div>
                    <fe-switch title="" class="open-close"></fe-switch>
                </div>
                <div class="parice-can-modify">
                    <div>单价可修改</div>
                    <fe-switch title="" class="open-close"></fe-switch>
                </div>
            </div>
            <div class="hide-policy">
                <div class="hide-flag">
                    <div>隐藏标志</div>
                    <fe-switch title="" class="open-close"></fe-switch>
                </div>
                <div class="discounts-policy">
                    <div>享有优惠政策</div>
                    <fe-switch title="" class="open-close"></fe-switch>
                </div>
                 <div class="discounts-policy-type">
                    <div class="policy-type">优惠政策类型</div>
                    <div class="detail">
                        <input type="text" placeholder="必填，请选择税收分类编码">
                        <router-link to='chooseTaxTypeCode'>
                            <i class="iconfont iconyoujiantou" ></i>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="default-good-area">
                <div class="default-good">
                    <div>设为默认商品</div>
                    <fe-switch title="" class="open-close"></fe-switch>
                </div>
                <div class="belong-to-department">
                    <div class="department">所属部门</div>
                    <div class="detail">
                        <input type="text" placeholder="必填，请选择税收分类编码">
                        <router-link to='belongToDepartment'>
                            <i class="iconfont iconyoujiantou" ></i>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="save-area">
                <fe-button type="primary" class='save-btn'>保存</fe-button>
            </div>

        </div>
    </div>
</template>
<script>
import { Switch, Button } from "feui";
import MHeader from "../common/MHeader";
export default {
  components: {
    [Switch.name]: Switch,
    [Button.name]: Button,
    MHeader
  }
};
</script>
<style lang="less" scoped>
.good-detail {
  .head-wrap {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  .content {
    .good-tax {
      background: #fff;
      .good-name,
      .tax-type-name,
      .short-name,
      .tax-area {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        .name,
        .tax,
        .short {
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
      .tax-flag,
      .parice-can-modify {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        .open-close {
          position: inherit;
        }
      }
    }
    .hide-policy {
      margin-top: 10px;
      background: #fff;
      .hide-flag,
      .discounts-policy {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        .open-close {
          position: inherit;
        }
      }
      .discounts-policy-type {
        display: flex;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        .policy-type {
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
    .default-good-area {
      margin-top: 10px;
      background: #fff;

      .default-good {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        .open-close {
          position: inherit;
        }
      }
      .belong-to-department {
        display: flex;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        .department {
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
    .save-area {
      background: #fff;
      padding: 10px;
      margin-top: 15px;
      .save-btn {
        color: #fff;
        width: 90%;
      }
    }
  }
}
</style>

