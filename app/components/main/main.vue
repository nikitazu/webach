<template>
  <div class="wb-paper">
    
    <section>
      <h2>Chord progressions</h2>
      <template v-for="progression in progressions">
        <chord-box-list-editor
          :chords="progression.chords"
          :getValue="c => c.text"
          v-on:boxClick="(e,c)=>editorBoxClicked(e, c, progression)"
          v-on:addClick="editorAddClicked(progression)"
        />
      </template>
      <button v-on:click="addProgressionClicked">
        Add progression
      </button>
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
          <template v-for="pindex in part.progressions">
            <chord-box-list
              :chords="progressions[pindex].chords"
              :getValue="c => part.tonality.harmonize(c)"
            />
          </template>
        </div>
      </div>
    </section>
    
    <p>{{ message }}</p>
  </div>
</template>

<script src="./main.js"></script>
<style src="./main.css"></style>
