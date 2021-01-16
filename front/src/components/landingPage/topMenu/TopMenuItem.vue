<template>
  <div class="top-menu-item">
    <span v-if="logo != null">
      <router-link :to="to">
        <img src="@/assets/images/logo.svg" />
      </router-link>
    </span>

    <span v-else-if="button != null">
      <router-link :to="to">
        <button>Entrar</button>
      </router-link>
    </span>

    <span v-else>
      <router-link
        :to="to"
        class="link-animate"
      >
        {{title}}
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  props: ["title", "logo", "button", "to"],
};
</script>

<style lang="scss">
.top-menu-item {
  width: 100%;
  max-width: 250px;
  padding: 10px;
  font-weight: bold;

  a {
    text-decoration: none;

    &:hover {
      color: #49637e;
    }
  }

  img {
    height: 55px;
  }

  button {
    font-weight: bold;
  }

  border-bottom: solid 2px transparent;
}

.link-animate {
  display: inline-block;
  color: #49637e;
  text-decoration: none;
  cursor: pointer;
}

.link-animate::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #49637e;
  transition: width 0.3s;
}

.link-animate:hover::after {
  width: 100%;
}
</style>