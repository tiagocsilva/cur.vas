<template>
    <b-row style="margin-right:0; margin-left:0; margin-top: 10px; flex-wrap: no-wrap">
        <b-col col lg="6" id="dash-m">
            <curso-andamento/>
        </b-col>

        <b-col col lg="6" id="dash-m">
            <notificacoes />
        </b-col>
    </b-row>
</template>

<script>
import CursoAndamento from './CursoAndamento'
import Notificacoes from './Notificacoes'

export default {
  components: { CursoAndamento, Notificacoes },
    
}
</script>

<style lang="scss">
    #dash-m{
        background-color: #f0f0f0;
        border-bottom-right-radius: 30px;
        border-top-left-radius: 30px;
    }
</style>