const accordionItemsEl = document.getElementsByClassName("accordion__item");

function accordion() {
  for  (let item of accordionItemsEl){
    let accHeader = item.firstElementChild;
    accHeader.addEventListener("click", function(){
     let accDetails = this.nextElementSibling; 
    })
  }
}

accordion();