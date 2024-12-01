<template>
    <div>
        <h1 class="card-title" style="color: #FFFFFF; font-size: 18px; font-weight: 700; margin-bottom: 14px; margin-left: 10px;">Fiat balances </h1>

        <v-row>
            
            <v-col v-for="i in 4" class="card-inner" style="padding: 10px 24px;">
                <div style="min-width: 220px; min-height: 101px;padding: 24px; border-radius: 20px;
                    display: flex; justify-content: space-between; align-items: center; background: #12181F;">
                    <div class="d-flex">
                       <img style="width: 45px;border-radius: 2000px;" src="/icon.png"/>
                       <div class="ms-2">
                            <p style="color: #A4A8AB; font-size: 13px; font-weight: 400;">Bitcoin</p>
                            <h1 style="color: #FFF; font-size: 16px; font-weight: 700;">BTC</h1>
                       </div>

                    </div>

                    <div>
                        <p style="color: #A4A8AB; font-size: 13px; font-weight: 400;">1200 BTC</p>
                        <h1 style="color: #FFF; font-size: 16px; font-weight: 700;">$34,569</h1>
                    </div>

                </div>
            </v-col>
        </v-row>
    </div>
</template> 


<style scoped>

@media (max-width:768px) {
    .card-title{
        margin-bottom: 24px !important;
    }
    .card-inner{
        padding: 5px 10px !important;
    }
    
}

</style>