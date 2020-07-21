<template>
    <div class="chat-page">
        <div class="container flex">
            <div class="chat__lists">
                <div class="chat-lists__head">
                    <h3>Чаты</h3>
                    <form>
                        <input type="text" placeholder="Поиск..">
                    </form>
                    <div class="chat-lists__body">
                        <router-link 
                            v-for="item in 10"
                            :key="item"
                            :to="{name: 'Chat', params: {name: item}}" 
                            class="chat-body__profile"
                        >
                            <div class="chat-profile__image">
                                <img src="@/assets/image/avatar.jpeg" alt="">
                            </div>
                            <div class="chat-profile__text">
                                <p>Ник нейм</p>
                                <small>Что то но ничего</small>
                            </div>
                        </router-link>
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
    import Messages from '@/components/chat/index'
    export default {
        components: {
            Messages,
        },
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
        overflow-y: auto;
    }
    .chat__content {
        width: 67%;

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
    .chat-body__profile:hover {
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
    }
</style>