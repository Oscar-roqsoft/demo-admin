<template>

    <div class="section-con" style="background:  #161D26; min-height: 100vh; padding: 33px 26px;;">

        <v-row>

            <v-col style="padding:0px 2px; align-items: center;" class="d-flex flex-wrap justify-space-between  inner-heading">
                <!-- <h1 class="title" style="color: #FFFFFF; font-size: 24px; font-weight: 700;">Upload banner</h1> -->
                <!-- <v-btn  color="#0CAF60" style="height: 50px; border-radius: 20px; text-transform: capitalize;color:#FFFFFF">Create new banner</v-btn> 
                                          -->

                        <v-breadcrumbs :items="items" style="color: #fff; font-size: 20px; font-weight: 700;">
                            <template v-slot:divider>
                                <v-icon icon="mdi-chevron-right"></v-icon>
                            </template>
                        </v-breadcrumbs>
            </v-col>

        </v-row>

        <div>
            <v-row>

                <v-col sm="12" md="10" style="margin-top: 16px;">

                    
                    <v-col cols="12" md="6">
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;">Name</label>
                        <div class="position-relative" style="margin-top: 8px;">
                            <v-text-field
                            v-model="name"
                            class="custom-text-field"
                            type="text"
                            placeholder="Name"
                            variant="solo-filled"
                            rounded="16px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>


                    <v-col>
                        <v-checkbox
                        style="color: #fff; font-size: large;"
                        v-model="isActive"
                        :label="`is Active: ${isActive.toString()}`"
                        ></v-checkbox>

                    </v-col>


                   


                    <v-col cols="12" md="6" style="margin-top: 24px;">

                        <v-btn  class="icon"  @click.prevent="add_paymentMethod()"   :loading="isloading" append-icon="mdi:arrow-right" variant="tonal" height="60px" width="100%" rounded
                            style="background: #0CAF60; color: #FFFFFF; font-size: 14px; text-transform: capitalize;">
                                Create
                        </v-btn>
                    </v-col>

                </v-col>


            </v-row>
        </div>



    </div>

</template>


<script setup>
    import { updatePaymentMethod } from "@/composables/requests/payment"
    import { get_paymentMethod } from "@/composables/actions/actions"

    const pinia = useStore()
    const router = useRouter();
    const currentId = router.currentRoute.value.params.id;

    const filteredItems = computed(() => {
        return pinia.state.paymentMethod.find(e => e.id ===  currentId );
    }); 

    
    
    console.log(filteredItems.value)
    const name = ref(filteredItems.value?.name)

    const isActive = ref(filteredItems.value?.active)
    const isloading = ref(false)

    const  items =[
            {
            title: 'Payments Method',
            disabled: false,
            href: '/dashboard',
            },
            {
            title: 'Create Payments Method',
            disabled: true,
            },
        
    ]




    const add_paymentMethod = async()=>{

        isloading.value = true
       
        const payload={
           
            name: name.value,
            active: isActive.value,
           
        }
        console.log(payload)

        try{
            const data = await updatePaymentMethod(payload,currentId)
            if(data.success){
                push.success('Edited successfully')  

                const newData = pinia.state.paymentMethod.map(item=>{
                    if(item.id === currentId){
                        return {...item,...payload}
                    }
                    return item
                })
                pinia.setPaymentMethod(newData)
                // get_banner()
                navigateTo('/dashboard')
            }else{
                push.error('Failed to update')  
            }

        }catch(e){
            console.log(e)
            push.error(`errror: ${e}`)
        }finally{
            isloading.value = false
        }


    }


   


</script>


<style scoped>

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
    padding: 30px 14px !important;
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

.custom-text-field-number :deep(.v-field__input) {
  padding-left: 130px !important;
}


.custom-text-area :deep(.v-field) {
    background-color: #12181F !important; /* Ensures the inner input field does not override the background color */
    border-radius: 20px !important; /* Inherits the border-radius from the parent */
    color: #C3CDDB;
    }

    .custom-text-area :deep(.v-field__overlay) {
        background: transparent !important;
    border-radius: 20px !important; /* Inherits the border-radius from the parent */
    color: #C3CDDB;
    }

    .custom-text-area .v-input__control {
    background-color: #12181F !important;
    border-radius: 20px !important;
    }
</style>