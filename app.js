import { shuffle } from "lodash";

async function fetchAllCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');

        const data = await response.json();
        const shuffledData = shuffle(data)
        return shuffledData;
        
        
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}

// // Appeler la fonction fetchAllCountries pour récupérer les données des pays
// const countriesData = await fetchAllCountries();


