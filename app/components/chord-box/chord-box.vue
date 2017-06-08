<template>
  <div
    class="wb-chord-box"
    :class="{
      'wb-chord-box_clickable' : clickable,
      'wb-chord-box_major' : mode === 'major',
      'wb-chord-box_minor' : mode === 'minor',
      'wb-chord-box_diminished' : mode === 'diminished' }"
    @click="boxClicked($event)"
    >
    <span
      class="wb-chord-box__key"
      :class="{
        'wb-chord-box__key_sharp' : sharp,
        'wb-chord-box__key_flat' : flat }"
      >{{ text }}</span>
    <span class="wb-chord-box__suffix">{{suffix}}</span>
  </div>
</template>

<script src="./chord-box.js"></script>
<style src="./chord-box.css"></style>
