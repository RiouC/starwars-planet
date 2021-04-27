const Planet = ({ planet }) => {
    return (
        <div className="col-md-6  col-lg-4 col-xl-3 mb-4">
            <article className="bg-warning p-3">
                <h2 className="h5">{planet.name}</h2>
                <p className="mb-0">
                    <b>Population</b>
                    <br />
                    {planet.population}
                </p>
                <p className="mb-0">
                    <b>Climat</b>
                    <br />
                    {planet.climate}
                </p>
            </article>
        </div>
    )
}

export default Planet;