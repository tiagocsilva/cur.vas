// Dashboard Página Inicial

<template>
    <div id="aread" style="margin-right:0">
        <logged-user />
        <Medalhas />
        <curso-notificacoes />
        <vagas-processo />
    </div>
</template>

<script>
import Medalhas from './paginaInicial/Medalhas'
import CursoNotificacoes from './paginaInicial/CursoNotificacoes'
import VagasProcesso from './paginaInicial/VagasProcesso'
import LoggedUser from '../../components/LoggedUser'

export default {
    components: {
        LoggedUser,
        Medalhas,
        CursoNotificacoes,
        VagasProcesso,
    }
}
</script>

<style lang="scss">
    #aread{
        background-color: teal;
        width: 100%;
        position: absolute;
        top:0;
    }
</style>