<template>
    <main>
        <div class="container-filme"></div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    name: 'Corpo-da-Página-Inicial',
    async mounted(){
      try { 
        const listaIdsFilmes = [502356,594767,603692,758323,804150,493529,1008005] 
        //Lista de Identificadores de 7 filmes
        for(let i = 0; i < 7; i++){
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${listaIdsFilmes[i]}?api_key=${this.keyApi}`);
        //Buscando todas as Urls dos 7 filmes (A keyApi é disponibilizada pra cada dev que utiliza a API)
        this.urlFilmes[i] = response.data.poster_path;
        //Colocando o resultado das urls na lista urlFilmes
        this.Filmes[i] = this.buscadorDeImagem + this.urlFilmes[i];
        //Juntanto a parte da pesquisa com a parte da URL
        console.log(this.Filmes[i])
        //Mostrando as URLS completas no console
      }
    } catch (error) {
        console.error(error);
      }
  },
  data(){
    return{
      buscadorDeImagem: 'http://image.tmdb.org/t/p/original',
      keyApi: 'ea50df2fafdaa8c0f5c42dfbb1bd82f9',
      urlFilmes: [''],
      Filmes: [''],
    }
  },
})
</script>



<style>
main{
    display: flex;
    justify-content: center;
}
.container-filme{
width: 100px;
height: 80px;
}
</style>