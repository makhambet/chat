<template>
    <div class="message flex">
        <div class="message__list">
            <div class="message__content">
                <div 
                    v-for="item in chatMessage()"
                    :key="item.id"
                    class="one__action"
                >
                    <div 
                        class="message-list__block"
                        :class="item.who === 'another' ? 'message-list__another' : 'message-list__me'"
                    >
                        <div v-if="item.who==='another'" class="message-another__left">
                            <div class="message-block__image">
                                <img src="@/assets/image/avatar.jpeg" alt="">
                            </div>
                        </div>
                        <div class="message-block__right">
                            <div class="message-block__content">
                                <div class="message-block">
                                    {{item.message}}
                                </div>
                            </div>
                        </div>
                        <div v-if="item.who==='me'"  class="message-block__left">
                            <div class="message-block__image">
                                <img src="@/assets/image/avatar.jpeg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <form @submit.prevent="send()" class="message__send flex">
            <img src="@/assets/image/avatar.jpeg" alt="avatar">
            <textarea v-model="message" placeholder="Отправить сообщение.."></textarea>
            <button>
                <img src="@/assets/image/send.png" alt="">
            </button>
        </form>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                chat: [
                    {
                        id: 1,
                        who: 'another',
                        message: 'Может приготовить чашку кофе',
                    },
                    {
                        id: 2,
                        who: 'me',
                        message: 'Давай давай',
                    }
                ],
                chat2: [
                    {
                        id: 1,
                        who: 'another',
                        message: 'Что то другое',
                    },
                    {
                        id: 2,
                        who: 'me',
                        message: 'Да да другое',
                    }
                ],
                message: ''
            }
        },
        computed: {
            ...mapState([
                'userName'
            ])
        },
        methods: {
            send() {
                let sendingMessage = {
                    id: this.chat.length + 1,
                    who: this.userName === 'Илья' ? 'another' : 'me',
                    message: this.message
                }
                this.$route.params.name === 1 ? this.chat.push(sendingMessage) : this.chat2.push(sendingMessage)
                this.message = ''
            },
            chatMessage() {
                return this.$route.params.name === 1 ? this.chat : this.chat2
            }
        },
        created () {
            this.$store.dispatch('GET_USER_NAME');
        },
    }
</script>

<style scoped>
    .message {
        flex-direction: column;
        height: 100vh;
        max-height: 100%;
        padding-top: 15px;
    }
    .message__list {
        height: calc(100% - 98px);
        overflow-y: auto;
        display: flex;
        flex-direction: column-reverse;
    }
    .message__list::-webkit-scrollbar {
        /* width: 2px; */
    }
    .message__send {
        height: 98px;
        padding-left: 20px;
        box-sizing: border-box;
        align-items: center;
    }
    .message__send > img {
        width: 40px;
        height: 40px;
        border-radius: 50% 50%;
    }
    .message__send button {
        border: none;
        background: none;
    }
    .message__send textarea {
        height: 56px;
        resize: none;
        padding: 20px;
        border-radius: 40px;
        width: calc(100% - 120px);
    }
    .message__send textarea::-webkit-scrollbar {
        width: 0px;
    }
    .message__list {
        padding-left: 20px;
    }
    .message-block__image img {
        width: 40px;
        height: 40px;
        border-radius: 50% 50%;
    }
    .message-list__block {
        display: flex;
    }
    .message-list__block > div:first-child {
        margin-right: 10px;
    }
    .message-list__me {
        justify-content: flex-end;
    }
    .message-block__content > div {
        background: #57575a;
        padding: 10px 10px 15px 10px;
        margin-bottom: 10px;
        
    }
    .message-list__another .message-block{
        border-radius: 0px 15px 15px 15px;
    }
    .message-list__me .message-block {
        border-radius: 15px 15px 0px 15px;
    }
</style>