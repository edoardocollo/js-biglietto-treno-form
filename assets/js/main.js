
// creazione bottoni
var btnGenera = document.getElementById('genera');
var btnAnnulla = document.getElementById('annulla');

// bottone genera
btnGenera.addEventListener('click',
  function(){
    console.log ('ticket');


    // variabili target
    var userNameInput = document.getElementById('user_name');
    var kmTrattaInput = document.getElementById('km_tratta');
    var tariffaInput = document.getElementById('fascia_eta');



    // ottengo valori target
    var userName = userNameInput.value;
    var kmTratta =  kmTrattaInput.value;
    // validazione kmTratta
    if (isNaN(kmTratta)){
      var formSection = document.getElementById('form_section');
      formSection.style.display = 'none';
      var crossOver = document.getElementById('cross_over');
      crossOver.style.display = 'block';
      var refresh = document.getElementById('refresh');
      refresh.addEventListener ('click',
        function(){
          window.location.reload(false);
        }
      );
    }
    var tariffa = tariffaInput.value;
    // console.log (userName, kmTratta, tariffa);


    // inserimento valore username
    var ticketUsername = document.getElementById('ticket_username');
    ticketUsername.innerHTML = userName;


    // ciclo if passaggio valori
    var costoKm = 0.21;

    if (tariffa == 'minorenne') {



      var offerta = document.getElementById('offerta');
      offerta.innerHTML = tariffa;
      var costoBiglietto = document.getElementById('costo_biglietto');
      costoBiglietto.innerHTML = (kmTratta * costoKm * 0.8).toFixed(2);



    } else if (tariffa == 'silver') {




      var offerta = document.getElementById('offerta');
      offerta.innerHTML = tariffa;
      var costoBiglietto = document.getElementById('costo_biglietto');
      costoBiglietto.innerHTML = (kmTratta * costoKm * 0.6).toFixed(2);




    }else {




      var offerta = document.getElementById('offerta');
      offerta.innerHTML = tariffa;
      var costoBiglietto = document.getElementById('costo_biglietto');
      costoBiglietto.innerHTML = (kmTratta * costoKm).toFixed(2);

    }


    // generazione valori casuali carrozza e cp
    var carrozza = document.getElementById('carrozza');
    carrozza.innerHTML = Math.floor(Math.random() * (9 - 0) + 0);
    var codicaCp = document.getElementById('codice_cp');
    codicaCp.innerHTML = Math.floor(Math.random() * (100000 - 20000) + 20000);

    // visualizza biglietto
    var ticketSection = document.getElementById('ticket_section');

    ticketSection.style.opacity = '1';


  }
);


btnAnnulla.addEventListener ('click',
  function(){
    var ticketSection = document.getElementById('ticket_section');
    ticketSection.style.opacity = '0';
  }
);
