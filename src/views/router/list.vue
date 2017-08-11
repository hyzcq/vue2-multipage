<template>
	<div>
		<div style="padding: 25px 10px;color:red;text-align: center;">
	       注意看浏览器地址的变化！！
		</div>
		<router-link to='/'>
			<x-button type="warn">点我再切换回来度试呗</x-button>
		</router-link>
	</div>
</template>

<script>
import $ from 'assets/js/common'
import { XButton } from 'vux'

export default {
	components: {
		XButton
	}
}
</script>

<style lang="less">

</style>
