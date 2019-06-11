<template>
    <div id="caidan">
        <!-- <h2>{{$store.getttes.ChangeCount}}</h2> -->
        <h1>menu--{{$store.state.count}}</h1>
        <ul>
                <template v-for="item in $store.state.AXiosData">
    
                    <li>{{item.id}}</li>
                    <li>{{item.name}}</li>
                    <li>{{item.phone}}</li>
    
                </template>
            </ul>
        <button @click='chufa'>触发vuex中的action</button>
    </div>
</template>
<script>
    export default {
        name: 'caidan',
        data() {
            return {

            }
        },
        methods: {
            chufa() {
                this.$store.dispatch('setCityName', 5);
            },

        },
        created(){
            this.$store.dispatch('GetData');
        }


    }
</script>