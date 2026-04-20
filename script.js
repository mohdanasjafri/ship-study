let currentSubject='';
let isPCM=false;

const syllabus={
Physics:{
11:[
'Units and Measurements','Motion in a Straight Line','Motion in a Plane','Laws of Motion',
'Work, Energy and Power','System of Particles and Rotational Motion','Gravitation',
'Mechanical Properties of Solids','Mechanical Properties of Fluids','Thermal Properties of Matter',
'Thermodynamics','Kinetic Theory','Oscillations','Waves'
],
12:[
'Electric Charges and Fields','Electrostatic Potential and Capacitance','Current Electricity',
'Moving Charges and Magnetism','Magnetism and Matter','Electromagnetic Induction',
'Alternating Current','Electromagnetic Waves','Ray Optics and Optical Instruments',
'Wave Optics','Dual Nature of Radiation and Matter','Atoms','Nuclei',
'Semiconductor Electronics'
]
},
Chemistry:{
11:[
'Some Basic Concepts of Chemistry','Structure of Atom',
'Classification of Elements and Periodicity','Chemical Bonding and Molecular Structure',
'Thermodynamics','Equilibrium','Redox Reactions',
'Organic Chemistry: Basic Principles','Hydrocarbons'
],
12:[
'Solutions','Electrochemistry','Chemical Kinetics','d-and f-Block Elements',
'Coordination Compounds','Haloalkanes and Haloarenes',
'Alcohols, Phenols and Ethers',
'Aldehydes, Ketones and Carboxylic Acids','Amines','Biomolecules'
]
},
Mathematics:{
11:[
'Sets','Relations and Functions','Trigonometric Functions',
'Complex Numbers and Quadratic Equations','Linear Inequalities',
'Permutations and Combinations','Binomial Theorem','Sequences and Series',
'Straight Lines','Conic Sections',
'Introduction to 3D Geometry','Limits and Derivatives',
'Statistics','Probability'
],
12:[
'Relations and Functions','Inverse Trigonometric Functions','Matrices','Determinants',
'Continuity and Differentiability','Application of Derivatives','Integrals',
'Application of Integrals','Differential Equations',
'Vector Algebra','Three Dimensional Geometry',
'Linear Programming','Probability'
]
}
};

function showPage(id){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

function enterDashboard(){
const name=document.getElementById('nameInput').value||'Student';
const role=document.querySelector('input[name=role]:checked').value;
document.getElementById('welcomeText').innerText=`Welcome ${name} — Future ${role}`;
showPage('dashboard');
}

function openSubject(s){
currentSubject=s;
isPCM=true;
document.getElementById('classTitle').innerText=s;
showPage('classPage');
}

function openSimple(name){
isPCM=false;
document.getElementById('chapterListTitle').innerText=name;
document.getElementById('chapterContainer').innerHTML='<button>Content Coming Soon</button>';
document.getElementById('chapterBack').onclick=()=>showPage('dashboard');
showPage('chapterList');
}

function openInterview(){
isPCM=false;
document.getElementById('chapterListTitle').innerText='Interview';
document.getElementById('chapterContainer').innerHTML='<button>Non-Technical</button><button>Technical</button>';
document.getElementById('chapterBack').onclick=()=>showPage('dashboard');
showPage('chapterList');
}

function openClass(c){
document.getElementById('chapterListTitle').innerText=currentSubject+' Class '+c;
const box=document.getElementById('chapterContainer');
box.innerHTML='';
syllabus[currentSubject][c].forEach(ch=>{
const b=document.createElement('button');
b.innerText=ch;
b.onclick=()=>openChapter(ch);
box.appendChild(b);
});
document.getElementById('chapterBack').onclick=()=>showPage('classPage');
showPage('chapterList');
}

function openChapter(ch){
document.getElementById('chapterTitle').innerText=ch;
showPage('chapterPage');
}
