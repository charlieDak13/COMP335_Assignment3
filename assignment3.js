function foo(){
    // Change the inner HTML of an element
    document.getElementsByTagName("h1")[0].innerHTML="I'm looking forward to seeing your home page!";
    // option 1
    /*
    document.getElementsByTagName("h3")[0].innerHTML="http://seikyung.com/";
    document.getElementsByTagName("h3")[0].style.color="blue"; // Change the style of an HTML element
    */
    
    // option 2
    /*
    let optionTwo = document.getElementById("h3Tag");
    optionTwo.innerHTML="http://seikyung.com/";
    optionTwo.style.color="blue"; // element.style.property = new style
    */
    
    // option 3
    
    let optionThree = document.getElementById("h3Tag");
    optionThree.removeChild(optionThree.firstChild); // Remove an HTML element
    optionThree.appendChild(document.createTextNode("http://seikyung.com/")); // Add an HTML element
    optionThree.style.color="blue";
    
    }
    /*
    there is no real difference between using single quotes, double quotes, or backticks. 
    However, It is always good to stick to consistent format throughout the project.
    They are used to represent a string in Javascript. 
    There is no type for a single character in javascript, everything is always a string!
    */