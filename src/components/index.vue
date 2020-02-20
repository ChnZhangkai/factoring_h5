<template>
  <div>
      <mt-tabbar  v-model="selected">
        <mt-tab-item id="index">
          <img slot="icon" v-show="!selectIndexFlag" src="../assets/index.png">
          <img slot="icon" v-show="selectIndexFlag" src="../assets/index_ph.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="mine">
          <img slot="icon" v-show="selectIndexFlag" src="../assets/mine.png">
          <img slot="icon" v-show="!selectIndexFlag" src="../assets/mine_ph.png">
          我的
        </mt-tab-item>
      </mt-tabbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="index">
          <index-page></index-page>
        </mt-tab-container-item>
        <mt-tab-container-item id="mine">
          <mine-page></mine-page>
        </mt-tab-container-item>
      </mt-tab-container>
  </div>
</template>

<script>
import IndexPage from '../components/indexPage'
import MinePage from '../components/minePage'
import Vue from 'vue'
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);


export default {
  components:{
    IndexPage,
    MinePage
  },
  data () {
    return {
        selected:"index",
        selectIndexFlag:true
    }
  },
  watch: {
        selected: function (val, oldVal) {
            // 这里就可以通过 val 的值变更来确定
            console.log(val)
            this.selectIndexFlag = !this.selectIndexFlag
        }
    },
  methods:{


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
