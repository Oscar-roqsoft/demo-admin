<template>
    <div class="navbar shadow-lg" transition="scroll-y-transition" >
      <v-container :class="$vuetify.display.smAndDown ?'px-2':''" style="min-height: 50px; ">
         <v-row
           no-gutters
           class="d-flex py-0 justify-space-between align-center"
           style="height: "
         >
                  <div style=" font-size:20px;" 
                  class="logo  pa-1 d-flex justify-center items-center   font-weight-bold" >
                        <!-- <img class="img" src="/Logo1.png" style="width: 48.425px;"/> -->
                        <span class="Demo" style="margin-left: 11px; margin-top: 0px;">Demo</span>
                  </div>
  
                  <v-col
                  v-if="$vuetify.display.mdAndUp"
                  class="d-flex align-center justify-end"
                  cols=""  value="">
                    <v-btn-toggle
                        rounded="0"
                        text
                        color="deep-green-accent-3"
                        group theme="dark" variant="text"
                        class=""
                      >
                    
                        <!-- <v-btn value="shop"  to="/shop" class="rounded-xl  text-capitalize font-weight-bold">
                        <span style="font-family: Permanent Marker !important;font-size: 20px;"> Home</span>
                        </v-btn> -->
                        <v-btn  value="right"   class="rounded-xl  text-capitalize"  
                        style="font-size:16px !important;font-weight: 500 !important; letter-spacing: 0px;">
                        Create Offer
                        </v-btn>
                        <v-btn  class=" rounded-xl text-capitalize font-weight-bold" value="right"
                        style="font-size:16px !important;font-weight: 500 !important; letter-spacing: 0px;">
                          Wallet
                        </v-btn>
    
                        <v-btn  class="rounded-xl text-capitalize font-weight-bold" value="right"
                        style="font-size:16px !important;font-weight: 500 !important; letter-spacing: 0px;">
                          Buy Gift Card
                        </v-btn>
    
                        <v-btn class="rounded-xl text-capitalize font-weight-bold" value="right"
                        style="font-size:16px !important;font-weight: 500 !important; letter-spacing: 0px;">
                          Become a Vendor
                        </v-btn>
    
                        
    
                    </v-btn-toggle>
                  </v-col>

                  <v-col
                  v-if="$vuetify.display.mdAndUp"
                  class="d-flex align-center justify-end"
                  cols="4" >
                  <v-btn-toggle
                      rounded="0"
                      text
                      color="deep-green-accent-3"
                      group theme="dark" variant="text"
                     >
  
                      <v-btn  to="" class="rounded-xl text-capitalize font-weight-bold" value="center"
                      style="font-size:16px !important;font-weight: 600 !important; letter-spacing: 0px;">
                        login
                      </v-btn>
                     
  
                      <v-btn size="large" style="background: #2872FE; color: white;font-size:16px !important;font-weight: 500 !important;
                      border-radius: 16px !important; letter-spacing: 0px;" 
                       href="#contact" 
                      class=" ml-3 text-capitalize font-weight-bold" value="justify">
                       register
                      </v-btn>
                      
                      <v-btn   class=" ml-3 text-capitalize font-weight-bold border" value="left"
                      style="font-size:16px !important;font-weight: 500 !important; letter-spacing: 0px; border-radius: 16px !important;">
                        <!-- <img class="img-flag" src="/flag.png"/> -->
                        <span>English</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <g clip-path="url(#clip0_5937_42302)">
                            <path d="M11.8722 13.0945L16.7198 8.47446L18.1046 9.79419L11.8722 15.7339L5.63989 9.79419L7.02464 8.47446L11.8722 13.0945Z" fill="white"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_5937_42302">
                              <rect width="23.5034" height="22.4" fill="white" transform="translate(0.120605 0.799976)"/>
                            </clipPath>
                          </defs>
                        </svg>

                      </v-btn>
  
                      
  
                  </v-btn-toggle>
                  </v-col>
  
                  <!-- <div
                  class="show">
  
                      <drawer >
                          <slot></slot>
                      </drawer>
  
                  </div> -->
  
         
         </v-row>
      </v-container>
    </div>
    
</template>

<script>
// import { gsap } from "gsap";

export default {


data(){

  return {
    drawer: null,
    open: false,
  }

},
// mounted(){
   
//  gsap.fromTo('.logo', {
//            duration: 1.5,
//            opacity: 0,
//            }, {
//            opacity: 1,
//        });
// },

methods:{
  toggleDrawer(){
    this.open = !this.open
  }
}

}
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
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100% !important;
    background: #161D26;
    z-index: 99;
    }


    .img-flag{
    width: 23.503px;
    }


    .show{
    display:none !important;
    }
    @media only screen and (max-width: 960px) {

    .logoTexta {
    font-size: 23px !important;
    line-height: 30px !important;
    }

    
    .show{
    display:flex !important;
    }
    }

</style>