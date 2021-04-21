// All functions have "window." due to hint:
// https://stackoverflow.com/questions/57602686/
//   javascript-function-wont-trigger-when-called-in-html-file-during-parcel-build

window.sayHello = function() {
  const samples = [
    '¡Bienvenido!\nAquí tienes un texto.',
    'Willkommen!\nHier ist etwas Text.',
    'Bienvenue!\nVoici un peu de texte.',
  ]
  const i = Math.floor(Math.random() * samples.length)

  let greeting = samples[i]

  if (process.env.NODE_ENV === 'development') {
    greeting += Array(5).fill(' Lots of text for development.').join('')
  }

  document.getElementById('L1').value = greeting

  document.getElementById('L2').value = `Welcome!\nHere is some text.`
}

window.writeText = function() {

  function getParagraphs(elid) {
    var t = document.getElementById(elid).value;
    var pars = t.split(/\r?\n/g);
    return pars.filter(e => e && e.trim() !== '');
  }

  var l1pars = getParagraphs("L1");
  var l2pars = getParagraphs("L2");

  lc = l1pars.length
  rc = l2pars.length
  let warning = ''
  if (lc !== rc) {
    warning = `Warning: different paragraph counts: left = ${lc}, right = ${rc}`;
  }
  document.getElementById('userwarning').innerHTML = warning;

  var pairs = l1pars.map(function(e, i) {
    return [e, l2pars[i] || '???' ];
  });

  const fontsize = document.getElementById('fontsize').value
  var lines = pairs.map(function (pair) {
    const [left, right] = pair
    const tds = pair.map(e => `<td>${e}</td>`)
    const txt = `<tr>${tds.join('')}</tr>`
    return txt
    // var content = pair.map((e) => { return `<div class="col" style="font-size: ${fontsize}px;">${e}</div>`; });
    // return `<div class="box">\n${content.join('')}</div>`
  });

  const tbl = `<table class="outputtable" style="font-size: ${fontsize}px; width: 100%;">${lines.join('')}</table>`
  // document.getElementById('output').innerHTML = lines.join('\n');
  document.getElementById('output').innerHTML = tbl;
}


window.getPdf = function() {
  var pdf = new jsPDF('p', 'pt', 'letter');
  pdf.canvas.height = 72 * 11;
  pdf.canvas.width = 72 * 8.5;

  pdf.fromHTML(document.getElementById('output'));

  pdf.save('bidiread.pdf');
};
