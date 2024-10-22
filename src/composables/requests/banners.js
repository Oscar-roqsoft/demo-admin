import { useStore} from "@/stores/index"
import { asyncRequest} from "@/composables/mixins"
import {baseURL} from "@/composables/configs"


// export const getBanners = async(pageNumber)=>{

//     const pinia = useStore()
//     const url = `${baseURL}app-banner/${pageNumber}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//              'x-access-token': `${pinia.state.user?.token}`
//         }
//     };
//     return await asyncRequest(url,options);
// }

export const getBanners = async(pageNumber) =>{
    const pinia = useStore()
    const data = await fetch(`${baseURL}app-banner/all/${pageNumber}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json());
    return data
}


export const addBanners = async(payload)=>{
    const pinia = useStore()
    const url = `${baseURL}app-banner`;
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

export const updateBanners = async(payload,bannerId)=>{
    const pinia = useStore()
    const url = `${baseURL}app-banner/${bannerId}`;
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

export const deleteBanners = async(bannerId)=>{
    const pinia = useStore()
    const url = `${baseURL}app-banner/${bannerId}`;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
             'x-access-token': `${pinia.state.user?.token}`
        },
    };
    return await asyncRequest(url,options);
}



