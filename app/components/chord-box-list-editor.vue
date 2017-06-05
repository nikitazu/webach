<template>
  <div class="wb-chord-box-list-editor">
    <chord-box-list
      :chords="chords"
      :getValue="getValue"
      v-on:boxClick="boxClicked"
    />
    <chord-box text="+" v-on:boxClick="addClicked" />
  </div>
</template>

<script src="./chord-box-list-editor/chord-box-list-editor.js"></script>
<style src="./chord-box-list-editor/chord-box-list-editor.css"></style>
