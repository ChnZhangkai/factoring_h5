<template>
  <div>
   <div class="head-img-wrap">
      <img class="head-img" :src="headImg" width="100px" alt="">
   </div>
   <div class="" v-for="item in myMsgList">
     <mt-cell
       :title="item.title"
       :to="item.toKey"
       is-link
       value="">
        <img class="header-detail-img" slot="icon" src="../assets/idcard.png" width="24" height="24">
     </mt-cell>
   </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Cell } from 'mint-ui';

Vue.component(Cell.name, Cell);

export default {
  components:{
  },
  data () {
    return {
        headImg:require('../assets/head_potraits.png'),
        myMsgList:[
          {
            title:'客户信息',
            toKey:'/customer'
          }
        ]
    }
  },
   watch: {
        selected: function (val, oldVal) {
            // 这里就可以通过 val 的值变更来确定
            console.log(val)
        }
    },
  methods:{


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head-img-wrap{
  background-color:#fec901;
  height: 120px;
  margin-bottom: 20px;
}
.head-img{
    display: block;
    margin: 0 auto;
    padding: 10px 0;
}
.header-detail-img{
  padding-right: 5px
}
</style>
