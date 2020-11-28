<template>
    <form v-on:submit.prevent="createQuiz" class="v-form">
        <div class="v-form__block">
            <img class="v-form__settings" :src="require('../assets/settings.svg')" v-on:click="show = true" alt="settings">
        </div>
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
        <div class="v-form__settings-quiz" :class="{ 'show': show }">
            <form class="v-form__settings-quiz-form" v-on:submit.prevent="selectQuizBgColor">
                <div class="v-form__block">
                    <div class="v-form__heading">Цветная тема для опроса</div>
                    <ul class="v-form__colors">
                        <li v-for="(bg, index) of bgQuiz" :key="index" class="v-form__block-item">
                            <label :for="`bg-quiz-${index}`">
                                <input class="v-form__block-item-radio" type="radio" name="bg-quiz" :data-color-procent="bg.colorProcent" :data-color-line="bg.colorLine" :data-color="bg.color" :data-color-heading="bg.colorHeading" :checked="bg.checked" :id="`bg-quiz-${index}`">
                                <span class="v-form__block-item-radio-style"></span>
                                <div class="v-form__block-item-color" :style="`background-color: ${bg.color};`"></div>
                            </label>
                        </li>
                    </ul>
                </div>
                <input class="v-form__btn" type="submit" value="Сохранить">
            </form>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            responses: [0, 0],
            show: false,
            bgQuiz: [
                { color: '#fff', colorHeading: '#626886', colorLine: '#D9E0EA', colorProcent: '#7890AE', checked: true },
                { color: '#E16158', colorHeading: '#000', colorLine: '#E1C2BF', colorProcent: '#000' },
                { color: '#35C4E1', colorHeading: '#000', colorLine: '#9BD5E1', colorProcent: '#000' },
                { color: '#35E185', colorHeading: '#000', colorLine: '#B0E1C7', colorProcent: '#000' },
                { color: '#71BC78', colorHeading: '#000', colorLine: '#AFE3B5', colorProcent: '#000' },
                { color: '#FF5432', colorHeading: '#000', colorLine: '#FFA08D', colorProcent: '#000' },
                { color: '#FFC432', colorHeading: '#000', colorLine: '#FFE298', colorProcent: '#000' },
                { color: '#FDA0FF', colorHeading: '#000', colorLine: '#FED6FF', colorProcent: '#000' },
                { color: '#008080', colorHeading: '#000', colorLine: '#009B9B', colorProcent: '#000' }
            ]
        }
    },
    methods: {
        createQuiz() {
            const responses = document.querySelectorAll('.v-form__response');
            const bgColor = document.querySelectorAll('.v-form__block-item-radio');
            const response = {
                title: this.title,
                total: 0,
                responses: [],
                id: Math.floor(Date.now()),
                bgColor: bgColor[0].dataset.color,
                colorHeading: bgColor[0].dataset.colorHeading,
                colorLine: bgColor[0].dataset.colorLine,
                colorProcent: bgColor[0].dataset.colorProcent
            };

            responses.forEach(item => {
                const obj = {
                    value: item.value,
                    count: 0,
                    procent: '0%'
                }

                response.responses.push(obj);
            });

            bgColor.forEach(color => {
                if (color.checked) {
                    response.bgColor = color.dataset.color;
                    response.colorHeading = color.dataset.colorHeading;
                    response.colorLine = color.dataset.colorLine;
                    response.colorProcent = color.dataset.colorProcent;
                }
            });

            this.$store.dispatch('addQuiz', response);

            responses.forEach(item => item.value = '');
            this.title = '';
            this.responses = [0, 0];
            bgColor[0].checked = true;
        },
        selectQuizBgColor() {
            this.show = false;
        },
        addRes() {
            this.responses.push(0);
        }
    }
}
</script>