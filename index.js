		// Get the elements to be iterated
		let htmlElements =
			document.getElementsByTagName("h4");

		// Use a regular for-loop
		for (let i = 0; i < htmlElements.length; i++) {

			// Print the current element
      console.log(htmlElements[i].innerText);
		}
      

document.getElementById("gadget1").innerHTML=htmlElements[0].innerText;
document.getElementById("gadget2").innerHTML=htmlElements[1].innerText;
document.getElementById("gadget3").innerHTML=htmlElements[2].innerText;
document.getElementById("gadget4").innerHTML=htmlElements[3].innerText;
document.getElementById("gadget5").innerHTML=htmlElements[4].innerText;
document.getElementById("gadget6").innerHTML=htmlElements[5].innerText;
document.getElementById("gadget7").innerHTML=htmlElements[6].innerText;
document.getElementById("gadget8").innerHTML=htmlElements[7].innerText;


//Most sold


// image slider
imgsEl = document.querySelectorAll(".slider-container img");
let currentImg = 2;
let timeout



function next(){
    currentImg = currentImg +1;
    clearTimeout(timeout);
    nextFunction()
    
}
function prev(){
    currentImg = currentImg -1;
    clearTimeout(timeout)
    nextFunction()
    
}

nextFunction();
function nextFunction(){

    
   
    if(currentImg > imgsEl.length){
        currentImg =1    
    }
    else if(currentImg < 1){
        currentImg = imgsEl.length
    }
    document.getElementById("image-container").style.transform=`translateX(-${(currentImg -1) * 1500}px)`;
    console.log(currentImg -1);
    timeout=setTimeout(() => {
        currentImg= currentImg +1;
        nextFunction()
        
    }, 3000);
    
}


//wish icon
$(document).ready(function(){
	$(".wish-icon i").click(function(){
		$(this).toggleClass("fa-heart fa-heart-o");
	});

	


});

//to comfirm  checkboxes
var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}




//WhatsApp send 
function send_handle(){


    let num=document.getElementById("number").value;
    let msg= document.getElementById("msg").value;
    let name= document.getElementById("name").value;
    let first= document.getElementById("one");
    let second= document.getElementById("two");
    let third= document.getElementById("three");
       if (first.checked == true){  
          var y = document.getElementById("one").value;  
             
        }   
        else{
            var y = "";  
        };
        if (second.checked == true){  
          var n = document.getElementById("two").value;  
            
        }
        else{
            var n = "";
        };    
        if (third.checked == true){  
          var ne = document.getElementById("three").value;      
        }    
        else{
            var ne = "";
        };
       
    var win = window.open(`https://wa.me/${num}?text=I%27m%20api%20msg%20%20${name}%20%20${msg}\n ${y} \n ${n}\n ${ne}`, '_blank');
   // win.focus();
  }




  //search
  function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    document.getElementById("myUL").style.display = "block";
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
 
function togglesearch(){
    document.getElementById("myUL").style.display = "none";

}


//add to cart functiom
w = ` ` ; 
j = ` ` ;  
k = ` ` ;  
function cart_function(){
  i = 0;
  
  

  var product_title;
  
$(".cart").click(function(event) {
 
  console.log("you calicked me "+i)
  
/* Prevent default click action behavior */
event.preventDefault();

/* Hide the progress container that is a descendant of the saeme
anscestor of the download button being clicked */
let product_title = $('.product-title', $(this).parent()).html();

let product_price = $('.item-price', $(this).parent()).text();

let product_img = $(this).parents(".col-sm-3").find(".img-fluid").attr('src');

  alert(`${product_title} has been added to cart`)
  
  i++;
  
  product_title_el = w+=product_title + `\n`;

  product_price_el = j+=product_price + ` \n`;
 
  product_img_el = k += product_img + ` \n`;
  
  
  console.log(product_title_el)
  
product_title_storage_el = product_title_el ;
localStorage.setItem("product-name", product_title_el);


product_price_storage_el = product_price_el ;
localStorage.setItem("product-price", product_price_el);

product_img_storage_el = product_img_el ;
localStorage.setItem("product-img", product_img_el);

 
  }); 
};
cart_function()
















