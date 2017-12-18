<template>
	<div id="app">
		<div>
			<div :style="{backgroundImage: 'url(./static/images/bg.jpg)'}">dadddad</div>
			<divider>多页面 vue-router 2</divider>
			<!-- <img src="../../assets/images/bg.jpg" alt=""> -->
		    <group>
				<cell title="多页面路由" value="" is-link link="./router.html"></cell>
			</group>
		</div>
	</div>
</template>

<script>
import $ from 'assets/js/common'
import Cell from 'vux/src/components/cell'
import Group from 'vux/src/components/group'
import Divider from 'vux/src/components/divider'

export default {
	data() {
		return {
		}
	},
	components: {
		Cell,
		Group,
		Divider
	},
	mounted(){
		
	},
	methods: {
	}
}
</script>

<style lang="less">
.note{
	color:#666;
	padding:10px;
	font-size:12px;
}
.note p{
	line-height:25px;
}
.weui-cells{
	font-size: 14px!important;	
}
</style>
