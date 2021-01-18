<template>
    <b-col col lg="1" class="espaco-medalhas">
        <div class="badge-medalha"></div>
        <p class="detalhe-medalha">Cumpriu no tempo programado</p>
    </b-col>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .badge-medalha{
        height: 100px;
        width: 100px;
        background: url('./badges/testebadge.png') no-repeat center
    }

    .detalhe-medalha{
        font-size: 0.7em;
        text-align: center;
    }
</style>