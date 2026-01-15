const grammarInstructions = {
    weak: `
        <h2>Weak Declension</h2>
        <p>Used after <b>definite articles</b> (der, die, das) or words like <i>dieser, jeder</i>.</p>
        <table>
            <tr><th>Case</th><th>Masc</th><th>Fem</th><th>Neut</th><th>Plur</th></tr>
            <tr><td>Nom</td><td>-e</td><td>-e</td><td>-e</td><td>-en</td></tr>
            <tr><td>Acc</td><td>-en</td><td>-e</td><td>-e</td><td>-en</td></tr>
            <tr><td>Dat/Gen</td><td>-en</td><td>-en</td><td>-en</td><td>-en</td></tr>
        </table>
        <p><i>Hint: Most plurals and changed articles lead to <b>-en</b>.</i></p>
    `,
    mixed: `
        <h2>Mixed Declension</h2>
        <p>Used after <b>indefinite articles</b> (ein, eine) or <b>possessives</b> (mein, dein).</p>
        <table>
            <tr><th>Case</th><th>Masc</th><th>Fem</th><th>Neut</th><th>Plur</th></tr>
            <tr><td>Nom</td><td>-er</td><td>-e</td><td>-es</td><td>-en</td></tr>
            <tr><td>Acc</td><td>-en</td><td>-e</td><td>-es</td><td>-en</td></tr>
            <tr><td>Dat/Gen</td><td>-en</td><td>-en</td><td>-en</td><td>-en</td></tr>
        </table>
    `,
    strong: `
        <h2>Strong Declension</h2>
        <p>Used when there is <b>no article</b> before the adjective.</p>
        <p>The adjective takes the "signal" ending that the article usually has.</p>
        <table>
            <tr><th>Case</th><th>Masc</th><th>Fem</th><th>Neut</th><th>Plur</th></tr>
            <tr><td>Nom</td><td>-er</td><td>-e</td><td>-es</td><td>-e</td></tr>
            <tr><td>Acc</td><td>-en</td><td>-e</td><td>-es</td><td>-e</td></tr>
            <tr><td>Dat</td><td>-em</td><td>-er</td><td>-em</td><td>-en</td></tr>
        </table>
    `,
    // Add this to your grammarInstructions object
advanced: `
    <h2>Advanced Challenge</h2>
    <p>In this mode, you will encounter sentences with <b>2 or 3 blanks</b>.</p>
    <ul>
        <li>You must switch between <b>Weak, Mixed, and Strong</b> logic within the same sentence.</li>
        <li>Identify the "Determiner" (Article) for <i>each</i> noun individually.</li>
        <li>One mistake in any blank makes the whole sentence "Falsch".</li>
    </ul>
    <p><i>Focus on the relationship between the Article and the Adjective for every single word.</i></p>
`
};
