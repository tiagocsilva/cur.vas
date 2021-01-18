<template>
  <div>
    <transition name="fade">
      <switch-test
        v-if="!showStartInstructions"
        @start="showStartInstructions = true"
        key="instructions"
      />

      <start-quiz
        v-if="showStartInstructions && !quizStarted"
        @start="startQuiz()"
        key="start"
      />

      <question
        :currentQuestion="currentQuestion"
        v-if="quizStarted"
        key="question"
        @response="changeQuestion"
        id="question"
      />
    </transition>
  </div>
</template>

<script>
import SwitchTest from "@/components/preTest/SwitchTest.vue";
import StartQuiz from "@/components/preTest/StartQuiz.vue";
import Question from "@/components/preTest/Question.vue";
import * as preTestService from "@/api/preTest";
import gsap from "gsap";

export default {
  components: {
    SwitchTest,
    StartQuiz,
    Question,
  },
  data() {
    return {
      questions: [],
      currentQuestion: [],
      answers: [],
      showStartInstructions: false,
      quizStarted: false,
    };
  },
  methods: {
    startQuiz() {
      this.quizStarted = true;
    },
    changeQuestion(response) {
      const { question } = this.$refs;

      this.answers.push(this.response);

      gsap
        .to("#question", {
          opacity: 0,
          duration: 0.2,
        })
        .then(() => {

          this.currentQuestion = this.questions[this.answers.length]

          gsap.to("#question", {
            opacity: 1,
            duration: 0.2,
          });
        });
    },
  },
  mounted() {
    preTestService.getQuestions().then((res) => {
      this.questions = res.data;

      this.currentQuestion = this.questions[0];
    });
  },
};
</script>

<style lang="scss">
.pretest-container {
  margin-top: 20vh;
}

@media only screen and (max-width: 600px) {
  .pretest-container {
    margin-top: 5vh;
  }
}
</style>
