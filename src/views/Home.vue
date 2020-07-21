<template>
    <div class="home-page">
        <div class="home__content">
            <form @submit.prevent="login()">
                <h2>Добро пожаловать</h2>
                <small>Чтобы продолжить введите ваш никнейм и аватар</small>
                <div>
                    <input v-model="name" type="text" placeholder="Введите ваш никнейм">
                </div>
                <div>
                    <input type="image">
                </div>
                <div>
                    <button>Создать никнейм</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                img: ''
            }
        },
        methods: {
            login() {
                this.$router.push({name: 'Chat', params: {name: 'inbox'}})
            }
        },
    }
</script>

<style scoped>
    .home__content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: #0D0D0F;
    }
    form {
        background: #1F2023;
        width: 640px;
        text-align: center;
        color: rgba(248, 248, 248, 0.9);
        padding: 5% 20px;
        border-radius: 15px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, .3);
    }
    form h2 {
        margin-bottom: 5%;
    }
    form > div {
        width: 90%;
        max-width: 341px;
        margin: 0 auto;
    }
    form input {
        width: 100%;
        height: 40px;
        background: #2D2F34;
        border-radius: 5px;
        border: 1px solid ;
        box-sizing: border-box;
        padding: 0 20px;
        color: rgba(248, 248, 248, 0.9);
        margin-bottom: 10px;
        border: 1px solid #2D2F34;
    }
    form button {
        width: 100%;
        color: rgba(248, 248, 248, 0.9);
        background: linear-gradient(131.18deg, #B94881 6.82%, #940D0C 92.45%);
        border-radius: 5px;
        height: 40px;
        border: none;
    }
    
</style>