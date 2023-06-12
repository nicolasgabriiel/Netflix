<template>
  <div>
    <HeaderPaginaInicial/>
    <CorpoPaginaInicial/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderPaginaInicial from '../components/pagina-inicial/headerpaginainicial.vue'
import CorpoPaginaInicial from '../components/pagina-inicial/corpopaginainicial.vue'

export default defineComponent({
  name: 'Bem-Vindo-Page',
  methods:{
  },
  components:{
    HeaderPaginaInicial,
    CorpoPaginaInicial
  }
});
</script>


