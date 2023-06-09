<template>
  <header class="guardian-header">
    <IconGuardian />
  </header>
</template>

<script>
import IconGuardian from "@/components/icons/IconGuardian.vue";

export default {
  name: "AppHeader",
  components: {
    IconGuardian,
  },
}
</script>

<style>
.guardian-header {
  height: 96px;
}
</style>
