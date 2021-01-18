<template>
<div>
  <div class="flex-center logged-user">

    <div class="mr-3 text-right">
      Olá,<br>
      <b>Fulano!</b>
    </div>

    <div class="user-image"></div>

  </div>
</div>
</template>

<style lang="scss">
.logged-user {
  position: absolute;
  height: 20%;
  padding: 20px;
  right: 0;
  top: 0;
  // background-color: red;
}

.text-right{
  font-size: 1.5em;
  line-height: 1.2em;
}

.user-image {
  width: 80px;
  height: 80px;
  background: #502c2c;
  border-radius: 50%;
}
</style>