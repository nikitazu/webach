<template>
  <div class="wb-paper">
    <tonality tone="A" mode="minor" v-on:change="tonalityChanged"></tonality>
    <div class="wb-chord-progression">
      <div v-for="chord in chords" v-on:click="chordClicked(chord)" class="wb-chord">
        {{ chord.text }}
      </div>
    </div>
    <div class="wb-chord-progression">
      <div v-for="chord in chords" class="wb-chord">
        {{ harmonize(chord) }}
      </div>
    </div>
    <p>{{ message }}</p>
  </div>
</template>

<script src="./main/main.script.js"></script>
<style src="./main/main.style.css"></style>
