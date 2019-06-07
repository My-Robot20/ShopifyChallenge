$(document).ready(function(){



var obj = $('#boxButton,#buttonContainer,#desktop_SVG_button,#desktop_login_text');

obj.click(function(){                      /* Acme Login button functionality */
     
    console.log("LogIn Button works!");




    var input = $("#setInputField2");
    /*console.log(input);*/
    var textAreaCount = input.val().length;

     
    /*console.log(textAreaCount); /* value of data in textarea */

          /* Need to fix SVG ICON SERVER REQUEST */
     
     obj.disabled = true;
     
     document.getElementById("boxButton").innerHTML = "<img id=\"svgLoadState\" src='../assets/img/icon-loading.svg'>";
     setTimeout(function(){ obj.disabled = false}, 10000);

     if(textAreaCount == 0){     /* IF no input */
        console.log("success");
        document.getElementById("boxButton").innerHTML = "login";      /* Mobile works, ADD Desktop SVG LOADING SPINNER now */
     }
     
     else if(textAreaCount < 8 || textAreaCount > 24){  /* If invalid input */
     
       if(textAreaCount < 8 || textAreaCount > 24){
          console.log("success");
          $("#setInputField2, .password").css("border","3px solid red");
          document.getElementById("boxButton").innerHTML = "login";
          document.getElementById("ErrorMessage1").style.visibility = "visible"; /* Set error message visible after being hidden initially with css */
          $("#setInputField2, .password").css("color","red");
        }

     }
     else if(textAreaCount >= 8 && textAreaCount <= 24){   /* If correct input */
          window.location.assign('success.html');
     }
     
    
});

    

$(".password").each(function (i, el) {
    var orig = $(this),
        visi = $(this).clone().removeAttr("password").removeClass("password").insertAfter(this).keyup(function (e) {
            var val = visi.val(),
                oval=orig.val(),
                newVal=val.replace(/[^#]/g,function(m,i,v){
               
                    oval = setCharAt(oval,i,m).substr(0,val.length)
              
                    return "o"
                })
            orig.val(oval)
            setTimeout(function () {
                visi.val(newVal)
                setCaretPosition(visi[0], val.length)
            }, 50)
        })
   })

   
function setCaretPosition(elem, caretPos) {
    if (elem != null) {
        if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        } else if (elem.selectionStart) {
            elem.focus();
            elem.setSelectionRange(caretPos, caretPos);
        } else {
            elem.focus();
        }
    }
}

function setCharAt(str,index,chr) {
    return str.substr(0,index) + chr + str.substr(index+1);
}



/* 

JS quick interview practice 
var myObj = {
    metahuman: 'Flash',
    team: 'Justice League',
    city: 'Central City'

};



function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');


console.log('test');
console.log(myObj);
console.log(reverseString('hello'));

*/


  

});
