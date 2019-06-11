<template>
    <div id="detail">
        <div class="fl" style="width: 400px">
            <router-link to='detail1'>detail1</router-link>
            <router-link to='detail2'>detail2</router-link>
            <router-link to='detail3'>detail3</router-link>
            <router-link to='detail4'>detail4</router-link>
        </div>
        <div class="fr" style="width: 400px">
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'detail',
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
.fl{
    float: left;
}
.fr{
    float: right;
}
</style>