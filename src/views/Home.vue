<template>
  <!--          BACKGROUND       -->
  <section class="principal-section" >
    <img src="../assets/bg-tela-inicial.jpg" class="imagem-fundo">
  </section>
  <router-link to="/"><img src="../assets/logo.png" alt="" class="logo"></router-link>
  <!-- Componentes   -->
  <FormularioComponent/>
  <FooterComponent/>
  
  
</template>

<style scoped>
.principal-section{
width: 100%;
height: 100vh;
background-color: black;
position: absolute;
z-index: -1;
}
.imagem-fundo{
  opacity: 0.4;
  position: absolute;
  z-index: -2;
  }
  .logo{
    width: 11rem;
    padding-top: 1.25rem;
    margin-left: 3rem;
  }
</style>

<script  lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import FormularioComponent from '../components/FormularioComponent.vue'
import FooterComponent from '../components/FooterHomeComponent.vue'

export default defineComponent({
  name:'Home',
  components:{
    FormularioComponent,
    FooterComponent
  }
})
</script>

