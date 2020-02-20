<template>
  <div>
    <mt-header :title="headerTitle" >
      <router-link :to="headerUrl" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>

import Vue from 'vue'
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

export default {
  props:['headerTitle','headerUrl'],
  components:{

  },
  data () {
    return {

    }
  },
  methods:{


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
