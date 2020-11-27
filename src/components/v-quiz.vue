<template>
    <li class="v-quiz"> 
        <div class="v-quiz__block">
            <h3 class="v-quiz__heading">{{ quiz.title }}</h3>
        </div>
        <div class="v-quiz__block">
            <ul class="v-quiz__responses">
                <li v-for="(res, i) of quiz.responses" :key="i" class="v-quiz__response">
                    <h3 class="v-quiz__response-title">{{ res.value }}</h3>
                    <div class="v-quiz__response-line" v-on:click="$emit('vote', res, quiz)">
                        <div class="v-quiz__response-line-count">{{ res.procent }}</div>
                        <div class="v-quiz__response-line-item" :style="`width: ${res.procent}`"></div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="v-quiz__block">
            <span>Всего проголосовало: <strong>{{ quiz.total }}</strong> человек</span>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        quiz: {
            type: Object
        }
    },
}
</script>