<template>
  <div>
  </div>
</template>

<script>
export default {
  components: {
  },
};
</script>
<style>
.circle {
  padding: 12px;
  width: 330px;
  height: 330px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 330px;
  background: linear-gradient(
    49deg,
    rgba(177, 184, 134, 0.75) 0%,
    rgba(177, 184, 134, 0) 100%
  );
  transform: rotate(-90deg);
  animation: rotate-circle 10s infinite linear;
}
@keyframes rotate-circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.circle-container {
  position: relative;
  width: 200px; /* Ширина контейнера */
  height: 200px; /* Высота контейнера */
}
</style>
