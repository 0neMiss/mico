function flipCard() {

if (document.getElementById("front").getAttribute('style') === 'visibility: visible') {
  document.getElementById("front").setAttribute('style', 'visibility: hidden');
  document.getElementById("back").setAttribute('style', 'visibility: visible');
  }
else {
  document.getElementById("front").setAttribute('style', 'visibility: visible');
  document.getElementById("back").setAttribute('style', 'visibility: hidden');
}
}
