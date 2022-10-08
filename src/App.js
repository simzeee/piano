import "./App.css";
import * as Tone from "tone";

function App() {
  const notes = [
    "C",
    "C#",
    "D",
    "Eb",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "Bb",
    "B",
  ];

  const makeOctave = (num, addExtraC = false) => {
    const notesToUse = addExtraC ? notes.concat("C") : notes;
    return notesToUse.map((note, index) => {
      let isAccidental = note.length > 1;
      let noteValue = `${note}${index === 12 ? num + 1 : num}`;
      return (
        <div
          className={isAccidental ? "pianoKey blackKey" : "pianoKey whiteKey"}
          key={noteValue}
          onClick={async () => {
            await Tone.start();
            const synth = new Tone.Synth().toDestination();
            console.log(synth);
            synth.triggerAttackRelease(noteValue, "8n");
          }}
        ></div>
      );
    });
  };

  return (
    <div className="App">
      {makeOctave(4)}
      {makeOctave(5)}
      {makeOctave(6, true)}
    </div>
  );
}

export default App;
