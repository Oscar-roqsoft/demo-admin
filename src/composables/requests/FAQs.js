import { useStore} from "@/stores/index"
import { asyncRequest} from "@/composables/mixins"
import {baseURL} from "@/composables/configs"

export const getFAQs = async(pageNumber)=>{
    const pinia = useStore()
    const url = `${baseURL}faq/${pageNumber}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             'x-access-token': `${pinia.state.user?.token}`
        }
    };
    return await asyncRequest(url,options);
}


export const addFAQs = async(payload)=>{
    const pinia = useStore()
    const url = `${baseURL}faq`;
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


export const updateFAQs = async(payload,faqId)=>{
    const pinia = useStore()
    const url = `${baseURL}faq/${faqId}`;
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


export const deleteFAQs = async(faqId)=>{
    const pinia = useStore()
    const url = `${baseURL}faq/${faqId}`;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
             'x-access-token': `${pinia.state.user?.token}`
        },
    };
    return await asyncRequest(url,options);
}
