<script setup lang="ts">
import { onMounted } from 'vue'
import api from '@/services/http'
import { PLANETARY_APOD } from '@/config'
import type { ApodResponse } from '@/types'

// src/mocks/mockApodResponse.ts
const apod = {
  copyright: 'Daniel Stern',
  date: '2025-09-02',
  explanation:
    "The Horsehead Nebula is one of the most famous nebulae on the sky. It is visible as the dark indentation to the orange emission nebula at the far right of the featured picture. The horse-head feature is dark because it is really an opaque dust cloud that lies in front of the bright emission nebula. Like clouds in Earth's atmosphere, this cosmic cloud has assumed a recognizable shape by chance. After many thousands of years, the internal motions of the cloud will surely alter its appearance. The emission nebula's orange color is caused by electrons recombining with protons to form hydrogen atoms. Toward the lower left of the image is the Flame Nebula, an orange-tinged nebula that also contains intricate filaments of dark dust.",
  hdurl: 'https://apod.nasa.gov/apod/image/2509/OrionHorsehead_Stern_5842.jpg',
  media_type: 'image',
  service_version: 'v1',
  title: 'The Horsehead and Flame Nebulas',
  url: 'https://apod.nasa.gov/apod/image/2509/OrionHorseHead_Stern_5842.jpg',
}

// onMounted(async () => {
//   try {
//     const response = await api.get<ApodResponse>(PLANETARY_APOD)
//     console.log(response.data)
//   } catch (err) {
//     console.error('Erro ao buscar imagem do dia:', err)
//   }
// })
</script>

<template>
  <main>
    <h1 class="text-2xl font-bold mb-4">{{ apod?.title }}</h1>

    <img
      v-if="apod?.url"
      :src="apod.url"
      :alt="apod.title"
      class="max-w-full mx-auto rounded shadow"
    />

    <p class="mt-4 text-gray-300">{{ apod?.explanation }}</p>
  </main>
</template>
