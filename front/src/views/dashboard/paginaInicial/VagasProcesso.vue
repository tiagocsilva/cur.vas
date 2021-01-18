<template>
    <b-row style="margin-left:0; margin-right:0" align-h="center">
        <b-col class="col-11 area-medalhas">
            <b-row style="margin:0; flex-wrap: no-wrap">
                <b-col class="col-5 cardsDash" style="background-color: #f0f0f0;">
                    <ultimas-vagas />
                </b-col>

                <b-col class="col-5 cardsDash" style="background-color: #f0f0f0">
                    <processos-seletivos />
                </b-col>

                <b-col class="col-2">
                    <div>
                        <img src="../../../../public/img/icons/tool.svg" alt="">
                        <p>Suporte<br> Técnico</p>
                        </div>

                        <div>
                            <img src="../../../../public/img/icons/Vector.svg" alt="">
                             <p>Agendamento<br> de Mentoria</p>
                        </div>
                </b-col>
            </b-row>

        </b-col>
    </b-row>
</template>

<script>
import ProcessosSeletivos from './ProcessosSeletivos.vue'
import UltimasVagas from './UltimasVagas.vue'
export default {
  components: { 
      UltimasVagas,
      ProcessosSeletivos,
  },

}
</script>