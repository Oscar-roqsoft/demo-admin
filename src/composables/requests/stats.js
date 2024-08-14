import { useStore} from "@/stores/index"
import { asyncRequest} from "@/composables/mixins"
import {baseURL} from "@/composables/configs"


export const getStats = async()=>{
    const pinia = useStore()
    const url = `${baseURL}admin/stats`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             'x-access-token': `${pinia.state.user?.token}`
        }
    };
    return await asyncRequest(url,options);
}


// export const getStats = async()=>{
//     const pinia = useStore()
//     const data = await fetch(`${baseURL}admin/stats`, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json', 'x-access-token': `${pinia.state.user?.token}` },
//     }).then(res => res.json());
//     return data
// }