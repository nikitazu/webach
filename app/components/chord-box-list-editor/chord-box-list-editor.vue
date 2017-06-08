<template>
  <div class="wb-chord-box-list-editor">
    <chord-box-list
      :chords="chords"
      :getValue="getValue"
      :boxClickable="true"
      @boxClick="boxClicked"
    />
    <chord-box
      text="+"
      :clickable="true"
      @boxClick="addClicked"
    />
  </div>
</template>

<script src="./chord-box-list-editor.js"></script>
<style src="./chord-box-list-editor.css"></style>
