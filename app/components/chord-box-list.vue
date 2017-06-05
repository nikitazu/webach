<template>
  <div class="wb-chord-box-list">
    <template v-for="chord in chords">
      <chord-box :text="getValue(chord)"
                 v-on:boxClick="boxClicked($event, chord)"
      />
    </template>
  </div>
</template>

<script src="./chord-box-list/chord-box-list.js"></script>
<style src="./chord-box-list/chord-box-list.css"></style>
