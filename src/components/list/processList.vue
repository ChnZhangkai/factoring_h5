<template>
  <div class="">
    <header-back :headerTitle="headerTitle" :headerUrl='headerUrl'></header-back>
    <div class="detail-list-wrap">
    <router-link
             :to="{path:'../detail/'+ toKey}">
        <div class="detail-list">
            <div v-for="item in detailLists">
              <span>{{item.title}}：</span>
              <span>{{item.value}}</span>
            </div>
        </div>
        <div class="detail-msg">
          没有更多了...
        </div>
     </router-link>
  </div>
  </div>
</template>

<script>
import HeaderBack from '../headerBack'

export default {
  components:{
    HeaderBack
  },
  data () {
    return {
      headerTitle:'已办任务列表',
      headerUrl:'/',
      toKey:'processDetail',
      detailLists:[
        {
          title:'业务编号',
          value:'ARCR20191030000000248',
          active:true
        },
        {
          title:'流程类型',
          value:'授信额度新增'
        },
        {
          title:'合同编号',
          value:'HT123456789'
        },
        {
          title:'客户名称',
          value:'深圳市测试有限公司'
        },
        {
          title:'申请人员',
          value:'张三'
        },
        {
          title:'当前节点',
          value:'项目经理'
        },
        {
          title:'获取时间',
          value:'2020-01-01 12:00:00'
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
.detail-list-wrap{
  margin: 20px;
  color: #000;
  line-height:2;
  font-size: 15px;

}
.detail-list{
  background-color: #fff;
}
.list-title{
  background-color:#fec901;
  border-bottom: 1px solid #666;
}
.detail-list div:nth-child(1){
  background-color:#fec901;
  border-bottom: 1px solid #666;
  line-height:2.5;
}
.detail-list div{
  text-indent: 1em;
}
.detail-msg{
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
}
</style>
