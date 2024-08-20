<template>
    <div style="background:  #161D26; min-height: 100vh;">

        <div>
            <div style="padding: 33px 40px;" class="card-con">
                <v-row style="gap: 24px;">

                    <v-col cols="12" md="5"  lg="3" style="background: #12181F;padding: 24px; border-radius: 20px; min-width: 250px;">
                         <h3 style="color: #FFFFFF; font-size: 20px; font-weight: 700;">Total Revenue</h3>
                         <h1 style="color: #FFFFFF; font-size: 26px; font-weight: 700;">
                            {{ totalBalances ?  handleNumApproximation(totalBalances.fiat + totalBalances.crypto ) : '' }} USD
                        </h1>
                         <div style=" margin-top: 10px; gap:10px;">
                            <div v-for="i in 3" style="width: 21px; height: 21px; background: #0CAF60; border-radius: 200px; margin-right: 5px; 
                            display: inline-flex; justify-content: center;align-items: center;">
                                <div style="width: 9px; height: 9px; background: #fff; border-radius: 200px;"></div>
                            </div>
                         </div>
                    </v-col>

                    <v-col cols="12" md="5"  lg="3" style="background: #12181F;padding: 24px; border-radius: 20px; min-width: 250px;">
                         <h3 style="color: #FFFFFF; font-size: 20px; font-weight: 700;">Total TRX Balance</h3>
                         <h1 style="color: #FFFFFF; font-size: 26px; font-weight: 700;">{{ pinia.state.trc_bal ?  handleNumApproximation(pinia.state.trc_bal.balance) : '' }} TRX</h1>
                         <div style=" margin-top: 10px;">
                            <!-- <div style="width: 21px; height: 21px; background: #0CAF60; border-radius: 200px; display: inline-flex; justify-content: center;align-items: center;">
                                <div style="width: 9px; height: 9px; background: #fff; border-radius: 200px;"></div>
                            </div> -->
                            <p style="color: #fff; font-size: 14px; font-weight: 400; margin-left: 8px;">Wallets Address:</p>
                            <div style="text-wrap: wrap; display: flex;align-items: center;" @click="copyToClipboard(pinia.state.trc_wallet_address.address,'TRC')">
                                <span style="color: #C2C2C2; font-size: 14px; font-weight: 400; margin-left: 8px;display: flex;overflow: hidden; text-overflow: ellipsis;white-space: nonwrap;width: 220px;"> 
                                    {{ pinia.state.trc_wallet_address.address }}
                                </span>...
                                <svg style="margin-left: 2px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#888888" d="M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148c-1.126.152-2.037.472-2.755 1.193c-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342c-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27c.127-.948.413-1.856 1.147-2.593s1.639-1.024 2.583-1.152c.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.6 3.6 0 0 0 15.24 2"/><path fill="#888888" d="M6.6 11.397c0-2.726 0-4.089.844-4.936c.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847S21 8.671 21 11.397v4.82c0 2.726 0 4.089-.843 4.936c-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847c-.844-.847-.844-2.21-.844-4.936z"/></svg>

                            </div>
                         </div>
                    </v-col>

                    <v-col cols="12" md="5"  lg="3" style="background: #12181F;padding: 24px; border-radius: 20px; min-width: 250px;">
                         <h3 style="color: #FFFFFF; font-size: 20px; font-weight: 700;">Total BUSD Balance</h3>
                         <h1 style="color: #FFFFFF; font-size: 26px; font-weight: 700;">{{ pinia.state.bep_bal ?  handleNumApproximation(pinia.state.bep_bal.balance) : '' }} BUSD</h1>
                         <div style=" margin-top: 10px;">
                            <p style="color: #fff; font-size: 14px; font-weight: 400; margin-left: 8px;">Wallets Address:</p>
                            <div style="text-wrap: wrap; display: flex;align-items: center;" @click="copyToClipboard(pinia.state.bep_wallet_address.address,'BEP')">
                                <span style="color: #C2C2C2; font-size: 14px; font-weight: 400; margin-left: 8px;display: flex;overflow: hidden; text-overflow: ellipsis;white-space: nonwrap;width: 220px;"> 
                                    {{ pinia.state.bep_wallet_address.address }}
                                </span>...
                                <svg style="margin-left: 2px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#888888" d="M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148c-1.126.152-2.037.472-2.755 1.193c-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342c-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27c.127-.948.413-1.856 1.147-2.593s1.639-1.024 2.583-1.152c.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.6 3.6 0 0 0 15.24 2"/><path fill="#888888" d="M6.6 11.397c0-2.726 0-4.089.844-4.936c.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847S21 8.671 21 11.397v4.82c0 2.726 0 4.089-.843 4.936c-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847c-.844-.847-.844-2.21-.844-4.936z"/></svg>

                            </div>
                         </div>
                    </v-col>

                </v-row>

                <v-row style="gap: 10px; margin: 32px 0px;">
                    <v-col cols="12" md="4"  lg="3" style="padding: 26px; border-radius: 20px; min-width: 250px;">
                         <h1 style="color: #FFFFFF; font-size: 26px; font-weight: 700;">{{ pinia.state.statistics?.total_web3_wallets ?  numberWithCommas(pinia.state.statistics?.total_web3_wallets) : '' }}</h1>
                         <div style=" margin-top: 8px;">
                            <div style="width: 21px; height: 21px; background: #0CAF60; border-radius: 200px; display: inline-flex; justify-content: center;align-items: center;">
                                <div style="width: 9px; height: 9px; background: #fff; border-radius: 200px;"></div>
                            </div>
                            <span style="color: #C2C2C2; font-size: 14px; font-weight: 400; margin-left: 8px;">Total Web3 Wallets</span>
                         </div>
                         <div style="margin-top: 8px;">
                             <v-progress-linear model-value="20" color="#0CAF60"></v-progress-linear>
                         </div>
                    </v-col>

                    <v-col cols="12" md="3"  lg="2" style="padding: 26px; border-radius: 20px; min-width: 250px;">
                         <h1 style="color: #FFFFFF; font-size: 26px; font-weight: 700;">{{  pinia.state.statistics?.total_fiat_wallets ?  numberWithCommas(pinia.state.statistics?.total_fiat_wallets) :'' }}</h1>
                         <div style=" margin-top: 8px;">
                            <div style="width: 21px; height: 21px; background: #ED6167; border-radius: 200px; display: inline-flex; justify-content: center;align-items: center;">
                                <div style="width: 9px; height: 9px; background: #fff; border-radius: 200px;"></div>
                            </div>
                            <span style="color: #C2C2C2; font-size: 14px; font-weight: 400; margin-left: 8px;">Total Fiat Wallets</span>
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

                    <v-col cols="12" md="3"  lg="2" style="padding: 26px;  border-radius: 20px; min-width: 250px;">
                         <h1 style="color: #FFFFFF; font-size: 26px; font-weight: 700;">{{ pinia.state.statistics?.total_kyc_verified_users ? numberWithCommas(pinia.state.statistics?.total_active_tokens):'' }}</h1>
                         <div style=" margin-top: 8px;">
                            <div style="width: 21px; height: 21px; background: orange; border-radius: 200px; display: inline-flex; justify-content: center; align-items: center;">
                                <div style="width: 9px; height: 9px; background: #fff; border-radius: 200px;"></div>
                            </div>
                            <span style="color: #C2C2C2; font-size: 14px; font-weight: 400; margin-left: 8px;">Total Active Tokens</span>
                         </div>
                         <div style="margin-top: 8px;">
                             <v-progress-linear model-value="20" color="orange"></v-progress-linear>
                         </div>
                    </v-col>

                    <v-col cols="12" md="3"  lg="2" style="padding: 26px;  border-radius: 20px; min-width: 250px;">
                         <h1 style="color: #FFFFFF; font-size: 26px; font-weight: 700;">{{ pinia.state.statistics?.total_kyc_verified_users ? numberWithCommas(pinia.state.statistics?.total_inactive_tokens):'' }}</h1>
                         <div style=" margin-top: 8px;">
                            <div style="width: 21px; height: 21px; background: indigo; border-radius: 200px; display: inline-flex; justify-content: center; align-items: center;">
                                <div style="width: 9px; height: 9px; background: #fff; border-radius: 200px;"></div>
                            </div>
                            <span style="color: #C2C2C2; font-size: 14px; font-weight: 400; margin-left: 8px;">Total Inactive Tokens</span>
                         </div>
                         <div style="margin-top: 8px;">
                             <v-progress-linear model-value="20" color="indigo"></v-progress-linear>
                         </div>
                    </v-col>

                  
                </v-row>
            </div>

            <!-- <div class="chart-con"  style="padding: 33px 26px;">
                <ChartsSales/>
            </div> -->
            
            <div class="table-con"  style="padding: 33px 26px;">
                <TableActivities/>
            </div>
        </div>

        <div >

        </div>
    
    </div>
</template>


<script setup>
   import { getStats,getActivities,getBEPBalance,getTRCBalance,getBEPWalletAddress,getTRCWalletAddress,getTotalRevenue} from "@/composables/requests/stats"

   const pinia = useStore()


    const totalBalances = computed(() => {

        return pinia.state.revenue.reduce((totals, item) => {
            const fiatTotal = Object.values(item?.fiat_monthly_revenue).reduce((sum, value) => sum + value, 0);
            const cryptoTotal = Object.values(item?.crypto_monthly_revenue).reduce((sum, value) => sum + value, 0);
            
            totals.fiat += fiatTotal;
            totals.crypto += cryptoTotal;

            return totals;
        }, { fiat: 0, crypto: 0 });

    });

    console.log( totalBalances.value)

   const get_Stats = async()=>{

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

   const get_TRCBalance = async()=>{
      try{
        const data = await getTRCBalance()
        if(data.success){
            pinia.setTrc_bal(data.data)
        }
      }catch(e){
        console.log(e)
      }
   }

   const get_Bep_Balance = async()=>{
      try{
        const data = await getBEPBalance()
        if(data.success){
            pinia.setBep_bal(data.data)
        }
      }catch(e){
        console.log(e)
      }
   }

   const get_Bep_wallet_address = async()=>{
      try{
        const data = await getBEPWalletAddress()
        if(data.success){
            pinia.setBep_wallet_address(data.data)
        }
      }catch(e){
        console.log(e)
      }
   }

   const get_TRC_wallet_address = async()=>{
      try{
        const data = await getTRCWalletAddress()
        if(data.success){
            pinia.setTrc_wallet_address(data.data)
        }
      }catch(e){
        console.log(e)
      }
   }

   const get_TotalRevenue = async()=>{
      try{
        const data = await getTotalRevenue()
        if(data.success){
            pinia.setRevenue(data.data)
        }
      }catch(e){
        console.log(e)
      }
   }



   const fetch_stats = async()=>{
     if(!isEmpty(pinia.state.statistics)){
        return
     }else{
        await  get_Stats()
        
     }
   }

   const fetch_TRCBalance = async()=>{
     if(!isEmpty(pinia.state.trc_bal)){
        return
     }else{
      
        await  get_TRCBalance()
     }
   }
   
    const fetch_Bep_Balance= async()=>{
     if(!isEmpty(pinia.state.bep_bal)){
        return
     }else{
        await  get_Bep_Balance()
     }
    }

    const fetch_totalRevenue= async()=>{
     if(!isEmpty(pinia.state.revenue)){
        pinia.state.revenue
     }else{
        await  get_TotalRevenue()
     }
    }

  
   onMounted(async()=>{
       await Promise.allSettled([
        fetch_stats(),
       fetch_TRCBalance(),
       fetch_Bep_Balance(),
       get_Bep_wallet_address(),
       get_TRC_wallet_address(),
       fetch_totalRevenue()
      ])
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