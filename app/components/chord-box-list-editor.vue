<template>
  <div class="wb-chord-box-list-editor">
    <chord-box-list
      :chords="chords"
      :getValue="getValue"
      :boxClickable="true"
      v-on:boxClick="boxClicked"
    />
    <chord-box
      text="+"
      v-on:boxClick="addClicked"
      :clickable="true"
    />
  </div>
</template>

<script src="./chord-box-list-editor/chord-box-list-editor.js"></script>
<style src="./chord-box-list-editor/chord-box-list-editor.css"></style>
