import { useStore } from "@/stores";

export const baseURL = 'https://crypto-demo-api.inhouse.codes/v1/'
export const baseURL2 = 'http://localhost:3001/'
export const cloudinaryURL = "https://api.cloudinary.com/v1_1/payhospi/upload";
export const cloudinaryAPIKey = "PSlZAFo_ZYa2zBrnfu1KceD64rw";

// const baseURL = ref("http://192.168.1.30:3457"); // https://api.oncall.ng

const scheme = baseURL.includes("https")? "wss" : "ws";

const burl = baseURL.replaceAll("https://","").replaceAll("http://","").replace("/v1","").replace(' ','');

export const websocketUrl = ()=>{
    const pinia = useStore();
    const web = `${scheme}://${burl}ws?user_id=${pinia.state.user?.id}`;
    return web
}