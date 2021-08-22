window.addEventListener('resize',resize)
function myFunction() 
{
      var navBar = document.getElementById("mainNavBar");
      var body = document.getElementById("body");
      var paralax =document.getElementById("wrapper");
      if (navBar.style.display === "block") 
      {
        navBar.style.display = "none";
        paralax.style.paddingTop="0rem";
        navBar.style.padingTop= "0rem";
      } 
      else 
      {
        navBar.style.display = "block";
        navBar.style.padingTop= "20rem";
        paralax.style.paddingTop="18rem";
        paralax.style.paddingBottom="1.5rem";
      }
    }
    function resize() 
    {
        var navBar = document.getElementById("mainNavBar");
        if (window.innerWidth >= 1025) 
        {     
            navBar.style.display = "block";
        }
        if (window.innerWidth < 1025) 
        {     
            navBar.style.display = "none";
        }
    }