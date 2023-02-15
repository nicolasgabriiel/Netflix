<template>
    <div class="conter w-full mt-8">
        <section class="bg-black/75 p-5px w-128 h-40 box-border text-white">
            <h1 class="text-4xl text-white mb-5">Entrar</h1>
            <form>
                <input type="text" placeholder="Email ou número de telefone " 
                class="block bg-[#333333] w-full p-4 mb-5 rounded-md">
                <input type="text" placeholder="Senha"
                class="block bg-[#333333] w-full p-4 rounded-md mb-10">
                <router-link to="/Login">      
                    <button class="block bg-[#E50914] w-full p-3 mb-5 rounded-md text-base font-bold"
                    >Entrar</button>
                </router-link>  
            </form>
            <div class="flex justify-between">
                <div class="flex mb-10">
                    <input type="checkbox">
                    <p>Lembre-se de mim</p>
                </div>
                <a>Precisa de ajuda?</a>
            </div>
            <h2 class="mb-3">Novo Por aqui? <a>Assine agora</a>.</h2>
            <div>
                <p class="text-sm mb-3">Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. 
                    <button type="button" @click="mostrarMais" v-bind:class="{hide: !saibaMais}" class="text-[#15009C]">Saiba mais.</button>
                </p>
                <p  v-bind:class="{hide: saibaMais}" class="text-sm">As informações recolhidas pelo Google reCAPTCHA estão sujeitas à <a class="decoration-solid text-[#15009C]">Política de Privacidade</a> e <a class="decoration-solid text-[#15009C]">Termos de Uso</a>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).</p>
            </div>
            
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default  defineComponent({
    name: 'FormularioComponent',
    methods:{
        mostrarMais(){
            this.saibaMais = false   
        }
    },
    data(){
        return{
            saibaMais: true,

        }
    }
})
   

</script>

<style scoped>
.hide{
    opacity: 0;
}
.conter{
    display: flex;
    justify-content: center;
}
.formulario{
    background: white;
    padding: 60px 68px 40px 68px;
}
</style>
