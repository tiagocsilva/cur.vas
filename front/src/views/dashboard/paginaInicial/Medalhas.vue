<template>
    <div class="area-medalhas">
        <b-row style="margin-right:0; margin-left:0">
            <div class="icones">
                <b-icon icon="arrows-angle-expand"></b-icon>
            </div>

            <h2 class="titulos-dashboard">Medalhas Conquistadas</h2>
        </b-row>
    
        <b-row style="padding-left: 38px">
            <medalhas-badge/>
            <medalhas-badge/>
        </b-row>
    </div>
</template>

<script>
import MedalhasBadge from './MedalhasBadge'

export default {
    components: {
        MedalhasBadge
    }
}
</script>

<style lang="scss">
    .area-medalhas{
        background-color:#BBD5BA;
        border-bottom-right-radius: 30px;
        border-top-left-radius: 30px;
    }

    .titulos-dashboard{
        text-align: left;
        padding-left: 50px;
        padding-top: 10px;
    }

    .icones{
        font-size: 2rem;
        position: absolute;
        right: 0;
        padding-right: 10px;
    }
</style>