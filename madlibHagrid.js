function tellStory(){
    //gather form elements
    var txtFucking = document.getElementById("txtFucking");
    var txtPretty = document.getElementById("txtPretty");
    var txtYear = document.getElementById("txtYear");
    var txtSame = document.getElementById("txtSame");
    var txtPlural = document.getElementById("txtPlural");
    var txtFriedfood = document.getElementById("txtFriedfood");
    var txtExclamation = document.getElementById("txtExclamation");
    var txtColor = document.getElementById("txtColor");
    var txtNumber = document.getElementById("txtNumber");
    var output = document.getElementById("output");
  

    //variables for input        
    var fucking = txtFucking.value;
    var pretty = txtPretty.value;
    var year = txtYear.value;
    var same = txtSame.value;
    var plural = txtPlural.value;
    var friedfood = txtFriedfood.value;
    var exclamation = txtExclamation.value;
    var color = txtColor.value;
    var number = txtNumber.value;
   
    //the meat
    var story = "test";
    
    //copy story to output
    output.innerHTML = story;
}