<template>
  <div class="flex-center question">
    <div class="question-title flex-center">
      <h2>
        {{currentQuestion.title}}
      </h2>
    </div>
    <div class="question-answers flex-center flex-column">
      <button
        @click="$emit('response', firstAnswer.feedback)"
        class="btn-details2 no-border shadow mb-3"
      >
        {{firstAnswer.description}}
      </button>

      <br>

      <button
        @click="$emit('response', firstAnswer.feedback)"
        class="btn-alert no-border shadow"
      >
        {{lastAnswer.description}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentQuestion"],
  computed: {
    answers() {
      return this.currentQuestion.QuestionAnswers;
    },
    firstAnswer() {
      return this.answers[0];
    },
    lastAnswer() {
      return this.answers.pop();
    },
  },
};
</script>

<style lang="scss">
.question > div {
  width: 50%;
  position: fixed;
  top: 0px;
}

.question-title {
  background: $primary;
  height: 100%;
  left: 0px;
  color: #fff;
}

.question-answers {
  height: 100%;
  right: 0px;

  button {
    max-width: 500px;
    text-align: left;
    padding: 20px 40px;
    &:active,
    &:focus {
      outline: none;
    }
  }
}
</style>