function a(){
    console.log('a')
    b();
    console.log('aa');

}

function b(){
    console.log('b')
    d();
    console.log('bb')
}
function d(){
    console.log('d');
    console.log('dd');
}


// a();

function x(){
    console.log('x');
    console.log('xx');
    y();
}
function y(){
    console.log('y');
    console.log('y');
    z();
}
function z(){
    console.log('z');
    console.log('zz');
    x();
}

a();
x();