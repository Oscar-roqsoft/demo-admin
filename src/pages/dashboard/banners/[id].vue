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
                        <label style="color: #fff; font-size: larger; margin: 10px 14px;">Title</label>
                        <div class="position-relative">
                            <v-text-field
                            v-model="title"
                            class="custom-text-field"
                            type="text"
                            placeholder="Title"
                            variant="solo-filled"
                            rounded="16px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" md="6">
                        <label style="color: #fff; font-size: larger; margin: 10px 14px;">Description</label>
                        <div class="position-relative">
                            <v-text-field
                            v-model="desc"
                            class="custom-text-field"
                            type="text"
                            placeholder="Description"
                            variant="solo-filled"
                            rounded="16px"
                            background="#12181F"
                            flat
                            ></v-text-field>
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


                    <v-col>
                        <v-checkbox
                        style="color: #fff; font-size: large;"
                        v-model="isEnabled"
                        :label="`is Enabled: ${isEnabled.toString()}`"
                        ></v-checkbox>

                    </v-col>


                    <v-col cols="12" md="6">

                        <v-btn  class="icon"  @click.prevent="update_banner()"  :loading="isloading" append-icon="mdi:arrow-right" variant="tonal" height="60px" width="100%" rounded
                            style="background: #0CAF60; color: #FFFFFF; font-size: 14px; text-transform: capitalize;">
                                Confirm
                        </v-btn>
                    </v-col>

                </v-col>


            </v-row>
        </div>



    </div>

</template>


<script setup>
    import { addBanners ,updateBanners} from "@/composables/requests/banners"
    import { uploadUserFile } from "@/composables/requests/utils"
    import { compressImage } from "@/composables/mixins";
     import { get_banner } from "@/composables/actions/actions"

    const pinia = useStore()
    const router = useRouter();
    const currentId = router.currentRoute.value.params.id;

    const filteredItems = pinia.state.banners.find(e => e.id ===  currentId )
    
    console.log(filteredItems)
    
    const title = ref(filteredItems?.title)
    const desc = ref(filteredItems?.description)
    const  myfile = ref(null)
    const  preview = ref(filteredItems?.image_url)
    const file_url = ref(filteredItems?.image_url)
    const isEnabled = ref(filteredItems?.is_enabled)
    const isloading = ref(false)

    const  items =[
            {
            title: 'Banner',
            disabled: false,
            href: '/dashboard',
            },
            {
            title: 'Edit banner',
            disabled: true,
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



    const update_banner = async()=>{
        isloading.value = true
        if(myfile.value){
            const compressedImg = await compressImage(myfile.value)
            var formdata = new FormData();
            formdata.append("file",compressedImg);
            const fileUrls = await uploadUserFile(formdata)
            file_url.value = fileUrls.uploaded_file_urls[0];
            console.log( myfile.value,fileUrls,compressedImg)

        }


        const payload={
            image_url:file_url.value,
            url: file_url.value,
            title: title.value,
            description: desc.value,
            is_enabled:isEnabled.value

        }

        try{
            const data = await updateBanners(payload,currentId)
            if(data.success){
                push.success('Edited successfully')  

                const newData = pinia.state.banners.map(item=>{
                    if(item.id === currentId){
                        return {...item,...payload}
                    }
                    return item
                })
                pinia.setBannersItem(newData)
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
</style>