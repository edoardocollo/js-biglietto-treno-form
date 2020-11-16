
// creazione bottoni
var btnGenera = document.getElementById('genera');
var btnAnnulla = document.getElementById('annulla');

// raccolta imput
btnGenera.addEventListener('click',
  function(){
    console.log ('ticket');

    var userNameInput = document.getElementById('user_name');
    var kmTrattaInput = document.getElementById('km_tratta');
    var tariffaInput = document.getElementById('fascia_eta');
    var userName = userNameInput.value;
    var kmTratta = kmTrattaInput.value;
    var tariffa = tariffaInput.value;
    console.log (userName, kmTratta, tariffa);

    var ticketUsername = document.getElementById('ticket_username');
    ticketUsername.innerHTML = userName;

    var costoKm = 0.21;

    if (tariffa == 'minorenne') {
      var offerta = document.getElementById('offerta');
      offerta.innerHTML = tariffa;
      var carrozza = document.getElementById('carrozza');
      carrozza.innerHTML = Math.floor(Math.random() * (9 - 0) + 0);

      var codicaCp = document.getElementById('codice_cp');
      codicaCp.innerHTML = Math.floor(Math.random() * (100000 - 20000) + 20000);
      var costoBiglietto = document.getElementById('costo_biglietto');
      costoBiglietto.innerHTML = (kmTratta * costoKm * 0.8).toFixed(2);
    } else if (tariffa == 'silver') {
      var offerta = document.getElementById('offerta');
      offerta.innerHTML = tariffa;
      var carrozza = document.getElementById('carrozza');
      carrozza.innerHTML = Math.floor(Math.random() * (9 - 0) + 0);
      var codicaCp = document.getElementById('codice_cp');
      codicaCp.innerHTML = Math.floor(Math.random() * (100000 - 20000) + 20000);
      var costoBiglietto = document.getElementById('costo_biglietto');
      costoBiglietto.innerHTML = (kmTratta * costoKm * 0.6).toFixed(2);

    }else {
      var offerta = document.getElementById('offerta');
      offerta.innerHTML = tariffa;
      var carrozza = document.getElementById('carrozza');
      carrozza.innerHTML = Math.floor(Math.random() * (9 - 0) + 0);
      var codicaCp = document.getElementById('codice_cp');
      codicaCp.innerHTML = Math.floor(Math.random() * (100000 - 20000) + 20000);
      var costoBiglietto = document.getElementById('costo_biglietto');
      costoBiglietto.innerHTML = (kmTratta * costoKm).toFixed(2);

    }
    var ticketSection = document.getElementById('ticket_section');
    ticketSection.style.display = 'flex';


  }
);


btnAnnulla.addEventListener ('click',
  function(){
    console.log('annulla');
    var ticketSection = document.getElementById('ticket_section');
    ticketSection.style.display = 'none';
  }
);
