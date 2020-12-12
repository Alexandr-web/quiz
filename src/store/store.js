import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        quizs: []
    },
    getters: {
        getQuizs(state) {
            if (localStorage.getItem('quizs')) {
                state.quizs = JSON.parse(localStorage.getItem('quizs'));
            }

            return state.quizs;
        }
    },
    actions: {
        addQuiz({ commit }, quizs) {
            commit('addQuiz', quizs);
        },
        removeQuiz({ commit }, quiz) {
            commit('removeQuiz', quiz);
        }
    },
    mutations: {
        addQuiz(state, quiz) {
            state.quizs.push(quiz);

            localStorage.setItem('quizs', JSON.stringify(state.quizs));
        },
        removeQuiz(state, quiz) {
            state.quizs = state.quizs.filter(item => item.id !== quiz.id);

            localStorage.setItem('quizs', JSON.stringify(state.quizs));
        }
    }
});