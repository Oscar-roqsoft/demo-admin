<template>
    <v-app>

        <div class="bg"  style="font-family: Poppins; min-height: 100vh !important; width: 100vw;">
            <KeepAlive>
    
                <div class="d-flex" style="display: flex; background: #12181F; ">
                    
                    <div class="d-none d-md-block" style="width: 350px; background: #12181F; ">
                       <Sidebar :drawer_="drawer"/>
                    </div>
    
                    <div style="width: 100%;">
                        <MainHeader @openDrawer="v => drawer = v" class=""/>
                        <div>
                            <slot />
                        </div>
                    </div>
                </div>
            </KeepAlive>
        </div>
    </v-app>
</template>

<script setup>

   const router = useRoute()
   const pinia = useStore()
    
   const drawer = ref(false)
   console.log(drawer.value)

   if(router.path.includes('/') && pinia.state.isAuthenticated){
    navigateTo('/dashboard')
    }else{
        navigateTo('/')
    }

</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap') */

</style>