<template>
  <div class="wb-tonality">
    <div v-on:click="tonalityToneClicked()">
      {{ tonality.tone }}
    </div>
    <div v-on:click="tonalityModeClicked()">
      {{ tonality.mode.name }}
    </div>
  </div>
</template>

<script src="./tonality/tonality.js"></script>
<style src="./tonality/tonality.css"></style>
