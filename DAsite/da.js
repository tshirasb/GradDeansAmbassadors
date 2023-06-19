// class DA {
//     constructor(name, major, email){
//         this.name = name;
//         this.major = major;
//         this.email = email;
//     }
// }
// const Hong = new DA ("Hong Doan", "Data Science");
// const Sophia = new DA ("Sophia Ezomoghene", "MSI");
// const Allison = new DA ("Allison Gong", "Computer Science");
// const Janae = new DA ("Janaé Hester", "HCI/UX");
// const Alex = new DA ("Alex Hoang", "Data Science");
// const Edmond = new DA ("Edmond Mbadu", "Computer Science");
// const Aakanksha = new DA ("Aakanksha Prashant Rao", "Computer Science");
// const Sarah = new DA ("Sarah Shillinglaw", "MSI");
// const Tina = new DA ("Tina Shirasb", "Information Systems");
// const Ron = new DA ("Ron Tassoni", "Computer Science");

// array of DAs
let DA = [
    {
        "name": "Hong Doan",
        "major": "Data Science",
    },
    {
        "name": "Sophia Ezomoghene",
        "major": "MSI",
    },
    {
        "name": "Allison Gong",
        "major": "Computer Science",
    },
    {
        "name": "Janaé Hester",
        "major": "HCI/UX",
    },
    {
        "name": "Alex Hoang",
        "major": "Data Science",
    },
    {
        "name": "Edmond Mbadu",
        "major": "Computer Science",
    },
    {
        "name": "Aakanksha Prashant Rao",
        "major": "Computer Science",
    },
    {
        "name": "Sarah Shillinglaw",
        "major": "MSI",
    },
    {
        "name": "Tina Shirasb",
        "major": "Information Systems"
    },
    {
        "name": "Ron Tassoni",
        "major": "Computer Science",
    }
    
]

// get the result from dropdown
function getMajor() {
    listMajor = document.querySelector("#majors");
    pickedMajor = listMajor.value;
    console.log(pickedMajor); //get the major
    document.getElementById("majorresult").style.visibility = "visible";
    
    // filter DAs by major
    let chosenDAs = DA.filter(DA => DA.major === String(pickedMajor));
    // tell me the DAs
    console.log(chosenDAs);
    // now tell me the names
    
    // console.log(values);

    // get all the names if multiple
    if (chosenDAs.length === 0) {
        document.getElementById("majorresult").innerHTML = "Sorry, there are no DAs in that major.";
    } else if (chosenDAs.length === 1){
        var values = Object.values(chosenDAs[0].valueOf());
        document.getElementById("majorresult").innerHTML = values[0];
    } else {
        var values = "";
        for (i = 0; i < chosenDAs.length; i++){
            
            values += Object.values(chosenDAs[i].valueOf())[0] + "<br>";
            console.log("values are " + values);
            
        }
        // document.getElementById("majorresult").innerHTML = "WIP";
        document.getElementById("majorresult").innerHTML = values;
    }

}