
$(document).ready(function(){
    $("#rock").click(function(){
        $("#choice").attr("src","img/rock.png"),
        select_random();
    });
    $("#paper").click(function(){
        $("#choice").attr("src","img/paper.png"),
        select_random();
    });
    $("#scissors").click(function(){
        $("#choice").attr("src","img/scissors.png"),
        select_random();
    });
});

function select_random(){
    var img_array= new Array()
    img_array=["img/rock.png","img/scissors.png","img/paper.png"]
    var numba= Math.floor(Math.random()*(img_array.length))
    img=img_array[numba]
    $("#comp_choice").attr("src",img)
}
window.onload=init;
