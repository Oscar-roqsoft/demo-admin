<template>
    <div class="section-con" style="background: #161D26; min-height: 100vh; padding: 33px 26px;">
      <v-row>
        <v-col class="d-flex flex-wrap justify-space-between inner-heading">
          <v-breadcrumbs :items="items" style="color: #fff; font-size: 20px; font-weight: 700;">
            <template v-slot:divider>
              <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
  
      <v-row class="section">
        <v-col cols="12" md="8">
          <v-card :style="{ background: 'transparent', color: '#fff' }" class="py-md-3" style="border-radius: 20px;">
            <div style="display: flex;justify-content: space-between; align-items: center;">
                <v-card-title class="headline">Dispute Details</v-card-title>
                <v-list-item>
               
                  <v-list-item-title style="display: flex; align-items: center;gap: 5px; text-decoration-line: underline;">Dispute Status:  
                    <v-list-item-subtitle style="text-transform: capitalize;"> {{ dispute.status }}</v-list-item-subtitle>
                </v-list-item-title>
               
              </v-list-item>

            </div>
            <v-card-text>
              <div v-if="dispute">
                <v-row  >
                  <v-col cols="12" md="6"  class="d-flex align-center">
                    <v-avatar size="80" class="mr-md-3">
                      <v-img v-if="dispute.buyer.profile_image" style="object-fit: cover !important;" :src="dispute.buyer.profile_image || '/profile.jpg'" alt="Buyer Image" />
                      <div v-else style="background: #12181F;border: 0.5px solid #fff;border-radius: 1000px;height: 75px; width: 75px; display: inline-flex;align-items: center;justify-content: center;">
                          <svg  xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#fff" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/></svg>
                      </div>                      
                       
                    </v-avatar>
                    <div>
                        <h2>Buyer</h2>
                        <p class="mb-0">{{ dispute.buyer.name }}</p>
                        <p style="color: #a1a5a8 !important;">@{{ dispute.buyer.username }}</p>
                    </div>
                </v-col>
                
                <v-col cols="12" md="6" class="d-flex align-center">
                    <v-avatar size="80" class="mr-md-3">
                        <v-img v-if="dispute.seller.profile_image" :src="dispute.seller.profile_image || '/profile.jpg'" alt="Seller Image" />

                        <div v-else style="background: #12181F;border: 0.5px solid #fff;border-radius: 1000px;height: 70px; width: 70px; display: inline-flex;align-items: center;justify-content: center;">
                          <svg  xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#fff" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/></svg>
                      </div>  
                    </v-avatar>
                    <div>
                        <h2>Seller</h2>
                      <p class="mb-0">{{ dispute.seller.name }}</p>
                      <p style="color: #a1a5a8 !important;">@{{ dispute.seller.username }}</p>
                    </div>
                  </v-col>
                </v-row>
  
                <v-divider class="my-4" color="#444" />
  
                <v-list-item>
                 
                    <v-list-item-title>Order ID:</v-list-item-title>
                    <v-list-item-subtitle>{{ dispute.order.id }}</v-list-item-subtitle>
                 
                </v-list-item>
                <v-list-item>
                 
                    <v-list-item-title>Order Status:  </v-list-item-title>
                    <v-list-item-subtitle>{{ dispute.order.status }}</v-list-item-subtitle>
                 
                </v-list-item>
  
                <v-list-item>
                 
                    <v-list-item-title>Token: </v-list-item-title>
                    <v-list-item-subtitle>{{ handleNumApproximation(dispute.order.bid.expected_token_quantity) }} {{ dispute.order.offer.trading_pair.crypto.token.symbol }}</v-list-item-subtitle>
                 
                </v-list-item>

                <v-list-item>
                 
                    <v-list-item-title>Fiat Paid: </v-list-item-title>
                    <v-list-item-subtitle>{{ country.currency_code }}{{ handleNumApproximation(dispute.order.bid.fiat_amount_paid) }}</v-list-item-subtitle>
                 
                </v-list-item>
  
                <v-divider class="my-4" color="#444" />
  
                <v-list-item>
                 
                    <v-list-item-title>Dispute Message</v-list-item-title>
                    <v-list-item-subtitle>{{ dispute.message }}</v-list-item-subtitle>
                 
                </v-list-item>
  
                <v-divider class="my-4" color="#444" />
  
                <v-list-item v-if="dispute.file_urls && dispute.file_urls.length">
                    <v-list-item-title style="margin-bottom: 10px;">Evidence Files</v-list-item-title>
                    <div v-for="(file, index) in dispute.file_urls" :key="index" class="mb-2">
                      <v-img :src="file" alt="Evidence File" max-width="100%"></v-img>
                    </div>
                </v-list-item>
  
                <v-divider class="my-4" color="#444" />

                <div>

                    <v-btn  class="icon"  @click.prevent="dialog = true"  :loading="isloading" append-icon="mdi:arrow-right" variant="tonal" height="60px" width="300px" rounded
                        style="background: #0CAF60; color: #FFFFFF; font-size: 14px; text-transform: capitalize; margin-top: 40px;">
                            Update Status
                    </v-btn>

                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>


               <!-- Delete Confirmation Dialog -->
                 <v-dialog v-model="dialog" max-width="400" >
                    <v-card  style="background: #12181F !important; color: #FFFFFF; border-radius: 15px;padding-bottom: 10px;">
                        <v-card-title class="headline text-center">Confirm Update</v-card-title>
                        <v-select
                        style="margin: 16px 24px;"
                            class="custom-text-field"
                            :Elevation="0"
                            label="Select"
                            :items="['pending', 'processing', 'resolved', 'withdrawn']"
                            variant="solo-filled"
                            v-model="status"
                        ></v-select>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color=""  @click="dialog = false" style="background: gray; font-size: medium; text-transform: capitalize; border-radius: 10px;">Cancel</v-btn>
                        <v-btn color="" :disabled="!status" :loading="isloading"  @click="update_status()" style="background:  #0CAF60; font-size: medium; text-transform: capitalize; border-radius: 10px;"> Update</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
    </div>
  </template>
  
  <script setup>
  import { changeDisputeStatus } from "@/composables/requests/dispute"
  
  const pinia = useStore();
  const dialog = ref(false)
  const isloading = ref(false)
  const status = ref(null)
  const router = useRouter();
  const currentId = router.currentRoute.value.params.id;
  
  const dispute = computed(() => {
    return pinia.state.disputes.find(e => e.id === currentId);
  });

  const country_Id = dispute.value.order.offer.trading_pair.fiat.country_id

  const country = pinia.state.countries.find(e => e.id === country_Id)





  const  items =[
            {
            title: 'Dispute',
            disabled: false,
            href: '/dashboard',
            },
            {
            title: 'Dispute Details',
            disabled: true,
            },
        
    ]


const update_status = async()=>{
    isloading.value = true
    const payload = {
        dispute_id: dispute.value.id,
        status:status.value,
    }
    try{
        const data = await changeDisputeStatus(payload)
        if(data.success){

        }
    }catch(e){
        console.log(e)
    }finally{
        isloading.value = false
    }

}

  </script>
  
  <style scoped>
  .section-con {
    padding: 30px 14px !important;
  }
  
  .headline {
    font-size: 24px;
    font-weight: bold;
  }

  
  @media (max-width: 768px) {
    .headline {
      font-size: 20px;
    }
  
    .section-con {
      padding: 20px 10px !important;
    }
  }


  .input :deep(.v-input__details){
    display: none !important;
  }

  .input :deep(.v-field){
    background: #161D26 !important;
    border-radius: 15px;
    color: #fff !important;
  }
  .input :deep(.v-field__input){
    background: #161D26 !important;
    border-radius: 15px;
    color: #fff !important;
  }

  .input :deep(.v-field__overlay){
    background: #161D26 !important;
    border-radius: 15px;
    color: #fff !important;
  }

  .title{
    font-size: 14px;
    margin-bottom: 24px !important;
   }
 @media (max-width: 768px) {

.title{
    font-size: 14px;
    margin-bottom: 14px !important;
}

.section-con{
    padding: 30px 16px !important;
}

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
  background-color: #12181F!important; /* Ensures the inner input field does not override the background color */
  border-radius: 20px !important; /* Inherits the border-radius from the parent */
  color: #C3CDDB;
  height: 60px;
}
.custom-text-field :deep(.v-field__input) {
  border-radius: 20px !important; /* Inherits the border-radius from the parent */
  /* color: #C3CDDB; */
  height: 60px;
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
.custom-text-field :deep(.v-field__outline) {
    display: none !important;
}

.custom-text-field-number :deep(.v-field__input) {
  padding-left: 130px !important;
}
  </style>
  