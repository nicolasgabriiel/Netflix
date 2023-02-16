<template>
  <header>sadas</header>
  <main class="w-full h-screen bg-[#141414] flex justify-center">
    <div class="mt-36 ">
      <h1 class="text-7xl text-white bold mb-14">Quem está assistindo?</h1>
      <div class="flex justify-center">
        <div class="mr-10 hover:cursor-pointer " >
          <div class="perfil w-48 h-48"></div>
          <p class="text-2xl text-[#808080] text-center mt-2">Meu Perfil</p>
        </div>
        <div>
          <div class="adicionar w-48 h-48 hover:cursor-pointer"></div>
          <p class="text-2xl text-[#808080] text-center mt-2">Adicionar Perfil</p>
        </div>
      </div>
      <div class="flex justify-center mt-20">
        <button class="border-[#808080] border-2 pt-3 pb-3 pl-10 pr-10 mb-5 text-2xl text-[#808080] hover:text-white hover:border-white" 
      >Gerenciar Perfis</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  width: 100%;
  height: 68px;
  background-image: linear-gradient(to bottom, #060606, #141414);
}
.perfil{
  background-image: url(../assets/icons/velhote.png);
  background-size: contain;
}
.adicionar{
  background-image: url(../assets/adicionar.png);
  background-size:65%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
