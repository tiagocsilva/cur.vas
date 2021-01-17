<template>
  <div>

    <b-button
      block
      v-b-toggle.accordion-1
    >Formação</b-button>

    <b-collapse
      id="accordion-1"
      visible
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
        <b-card-text>Testando teste</b-card-text>
      </b-card-body>
    </b-collapse>

  </div>
</template>