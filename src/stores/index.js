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
    banners:null,
    countries:null,
    FAQs:[],
    broadcasts:null,
    paymentMethod:[],
    token:null,
    pin: null,
    isPinSet: false,
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

  return {
    state,
    setUser,
    setStatistics,
    setBannersItem,
    setCountries,
    setFAQs,
    setBroadcasts,
    setPaymentMethod
    
  }

}, {persist: {
    storage: persistedState.localStorage,
  }},
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}