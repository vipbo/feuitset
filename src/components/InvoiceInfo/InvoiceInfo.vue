<template>
    <div>
        <m-header >
            <div slot="title">开票信息</div>
        </m-header>
        <div class="fetch-btn"  @click="fetch">请求接口</div>
    </div>
</template>
<script>

import axios from 'axios'
import {getUser} from '../../api/use.js'
import MHeader from "../common/MHeader";
export default {
  components: {
    MHeader
  },
  methods:{
    async  fetch(){
    let res =await getUser();
    console.log('res',res)
      }
  }
};
</script>
<style scoped>
.fetch-btn{
    background: #ccc;
    color: #fff;
        width: 100px;
    margin: 50px;
    text-align: center;
    cursor: pointer;
}
</style>
