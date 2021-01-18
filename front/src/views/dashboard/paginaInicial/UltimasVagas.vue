<template>
    <div>
        <p class="titulos-dashboard">Últimas Vagas</p>

        <ul id="listas-dash">
            <li id="listas-dash">Analista</li>
        </ul>

        <button class="btn-dash">Ver Vagas</button>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss">
    ul#listas-dash{
        margin-left: -30px
    }

    li#listas-dash{
        list-style: none;
        text-align: left;
        background-color: white;
        margin-right: 10px;
        padding-left: 20px;
        border-radius: 30px;
    }
</style>
