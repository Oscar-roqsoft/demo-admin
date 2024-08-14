<template>
    <v-card flat style="background: transparent !important;">
      <v-card-title class="d-flex align-center pe-2 flex-wrap gap-2">
        <span style="color: #FFFFFF; font-size: 16px; font-weight: 600;">Recent Activities</span>
        <v-spacer></v-spacer>

        <!-- <v-btn elevation="0"  class=" me-3 text-capitalize font-weight-bold border activity-btn" 
        style="width: 180px;height: 50px;font-size:16px !important;font-weight: 500 !important; letter-spacing: 0px; border-radius: 16px !important; background:   #12181F ;
         display: flex; justify-content: space-between !important; align-items: center;">

            <span style="color: #C2C2C2; font-size: 14px; font-weight: 400;">Last 30 Days</span>

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

        </v-btn> -->

        <!-- <v-btn elevation="0"  class=" me-3 text-capitalize font-weight-bold border activity-btn" 
        style="width: 160px;height: 50px;font-size:16px !important;font-weight: 500 !important; letter-spacing: 0px; border-radius: 16px !important; background:   #12181F ;
         display: flex; justify-content: space-between !important; align-items: center;">

            <span style="color: #C2C2C2; font-size: 14px; font-weight: 400;">Aug 2022</span>

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

        </v-btn> -->
  
        <v-text-field
          class="custom-text-field"
          v-model="search"
          density="compact"
          placeholder="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
          style="min-width: 180px;"
        ></v-text-field>
      </v-card-title>
  

      <div class="table">
        <v-data-table v-model:search="search" :items="items" style="background: transparent; color: #FFFFFF;">
          <template v-slot:header.stock>
            <div class="text">Coin</div>
          </template>
    
          <template v-slot:item.image="{ item }">
            <v-card class="my-2" elevation="0" rounded style="background:transparent; border-radius: 200px;width: 32px; height: 32px; text-transform: capitalize;">
              <v-img
                :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
                height="100%"
                width="100%"
              ></v-img>
            </v-card>
          </template>
    
         
  
          <template v-slot:item.transaction="{ item }">
           <div style="min-width: 100px;">

             <h1 style="color:#FFFFFF;font-size: 16px;font-weight: 600;">{{item.transaction.price}}</h1>
             <p style="color:#A4A8AB; font-size: 12px; font-weight: 400; text-transform: capitalize">{{item.transaction.title}}</p>
             
           </div>
          </template>

          <template v-slot:item.date="{ item }">
           <div style="min-width: 100px;">

             {{ item.date }}
           </div>
          </template>
<!--   
          <template v-slot:item.rating="{ item }">
            <v-rating
              :model-value="item.rating"
              color="orange-darken-2"
              density="compact"
              size="small"
              readonly
            ></v-rating>
          </template> -->
    
          <template v-slot:item.stock="{ item }">
            <div class="text">
              <v-chip
                :color="item.stock ? 'green' : 'red'"
                :text="item.stock ? 'completed' : 'declined'"
                class="text-uppercase"
                size="small"
                label
              ></v-chip>
            </div>
          </template>
        </v-data-table>
      </div>
    </v-card>
</template>


<script setup>

    const search = ref('');
    const items = [
    {
        image: '1.png',
        transaction:{
            price:8989,
            title: 'swapped',
        },
        id:'gkcvhjnkn;hiuyh',
        date:'march 24th',
        stock: true,
        fees: 5,
    },

    {
        image: '2.png',
        transaction:{
            price:8989,
            title: 'swapped',
        },
        id:'gkcvhjnkn;hiuyh',
        date:'march 24th',
        stock: false,
        fees: 4,
    },

    {
        image: '3.png',
        transaction:{
            price:8989,
            title: 'swapped',
        },
        id:'gkcvhjnkn;hiuyh',
        date:'march 24th',
        stock: true,
        fees: 3,
    },
    {
        image: '4.png',
        transaction:{
            price:8989,
            title: 'swapped',
        },
        id:'gkcvhjnkn;hiuyh',
        date:'march 24th',
        stock: true,
        fees: 4,
    },

    {
        image: '5.png',
        transaction:{
            price:8989,
            title: 'swapped',
        },
        id:'gkcvhjnkn;hiuyh',
        date:'march 24th',
        stock: false,
        fees: 4,
    }

    ];

    const filteredItems = computed(() => {
    return items.filter(item => item.name.toLowerCase().includes(search.value.toLowerCase()));
    });

</script>

<style scoped>
.activity-btn :deep(.v-btn__content){
    width: 100% !important;
    justify-content: space-between !important;
}

.custom-text-field :deep(.v-field) {
    background-color: #12181F !important; /* Ensures the inner input field does not override the background color */
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
    .custom-text-field :deep(.v-field__overlay) {
    background: #12181F;
    }

    .table :deep(thead){
        background-color: #12181F ;
    }
    .table :deep(.v-data-table-header__content:hover){
        color:#fff;
    }
</style>