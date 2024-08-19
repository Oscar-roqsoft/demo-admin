<template>
    <div >

    <div>
        <home v-if="pinia.state.current_page === 'home'" />
        <country v-else-if="pinia.state.current_page === 'country'" />
        <FAQs v-else-if="pinia.state.current_page === 'FAQs'" />
        <broadcasts v-else-if="pinia.state.current_page === 'broadcasts'" />
        <paymentMethod v-else-if="pinia.state.current_page === 'paymentMethod'" />
        <disputes v-else-if="pinia.state.current_page === 'disputes'" />
        <!-- <trade v-else-if="pinia.state.isAuthenticated ? useCurrentNavMenu.currentNavMenu === 'trade' : navigateTo('/login')" /> -->
        <banners v-else />
    </div>
    
    </div>
</template>


<script setup>
   import { getStats} from "@/composables/requests/stats"
   import home from "@/pages/dashboard/home/index.vue";
   import country from "@/pages/dashboard/country/index.vue";
   import banners from "@/pages/dashboard/banners/index.vue";
  import FAQs from "@/pages/dashboard/FAQs/index.vue";
  import broadcasts from "@/pages/dashboard/broadcasts/index.vue";
  import paymentMethod from "@/pages/dashboard/paymentMethod/index.vue";
  import disputes from "@/pages/dashboard/disputes/index.vue";


  defineComponent({ home, country,banners,FAQs,broadcasts,paymentMethod,disputes});

   const pinia = useStore()

   const get_Stats = async()=>{
    console.log('dfghykbjlkn;lm')

       try{
          const data = await getStats()
          if(data.success){
            console.log(data.data)
            pinia.setStatistics(data.data)
          }
       }catch(e){
          console.log(e)
       }
   }

   const fetch_stats = async()=>{
     if(pinia.state.statistics != null){
        return
     }else{
        await  get_Stats()
     }
   }

   onMounted(()=>{
       fetch_stats()
   })


</script>


<style scoped>

@media (max-width:768px) {

    .card-con{
         padding: 34px 14px !important;
         margin: 0px 14px !important;
    }
    
    .chart-con{
       padding: 24px 14px !important;
    }

    .table-con{
    padding: 24px 16px !important;

    }
}


</style>