document.getElementById('analyzeBtn').addEventListener('click', function() {
    const dnaSequence = document.getElementById('dnaInput').value.toUpperCase();
    const gcContent = calculateGCContent(dnaSequence);
    const motifs = findMotifs(dnaSequence, 'ATG'); // Example motif
    const resultsDiv = document.getElementById('results');

    resultsDiv.innerHTML = `
        <h2>Analysis Results</h2>
        <p>GC Content: ${gcContent.toFixed(2)}%</p>
        <p>Motif 'ATG' Count: ${motifs.length}</p>
    `;
});

function calculateGCContent(sequence) {
    const gCount = (sequence.match(/G/g) || []).length;
    const cCount = (sequence.match(/C/g) || []).length;
    return ((gCount + cCount) / sequence.length) * 100;
}

function findMotifs(sequence, motif) {
    const regex = new RegExp(motif, 'g');
    return sequence.match(regex) || [];
}
