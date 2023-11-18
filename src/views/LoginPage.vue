<template>
  <div class="flex flex-wrap align-items-center justify-content-center h-screen">
    <Card class="w-3">
      <template #title> Login </template>
      <template #content>
        <form
          @submit="onSubmit"
          class="flex flex-column gap-2 align-items-center justify-content-center"
        >
          <span class="p-float-label w-full">
            <InputText class="w-full" id="username" v-model="username" />
            <label for="username">Username</label>
          </span>
          <span class="p-float-label mt-5 w-full">
            <Password
              class="w-full"
              inputClass="w-full"
              v-model="password"
              toggleMask
              :feedback="false"
            />
            <label for="password">Password</label>
          </span>
          <Button class="mt-5 w-full" type="submit" label="Submit" />
        </form>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const username = ref()
const password = ref()
</script>
