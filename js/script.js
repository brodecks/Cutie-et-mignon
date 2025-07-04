const filmsParGenre = {
    "action": [
        "Mad Max: Fury Road (2015) - George Miller",
        "John Wick: Chapter 4 (2023) - Chad Stahelski",
        "Mission: Impossible - Dead Reckoning (2023) - Christopher McQuarrie",
        "Django Unchained (2012) - Quentin Tarantino",
        "The Dark Knight (2008) - Christopher Nolan",
        "Gladiator (2000) - Ridley Scott",
        "Die Hard (1988) - John McTiernan",
        "The Matrix (1999) - Lana & Lilly Wachowski",
        "Kill Bill: Vol. 1 (2003) - Quentin Tarantino",
        "The Raid (2011) - Gareth Evans",
        "Oldboy (2003) - Park Chan-wook",
        "300 (2006) - Zack Snyder",
        "Black Panther (2018) - Ryan Coogler",
        "The Bourne Identity (2002) - Doug Liman",
        "Crouching Tiger, Hidden Dragon (2000) - Ang Lee",
        "Heat (1995) - Michael Mann",
        "Léon: The Professional (1994) - Luc Besson",
        "Seven Samurai (1954) - Akira Kurosawa",
        "Terminator 2: Judgment Day (1991) - James Cameron",
        "Aliens (1986) - James Cameron"
    ],
    "sf": [
        "Inception (2010) - Christopher Nolan",
        "Interstellar (2014) - Christopher Nolan",
        "Arrival (2016) - Denis Villeneuve",
        "Dune (2021) - Denis Villeneuve",
        "Blade Runner 2049 (2017) - Denis Villeneuve",
        "The Fifth Element (1997) - Luc Besson",
        "2001: A Space Odyssey (1968) - Stanley Kubrick",
        "Star Wars: Episode V - The Empire Strikes Back (1980) - Irvin Kershner",
        "The Martian (2015) - Ridley Scott",
        "District 9 (2009) - Neill Blomkamp",
        "Children of Men (2006) - Alfonso Cuarón",
        "Snowpiercer (2013) - Bong Joon-ho",
        "Annihilation (2018) - Alex Garland",
        "Ex Machina (2014) - Alex Garland",
        "Her (2013) - Spike Jonze",
        "Moon (2009) - Duncan Jones",
        "Predator (1987) - John McTiernan",
        "The Thing (1982) - John Carpenter",
        "Akira (1988) - Katsuhiro Otomo",
        "Ghost in the Shell (1995) - Mamoru Oshii"
    ],
    "drame": [
        "The Social Network (2010) - David Fincher",
        "12 Years a Slave (2013) - Steve McQueen",
        "Moonlight (2016) - Barry Jenkins",
        "Marriage Story (2019) - Noah Baumbach",
        "Nomadland (2020) - Chloé Zhao",
        "The Shawshank Redemption (1994) - Frank Darabont",
        "Schindler's List (1993) - Steven Spielberg",
        "Forrest Gump (1994) - Robert Zemeckis",
        "The Godfather (1972) - Francis Ford Coppola",
        "Fight Club (1999) - David Fincher",
        "Good Will Hunting (1997) - Gus Van Sant",
        "American Beauty (1999) - Sam Mendes",
        "The Pianist (2002) - Roman Polanski",
        "Whiplash (2014) - Damien Chazelle",
        "La La Land (2016) - Damien Chazelle",
        "Manchester by the Sea (2016) - Kenneth Lonergan",
        "Call Me by Your Name (2017) - Luca Guadagnino",
        "Parasite (2019) - Bong Joon-ho",
        "The Father (2020) - Florian Zeller",
        "Past Lives (2023) - Celine Song"
    ],
    "comedie": [
        "The Grand Budapest Hotel (2014) - Wes Anderson",
        "La La Land (2016) - Damien Chazelle",
        "Barbie (2023) - Greta Gerwig",
        "Midnight in Paris (2011) - Woody Allen",
        "Superbad (2007) - Greg Mottola",
        "The Hangover (2009) - Todd Phillips",
        "Bridesmaids (2011) - Paul Feig",
        "Legally Blonde (2001) - Robert Luketic",
        "Clueless (1995) - Amy Heckerling",
        "Groundhog Day (1993) - Harold Ramis",
        "Mean Girls (2004) - Mark Waters",
        "Zoolander (2001) - Ben Stiller",
        "Anchorman (2004) - Adam McKay",
        "Airplane! (1980) - Jim Abrahams",
        "Monty Python and the Holy Grail (1975) - Terry Gilliam",
        "The Big Lebowski (1998) - Coen Brothers",
        "Napoleon Dynamite (2004) - Jared Hess",
        "Booksmart (2019) - Olivia Wilde",
        "Pitch Perfect (2012) - Jason Moore",
        "Deadpool (2016) - Tim Miller"
    ],
    "thriller": [
        "Shutter Island (2010) - Martin Scorsese",
        "Prisoners (2013) - Denis Villeneuve",
        "Nightcrawler (2014) - Dan Gilroy",
        "Parasite (2019) - Bong Joon-ho",
        "Gone Girl (2014) - David Fincher",
        "Se7en (1995) - David Fincher",
        "The Silence of the Lambs (1991) - Jonathan Demme",
        "Zodiac (2007) - David Fincher",
        "No Country for Old Men (2007) - Coen Brothers",
        "The Girl with the Dragon Tattoo (2011) - David Fincher",
        "Oldboy (2003) - Park Chan-wook",
        "Memories of Murder (2003) - Bong Joon-ho",
        "The Chaser (2008) - Na Hong-jin",
        "Prisoners (2013) - Denis Villeneuve",
        "The Prestige (2006) - Christopher Nolan",
        "Memento (2000) - Christopher Nolan",
        "The Usual Suspects (1995) - Bryan Singer",
        "Chinatown (1974) - Roman Polanski",
        "Vertigo (1958) - Alfred Hitchcock",
        "Psycho (1960) - Alfred Hitchcock"
    ],
    "horreur": [
        "Hereditary (2018) - Ari Aster",
        "Get Out (2017) - Jordan Peele",
        "Midsommar (2019) - Ari Aster",
        "The Witch (2015) - Robert Eggers",
        "The Exorcist (1973) - William Friedkin",
        "The Shining (1980) - Stanley Kubrick",
        "Alien (1979) - Ridley Scott",
        "The Thing (1982) - John Carpenter",
        "A Nightmare on Elm Street (1984) - Wes Craven",
        "The Babadook (2014) - Jennifer Kent",
        "It Follows (2014) - David Robert Mitchell",
        "The Conjuring (2013) - James Wan",
        "Scream (1996) - Wes Craven",
        "The Ring (2002) - Gore Verbinski",
        "Let the Right One In (2008) - Tomas Alfredson",
        "Suspiria (1977) - Dario Argento",
        "The Descent (2005) - Neil Marshall",
        "REC (2007) - Jaume Balagueró",
        "The Wicker Man (1973) - Robin Hardy",
        "Candyman (1992) - Bernard Rose"
    ],
    "animation": [
        "Toy Story 3 (2010) - Lee Unkrich",
        "Inside Out (2015) - Pete Docter",
        "Spider-Man: Into the Spider-Verse (2018) - Peter Ramsey",
        "Soul (2020) - Pete Docter",
        "Spirited Away (2001) - Hayao Miyazaki",
        "My Neighbor Totoro (1988) - Hayao Miyazaki",
        "Princess Mononoke (1997) - Hayao Miyazaki",
        "Howl's Moving Castle (2004) - Hayao Miyazaki",
        "The Lion King (1994) - Roger Allers",
        "Wall-E (2008) - Andrew Stanton",
        "Up (2009) - Pete Docter",
        "Coco (2017) - Lee Unkrich",
        "The Incredibles (2004) - Brad Bird",
        "Finding Nemo (2003) - Andrew Stanton",
        "Ratatouille (2007) - Brad Bird",
        "Persepolis (2007) - Marjane Satrapi",
        "The Nightmare Before Christmas (1993) - Henry Selick",
        "Coraline (2009) - Henry Selick",
        "Fantastic Mr. Fox (2009) - Wes Anderson",
        "Klaus (2019) - Sergio Pablos"
    ]
};

        function choisirFilm() {
            const genre = document.getElementById("genre").value;
            const films = filmsParGenre[genre];
            
            if (!films || films.length === 0) {
                document.getElementById("resultat").innerHTML = "<p>Aucun film disponible pour ce genre.</p>";
                return;
            }

            const filmAleatoire = films[Math.floor(Math.random() * films.length)];
            document.getElementById("resultat").innerHTML = `
                <h3>🎬 Film recommandé :</h3>
                <p><strong>${filmAleatoire}</strong></p>
                <p><em>Genre : ${document.getElementById("genre").options[document.getElementById("genre").selectedIndex].text}</em></p>
            `;
        }