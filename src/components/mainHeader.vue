<template>

    
    <div class="navbar shadow-lg" transition="scroll-y-transition" >
        <div class="nav-inner-section" style="min-height: 70px; padding: 0px 30px; ">

            <v-row no-gutters  class="d-flex  justify-space-between align-center" style="padding: 15px 0px;display: flex; align-items: center !important; justify-content: space-between !important;">

                <v-col cols="9" md="4" class="w-100" style="max-width: 530px; display: flex; align-items: center;width: 100%;">
                    <div @click="drawer = true" class=" d-md-none">
                        <svg style="margin-right: 17px;" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 18c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 14 4.46 14 6 14s2.31 0 2.876.347c.317.194.583.46.777.777C10 15.689 10 16.46 10 18s0 2.31-.347 2.877c-.194.316-.46.582-.777.776C8.311 22 7.54 22 6 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C2 20.31 2 19.54 2 18m12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 14 16.46 14 18 14s2.31 0 2.877.347c.316.194.582.46.776.777C22 15.689 22 16.46 22 18s0 2.31-.347 2.877a2.36 2.36 0 0 1-.776.776C20.31 22 19.54 22 18 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C14 20.31 14 19.54 14 18M2 6c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 2 4.46 2 6 2s2.31 0 2.876.347c.317.194.583.46.777.777C10 3.689 10 4.46 10 6s0 2.31-.347 2.876c-.194.317-.46.583-.777.777C8.311 10 7.54 10 6 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C2 8.311 2 7.54 2 6m12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 2 16.46 2 18 2s2.31 0 2.877.347c.316.194.582.46.776.777C22 3.689 22 4.46 22 6s0 2.31-.347 2.876c-.194.317-.46.583-.776.777C20.31 10 19.54 10 18 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C14 8.311 14 7.54 14 6" color="#fff"/></svg>
                    </div>
                    <v-text-field
                          class="custom-text-field w-100"
                          type="text"
                          placeholder="search"
                          prepend-inner-icon="mdi-magnify"
                          variant="solo-filled"
                          rounded="20px"
                          flat
                    ></v-text-field>
                </v-col>

                     

                <v-col cols="auto" md="2"
                   
                    class="d-flex align-center justify-end"
                      value="">
                        <v-btn-toggle
                            rounded="0"
                            color="deep-green-accent-3"
                            group theme="dark" variant="text"
                            class="btn"
                            :elevation="0"
                        >
                            
                        
                            <!-- <v-btn  value="right" color="red"    class="rounded-xl  text-capitalize ms-3 d-none d-md-block" 
                                style="font-size:16px !important;font-weight: 500 !important; letter-spacing: 0px;  padding: 10px; height: 60px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 15 15"><path fill="none" stroke="#fff" d="M.5 3.5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H3m-2.5 0v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1H3m-2.5 0H3m6 6h3"/></svg>
                            </v-btn> -->

                            <!-- <v-btn  value="right" color="red"    class="rounded-xl  text-capitalize mx-3 d-none d-md-block" 
                                style="font-size:16px !important;font-weight: 500 !important; letter-spacing: 0px;  padding: 10px; height: 60px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.947-.664l-2.668 1.135l-1.865-3.25l2.306-1.739q-.045-.27-.073-.558q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626L3.258 9.126l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.732l.361 2.912q.575.202 1.016.463t.909.654l2.725-1.115l1.865 3.211l-2.382 1.796q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.393-.94.673t-.985.445L13.866 21zm1.838-6.5q1.046 0 1.773-.727T14.473 12t-.727-1.773t-1.773-.727q-1.052 0-1.776.727T9.473 12t.724 1.773t1.776.727"/>
                                    </svg>
                            </v-btn> -->

                            <v-btn  value="right" color="red"    class="rounded-xl  text-capitalize d-none d-md-block" 
                                style="font-size:16px !important;font-weight: 500 !important; letter-spacing: 0px;  padding: 10px; height: 60px; margin-right: 14px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"/></svg>
                            </v-btn>

                            <div class=" " >
                                <DropdownAccount/>
                            </div>
                        
                        
                        </v-btn-toggle>
                </v-col>

            </v-row>

            <div class="d-block d-md-none" >
                <SidebarSm @open-drawer="v => drawer = v" :mydrawer="drawer"/>
            </div>
        </div>
    </div>
</template>
  
<script setup>

const drawer = ref(false)

</script>


<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

    .logo{
    color:white;
    font-weight:800;
    display: flex;
    align-items: center;
    /* opacity:1; */

    }

    .navbar{
    /* position: fixed !important; */
    /* top: 0; */
    /* left: 0; */
    width: 100% !important;
    background: #12181F;
    z-index: 99;
    }


    .img-flag{
    width: 23.503px;
    }


    .show{
    display:none !important;
    }
    @media (max-width: 960px) {


    /* .logoTexta {
    font-size: 23px !important;
    line-height: 30px !important;
    } */
    .nav-inner-section{
        padding: 0 16px !important;
    }
    .w-100{
        justify-content: space-between;
    }

    
    .show{
    display:flex !important;
    }
    }


    .custom-text-field :deep(.v-field) {
    background-color: #161D26 !important; /* Ensures the inner input field does not override the background color */
    border-radius: 20px !important; /* Inherits the border-radius from the parent */
    color: #C3CDDB;
    margin: 0px !important; 
    height: 60px;
    }

    .custom-text-field :deep(.v-field__input) {
    border-radius: 20px !important; /* Inherits the border-radius from the parent */
    /* color: #C3CDDB; */
    height: 60px;
    }

    .custom-text-field :deep(.v-input__details) {
        display: none;
    }

    .custom-text-field :deep(.v-input__control) {
    box-shadow: none !important;
    }

    .custom-text-field :deep(.v-field__outline) {
    box-shadow: none !important;
    }

    .custom-text-field :deep(.v-input--solo) {
    box-shadow: none !important;
    }

    .d-flex :deep(.v-field__overlay){
        background-color: #161D26  !important;
        box-shadow: none !important;
    }

    .btn {
        height: 60px !important;
    }

    .btn :deep(.v-btn){
        background: #161D26 !important;
        height: 60px;
        width: 60px;
    }


</style>