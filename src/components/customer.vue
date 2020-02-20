<template>
  <div>

      <div class="customer-msg-wrap">
          <div v-for="item in detailLists">
            <span class="customer-msg-title">{{item.title}}</span>
            <span>{{item.value}}</span>
          </div>
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
      business:'',
      detailLists:[
        {
          title:'操作员编号',
          value:'ARCR20191030'
        },
        {
          title:'操作员名称',
          value:'张三'
        },
        {
          title:'操作员状态',
          value:'有效'
        },
        {
          title:'所属机构',
          value:'市场发展部'
        },
        {
          title:'手机号',
          value:'13600000000'
        },
        {
          title:'办公电话',
          value:'010-111111'
        },
        {
          title:'电子邮箱',
          value:'test@test.com'
        }
      ]

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
.customer-msg-wrap{
    background-color: #fff;
    font-size: 15px;
    line-height: 2.5;
    color: #101010;
}
.customer-msg-wrap >div{
    border-bottom: 1px solid #eee;
    text-indent: 0.5em
}
.customer-msg-title{
  width: 100px;
  display: inline-block;
  color: #666
}
</style>
