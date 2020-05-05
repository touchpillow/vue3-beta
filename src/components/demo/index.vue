<template>
  <div>
    <div>{{state.value}}</div>
    <button @click="clickEvent">click me</button>
    <div id="content"></div>
    <span>{{count}}</span>
    <br />
    <span>{{status}}</span>
  </div>
</template>
<script>
import { reactive, watchEffect, onMounted, ref, computed, watch } from "vue";
export default {
  setup() {
    const state = reactive({
      value: 0
    });
    const count = ref(1);
    const count1 = ref(1);
    const clickEvent = () => {
      state.value++;
      count.value++;
    };
    onMounted(() => {
      watchEffect(() => {
        //   console.log(state.value, "post");
        //   console.log(count.value);
      });
      //   watchEffect(() => {
      //     document.querySelector("#content").innerHTML = new Date().toString();
      //   });
    });
    const status = computed(() => state.value * state.value);
    watch(status, (newVal, oldVal) => {
      debugger;
      console.log("state has change");
    });
    // watch(
    //   [() => state.value, count],
    //   ([newState, newCount], [oldState, oldCount]) => {
    //     debugger;
    //     console.log("state or count has change");
    //   }
    // );
    return {
      state,
      clickEvent,
      count,
      status,
      count1
    };
  }
};
</script>