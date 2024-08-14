import { useStore} from "@/stores/index"
import { getBanners } from "@/composables/requests/banners"
import { getCountries} from "@/composables/requests/country"
import { getFAQs } from "@/composables/requests/FAQs"
import { getBroadcasts } from "@/composables/requests/broadcast"
import { getPaymentMethods } from "@/composables/requests/payment"

export const get_banner = async()=>{
    const pinia = useStore()
    const banner_page_number = 1

    try{
        const data = await getBanners(banner_page_number)

        if(data.success){
            pinia.setBannersItem(data.data.result)
        }else{

        }

    }catch(e){
        console.log(e)
    }

}

export const get_countries = async()=>{
    const pinia = useStore()
    const page_number = 1

    try{
        const data = await getCountries(page_number)

        if(data.success){
            pinia.setCountries(data.data.result)
        }else{

        }

    }catch(e){
        console.log(e)
    }

}

export const get_FAQs = async()=>{
    
    const pinia = useStore()
    const page_number = 1


    try{
        const data = await getFAQs(page_number)

        if(data.success){
            pinia.setFAQs(data.data.result)
        }else{

        }

    }catch(e){
        console.log(e)
    }

}

export const get_broadcast = async()=>{
    
    const pinia = useStore()
    const page_number = 1


    try{
        const data = await getBroadcasts(page_number)

        if(data.success){
            pinia.setBroadcasts(data.data.result)
        }else{

        }

    }catch(e){
        console.log(e)
    }

}

export const get_paymentMethod = async()=>{
    
    const pinia = useStore()
    const page_number = 1


    try{
        const data = await getPaymentMethods(page_number)

        if(data.success){
            pinia.setPaymentMethod(data.data?.result)
        }else{

        }

    }catch(e){
        console.log(e)
    }

}