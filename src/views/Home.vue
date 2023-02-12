<template>
  <!--          BACKGROUND       -->
  <section class="w-full h-128 bg-black absolute z-0" >
    <img src="../assets/bg-tela-inicial.jpg" class="absolute opacity-40">
  </section>
  <router-link to="/"><img src="../assets/logo.png" alt="" class="w-44 pt-5 ml-12"></router-link>
  <!-- Componentes   -->
  <FormularioComponent/>
  
  
</template>

<script  lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import FormularioComponent from '../components/FormularioComponent.vue'

export default defineComponent({
  name:'Home',
  components:{
    FormularioComponent
  }
})
</script>

s