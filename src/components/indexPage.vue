<template>
  <div>
    <swiper :imgList="imgListData"></swiper>
    <div class="index-list">
      <router-link class="index-board-list"
           v-for="(item,index) in boardList"
           :to="{path:'list/'+ item.toKey}">
        <div class="index-board-item">
          <div class="index-board-item-inner">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
          </div>
          <div class="index-board-list-right">
             <img :src="item.pic" alt="">
             <span v-if="item.saleout">{{item.number}}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Swiper from '../components/swiper'

export default {
  components:{
    Swiper
  },
  data () {
    return {
        isfull:true,
        imgListData:[
          {
            id:1,
            img:require('../assets/banner_1.png')
          },
          {
            id:2,
            img:require('../assets/banner_2.png')
          }
        ],
        boardList:[
          {
            title:'待办任务',
            description:'待处理任务列表',
            id:'',
            toKey:'todoList',
            pic:require('../assets/task_1.png'),
            number:1,
            headerUrlTitle:'待办任务查询',
            saleout:true

          },
          {
            title:'已办任务',
            description:'已处理任务列表',
            id:'car',
            toKey:'processList',
            pic:require('../assets/task_2.png'),
            number:1,
            headerUrlTitle:'已办任务查询',
            saleout:false
          },
          {
            title:'完成任务',
            description:'已完成任务列表',
            id:'loud',
            toKey:'finishList',
            pic:require('../assets/task_3.png'),
            number:1,
            headerUrlTitle:'已完成任务查询',
            saleout:false
          },
          {
            title:'消息提醒',
            description:'消息列表',
            id:'hill',
            toKey:'messageList',
            pic:require('../assets/msgs.png'),
            number:1,
            headerUrlTitle:'消息查询',
            saleout:false
          }
        ],
        localDate:""
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-list{
    display: flex;
    flex-wrap:  wrap;
    padding-left: 20px;
    margin-top: 20px;
  }
  .index-board-list {
    width: 50%

  }
  .index-board-item {
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 10px 0 10px 10px;
    margin-right: 20px;
    margin-bottom: 20px;
    height: 60px;
    display: flex;
    align-items: center ;
  }
  .index-board-item-inner {
    line-height: 1.5;
    flex: 1;
  }
  .index-board-item h2 {
    font-size: 15px;
    color: #101010;
  }
  .index-board-item p {
    font-size: 13px;
    color: #666;
  }
  .index-board-list-right{
    width: 45px;
    height: 45px;
    padding-right: 10px;
    display: flex;
    justify-content:flex-end;
    position: relative;
  }
  .index-board-list-right img {
    display: inline-block;
    width: 100%;
    height: 100%
  }
  .index-board-list-right span{
    display: inline-block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ca1515;
    position: absolute;
    right: 2px;
    top:-2px;
    color: #fff;
    text-align: center;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-button {
    margin-top: 20px;
  }

</style>
