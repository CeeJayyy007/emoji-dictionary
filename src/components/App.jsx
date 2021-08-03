import Dictionary from "./dictionary";
import emojipedia from "../emojipedia";

function App() {
  return (

<div>
      <h1>
        <span>emojipedia</span>
      </h1>
    <dl className="dictionary">
    {emojipedia.map(emojipedia => (
        <Dictionary 
        key = { emojipedia.id}
        emoji = { emojipedia.emoji}
        name = { emojipedia.name}
        meaning = { emojipedia.meaning}
        />
        )
    )} 

    </dl>
</div>
);
}

export default App;
