<template>
    <div class="company-name-box">
        {{name}}
    </div>
</template>
 <script>
export default {
  props: {
    name: String
  }
};
</script>

<style scope lang='less'>
.company-name-box {
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background: #007aff;
  text-align: center;
}
</style>