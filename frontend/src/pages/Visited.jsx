import '../css/Visited.css'
import { useCountryContext } from '../contexts/CountryContext'
import CountryCard from '../components/CountryCard'

function Visited(){
    const {visited} = useCountryContext();

    if(visited) {
        return(
            <div className='favorites'>
            <h2>Countries you have visited: </h2>
              <div className="movies-grid">
                    {visited.map((country, index) => (
                        <CountryCard country={country} key={index} />
                    ))}
                </div>
            </div>
        );
    }

    return <div className="favorites-empty">
        <h2>You never visited outside of your home country.</h2>
        <p>Did you go aboard? Which country did you visit?</p>
    </div>
}

export default Visited