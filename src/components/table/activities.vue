<template>
    <div>
        <v-card flat style="background: transparent !important;">
          <v-card-title class="d-flex align-center pe-2 flex-wrap gap-2">
            <span style="color: #FFFFFF; font-size: 16px; font-weight: 600;">Recent Activities</span>
            <v-spacer></v-spacer>
    
            <!-- <v-btn elevation="0"  class=" me-3 text-capitalize font-weight-bold border activity-btn" 
            style="width: 180px;height: 50px;font-size:16px !important;font-weight: 500 !important; letter-spacing: 0px; border-radius: 16px !important; background:   #12181F ;
             display: flex; justify-content: space-between !important; align-items: center;">
    
                <span style="color: #C2C2C2; font-size: 14px; font-weight: 400;">Last 30 Days</span>
    
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_5937_42302)">
                    <path d="M11.8722 13.0945L16.7198 8.47446L18.1046 9.79419L11.8722 15.7339L5.63989 9.79419L7.02464 8.47446L11.8722 13.0945Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5937_42302">
                        <rect width="23.5034" height="22.4" fill="white" transform="translate(0.120605 0.799976)"/>
                    </clipPath>
                    </defs>
                </svg>
    
            </v-btn> -->
    
            <!-- <v-btn elevation="0"  class=" me-3 text-capitalize font-weight-bold border activity-btn" 
            style="width: 160px;height: 50px;font-size:16px !important;font-weight: 500 !important; letter-spacing: 0px; border-radius: 16px !important; background:   #12181F ;
             display: flex; justify-content: space-between !important; align-items: center;">
    
                <span style="color: #C2C2C2; font-size: 14px; font-weight: 400;">Aug 2022</span>
    
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_5937_42302)">
                    <path d="M11.8722 13.0945L16.7198 8.47446L18.1046 9.79419L11.8722 15.7339L5.63989 9.79419L7.02464 8.47446L11.8722 13.0945Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5937_42302">
                        <rect width="23.5034" height="22.4" fill="white" transform="translate(0.120605 0.799976)"/>
                    </clipPath>
                    </defs>
                </svg>
    
            </v-btn> -->
      
            <v-text-field
              class="custom-text-field"
              v-model="search"
              density="compact"
              placeholder="Search"
              prepend-inner-icon="mdi-magnify"
              variant="solo-filled"
              flat
              hide-details
              single-line
              style="min-width: 180px;"
            ></v-text-field>
          </v-card-title>
      
    
          <div class="table">
            <v-data-table
                :headers="headers"
                :items="pinia.state.activities || []"
                :items-per-page="itemsPerPage"
                :loading="isloading"
                :search="search"
                style="background: transparent !important; color: #fff; width: 100%;"
            >
                <template v-slot:item.edit="{ item }">
                <v-btn @click="navigateTo(`/dashboard/country/${item.id}`)" class="rounded-xl text-capitalize"  color="success">Edit</v-btn>
                </template>
    
                <template v-slot:item.delete="{ item }" >
                    <v-btn @click="handleDeleteModal(item.id)" class="rounded-xl text-capitalize"  color="red" style="text-transform: capitalize;">Delete</v-btn>
                </template>
    
                <template v-slot:item.activity.details ="{ item }" >
                    <div v-if="item.activity.details.crypto" style="width: 140px;">
                        <div v-show="item.activity.details.crypto.transfer">Crypto transfer</div>
                        <div  v-show="item.activity.details.crypto.swap">Crypto swap</div>
                    
                    </div>
                    <div v-else style="width: 140px;">
                        <div v-show="item.activity.details.fiat.swap">Fiat swap</div>
                        <div v-show="item.activity.details.fiat.exchange">Fiat exchange</div>
                        <div v-show="item.activity.details.fiat.transfer">Fiat transfer</div>
                        <!-- <div></div> -->
                    </div>
              
                </template>
    
                <template v-slot:item.activity ="{ item }" >
                    <div v-if="item.activity.details.crypto" style="width: 220px;">
                        <div v-show="item.activity.details.crypto.transfer">
                            <span v-if="item.activity?.details?.crypto?.transfer.status?.pending">
                                {{ item.activity.details.crypto?.transfer.status?.pending?.reason }}
                            </span>
                                <span v-else-if="item.activity.details.crypto.transfer?.status?.fulfilled">  {{ item.activity.details.crypto.transfer?.status?.fulfilled?.reason }}</span>
                            <span v-else>
                                {{ item.activity.details.crypto.transfer.status?.failed?.reason }}
                            </span>
                        </div>
    
                        <div  v-show="item.activity.details.crypto.swap">
                            <span v-if="item.activity.details.crypto.swap?.status?.pending">
                                {{ item.activity.details.crypto.swap?.status?.pending?.reason }}
                            </span>
                            <span v-else-if="item.activity.details.crypto.swap?.status?.fulfilled">  {{ item.activity.details.crypto.swap?.status?.fulfilled?.reason }}</span>
                            <span v-else >
                                {{ item.activity.details.crypto.swap?.status?.failed?.reason }}
                            </span>
                        </div>
                    
                    </div>
                    <div v-else style="width: 140px;">
                        <div v-show="item.activity.details.fiat.swap">{{ item.activity.details?.fiat?.swap?.status}}</div>
                        <div v-show="item.activity.details.fiat.exchange">
                            <div v-if="item?.activity?.details?.fiat.exchange?.from_fiat_to_crypto">
                                {{ item?.activity?.details?.fiat.exchange?.from_fiat_to_crypto?.status }}
                            </div>
                            <div v-else>
                                {{ item.activity.details.fiat?.exchange?.from_crypto_to_fiat?.status }}
                            </div>
                        </div>
                        <div v-show="item.activity.details.fiat.transfer"> {{ item?.activity?.details?.fiat.transfer?.status}} </div>
                        <!-- <div></div> -->
                    </div>
              
                </template>
    
            </v-data-table>
    
          </div>
    
        </v-card>
    </div>
</template>


<script setup>
   import { getStats,getActivities} from "@/composables/requests/stats"


   const pinia = useStore()
    const search = ref('');
    const isloading = ref(false)

    const itemsPerPage = ref(5)

    const headers = ref([
    // { title: 'User ID', key: 'id', align: 'start' },
    { title: 'Name', key: 'user.name', align: 'start' },
    { title: 'Username', key: 'user.username', align: 'start' },
    { title: 'Country', key: 'user.country', align: 'start' },
    { title: 'Transfer type', key: 'activity.details', align: 'start' },
    { title: 'Transaction ID', key: 'activity.id', align: 'start' },
    { title: 'Status', key: 'activity', align: 'start' },
    // { title: 'Actions', key: 'edit', align: 'end', sortable: false },
  ])

   

    const filteredItems = computed(() => {
    return items.filter(item => item.name.toLowerCase().includes(search.value.toLowerCase()));
    });


    const get_activities = async()=>{

    try{
    const data = await getActivities()
    if(data.success){
        console.log(data.data)
        pinia.setActivities(data.data)
    }
    }catch(e){
    console.log(e)
    }
    }

    const fetch_activities = async()=>{
        if(!isEmpty(pinia.state.activities)){
        return
        }else{
        await  get_activities()
        }
    }

    onMounted(()=>{
        isloading.value = true
       fetch_activities()
       isloading.value = false
   })



</script>

<style scoped>
.activity-btn :deep(.v-btn__content){
    width: 100% !important;
    justify-content: space-between !important;
}

.custom-text-field :deep(.v-field) {
    background-color: #12181F !important; /* Ensures the inner input field does not override the background color */
    border-radius: 20px !important; /* Inherits the border-radius from the parent */
    color: #C3CDDB;
    margin: 0px !important; 
    height: 60px;
    }

    .custom-text-field :deep(.v-field__input) {
    border-radius: 20px !important; /* Inherits the border-radius from the parent */
    /* color: #C3CDDB; */
    height: 60px;
    
    }
    .custom-text-field :deep(.v-field__overlay) {
    background: #12181F;
    }

    .table :deep(thead){
        background-color: #12181F ;
    }
    .table :deep(.v-data-table-header__content:hover){
        color:#fff;
    }
</style>