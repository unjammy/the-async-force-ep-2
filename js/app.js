//console.log('sanity check');
var reqListener = function(){

  console.log("dog");

  var category = document.getElementById('resourceType');
  category = category.options[category.selectedIndex].innerHTML;

  console.log(category);

  var choice = document.getElementById('resourceId').value;

  console.log(choice);

};

document.getElementById('requestResourceButton').addEventListener('click', reqListener);

