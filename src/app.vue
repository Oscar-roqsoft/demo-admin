<template>
  <div>
    <!-- <NuxtLoadingIndicator  color="white" /> -->

    <NuxtLayout>
    <v-app>
      <Notivue v-slot="item">
          <Notification :item="item" />
        </Notivue>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

*{
  font-family: 'Poppins','Times New Roman', Times, serif;
}
</style>