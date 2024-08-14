import { useStore} from "@/stores/index"
import { asyncRequest} from "@/composables/mixins"
import {baseURL} from "@/composables/configs"

export const getPaymentMethods = async(pageNumber)=>{
    const pinia = useStore()
    const url = `${baseURL}payment-methods/get/${pageNumber}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             'x-access-token': `${pinia.state.user?.token}`
        }
    };
    return await asyncRequest(url,options);
}


export const addPaymentMethod = async(payload)=>{
    const pinia = useStore()
    const url = `${baseURL}payment-methods/add`;
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


export const updatePaymentMethod = async(payload,PaymentMethodId)=>{
    const pinia = useStore()
    const url = `${baseURL}payment-methods/update/${PaymentMethodId}`;
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


export const deletePaymentMethod = async(PaymentMethodId)=>{
    const pinia = useStore()
    const url = `${baseURL}payment-methods/remove/${PaymentMethodId}`;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
             'x-access-token': `${pinia.state.user?.token}`
        },
    };
    return await asyncRequest(url,options);
}