<template>
    <div style="background:  #161D26; min-height: 100vh;">

        <div>
            <div style="padding: 33px 40px;" class="card-con">
                <v-row style="gap: 10px;">
                    <v-col cols="12" md="4"  lg="3" style="padding: 26px; border-radius: 20px; min-width: 250px;">
                         <h1 style="color: #FFFFFF; font-size: 26px; font-weight: 700;">{{ pinia.state.statistics?.total_web3_wallets ?  numberWithCommas(pinia.state.statistics?.total_web3_wallets) : '' }} USD</h1>
                         <div style=" margin-top: 8px;">
                            <div style="width: 21px; height: 21px; background: #0CAF60; border-radius: 200px; display: inline-flex; justify-content: center;align-items: center;">
                                <div style="width: 9px; height: 9px; background: #fff; border-radius: 200px;"></div>
                            </div>
                            <span style="color: #C2C2C2; font-size: 14px; font-weight: 400; margin-left: 8px;">Crypto Account</span>
                         </div>
                         <div style="margin-top: 8px;">
                             <v-progress-linear model-value="20" color="#0CAF60"></v-progress-linear>
                         </div>
                    </v-col>

                    <v-col cols="12" md="3"  lg="2" style="padding: 26px; border-radius: 20px; min-width: 250px;">
                         <h1 style="color: #FFFFFF; font-size: 26px; font-weight: 700;">{{  pinia.state.statistics?.total_fiat_wallets ?  numberWithCommas(pinia.state.statistics?.total_fiat_wallets) :'' }} USD</h1>
                         <div style=" margin-top: 8px;">
                            <div style="width: 21px; height: 21px; background: #ED6167; border-radius: 200px; display: inline-flex; justify-content: center;align-items: center;">
                                <div style="width: 9px; height: 9px; background: #fff; border-radius: 200px;"></div>
                            </div>
                            <span style="color: #C2C2C2; font-size: 14px; font-weight: 400; margin-left: 8px;">Fiat Account</span>
                         </div>
                         <div style="margin-top: 8px;">
                             <v-progress-linear model-value="20" color="#ED6167"></v-progress-linear>
                         </div>
                    </v-col>

                    <v-col cols="12" md="3"  lg="2" style="padding: 26px;  border-radius: 20px; min-width: 250px;">
                         <h1 style="color: #FFFFFF; font-size: 26px; font-weight: 700;">{{ pinia.state.statistics?.total_users ? numberWithCommas(pinia.state.statistics?.total_users) :''}}</h1>
                         <div style=" margin-top: 8px;">
                            <div style="width: 21px; height: 21px; background: #26A17c; border-radius: 200px; display: inline-flex; justify-content: center;align-items: center;">
                                <div style="width: 9px; height: 9px; background: #fff; border-radius: 200px;"></div>
                            </div>
                            <span style="color: #C2C2C2; font-size: 14px; font-weight: 400; margin-left: 8px;">Total Users</span>
                         </div>
                         <div style="margin-top: 8px;">
                             <v-progress-linear model-value="20" color="#26A17c"></v-progress-linear>
                         </div>
                    </v-col>

                    <v-col cols="12" md="3"  lg="2" style="padding: 26px;  border-radius: 20px; min-width: 250px;">
                         <h1 style="color: #FFFFFF; font-size: 26px; font-weight: 700;">{{ pinia.state.statistics?.total_kyc_verified_users ? numberWithCommas(pinia.state.statistics?.total_kyc_verified_users):'' }}</h1>
                         <div style=" margin-top: 8px;">
                            <div style="width: 21px; height: 21px; background: #FB774A; border-radius: 200px; display: inline-flex; justify-content: center; align-items: center;">
                                <div style="width: 9px; height: 9px; background: #fff; border-radius: 200px;"></div>
                            </div>
                            <span style="color: #C2C2C2; font-size: 14px; font-weight: 400; margin-left: 8px;">Total Verified Users</span>
                         </div>
                         <div style="margin-top: 8px;">
                             <v-progress-linear model-value="20" color="#FB774A"></v-progress-linear>
                         </div>
                    </v-col>

                    <v-col cols="12" md="3"  lg="2" style="padding: 26px;  border-radius: 20px; min-width: 250px;">
                         <h1 style="color: #FFFFFF; font-size: 26px; font-weight: 700;">{{ pinia.state.statistics?.total_kyc_verified_users ? numberWithCommas(pinia.state.statistics?.total_kyc_unverified_users):'' }}</h1>
                         <div style=" margin-top: 8px;">
                            <div style="width: 21px; height: 21px; background: red; border-radius: 200px; display: inline-flex; justify-content: center; align-items: center;">
                                <div style="width: 9px; height: 9px; background: #fff; border-radius: 200px;"></div>
                            </div>
                            <span style="color: #C2C2C2; font-size: 14px; font-weight: 400; margin-left: 8px;">Total Unverified Users</span>
                         </div>
                         <div style="margin-top: 8px;">
                             <v-progress-linear model-value="20" color="red"></v-progress-linear>
                         </div>
                    </v-col>

                    <v-col cols="12" md="3"  lg="2" style="padding: 26px;  border-radius: 20px; min-width: 250px;">
                         <h1 style="color: #FFFFFF; font-size: 26px; font-weight: 700;">{{ pinia.state.statistics?.total_kyc_verified_users ? numberWithCommas(pinia.state.statistics?.total_tokens):'' }}</h1>
                         <div style=" margin-top: 8px;">
                            <div style="width: 21px; height: 21px; background: purple; border-radius: 200px; display: inline-flex; justify-content: center; align-items: center;">
                                <div style="width: 9px; height: 9px; background: #fff; border-radius: 200px;"></div>
                            </div>
                            <span style="color: #C2C2C2; font-size: 14px; font-weight: 400; margin-left: 8px;">Total Tokens</span>
                         </div>
                         <div style="margin-top: 8px;">
                             <v-progress-linear model-value="20" color="purple"></v-progress-linear>
                         </div>
                    </v-col>

                  
                </v-row>
            </div>

            <!-- <div class="chart-con"  style="padding: 33px 26px;">
                <ChartsSales/>
            </div> -->
            
            <!-- <div class="table-con"  style="padding: 33px 26px;">
                <TableActivities/>
            </div> -->
        </div>

        <div >

        </div>
    
    </div>
</template>


<script setup>
   import { getStats} from "@/composables/requests/stats"

   const pinia = useStore()

   const get_Stats = async()=>{
    console.log('dfghykbjlkn;lm')

       try{
          const data = await getStats()
          if(data.success){
            console.log(data.data)
            pinia.setStatistics(data.data)
          }
       }catch(e){
          console.log(e)
       }
   }

   const fetch_stats = async()=>{
     if(pinia.state.statistics != null){
        return
     }else{
        await  get_Stats()
     }
   }

   onMounted(()=>{
       fetch_stats()
   })


</script>


<style scoped>

@media (max-width:768px) {

    .card-con{
         padding: 34px 14px !important;
         margin: 0px 14px !important;
    }
    
    .chart-con{
       padding: 24px 14px !important;
    }

    .table-con{
    padding: 24px 16px !important;

    }
}


</style>