
// DOM - Document Object Model 
// Bom - Browser object model

// var title = document.getElementById('title');
// console.log(title)
// var title = document.getElementsByTagName('h3');
// console.log(title[0])
// var title = document.getElementsByClassName('hello');
// console.log(title[0])
var title = document.title;
var tag = document.querySelectorAll('div');
// tag[0].innerHTML = title;
// tag[0].innerHTML = title;

// console.log(document.images[0].src);


// console.log(document.body);
// console.log(document.links);
// console.log(document.anchors);

// tag[0].textContent = "<h2>hello</h2>";
// tag[0].innerHTML = "<h2>hello</h2>";

// tag[0].src = 'img/pdf.png';
// tag[0].alt = 'this is image';

// console.log(tag[0].getAttribute("id"));
// console.log(tag[0].setAttribute(attr name , attr value));
// tag[0].setAttribute("src","img/pdf.png");

// if(tag[0].hasAttribute('id')){
//     tag[0].removeAttribute('id')
// }

    // console.log(tag[0].classList)
    // console.log(tag[0].classList[1])


    // console.log(tag[0].classList.length)

    // console.log(tag[0].classList.contains('ten'))

    // if(!tag[0].classList.contains('ten')){
    //     tag[0].classList.add('ten');
    //     tag[0].classList.remove('one');
    // }   

    // tag[0].classList.toggle('one'); بتشوف الحاجه وتعمل عكسها

// console.log(tag[0].childElementCount) مبيحسبش الكومنتات
// tag[0].children[2].innerHTML = "h1 from js"

// console.log(tag[0].childNodes.length) بتعد الابناء يبما فيهم المسافات والكومنتات

// console.log(tag[0].firstChild); شغالة علي childNodes
// console.log(tag[0].firstElementChild); شغاله علي child elemnt
// console.log(tag[0].lastChild);
// console.log(tag[0].lastElementChild);

var element = document.createElement("h6");

var body = document.createTextNode("hello from node in js");

element.appendChild(body);


tag[0].appendChild(element);

// var by_id = document.getElementById("h3_id");
// var by_class = document.getElementsByClassName("h3_class");
// var by_tag = document.getElementsByTagName("h3");
// var by_tag = document.getElementsByTagName("h3");
// var by_tag = document.querySelectorAll(".h3_class");
// tag -> by_tag[0]

// var by_class = document.getElementById("h3_id").innerHTML="<h1>asdsad</h1>";
// var by_class = document.getElementById("h3_id").innerText="asdkjgajsdgjhsgad";



// var by_class = document.getElementById("h3_id").innerHTML=document.links;
// var by_class = document.getElementById("h3_id").textContent="<h1>asdkjksd</h1>";

// console.log(document.links)



// var by_class = document.getElementById("h3_id");

// by_class.textContent= by_class.className
