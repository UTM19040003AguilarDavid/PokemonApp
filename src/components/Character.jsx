export function Character(character) {
  return (
    <>
      <div className="card w-96 bg-secondary text-primary-content">
      
        <div className="card-body">
          <h2 className="card-title">{character.name}</h2>
          <p>Weight: {character.weight}</p>
        </div>
      </div>
    </>
  );
}
export default Character;
