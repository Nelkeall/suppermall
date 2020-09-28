<template>
  <div id="app">
    <router-view></router-view>
    <TabBar>
			<TabBarItem path="/home" activecolor="pink">
				<img slot="item-icon" src="~assets/img/leave_word.png" alt="" class="tabbar_img">
				<img slot="item-icon-active" src="~assets/img/leave_word_s.png" alt="" class="tabbar_img">
				<div slot="item-text">首页</div>
			</TabBarItem>
			<TabBarItem path="/category" activecolor="blue">
				<img slot="item-icon" src="~assets/img/shop.png" alt="" class="tabbar_img">
				<img slot="item-icon-active" src="~assets/img/shop_an.png" alt="" class="tabbar_img">
				<div slot="item-text">分类</div>
			</TabBarItem>
			<TabBarItem path="/cart" activecolor="blue">
				<img slot="item-icon" src="~assets/img/square.png" alt="" class="tabbar_img">
				<img slot="item-icon-active" src="~assets/img/square_a.png" alt="" class="tabbar_img">
				<div slot="item-text">购物车</div>
			</TabBarItem>
			<TabBarItem path="/my" activecolor="blue">
				<img slot="item-icon" src="~assets/img/my.png" alt="" class="tabbar_img">
				<img slot="item-icon-active" src="~assets/img/my_a.png" alt="" class="tabbar_img">
				<div slot="item-text">我的</div>
			</TabBarItem>
		</TabBar>

  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar.vue"
  import TabBarItem from "components/common/tabbar/TabBarItem.vue"
  // import TabBar from "components/common/tabbar/TabBar.vue"
  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>
<style>
  @import url("assets/css/base.css");
</style>
