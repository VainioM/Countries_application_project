import '../css/Visited.css'
import { useCountryContext } from '../contexts/CountryContext'
import CountryCard from '../components/CountryCard'


//TODO: User can only save one country at a time on to the visited page!
function Visited(){
    const {visited} = useCountryContext();

    if(visited) {
        return(
            <div className='visited'>
            <h2>Countries you have visited: </h2>
              <div className="countries-grid">
                    {visited.map((country) => (
                        <CountryCard country={country} key={country.name.official} />
                    ))}
                </div>
            </div>
        );
    }

    return <div className="visited-empty">
        <h2>You never visited outside of your home country.</h2>
        <p>Did you go aboard? Which country did you visit?</p>
    </div>
}

export default Visited