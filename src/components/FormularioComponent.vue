<template>
    <div class="box-conter">
        <section class="container-formulario">
            <h1 class="texto-principal">Entrar</h1>
            <form>
                <input type="text" placeholder="Email ou número de telefone " class="inputs">
                <input type="text" placeholder="Senha" class="inputs input2">
                <router-link to="/Login">
                    <button class="botao-principal">Entrar</button>
                </router-link>
            </form>
            <div class="container-inferior">
                <div class="box-inferior">
                    <input type="checkbox">
                    <p>Lembre-se de mim</p>
                </div>
                <a>Precisa de ajuda?</a>
            </div>
            <h2 class="texto-inferior">Novo Por aqui? <a>Assine agora</a>.</h2>
            <div>
                <p class="textos">Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.
                    <button type="button" @click="mostrarMais" v-bind:class="{ hide: !saibaMais }" class="text-button">Saiba
                        mais.</button>
                </p>
                <p v-bind:class="{ hide: saibaMais }" class="textos">As informações recolhidas pelo Google reCAPTCHA estão
                    sujeitas à <a class="decoration text-button" href="https://policies.google.com/privacy"
                        target="_blank">Política de Privacidade</a> e <a class="decoration text-button" target="_blank"
                        href="https://policies.google.com/terms
                ">Termos de Uso</a>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões
                    de segurança (não são usadas para exibir anúncios personalizados pelo Google).</p>
            </div>

        </section>
    </div>
</template>


<style scoped>
.hide {
    opacity: 0;
}

.box-conter {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;
}

.container-formulario {
    background-color: rgb(0 0 0 / 0.75);
    padding: 60px 68px 40px 68px;
    width: 450px;
    height: 660px;
    box-sizing: border-box;
    color: white;
}

.texto-principal {
    font-size: 2.25rem
        /* 36px */
    ;
    line-height: 2.5rem
        /* 40px */
    ;
    margin-bottom: 1.25rem
        /* 20px */
    ;
    color: white;
}

.inputs {
    display: block;
    background-color: #333333;
    width: 90%;
    padding: 1rem;
    border-radius: 0.375rem;
    margin-bottom: 1.25rem;
}

.input2 {
    margin-bottom: 2.5rem;
}

.botao-principal {
    display: block;
    background-color: #e50914;
    width: 100%;
    padding: 0.75rem;
    margin: 0 0 1.25rem 0;
    border-radius: 0.375rem;
    font-size: 1rem
        /* 16px */
    ;
    line-height: 1.5rem
        /* 24px */
    ;
    font-weight: 700px;
}

.container-inferior {
    display: flex;
    justify-content: space-between;
}

.box-inferior {
    margin-bottom: 2.5rem
        /* 40px */
    ;
    display: flex;
}

.texto-inferior {
    margin-bottom: 0.75rem
        /* 12px */
}

.textos {
    font-size: 0.875rem
        /* 14px */
    ;
    line-height: 1.25rem
        /* 20px */
    ;
    margin-bottom: 0.75rem;
}

.text-button {
    color: #15009c;
}

.decoration {
    text-decoration: solid;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'FormularioComponent',
    methods: {
        mostrarMais() {
            this.saibaMais = false
        }
    },
    data() {
        return {
            saibaMais: true,

        }
    }
})


</script>

