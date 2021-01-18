<template>
    <div>
        <menu-dashboard />

        <header>
            <logged-user />
        </header>

        <section>
          <dash-pagina-inicial />
        </section>
    </div>
</template>

<script>
import LoggedUser from "@/components/LoggedUser.vue"
import MenuDashboard from "@/components/menuDashboard/MenuDashboard.vue"
import DashPaginaInicial from './dashboard/paginaInicial/DashPaginaInicial.vue'

export default {
    components: {
        MenuDashboard,
        LoggedUser,
        DashPaginaInicial,
    }
}
</script>