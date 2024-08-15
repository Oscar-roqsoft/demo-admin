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
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;">Title</label>
                        <div class="position-relative" style="margin-top: 8px;" >
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
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;">Broadcast Type</label>
                        <div class="position-relative" style="margin-top: 8px;">
                            <v-text-field
                            v-model="broadcast_type"
                            class="custom-text-field"
                            type="text"
                            placeholder="Broadcast type"
                            variant="solo-filled"
                            rounded="16px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;">Publish On</label>
                        <div class="position-relative" style="margin-top: 8px;">
                            <v-text-field
                            v-model="isPublishOn"
                            class="custom-text-field"
                            type="text"
                            placeholder="Publish On"
                            variant="solo-filled"
                            rounded="16px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" md="6">
                        <label style="color: #fff; font-size: medium; margin: 10px 14px;">Message</label>
                        <div class="position-relative" style="margin-top: 8px;">
                            <v-textarea
                            class="custom-text-area"
                            v-model="message"
                            variant="solo-filled"
                            placeholder="Type your message"
                            rounded="20px"
                            flat
                            ></v-textarea>

                        </div>
                    </v-col>

                    

                    <v-col cols="12" md="6" >
                        <label style="color: #fff; font-size: medium; margin: 0px 14px;">Country group</label>
                        <div class="position-relative" style="margin-top: 8px;">
                            <v-combobox
                             class="custom-text-field" 
                                v-model="country_group"
                                chips
                                multiple
                                label="Country group"
                                :items="[]"
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


                    <!-- <v-col>
                        <v-checkbox
                        style="color: #fff; font-size: large;"
                        v-model="isPublishOn"
                        :label="`is Publish on: ${isPublishOn.toString()}`"
                        ></v-checkbox>

                    </v-col> -->


                    <v-col cols="12" md="6">

                        <v-btn  class="icon"  @click.prevent="update_broadcast()"  :loading="isloading" append-icon="mdi:arrow-right" variant="tonal" height="60px" width="100%" rounded
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
    import { addBroadcast,updateBroadcast } from "@/composables/requests/broadcast"
    import { uploadUserFile } from "@/composables/requests/utils"
    import { compressImage } from "@/composables/mixins";
    import { get_broadcast } from "@/composables/actions/actions"


    const pinia = useStore()
    const router = useRouter();
    const currentId = router.currentRoute.value.params.id;

    const filteredItems = computed(() => {
        return  pinia.state.broadcasts.find(e => e.id ===  currentId) 
    }); 

    
    console.log(filteredItems.value)

    const title = ref(filteredItems.value?.title)
    const broadcast_type = ref(filteredItems.value?.broadcast_type)
    const message = ref(filteredItems.value?.message)
    const country_group = ref(filteredItems.value?.country_group)
    const  myfile = ref(null)
    const  preview = ref(filteredItems.value?.image_url)
    const file_url = ref(filteredItems.value?.image_url)
    const isPublishOn = ref(filteredItems.value?.isPublishOn)


    const isloading = ref(false)

    const  items =[
            {
            title: 'Broadcast',
            disabled: false,
            href: '/dashboard',
            },
            {
            title: 'Edit broadcast',
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



    const update_broadcast = async()=>{
        isloading.value = true
        if(myfile.value){
            const compressedImg = await compressImage(myfile.value)
            var formdata = new FormData();
            formdata.append("file",compressedImg);
            const fileUrls = await uploadUserFile(formdata)
            file_url.value = fileUrls.uploaded_file_urls[0];
        }


        const payload={
            image_url:file_url.value,
            title: title.value,
            publish_on:isPublishOn.value,
            message: message.value,
            country_group: country_group.value,
            broadcast_type:broadcast_type.value,



        }
        console.log(payload)
        try{
            const data = await updateBroadcast(payload,currentId)
            if(data.success){
                push.success('Edited successfully')  

                const newData = pinia.state.broadcasts.map(item=>{
                    if(item.id === currentId){
                        return {...item,...payload}
                    }
                    return item
                })
                pinia.setBroadcasts(newData)
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


.custom-text-field :deep(.v-field__outline) {
display: none !important;
}
</style>