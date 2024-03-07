<template>
  <h1>Home</h1>
  <p>{{ userData?.email }}</p>
</template>
<script setup>
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
const userStore = useUserStore();

const { userData } = storeToRefs(userStore);
</script>

<style scoped></style>
