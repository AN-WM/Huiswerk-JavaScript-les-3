// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

// De stappen:
// 1. Een functie waar de array in terecht komt,
// 2. Een counter initialiseren waarmee we het gewenste aantal cumlaude's kunnen  bijhouden
// 3. Een for-loop waarin de hele array stap voor stap gecheckt wordt, ongeacht de lengte
// 4. In de for loop met een if-statement checken of het getal telt als cum laude. Zo ja, de counter met 1 verhogen
// 5. Wanneer de hele array gecheckt is de waarde van de counter teruggeven als uitkomst.

 function countCumLaude(list) {
     let counter = 0;

     for (let i = 0; i <= (list.length - 1); i++) {
         if (list[i] >= 8) {
             counter ++;
         }
     }
     return counter;
 }

console.log(countCumLaude(grades));

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

//~*~ Mijn functie was al herbruikbaar, hij heet alleen anders...


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

//De stappen:
// 1. Om het gemiddelde te berekenen deel je de totale som door het aantal getallen.
// 2. Ik wil dus een variabele om de totale som in op te slaan, en een variabele om te weten hoeveel getallen we hebben gehad.
// 3. Wanneer de hele array doorlopen is kan ik het totaal delen door het aantal stappen, en return ik de uitkomst.

function averageGrade(allGrades) {
    let counter = 0;
    let total = 0;

    for (let i = 0; i <= (allGrades.length - 1); i++) {
       counter = counter + 1;
       total = total + allGrades[i];
    }

    const average = total/counter;
    return average;
}

console.log(averageGrade(grades));


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

// ~*~ Waarom gaan jullie er steeds van uit dat ik geen herbruikbare functies schrijf? Dat is toch helemaal niet handig om te doen? Deze keer had ik toevallig al wel de goede naam bedacht.

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

function averageGradeRounded(allGrades) {
    let counter = 0;
    let total = 0;

    for (let i = 0; i <= (allGrades.length - 1); i++) {
        counter = counter + 1;
        total = total + allGrades[i];
    }

    const average = total/counter;

    function roundToTwo(input) {
        return +(Math.round(input + "e+2")  + "e-2");
    }

    return roundToTwo(average);
}

console.log(averageGradeRounded(grades));


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

// De stappen:
// 1. Een functie waar de array in terecht komt,
// 2. Een herbruikbare variabele initieren om het hoogste cijfer in te loggen
// 3. Een for-loop waarin de hele array stap voor stap gecheckt wordt, ongeacht de lengte
// 4. In de for loop met een if-statement checken of het huidige getal in de array groter is dan het al gelogde cijfer
// 5. Wanneer de hele array gecheckt is de waarde van de variabele teruggeven als uitkomst.

function highestGrade(input) {
    let topScore = 0;

    for (let i = 0; i <= (input.length - 1); i++) {
        if (input[i] > topScore) {
            topScore = input[i];
        }
    }

    return topScore;
}

console.log(highestGrade(grades));


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

// ~*~ Je raadt het niet, maar ik had hem dus al herbruikbaar gemaakt. De naam weer goed gegokt.