import { onMounted, onBeforeUnmount } from 'vue';

export default function useResizeListener(onResize: Function) {
  function resize(e?: Event) {
    onResize(e);
  }
  const resizeHandler = (e: Event) => { resize(e); };

  onMounted(() => {
    resize();
    window.addEventListener('resize', resizeHandler);
  });

  //
  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler);
  });

  return {
    resize,
    resizeHandler,
  };
}
