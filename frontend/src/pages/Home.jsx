import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import '../css/Home.css'


const baseurl = 'https://restcountries.com/v3.1/'

//get a list of all countries
export const getAllCountries = async () => {
    const response = await fetch(`${baseurl}all?fields=name`);
    const data = await response.json();
    //data now correctly has the api response
    console.log(data[0].name.common)
    console.log(data[0].subregion)
    return data;
};

//get a list of countries by keyword
export const getCountriesBySearch = async (query) => {
    const response = await fetch(
        `${baseurl}name/${encodeURIComponent(
            query)}?fields=name`
        );
    const data = await response.json();
    return data;
};

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const loadAllCountries = async () => {
            try {
                const allCountries = await getAllCountries()
                setCountries(allCountries)
            } catch (err) {
                console.log(err)
                setError("Could not find anything... try again later.")
            }
            finally {
                setLoading(false)
            }
        }
        console.log("started")
        loadAllCountries()
    }, []);

    //handle user input and send it to the getCountriesBySearch function
    const handleSearch = async (e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try{
            const searchResults = await getCountriesBySearch(searchQuery)
            setCountries(searchResults)
            setError(null)
        }   catch (err) {
            console.log(err)
            setError("Failed to find anything...")
        }   finally {
            setLoading(false)
        }
    };

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for countries..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {countries.map((country, index) => (
            <CountryCard country={country} key={index} />
          ))}
        </div>
      )}
        
    </div>
  );
}
export default Home;