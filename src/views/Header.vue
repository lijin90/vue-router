<template>
    <div id="Header">
        <router-link to='shouye'>首页</router-link>
        <router-link to='/menu'>菜单</router-link>
        <router-link to='/list/123'>列表</router-link>
        <router-link to='/detail'>详情</router-link>
        <router-link to='/about'>关于我们</router-link>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Header',
        data() {
            return {

            }
        },
       
    }
</script>
<style scoped>
    .router-link-active{
        color: red
    }
</style>