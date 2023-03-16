import './Pokecard.css';

function Pokecard({ name, type, base_experience, id }) {
    const imageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (<div className="Pokecard-div">
        <h3 className="Pokecard-h3">{name}</h3>
        <img src={imageLink} className="Pokecard-img" alt="logo" />
        <p>type:{type}</p>
        <p>EXP:{base_experience}</p>
    </div>
    )
}

export default Pokecard;