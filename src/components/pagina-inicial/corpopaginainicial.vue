<template>
  <main class="principal">
    <section class="secao">
      <div class="card-filme">
        <div class="container-filme" :style="{ backgroundImage: `url('${Filmes[2]}')` }" @mouseenter="setHover(false)" @mouseleave="setHover(true)"></div>
        <div class="container-detalhes" :class="{'hide': Hide}">

          <div class="box-superior">
            <div class="itens-esquerda">
              <button id="play" class="play">play</button>
              <button id="lista" class="lista">lista</button>
              <button id="gostei" class="gostei">gostei</button>
            </div>
            <div class="itens-direita">
              <button id="informações" class="informações">inf</button>
            </div>
          </div><!--box superior-->

          <div class="box-medio">
            <div class="classificacao" id="classificacao">+18</div>
            <span>hd</span>
          </div><!--box médio-->


          <div class="box-inferior">
            <p class="genero genero1">{{Genero[0]}}</p>
            <p class="genero genero2">{{Genero[1]}}</p>
            <p class="genero genero3">{{Genero[2]}}</p>
          </div><!--box inferior-->

        </div><!--Container-detalhes-->
      </div><!--card filme-->
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Corpo-da-Página-Inicial',
  async mounted() {
    try {
      const listaIdsFilmes = [502356, 594767, 603692]
      //Lista de Identificadores de 7 filmes
      for (let i = 0; i < listaIdsFilmes.length; i++) {
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
  data() {
    return {
      buscadorDeImagem: 'http://image.tmdb.org/t/p/original',
      keyApi: 'ea50df2fafdaa8c0f5c42dfbb1bd82f9',
      urlFilmes: [''],
      Filmes: [''],
      Genero: ['Ação','Terror','Suspense'],
      Hide: true,
    }
  },
  methods:{
    setHover(valor: boolean){
      this.Hide = valor
    }
  }
})
</script>



<style>
.hide{
  display: none !important;
}
.principal {
  width: 100%;
}
.secao{
  width: 100%;
}
.card-filme {
  display: flex;
  flex-direction: column;

}

.container-filme {
  margin-top: 50px;
  width: 300px;
  height: 169px;
  background-size: contain;
  background-position: center;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.7s;
}
.container-filme:hover {
  scale: 1.2;
}
.container-detalhes{
  background-color: red;
}
</style>