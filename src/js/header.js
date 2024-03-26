



  document.getElementById("sort-select").addEventListener("change", function() {
    let selectedOption = this.value;

    // Means
    let ourTeamSection = document.getElementById("our-team")
    let pickScientistSection = document.getElementById("info__section")

    // Numbers
    let cheackBornAgeSection = document.getElementById("leap-year__section")
    let calculatorOfTimeSection = document.getElementById("time-calculator__section")
    let calculatorSection = document.getElementById("calculator__section")
    let guessTheNumberSection = document.getElementById("guess-the-number-section")
    let threeNumbersSection = document.getElementById("highest-number__section")

    // Games
    let dinoGameSection = document.getElementById("dino-game");
    let soccerGameSection = document.getElementById("soccer")
    let paperRockGameSection = document.getElementById("prs__section")
    switch(selectedOption) {
        case "interactive":
            // Games
            dinoGameSection.classList.remove("display-none");
            soccerGameSection.classList.remove("display-none");
            paperRockGameSection.classList.remove("display-none")

            // Number
            calculatorOfTimeSection.classList.remove("display-none")
            calculatorSection.classList.remove("display-none")
            guessTheNumberSection.classList.remove("display-none")
            threeNumbersSection.classList.remove("display-none")
            cheackBornAgeSection.classList.remove("display-none")

            // Means
            ourTeamSection.classList.remove("display-none")
            pickScientistSection.classList.remove("display-none")
            break;
        case "number":
            //  Games 
            soccerGameSection.classList.add("display-none");
            dinoGameSection.classList.add("display-none");
            paperRockGameSection.classList.add("display-none")

            // Numbers
            calculatorOfTimeSection.classList.remove("display-none")
            calculatorSection.classList.remove("display-none")
            guessTheNumberSection.classList.remove("display-none")
            threeNumbersSection.classList.remove("display-none")
            cheackBornAgeSection.classList.remove("display-none")

            // Means
            ourTeamSection.classList.add("display-none")
            pickScientistSection.classList.add("display-none")
            
            break;
        case "games":
            // Games
            dinoGameSection.classList.remove("display-none");
            soccerGameSection.classList.remove("display-none");
            paperRockGameSection.classList.remove("display-none")

            // Numbers
            calculatorOfTimeSection.classList.add("display-none")
            calculatorSection.classList.add("display-none")
            guessTheNumberSection.classList.add("display-none")
            threeNumbersSection.classList.add("display-none")
            cheackBornAgeSection.classList.add("display-none")

            // Means
            ourTeamSection.classList.add("display-none")
            pickScientistSection.classList.add("display-none")
            break;
        case "means":
            // Games
            dinoGameSection.classList.add("display-none");
            soccerGameSection.classList.add("display-none");
            paperRockGameSection.classList.add("display-none");

            // Numbers
            calculatorOfTimeSection.classList.add("display-none")
            calculatorSection.classList.add("display-none")
            guessTheNumberSection.classList.add("display-none")
            threeNumbersSection.classList.add("display-none")
            cheackBornAgeSection.classList.add("display-none")

            // Means
            ourTeamSection.classList.remove("display-none")
            pickScientistSection.classList.remove("display-none")
            break;
        default:
            break;
    }
});





// Header
let header = document.getElementById('header');
let headerLogo = document.querySelector(".header__logo")

// Cheak-your-born-age
let leapYearSection = document.getElementById("leap-year__section")

// guess-the-number
let guessTheNumberSection = document.getElementById("guess-the-number-section")

// prs__section
let prsSection = document.getElementById("prs__section")

// calculator
let calculatorSection = document.getElementById("calculator__section")

// calculator-of-time
let timeCalculatorSection = document.getElementById("time-calculator__section")

// Dino-game
let dinoGame = document.getElementById("dino-game")

// Soccer
let soccer = document.getElementById("soccer")

// Three-numbers
let highestNumberSection = document.getElementById("highest-number__section")

// Our-team
let ourTeam = document.getElementById("our-team")

// Pick-scientist
let infoSection = document.getElementById("info__section")

// Footer
let footer = document.querySelector(".footer")

document.querySelector('.switch').addEventListener('click', function() {
    this.classList.toggle('night');
    if (this.classList.contains('night')) {
        // Header
        header.style.backgroundColor = '#333';
        // headerLogo.src = './images/header/header-symbol-defs.svg#white-logo'
        
        // Cheak-your-born-age
        leapYearSection.style.backgroundColor = '#333';

        // guess-the-number
        guessTheNumberSection.style.backgroundColor = '#333';

        // prs__section
        prsSection.style.backgroundColor = '#333';

        // calculator
        calculatorSection.style.backgroundColor = '#333';

        // calculator-of-time
        timeCalculatorSection.style.backgroundColor = '#333';

        // Dino-game
        dinoGame.style.backgroundColor = '#333';

        // Soccer
        soccer.style.backgroundColor = '#333';

        // Three-numbers
        highestNumberSection.style.backgroundColor = '#333';

        // Our-team
        ourTeam.style.backgroundColor = '#333';

        // Pick-scientist
        infoSection.style.backgroundColor = '#fff';

        // Footer
        footer.style.backgroundColor = '#333';
    } else {
        // Header
        header.style.backgroundColor = '#fff';
        // headerLogo.src = "./images/header/header-symbol-defs.svg#logo"

        // Cheak-your-born-age
        leapYearSection.style.backgroundColor = '#fff';

        // guess-the-number
        guessTheNumberSection.style.backgroundColor = '#fff';

        // prs__section
        prsSection.style.backgroundColor = '#fff';

        // calculator
        calculatorSection.style.backgroundColor = '#fff';

        // calculator-of-time
        timeCalculatorSection.style.backgroundColor = '#fff';

        // Dino-game
        dinoGame.style.backgroundColor = '#fff';

        // Soccer
        soccer.style.backgroundColor = '#fff';

        // Three-numbers
        highestNumberSection.style.backgroundColor = '#fff';

        // Our-team
        ourTeam.style.backgroundColor = '#fff';

        // Pick-scientist
        infoSection.style.backgroundColor = '#fff';

        // Footer
        footer.style.backgroundColor = '#fff';

    }
});