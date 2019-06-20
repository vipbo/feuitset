<template>
    <div class="invoice-record">
        <m-header >
            <div slot="title">开票记录</div>
        </m-header>

         <divider>普通用法</divider>
        <div class="content">
            <!-- <fe-group title="iPad Pro">
                   <img v-for="img in imageList" v-lazy="img" :key='img'  />
            </fe-group> -->
             <!-- <div v-for="img in backgroundImageList" class='lazyback' v-lazy:background-image="img" :key='img'></div> -->
             <div>
                <lazy-component>
                  <img v-for="img in imageList" v-lazy="img" :key='img' />
                </lazy-component>
             </div>
        </div>
    </div>
</template>
<script>
import { Group, Divider } from "feui";
import MHeader from "../common/MHeader";
export default {
  components: {
    [Group.name]: Group,
    [Divider.name]: Divider,
    MHeader
  },
  data() {
    return {
      imageList: [
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3937253651,2195126429&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4225657061,331206343&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=302546753,428540576&fm=27&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1277253127,4093791553&fm=27&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1346043524,1526538676&fm=27&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2120981251,2339376169&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3251138416,731671076&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1474708623,194041655&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3476862052,77806055&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=243126368,3499751982&fm=26&gp=0.jpg"
      ],
      backgroundImageList: [
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1060142395,4165764064&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3815832194,2411906431&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3988264696,2359504427&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2280863737,3331139149&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1275692763,2871721689&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=824471950,3314661906&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2873301860,2279045325&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2597470184,2994052502&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3111897164,1617720841&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=395403211,201150258&fm=26&gp=0.jpg"
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.invoice-record {
  .content {
    text-align: center;
    img {
      width: 300px;
      background: #fff;
      padding: 20px;
    }
    .lazyback {
      height: 225px;
    }
  }
}
</style>
