import {createContext, useState, useContext, useEffect} from "react"

const CountryContext = createContext()

export const useCountryContext = () => useContext(CountryContext)

export const CountryProvider = ({children}) => {
    const [visited, setVisited] = useState([])

    useEffect(() => {
        const storedVisits = localStorage.getItem("visits")

        if(storedVisits) setVisited(JSON.parse(storedVisits))
    },[]
)

    useEffect(() => {
        localStorage.setItem('visits', JSON.stringify(visited))
    }, [visited])

    const addToVisited = (country) => {
        setVisited(prev => [...prev, country])
    }

    const removeFromVisited = (countryId) => {
        setVisited(prev => prev.filter(country => country.id !== countryId))
    }

    const isVisited = (countryId) => {
        return visited.some(country => country.id === countryId)
    }

    const value = {
        visited,
        addToVisited,
        removeFromVisited,
        isVisited
    }

    return <CountryContext.Provider value={value}>
        {children}
    </CountryContext.Provider>
}