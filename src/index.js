// All functions have "window." due to hint:
// https://stackoverflow.com/questions/57602686/
//   javascript-function-wont-trigger-when-called-in-html-file-during-parcel-build

window.writeText = function() {

  function getParagraphs(elid) {
    var t = document.getElementById(elid).value;
    var pars = t.split(/\r?\n/g);
    return pars;
  }

  var l1pars = getParagraphs("L1");
  var l2pars = getParagraphs("L2");

  if (l1pars.length !== l2pars.length) {
    window.alert('mismatched pars')
  }

  var pairs = l1pars.map(function(e, i) {
    return [e, l2pars[i]];
  });

  var lines = pairs.map(function (pair) {
    var content = pair.map((e) => { return `<div class="col">${e}</div>`; });
    return `<div class="box">\n${content.join('')}</div>`
  });

  document.getElementById('output').innerHTML = lines.join('\n');
}
