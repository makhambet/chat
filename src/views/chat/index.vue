<template>
    <div class="chat-page">
        <div class="container flex">
            <div class="chat__lists">
                <div class="chat-lists__head">
                    <h3>Чаты</h3>
                    <form @submit.prevent="searching()">
                        <input v-model="search" type="text" placeholder="Поиск..">
                    </form>
                    <div class="chat-lists__body">
                        <router-link 
                            v-for="item in filterLists"
                            :key="item.id"
                            :to="{name: 'Chat', params: {name: item.id}}" 
                            class="chat-body__profile"
                            :class="{active: $route.params.name === item.id}"
                        >
                            <div class="chat-profile__image">
                                <img src="@/assets/image/avatar.jpeg" alt="">
                            </div>
                            <div class="chat-profile__text">
                                <p>{{item.name}}</p>
                                <small>{{item.message}}</small>
                            </div>
                        </router-link>
                        <p v-show="filterLists.length===0">Пользователь не найден</p>
                    </div>
                </div>
            </div>
            <div class="chat__content">
                <div v-show="$route.params.name === 'inbox'" class="char-content__inbox">
                    <div>
                        <img src="@/assets/image/chat.png" alt="">
                        <p>Выберите кому хотите написать</p>
                    </div>
                </div>
                <Messages  v-show="$route.params.name !== 'inbox'" />
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Messages from '@/components/chat/index'
    export default {
        data() {
            return {
                
                search: ''
            }
        },
        computed: {
            ...mapState([
                'userName'
            ]),
            chatLists() {
                return [
                    {
                        id: 1,
                        name: this.userName === 'Илья' ? 'Кто-то' : 'Илья',
                        message: 'Все отлично'
                    },
                    {
                        id: 2,
                        name: this.userName,
                        message: 'У меня тоже'
                    }
                ]
            },
            filterLists() {
                return this.search === '' ? 
                this.chatLists :
                this.chatLists.filter(e => e.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
            }
        },
        methods: {
            searching() {
                
            }
        },
        components: {
            Messages,
        },
        watch: {
            search() {
                this.searching()
            }
        }
    }
</script>

<style scoped>
    .chat__lists {
        width: 33%;
        border-right: 1px solid #94A2AB;
        padding: 40px 0;
        box-sizing: border-box;
        padding-right: 20px;
        max-height: 100vh;
        height: 100vh;
        overflow-y: auto;
    }
    .chat__lists::-webkit-scrollbar {
        width: 0px;
    }
    .chat__content {
        width: 67%;
        height: 100vh;
        max-height: 100vh;
    }
    .chat-lists__head h3 {
        text-align: center;
    }
    .chat-lists__head form {
        width: 100%;
        margin-top: 20px;
    }
    .chat-lists__head form input {
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
    }
    .chat-body__profile {
        display: flex;
        align-items: center;
        padding: 5px 0 5px 10px;
        border-bottom: 1px solid rgba(248, 248, 248, 0.3);
        transition: all .3s ease-in;
    }
    .chat-body__profile:hover, .chat-body__profile.active {
        background: #2c2c2e;
    }
    .chat-profile__image img {
        width: 64px;
        height: 64px;
        margin-right: 20px;
        border-radius: 50% 50%;
    }

    .char-content__inbox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
    }
</style>