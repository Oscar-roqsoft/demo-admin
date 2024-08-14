import { useStore} from "@/stores/index"
import { asyncRequest} from "@/composables/mixins"
import {baseURL} from "@/composables/configs"

export const getCountries = async(pageNumber)=>{
    const pinia = useStore()
    const url = `${baseURL}country/all/${pageNumber}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             'x-access-token': `${pinia.state.user?.token}`
        }
    };
    return await asyncRequest(url,options);
}


export const addCountries = async(payload)=>{
    const pinia = useStore()
    const url = `${baseURL}country`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
             'x-access-token': `${pinia.state.user?.token}`
        },
        body:JSON.stringify(payload)
    };
    return await asyncRequest(url,options);
}


export const updateCountry = async(payload,countryId)=>{
    const pinia = useStore()
    const url = `${baseURL}app-banner/${countryId}`;
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
             'x-access-token': `${pinia.state.user?.token}`
        },
        body:JSON.stringify(payload)
    };
    return await asyncRequest(url,options);
}


export const deleteCountry = async(countryId)=>{
    const pinia = useStore()
    const url = `${baseURL}app-banner/${countryId}`;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
             'x-access-token': `${pinia.state.user?.token}`
        },
    };
    return await asyncRequest(url,options);
}

