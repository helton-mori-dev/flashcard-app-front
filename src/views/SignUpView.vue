<script setup lang="ts">
import { ref, computed } from 'vue'
// import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/16/solid'
import { useQuery, useMutation } from '@vue/apollo-composable'
import GET_USERS from '@/graphql/getAllUsers.query.gql'
import CREATE_USER from '@/graphql/createUser.mutation.gql'
import type { FormErrors } from '@/types/errors'

const { result } = useQuery(GET_USERS)

const users = computed(() => result.value?.users)

// const isPasswordVisible = ref<boolean>(false)
const name = ref<string>('')
const email = ref<string>('')
// const password = ref<string>('')
const errors = ref<FormErrors>({})

// const togglePasswordVisibility = (): void => {
//   isPasswordVisible.value = !isPasswordVisible.value
// }

const validateName = (): string | undefined => {
  return !name.value.trim() ? 'Please enter your name' : undefined
}

const validateEmail = (): string | undefined => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value.trim()) {
    return 'Please enter your email'
  } else if (!emailPattern.test(email.value)) {
    return 'Please enter a valid email address'
  }
  return undefined
}

// const validatePassword = (): string | undefined => {
//   return password.value.length < 6 ? 'Your password must be at least 6 characters' : undefined
// }

const validateForm = (): boolean => {
  errors.value = {
    name: validateName(),
    email: validateEmail(),
    // password: validatePassword(),
  }

  return Object.keys(errors.value).every((key) => !errors.value[key as keyof FormErrors])
}

const { mutate: createUser, onDone, onError } = useMutation(CREATE_USER)

const sendForm = (event: Event): void => {
  event.preventDefault()
  if (validateForm()) {
    console.log('Successfully sent')
  } else {
    console.log('Validation failed')
  }

  if (validateForm()) {
    const userData = {
      name: name.value,
      email: email.value,
      // password: password.value,
    }
    createUser({ data: userData })

    onDone((response) => {
      console.log('User created', response.data.createUser)
    })

    onError((error) => {
      console.log('Error, user not created', error)
    })
  } else {
    console.log('Error validating form')
  }
}
</script>

<template>
  <div v-if="users">
    <h1>Users</h1>
    <ul v-if="users">
      <li v-for="user in users" :key="user.id">{{ user.name }} - {{ user.email }}</li>
    </ul>
    <p v-else>Loading...</p>
  </div>
  <section
    class="login flex flex-col justify-center items-center container w-24rem max-w-sm mx-auto"
  >
    <form action="" class="w-full">
      <div class="login__label text-left w-full">
        <h1 class="text-base">Start your flashcard study</h1>
        <h2 class="text-2xl font-bold mb-8">Sign up to DeckMaster</h2>
      </div>
      <span class="form__field">
        <transition name="error">
          <span v-if="errors.name" class="form__error">{{ errors.name }}</span>
        </transition>
        <input v-model="name" type="text" placeholder="Your name" class="form__input mb-8" />
      </span>

      <span class="form__field">
        <transition name="error">
          <span v-if="errors.email" class="form__error">{{ errors.email }}</span>
        </transition>
        <input v-model="email" type="text" placeholder="Email address" class="form__input mb-8" />
      </span>

      <!-- <span class="form__field w-full h-12 mb-8 flex">
        <transition name="error">
          <span v-if="errors.password" class="form__error">{{ errors.password }}</span>
        </transition>
        <input
          v-model="password"
          :type="isPasswordVisible ? 'text' : 'password'"
          placeholder="Password"
          class="form__input"
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
      </span> -->
      <button
        type="submit"
        class="rounded-md w-full h-12 bg-defaultBlue hover:bg-lightBlue text-white transition-all"
        @click="sendForm"
      >
        Sign up
      </button>
    </form>
    <div class="login__sign-in fixed left-6 bottom-6">
      Have an accound?
      <RouterLink to="/" class="text-blue-600 hover:text-blue-400">Sign in</RouterLink>
    </div>
  </section>
</template>

<style>
.error-enter-active,
.error-leave-active {
  transition: 0.3s all ease;
}
.error-enter-from,
.error-leave-to {
  opacity: 0;
}
</style>
