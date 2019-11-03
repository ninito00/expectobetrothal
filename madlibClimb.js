
function tellStory(){
    //gather form elements
    var txtButt = document.getElementById("txtButt");
    var txtAnimals = document.getElementById("txtAnimals");
    var txtGeology = document.getElementById("txtGeology");
    var txtLiquid = document.getElementById("txtLiquid");
    var txtParts = document.getElementById("txtParts");
    var txtSpouse = document.getElementById("txtSpouse");
    var txtNonsense = document.getElementById("txtNonsense");
    var txtTaint = document.getElementById("txtTaint");
    var txtCheese = document.getElementById("txtCheese");
    var output = document.getElementById("output");
  

    //variables for input        
    var butt = txtButt.value;
    var animals = txtAnimals.value;
    var geology = txtGeology.value;
    var liquid = txtLiquid.value;
    var parts = txtParts.value;
    var spouse = txtSpouse.value;
    var nonsense = txtNonsense.value;
    var taint = txtTaint.value;
    var cheese = txtCheese.value;


    //the meat
    var story = "test" + firstword;

     
    //copy story to output
    output.innerHTML = story;
} 