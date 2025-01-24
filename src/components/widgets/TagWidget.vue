<template>
  <p>
    <slot />
  </p>
</template>

<style scoped>
p {
  font: var(--text-label);
  background-color: var(--color-secondary);
  border-radius: 90px;
}

@media (min-width: 320px) {
  p {
    padding: 2px 5px 2px 5px;
  }
}

@media (min-width: 768px) {
  p {
    padding: 5px 15px 5px 15px;
  }
}
</style>
