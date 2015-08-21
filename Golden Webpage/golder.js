var scrolltotop = (function() {
 //   var el=document.getElementById('scrolltop');
    function scrolltotopclicked() {
        var myinterval;
        function scroll() {
            if(window.scrollY == 0) {
               clearInterval(myinterval);
            }
            else {
                window.scrollTo(window.scrollX, window.scrollY - 10);
            }
        }
        myinterval = setInterval(scroll,10);
    }
    return {
        init: function(id) {
            var el=document.getElementById(id);
            el.addEventListener('click',scrolltotopclicked); 
        }
    };
})();

var scrolltohome = (function() {
    function scrolling() {
        var myinterval;
        function scrollplace() {
            if( window.scrollY <= 15) {
                clearInterval(myinterval);
            }
            else {
                window.scrollTo(window.scrollX, window.scrollY - 10);
            }
        }
        myinterval = setInterval(scrollplace, 10);
    }
    return {
        init: function() {
            var ele = document.getElementById('h');
            ele.addEventListener('click',scrolling);
        }
    };
})();

var scrolltoservice = (function() {
    function scrolling() {
        var myinterval;
        function scrollplace() {
            if(window.scrollY >= 755 && window.scrollY <= 769) {
                clearInterval(myinterval);
            }
            else if(window.scrollY < 765) {
                window.scrollTo(window.scrollX, window.scrollY + 10);
            }
            else if(window.scrollY > 769) {
                window.scrollTo(window.scrollX, window.scrollY - 10);
            }
        }
        myinterval = setInterval(scrollplace, 10);
    }
    return {
        init: function() {
            var ele = document.getElementById('s');
            ele.addEventListener('click',scrolling);
        }
    };
})();

var scrolltoportfolio = (function() {
    function scrolling() {
        var myinterval;
        function scrollplace() {
            if(window.scrollY >= 1450 && window.scrollY <= 1465) {
                clearInterval(myinterval);
            }
            else if(window.scrollY < 1450) {
                window.scrollTo(window.scrollX, window.scrollY + 10);
            }
            else if(window.scrollY > 1465) {
                window.scrollTo(window.scrollX, window.scrollY - 10);
            }
        }
        myinterval = setInterval(scrollplace, 10);
    }
    return {
        init: function() {
            var ele = document.getElementById('p');
            ele.addEventListener('click',scrolling);
        }
    };
})();

var scrolltoabout = (function() {
    function scrolling() {
        var myinterval;
        function scrollplace() {
            if(window.scrollY >= 2620  && window.scrollY <= 2640) {
                clearInterval(myinterval);
            }
            else if(window.scrollY < 2620) {
                window.scrollTo(window.scrollX, window.scrollY + 10);
            }
            else if(window.scrollY > 2640) {
                window.scrollTo(window.scrollX, window.scrollY - 10);
            }
        }
        myinterval = setInterval(scrollplace, 10);
    }
    return {
        init: function(id) {
            var ele = document.getElementById('a');
            ele.addEventListener('click',scrolling);
        }
    };
})();

var scrolltocontact = (function() {
    function scrolling() {
        var myinterval;
        function scrollplace() {
            if(window.scrollY >= 5213) {
                clearInterval(myinterval);
            }
            else if(window.scrollY < 5213) {
                window.scrollTo(window.scrollX, window.scrollY + 10);
            }
        }
        myinterval = setInterval(scrollplace, 10);
    }
    return {
        init: function() {
            var ele = document.getElementById('c');
            ele.addEventListener('click',scrolling);
        }
    };
})();