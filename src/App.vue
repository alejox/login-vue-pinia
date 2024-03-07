<template>
  <h1>APP</h1>
  <nav v-if="!loadingSession">
    <router-link to="/" v-if="userStore.userData">Home</router-link> |
    <router-link to="/login" v-if="!userStore.userData">Login</router-link> |
    <router-link to="/register" v-if="!userStore.userData"
      >Register</router-link
    >
    |
    <button @click="logoutUser" v-if="userStore.userData">Logout</button>
  </nav>
  <div v-else>Loading user...</div>
  <RouterView />
</template>

<script setup>
import { useUserStore } from "./stores/user";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { logoutUser } = userStore;
const { loadingSession } = storeToRefs(userStore);
</script>

<style scoped></style>
