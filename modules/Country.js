export default class Country {
    constructor(countryData) {
        this.countryData = countryData;
        this.allResponses = [];
    }

    // Getter pour recup le drapeau du pays
    get flag() {
        return this.countryData.flags.png;
    }

    // extraire et organiser les bonnes réponses
    extractValidResponses() {
        const translations = this.countryData.translations;
        const commonNames = Object.values(translations).map(translation => translation.common.toLowerCase());
        return new Set(commonNames);
    }

    // verif si une réponse est correcte
    checkAnswer(submittedAnswer) {
        const reponseDonnee = submittedAnswer.toLowerCase();
        const validResponsesSet = this.extractValidResponses();
        return validResponsesSet.has(reponseDonnee);
    }

    // afficher drapeau du pays
    displayFlag() {
        const flagsDiv = document.getElementById('flags');
        const flagElement = document.createElement('h1');
        flagElement.textContent = this.flag;
        flagsDiv.appendChild(flagElement);
    }
}
