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

    switch(category){

      case 'people':
        var name = document.createElement('h2');
        name.innerHTML = response.name;
        document.getElementById('contentContainer').appendChild(name);
        var gender;
        var species;

        break;

      case 'planets':
        var name = document.createElement('h2');
        var terrain;
        var population;
        var filmList;

        break;

      case 'starships':
        var name = document.createElement('h2');
        var manufacturer;
        var shipClass;
        var filmList;

        break;

      default:
        var errorMessage = document.createElement('h1');
        errorMessage.innerHTML = "ERROR";
        document.getElementById('contentContainer').appendChild(errorMessage);
        break;
    }

  };

  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', reqListener);
  oReq.open('GET', url);
  oReq.send();

};

document.getElementById('requestResourceButton').addEventListener('click', clicky);

