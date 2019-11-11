import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user_token: ['default_token'],
        username: ['default_username'],
        messages: ['default_msgs']
    },
    mutations: {
        SET_TOKEN: (state, payload) => {
            Vue.set(state.user_token, 0, payload.data)
        },
        USERNAME: (state, payload) => {
            Vue.set(state.username, 0, payload)
        },
        SET_MESSAGES: (state, payload) => {
            Vue.set(state.messages, 0, payload.data)
        }
    },
    actions: {
        loginUser: async (context, details) => {
            let user_name = details["username"]
            let user_pass = details["password"]
            await Axios.post('http://127.0.0.1:8000/login/', {
                username: user_name,
                password: user_pass
            })
            .then((response) => {
                context.commit("SET_TOKEN", response)
                context.commit("USERNAME", user_name)
            }, (error) => {
                alert(error)
            });
        },
        sendChat: async (context, details) => {
            let token = details["token"];
            let sender = details["sender"];
            let receiver = details["receiver"];
            let message = details["message"];
            const tokenStr = 'Token ' + token;
            let data = {}
            data['message'] = message;
            data['receiver'] = receiver;
            data['sender'] = sender;
            await Axios.post('http://127.0.0.1:8000/chats/', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': tokenStr
                }
            })
            .then((response) => {
                context.commit("SET_MESSAGES", response)
            }, (error) => {
                alert(error)
            })
        },
        receiveChats: async (context, details) => {
            let token = details["token"]
            Axios.get('http://127.0.0.1:8000/chats/', {
                headers: 'Authorization: Token ' + token
            })
            .then((response) => {
                alert(response)
            }, (error) => {
                alert(error)
            })
        }
    },
    getters: {
        USER_TOKEN: state => {
            return state.user_token[0];
        },
        USERNAME: state => {
            return state.username[0];
        },
        MESSAGES: state => {
            return state.messages[0]
        }
    }
})