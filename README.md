# 🧬 DNA Sequence Viewer

An interactive **web-based DNA Sequence Viewer** for exploring and visualizing DNA sequences through a simple browser-based interface.

The tool is designed to make fundamental sequence-analysis concepts more accessible by allowing users to enter DNA sequences and examine important biological features such as **GC content, sequence motifs, and restriction sites**.

## 🔬 Overview

DNA sequences contain information that can be analyzed computationally to identify important sequence characteristics.

This project provides an interactive environment for exploring a DNA sequence:

```text
DNA Sequence
     │
     ├── Sequence Visualization
     │
     ├── GC Content Analysis
     │
     ├── Motif Detection
     │
     └── Restriction Site Identification
```

The project demonstrates how basic **bioinformatics algorithms** can be integrated into a modern web interface.

## ✨ Features

### 🧬 DNA Sequence Input

Users can enter or paste a DNA sequence directly into the application.

The sequence can then be processed for downstream analysis.

### 📊 GC Content Analysis

Calculate the percentage of **guanine (G)** and **cytosine (C)** bases within the input sequence.

```text
GC Content (%) =
(G + C) / Total Bases × 100
```

GC content is a fundamental sequence characteristic commonly used in genomic and molecular biology analyses.

### 🔎 Motif Detection

Search DNA sequences for specific nucleotide patterns or motifs.

This can help demonstrate concepts such as:

* Sequence pattern recognition
* Regulatory motifs
* Repeated sequence patterns
* Short sequence signatures

### ✂️ Restriction Site Detection

Identify potential restriction-enzyme recognition sites within the DNA sequence.

For example:

```text
EcoRI
GAATTC
```

Detected sites can be highlighted to make their positions easier to interpret.

### 👁️ Sequence Visualization

The nucleotide sequence is presented in an accessible visual format, helping users explore sequence-level information interactively.

## 🛠️ Technologies

| Technology           | Purpose                                   |
| -------------------- | ----------------------------------------- |
| **HTML5**            | Webpage structure                         |
| **CSS3**             | Interface styling                         |
| **JavaScript**       | Sequence-analysis logic and interactivity |
| **DOM Manipulation** | Dynamic visualization and results         |

## 📁 Project Structure

```text
DNA-sequence-veiwer/
│
├── index.html
├── script.js
├── styles.css
└── README.md
```

### `index.html`

Defines the structure of the DNA Sequence Viewer interface.

### `script.js`

Contains the JavaScript logic for sequence processing, analysis, and interactive functionality.

### `styles.css`

Controls the visual appearance, layout, and styling of the application.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Bioinformatician-dev/DNA-sequence-veiwer.git
cd DNA-sequence-veiwer
```

### 2. Open the application

Because this is a client-side web application, you can open:

```text
index.html
```

directly in a modern web browser.

Alternatively, use a local development server such as VS Code Live Server.

## 🧪 Example Workflow

```text
1. Enter DNA Sequence
          ↓
2. Validate Sequence
          ↓
3. Visualize Nucleotides
          ↓
4. Calculate GC Content
          ↓
5. Search for Motifs
          ↓
6. Identify Restriction Sites
          ↓
7. Explore Results
```

## 🧬 Example DNA Sequence

```text
ATGCGTAGCTAGCTACGATCGATCG
```

The application can use a sequence such as this to demonstrate:

* Sequence length
* GC percentage
* Motif occurrences
* Restriction-site positions

## 🎯 Learning Objectives

This project demonstrates practical concepts in:

* Computational biology
* DNA sequence analysis
* Bioinformatics algorithms
* Pattern matching
* Sequence visualization
* JavaScript programming
* Front-end web development
* Interactive scientific applications

## 🔬 Bioinformatics Concepts

### DNA Nucleotides

DNA consists of four primary nucleotides:

```text
A → Adenine
T → Thymine
G → Guanine
C → Cytosine
```

### Complementary Sequence

The complementary bases are:

```text
A ↔ T
G ↔ C
```

This relationship is fundamental to DNA sequence analysis.

### GC Content

GC content provides a basic measure of the proportion of G and C nucleotides in a sequence.

### Motifs

A motif is a recurring or biologically meaningful sequence pattern that can be searched computationally.

### Restriction Sites

Restriction enzymes recognize specific DNA sequences and can cleave DNA at or near those recognition sites.

## 🚀 Future Improvements

Potential extensions include:

* [ ] FASTA file upload
* [ ] FASTA sequence export
* [ ] Reverse-complement generation
* [ ] Translation of DNA → protein
* [ ] ORF detection
* [ ] Codon analysis
* [ ] Nucleotide frequency charts
* [ ] GC-content visualization
* [ ] Multiple sequence comparison
* [ ] More restriction enzymes
* [ ] Custom motif search
* [ ] Sequence annotation
* [ ] Interactive sequence highlighting
* [ ] Dark/light mode
* [ ] Responsive mobile interface

## 🌐 Potential Applications

The DNA Sequence Viewer can be useful for:

* Bioinformatics education
* Molecular biology learning
* Demonstrating sequence-analysis algorithms
* Teaching DNA fundamentals
* Introductory computational biology
* Interactive science education

## 💡 Project Motivation

Bioinformatics can initially seem complex because biological sequences are often represented as large collections of letters.

This project explores how **simple computational algorithms + interactive visualization** can turn raw DNA sequences into information that is easier to understand.

```text
Biology
   +
Programming
   +
Visualization
   ↓
Interactive Bioinformatics
```

## ⚠️ Disclaimer

This project is intended for **educational and research purposes**. Results generated by the application should not be considered a substitute for validated laboratory or clinical analysis.

## 👩‍💻 Author

**Bioinformatician-dev**

GitHub:
https://github.com/Bioinformatician-dev

## 📄 License

Please refer to the repository for the applicable license and usage conditions.
