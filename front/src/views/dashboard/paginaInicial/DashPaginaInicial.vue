<template>
    <div class="areaDash">
        <medalhas />
        <curso-notificacoes />
        <vagas-processo />
    </div>
</template>
<script>
import CursoNotificacoes from '../paginaInicial/CursoNotificacoes'
import Medalhas from '../paginaInicial/Medalhas'
import VagasProcesso from './VagasProcesso.vue'

export default {
    components: {
        Medalhas,
        CursoNotificacoes,
        VagasProcesso,
    }
}
</script>

<style lang="scss">
    .areaDash{
        margin-top: 20vh;
    }
</style>