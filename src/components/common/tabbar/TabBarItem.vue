<template>
	<div>
		<div class="tabbar_item" @click="tabClikc">
			<div v-if="!isActive"><slot name="item-icon" ></slot></div>
			<div v-else><slot name="item-icon-active"></slot></div>
			<div :style="activestyle"><slot name="item-text" ></slot></div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			path:String,
			activecolor:{
				type:String,
				default:"red"
			}
		},
		data(){
			return{
				// isActive:true
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path)!==-1
			},
			activestyle(){
				return this.isActive ? {color:this.activecolor}:{}
			}
		},
		methods:{
			tabClikc(){
				this.$router.push(this.path)
			}
		}
	}
</script>

<style>
	.tabbar_item {
		width: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		font-size: 14px;
	}
	.tabbar_img{
		width: 24px;
		height: 24px;
		margin-top: 4px;
		vertical-align: middle;
	}
	.active{
		color: red;
	}
</style>
