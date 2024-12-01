<template>
    <v-dialog max-width="600" min-height="400" >
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            v-bind="activatorProps"
            color="surface-variant"
            text="Send notifications"
            variant="flat"
            style="background: #0CAF60 !important; margin-left: 40px; color: #FFFFFF; text-transform: capitalize;
            height: 40px; border-radius: 20px;"
          ></v-btn>
        </template>
      
        <template v-slot:default="{ isActive }">
          <v-card title="Send  notifications to users"  style="background: #161D26; color: #FFFFFF; border-radius: 20px; ">
            <v-col cols="12" style="padding: 0px 20px;">
    
                <h3 style="font-size: 16px; font-weight: 400;color: #A4A8AB; margin-bottom: 16px;">Subject</h3>
                <v-text-field
                    class="custom-text-field"
                    type="text"
                    placeholder="Email Subject"
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
                
            <v-card-actions style="padding:20px 24px;">
              <v-spacer></v-spacer>
      
              <div style="margin-top: px; width: 100%;position: relative;">
                        <v-btn  append-icon="mdi:arrow-right" variant="tonal"  height="60px" width="100%" rounded
                        style="background: #0CAF60; color: #FFFFFF; font-size: 14px; text-transform: capitalize;">
                            Send
                        </v-btn>
                       
                </div>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </template>
    
    
    <script setup>
    
    const value = ref(null)
    const isActive = ref(false)
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