<template>
  <div class="node" :style="nodeLayout" @mousedown="mousedownHandle"></div>
</template>
<script>
import { reactive, computed, ref, onMounted, onUnmounted } from "vue";
// 初始化需要的属性
const initLayout = () => {
  const layout = reactive({ x: 0, y: 0 });
  return {
    layout
  };
};
// 初始化需要的事件
const initEvent = layout => {
  const moveInitLayout = reactive({
    x: 0,
    y: 0
  });
  const moveLayout = reactive({
    x: 0,
    y: 0
  });
  const moveFlag = ref(false);
  const mousedownHandle = e => {
    e.preventDefault();
    moveInitLayout.x = layout.x;
    moveInitLayout.y = layout.y;
    moveFlag.value = true;
    moveLayout.x = e.screenX;
    moveLayout.y = e.screenY;
  };
  const moveHandle = e => {
    e.preventDefault();
    if (!moveFlag.value) return;
    layout.x = moveInitLayout.x + e.screenX - moveLayout.x;
    layout.y = moveInitLayout.y + e.screenY - moveLayout.y;
  };
  const mouseupHanlde = e => {
    e.preventDefault();
    moveFlag.value = false;
  };
  onMounted(() => {
    window.document.addEventListener("mousemove", moveHandle, false);
    window.document.addEventListener("mouseup", mouseupHanlde, false);
  });
  onUnmounted(() => {
    window.document.removeEventListener("mousemove", moveHandle);
    window.document.removeEventListener("mouseup", mouseupHanlde);
  });
  return {
    mousedownHandle
  };
};
export default {
  setup() {
    const { layout } = initLayout();
    const nodeLayout = computed(() => {
      return {
        left: `${layout.x}px`,
        top: `${layout.y}px`
      };
    });
    const { mousedownHandle } = initEvent(layout);
    return {
      nodeLayout,
      mousedownHandle
    };
  }
};
</script>
<style lang="less" scoped>
.node {
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #ccc;
  width: 150px;
  height: 150px;
}
</style>