//import { shuffle } from "lodash";
import Country from "./modules/Country.js"
import Games from "./modules/Games.js"

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

// const countriesData = await fetchAllCountries();


const form = document.querySelector('form');
form.addEventListener('submit', this.handleFormSubmission.bind(this));

handleFormSubmission(e) {
    e.preventDefault();

    const submittedAnswer = e.target.querySelector('input').value.trim().toLowerCase();
}