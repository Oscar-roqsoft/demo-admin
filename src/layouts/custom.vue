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

const router = useRoute()
const pinia = useStore()

if(router.path.includes('/') && pinia.state.isAuthenticated){
    navigateTo('/dashboard')
    }else{
        navigateTo('/')
    }

</script>