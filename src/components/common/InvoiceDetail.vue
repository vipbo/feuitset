<template>
    <div class="invoice-detail">
        <div class="name">
            <div class="shop">汽油</div>
            <div class="oil-info">
                <span class="tax">税率:16%</span>
                <span>#92号汽油</span>
            </div>
        </div>
        <div class="price">
            <div>￥103.32</div>
            <div class="delete">
                <i class="iconfont iconshanchu" />
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.invoice-detail {
  display: flex;
  padding: 0 10px 10px;
  border-bottom: 1px solid #ccc;
  .name {
    flex: 1;
    .shop {
      font-weight: 600;
    }
    .oil-info {
      font-size: 13px;
      padding-top: 5px;
      .tax {
        background: darkorange;
        color: #fff;
        padding: 0 5px;
        border-radius: 3px;
      }
    }
  }
  .price {
    .delete {
      text-align: right;
      i {
        font-size: 13px;
      }
    }
  }
}
</style>
