<template>
  <div>
    <div style="padding: 25px 10px;color:red;text-align: center;">
    	注意看浏览器地址的变化！！
    </div>
    
    <msg title="路由切换demo" description="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现" icon="success">
    	<div slot='buttons'>
        	<router-link to='/list'>
        		<x-button type="primary">路由切换</x-button>
        	</router-link>
    	</div>
    </msg>
  </div>
</template>

<script>
import $ from 'assets/js/common'
import { Msg, Divider, XButton } from 'vux'

export default {
    name: 'add',	
    components: {
        Msg,
        Divider,
        XButton
    }
}
</script>

<style lang="less">

</style>
