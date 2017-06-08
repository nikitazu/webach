<template>
  <div
    class="wb-chord-box"
    v-on:click="boxClicked($event)"
    v-bind:class="{ 'wb-chord-box__clickable' : clickable }"
    >
    {{ text }}
  </div>
</template>

<script src="./chord-box/chord-box.js"></script>
<style src="./chord-box/chord-box.css"></style>
