<template>
  <div class="header-bar">
    <h1 class="title">
      <router-link style="color: #00B51D;" :to="{ name: 'MovieView'}">
        豆瓣
      </router-link>
    </h1>
    <ul class="nav">
      <li>
        <router-link style="color: #2384E8" :to="{ name: 'MovieView'}">
          电影
        </router-link>
      </li>
      <li>
        <router-link style="color: #9F7860" :to="{ name: 'BookView'}">
          图书
        </router-link>
      </li>
      <li>
        <router-link style="color: #E4A813" :to="{ name: 'Broadcast'}">
          广播
        </router-link>
      </li>
      <li>
        <router-link style="color: #2AB8CC" :to="{ name: 'Group'}">
          小组
        </router-link>
      </li>
    </ul>
    <span class="talion"></span>
  </div>
</template>

<script>
export default {
  name: 'header-bar',
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style>
.header-bar {
 width: 100%;
 display: flex;
 flex-flow: row;
 border-bottom: 1px solid #f3f3f3;
 position: fixed;
 top: 0;
 left: 0;
 background: #fff;
 }
 .title{
 	margin: 0 0 0 18px;
 	line-height: 65px;
 }
 .nav{
 	display: flex;
 	flex-flow: row;
 	margin-left: 2rem;
 }
 .nav li{
 	padding:0 5px;
 	line-height:65px;
 }
</style>

