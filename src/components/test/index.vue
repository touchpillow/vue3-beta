<template>
  <div>
    <p>count: {{state.count}}</p>
    <button @click="increment">+1</button>
  </div>
</template>
<script>
import { reactive, watchEffect, onUpdated } from "vue";

export default {
  setup() {
    onUpdated(() => {
      console.log("onUpdated");
    });
    // 监视 reactive 数据源
    const state = reactive({
      count: 0
    });
    watchEffect(
      () => {
        console.log("state.count: ", state.count, "post");
      },
      {
        flush: "post",
        // 追踪 reactive 和 ref 时触发
        onTrack(e) {
          console.log("track: ", e);
        },
        // 依赖变化时触发
        onTrigger(e) {
          console.log("trigger: ", e);
        }
      }
    );

    const increment = () => {
      state.count++;
    };
    return {
      state,
      increment
    };
  }
};
</script>