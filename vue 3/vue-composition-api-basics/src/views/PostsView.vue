<template>
  <div class="about">
    <h1>Posts</h1>
    <ul>
      <li>
        <RouterLink to="/postDetail/id1">Post 1</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/id2">Post 2</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/id3">Post 3</RouterLink>
      </li>
    </ul>
    <textarea v-some-name />
  </div>
</template>

<script setup>
import { vAutofocus } from '@/directives/vAutofocus';
import { vSomeName } from '@/directives/vSomeName';

</script>

<style scoped>
ul {
  margin-bottom: 30px;
}
</style>