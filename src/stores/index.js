// import { defineStore } from 'pinia'

// export const useStore = defineStore('main', {
//   state: () => {
//     return {
//       someState: 'hello pinia',
//     }
//   },
//   persist: {
//     storage: persistedState.localStorage,
//   },
// })

import { defineStore } from 'pinia'

export const useStore = defineStore('demoAdminApp', () => {

  const state = reactive({
    current_page:'home',
    user: null,
    isAuthenticated: false,
    statistics:null,
    banners:[],
    countries:[],
    FAQs:[],
    broadcasts:[],
    paymentMethod:[],
    disputes:[],
    activities:[],
    trc_bal:null,
    bep_bal:null,
    trc_wallet_address:null,
    bep_wallet_address:null,
    token:null,
    pin: null,
    isPinSet: false,
    selected_dispute_status:'all',
  });

  const setUser = (payload) => {
    state.user = payload
    state.isAuthenticated = true
  }

  const setStatistics = (payload) => {
    state.statistics = payload
  }

  const setBannersItem = (payload) => {
    state.banners = payload
  }
  const setCountries = (payload) => {
    state.countries = payload
  }
  const setFAQs = (payload) => {
    state.FAQs = payload
  }
  const setBroadcasts = (payload) => {
    state.broadcasts = payload
  }
  const setPaymentMethod= (payload) => {
    state.paymentMethod = payload
  }
  const setDispute = (payload) => {
    state.disputes = payload
  }
  const setActivities = (payload) => {
    state.activities = payload
  }
  const setBep_bal = (payload) => {
    state.bep_bal = payload
  }
  const setTrc_bal = (payload) => {
    state.trc_bal = payload
  }
  const setBep_wallet_address= (payload) => {
    state.bep_wallet_address= payload
  }
  const setTrc_wallet_address= (payload) => {
    state.trc_wallet_address= payload
  }

  // const setPin = (payload) => {
  //   pin.value = payload
  //   isPinSet.value = true
  // }

  // const verifyPin = (inputPin) => {
  //   return inputPin === pin.value
  // }

  // const clearUser = () => {
  //   user.value = null
  //   isAuthenticated.value = false
  // }

  const clearUser =()=>{
    state.user= null;
    state.isAuthenticated= false;
    state.statistics=null;
    state.banners=null;
    state.countries=null;
    state.FAQs=[];
    state.broadcasts=null;
    state.paymentMethod=[];
    state.disputes = []
    state.activities = []
    state.trc_bal = null
    state.bep_bal = null
    state.trc_wallet_address = null
    state.bep_wallet_address = null

    navigateTo("/")

  }

  return {
    state,
    clearUser,
    setUser,
    setStatistics,
    setBannersItem,
    setCountries,
    setFAQs,
    setBroadcasts,
    setPaymentMethod,
    setDispute,
    setActivities,
    setTrc_bal,
    setBep_bal,
    setBep_wallet_address,
    setTrc_wallet_address
    
    
  }

}, {persist: {
    storage: persistedState.localStorage,
  }},
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
