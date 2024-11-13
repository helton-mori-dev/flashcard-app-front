<script setup lang="ts">
import { ref } from 'vue'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/16/solid'

const isPasswordVisible = ref<boolean>(false)

const togglePasswordVisibility = (): void => {
  isPasswordVisible.value = !isPasswordVisible.value
}
</script>

<template>
  <section class="login flex flex-col justify-center items-center container max-w-sm mx-auto">
    <div class="login__label text-left w-full">
      <h1 class="text-sm">Start your flashcard study</h1>
      <h2 class="text-xl font-bold mb-8">Sign up to DeckMaster</h2>
    </div>
    <input
      type="text"
      placeholder="Your name"
      class="placeholder:text-sm border-2 hover:border-black w-full rounded-md h-12 pl-4 mb-5 transition-all"
    />
    <input
      type="text"
      placeholder="Email address"
      class="placeholder:text-sm border-2 hover:border-black w-full rounded-md h-12 pl-4 mb-5 transition-all"
    />
    <div class="relative w-full h-12 mb-8">
      <input
        :type="isPasswordVisible ? 'text' : 'password'"
        placeholder="Password"
        class="placeholder:text-sm border-2 hover:border-black w-full rounded-md h-12 pl-4 transition-all"
      />
      <button
        type="button"
        @click="togglePasswordVisibility"
        class="absolute inset-y-0 right-2 flex items-center h-full"
      >
        <component
          :is="isPasswordVisible ? EyeSlashIcon : EyeIcon"
          class="w-5 h-5 text-gray-400 hover:text-gray-700"
        ></component>
      </button>
    </div>
    <button
      type="submit"
      class="rounded-md w-full h-12 bg-blue-600 text-white hover:bg-blue-300 transition-all"
      @click="togglePasswordVisibility"
    >
      Sign up
    </button>
    <div class="login__sign-in fixed left-6 bottom-6">
      Have as accound?
      <RouterLink to="/" class="text-blue-600 hover:text-blue-400">Sign in</RouterLink>
    </div>
  </section>
</template>
