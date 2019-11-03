function tellStory(){
    //gather form elements
    var txtPetname = document.getElementById("txtPetname");
    var txtVulnerablebodypart = document.getElementById("txtVulnerablebodypart");
    var txtFacialexpression = document.getElementById("txtFacialexpression");
    var txtGravy1 = document.getElementById("txtGravy1");
    var txtGravy2 = document.getElementById("txtGravy2");
    var txtYear = document.getElementById("txtYear");
    var txtSwear = document.getElementById("txtSwear");
    var output = document.getElementById("output");
  

    //variables for input        
    var petname = txtPetname.value;
    var vulnerablebodypart = txtVulnerablebodypart.value;
    var facialexpression = txtFacialexpression.value;
    var gravy1 = txtGravy1.value;
    var gravy2 = txtGravy2.value;
    var year = txtYear.value;
    var swear = txtSwear.value;
   
    
    //the meat
    var story = petname + "! exclaimed Harry, salivating. 'My problematic fave!' He bit through a roasted leg, savoring this unvegan taste of summer.";
    story += " 'What a treat,' he mused to himself, 'Hogwarts was stressin me tf out! lol.' All of a sudden, Hermione flew through a door and kicked him in the " + vulnerablebodypart + " with fury. 'Harry, you jerk, you didn't invite my dude Ron!'";
    story += " OK WHATEVER HE's BORING, thought Harry out loud. Hermione was so mad!!! She flourished her wand and gave him a totally rude " + facialexpression + ". Then she yelled: 'Expecto Pagravy!' All of a sudden, Harry turned into a shiny pile of " + gravy1 + " gravy.";
    story += " 'omg hermonie, you can't just turn people into gravy,' said Gravy. 'Expecto,' he yelled, 'Pagravy!' Hermione looked down at herself in horror to see that she had turned into a " + gravy2 + " gravy. Fuckin rude.";
    story += " And thus it was that in the year " + year + " Hermione and Harry were not friends for a summer because they were " + swear + "gravies!";
    story += " THE END ";
    
    //copy story to output
    output.innerHTML = story;
} //end tellStory