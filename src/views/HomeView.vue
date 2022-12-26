<script setup>
import TabbableTextareaVue from '@/components/TabbableTextarea.vue';
import { ref } from '@vue/reactivity';

let comment = ref('test value');
</script>

<template>
  <main>
    <form>
      <TabbableTextareaVue v-model="comment" style="width: 100%; height: 300px;" />
    </form>
  </main>
</template>
