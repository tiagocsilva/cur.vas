<template>
  <div class="top-menu-item">
    <span v-if="logo != null">
      <img src="../../assets/images/logo.png" />
    </span>

    <span v-else-if="button != null">
      <router-link to="/login">
        <button>Entrar</button>
      </router-link>
    </span>

    <span v-else class="link-animate">
      {{title}}
    </span>
  </div>
</template>

<script>
export default {
  props: ["title", "logo", "button"],
};
</script>

<style lang="scss">
.top-menu-item {
  width: 100%;
  max-width: 250px;
  padding: 10px;
  font-weight: bold;

  img {
    height: 55px;
  }

  button {
    font-weight: bold;
  }

  border-bottom: solid 2px transparent;

  cursor: pointer;
}

.link-animate {
  display: inline-block;
  color: #2c3e50;
  text-decoration: none;
}

.link-animate::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #2c3e50;
  transition: width 0.3s;
}

.link-animate:hover::after {
  width: 100%;
}
</style>