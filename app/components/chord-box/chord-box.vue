<template>
  <div
    class="wb-chord-box"
    v-on:click="boxClicked($event)"
    v-bind:class="{ 'wb-chord-box_clickable' : clickable, 'wb-chord-box_major' : major, 'wb-chord-box_minor' : minor }"
    >
    <span class="wb-chord-box__key"
      v-bind:class="{ 'wb-chord-box__key_sharp' : sharp, 'wb-chord-box__key_flat' : flat }"
      >{{ text }}</span>
    <span class="wb-chord-box__suffix">{{suffix}}</span>
  </div>
</template>

<script src="./chord-box.js"></script>
<style src="./chord-box.css"></style>
