import { useStore} from "@/stores/index"
import { asyncRequest} from "@/composables/mixins"
import {baseURL} from "@/composables/configs"




export const uploadUserFile = async (formdata)=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}file/upload`, {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/json',
            'x-access-token' : `${pinia.state.user?.token}`
        },
        body: formdata,
    }).then(res => res.json());
    return data
}