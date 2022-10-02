window.onscroll = function() {scrollFunction()};

var btn = document.querySelector("#button");
var footer = document.querySelector("footer");
var navBtn = document.querySelectorAll(".navigation ul li a");
var nbJeuxMobiles = 2;
var nbJeuxPC = 7;
const NBJEUX = nbJeuxMobiles + nbJeuxPC;
const IMOBILEBASE = nbJeuxPC + 1;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 30) {
    btn.classList.add('show');
    document.querySelector(".progress-container").style.display = "block";
  } else {
    btn.classList.remove('show');
    document.querySelector(".progress-container").style.display = "none";
  }

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Effet de fade sur chacun des jeux un après l'autre
function timeoutFade(i) {
  setTimeout(function () {
    $('#Jeu'+i).fadeIn(1400);
  }, (i-1)*350);
}

$(document).ready(function(){
  for (i = 1; i <= NBJEUX; i++){
    timeoutFade(i);
  }
        setTimeout(
          function() 
          {
            $('#youtubeVid').fadeIn(1400);
          }, 2750);

          setTimeout(
            function() 
            {
              $('footer').fadeIn(1400);
            }, 3200);

  });

  function timeoutHighlightAjouter(i,iPartant){
    setTimeout(function () {
      document.querySelector("#Jeu"+i).classList.add("animBorder");
    }, ((i-iPartant)*300));
  }

  function timeoutHighlightEnlever(i,iPartant){
    setTimeout( function() {
        document.querySelector("#Jeu"+i).classList.remove("animBorder");
      }, 3000+ ((400*(i-iPartant))));
  }

function highlightElem(){
  var iBase = IMOBILEBASE;
  var leJeuSelect = document.querySelector(this.getAttribute("href"));
    if (leJeuSelect.getAttribute("id") == "JM"){
      for (i = 0; i < (nbJeuxMobiles*2)+1; i++){
        if (i%2 == 1 || i==0){
          timeoutHighlightAjouter(iBase, IMOBILEBASE);
        }else{
          timeoutHighlightEnlever(iBase, IMOBILEBASE);
          iBase++;
        }
        
      }
      
    }else if(leJeuSelect.getAttribute("id") == "JPC"){
      iBase = 1;
      for (i = 0; i < (nbJeuxPC*2)+1; i++){
        if (i%2 == 1 || i==0){
          timeoutHighlightAjouter(iBase,1);
        }else{
          timeoutHighlightEnlever(iBase,1);
          iBase++;
        }
      }


    }else if (leJeuSelect.getAttribute("id") == "YTB"){

      setTimeout(
        function() 
        {
          document.querySelector("#youtubeVid").classList.add("animBorder");
        }, 480);

      setTimeout(
        function() 
        {
          document.querySelector("#youtubeVid").classList.remove("animBorder");
        }, 3730);


    }else{
      setTimeout(
        function() 
        {
          document.querySelector("#footer").classList.add("animBorder");
        }, 500);

      setTimeout(
        function() 
        {
          document.querySelector("#footer").classList.remove("animBorder");
        }, 3750);
    }
}

btn.addEventListener("click",topFunction);

for (i = 0; i<navBtn.length; i++){
  navBtn[i].addEventListener("click", highlightElem);
}