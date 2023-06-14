<template>
    <header>
        <nav class="linha">
            <div class="box-esquerda linha">
                
                <div class="container-logo">
                    <router-link to="/login">
                        <div  class="logo"></div>
                    </router-link>
                </div> <!-- LOGO -->
                
                <div class="navegacao">
                    <button>Iníco</button>
                    <button>Séries</button>
                    <button>Filmes</button>
                    <button>Bombando</button>
                    <button>Minha lista</button>
                    <button>Navegar por idiomas</button>
                </div><!-- NAVEGACAO -->
            
            </div><!--BOX ESQUERDA-->
            
            <div class="box-direita linha">
                    
                    <div class="barra-de-pesquisa">
                        <input type="text" class="hide"/>
                        <button class="botao-de-pesquisa "></button>
                    </div><!--BARRA DE PESQUISA-->

                    <div class="notificacoes">
                        <button></button>
                    </div><!--NOTIFICACOES-->

                    <div class="meu-perfil">
                        <button></button>
                        <div class="seta"></div>
                        <div class="container-opcoes"></div>
                    </div><!--MEU PERFIL-->

            </div><!-- BOX DIREITA -->
            
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name:'Header-Pagina-Inicial-Componente'
})
</script>

<style scoped>
.hide{
    display: none !important;
}
.linha{
    display: flex;
    flex-direction: row;
}
header{
    width: 100%;
    height: 68px;
    background-color: black;
}
header nav{
    height: 100%;
    justify-content: space-between;
    align-items: center;
}
.logo{
    width: 93px;
    height: 31px;
    background-image: url(../../assets/logo.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0 50px;
}
.navegacao button{
    background-color: transparent;
    border: 0;
    color: rgba(255, 255, 255, 0.863);
    font-size: 13.5px;
    font-weight: bold;
    cursor: pointer;
    margin: 0 20px 0 0;
}
</style>