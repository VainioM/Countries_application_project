import { useLoadScript } from "@react-google-maps/api"
import Map from "../components/Map" 


function Worldmap(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />
    
}

export default Worldmap