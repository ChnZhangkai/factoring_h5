<template>
  <div>
    <mt-swipe :auto="4000" class="mt-swipe">
      <mt-swipe-item :key="item.id" v-for="item in imgList" @click="imgClick(item)">
        <img :src="item.img" class="isfull"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  // 需要传递命名为imgList的轮播图数据
    props:["imgList"],
    data(){
        return {
        }
    },
    created(){

    },
    methods:{
        imgClick(i) {
          console.log(i);
          // const url = i.url;
          // window.location.href = url;
        }
    }
};
</script>

