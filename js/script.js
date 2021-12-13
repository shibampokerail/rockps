$(document).ready(function(){
    $("#rock").click(function(){
        $("#choice").attr("src","../img/rock.png"),
        select_random();
    });
    $("#paper").click(function(){
        $("#choice").attr("src","../img/paper.png"),
        select_random();
    });
    $("#scissors").click(function(){
        $("#choice").attr("src","../img/scissors.png"),
        select_random();
    });

    $("#hidden_text").css("display","none");
    $("#mp_arcade").click(function(){
        $("#container").hide();
        $("#hidden_text").show();
        window.setTimeout(function(){
            $("#hidden_text").hide(); //run multiplayer arcade here
            fetchAsync(); //run multiplayer arcade here  
            $("#container").show();

        }, 600);    
    });

    $("#room_id_receiver").click(function(){
        get_room_id();
    });
});


function get_room_id(){
    var room_id=document.getElementById("room_id").value;
    if (room_id.length<7){
        alert("Room ID cannot be less than 7 digits")
    } else {
        console.log(room_id);
    }
};

function select_random(){
    
    var img_array= new Array()
    img_array=["../img/rock.png","../img/scissors.png","../img/paper.png"]
    var numba= Math.floor(Math.random()*(img_array.length))
    img=img_array[numba]
    $("#comp_choice").attr("src",img)
}

async function fetchAsync () {
    let response = await fetch("https://utilizedplushsoftwareagent.xrar.repl.co/?req=22");
    let data = await response.json();
    console.log(data);
  }

window.onload=init;
