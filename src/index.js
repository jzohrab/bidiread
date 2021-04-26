// All functions have "window." due to hint:
// https://stackoverflow.com/questions/57602686/
//   javascript-function-wont-trigger-when-called-in-html-file-during-parcel-build

/**
 * Fill in greetings.
 */
window.sayHello = function() {
  const samples = [
    '¡Bienvenido!\nAquí tienes un texto.',
    'Willkommen!\nHier ist etwas Text.',
    'Bienvenue!\nVoici un peu de texte.',
  ]
  const i = Math.floor(Math.random() * samples.length)

  document.getElementById('L1').value = samples[i]
  document.getElementById('L2').value = `Welcome!\nHere is some text.`

  if (process.env.NODE_ENV === 'development') {
    window.devPrep()
  }
}


/**
 * Hacks for dev.
 */
window.devPrep = function() {
  const paragraph = Array(5).fill('Lots of text for development to check layouts.').join(' ')
  const devextra = '\n' + Array(10).fill(paragraph).map((s, i) => `P${i}. ${s}`).join('\n')
  const ids = ['L1', 'L2']
  ids.forEach(s => {
    const el = document.getElementById(s)
    el.value = el.value + devextra
  })
  window.joinTexts()
}


/**
 * Generate the bidirectional reader.
 */
window.joinTexts = function() {

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

  const leftfont = document.getElementById('leftfont').value
  const rightfont = document.getElementById('rightfont').value
  const fontsize = document.getElementById('fontsize').value
  var lines = pairs.map(function (pair) {
    const [left, right] = pair
    const tds = pair.map((e,idx) => {
        const face = (idx == 0) ? leftfont : rightfont
        return `<td style="font-family: ${face}; width=50%">${e}</td>`
    })
    const txt = `<tr>${tds.join('')}</tr>`
    return txt
  });

  const tbl = `<table class="outputtable" style="font-size: ${fontsize}px; width: 100%;">${lines.join('')}</table>`
  document.getElementById('output').innerHTML = tbl;
}
