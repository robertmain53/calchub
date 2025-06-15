<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">📜 Logs for {{ slug }}</h1>

    <div v-if="logs.length" class="space-y-4">
      <div
        v-for="(log, index) in logs"
        :key="index"
        class="border-l-4 pl-4 py-2 rounded border-blue-500 bg-white dark:bg-zinc-900 shadow"
      >
        <p class="text-xs text-gray-400">{{ log.timestamp }}</p>
        <h3 class="font-semibold text-sm">{{ log.event }}</h3>
        <ul class="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300">
          <li v-for="(a, i) in log.actions" :key="i">{{ a }}</li>
        </ul>
        <p class="text-xs mt-1 text-right text-gray-400">Status: {{ log.status }}</p>
      </div>
    </div>

    <p v-else class="text-sm text-gray-500">No logs found for this calculator.</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug
const { data: logs = [] } = await useFetch(`/logs/${slug}`)
</script>