const countryInfo = {
  India: {
    Bihar: {
      Patna: [800001, 800012, 800023],
      Samastipur: [848201, 848387, 784789]
    },
    Rajasthan: {
      Jaipur: [302022, 302033, 302005],
      Kota: [845988, 458985, 985944]
    },
    Delhi: {
    	Indiagate:[23443,555643,553454],
      Rajghat:[23532,5333,46443]
    }
  },

  USA: {
    California: {
      "Los Angeles": ["90001", "90002", "90003", "90004"],
      "San Diego": ["92093", "92101"],
    },
    Texas: {
      Dallas: ["75201", "75202"],
      Austin: ["73301", "73344"],
    },
  },

  Germany: {
    Bavaria: {
      Munich: ["80331", "80333", "80335", "80336"],
      Nuremberg: ["90402", "90403", "90404", "90405"],
    },
    Hessen: {
      Frankfurt: ["60306", "60308", "60309", "60310"],
      Surat: ["55246", "55247", "55248", "55249"],
    },
  },

}

const user = document.getElementById('user')
  age = document.getElementById('age')
  email = document.getElementById('email')
  selectCountry = document.getElementById('country')
  selectState = document.getElementById('state'),
  selectCity = document.getElementById('city'),
  selectZipcode = document.getElementById('zipcode'),
  submit = document.getElementById('submit');
  age.disabled = true;
  email.disabled = true;
  selectCountry.disabled = true;
  selectState.disabled = true;
  selectCity.disabled = true;
  selectZipcode.disabled = true;
  submit.disabled = true;

// user input given
user.onkeydown = (e) => {
  if(e.target.value !== "" && e.keyCode === 13){
    age.disabled = false;
    age.focus();
  }
}

age.onkeydown = (e) => {
  if(e.target.value > 0 && e.keyCode === 13 ){
    selectCountry.disabled = false;
    selectCountry.focus();
    e.preventDefault();
  }
}

// filing country options 
for(let country in countryInfo ){
 selectCountry.options[selectCountry.options.length] = new Option(country, country);
}

// country selected, so enable the state option
selectCountry.onchange = (e) => {
  selectState.disabled = false;
  selectState.focus();

  // set the options length =1
  selectState.length = 1;
  selectCity.length = 1;
  selectZipcode.length = 1;

  // iterate over selected country's state and fill state options
  for(let state in countryInfo[selectCountry.value]){
    // console.log(state);
    selectState.options[selectState.options.length] = new Option(state, state);
  }
}

// state selected , so enable the city option
selectState.onchange = (e) => {
  selectCity.disabled =false;
  selectCity.focus();

  // set option length  = 1
  selectCity.length = 1;
  selectZipcode.length = 1;

  // iterate over the city
  for(let city in countryInfo[selectCountry.value][e.target.value] ){
    // console.log(city);
    selectCity.options[selectCity.options.length] = new Option(city, city);
  }
}

// city selected, so enable the zipcode option
selectCity.onchange = (e) => {
  selectZipcode.disabled = false;
  selectZipcode.focus();

  // iterate over the zipcode 
  let zipcode = countryInfo[selectCountry.value][selectState.value][e.target.value];
  for(let i = 0; i < zipcode.length; i++){
    selectZipcode.options[selectZipcode.options.length] = new Option(zipcode[i], zipcode[i]);
  }
}

// zipcode is selected, so enable email address input
selectZipcode.onchange = () => {
  email.disabled = false;
  email.focus();
}

email.onkeydown = (e) => {
  if( e.keyCode === 13 ){
    submit.disabled = false;
    submit.focus();
    e.preventDefault();
  }
}

submit.onclick = () => {
  alert("form submitted!!");
}

