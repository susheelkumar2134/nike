var menu= document.getElementById('main-menu');
var cross= document.getElementById('cross');
var tog=document.getElementsByClassName('after-navbar')[0];
tog.style.display='none';
function toggle(){
    console.log("cd")
    if(tog.style.display == "none"){
        tog.style.display='block';
    }
    else{
        tog.style.display='none';
    }
}

var o= document.getElementById('one-drop');
o.style.display='none';


function one(){
    if(o.style.display == "none"){
        o.style.display='block';
    }
    else{
        o.style.display='none';
    }
}

var tw= document.getElementById('two-drop');
tw.style.display='none';

function two(){
    if(tw.style.display == "none"){
        tw.style.display='block';
    }
    else{
        tw.style.display='none';
    }
}

var th= document.getElementById('three-drop');
th.style.display='none';

function three(){
    if(th.style.display == "none"){
        th.style.display='block';
    }
    else{
        th.style.display='none';
    }
}

var f= document.getElementById('four-drop');
f.style.display='none';

function four(){
    if(f.style.display == "none"){
        f.style.display='block';
    }
    else{
        f.style.display='none';
    }
}