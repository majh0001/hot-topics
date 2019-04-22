// get the references to the html elements:
const navItems = document.querySelectorAll("header nav a");
const container = document.querySelector(".container");

let path = "http://localhost/week-12/ajax-test/content/home.html";

// handling clicking
function handleClick(ev) {
    
    // prevetns link from redirecting
    ev.preventDefault();
    
    // current url is collected:
    path = ev.target.href;
    
    handleAjax(path);
}


// handling fetching data
function handleAjax(urlValue) {
    fetch(urlValue)
        .then(function (rsp) {
            return rsp.text();
        })
        .then(function (data) {
            container.innerHTML = data;
        })
}

handleAjax(path);

navItems[0].addEventListener("click", handleClick);
navItems[1].addEventListener("click", handleClick);

  
<!-- toggle activation -->
<script type="text/javascript">
    $(document).ready(function(){
    $('.menu').click(function(){
    $('ul').toggle('active');
    })
    })
</script>

<script>
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
    
</script>
      <script>
         var myIndex = 0;
         carousel();
         
         function carousel()
         {
             var i;
             var x = document.getElementsByClassName("mySlides");
             for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
             }
             myIndex++;
             if (myIndex > x.length) {myIndex = 1}    
             x[myIndex-1].style.display = "block";  
             setTimeout(carousel, 2000); // Change image every 2 seconds
         }
         
         $(document).ready(function(){
         $('.menu').click(function(){
         	$('ul').toggle('active');
         	});
         });
         
      </script>

 <!-- Java script -->
  <script src="https://code.jquery.com/jquery-3.3.1.js"> </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> 