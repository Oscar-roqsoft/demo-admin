
<template>

    <div  style="background:  #161D26; min-height: 100vh; overflow-y: scroll;">

        <div style="padding: 33px 26px;" class="card-con">
            <v-row>
                <v-col style="padding: 0px 24px;" class="card-inner">
                    <h1 class="card-title" style="color: #FFFFFF; font-size: 24px; font-weight: 700; margin-bottom: 40px;"> User Details - Smauel Badman </h1>
                    <v-row> 
                        <v-col v-for="i in 4" class="card-body">
                            <div style="gap:10px !important; height: 100px; min-width: 268px; border-radius: 20px ;padding: 21px; display: flex; justify-content: space-between; background-image: url('/bg.jpeg'); background-size: cover;">
                                <div class="d-flex " style="">
                                    <div class="glass-box">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="vuesax/linear/book">
                                            <g id="book">
                                            <path id="Vector" d="M5.83325 29.9999V11.6666C5.83325 4.99992 7.49992 3.33325 14.1666 3.33325H25.8333C32.4999 3.33325 34.1666 4.99992 34.1666 11.6666V28.3333C34.1666 28.5666 34.1666 28.7999 34.1499 29.0333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path id="Vector_2" d="M10.5833 25H34.1666V30.8333C34.1666 34.05 31.5499 36.6667 28.3333 36.6667H11.6666C8.44992 36.6667 5.83325 34.05 5.83325 30.8333V29.75C5.83325 27.1333 7.96659 25 10.5833 25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path id="Vector_3" d="M13.3333 11.6667H26.6666" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path id="Vector_4" d="M13.3333 17.5H21.6666" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            </g>
                                        </svg>
                                    </div>

                                    <div style="margin-left: 9px;">
                                        <h1 style="font-size: 24px; color: #FFFFFF; font-weight: 800;">15</h1>
                                        <p style="font-size: 14px; color: #FFFFFF; font-weight: 600;">Total Deposits</p>
                                    </div>
                                </div>

                                <div class="glass-box2">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="vuesax/linear/eye">
                                        <g id="eye">
                                        <path id="Vector" d="M10.3866 7.99995C10.3866 9.31995 9.31995 10.3866 7.99995 10.3866C6.67995 10.3866 5.61328 9.31995 5.61328 7.99995C5.61328 6.67995 6.67995 5.61328 7.99995 5.61328C9.31995 5.61328 10.3866 6.67995 10.3866 7.99995Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path id="Vector_2" d="M8.00002 13.5133C10.3534 13.5133 12.5467 12.1266 14.0734 9.72665C14.6734 8.78665 14.6734 7.20665 14.0734 6.26665C12.5467 3.86665 10.3534 2.47998 8.00002 2.47998C5.64668 2.47998 3.45335 3.86665 1.92668 6.26665C1.32668 7.20665 1.32668 8.78665 1.92668 9.72665C3.45335 12.1266 5.64668 13.5133 8.00002 13.5133Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        </g>
                                    </svg>
                                    <span style="font-size: 10px; font-weight: 700; margin-left: 4px;">view</span>
                                </div>

                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>

        <div class="card-bal" style="padding: 33px 26px;">
            <CardsBal/>
        </div>

        <div class="card-bal" style="padding: 33px 26px;">
            <CardsFiatbal/>
        </div>
        <!-- <div class="card-bal" style="padding: 33px 26px;">
            <CardsNaira/>
        </div> -->


        <div class="btn-group" style="padding: 30px 26px;">
            <div style="display: flex;  margin: 0 auto; gap: 10px; flex-wrap: wrap;">
                <div  class="d-flex " style="padding: 0 0px;">
                       <UserActionsAddbal/>
                </div>
                <div  class="d-flex " >
                       <UserActionsSubtractbal/>
                </div>
                <div  class="d-flex " >
                       <UserActionsBan/>
                </div>
                <div  class="d-flex " >
                        <v-btn style="background: #4147D5; text-transform: capitalize; padding: 12px 25px; min-height: 48px; max-width: 206px; color: #FFFFFF;
                         display: flex; align-items: center; border-radius: 15px;">

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="vuesax/linear/login">
                                <g id="login">
                                <path id="Vector" d="M8.90039 7.56023C9.21039 3.96023 11.0604 2.49023 15.1104 2.49023H15.2404C19.7104 2.49023 21.5004 4.28023 21.5004 8.75023V15.2702C21.5004 19.7402 19.7104 21.5302 15.2404 21.5302H15.1104C11.0904 21.5302 9.24039 20.0802 8.91039 16.5402" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path id="Vector_2" d="M2 12H14.88" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path id="Vector_3" d="M12.6504 8.6499L16.0004 11.9999L12.6504 15.3499" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                </g>
                            </svg>
                            <span style="font-size: 14px; font-weight: 400; line-height: 21px; margin-left: 9px; letter-spacing: normal;">Login as User</span>

                        </v-btn>
                </div>

                <div  class="d-flex " >
                        <v-btn style="background: #206060; text-transform: capitalize; padding: 12px 25px; min-height: 48px; max-width: 175px; color: #FFFFFF;
                         display: flex; align-items: center; border-radius: 15px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="vuesax/linear/notification-bing">
                                <g id="notification-bing">
                                <path id="Vector" d="M12 6.43994V9.76994" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                                <path id="Vector_2" d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                                <path id="Vector_3" d="M15.3299 18.8198C15.3299 20.6498 13.8299 22.1498 11.9999 22.1498C11.0899 22.1498 10.2499 21.7698 9.64992 21.1698C9.04992 20.5698 8.66992 19.7298 8.66992 18.8198" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                                </g>
                                </g>
                            </svg>
                            <span style="font-size: 14px; font-weight: 400; line-height: 21px; margin-left: 9px; letter-spacing: normal;">Notifications</span>

                        </v-btn>
                </div>
            </div>
        </div>

        <div style="padding: 33px 26px;">
            <Profile/>
        </div>
                

    </div>

</template>


<script setup>

const bal_info = [
    {}
]

</script>

<style scoped>

    .glass-box{
        width: 55px;
        height: 55px;
        background: rgba(255, 255, 255, 0.1); /* White with 10% opacity */
        border-radius: 10px; /* Rounded corners */
        backdrop-filter: blur(5px); /* Frosted glass effect */
        -webkit-backdrop-filter: blur(5px); /* For Safari */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff; /* White text */
    }

    .glass-box2{
        width: 54px;
        height: 24px;
        background: rgba(255, 255, 255, 0.1); /* White with 10% opacity */
        border-radius: 3px; /* Rounded corners */
        backdrop-filter: blur(5px); /* Frosted glass effect */
        -webkit-backdrop-filter: blur(5px); /* For Safari */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff; /* White text */
    }


    @media (max-width:768px) {
        .card-title{
            margin-bottom: 16px !important;
        }
        .card-body{
            padding: 5px !important;
        }

        .card-con{
            padding: 44px 16px !important;
            margin: 0px 16px !important;
        }
        .card-inner{
            padding: 0px !important;
        }

        .card-bal{
            padding: 24px 16px !important;
        }
        .btn-group{
            padding: 24px 16px !important;
        }
        

        .chart-con{
        padding: 24px 16px !important;
        }

        .table-con{
        padding: 24px 16px !important;

        }


    }

</style>