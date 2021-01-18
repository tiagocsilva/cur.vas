<template>
  <b-container class="pretest-container">
    <h2>
      Agora você faz parte da comunidade Cur.Vas,
      <br>
      por onde começar?
    </h2>

    <div class="flex-center flex-wrap mt-5">
      <div
        @click="$emit('start')"
        class="box-pretest cursor-pointer bg-alert text-white shadow p-5 m-3"
      >
        Preciso de uma orientação
      </div>

      <router-link
        to="/dashboard"
        class="box-pretest bg-primary text-white shadow p-5 m-3"
      >
        Quero descobrir só
      </router-link>
    </div>
  </b-container>
</template>

<style lang="scss">
.box-pretest {
  border-radius: 20px;
  width: 300px;

  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
}
</style>
