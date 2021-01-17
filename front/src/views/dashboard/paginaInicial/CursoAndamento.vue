<template>
    <div>
        <h2 class="titulos-dashboard">Curso em Andamento</h2>

        <b-row id="area-curso">
            <b-col col lg="3" id="area-foto-curso">
                foto
            </b-col>
            <b-col id="area-info-curso">
                <i class="alertas-dash">Em Andamento</i><br><br>

                <p class="titulo-curso">Introdução ao JavaScript</p>
                <p class="modulo-atual">1. Introdução</p>
                <p class="capitulo-atual">Concatenação de Strings</p>
            </b-col>
        </b-row>

        <button class="btn-dash">Ver Cursos</button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .alertas-dash{
        font-size: 14px;
        color: #FF683B;
    }

    #area-curso{
        padding:10px;
        margin-bottom: 10px
    }

    #area-foto-curso{
        background-color: blue;
        margin-right: 5px;
    }

    #area-info-curso{
        text-align: left;
        line-height: 10px;
        padding-top: 10px;
    }

    .titulo-curso{
        font-weight: 800;
        font-size: 1.5em;
        padding-bottom: 15px;
    }

    .capitulo-atual{
        font-style: oblique;
        font-size: 0.8em;
    }

    .btn-dash{
        background-color: #F7873F;
        color: white;
        border: 0px;
        bottom: 0;
        margin-bottom: 10px;
    }
</style>