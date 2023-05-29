<template>
    <header>
        <nav>
            <div class="box-esquerda">
                
                <div class="logo">
                    <router-link to="/Bem-Vindo">
                        
                    </router-link>
                </div> <!-- LOGO -->
                
                <div class="navegacao">
                    <button>Iníco</button>
                    <button>Séries</button>
                    <button>Filmes</button>
                    <button>Bombando</button>
                    <button>Minha lista</button>
                    <button>Navegar por idiomas</button>
                </div><!-- Navegacao -->
            
            </div><!--BOX ESQUERDA-->
            
            <div class="box-direita">
                    
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
header{
    width: 100%;
    height: 68px;
    background-color: red;
}
header nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>