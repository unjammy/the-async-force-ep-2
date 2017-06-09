//sanity check 1
//console.log('sanity check');
var reqListener = function(){

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

};

document.getElementById('requestResourceButton').addEventListener('click', reqListener);

