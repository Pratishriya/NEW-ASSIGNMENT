$("#sign-up-btn").click(function() {
    $("#sign-up-form").show();
    $("#log-in-form").hide();
    $("#payments-form").hide();
    $("#sign-up-btn").addClass("active");
    $("#log-in-btn").removeClass("active");
    $("#payments-btn").removeClass("active");
  });

  var $button = document.querySelector('.button');
  $button.addEventListener('click', function() {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
    TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
    TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
  });
  
  document.getElementById("nav-toggle").addEventListener("click", function() {
    document.getElementById("nav").classList.toggle("active");
});