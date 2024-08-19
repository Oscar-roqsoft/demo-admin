<template>
    <div class="text-center dropdown">
      <v-menu
        open-on-hover
        transition="slide-x-transition"
      >
        <template v-slot:activator="{ props }">
        
          <v-btn v-bind="props"  value="right" color="red"    class="rounded-xl  text-capitalize" 
            style="font-size:16px !important;font-weight: 500 !important; letter-spacing: 0px;  padding: 10px; height: 60px;">

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/></svg>        </v-btn>
        </template>
  
        <v-list style="" class="">

          <v-list-item style="width: 100%;display: flex; align-items: center; justify-content: center;">
            <div style="width: 100%; height: 70px; border-radius: 25px; display: flex; align-items: center; justify-content: center;">
                        <!-- <img style="width: 100%; height: 100%;" src="/flag.png"/> -->
                        <div  style="background: #12181F;border: 0.5px solid #fff;border-radius: 1000px;height: 60px; width: 60px; display: inline-flex;align-items: center;justify-content: center;">
                          <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#fff" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/></svg>
                      </div>              </div>
            <div style="width: 100%;  border-radius: 25px; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                <p style="color:#fff; font-size: 16px; font-weight: 600; line-height: 21px; margin-top: 8px;">Oscar</p>
                <p style="color: #C2C2C2; font-size: 12px; font-weight: 400;">Admin</p>
            </div>


            <v-btn elevation="0" color="primary" class="ma-2" @click="pinia.clearUser()" style="text-transform: capitalize; background: #0CAF60 !important; border-radius: 14px;" >
              Log out
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </template>
  
<script setup>
 import { useStore } from "@/stores/index"
  
  const pinia = useStore()
 
</script>

<style>

.v-list{
    background: #12181F !important;
    color: #fff;
}
</style>
  