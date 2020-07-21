<template>
    <div class="message flex">
        <div class="message__list">
            <div class="message-list__another message-list__block">
                <div class="message-block__image">
                    <img src="@/assets/image/avatar.jpeg" alt="">
                </div>
                <div class="message-block__content">
                    <div class="message-block">
                        Может приготовить чашку кофе
                    </div>
                </div>
            </div>
            <div class="message-list__me message-list__block">                
                <div class="message-block__content">
                    <div class="message-block">
                        Может приготовить чашку кофе
                    </div>
                </div>
                <div class="message-block__image">
                    <img src="@/assets/image/avatar.jpeg" alt="">
                </div>
            </div>
        </div>
        <div class="message__send flex">
            <img src="@/assets/image/avatar.jpeg" alt="avatar">
            <textarea placeholder="Отправить сообщение.."></textarea>
            <button>
                <img src="@/assets/image/send.png" alt="">
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .message {
        flex-direction: column;
        height: 100%;
    }
    .message__list {
        height: calc(100% - 98px);
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
    .message__list {
        padding-left: 20px;
    }
    .message-block__image img {
        width: 40px;
        height: 40px;
        border-radius: 50% 50%;
    }
</style>