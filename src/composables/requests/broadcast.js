import { useStore} from "@/stores/index"
import { asyncRequest} from "@/composables/mixins"
import {baseURL} from "@/composables/configs"

export const getBroadcasts = async(pageNumber)=>{
    const pinia = useStore()
    const url = `${baseURL}broadcast/${pageNumber}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             'x-access-token': `${pinia.state.user?.token}`
        }
    };
    return await asyncRequest(url,options);
}


export const addBroadcast = async(payload)=>{
    const pinia = useStore()
    const url = `${baseURL}broadcast`;
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


export const updateBroadcast = async(payload,broadcastId)=>{
    const pinia = useStore()
    const url = `${baseURL}broadcast/${broadcastId}`;
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


export const deleteBroadcast = async(broadcastId)=>{
    const pinia = useStore()
    const url = `${baseURL}broadcast/${broadcastId}`;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
             'x-access-token': `${pinia.state.user?.token}`
        },
    };
    return await asyncRequest(url,options);
}