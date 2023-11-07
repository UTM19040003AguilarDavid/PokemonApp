import { CharacterList } from "./components/CharacterList";



function App() {
  return (
    <main className="bg-accent flex flex-col justify-center items-center">
      
      <img
        src="https://cdn.freebiesupply.com/images/large/2x/pokemon-logo-black-transparent.png"
        alt="POKEMON"
        className="h-60"
        style={{ zIndex: 1 }}
      />
      <CharacterList />
    </main>
  );
}

export default App;
