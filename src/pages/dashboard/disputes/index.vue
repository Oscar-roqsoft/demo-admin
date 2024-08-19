<template>

    <div style="background:  #161D26; min-height: 100vh;">

        <div style="padding: 33px 26px;" class="section-con">
                <v-row>

                    <v-col style="padding:0px 24px; align-items: center; display: flex;" class="d-flex flex-wrap justify-space-between  inner-heading">
                         <h1 class="title" style="color: #FFFFFF; font-size: 24px; font-weight: 700;"> All disputes</h1>
                          <!-- <v-btn @click="navigateTo('/dashboard/disputes/create')"  color="#0CAF60" style="height: 50px; width: 150px; border-radius: 20px; text-transform: capitalize;color:#FFFFFF">Create</v-btn>                           -->
                    </v-col>

                </v-row>

                <v-row >
                    <v-col class="table mt-5">


                        <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: start; margin: 16px 0px;" 
                         
                          >
                          <div   v-for="(i,index) in button_actions"  :key="index" style="">
                              <button id="all"
                               @click="pinia.state.selected_dispute_status = i" 
                              style="min-width: 70px; height: 40px; border: 1px solid #C2C2C2; border-radius: 16px; font-size: 10px; text-transform: capitalize;"
                              :style="{ 
                                    background: pinia.state.selected_dispute_status == i ? '#0CAF60' : '', 
                                    color: pinia.state.selected_dispute_status == i ? 'white' : '' 
                                    }"
                                >
                                  {{ i }}
                              </button>
                          </div>
                        </div>

                        <div  class="d-flex  justify-end">
                            
                        </div>
                            <v-data-table
                                :headers="headers"
                                :items-per-page="itemsPerPage"
                                :items="pinia.state.disputes || []"
                                :loading="isloading"
                                :search="search"
                                style="background: transparent !important; color: #fff; width: 100%;"
                            >
                                <template v-slot:item.edit="{ item }">
                                <v-btn @click="navigateTo(`/dashboard/disputes/${item?.id}`)" class="rounded-xl text-capitalize"  color="success">Edit</v-btn>
                                </template>

                                <!-- <template v-slot:item.delete="{ item }" >
                                    <v-btn @click="handleDeleteModal(item?.id)" class="rounded-xl text-capitalize"  color="red" style="text-transform: capitalize;">Delete</v-btn>
                                </template> -->

                                <template v-slot:item.buyer="{ item }" >
                                <div style="min-width: 150px;">{{ item.buyer.name }}</div>
                                </template>

                                <template v-slot:item.seller="{ item }" >
                                <div style="min-width: 150px;">{{ item.seller.name }}</div>
                                </template>

                               

                            </v-data-table>

                              <!-- Delete Confirmation Dialog -->
                      <!-- <v-dialog v-model="dialog" max-width="400" >
                    <v-card  style="background: #12181F !important; color: #FFFFFF; border-radius: 15px;padding-bottom: 10px;">
                        <v-card-title class="headline text-center">Confirm delete</v-card-title>
                        <v-card-text>Are you sure you want to delete this item?</v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color=""  @click="dialog = false" style="background: #0CAF60; font-size: medium; text-transform: capitalize; border-radius: 10px;">Cancel</v-btn>
                        <v-btn color="" :loading="isDeleting"  @click="delete_FAQ" style="background: red; font-size: medium; text-transform: capitalize; border-radius: 10px;">Confirm</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog> -->
                    </v-col>
                </v-row>

               
        </div>

    </div>


</template>


<script setup>
  import { get_disputes,get_countries } from "@/composables/actions/actions"
//   import { deleteFAQs } from "@/composables/requests/FAQs"



  const pinia = useStore()
  const dialog = ref(false)


  const isloading = ref(false)
  const isDeleting = ref(false)

  const search = ref('')
  
  const itemsPerPage = ref(5)

  const headers = ref([
    // { title: 'User ID', key: 'id', align: 'start' },
    { title: 'Order Id', key: 'order_id', align: 'start' },
    { title: 'Buyer name', key: 'buyer', align: 'start' },
    { title: 'Seller name', key: 'seller', align: 'start' },
    // { title: 'Buyer name', key: 'name', align: 'start' },
    // { title: 'Fiat amount paid', key: 'fiat_amount_paid', align: 'start' },
    // { title: 'Token Quantity', key: 'expected_token_quantity', align: 'start' },
    { title: 'Message', key: 'message', align: 'start' },
    { title: 'Status', key: 'status', align: 'start' },
    // { title: 'Currency', key: 'currency_code', align: 'start' },
    // { title: 'Currency name', key: 'currency_name', align: 'start' },
    // { title: 'Timezone', key: 'timezone', align: 'start' },
    // { title: 'Enabled', key: 'is_enabled', align: 'start' },
    { title: 'Actions', key: 'edit', align: 'end', sortable: false },
    // { title: 'Actions', key: 'delete', align: 'end', sortable: false },
  ])


  const button_actions =['all','resolved','processing','pending','withdrawn']



  const filteredItem = ref(null)
  
  const handleDeleteModal = (id)=>{
      dialog.value = true
      filteredItem.value = pinia.state.disputes.find(e => e.id ===  id )
  }

  




  
//   const delete_FAQ = async() => {
//     isDeleting.value = true
//     try{
//         const data = await deleteFAQs(filteredItem.value.id)
//         if(data.success){
//             push.success('Deleted successfully')  
//             const filtered = pinia.state.FAQs.filter(e => e.id !=  filteredItem.value.id )
//             pinia.setFAQs(filtered)
//         }else{
//             push.error('Deleting failed')   
//         }
//     }catch(e){
//         console.log(e)
//     }finally{
//         isDeleting.value = false
//         dialog.value = false
//     }
//   }


  
  const fetch_disputes = async()=>{
      if(!isEmpty(pinia.state.disputes)){
          return
        }else{
            isloading.value =  true
            await  get_disputes(pinia.state.selected_dispute_status)
           isloading.value =  false
    }
  }

  watch(()=> pinia.state.selected_dispute_status, async(newv)=>{
     if(newv){
        isloading.value =  true
        await  get_disputes(newv)
        isloading.value =  false
     }
  })


  onMounted(() => {
      fetch_disputes()
      console.log(pinia.state.disputes)
  }

)


const fetch_countries = async()=>{
    if(!isEmpty(pinia.state.countries)){
        return
    }else{
        isloading.value =  true
        await  get_countries()
        isloading.value =  false
    }
  }

  onMounted(() => {
    fetch_countries()
  })





  

</script>
  
  <style scoped>

    button {
        background-color: transparent;
        border: 1px solid #666666; /* Better border color */
        color: #cccccc; /* Light gray text color */
        padding: 0px 12px;
        transition: all;
    }
    
  button.active {
    background-color: #00E396;
    color: white;
  }
  .v-data-table {
    margin-top: 8px;
  }

  .custom-text-field .v-input__control {
  background-color: #12181F !important;
  border-radius: 20px !important;
}

.custom-text-field .v-field__field {
  background-color: transparent !important; /* Ensures the inner input field does not override the background color */
  border-radius: inherit !important; /* Inherits the border-radius from the parent */
}

.custom-text-field :deep(.v-field) {
  background-color: #12181F !important; /* Ensures the inner input field does not override the background color */
  border-radius: 20px !important; /* Inherits the border-radius from the parent */
  color: #C3CDDB;
  height: 60px;
  max-width: 600px;
}
.custom-text-field :deep(.v-field__input) {
  border-radius: 20px !important; /* Inherits the border-radius from the parent */
  /* color: #C3CDDB; */
  height: 60px;
  max-width: 600px;
  padding-left: 20px;
  background: #12181F;
}

.custom-text-field :deep(.v-input__details) {
    min-height: 0px;
    display: none;
}

.custom-text-field :deep(.v-field__overlay) {
    background: #12181F;
}

   
    .table :deep(thead){
        background-color: #12181F ;
    }
    .table :deep(.v-data-table-header__content){
        min-width: 100px;
    }
    .table :deep(.v-data-table-header__content:hover){
        color:#fff;
    }

    @media (max-width: 768px) {

        .title{
            font-size: 14px;
            margin-bottom: 0 !important;
        }

        .section-con{
            padding: 30px 14px !important;
        }
        
    }

</style>
  