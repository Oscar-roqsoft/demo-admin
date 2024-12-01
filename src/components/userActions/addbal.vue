<template>
    <div>
        <div class="text-center">
          <v-dialog
          elevation="2"
            v-model="dialog"
            max-width="600"
          >
            <template v-slot:activator="{ props: activatorProps }">

                <v-btn v-bind="activatorProps"  variant="tonal" style="background: #0CAF60; text-transform: capitalize; padding: 12px 25px; min-height: 48px; max-width: 206px; color: #FFFFFF;
                    display: flex; align-items: center; border-radius: 15px;">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="vuesax/linear/wallet-add">
                        <g id="wallet-add">
                        <path id="Vector" d="M14.2617 15.4385H9.26172" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="Vector_2" d="M11.7617 12.998V17.998" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="Vector_3" d="M12.66 2.51814L12.63 2.58814L9.72996 9.31814H6.87996C6.19996 9.31814 5.54996 9.45814 4.95996 9.70814L6.70996 5.52814L6.74996 5.42814L6.81996 5.26814C6.83996 5.20814 6.85996 5.14814 6.88996 5.09814C8.19996 2.06814 9.67996 1.37814 12.66 2.51814Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="Vector_4" d="M18.05 9.51807C17.6 9.37807 17.12 9.31807 16.64 9.31807H9.72998L12.63 2.58807L12.66 2.51807C12.81 2.56807 12.95 2.63807 13.1 2.69807L15.31 3.62807C16.54 4.13807 17.4 4.66807 17.92 5.30807C18.02 5.42807 18.1 5.53807 18.17 5.66807C18.26 5.80807 18.33 5.94807 18.37 6.09807C18.41 6.18807 18.44 6.27807 18.46 6.35807C18.73 7.19807 18.57 8.22807 18.05 9.51807Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="Vector_5" d="M21.5217 14.1984V16.1484C21.5217 16.3484 21.5117 16.5484 21.5017 16.7484C21.3117 20.2384 19.3617 21.9984 15.6617 21.9984H7.86172C7.62172 21.9984 7.38172 21.9784 7.15172 21.9484C3.97172 21.7384 2.27172 20.0384 2.06172 16.8584C2.03172 16.6284 2.01172 16.3884 2.01172 16.1484V14.1984C2.01172 12.1884 3.23172 10.4584 4.97172 9.70836C5.57172 9.45836 6.21172 9.31836 6.89172 9.31836H16.6517C17.1417 9.31836 17.6217 9.38836 18.0617 9.51836C20.0517 10.1284 21.5217 11.9884 21.5217 14.1984Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="Vector_6" d="M6.71 5.52832L4.96 9.70832C3.22 10.4583 2 12.1883 2 14.1983V11.2683C2 8.42832 4.02 6.05832 6.71 5.52832Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="Vector_7" d="M21.5186 11.2677V14.1977C21.5186 11.9977 20.0586 10.1277 18.0586 9.52766C18.5786 8.22766 18.7286 7.20766 18.4786 6.35766C18.4586 6.26766 18.4286 6.17766 18.3886 6.09766C20.2486 7.05766 21.5186 9.02766 21.5186 11.2677Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </g>
                    </svg>
                    <span style="font-size: 14px; font-weight: 400; line-height: 21px; margin-left: 9px; letter-spacing: normal;">Add Balance</span>

                </v-btn>

            </template>
      
            <v-card
              style="background: #161D26; color: #FFFFFF; border-radius: 20px;"
            >
               <v-card-title style="display: flex; justify-content: space-between;margin-top: 5px;">
                 <h2 style="font-size: 24px; font-weight: 800;">Add balance</h2>
                 <v-icon @click="dialog = false" icon="mdi-close"></v-icon>
               </v-card-title>
              <v-card-text>
                <v-row dense>
                
               

                  <v-col cols="12" style="margin-top: 2px;">

                    <h3 style="font-size: 16px; font-weight: 400;color: #A4A8AB; margin-bottom: 14px;">Token chains</h3>


                    <div class="select">

                      <v-select
                      class="custom-text-field"
                        label="Select token chain"
                        :items="['bep20', 'trc20',]"
                        variant="solo-filled"
                        persistent-hint
                        return-object
                        flat
                      ></v-select>
                    </div>

                  </v-col>

                  <v-col cols="12" style="padding: 0px 0px; margin-top: 16px;">

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
                  <v-col cols="12" style="margin-top: 16px;">

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

                  <v-col cols="12" style="padding: 0px 10px; margin-top: 16px;">

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