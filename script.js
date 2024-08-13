async function showweather() {
    const place = document.getElementById('placename').value;
    const url = `https://open-weather13.p.rapidapi.com/city/${place}/EN`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ab4bcd40b8msh37f270b66ac9bccp17844djsndfd326e046eb',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(JSON.parse(result));
    } catch (error) {
        console.error(error);
    }
}
