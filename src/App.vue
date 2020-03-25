<template>
  <transition name="scale">
    <router-view />
  </transition>
</template>

<style lang="css">
.scale-enter-active {
  animation: fade-in-fwd 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@keyframes fade-in-fwd {
  0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}
</style>
