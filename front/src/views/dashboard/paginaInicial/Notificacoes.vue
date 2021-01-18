<template>
    <div>
        <b-icon icon="arrows-angle-expand"></b-icon>
        <h2 class="titulos-dashboard">Notificações</h2>  

        <div class="notificacoes-card">
            <b-icon icon="circle-fill" id="icon-not-novo"></b-icon>

            <p class="alertas-dash">Título:</p>
            <p>Nubank</p>
            <p class="alertas-dash">Assunto:</p>
            <p>Processo Seletivo</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .notificacoes-card{
        width: 300px;
        background-color: white;
        border-radius: 10px;
        position: absolute;
        margin-bottom: 50px;
    }

    #icon-not-novo{
        color: #FF683B; 
        position: absolute;
        padding-top: 5px;
        padding-right: 20px;
        right: 0;
    }
</style>