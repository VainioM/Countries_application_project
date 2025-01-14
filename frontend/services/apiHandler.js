const baseurl = 'https://restcountries.com/v3.1/'

export const getAllCountries = async () => {
    const response = await fetch(`${baseurl}all?fields=name`);
    const data = await response.json();
    //data now correctly has the api response
    console.log(data[0].name.common)
    return data.results;
};

export const getCountriesBySearch = async (query) => {
    const response = await fetch(
        `${baseurl}name/${encodeURIComponent(
            query)}?fields=name`
        );
    const data = await response.json();
    return data.results;
};
