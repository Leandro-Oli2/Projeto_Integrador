<template>
    <div class="componente">
        <h1>Componente com Dados Reativos Primitivos</h1>
        <p>Nome: {{ nome }} I Idade: {{ idade }}</p>
        <button v-on:click="fazerAniversario">Fazer Aniversario</button>
        <button v-on:click="mudarNome">Mudar Nome</button>
    </div>
</template>

<script setup>
import {ref} from "vue"
    const nome = ref("Leandro")
    const idade = ref(19)

    function fazerAniversario(){
        idade.value += 1
    }
    function mudarNome(){
        nome.value = "Alecrim"
    }
</script>

