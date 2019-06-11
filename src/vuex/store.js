import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// Vue.prototype.$axios= axios
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // count:1,
        count: localStorage.getItem('CanData') ? JSON.parse(localStorage.getItem('CanData')) : 1,
        AXiosData:[],
    },
    getters: {
        ChangeCount(state) {
            return state.count;
        },
        GteAXiosData(state){
            return state.AXiosData;
        }
    },
    mutations: {
        Mchange(state, sum) {
            state.count += sum;
        },
        GteAXios(state,data) {
            state.AXiosData=data;
            console.log(state.AXiosData);
        }
    },
    actions: {
        setCityName(contxt, state) {
            contxt.commit('Mchange', state);
        },
        GetData(contxt) {
             axios.get('http://jsonplaceholder.typicode.com/users').then((res) => {
             console.log(res)
             contxt.commit('GteAXios',res.data) ;
            }).catch((res) => {
                console.log(res);
            })
            // axios({
            //     method: 'get',
            //     url: 'http://jsonplaceholder.typicode.com/users',
            // }).then((response) =>{          //这里使用了ES6的语法
            //     console.log(response)  
            //     contxt.commit('GteAXios',response.data)     //请求成功返回的数据
            // }).catch((error) =>{
            //     console.log(error)       //请求失败返回的数据
            // })
        }
    }
})
export default store;