<template>
    <li class="v-quiz" :style="`background-color: ${quiz.bgColor};`"> 
        <div class="v-quiz__block">
            <h3 class="v-quiz__heading" :style="`color: ${quiz.colorHeading};`">{{ quiz.title }}</h3>
        </div>
        <div class="v-quiz__block">
            <ul class="v-quiz__responses">
                <li v-for="(res, i) of quiz.responses" :key="i" class="v-quiz__response">
                    <h3 class="v-quiz__response-title">{{ res.value }} <strong v-if="res.count > 0">({{ res.count }})</strong></h3>
                    <div class="v-quiz__response-line" v-on:click="$emit('vote', res, quiz)">
                        <div class="v-quiz__response-line-count" :style="`color: ${quiz.colorProcent};`">{{ res.procent }}</div>
                        <div class="v-quiz__response-line-item" :style="`width: ${res.procent}; background-color: ${quiz.colorLine};`"></div>
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