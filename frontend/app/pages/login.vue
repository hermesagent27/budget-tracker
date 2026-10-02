<script setup lang="ts">
definePageMeta({ layout: false })

const password = ref('')
const error = ref('')

async function login() {
  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: { password: password.value }
    })
    navigateTo('/')
  } catch {
    error.value = 'Wrong password'
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4 bg-base-200">
    <form @submit.prevent="login" class="card bg-base-100 w-full max-w-sm shadow-xl">
      <div class="card-body">
        <h1 class="card-title text-2xl mb-4">Budget Tracker</h1>
        <input
          v-model="password"
          type="password"
          class="input input-bordered w-full"
          placeholder="Password"
        />
        <p v-if="error" class="text-error text-sm">{{ error }}</p>
        <button type="submit" class="btn btn-primary w-full mt-2">Login</button>
      </div>
    </form>
  </div>
</template>
