<template>
  <div class="wb-tonality-toggler">
    <div
      class="wb-tonality-toggler-tone"
      @click="toneClicked"
      >
      {{ tone }}
    </div>
    <div @click="modeClicked">
      ({{ mode }})
    </div>
  </div>
</template>

<script src="./tonality-toggler.js"></script>
<style src="./tonality-toggler.css"></style>
