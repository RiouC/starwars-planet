import Planet from './Planet';

const Planets = ({ planets }) => {
    return <div className="row">
        console.log(`PLANETES IN COMPONENT : ${planets}`)
        {planets.map((pl) => <Planet key={pl.name} planet={pl} />)};
    </div>
}

export default Planets;