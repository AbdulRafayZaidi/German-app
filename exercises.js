const exerciseModules = [
    {
        id: "weak-declension",
        title: "Weak Declension (Definite Articles)",
        explanation: `
            <p>Use <b>Weak Declension</b> when the noun is preceded by a "Determiner" that clearly shows the case (like <i>der, die, das, dieses, jenes</i>).</p>
            <table border="1" style="width:100%; border-collapse: collapse; text-align: center;">
                <tr><th>Case</th><th>Masc</th><th>Fem</th><th>Neut</th><th>Plur</th></tr>
                <tr><td>Nom</td><td>-e</td><td>-e</td><td>-e</td><td>-en</td></tr>
                <tr><td>Acc</td><td>-en</td><td>-e</td><td>-e</td><td>-en</td></tr>
                <tr><td>Dat/Gen</td><td>-en</td><td>-en</td><td>-en</td><td>-en</td></tr>
            </table>
            <p><i>Rule of thumb: Most things become -en except for the "L-shape" in Nominative and Accusative.</i></p>
        `,
        questions: [
            { sentence: "Der alt__ Mann schläft.", ending: "e", context: "Nom / Masc" },
            { sentence: "Ich sehe den klein__ Hund.", ending: "en", context: "Acc / Masc" }
        ]
    },
    {
        id: "mixed-declension",
        title: "Mixed Declension (Indefinite Articles)",
        explanation: `
            <p>Use <b>Mixed Declension</b> after <i>ein, eine, kein,</i> or possessive pronouns (<i>mein, dein, etc.</i>).</p>
            <ul>
                <li>The adjective must "take over" the signal if <b>ein</b> is neutral.</li>
                <li>Example: <b>ein</b> (neutral) -> <i>ein gut<b>es</b> Buch</i>.</li>
            </ul>
        `,
        questions: [
            { sentence: "Das ist ein klein__ Haus.", ending: "es", context: "Nom / Neut" },
            { sentence: "Sie hat einen rot__ Apfel.", ending: "en", context: "Acc / Masc" }
        ]
    }
];
