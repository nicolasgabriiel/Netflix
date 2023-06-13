<template>
    <main class="container">
        <div class="container-filme" :style="{ backgroundImage: `url('${Filmes[2]}')` }"></div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    name: 'Corpo-da-Página-Inicial',
    async mounted(){
      try { 
        const listaIdsFilmes = [502356,594767,603692] 
        //Lista de Identificadores de 7 filmes
        for(let i = 0; i < listaIdsFilmes.length; i++){
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${listaIdsFilmes[i]}?api_key=${this.keyApi}`);
        console.log(response)
        //Buscando todas as Urls dos 7 filmes (A keyApi é disponibilizada pra cada dev que utiliza a API)
        this.urlFilmes[i] = response.data.backdrop_path;
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
.container{
    display: flex;
    width: 100%;
    justify-content: center;
;
}
.container-filme{
    margin-top: 50px;
    width: 300px;
    height: 169px;
    background-size: contain;
    background-position: center;
    cursor: pointer;
    transition: 0.7s;
}
.container-filme:hover{
    scale:1.2;
}

</style>