/*
$(document).ready(function() {
  $('#home_t').DataTable({
    order: [[ 0, 'desc']],
    searching: false
  });

  // Setup - add a text input to each footer cell
  $('#listado_t tfoot th').each(function() {
    var title = $(this).text();
    $(this).html('<input type="text" placeholder="Buscar ' + title + '" />');
  });

  //Column Searching function for the listado table
  var table = $('#listado_t').DataTable({
    order: [[ 5, 'desc']],
    initComplete: function() {
      // Apply the search
      this.api().columns().every(function() {
        var that = this;

        $('input', this.footer()).on('keyup change clear', function() {
          if (that.search() !== this.value) {
            that
              .search(this.value)
              .draw();
          }
        });
      });
    }
  });

  //Appending it to the header
  $('#listado_t tfoot tr').appendTo('#listado_t thead');

  //Toggle column visibility button setup funcionality
  $('a.toggle-vis').on('click', function(e) {
    e.preventDefault();

    // Get the column API object
    var column = table.column($(this).attr('data-column'));

    // Toggle the visibility
    column.visible(!column.visible());
  });
});

//Hides div for days off in form
function showDaysOff() {
  if (document.getElementById("typeOfReclaim").value == "Enfermedad") {
    var selected = document.getElementById("typeOfReclaim").value;
    document.getElementById("inputDaysOffSickLeave").style = "visibility: visible;"
  } else {
    document.getElementById("inputDaysOffSickLeave").style = "visibility: hidden;"
  }
}

//Chooses year of 'periodo bisemanal' depending on the pay day they select
function selectPayPeriod2020() {
  var date = document.getElementById("weeklyPeriod1").value;
  var dayOfPay = "";
  switch (date) {
    case '26':
      dayOfPay = "2020-01-03";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '27':
      dayOfPay = "2020-01-17";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '28':
      dayOfPay = "2020-01-31";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '29':
      dayOfPay = "2020-02-14";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '30':
      dayOfPay = "2020-02-28";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '31':
      dayOfPay = "2020-03-13";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '32':
      dayOfPay = "2020-03-27";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '33':
      dayOfPay = "2020-04-10";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '34':
      dayOfPay = "2020-04-24";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '35':
      dayOfPay = "2020-05-08";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '36':
      dayOfPay = "2020-05-22";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '37':
      dayOfPay = "2020-06-05";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '38':
      dayOfPay = "2020-06-19";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '39':
      dayOfPay = "2020-07-03";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '40':
      dayOfPay = "2020-07-17";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '41':
      dayOfPay = "2020-07-31";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '42':
      dayOfPay = "2020-08-14";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '43':
      dayOfPay = "2020-08-28";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '44':
      dayOfPay = "2020-09-11";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '45':
      dayOfPay = "2020-09-25";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '46':
      dayOfPay = "2020-10-09";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '47':
      dayOfPay = "2020-10-23";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '48':
      dayOfPay = "2020-11-06";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '49':
      dayOfPay = "2020-11-20";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '50':
      dayOfPay = "2020-12-04";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '51':
      dayOfPay = "2020-12-18";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '52':
      dayOfPay = "2021-01-01";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '53':
      dayOfPay = "2021-01-15";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    default:
      document.getElementById("payDayDiv").style = "visibility: hidden;"
      document.getElementById("payDay").value = "";
  }
}

function selectPayPeriod2021() {
  var date = document.getElementById("weeklyPeriod2").value;
  var dayOfPay = "";
  switch (date) {
    case '53':
      dayOfPay = "2021-01-15";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '1':
      dayOfPay = "2021-01-29";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '2':
      dayOfPay = "2021-02-12";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '3':
      dayOfPay = "2021-02-26";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '4':
      dayOfPay = "2021-03-12";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '5':
      dayOfPay = "2021-03-26";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '6':
      dayOfPay = "2021-04-09";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '7':
      dayOfPay = "2021-04-23";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '8':
      dayOfPay = "2021-05-07";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '9':
      dayOfPay = "2021-05-21";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '10':
      dayOfPay = "2021-06-04";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '11':
      dayOfPay = "2021-06-18";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '12':
      dayOfPay = "2021-07-02";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '13':
      dayOfPay = "2021-07-16";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '14':
      dayOfPay = "2021-07-30";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '15':
      dayOfPay = "2021-08-13";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '16':
      dayOfPay = "2021-08-27";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '17':
      dayOfPay = "2021-09-10";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '18':
      dayOfPay = "2021-09-24";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '19':
      dayOfPay = "2021-10-08";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '20':
      dayOfPay = "2021-10-22";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '21':
      dayOfPay = "2021-11-05";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '22':
      dayOfPay = "2021-11-19";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '23':
      dayOfPay = "2021-12-03";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '24':
      dayOfPay = "2021-12-17";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    case '25':
      dayOfPay = "2021-12-31";
      document.getElementById("payDayDiv").style = "visibility: visible;"
      document.getElementById("payDay").value = dayOfPay;
      break;
    default:
      document.getElementById("payDayDiv").style = "visibility: hidden;"
      document.getElementById("payDay").value = "";
  }
}

function selectYear() {
  var year = document.getElementById("yearSelect").value;
  if (year == "1") {
    document.getElementById("weeklyPeriodDiv1").style = "visibility: hidden;"
    document.getElementById("weeklyPeriodDiv2").style = "visibility: visible;"
    if (document.getElementById("weeklyPeriodDiv1").style = "visibility: hidden;") {
      document.getElementById("weeklyPeriod1").value = "";
      document.getElementById("weeklyPeriod2").setAttribute('required', 'required');
      document.getElementById("weeklyPeriod1").removeAttribute('required');
      selectPayPeriod2021();
    }
  } else if (year == "2") {
    document.getElementById("weeklyPeriodDiv1").style = "visibility: visible;"
    document.getElementById("weeklyPeriodDiv2").style = "visibility: hidden;"
    if (document.getElementById("weeklyPeriodDiv2").style = "visibility: hidden;") {
      document.getElementById("weeklyPeriod2").value = "";
      document.getElementById("weeklyPeriod1").setAttribute('required', 'required');
      document.getElementById("weeklyPeriod2").removeAttribute('required');
      selectPayPeriod2020();
    }
  } else {
    document.getElementById("weeklyPeriodDiv1").style = "visibility: hidden;"
    document.getElementById("weeklyPeriodDiv2").style = "visibility: hidden;"
    document.getElementById("weeklyPeriod1").value = "Seleccione";
    document.getElementById("weeklyPeriod2").value = "Seleccione";
    document.getElementById("weeklyPeriod1").removeAttribute('required');
    document.getElementById("weeklyPeriod2").removeAttribute('required');
    selectPayPeriod2020();
    selectPayPeriod2021();
  }
}

function ifRunner() {
  let contract = document.getElementById("contract").value;
  if (contract == "Runner") {
    document.getElementById("puestoDiv").style = "visibility: hidden;"
    document.getElementById("puestoDiv1").style = "visibility: hidden;"
    document.getElementById("puestoDiv2").style = "visibility: hidden;"
    document.getElementById("puestoDiv3").style = "visibility: hidden;"
    document.getElementById("puestoDiv4").style = "visibility: hidden;"
    document.getElementById("puestoDiv5").style = "visibility: hidden;"
    document.getElementById("puestoDiv6").style = "visibility: hidden;"
    document.getElementById("puestoDiv7").style = "visibility: hidden;"
    document.getElementById("puestoDiv8").style = "visibility: hidden;"
    document.getElementById("puestoDiv9").style = "visibility: hidden;"
    document.getElementById("puestoDiv10").style = "visibility: hidden;"
    document.getElementById("puestoDiv11").style = "visibility: hidden;"
    document.getElementById("puestoDiv12").style = "visibility: hidden;"
    document.getElementById("puestoDiv13").style = "visibility: hidden;"
    document.getElementById("puestoDiv14").style = "visibility: hidden;"

    if (document.getElementById("puestoDiv").style = "visibility: hidden;") {
      document.getElementById("puesto").value = "";
      document.getElementById("Puesto1").value = "";
      document.getElementById("Puesto2").value = "";
      document.getElementById("Puesto3").value = "";
      document.getElementById("Puesto4").value = "";
      document.getElementById("Puesto5").value = "";
      document.getElementById("Puesto6").value = "";
      document.getElementById("Puesto7").value = "";
      document.getElementById("Puesto8").value = "";
      document.getElementById("Puesto9").value = "";
      document.getElementById("Puesto10").value = "";
      document.getElementById("Puesto11").value = "";
      document.getElementById("Puesto12").value = "";
      document.getElementById("Puesto13").value = "";
      document.getElementById("Puesto14").value = "";

      document.getElementById("puesto").removeAttribute('required');
    }
  } else {
    document.getElementById("puestoDiv").style = "visibility: visible;"
    document.getElementById("puestoDiv1").style = "visibility: visible;"
    document.getElementById("puestoDiv2").style = "visibility: visible;"
    document.getElementById("puestoDiv3").style = "visibility: visible;"
    document.getElementById("puestoDiv4").style = "visibility: visible;"
    document.getElementById("puestoDiv5").style = "visibility: visible;"
    document.getElementById("puestoDiv6").style = "visibility: visible;"
    document.getElementById("puestoDiv7").style = "visibility: visible;"
    document.getElementById("puestoDiv8").style = "visibility: visible;"
    document.getElementById("puestoDiv9").style = "visibility: visible;"
    document.getElementById("puestoDiv10").style = "visibility: visible;"
    document.getElementById("puestoDiv11").style = "visibility: visible;"
    document.getElementById("puestoDiv12").style = "visibility: visible;"
    document.getElementById("puestoDiv13").style = "visibility: visible;"
    document.getElementById("puestoDiv14").style = "visibility: visible;"

    document.getElementById("puesto").setAttribute('required', 'required');
  }
}

//Bootstrap validation function
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

//Select options arrays so I don't have to make a bunch of options in the html

//Turno for each functions and array
let optionList = document.getElementById('turnoEntrada').options;
let optionList2 = document.getElementById('turnoSalida').options;

let optionList3 = document.getElementById('turnoEntrada2').options;
let optionList4 = document.getElementById('turnoSalida2').options;

let optionList5 = document.getElementById('turnoEntrada3').options;
let optionList6 = document.getElementById('turnoSalida3').options;

let optionList7 = document.getElementById('turnoEntrada4').options;
let optionList8 = document.getElementById('turnoSalida4').options;

let optionList9 = document.getElementById('turnoEntrada5').options;
let optionList10 = document.getElementById('turnoSalida5').options;

let optionList11 = document.getElementById('turnoEntrada6').options;
let optionList12 = document.getElementById('turnoSalida6').options;

let optionList13 = document.getElementById('turnoEntrada7').options;
let optionList14 = document.getElementById('turnoSalida7').options;

let optionList15 = document.getElementById('turnoEntrada8').options;
let optionList16 = document.getElementById('turnoSalida8').options;

let optionList17 = document.getElementById('turnoEntrada9').options;
let optionList18 = document.getElementById('turnoSalida9').options;

let optionList19 = document.getElementById('turnoEntrada10').options;
let optionList20 = document.getElementById('turnoSalida10').options;

let optionList21 = document.getElementById('turnoEntrada11').options;
let optionList22 = document.getElementById('turnoSalida11').options;

let optionList23 = document.getElementById('turnoEntrada12').options;
let optionList24 = document.getElementById('turnoSalida12').options;

let optionList25 = document.getElementById('turnoEntrada13').options;
let optionList26 = document.getElementById('turnoSalida13').options;

let optionList27 = document.getElementById('turnoEntrada14').options;
let optionList28 = document.getElementById('turnoSalida14').options;

let houroptions = [{
    text: '00:00 (12 AM)',
    value: '00:00:00'
  },
  {
    text: '01:00 (1 AM)',
    value: '01:00:00'
  },
  {
    text: '02:00 (2 AM)',
    value: '02:00:00'
  },
  {
    text: '03:00 (3 AM)',
    value: '03:00:00'
  },
  {
    text: '04:00 (4 AM)',
    value: '04:00:00'
  },
  {
    text: '05:00 (5 AM)',
    value: '05:00:00'
  },
  {
    text: '06:00 (6 AM)',
    value: '06:00:00'
  },
  {
    text: '07:00 (7 AM)',
    value: '07:00:00'
  },
  {
    text: '08:00 (8 AM)',
    value: '08:00:00'
  },
  {
    text: '09:00 (9 AM)',
    value: '09:00:00'
  },
  {
    text: '10:00 (10 AM)',
    value: '10:00:00'
  },
  {
    text: '11:00 (11 AM)',
    value: '11:00:00'
  },
  {
    text: '12:00 (12 PM)',
    value: '12:00:00'
  },
  {
    text: '13:00 (1 PM)',
    value: '13:00:00'
  },
  {
    text: '14:00 (2 PM)',
    value: '14:00:00'
  },
  {
    text: '15:00 (3 PM)',
    value: '15:00:00'
  },
  {
    text: '16:00 (4 PM)',
    value: '16:00:00'
  },
  {
    text: '17:00 (5 PM)',
    value: '17:00:00'
  },
  {
    text: '18:00 (6 PM)',
    value: '18:00:00'
  },
  {
    text: '19:00 (7 PM)',
    value: '19:00:00'
  },
  {
    text: '20:00 (8 PM)',
    value: '20:00:00'
  },
  {
    text: '21:00 (9 PM)',
    value: '21:00:00'
  },
  {
    text: '22:00 (10 PM)',
    value: '22:00:00'
  },
  {
    text: '23:00 (11 PM)',
    value: '23:00:00'
  }
];

//Lots of foreach loops
houroptions.forEach(option =>
  optionList.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList2.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList3.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList4.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList5.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList6.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList7.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList8.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList9.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList10.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList11.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList12.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList13.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList14.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList15.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList16.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList17.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList18.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList19.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList20.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList21.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList22.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList21.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList22.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList23.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList24.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList25.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList26.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList27.add(
    new Option(option.text, option.value, option.selected)
  )
);

houroptions.forEach(option =>
  optionList28.add(
    new Option(option.text, option.value, option.selected)
  )
);

//Option arrays for the biweekly periods (2021)
let periodo2021List = document.getElementById('weeklyPeriod2').options;

let periodoOptions = [{
    text: '4-17 Ene/2021',
    value: '1'
  },
  {
    text: '18-31 Ene/2021',
    value: '2'
  },
  {
    text: '1-14 Feb/2021',
    value: '3'
  },
  {
    text: '15-28 Feb/2021',
    value: '4'
  },
  {
    text: '1-14 Mar/2021',
    value: '5'
  },
  {
    text: '15-28 Mar/2021',
    value: '6'
  },
  {
    text: '29 Mar-11 Abr/2021',
    value: '7'
  },
  {
    text: '12-25 Abr/2021',
    value: '8'
  },
  {
    text: '26 Abr-9 May/2021',
    value: '9'
  },
  {
    text: '10-23 May/2021',
    value: '10'
  },
  {
    text: '24 May-6 Jun/2021',
    value: '11'
  },
  {
    text: '7-20 Jun/2021',
    value: '12'
  },
  {
    text: '21 Jun-4 Jul/2021',
    value: '13'
  },
  {
    text: '5-18 Jul/2021',
    value: '14'
  },
  {
    text: '19 Jul-1 Ago/2021',
    value: '15'
  },
  {
    text: '2-15 Ago/2021',
    value: '16'
  },
  {
    text: '16-29 Ago/2021',
    value: '17'
  },
  {
    text: '30 Ago-12 Sep/2021',
    value: '18'
  },
  {
    text: '13-26 Sep/2021',
    value: '19'
  },
  {
    text: '27 Sep-10 Oct/2021',
    value: '20'
  },
  {
    text: '11-24 Oct/2021',
    value: '21'
  },
  {
    text: '25 Oct-7 Nov/2021',
    value: '22'
  },
  {
    text: '8-21 Nov/2021',
    value: '23'
  },
  {
    text: '22 Nov-5 Dic/2021',
    value: '24'
  },
  {
    text: '6-19 Dic/2021',
    value: '25'
  }
];

periodoOptions.forEach(option =>
  periodo2021List.add(
    new Option(option.text, option.value, option.selected)
  )
);

//Option arrays for the biweekly periods (2020)
let periodo2020List = document.getElementById('weeklyPeriod1').options;

let periodoOptions2 = [{
    text: '23 Dic/2019-5 Ene/2020',
    value: '27'
  },
  {
    text: '6-19 Ene/2020',
    value: '28'
  },
  {
    text: '20 Ene-2 Feb/2020',
    value: '29'
  },
  {
    text: '3-16 Feb/2020',
    value: '30'
  },
  {
    text: '17 Feb-1 Mar/2020',
    value: '31'
  },
  {
    text: '2-15 Mar/2020',
    value: '32'
  },
  {
    text: '16-29 Mar/2020',
    value: '33'
  },
  {
    text: '30 Mar-12 Abr/2020',
    value: '34'
  },
  {
    text: '13-26 Abr/2020',
    value: '35'
  },
  {
    text: '27 Abr-10 May/2020',
    value: '36'
  },
  {
    text: '11-24 May/2020',
    value: '37'
  },
  {
    text: '25 May-7 Jun/2020',
    value: '38'
  },
  {
    text: '8-21 Jun/2020',
    value: '39'
  },
  {
    text: '22 Jun-5 Jul/2020',
    value: '40'
  },
  {
    text: '6-19 Jul/2020',
    value: '41'
  },
  {
    text: '20 Jul-2 Ago/2020',
    value: '42'
  },
  {
    text: '3-16 Ago/2020',
    value: '43'
  },
  {
    text: '17-30 Ago/2020',
    value: '44'
  },
  {
    text: '31 Ago-13 Sep/2020',
    value: '45'
  },
  {
    text: '14-27 Sep/2020',
    value: '46'
  },
  {
    text: '28 Sep-11 Oct/2020',
    value: '47'
  },
  {
    text: '12-25 Oct/2020',
    value: '48'
  },
  {
    text: '26 Oct-8 Nov/2020',
    value: '49'
  },
  {
    text: '9-22 Nov/2020',
    value: '50'
  },
  {
    text: '23 Nov-6 Dic/2020',
    value: '51'
  },
  {
    text: '7-20 Dic/2020',
    value: '52'
  },
  {
    text: '21 Dic/2020-3 Ene/2021',
    value: '53'
  }
];

periodoOptions2.forEach(option =>
  periodo2020List.add(
    new Option(option.text, option.value, option.selected)
  )
);
*/