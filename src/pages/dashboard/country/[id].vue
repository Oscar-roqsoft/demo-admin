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
            <v-row style="margin-top: 28px;">
                    
                    <v-col cols="12" md="6" lg="4">
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;"> Enter country name </label>
                        <div class="position-relative" style="margin-top: 8px;">
                            <v-text-field
                            v-model="country_name"
                            class="custom-text-field"
                            type="text"
                            placeholder="Country name"
                            variant="solo-filled"
                            rounded="16px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;">Enter country code</label>
                        <div class="position-relative"  style="margin-top: 8px;">
                            <v-text-field
                            v-model="country_code"
                            class="custom-text-field"
                            type="text"
                            placeholder="Country code"
                            variant="solo-filled"
                            rounded="16px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;"> Enter currency name</label>
                        <div class="position-relative" style="margin-top: 8px;">
                            <v-text-field
                            v-model="currency_name"
                            class="custom-text-field"
                            type="text"
                            placeholder="Currency name"
                            variant="solo-filled"
                            rounded="16px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;">Enter currency_code</label>
                        <div class="position-relative" style="margin-top: 8px;">
                            <v-text-field
                            v-model="currency_code"
                            class="custom-text-field"
                            type="text"
                            placeholder="Currency code"
                            variant="solo-filled"
                            rounded="16px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;">Enter phone code</label>
                        <div class="position-relative" style="margin-top: 8px;">
                            <v-text-field
                            v-model="phone_code"
                            class="custom-text-field"
                            type="text"
                            placeholder="Phone code"
                            variant="solo-filled"
                            rounded="16px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>
                    
                    <v-col cols="12" md="6" lg="4">
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;">Enter timezone</label>
                        <div class="position-relative" style="margin-top: 8px;">
                            <v-text-field
                            v-model="timezone"
                            class="custom-text-field"
                            type="text"
                            placeholder="Timezone"
                            variant="solo-filled"
                            rounded="16px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;">Enter minimum fiat funding</label>
                        <div class="position-relative" style="margin-top: 8px;">
                            <v-text-field
                            v-model="minimum_fiat_funding"
                            class="custom-text-field"
                            type="number"
                            placeholder="Minimum fiat funding"
                            variant="solo-filled"
                            rounded="16px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;">Enter maximum fiat funding</label>
                        <div class="position-relative" style="margin-top: 8px;">
                            <v-text-field
                            v-model="maximum_fiat_funding"
                            class="custom-text-field"
                            type="number"
                            placeholder="Maximum fiat funding"
                            variant="solo-filled"
                            rounded="16px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;">Enter minimum fiat to crypto_swap</label>
                        <div class="position-relative" style="margin-top: 8px;">
                            <v-text-field
                            v-model="minimum_fiat_to_crypto_swap"
                            class="custom-text-field"
                            type="number"
                            placeholder="Minimum fiat to crypto swap"
                            variant="solo-filled"
                            rounded="16px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;">Enter minimum withdrawal</label>
                        <div class="position-relative" style="margin-top: 8px;">
                            <v-text-field
                            v-model="minimum_withdrawal"
                            class="custom-text-field"
                            type="number"
                            placeholder="Minimum withdrawal"
                            variant="solo-filled"
                            rounded="16px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;">Enter withdrawal percentage fee</label>
                        <div class="position-relative" style="margin-top: 8px;">
                            <v-text-field
                            v-model="withdrawal_percentage_fee"
                            class="custom-text-field"
                            type="number"
                            placeholder="Withdrawal percentage fee"
                            variant="solo-filled"
                            rounded="16px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;">Enter supported payment gateways</label>
                        <div class="position-relative" style="margin-top: 8px;">
                            <v-combobox
                             class="custom-text-field" 
                                v-model="supported_payment_gateways"
                                chips
                                multiple
                                label="Multiple supported payment gateways"
                                :items="['stripe']"
                            ></v-combobox>
                        </div>
                    </v-col>
    
                    <v-col cols="12" md="6">
                        
                        <v-card   style="background: #12181F !important; border-radius: 15px;min-height: 100px; padding: 14px;
                             display: flex;align-items: center; justify-content: center;">
                            <v-file-input  @change="onFileChange" flat 
                            class="input" clearable  
                            prepend-icon="mdi-file"
                            label="Upload File" variant="solo" width="20" style="border-radius: 20px; color: #fff;"></v-file-input>
                        </v-card>
                        <v-img style="width: 200px; margin-top: 10px;" :src="preview"/>
                    </v-col>


                    <v-col cols="12">
                        <v-checkbox
                        style="color: #fff; font-size: large;"
                        v-model="isEnabled"
                        :label="`is Enabled: ${isEnabled.toString()}`"
                        ></v-checkbox>

                    </v-col>


                    <v-col cols="12" md="6">

                        <v-btn  class="icon"  @click.prevent="update_country()"  :loading="isloading" append-icon="mdi:arrow-right" variant="tonal" height="60px" width="100%" rounded
                            style="background: #0CAF60; color: #FFFFFF; font-size: 14px; text-transform: capitalize;">
                                Confirm
                        </v-btn>
                    </v-col>


                    



            </v-row>
        </div>



    </div>

</template>


<script setup>
    import { updateCountry } from "@/composables/requests/country"
    import { uploadUserFile } from "@/composables/requests/utils"
    import { compressImage } from "@/composables/mixins";
    import { get_countries } from "@/composables/actions/actions"



    const router = useRouter()
    const pinia = useStore()
    const currentId = router.currentRoute.value.params.id;

    const filteredItems = computed(() => {
        return pinia.state.countries.find(e => e.id === currentId);
    });    




    const country_name = ref(filteredItems.value?.country_name)
    const country_code = ref(filteredItems.value?.country_code)
    const currency_name = ref(filteredItems.value?.currency_name)
    const currency_code = ref(filteredItems.value?.currency_code)
    const phone_code = ref(filteredItems.value?.phone_code)
    const timezone = ref(filteredItems.value?.timezone)
    const minimum_fiat_funding = ref(filteredItems.value?.minimum_fiat_funding)
    const maximum_fiat_funding = ref(filteredItems.value?.maximum_fiat_funding)
    const minimum_fiat_to_crypto_swap = ref(filteredItems.value?.minimum_fiat_to_crypto_swap)
    const minimum_withdrawal = ref(filteredItems.value?.minimum_withdrawal)
    const withdrawal_percentage_fee = ref(filteredItems.value?.withdrawal_percentage_fee)
    const supported_payment_gateways = ref(filteredItems.value?.supported_payment_gateways)


    const  myfile = ref(null)
    const  preview = ref(filteredItems.value?.image_url)
    const file_url = ref(filteredItems.value?.image_url)
    const isEnabled = ref(filteredItems.value?.is_enabled)
    const isloading = ref(false)

    const  items =[
            {
            title: 'Countries',
            disabled: false,
            href: '/dashboard',
            },
            {
            title: 'Edit country',
            disabled: true,
            href: '/dashboard/banners/create',
            },
        
    ]


    const onFileChange = async (event) => {
        
        const file = event.target.files[0];
        myfile.value = file;
        
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
            const base64String = e.target.result; // This is your Base64 string
            preview.value = base64String; // Set the preview to the Base64 string
            };
            reader.readAsDataURL(file);
        }
    };



    const update_country = async()=>{
        isloading.value = true
        if(!myfile.value)return
        const compressedImg = await compressImage(myfile.value)
        var formdata = new FormData();
        formdata.append("file",compressedImg);
        const fileUrls = await uploadUserFile(formdata)
        file_url.value = fileUrls.uploaded_file_urls[0];

        console.log( myfile.value,fileUrls,compressedImg)

        const payload={
            image_url:file_url.value,
            country_name: country_name.value,
            country_code: country_code.value,
            phone_code: phone_code.value,
            currency_name: currency_name.value,
            currency_code: currency_code.value,
            timezone: timezone.value,
            minimum_fiat_funding: minimum_fiat_funding.value,
            minimum_fiat_to_crypto_swap: minimum_fiat_to_crypto_swap.value,
            minimum_withdrawal: minimum_withdrawal.value,
            withdrawal_percentage_fee: withdrawal_percentage_fee.value,
            supported_payment_gateways: supported_payment_gateways.value,
            is_enabled:isEnabled.value

        }
        console.log(payload)

        try{
            const data = await updateCountry(payload,currentId)
            if(data.success){
                push.success('Edited successfully') 
                const newData = pinia.state.countries.map(item=>{
                    if(item.id === currentId){
                        return {...item,...payload}
                    }
                    return item
                })
                pinia.setCountries(newData) 
                navigateTo('/dashboard')
            }else{
                push.error('Failed to create')  
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