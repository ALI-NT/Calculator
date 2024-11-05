var sum = 0, c = 0, b = 0;

function a(x) {
    b = (b * 10) + x;
    document.getElementsByClassName("text")[0].innerHTML += x;
}

function jam() {
    switch (c) {
        case (0):
            sum += b;
            break;
        case (1):
            sum -= b;
            break;
        case (2):
            sum *= b;
            break;
        case (3):
            sum /= b;
            break;
    }
    b = 0;
    c = 0;
    document.getElementsByClassName("text")[0].innerHTML += " + ";
}

function tafrigh() {
    switch (c) {
        case (0):
            sum += b;
            break;
        case (1):
            sum -= b;
            break;
        case (2):
            sum *= b;
            break;
        case (3):
            sum /= b;
            break;
    }
    b = 0;
    c = 1;
    document.getElementsByClassName("text")[0].innerHTML += " - ";
}

function zarb() {
    switch (c) {
        case (0):
            sum += b;
            break;
        case (1):
            sum -= b;
            break;
        case (2):
            sum *= b;
            break;
        case (3):
            sum /= b;
            break;
    }
    b = 0;
    c = 2;
    document.getElementsByClassName("text")[0].innerHTML += " x ";
}

function taghsim() {
    switch (c) {
        case (0):
            sum += b;
            break;
        case (1):
            sum -= b;
            break;
        case (2):
            sum *= b;
            break;
        case (3):
            sum /= b;
            break;
    }
    b = 0;
    c = 3;
    document.getElementsByClassName("text")[0].innerHTML += " / ";
}

function result() {
    switch (c) {
        case (0):
            sum += b;
            break;
        case (1):
            sum -= b;
            break;
        case (2):
            sum *= b;
            break;
        case (3):
            sum /= b;
            break;
    }
    document.getElementsByClassName("text")[0].innerHTML += " = " + sum;
    for(var i=0 ; i<=14 ; i++){
        document.getElementsByTagName("button")[i].disabled = true;
    }
}

function ac() {
    document.getElementsByClassName("text")[0].innerHTML = "";
    b = 0;
    sum = 0;
    c = 0;
    for(var i=0 ; i<=14 ; i++){
        document.getElementsByTagName("button")[i].disabled = false;
    }
}