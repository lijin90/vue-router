<template>
    <div id="list">
        list
        {{this.$route.params.num}}
    </div>
</template>
<script>
    export default {
        name: 'list',
        data() {
            return {

            }
        },
        creatd() {
            console.log(this.$route.params.num);
        },
    }
</script>