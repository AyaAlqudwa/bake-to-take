function namep() {
    var namef=form.namep.value;
     

    
}
function emailp( ) {
    var emailf=form.emailp.value;
    
}
function messagep() {
    var messagef=form.messagep.value;
    var x="*Text length should be between 10 and 30 characters";
    if( messagef.length < 10 || messagef.length > 30) {
        document.getElementById("demo3").innerHTML=x;
    }

    
}