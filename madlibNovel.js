function tellStory(){
    //gather form elements
    var txtFirstword = document.getElementById("txtFirstword");
    var txtSandwich = document.getElementById("txtSandwich");
    var txtCollege = document.getElementById("txtCollege");
    var txtCondiment = document.getElementById("txtCondiment");
    var txtNumber = document.getElementById("txtNumber");
    var txtPart = document.getElementById("txtPart");
    var output = document.getElementById("output");
  

    //variables for input        
    var firstword = txtFirstword.value;
    var sandwich = txtSandwich.value;
    var college = txtCollege.value;
    var condiment = txtCondiment.value;
    var number = txtNumber.value;
    var part = txtPart.value;
   
    
    //the meat
    var story = firstword + " he thought to himself." + firstword + " merrily, Carol-y, hairily, life is but...";
    story += " he bit disinterestedly into his day-old " + sandwich + " egg salad sandwich ... 'a dream!'"; 
    story += " Harry quickly turned -- Ginny! WTF! 'Sorry,' said Ginny, 'babe. Just tryin to do u a solid.' ";
    story += college + " sweat dripped from the ceiling of the dorm. This late into the semester, the RISD frat house often stank of cologne, champagne, and experimental " + condiment + " art. Harry didn't care-y. As she walked out the door, Giny MUST have felt him blow a kiss to her back. Harry chuckled and shook his head. Go get em, tiger. He yawned for " + number + " years then walked over to the dresser and put his harness away. Secks could wait. He was " + part + "-deep in his endeavors to write the Great American Novel. Little did he know, it had already ";

     
    //copy story to output
    output.innerHTML = story;
} 