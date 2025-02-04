import '../css/CountryCard.css'
import { useCountryContext } from '../contexts/CountryContext'

function CountryCard({country}) {
    const {isVisited, addToVisited, removeFromVisited} = useCountryContext()
    const visited = isVisited(country.name.official)

    function onVisitedClick(e){
        e.preventDefault()
        if(visited) removeFromVisited(country.name.official)
            else addToVisited(country)
    }

    return <div className="country-card">
        <div className="country-flag">
            <img src={country.flags.png} alt={country.name.common}/>
            <div className="country-overlay">
                <button className={`visited-btn ${visited ? "active" : ""}`} onClick={onVisitedClick}>

                </button>
            </div>
        </div>
        <div className="country-info">
            <h3>{country.name.common}</h3>
            <p>{country.region}</p>
        </div>
    </div>
}
export default CountryCard