<template>
  <div>
    <div>
        <div class="select-wrap" @click="clickSelect">
            <mt-field label="流程类型" placeholder="请选择流程类型" type="text" readonly></mt-field>
            <select class="select-field" v-show="selectFlag" name="" onchange="onChangeSelect">
               <option value="">请选择流程类型</option>
               <option value="">流程</option>
               <option value="">流程类</option>
               <option value="">流程类型</option>
            </select>
        </div>
        <mt-field label="业务编号" placeholder="请输入业务编号" type="text" v-model="business"></mt-field>
        <mt-field label="合同编号" placeholder="请输入合同编号" type="text" v-model="contract"></mt-field>
        <mt-field label="客户名称" placeholder="请输入客户名称" type="text" v-model="customer"></mt-field>
    </div>
    <div class="btn-wrap">
      <mt-button class="lg-btn" type="primary" size="large">查 询</mt-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field } from 'mint-ui';
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Field.name, Field);

export default {
  components:{

  },
  data () {
    return {
     business:"",
     contract:"",
     customer:"",
     selectFlag:false

    }
  },
  methods: {
    clickSelect() {
      // this.selectFlag = true;
    }
  },
}
</script>

<style scoped>
.btn-wrap{
   margin-top: 20px;
   padding: 20px;
}
.lg-btn{
  color: #101010;
  background-color: #fec901
}
.select-wrap{
  position: relative;;
}
.select-field{
    position: absolute;
    top: 13px;
    font-size: 16px;
    border: 0;
    left: 110px;

}
</style>

