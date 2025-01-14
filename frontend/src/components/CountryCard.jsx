import '../css/CountryCard.css'

function CountryCard({country}) {

    function onVisitedClick(){
        alert("clicked!")
    }

    return <div className="country-card">
        <div className="country-flag">
            <img src={country.flags} alt={country.name.common}/>
            <div className="country-overlay">
                <button className="visited-btn" onClick={onVisitedClick}>

                </button>
            </div>
        </div>
        <div className="country-info">
            <h3>{country.name.common}</h3>
            <p>{country.name.common}</p>
        </div>
    </div>
}
export default CountryCard