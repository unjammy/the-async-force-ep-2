//sanity check 1
//console.log('sanity check');
var clicky = function(){

  //sanity check 2
  //console.log("dog");

  var category = document.getElementById('resourceType');
  category = category.options[category.selectedIndex].value;

  //sanity check 3
  //console.log(category);

  var choice = document.getElementById('resourceId').value;

  //sanity check 3
  //console.log(choice);

  var url = `http://swapi.co/api/${category}/${choice}/`;
  console.log(url);

  var reqListener = function(){

    var response = JSON.parse(this.responseText);

    console.log(response);

    var container = document.getElementById('contentContainer');

    while( container.hasChildNodes() ){

      container.removeChild(container.childNodes[0]);

    }

    switch(category){

      case 'people':
        var name = document.createElement('h2');
        name.innerHTML = response.name;
        container.appendChild(name);
        var gender = document.createElement('p');
        gender.innerHTML = response.gender;
        container.appendChild(gender);
        var species;

        break;

      case 'planets':
        var name = document.createElement('h2');
        name.innerHTML = response.name;
        container.appendChild(name);
        var terrain = document.createElement('p');
        terrain.innerHTML = response.terrain;
        container.appendChild(terrain);
        var population = document.createElement('p');
        population.innerHTML = response.population;
        container.appendChild(population);
        var filmList;

        break;

      case 'starships':
        var name = document.createElement('h2');
        name.innerHTML = response.name;
        container.appendChild(name);
        var manufacturer = document.createElement('p');
        manufacturer.innerHTML = response.manufacturer;
        container.appendChild(manufacturer);
        var shipClass = document.createElement('p');
        shipClass.innerHTML = response.starship_class;
        container.appendChild(shipClass);
        var filmList;

        break;

      default:
        var errorMessage = document.createElement('h1');
        errorMessage.innerHTML = "ERROR";
        container.appendChild(errorMessage);
        break;
    }

  };

  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', reqListener);
  oReq.open('GET', url);
  oReq.send();

};

document.getElementById('requestResourceButton').addEventListener('click', clicky);

