<script setup>
import { ref, computed, inject } from "vue";
import Header from "../components/Header.vue";
import verbs from "../data/verbs.js";

const swal = inject('$swal');
const answer = ref("");
const translation = ref(null);
const totalAsked = ref(0);
const totalCorrect = ref(0);
const totalWrong = ref(0);
const askedQuestions = ref([]);

const getRandomWord = () => {
  totalAsked.value++;
  let index = Math.floor(Math.random() * verbs.length);

  let word = verbs[index];

  if (askedQuestions.value.includes(word)) {
    return getRandomWord();
  }

  return verbs[index];
};

const randomWord = ref(getRandomWord());

const checkAnswer = () => {
  if (answer.value.toLowerCase() === randomWord.value.translation.toLowerCase()) {
    totalCorrect.value++;
    swal.fire({
      icon: "success",
      text: "Correct answer!",
    });
  } else {
    totalWrong.value++;
    swal.fire({
      icon: "error",
      text: "Wrong answer!",
    });
  }
};

const toggleAnswer = () => {
  if (translation.value) {
    translation.value = null;
  } else {
    translation.value = randomWord.value.translation;
  }
};

const nextWord = () => {
  askedQuestions.value.push(randomWord.value);
  randomWord.value = getRandomWord();
};
</script>

<template>
  <Header title="Verbs">
    <template #actions>
      <div class="badge text-bg-success rounded-pill align-text-bottom">
        Passed: <span v-text="totalCorrect"></span>
      </div>
      <div class="badge text-bg-danger rounded-pill align-text-bottom ms-1">
        Failed: <span v-text="totalWrong"></span>
      </div>
      <div class="badge text-bg-light rounded-pill align-text-bottom ms-1">
        Total: <span v-text="totalAsked"></span>
      </div>
    </template>
  </Header>

  <div class="card shadow-sm border-0">
    <div class="card-body">
      <div class="mb-4">
        <h4 class="text-capitalize text-body-emphasis">
          <span v-text="randomWord.word"></span>
          <sup>
            <button type="button" class="badge bg-info rounded-pill border-0 fs-6 ms-2"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-custom-class="custom-tooltip"
                    data-bs-title="verbs[0].hint">
              !
            </button>
          </sup>
        </h4>
        <div v-if="translation">
          <span class="text-muted" v-text="translation"></span>
          <hr>
          <h5 class="text-muted">Examples:</h5>
          <ul class="list-group list-group-flush">
            <li v-for="example in randomWord.examples" :key="example"  class="list-group-item">
              <div>
                <div class="d-flex justify-content-between">
                  <span v-text="example.example"></span> <span v-text="example.translation" class="fw-bolder"></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="answer" placeholder="Your answer..." aria-label="answer" aria-describedby="button-answer">
        <button @click="checkAnswer" :disabled="!answer" class="btn btn-outline-dark" type="button" id="button-answer">Check</button>
      </div>
    </div>

    <div class="card-footer">
      <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-outline-dark" @click="toggleAnswer">
          <span v-if="translation">Hide answer</span>
          <span v-else>Show answer</span>
        </button>
        <button type="button" class="btn btn-outline-dark" @click="nextWord">Next</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>