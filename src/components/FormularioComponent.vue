<template>
    <div class="conter w-full mt-8">
        <section class="bg-black/75 p-5px w-128 h-40 box-border text-white">
            <h1 class="text-4xl text-white mb-5">Entrar</h1>
            <form>
                <input type="text" placeholder="Email ou número de telefone " 
                class="block bg-[#333333] w-full p-4 mb-5 rounded-md">
                <input type="text" placeholder="Senha"
                class="block bg-[#333333] w-full p-4 rounded-md mb-7">
                <button class="block bg-[#E50914] w-full p-4 mb-5 rounded-md"
                >Entrar</button>
            </form>
            <div>
                <div>
                    <div>

                    </div>
                    <p>Esqueceu a senha?</p>
                </div>
                <a>Precisa de ajuda?</a>
            </div>
            <h2>Novo Por aqui? <a>Assine agora</a>.</h2>
            <div>
                <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <button type="button">Saiba mais.</button></p>
                <p class="hide">As informações recolhidas pelo Google reCAPTCHA estão sujeitas à <a>Política de Privacidade</a> e <a>Termos de Uso</a>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).</p>
            </div>
            
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default  defineComponent({
    name: 'FormularioComponent',
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
