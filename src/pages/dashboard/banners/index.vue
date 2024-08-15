<template>


    <div class="section-con" style="background:  #161D26; min-height: 100vh; padding: 33px 36px;;">

        <v-row>

            <v-col style="padding:0px 16px; align-items: center;" class="d-flex flex-wrap justify-space-between  inner-heading">
                <h1 class="title" style="color: #FFFFFF; font-size: 24px; font-weight: 700;"> All Banners</h1>
                <v-btn @click="navigateTo('/dashboard/banners/create')" color="#0CAF60" style="height: 50px;min-width: 150px; border-radius: 20px; text-transform: capitalize;color:#FFFFFF">Create</v-btn>                          
            </v-col>

        </v-row>
        <v-row  style="padding: 24px 0px; margin: 16px auto;" >
            <v-col cols="12" md="6" lg="4" v-for="i in pinia.state.banners" :key="i.id">
                <v-card
                    class=""
                    max-width="350"
                    style="background: #12181F !important; border-radius: 15px; padding: 10px;"
                >
                    <v-img
                    height="100%"
                    width="100%"
                    rounded="20px"
                    :src="i.image_url"
                    ></v-img>

                    <div style="margin: 10px 0px;">
                        <div style="margin: 4px 10px; color:#FFFFFF; font-size: 14px;">
                            <span style="margin-right: 5px;">Title:</span>
                            <span style="color: #fff8;">{{ i.title }}</span>
                        </div>
    
                        <div style="margin: 0px 10px; color:#FFFFFF; font-size: 14px;">
                            <span style="margin-right: 5px;">Desc:</span>
                            <span style="color: #fff8;">{{ i.description }}</span>
                        </div>
                    </div>

                   


                    <v-card-actions>
                    <v-btn @click="navigateTo(`/dashboard/banners/${i.id}`)" variant="tonal" color="#0CAF60" style="text-transform: capitalize;">Edit</v-btn>


                    <v-btn @click="handleDeleteModal(i.id)" variant="tonal" color="red" style="text-transform: capitalize;">Delete</v-btn>
                    </v-card-actions>


                        <!-- Delete Confirmation Dialog -->
                    <v-dialog v-model="dialog" max-width="400" >
                    <v-card  style="background: #12181F !important; color: #FFFFFF; border-radius: 15px;">
                        <v-card-title class="headline text-center">Confirm Delete</v-card-title>
                        <v-card-text>Are you sure you want to delete this item?</v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color=""  @click="dialog = false" style="background: #0CAF60; font-size: medium; text-transform: capitalize; border-radius: 10px;">Cancel</v-btn>
                        <v-btn color="" :loading="isDeleting"  @click="delete_banner()" style="background: red; font-size: medium; text-transform: capitalize; border-radius: 10px;">Confirm</v-btn>

                        </v-card-actions>
                    </v-card>
                    </v-dialog>


                </v-card>
            </v-col>
        </v-row>

        <div  v-if="!pinia.state.banners.length" style="width: 100%; display: flex; justify-content: center; margin-top: 50px;">
            <span style="color: #FFFFFF;font-size: large;">No data avaliable</span>
        </div>


    </div>


</template>


<script setup>
import { getBanners ,deleteBanners} from "@/composables/requests/banners"
import { get_banner } from "@/composables/actions/actions"

const name = ref()

const pinia = useStore()

const banner_page_number = ref(1)

const dialog = ref(false)
const isDeleting = ref(false)




const filteredItem = ref(null)
  
  const handleDeleteModal = (id)=>{
      dialog.value = true
      filteredItem.value = pinia.state.banners.find(e => e.id ===  id )
  }

const delete_banner = async() => {
    isDeleting.value = true
    try{
        const data = await deleteBanners(filteredItem.value.id)
        if(data.success){
            push.success('Deleted successfully')  
            const filtered = pinia.state.banners.filter(e => e.id !=  filteredItem.value.id )
            pinia.setBannersItem(filtered)
        }else{
            push.error('Deleting failed')   
        }
    }catch(e){
        console.log(e)
    }finally{
        isDeleting.value = false
    }
  }



const fetch_banners = async()=>{
    if(pinia.state.banners.length){
        return
    }else{
        await get_banner()
    }
}


onMounted(()=>{
    fetch_banners()
})


</script>


<style scoped>
.headline {
font-size: 20px;
font-weight: bold;
}


@media (max-width: 900px) {
    .section-con{
        padding: 33px 14px !important;
    }
    
}
</style>