function tellStory(){
    //gather form elements
    var txtSwear = document.getElementById("txtSwear");
    var txtPetname = document.getElementById("txtPetname");
    var txtFont = document.getElementById("txtFont");
    var txtBark = document.getElementById("txtBark");
    var txtCountry = document.getElementById("txtCountry");
    var txtThing1 = document.getElementById("txtThing1");
    var txtThing2 = document.getElementById("txtThing2");
    var txtVerbed = document.getElementById("txtVerbed");
    var txtCereal = document.getElementById("txtCereal");
    var txtDerog = document.getElementById("txtDerog");
    var txtMammal = document.getElementById("txtMammal");
    var txtBestgift = document.getElementById("txtBestgift");
    var output = document.getElementById("output");
  
  
    //variables for input  
    var swear = txtSwear.value;
    var petname = txtPetname.value;
    var font = txtFont.value;
    var bark = txtBark.value;
    var country = txtCountry.value;
    var thing1 = txtThing1.value;
    var thing2 = txtThing2.value;
    var verbed = txtVerbed.value;
    var cereal = txtCereal.value;
    var derog = txtDerog.value;
    var mammal = txtMammal.value;
    var bestgift = txtBestgift.value;
   
    //the meat
    
    story = "\"" + swear + ",\" muttered Harry Potter. HP inhaled. HP exhaled. The smoke which gathered low beneath his chin was thicc, & formed a little dog. The dog was named " + petname + " but his nametag said Huysmans in " + font + ". The dog hopped into Harry's lap. \"" + bark + ",\" the dog said to you, the reader. Harry paused, and thought of " + country + ". " + petname + " cleared his throat: \"" + thing1 + " is " + thing2 + ",\" he " + verbed + ". Harry could not help but existentially agree. \"Life,\" he thought, inhaling, \"is " + thing2 + ".\" Vape juice dripped from his twitching lip. " + cereal + "-flavor, fucking yum. His third eye opened for a moment to survey the scene, then closed for the rest of his life. Harry fell asleep. He dreamed a small cat named Fergus. \"" + derog + " Harry,\" Fergus whispered. Fergus brandished a purple " + mammal + "-hair wand. \"Accio " + bestgift + ". It materialized slowly, lingering long enough for Fergus to climb atop it & fly away. Sleeping Harry smiled. Steven Chihuahua licked the vape juice pooling around Harry\'s cheeks. James-- Leslie--  ..congratulations...";

    
    //copy story to output
    output.innerHTML = story;
}