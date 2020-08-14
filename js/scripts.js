/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#797979" });
 });



$(function () {
      $(".rslides").responsiveSlides({
		manualControls: '#slider-pager',  
        speed: 800,
		timeout: 8000,
		nav:false,
		pager:true,
		
});
});

(function($) {
		$(function() {
			$('input, select').styler({
				selectSearch: true
			});
		});
		})(jQuery);
		
		
$(document).ready(function(){
 new WOW().init();
 
 });
 
 $(function () {

        $("#range").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 0,
            max: 5000,
            from: 1000,
            to: 4000,
            type: 'double',
            step: 1,
            prefix: "$",
            grid: true
        });

    });
	
	
	
	 $('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    })
	 $('#myTab2 a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    })
	
var blockHeight = $('.slider-box').height();
                $('.col-xs-6.column').css('height',blockHeight);
				
					var map;
var egglabs = new google.maps.LatLng(55.7400581649259, 37.627642578125005);
var mapCoordinates = new google.maps.LatLng(55.7400581649259, 37.627642578125005);


var markers = [];
var image = new google.maps.MarkerImage(
    'images/ico-address.png',
    new google.maps.Size(101,82),
    new google.maps.Point(0,0),
    new google.maps.Point(42,56)
	
  );

function addMarker() 
{
      markers.push(new google.maps.Marker({
      position: egglabs,
      raiseOnDrag: false,
	  icon: image,
      map: map,
      draggable: false,
	
	  
      }));
      
}


function initialize() {
  var mapOptions = {
	
    zoom: 15,
	disableDefaultUI: false,
    center: mapCoordinates,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
	  scrollwheel: false,
	styles: [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}]};
map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
addMarker();
}
google.maps.event.addDomListener(window, 'load', initialize);

