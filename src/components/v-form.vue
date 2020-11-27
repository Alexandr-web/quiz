<template>
    <form v-on:submit.prevent="createQuiz" class="v-form">
        <div class="v-form__block">
            <label class="v-form__heading" for="title">Заголовок опроса</label>
            <input class="v-form__data v-form__title" type="text" placeholder="Заголовок опроса" id="title" v-model="title">
        </div>
        <div class="v-form__block">
            <label class="v-form__heading" for="response">Варианты ответа</label>
            <input v-for="(res, i) of responses" :key="i" class="v-form__data v-form__response" :placeholder="`Ответ ${i + 1}`" id="response" type="text">
            <button class="v-form__btn" type="button" v-on:click="addRes">Добавить ответ</button>
        </div>
        <input class="v-form__btn v-form__submit" type="submit" value="Создать опрос">
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            responses: [0, 0]
        }
    },
    methods: {
        createQuiz() {
            const responses = document.querySelectorAll('.v-form__response');
            const response = {
                title: this.title,
                total: 0,
                responses: [],
                id: Math.floor(Date.now())
            };

            responses.forEach(item => {
                const obj = {
                    value: item.value,
                    count: 0,
                    procent: '0%'
                }

                response.responses.push(obj);
            });

            this.$store.dispatch('addQuiz', response);

            responses.forEach(item => item.value = '');
            this.title = '';
            this.responses = [0, 0];
        },
        addRes() {
            this.responses.push(0);
        }
    }
}
</script>