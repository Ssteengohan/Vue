<script setup>
import { useFlash } from '@/composables/useFlash';

let { flash } = useFlash();

</script>
<template>
  <div>
    <p>
      <button @click="flash('Yay!', 'It Works On The About Page!', 'info')">Click me</button>
    </p>
  </div>
</template>
