<template>
  <div class="wb-paper">
    <section>
      <h2>Chord progressions</h2>
      <div v-for="progression in progressions"
           class="wb-chord-progression">
        <div v-for="chord in progression.chords"
             v-on:click="chordClicked($event, progression, chord)"
             class="wb-chord">
          {{ chord.text }}
        </div>
      </div>
    </section>
    <section class="wb-song">
      <h2>{{ song.name }}</h2>
      <div v-for="part in song.parts"
           class="wb-song-part">
        <h3>Part: {{ part.name }}</h3>
        <div>
          <tonality-toggler
            :tone="part.tonality.tone"
            :mode="part.tonality.mode.name"
            v-on:toneChange="toneChanged(part.tonality)"
            v-on:modeChange="modeChanged(part.tonality)"
            />
          <div v-for="pi in part.progressions" class="wb-chord-progression">
            <template v-for="chord in progressions[pi].chords">
              <chord-box :text="part.tonality.harmonize(chord)">
              </chord-box>
            </template>
          </div>
        </div>
      </div>
    </section>
    <p>{{ message }}</p>
  </div>
</template>

<script src="./main/main.js"></script>
<style src="./main/main.css"></style>
