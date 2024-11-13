<script setup lang="ts">
import { ref } from 'vue'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/16/solid'

const isPasswordVisible = ref<boolean>(false)
const name = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')

const errors = ref<{ name?: string; email?: string; password?: string }>({})

const togglePasswordVisibility = (): void => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const validateForm = (): boolean => {
  errors.value = {}

  if (!name.value.trim()) {
    errors.value.name = 'Please enter your email'
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value.trim()) {
    errors.value.email = 'Please enter your email'
  } else if (!emailPattern.test(email.value)) {
    errors.value.email = 'Please enter a valid email address'
  }

  if (password.value.length < 6) {
    errors.value.password = 'Your password must be at least 6 characters'
  }

  return Object.keys(errors.value).length === 0
}

const sendForm = (event: Event): void => {
  event.preventDefault()
  if (validateForm()) {
    console.log('Successfully sent')
  } else {
    console.log('Validation failed')
  }
}
</script>

<template>
  <section
    class="login flex flex-col justify-center items-center container w-24rem max-w-sm mx-auto"
  >
    <form action="" class="w-full">
      <div class="login__label text-left w-full">
        <h1 class="text-base">Start your flashcard study</h1>
        <h2 class="text-2xl font-bold mb-8">Sign up to DeckMaster</h2>
      </div>
      <span class="form__field w-full flex relative">
        <span
          v-if="errors.name"
          class="form__error absolute top-[-24px] left-0 text-red-500 text-sm"
          >{{ errors.name }}</span
        >
        <input
          v-model="name"
          type="text"
          placeholder="Your name"
          class="placeholder:text-sm border-2 hover:border-black w-full rounded-md h-12 pl-4 mb-8 transition-all"
        />
      </span>

      <span class="form__field w-full flex relative">
        <span
          v-if="errors.email"
          class="form__error absolute top-[-24px] left-0 text-red-500 text-sm"
          >{{ errors.email }}</span
        >
        <input
          v-model="email"
          type="text"
          placeholder="Email address"
          class="placeholder:text-sm border-2 hover:border-black w-full rounded-md h-12 pl-4 mb-8 transition-all"
        />
      </span>

      <span class="form__field w-full flex relative w-full h-12 mb-8 flex">
        <span
          v-if="errors.password"
          class="form__error absolute top-[-24px] left-0 text-red-500 text-sm"
          >{{ errors.password }}</span
        >
        <input
          v-model="password"
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
      </span>
      <button
        type="submit"
        class="rounded-md w-full h-12 bg-blue-600 text-white hover:bg-blue-300 transition-all"
        @click="sendForm"
      >
        Sign up
      </button>
    </form>
    <div class="login__sign-in fixed left-6 bottom-6">
      Have as accound?
      <RouterLink to="/" class="text-blue-600 hover:text-blue-400">Sign in</RouterLink>
    </div>
  </section>
</template>
