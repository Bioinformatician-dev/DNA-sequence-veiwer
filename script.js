document.getElementById('analyzeBtn').addEventListener('click', function() {
    const dnaSequence = document.getElementById('dnaInput').value.toUpperCase().trim();
    const gcContent = calculateGCContent(dnaSequence);
    const motifs = findMotifs(dnaSequence, 'ATG'); // Example motif
    const restrictionSites = findRestrictionSites(dnaSequence);

    document.getElementById('gcContent').innerText = `GC Content: ${gcContent.toFixed(2)}%`;
    document.getElementById('motifs').innerText = `Motifs Found: ${motifs.join(', ')}`;
    document.getElementById('restrictionSites').innerText = `Restriction Sites: ${restrictionSites.join(', ')}`;
});

function calculateGCContent(sequence) {
    if (!sequence) return 0;
    const gCount = (sequence.match(/G/g) || []).length;
    const cCount = (sequence.match(/C/g) || []).length;
    return ((gCount + cCount) / sequence.length) * 100;
}

function findMotifs(sequence, motif) {
    const indices = [];
    let startIndex = 0;
    while ((startIndex = sequence.indexOf(motif, startIndex)) > -1) {
        indices.push(startIndex + 1); // 1-based index
        startIndex++;
    }
    return indices.length > 0 ? indices : ['None'];
}

function findRestrictionSites(sequence) {
    const sites = ['AAGCTT', 'GAATTC', 'CTCGAG']; // Example restriction sites
    return sites.filter(site => sequence.includes(site));
}


