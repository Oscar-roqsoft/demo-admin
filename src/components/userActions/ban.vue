<template>
    <div>
        <div class="text-center">
          <v-dialog
          elevation="2"
            v-model="dialog"
            max-width="600"
          >
            <template v-slot:activator="{ props: activatorProps }">

                <v-btn v-bind="activatorProps"  variant="tonal" style="background: #BD6B00; text-transform: capitalize; padding: 12px 25px; min-height: 48px; max-width: 206px; color: #FFFFFF;
                    display: flex; align-items: center; border-radius: 15px;">

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="vuesax/linear/user-remove">
                                <g id="user-remove">
                                <path id="Vector" d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path id="Vector_2" d="M3.40991 22C3.40991 18.13 7.25991 15 11.9999 15C12.9599 15 13.8899 15.13 14.7599 15.37" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path id="Vector_3" d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <g id="Group">
                                <path id="Vector_4" d="M19.0299 16.9399L16.9199 19.0499" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path id="Vector_5" d="M16.9399 16.96L19.0599 19.0699" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                </g>
                                </g>
                            </svg>
                            <span style="font-size: 14px; font-weight: 400; line-height: 21px; margin-left: 9px; letter-spacing: normal;">Ban User</span>


                </v-btn>

            </template>
      
            <v-card
              style="background: #161D26; color: #FFFFFF; border-radius: 20px;"
            >
               <v-card-title style="display: flex; justify-content: space-between;margin-top: 5px;">
                 <h2 style="font-size: 24px; font-weight: 800;">Ban user</h2>
                 <v-icon @click="dialog = false" icon="mdi-close"></v-icon>
               </v-card-title>
              <v-card-text>
                <v-row dense>
                
               

                  

                  <v-col cols="12" style="margin-top: 2px;">

                    <h3 style="font-size: 16px; font-weight: 400;color: #A4A8AB; margin-bottom: 14px;">Token networks</h3>


                    <div class="select">

                      <v-select
                       class="custom-text-field"
                        label="Select token networks"
                        :items="['BTC', 'trc20',]"
                        variant="solo-filled"
                        
                        flat
                      ></v-select>
                    </div>

                  </v-col>
                  <v-col cols="12" style="margin-top: 2px;">

                    <h3 style="font-size: 16px; font-weight: 400;color: #A4A8AB; margin-bottom: 14px;">Amount</h3>

                  <v-text-field
                      class="custom-text-field"
                      type="text"
                      placeholder="Please Provide positive amount"
                      variant="solo-filled"
                      rounded="20px"
                      background="#12181F"
                      flat
                  ></v-text-field>

                  </v-col>
                  <v-col cols="12" style="padding: 0px 20px; margin-top: 24px;">

                        <h3 style="font-size: 16px; font-weight: 400;color: #A4A8AB; margin-bottom: 16px;">Remark</h3>

                        <v-textarea
                            class="custom-text-area"
                            :model-value="value"
                            variant="solo-filled"
                            rounded="20px"
                            flat
                        ></v-textarea>

                    </v-col>
      
                </v-row>
      
                <!-- <small class="text-caption text-medium-emphasis">*indicates required field</small> -->

              </v-card-text>
      


              <v-card-actions style="padding:20px 24px;">
              <v-spacer></v-spacer>
      
              <div style="margin-top: 0px; width: 100%;position: relative;">
                        <v-btn   variant="tonal"  height="50px" width="100%" rounded
                        style="background: #0CAF60; color: #FFFFFF; font-size: 16px; text-transform: capitalize;">
                            Submit
                        </v-btn>
                      
                </div>
            </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
    </div>
</template>

<script setup>

    const  dialog = ref(false)

</script>


<style scoped>

   
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
           background-color: transparent !important;
    }
    .select :deep(.v-menu) {
           background-color: #12181F !important;
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