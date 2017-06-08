<template>
  <div class="wb-chord-box-list">
    <template v-for="chord in chords">
      <chord-box
        :text="getValue(chord).key || getValue(chord)"
        :sharp="getValue(chord).sharp"
        :flat="getValue(chord).flat"
        :suffix="getValue(chord).suffix"
        :mode="getValue(chord).mode"
        :clickable="boxClickable"
        @boxClick="boxClicked($event, chord)"
      />
    </template>
  </div>
</template>

<script src="./chord-box-list.js"></script>
<style src="./chord-box-list.css"></style>
