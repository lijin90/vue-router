<template>
    <div id="children1">
        我是子组件
        {{msg}}
        <button @click="add">增加</button>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'children1',
        props: ['msg'],
        data() {
            return {
                count: 0,
                message: '子传给父级'
            }
        },
        created() {
            console.log(this.msg);
            this.count = this.msg
        },
        methods: {
            add() {
                this.count++;
                this.$emit('cf', this.message, true);
            }
        }

    }
</script>