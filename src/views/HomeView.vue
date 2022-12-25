<script setup>
import TheWelcome from "../components/TheWelcome.vue";

// eslint-disable-next-line no-undef
let message = $ref("Hello world");

let doSomething = () => {
  alert("doing it now");
};
</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ message }}</p>
    <button @click="doSomething">CLick me</button>
  </main>
</template>
