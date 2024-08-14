import {baseURL} from "@/composables/configs"

export const login = async(payload)=>{
    const data = await fetch(`${baseURL}auth/sign-in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    }).then(res => res.json());
    return data
}