<template>
  <header>sadas</header>
  <main class="box-menu">
    <div class="container-box">
      <h1 class="title">Quem está assistindo?</h1>

      <div class="container-perfis">
        
        <router-link to="/bem-vindo">
        <div class="box-selecao">
          <div class="perfil"></div>
          <p class="text-perfil">{{perfil[0]}}</p>
        </div><!--box selecao -->
        </router-link>
        <div class="box-selecao">
          <div class="adicionar "></div>
          <p class=" text-perfil" >Adicionar Perfil</p>
        </div><!--box selecao -->

      </div><!--container perfil-->

      <div class="container-gerenciador">
        <router-link to="/login/configuracoes">
          <button
            class="gerenciador">
            Gerenciar Perfis
            </button>
        </router-link>
      </div><!-- container gerenciador-->

    </div><!--container box-->
  </main>
</template>

<style scoped>
header {
  width: 100%;
  height: 68px;
  background-image: linear-gradient(to bottom, #060606, #141414);
}

.box-menu {
  width: 100%;
  min-height: 100vh;
  background-color: #141414;
  display: flex;
  justify-content: center;
}

.container-box {
  margin-top: 9rem;
}

.title {
  font-size: 4.5rem;
  line-height: 1;
  color: white;
  font-weight: bold;
  margin-bottom: 3.5rem;
}

.container-perfis {
  display: flex;
  justify-content: center;
}

.perfil {
  background-image: url(../assets/icons/velhote.png);
  background-size: contain;
  display: block;
  width: 12rem;
  height: 12rem;
  padding: 0.75rem;
}
.text-perfil{
  font-size: 1.5rem;
  margin-top: 0.5rem;
  text-align: center;
  color:#808080;
  padding: 0 0.75rem;
}

.box-selecao {
  cursor: pointer;
  margin: 0 2rem ;
  width: 232px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.box-selecao:hover{
  color: white;
}
.box-selecao:hover .text-perfil{
  color: black;
}
.box-selecao:hover{
  background-color: white;
}

.adicionar {
  background-image: url(../assets/adicionar.png);
  background-size: 65%;
  background-position: center;
  background-repeat: no-repeat;
  width: 12rem;
  height: 12rem;
}
.adicionar:hover{
  color: white;
  border-color: white;
}
.gerenciador{
  border: 2px solid #808080;
  padding: 0.75rem 2.5rem;
  margin-bottom: 1.25rem ;
  font-size: 1.5rem;
  color: #808080;
}
.gerenciador:hover{
  color: white;
  border-color: white;
}
.container-gerenciador{
margin-top: 5rem;
display: flex;
justify-content: center;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Login-Page',
  data(){
    return{
      perfil: ['Meu Perfil']
    }
  }
})
</script>
