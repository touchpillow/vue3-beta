<template>
  <div>
    <div>{{state.count}}</div>
    <button @click="clickEvent">click me</button>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      count: 0
    });
    const clickEvent = () => {
      state.count++;
    };
    return {
      state,
      clickEvent
    };
  }
};
</script>