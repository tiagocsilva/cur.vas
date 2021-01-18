<template>
    <div class="areaDash">
        <medalhas />
        <curso-notificacoes />
    </div>
</template>
<script>
import CursoNotificacoes from '../paginaInicial/CursoNotificacoes'
import Medalhas from '../paginaInicial/Medalhas'

export default {
    components: {
        Medalhas,
        CursoNotificacoes,
    }
}
</script>

<style lang="scss">
    .areaDash{
        background-color: blue;
        height: 80vh;
        margin-top: 20vh;
    }
</style>