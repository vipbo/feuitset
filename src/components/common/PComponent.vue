<template>
    <div class="wrap">
        <div class="line"></div>
        <slot></slot>
    </div>
</template>
<style scope lang='less'>
.wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 600;
  font-size: 13px;
  .line {
    height: 20px;
    margin-right: 5px;
    border-left: 2px solid black;
  }
}
</style>