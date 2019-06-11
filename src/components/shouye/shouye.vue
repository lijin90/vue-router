<template>
    <div id="shouye">
        <div>
            <Input type=text placeholder='place' v-model="value">
            </Input>
            <div>
                <!-- <span @click="GetVecode" :disabled=disabled>{{YZM}}</span> -->
                <button @click="GetVecode" :disabled=disabled>{{YZM}}</button>
            </div>
            <Input type=password placeholder='请输入密码' v-model="password">
            </Input>
            <button @click=submit>提交</button>
        </div>


        首页--0-{{getC}}---{{$store.state.count}}
        <h1>{{GetState}}</h1>
        <!-- <h3>{{$store.state.AXiosData}}</h3> -->

        <!-- <h4>{{getGetters}}</h4> -->
        <!-- <ul>
            <template v-for="item in $store.state.AXiosData">

                <li>{{item.id}}</li>
                <li>{{item.name}}</li>
                <li>{{item.phone}}</li>

            </template>
        </ul> -->
        <button @click='chufa'>触发vuex中的action</button>
        <children1 :msg="count" @cf="getChild"></children1>
        <children>
            <span slot="one">子组件内部元素1</span>
            <span slot="two">子组件内部元素2</span>
            <span slot="three">子组件内部元素3</span>
        </children>
    </div>
</template>
<script>
    import children1 from './../childrens/children1'
    import Input from './../Input/Input'
    export default {
        name: 'shouye',
        data() {
            return {
                count: [0, 1, 2, 3, 4],
                getC: '',
                canData: 4,
                // type:'number',
                // place:'请输入手机号码',
                disabled:false,
                value: '',
                password: '',
                YZM:"获取验证码"
                // cc:$store.state.AXiosData
            }
        },
        computed: {
            GetState() {
                return this.$store.getters.ChangeCount
            },
            getStoreData() {
                return this.$store.state.AXiosData
            },
            getGetters() {
                return this.$store.getters.GteAXiosData
            }
        },
        components: {
            children1,
            Input,
            children: {
                template: '<div><slot name="one"><p>默认效果</p></slot>这里是子组件<slot name="two"></slot></div>'
            }
        },
        created() {
            this.$store.dispatch('GetData');
            // this.$axios.get('http://jsonplaceholder.typicode.com/users').then((res) => {
            //  console.log(res)
            // }).catch((res) => {
            //     console.log(res);
            // })
        },
        methods: {
            change() {

            },
            submit(){
                console.log(this.value,this.password)
            },
            GetVecode(){
                var time=60;
                var timer=setInterval(()=>{
                    if(time==0){
                        clearInterval(timer);
                        this.disabled=false;
                        this.YZM="获取验证码"
                    }else{
                        this.disabled=true;
                        this.YZM=time+"后获取验证码";
                        time--;
                    }
                },1000)
            },
            chufa() {
                // this.$store.commit('Mchange',2)
                localStorage.setItem('CanData', JSON.stringify(this.canData));
                this.$store.dispatch('setCityName', this.canData);
            },
            getChild(val) {
                console.log(val);
                this.getC = val
            }
        }

    }
</script>