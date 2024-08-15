import { useStore} from "@/stores/index"
import { asyncRequest} from "@/composables/mixins"
import {baseURL} from "@/composables/configs"

export const getDisputes = async(disputeStatus,pageNumber)=>{
    const pinia = useStore()
    const url = `${baseURL}p2p-disputes/fetch-disputes/${disputeStatus}/${pageNumber}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             'x-access-token': `${pinia.state.user?.token}`
        }
    };
    return await asyncRequest(url,options);
}

export const changeDisputeStatus = async(payload)=>{
    const pinia = useStore()
    const url = `${baseURL}p2p-order/change-dispute-status`;
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