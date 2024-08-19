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

export const getActivities = async()=>{
    const pinia = useStore()
    const url = `${baseURL}admin/activities`;
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


export const getTRCBalance = async(token)=>{
    const pinia = useStore();
    const url = `${baseURL}web3/token-balance/trc20/TRX`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        }
    };
    return await asyncRequest(url,options);
}


export const getBEPBalance = async(token)=>{
    const pinia = useStore();
    const url = `${baseURL}web3/token-balance/bep20/BUSD`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        }
    };
    return await asyncRequest(url,options);
}


export const getBEPWalletAddress = async()=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}web3/wallet-address/bep20`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        }
    }).then(res => res.json());
    return data
}

export const getTRCWalletAddress = async()=>{
    const pinia = useStore();
    const data = await fetch(`${baseURL}web3/wallet-address/trc20`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.token}`
        }
    }).then(res => res.json());
    return data
}