<template>
  <div class="wb-tonality-toggler">
    <div v-on:click="toneClicked">
      {{ tone }}
    </div>
    <div v-on:click="modeClicked">
      {{ mode }}
    </div>
  </div>
</template>

<script src="./tonality-toggler/tonality-toggler.js"></script>
<style src="./tonality-toggler/tonality-toggler.css"></style>
