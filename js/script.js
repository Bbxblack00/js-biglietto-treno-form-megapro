console.log('hello');
var generaBtn = document.getElementById('genera');
var annullaBtn = document.getElementById('annulla');

generaBtn.addEventListener('click', funtion()
{
  var name = document.getElementById('name').value;
  // console.dir(name.value);
  var distanza = parseInt(document.getElementById('distanza').value);
  var eta = document.getElementById('eta').value;
  console.log(name, distanza, eta);
  if (name !== '' && distanza > 0 && eta !== 0) {
    costoTotale = Math.floor(costo * distanza);

    //blocco else if per sconto
    if (eta == 1) {

    costoTotale = costoTotale - (costoTotale * 0.2);

    } else if (eta == 3) {

    costoTotale = costoTotale - (costoTotale * 0.4);

    }

    document.getElementById('costo-totale').innerHTML = costoTotale;
    var cp = Math.floor(Math.random() * 10000) + 90000;
    console.log()
  }
}
);

annullaBtn.addEventListener('click', funtion() {
  console.log('ho cliccato sul pulsante annulla');
});
