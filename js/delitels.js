"use strict";

// class delitals{
    
//     function init(){
//         var form = document.createElement('FORM');
//         form.method = "GET";
//         form.className = "del-form";
//         var input = form.createElement("<input>");
//         var butt = form.createElement("<button>");
//         document.body.append(form);
//     }
// }

// delitals.init();

var form = document.createElement('FORM');
    form.method = "GET";
    form.className = "del-form";
    var input = document.createElement('INPUT');
    input.style.border = "1px solid black"
    var butt = document.createElement('BUTTON');
    butt.style.width = '100px';
    butt.style.height = '25px';
    var result = document.createElement('P');
    form.appendChild(input);
    form.appendChild(butt);
    document.body.append(form);
    document.body.appendChild(result);

    butt.addEventListener("click", e => calc(e))


    function calc(e) {
        event.preventDefault();
        var checkNum = +e.path[1][0].value;
        if(!isNumber(checkNum)){
            return alert("Введите число!")
            escape;
        }
        var resultNum = delresult(checkNum);
        result.innerHTML = `${resultNum}`;
    }

function isNumber(params) {
    if(Number.isInteger(params)){
        return true;
    } else {
        return false;
    }
}

function delresult(n) {
    let array = [1];
            for (let i = 2, limit = n >> 1; i <= limit; ++i) {
                if (!(n % i)) array.push(i);
            }
            if (n !== 1)
                array.push(n);
            return array;
}