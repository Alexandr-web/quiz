<template>
    <ul class="v-quiz-list">
        <vForm />
        <vQuiz v-for="(item, i) of getQuizs" :key="i" :quiz="item" v-on:vote="vote" v-on:removeQuiz="removeQuiz" />
    </ul>
</template>

<script>
import vQuiz from './v-quiz';
import vForm from './v-form';

export default {
    components: {
        vQuiz,
        vForm
    },
    computed: {
        getQuizs() {
            return this.$store.getters.getQuizs;
        }
    },
    methods: {
        vote(res, quiz) {
            this.$store.state.quizs.map(item => {
                if (item.id === quiz.id) {
                    item.total++;
                    res.count++;

                    item.responses.map(response => {
                        response.procent = `${Math.round((response.count / item.total) * 100)}%`;
                    });
                }
            });

            localStorage.setItem('quizs', JSON.stringify(this.$store.state.quizs));
        },
        removeQuiz(quiz) {
            this.$store.dispatch('removeQuiz', quiz);
        }
    }
}
</script>