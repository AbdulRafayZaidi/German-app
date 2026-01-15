const strongExercises = [
    // --- NOMINATIVE ---
    { sentence: "Heiß__ Tee schmeckt gut.", ending: "er", context: "Nom / Masc" },
    { sentence: "Stark__ Kaffee macht wach.", ending: "er", context: "Nom / Masc" },
    { sentence: "Trocken__ Wein passt dazu.", ending: "er", context: "Nom / Masc" },
    { sentence: "Klar__ Himmel verspricht Sonne.", ending: "er", context: "Nom / Masc" },
    { sentence: "Alt__ Freund bleibt treu.", ending: "er", context: "Nom / Masc" },

    { sentence: "Frisch__ Milch ist gesund.", ending: "e", context: "Nom / Fem" },
    { sentence: "Schön__ Aussicht beruhigt.", ending: "e", context: "Nom / Fem" },
    { sentence: "Hart__ Arbeit zahlt sich aus.", ending: "e", context: "Nom / Fem" },
    { sentence: "Tief__ Nacht war still.", ending: "e", context: "Nom / Fem" },
    { sentence: "Groß__ Freude entsteht.", ending: "e", context: "Nom / Fem" },

    { sentence: "Kalt__ Wasser erfrischt.", ending: "es", context: "Nom / Neut" },
    { sentence: "Deutsch__ Bier ist beliebt.", ending: "es", context: "Nom / Neut" },
    { sentence: "Lecker__ Essen ist fertig.", ending: "es", context: "Nom / Neut" },
    { sentence: "Sauber__ Geschirr steht bereit.", ending: "es", context: "Nom / Neut" },
    { sentence: "Frisch__ Brot duftet.", ending: "es", context: "Nom / Neut" },

    { sentence: "Alt__ Freunde helfen.", ending: "e", context: "Nom / Plur" },
    { sentence: "Jung__ Leute lernen schnell.", ending: "e", context: "Nom / Plur" },
    { sentence: "Klein__ Kinder lachen.", ending: "e", context: "Nom / Plur" },
    { sentence: "Teuer__ Autos parken hier.", ending: "e", context: "Nom / Plur" },
    { sentence: "Schön__ Blumen blühen.", ending: "e", context: "Nom / Plur" },

    // --- ACCUSATIVE ---
    { sentence: "Ich trinke gern heiß__ Tee.", ending: "en", context: "Acc / Masc" },
    { sentence: "Er kauft teuer__ Wein.", ending: "en", context: "Acc / Masc" },
    { sentence: "Wir brauchen frisch__ Kaffee.", ending: "en", context: "Acc / Masc" },
    { sentence: "Sie meidet laut__ Lärm.", ending: "en", context: "Acc / Masc" },
    { sentence: "Er sucht alt__ Freund.", ending: "en", context: "Acc / Masc" },

    { sentence: "Sie trinkt kalt__ Limo.", ending: "e", context: "Acc / Fem" },
    { sentence: "Wir hören laut__ Musik.", ending: "e", context: "Acc / Fem" },
    { sentence: "Er braucht schnell__ Hilfe.", ending: "e", context: "Acc / Fem" },
    { sentence: "Sie mag klassisch__ Musik.", ending: "e", context: "Acc / Fem" },
    { sentence: "Ich spüre groß__ Freude.", ending: "e", context: "Acc / Fem" },

    { sentence: "Er isst frisch__ Brot.", ending: "es", context: "Acc / Neut" },
    { sentence: "Wir trinken dunkel__ Bier.", ending: "es", context: "Acc / Neut" },
    { sentence: "Sie kocht indisch__ Curry.", ending: "es", context: "Acc / Neut" },
    { sentence: "Ich esse süß__ Obst.", ending: "es", context: "Acc / Neut" },
    { sentence: "Er bestellt kalt__ Wasser.", ending: "es", context: "Acc / Neut" },

    { sentence: "Ich sehe hoh__ Bäume.", ending: "e", context: "Acc / Plur" },
    { sentence: "Sie kauft neu__ Schuhe.", ending: "e", context: "Acc / Plur" },
    { sentence: "Wir sammeln alt__ Münzen.", ending: "e", context: "Acc / Plur" },
    { sentence: "Er liest spannend__ Bücher.", ending: "e", context: "Acc / Plur" },
    { sentence: "Sie mag sauer__ Gurken.", ending: "e", context: "Acc / Plur" },

    // --- DATIVE ---
    { sentence: "Mit stark__ Kaffee beginnen.", ending: "em", context: "Dat / Masc" },
    { sentence: "Bei gut__ Wind segeln.", ending: "em", context: "Dat / Masc" },
    { sentence: "Nach lang__ Weg ruhen.", ending: "em", context: "Dat / Masc" },
    { sentence: "Mit neu__ Plan starten.", ending: "em", context: "Dat / Masc" },
    { sentence: "Bei kalt__ Regen warten.", ending: "em", context: "Dat / Masc" },

    { sentence: "Mit groß__ Freude helfen.", ending: "er", context: "Dat / Fem" },
    { sentence: "Aus rein__ Liebe handeln.", ending: "er", context: "Dat / Fem" },
    { sentence: "Nach kurz__ Pause weitergehen.", ending: "er", context: "Dat / Fem" },
    { sentence: "Mit laut__ Stimme sprechen.", ending: "er", context: "Dat / Fem" },
    { sentence: "In tief__ Nacht arbeiten.", ending: "er", context: "Dat / Fem" },

    { sentence: "Bei gut__ Wetter reisen.", ending: "em", context: "Dat / Neut" },
    { sentence: "In hoh__ Alter bleiben.", ending: "em", context: "Dat / Neut" },
    { sentence: "Nach lang__ Warten beginnen.", ending: "em", context: "Dat / Neut" },
    { sentence: "Mit frisch__ Brot essen.", ending: "em", context: "Dat / Neut" },
    { sentence: "Aus kalt__ Wasser steigen.", ending: "em", context: "Dat / Neut" },

    { sentence: "Mit jung__ Leuten sprechen.", ending: "en", context: "Dat / Plur" },
    { sentence: "Von alt__ Freunden lernen.", ending: "en", context: "Dat / Plur" },
    { sentence: "Bei hoh__ Bergen wandern.", ending: "en", context: "Dat / Plur" },
    { sentence: "Mit klein__ Kindern spielen.", ending: "en", context: "Dat / Plur" },
    { sentence: "Zwischen groß__ Häusern wohnen.", ending: "en", context: "Dat / Plur" },

    // --- GENITIVE ---
    { sentence: "Der Duft frisch__ Brotes.", ending: "en", context: "Gen / Neut" },
    { sentence: "Ein Glas kalt__ Wassers.", ending: "en", context: "Gen / Neut" },
    { sentence: "Die Wirkung stark__ Kaffees.", ending: "en", context: "Gen / Masc" },
    { sentence: "Trotz schlecht__ Wetters.", ending: "en", context: "Gen / Neut" },
    { sentence: "Wegen lang__ Weges.", ending: "en", context: "Gen / Masc" },

    { sentence: "Der Klang schön__ Musik.", ending: "er", context: "Gen / Fem" },
    { sentence: "Die Farbe grün__ Grases.", ending: "en", context: "Gen / Neut" },
    { sentence: "Die Hilfe gut__ Freunde.", ending: "er", context: "Gen / Plur" },
    { sentence: "Das Licht hell__ Sterne.", ending: "er", context: "Gen / Plur" },
    { sentence: "Die Pflege alt__ Menschen.", ending: "er", context: "Gen / Plur" }
];