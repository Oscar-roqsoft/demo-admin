<template>
    <div>

        <h1 style="color: #FFFFFF; font-size: 16px; font-weight: 700; margin-bottom: 24px;"> Profile Details  </h1>
        <v-divider></v-divider>

        <v-row style="gap: px;">
            <v-col cols="12" md="4">
                <p style="font-size: 16px; font-weight: 400; color: #A4A8AB; padding: 26px 0px;">Profile Image</p>
                <v-img class="profile-img" src="/profile.png"/>
            </v-col>
            <v-col cols="12" md="7">

                <p style="font-size: 16px; font-weight: 400; color: #A4A8AB; padding: 26px 0px;"> Personal Informations </p>

                <v-row>
                    <v-col cols="12" md="6">
                        <div class="position-relative">
                            <svg style="position: absolute;top: 23px; left: 42px; z-index: 50;" width="6" height="16" viewBox="0 0 2 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Line 188" opacity="0.4" d="M1.22559 1V14" stroke="#C3CDDB" stroke-linecap="round"/>
                            </svg>

                            <v-text-field
                            class="custom-text-field"
                            type="text"
                            placeholder="First name"
                            prepend-inner-icon="mdi-emoticon-happy-outline"
                            variant="solo-filled"
                            rounded="20px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="position-relative">
                            <svg style="position: absolute;top: 23px; left: 42px; z-index: 50;" width="6" height="16" viewBox="0 0 2 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Line 188" opacity="0.4" d="M1.22559 1V14" stroke="#C3CDDB" stroke-linecap="round"/>
                            </svg>

                            <v-text-field
                            class="custom-text-field"
                            type="text"
                            placeholder="Last name"
                            prepend-inner-icon="mdi-account-outline"
                            variant="solo-filled"
                            rounded="20px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="position-relative">
                            <svg style="position: absolute;top: 23px; left: 42px; z-index: 50;" width="6" height="16" viewBox="0 0 2 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Line 188" opacity="0.4" d="M1.22559 1V14" stroke="#C3CDDB" stroke-linecap="round"/>
                            </svg>

                            <v-text-field
                            class="custom-text-field"
                            type="text"
                            placeholder="Display name"
                            prepend-inner-icon="mdi-eye-outline"
                            variant="solo-filled"
                            rounded="20px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="position-relative">
                            <svg style="position: absolute;top: 23px; left: 42px; z-index: 50;" width="6" height="16" viewBox="0 0 2 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Line 188" opacity="0.4" d="M1.22559 1V14" stroke="#C3CDDB" stroke-linecap="round"/>
                            </svg>

                            <v-text-field
                            class="custom-text-field"
                            type="email"
                            placeholder="Username"
                            prepend-inner-icon="mdi-at"
                            variant="solo-filled"
                            rounded="20px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>
                </v-row>

                <p style="font-size: 16px; font-weight: 400; color: #A4A8AB; padding: 26px 0px;"> Contact Info </p>

                <v-row>
                    <v-col cols="12" md="6">
                        <div class="position-relative">
                            <svg style="position: absolute;top: 23px; left: 42px; z-index: 50;" width="6" height="16" viewBox="0 0 2 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Line 188" opacity="0.4" d="M1.22559 1V14" stroke="#C3CDDB" stroke-linecap="round"/>
                            </svg>

                            <v-text-field
                            class="custom-text-field"
                            type="Email"
                            placeholder="Email address"
                            prepend-inner-icon="mdi-email"
                            variant="solo-filled"
                            rounded="20px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="position-relative">
                            <svg style="position: absolute;top: 23px; left: 42px; z-index: 50;" width="6" height="16" viewBox="0 0 2 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Line 188" opacity="0.4" d="M1.22559 1V14" stroke="#C3CDDB" stroke-linecap="round"/>
                            </svg>

                            <v-text-field
                            class="custom-text-field"
                            type="text"
                            placeholder="Currency"
                            prepend-inner-icon="mdi-at"
                            variant="solo-filled"
                            rounded="20px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="position-relative">
                            <svg style="position: absolute;top: 23px; left: 42px; z-index: 50;" width="6" height="16" viewBox="0 0 2 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Line 188" opacity="0.4" d="M1.22559 1V14" stroke="#C3CDDB" stroke-linecap="round"/>
                            </svg>

                            <v-text-field
                            class="custom-text-field"
                            type="text"
                            placeholder="Location"
                            prepend-inner-icon="mdi-map-marker"
                            variant="solo-filled"
                            rounded="20px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="position-relative">
                            <v-text-field
                            class="custom-text-field custom-text-field-number"
                            type="phone"
                            placeholder="Phone number"
                            variant="solo-filled"
                            rounded="20px"
                            background="#12181F"
                            flat
                            ></v-text-field>
                            <v-btn flat  class="position-absolute ml-3 text-capitalize font-weight-bold border" value="left"
                                    style="top: 8px;font-size:16px !important;font-weight: 500 !important; letter-spacing: 0px; border-radius: 16px !important; 
                                    max-width: 120px; height: 44px; background: #161D26;">
                                <img class="img-pro" src="/flag.png"/>
                                <span style="font-size: 14px; font-weight: 400;color: #fff;">+234</span>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_5937_42302)">
                                        <path d="M11.8722 13.0945L16.7198 8.47446L18.1046 9.79419L11.8722 15.7339L5.63989 9.79419L7.02464 8.47446L11.8722 13.0945Z" fill="#fff"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5937_42302">
                                        <rect width="23.5034" height="22.4" fill="#fff" transform="translate(0.120605 0.799976)"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                            </v-btn>
                        </div>
                    </v-col>
                </v-row>

                <v-row style="margin-top: 24px;">
                    <v-col cols="6" md="3" style="color: #A4A8AB;">
                        <h3 style="font-size: 16px; font-weight: 400; color:#A4A8AB;">Email Verification</h3>
                        <v-switch
                            v-model="model"
                            hide-details
                            :label="model ? 'verified': ' unverified'"
                            inset
                            color="primary"
                        ></v-switch>

                    </v-col>

                    <v-col cols="6" md="3" style="color: #A4A8AB;">
                        <h3 style="font-size: 16px; font-weight: 400; color:#A4A8AB;">2FA Verification</h3>
                        <v-switch
                            v-model="model"
                            hide-details
                            :label="model ? 'verified': ' unverified'"
                            inset
                            color="primary"
                        ></v-switch>

                    </v-col>
                    <v-col cols="6" md="3" style="color: #A4A8AB;">
                        <h3 style="font-size: 16px; font-weight: 400; color:#A4A8AB;">KYC</h3>
                        <v-switch
                            v-model="model"
                            hide-details
                            :label="model ? 'verified': ' unverified'"
                            inset
                            color="primary"
                        ></v-switch>

                    </v-col>

                    <v-col cols="6" md="3" style="color: #A4A8AB;">
                        <h3 style="font-size: 16px; font-weight: 400; color:#A4A8AB;">Mobile Verification</h3>
                        <v-switch
                            v-model="model"
                            hide-details
                            :label="model ? 'verified': ' unverified'"
                            inset
                            color="primary"
                        ></v-switch>

                    </v-col>
                </v-row>

                <div style="margin-top: 24px; width: 100%;position: relative;">
                    <v-btn to="/dashboard" append-icon="mdi:arrow-right" variant="tonal"  height="60px" width="100%" rounded
                    style="background: #0CAF60; color: #FFFFFF; font-size: 14px; text-transform: capitalize;">
                        Update
                    </v-btn>
                    <!-- <div style="position: absolute; top: 14px; right: 30px; padding: 5px; background: #FFFFFF33; border-radius: 12px;">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"/></svg>
                    </div> -->
                </div>

            </v-col>

        </v-row>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref('');
const icon = 'mdi-account'; // Use any material design icon from Vuetify

const selectedCountry = ref('')
const selectedCountryflag = ref('')

const  model = ref(false)
</script>

<style scoped>



    .profile-img{
        width: 400px;
        height: 395px;
    }

    .img-pro{
        width: 24px;
    }

    .position-relative .v-btn{
        padding: 0px 10px !important;
        
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