<script setup lang="ts">
defineProps({
  company: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  job: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="work">
    <h1>{{ company }}</h1>
    <div class="work-detail">
      <h2>{{ type }}</h2>
      <h3>{{ job }}</h3>
      <h4>{{ date }}</h4>
      <h5>{{ location }}</h5>
    </div>
  </div>
</template>

<style scoped>
.work {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.work > h1 {
  font: var(--text-subtitle-bold);
}

.work-detail {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 50px;
}

.work-detail > h2 {
  font: var(--text-subtitle);
}

.work-detail > h3 {
  font: var(--text-subtitle);
  color: var(--color-primary);
}

.work-detail > h4 {
  font: var(--text-label);
}

.work-detail > h5 {
  font: var(--text-description);
}
</style>
