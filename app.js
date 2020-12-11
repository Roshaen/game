let nameBtn = document.getElementById("getNames");
nameBtn.onclick = function(){
    let playerName1 = document.getElementById("name1").value;
    let playerName2 = document.getElementById("name2").value;
    if(playerName1=="" || playerName2==""){
         var alert1 = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
         <strong>Wait a minute!</strong> Please enter players name
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       </div>`
        document.getElementById("alertBar").innerHTML = alert1
    }
    else{
        document.getElementById("display1").innerText = playerName1;
        document.getElementById("display2").innerText = playerName2;
    }
}

