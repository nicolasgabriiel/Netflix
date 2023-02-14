<template>
    <section class="formulario">
        <h1>Entrar</h1>
        <form>
            <input type="text">
            <input type="text">
            <button>Entrar</button>
        </form>
        <div>
            <div>

            </div>
            <a>Precisa de ajuda?</a>
        </div>
        <h2>Novo Por aqui? <a>Assine agora</a>.</h2>
        <div>
            <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <button type="button">Saiba mais.</button></p>
            <p class="hide">As informações recolhidas pelo Google reCAPTCHA estão sujeitas à <a>Política de Privacidade</a> e <a>Termos de Uso</a>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).</p>
        </div>
        
    </section>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default  defineComponent({
    name: 'FormularioComponent',
})
   

</script>

<style scoped>
.hide{
    display: none;
}
</style>
