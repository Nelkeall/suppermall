<template>
	<div class="tabbar">
		<slot></slot>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.tabbar {
		display: flex;
		justify-content: space-around;
		height: 50px;
		background-color: antiquewhite;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
