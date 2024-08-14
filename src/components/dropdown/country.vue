<template>
    <div>
      <v-menu
        v-model="menu"
        transition="slide-x-transition"
        offset-y>
        <template v-slot:activator="{ props }">
          <div  v-bind="props" style="width: 145px; border-radius: 20px; z-index: 9999px;display: flex; justify-content: center; align-items: center;
          background: #161D26 ; height: 60px; ">
            <img class="img-flag" :src="selectedCountry.flag" alt="Flag" style="width: 24px; height: 24px; margin-right: 8px;" />
            <span>{{ selectedCountry.name }}</span>
            <v-icon :class="{ 'rotate-icon': menu }" right>mdi-chevron-down</v-icon>
          </div>
        </template>
  
        <!-- <v-list class="items-dropdown">
          <v-list-item
            v-for="(country, i) in countries"
            :key="i"
            @click="selectCountry(country)" >
            <div  style="display: flex !important; align-items: center;">

                <v-list-item-avatar style="margin-right: 10px;">
                  <img style="width: 40px;" :src="country.flag" alt="Flag" />
                </v-list-item-avatar>
                <v-list-item-title>{{ country.name }}</v-list-item-title>
            </div>
          </v-list-item>
        </v-list> -->
      </v-menu>
    </div>
</template>
  
<script setup>
  
  const menu = ref(false)
  
  const countries = ref([
    { name: 'English', flag: '/flag.png' },
    { name: 'French', flag: '/flag.png' },
    { name: 'Spanish', flag: '/flag.png' },
    { name: 'German', flag: '/flag.png' }
  ])
  
  const selectedCountry = ref(countries.value[0])
  
  const selectCountry = (country) => {
    selectedCountry.value = country
    menu.value = false
  }
</script>
  
<style>
  .img-flag {
    width: 24px;
    height: auto;
    margin-right: 8px;
  }
  
  .rotate-icon {
    transition: transform 0.3s ease-in-out;
    transform: rotate(180deg);
  }

  .items-dropdown{
    margin-top: 8px !important;
  }
</style>
  
  