<template>
    <v-app>
      <!-- .... -->

      <div>
          <slot/>
      </div>
    </v-app>
  </template>
<script setup>

import { useStore} from "@/stores/index"

const pinia = useStore()

</script>