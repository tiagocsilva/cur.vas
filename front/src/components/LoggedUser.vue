<template>
  <div class="logged-user flex-center">

    <div class="mr-3 text-right">
      Olá,<br>
      <b>Fulano!</b>
    </div>

    <div class="user-image"></div>

  </div>
</template>

<style lang="scss">
.logged-user {
  position: absolute;
  right: 50px;
  top: 30px;
}

.user-image {
  width: 80px;
  height: 80px;
  background: #CACACA;
  border-radius: 50%;
}
</style>