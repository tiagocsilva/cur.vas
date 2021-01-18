<template>
        <b-row style="margin-left:0; margin-right:0" align-h="center">
            <b-col class="col-11 area-infos-cn" style="background-color: red;">
                <b-row>
                    <div class="col-6 cardsDash" style="background-color: #f0f0f0; margin-left: -15px; margin-right:15px">
                        <curso-andamento/>
                    </div>

                    <div class="col-6 cardsDash" style="background-color: #f0f0f0">
                        <notificacoes />
                    </div>
                </b-row>
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
    .area-infos-cn{
        border-bottom-right-radius: 30px;
        border-top-left-radius: 30px;
        height: 30%;
        margin-left: 80px;
        margin-bottom: 10px;
        box-sizing: border-box;
    }
    
    .cardsDash{
        border-top-left-radius: 30px;
        border-bottom-right-radius: 30px;
        height: 100%;
        padding-right: 0px;
    }
</style>