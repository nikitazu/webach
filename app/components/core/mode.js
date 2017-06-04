export default function Mode(name, toneShift, chordShift) {
  this.name = name;
  this.toneShift = toneShift;
  this.chordShift = chordShift;
}

Mode.major = new Mode('major', 0, 0);
Mode.minor = new Mode('minor', 3, 5);
