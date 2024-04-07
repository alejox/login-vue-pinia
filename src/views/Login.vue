<template>
  <h1>Login</h1>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="Ingrese email" v-model.trim="email" />
    <input
      type="password"
      placeholder="Ingrese constraseña"
      v-model.trim="password"
    />
    <button type="submit" :disabled="loadingUser">Acceso</button>
    <!-- {{ loadingUser }} -->
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
// import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

// const router = useRouter();

const userStore = useUserStore();
const { loginUser } = userStore;

const { loadingUser } = storeToRefs(userStore);

const email = ref("alejox@test.com");
const password = ref("123456");

const handleSubmit = async () => {
  console.log(password.value);
  if (!email.value || password.value.length < 5) {
    return alert("Por favor, llena todos los campos correctamente");
  }
  await loginUser(email.value, password.value);
  // router.push("/");
};
</script>

<style lang="scss" scoped></style>
