<template>

    <!-- Main container with full height background color -->
    <div class="main-container" style="background: #161D26 ; min-height: 100vh;">

        <v-container>
    
            <!-- Inner container centered with specific dimensions and styling -->
            <div class="mx-auto container" style="background: #0B0E13; max-width: 490px; height: 730px; border-radius: 37px; margin-top: 90px; ">
        
                <v-row class="row">
                    <!-- First column for form -->
                    <v-col>


                        <form @submit.prevent="log_in()">
                            <div class="inner-container" style="max-width: 446px; min-height: 695px; background: #12181F; border-radius: 37px; margin-left: 20px; margin-top: 5px; display: flex;flex-direction: column; padding: 40px 70px;">
    
                                <!-- Logo container, visible only on small screens -->
                                <div class="d-md-none" style=" margin-bottom: 22.62px;">
                                    <div style=" font-size:20px;" class="logo  pa-1 d-flex justify-center items-center font-weight-bold">
                                        <!-- <img class="img" src="/Logo1.png" style="width: 48.425px;"/> -->
                                        <span class="Demo" style="margin-left: 11px; margin-top: 8px;color:#FFFFFF;">Demo</span>
                                    </div>
                                </div>
        
                                <!-- Welcome heading and instruction text -->
                                <h1 class="heading tw-mt-5" style="font-weight: 600; font-size: 30px; color:#FFFFFF">Welcome back</h1>
                                <p class="text" style="color: #C3CDDB;font-size: 16px; font-weight: 400;">Please Enter your email and password</p>
        
                                <!-- Role display box -->
                                <div style="color:#FFFFFF;background: #161D26; font-size: 14px;font-weight: 400; display: inline-flex;justify-content: center; align-items: center; max-width: 220px; min-height: 50px; border-radius: 20px; margin-top: 21px;">
                                    Super Admin
                                </div>
        
                                <!-- Form inputs for email and password -->
                                <div style="margin-top: 54px;">
                                    <!-- Email input field with icon -->
                                    <div class="position-relative">
                                        <svg style="position: absolute;top: 27px; left: 42px; z-index: 50;" width="6" height="18" viewBox="0 0 2 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path id="Line 188" opacity="0.4" d="M1.22559 1V14" stroke="#C3CDDB" stroke-linecap="round"/>
                                        </svg>
    
                                        <v-text-field
                                            class="custom-text-field"
                                            type="email"
                                            placeholder="Enter your email"
                                            append-inner-icon="mdi-check-circle-outline"
                                            prepend-inner-icon="mdi-at"
                                            variant="solo-filled"
                                            :error-messages="email.errorMessage.value"
                                            @click:append-inner="visible = !visible"
                                            rounded="20px"
                                            background="#12181F"
                                            style="background: #12181F !important;"
                                            v-model.trim="email.value.value"
                                        ></v-text-field>
                                    </div>
        
                                    <!-- Password input field with icon -->
                                    <div style="position: relative;">
                                        <v-divider class="border-opacity-75" color="#ffff" vertical style="position: absolute; z-index: 60px;"></v-divider>
                                        <div class="position-relative">
                                            <svg style="position: absolute;top: 27px; left: 42px; z-index: 50;" width="6" height="18" viewBox="0 0 2 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path id="Line 188" opacity="0.4" d="M1.22559 1V14" stroke="#C3CDDB" stroke-linecap="round"/>
                                            </svg>
    
                                            <v-text-field
                                                class="custom-text-field"
                                                :append-inner-icon="!visible ? 'mdi-eye-off' : 'mdi-eye'"
                                                :type="visible ? 'text' : 'password'"
                                                placeholder="Enter your password"
                                                prepend-inner-icon="mdi-lock"
                                                variant="solo-filled"
                                                @click:append-inner="visible = !visible"
                                                :error-messages="password.errorMessage.value"
                                                rounded="20px"
                                                background="#12181F"
                                                style="background: #12181F !important;"
                                                 v-model.trim="password.value.value"
                                            ></v-text-field>
                                        </div>
                                    </div>
                                </div>
        
                                <!-- Continue button -->
                                <div style="margin-top: 55px; width: 100%;position: relative;">
                                    <v-btn  class="icon"  type="submit"  :loading="isloading" append-icon="mdi:arrow-right" variant="tonal" height="60px" width="100%" rounded
                                    style="background: #0CAF60; color: #FFFFFF; font-size: 14px; text-transform: capitalize;">
                                        Continue
                                    </v-btn>
                                    <div style="position: absolute; top: 12px; right: 30px; padding: 5px; background: #FFFFFF33; border-radius: 12px; display: inline-flex; justify-items: center;align-items: center;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"/></svg>
                                    </div>
                                </div>
        
                            </div>
                        </form>

                    </v-col>
    
                    <!-- Second column for Account QR Code, visible only on large screens -->
                    <!-- <v-col sm="12" lg="6" class="d-none d-lg-block">
                        <AccountQrCode />
                    </v-col> -->
                </v-row>
    
            </div>
    
        </v-container>
    </div>

</template>

<script setup>
import { useStore } from '@/stores/index'
import { login } from "@/composables/requests/auth"
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup' // Import Yup for validation

const pinia = useStore()

const router = useRoute()
console.log(router.path)

definePageMeta({
    layout:'custom'
})




// Define the validation schema
const schema = yup.object({
  email: yup
    .string()
    .email('Must be a valid e-mail.')
    .required('Email is required.'),
  password: yup
    .string()
    // .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    // .matches(/[@$!%*?&#]/, 'Password must contain at least one special character.')
    .required('Password is required.')
})

// Set up form fields with validation
const { handleSubmit, handleReset, errors } = useForm({
  validationSchema: schema,
})

const email = useField('email')
const password = useField('password')

const isloading = ref(false)

const deviceInfo = ref({
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
  online: navigator.onLine,
  cookieEnabled: navigator.cookieEnabled,
})

const log_in = handleSubmit(async(values)=>{
  isloading.value = true
  const payload ={
    email: values.email,
    password: values.password,
    device_info:  JSON.stringify(deviceInfo.value.userAgent),
  }
  try{
    const data = await login(payload)
    if(data.success){
      push.success('logged in successfully')
      pinia.setUser(data.data)
      navigateTo("/dashboard")
    }
  }catch(e){
    console.log(e)
  }finally{
    isloading.value = false
  }
})

onMounted(()=>{
  // push.success('Hi! I am your first notification!')
})

// Visibility state for password field
const visible = ref(false)

</script>


<style scoped>

   .icon:hover{
     right: 0px;
     transition: all;
   }

    /* Custom styles for text fields */
    .custom-text-field .v-input__control {
        background-color: #161D26 !important;
        border-radius: 20px !important;
    }

    .custom-text-field .v-field__field {
        background-color: transparent !important; /* Ensures the inner input field does not override the background color */
        border-radius: inherit !important; /* Inherits the border-radius from the parent */
    }

    .custom-text-field :deep(.v-field) {
        background-color: #161D26 !important; /* Ensures the inner input field does not override the background color */
        border-radius: 20px !important; /* Inherits the border-radius from the parent */
        color: #C3CDDB;
        height: 70px;
    }

    .custom-text-field :deep(.v-field__input) {
        border-radius: 20px !important; /* Inherits the border-radius from the parent */
        height: 70px;
        padding-left: 20px;
    }

    /* Media query for smaller screens */
    @media (max-width: 1280px) {
        .main-container{
            background: #0B0E13 !important;
        }
        .container{
            width: 100% !important;
            margin-top: 0px !important;
            height: 100vh !important;
            border-radius:0px;
            display: flex !important;
            justify-content: center !important;
            margin: 0px!important;
        }
        .row{
            justify-content: center;
        }
        .inner-container{
            margin-left: 0px !important;
            margin: 12px auto !important;
            padding: 20px !important;
            min-height: 650px !important;
            width: 90vw !important;
        }
        .heading{
            font-size: 25px !important;
            text-align: center;
        }
        .text{
            text-align: center;
            font-size: 14px !important;
        }
    }
</style>
