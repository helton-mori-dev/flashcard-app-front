<script setup lang="ts"></script>

<template>
  <section class="login flex flex-col justify-center items-center container max-w-sm mx-auto">
    <div class="login__label text-left w-full">
      <h1 class="text-sm">Start your flashcard study</h1>
      <h2 class="text-xl font-bold mb-8">Sign up to DeckMaster</h2>
    </div>
    <input
      type="text"
      placeholder="Your name"
      class="placeholder:text-sm border-2 hover:border-black w-full rounded-md h-12 pl-4 mb-4 transition-all"
    />
    <input
      type="text"
      placeholder="Email address"
      class="placeholder:text-sm border-2 hover:border-black w-full rounded-md h-12 pl-4 mb-4 transition-all"
    />
    <input
      type="password"
      class="border-2 hover:border-black w-full rounded-md h-12 pl-4 mb-8 transition-all"
    />
    <button
      type="submit"
      class="rounded-md w-full h-12 bg-blue-600 text-white hover:bg-blue-300 transition-all"
    >
      Sign up
    </button>
    <div class="login__sign-in fixed left-6 bottom-6">
      Have as accound?
      <RouterLink to="/" class="text-blue-600 hover:text-blue-400">Sign in</RouterLink>
    </div>
  </section>
</template>
