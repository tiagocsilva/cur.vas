<template>
    <b-row style="margin-left:0; margin-right:0" align-h="center">
        <b-col class="col-11 area-medalhas" style="background-color: #f0f0f0">
            <b-icon icon="arrows-angle-expand" class="expand"></b-icon>
            <p class="titulos-dashboard">Medalhas Conquistadas</p>

            <b-row style="padding-left: 10px">
                <medalhas-badge/>
                <medalhas-badge/>
            </b-row>

        </b-col>
    </b-row>
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
        border-bottom-right-radius: 30px;
        border-top-left-radius: 30px;
        height: 30%;
        margin-left: 80px;
        margin-bottom: 10px;
        box-sizing: border-box;
    }

    .expand{
        position: absolute;
        right: 10px;
        top: 5px;
        font-size: 1.5rem
    }

    .titulos-dashboard{
        text-align: left;
        padding-left: 10px;
        font-weight: bold;
        font-size: 1.5em;
    }
</style>