<template>
    <div class="v-home">
        <div class="container">
            <div class="v-home__block">
              <vForm />
            </div>
            <vQuizList />
        </div>
    </div>
</template>

<script>
import vQuizList from './v-quiz-list';
import vForm from './v-form';

export default {
    components: {
        vQuizList,
        vForm
    }
}
</script>