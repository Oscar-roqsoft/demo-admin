<template>

    <div style="background:  #161D26; min-height: 100vh;">

        <div>
            <div style="padding: 33px 26px;" class="heading-con">
                <v-row>

                    <v-col style="padding:16px 26px;" class="d-flex justify-space-between inner-heading">
                         <h1 style="color: #FFFFFF; font-size: 24px; font-weight: 700;"> All Users</h1>
                         <SendNotification/>
                          
                    </v-col>

                </v-row>
             </div>
                
            <div  style="padding: 33px 26px; min-height: 200px;" class="section-con">
                <v-row>
                    <v-col cols="12" md="7"  lg="9" >
                        <ChartsSales/>
                    </v-col>

                    <v-col cols="12" md="4" lg="3" style="height: 100%;">
                        <h1 class="indicator-title" style="color: #FFFFFF; font-size: 16px; font-weight: 600; margin-top: 40px;">Country Registrations</h1>
                        <div style="display: flex; justify-content: center;align-items: center;">

                            <v-row class="position-relative indicator-con"  style="display: flex;align-items: center;gap: 0px; margin-top: 20px;">
                                <v-col cols="6" class="position-relative indicator" style="bottom: 32px; left: 10px;">
                                    
                                    <div  class="position-absolute one">
                                        <v-progress-circular
                                        color="#FFBA69"
                                        model-value="20"
                                        :size="130"
                                        ></v-progress-circular>
                                    </div>

                                    <div  class="position-absolute two">
                                        <v-progress-circular
                                        color="#01F1E3"
                                        model-value="50"
                                        :size="110"
                                        ></v-progress-circular>
                                    </div>

                                    <div  class="position-absolute three">
                                        <v-progress-circular
                                        color="#8676FF"
                                        model-value="60"
                                        :size="90"
                                        ></v-progress-circular>
                                    </div>

                                    <div  class="position-absolute four">
                                        <v-progress-circular
                                        color="#FF708B"
                                        model-value="80"
                                        :size="70"
                                        ></v-progress-circular>
                                    </div>

                                </v-col>

                                <v-col cols="6" class="position-relative indicator-text" style="right: 10px;">
                                    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 50px;">
                                        <div v-for="i in 4" style="margin-bottom: 4px;">
                                            <v-progress-circular
                                            color="#FFBA69"
                                            model-value="100"
                                            size="16"
                                            ></v-progress-circular>
                                            <span style="color: #FFFFFF; font-size: 16px;margin-left: 8px; font-weight: 600;">Nigeria<span style="color: #C2C2C2; font-size: 14px; font-weight: 400;"> 70%</span></span>
                                        </div>
                                    </div>

                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                </v-row>
            </div>

            <div class="table-con" style="padding: 33px 26px; padding-top: 0px;">
                <TableUsers/>
            </div>
        </div>
        
    </div>

</template>


<style scoped>
.two .v-progress-circular {
  top:10px;
  left:10px;
}
.three .v-progress-circular {
  top: 20px;
  left: 20px;
}
.four .v-progress-circular {
  top: 30px;
  left: 30px;
}

.position-absolute :deep(.v-progress-circular__underlay){
    color:azure !important;
    stroke:#212A36 !important;
}

@media  (max-width: 999px) {
    .indicator-con{
        margin-top: 10px !important;
    }
    .indicator-title{
        margin-top: 10px !important;
        margin-left: 10px;
    }
    .indicator{
        /* right: 40px !important; */
        bottom: 70px !important;
    }
    .indicator-text{
        right: 60px !important;
        top: -30px;
    }
    .inner-heading{
        padding: 0px 16px !important;
    }
    .heading-con{
        padding: 33px 16px !important;
    }
    .section-con{
       padding: 24px 16px !important;
    }

    .table-con{
    padding: 24px 16px !important;

    }
}

</style>