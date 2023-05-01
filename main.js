nameOfThePeople = []

function submit()
{

    var name1 = document.getElementById("nameOfThePeople").value;

    nameOfTheStudentArray.push(name1);

    console.log(nameOfThePeople);

    document.getElementById("displayName").innerHTML = nameOfThePeople;
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";

    
}

function sorting()
{
    nameOfTheStudentArray.sort();
    console.log(nameOfThePeople);
    document.getElementById("displayName").innerHTML = nameOfThePeople;
}
