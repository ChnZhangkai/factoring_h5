<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*全局*/
/* 修改哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或 */
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,p,blockquote,th,td,article,textarea{margin:0;padding:0;}
body{font-size:12px;color:#666;font-family: 'Microsoft yahei',Arial; min-width:320px}
table{border-collapse:collapse;border-spacing:0;}
ul,li,dl{list-style:none;list-style-type:none;}
h1,h2,h3,h4,h5,h6{font-size:100%;}
a{text-decoration:none; color:#666}
img{border:none;}
i{font-style:normal;}
input,textarea{outline:none;-webkit-appearance:none; padding:0; margin:0;font-family:HiraginoSansGB W3,Arial, Helvetica, sans-serif}
input[type="radio"]{box-sizing:border-box;}
input[type="checkbox"]{border-radius:0px;}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display: block;}
a,button,input,.flex1,textarea{-webkit-tap-highlight-color:rgba(255,0,0,0);}

body{
    background-color:#f2f2f2;
}
.mint-swipe{
    height: 200px;
}
.mint-swipe img{
   width: 100%;
   height: 100%;
   display: inline-block;
}
.mint-header{
  background-color: #fec901;
  color: #101010;
}
.mint-header-title{
   font-size: 16px
}
.mint-tabbar > .mint-tab-item.is-selected{
   color: #fec901;
}

</style>
