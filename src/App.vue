<script setup>
import { RouterView } from 'vue-router'
import HeaderForm from './components/HeaderForm.vue'
import Modal from './components/ModalWindow.vue'
import Notificacion from './components/NotificationMsg.vue'
</script>

<template>
  <HeaderForm />

  <main class="container mx-auto mt-10">
    <RouterView />
  </main>

  <Modal />
  <Notificacion />
</template>
