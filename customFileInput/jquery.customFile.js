/*!
 * jQuery Custom File Plugin
 * Version: 1.0.0 (14-FEB-2013)
 * Requires: jQuery v1.7.1 or later
 */
(function( $ ){$.fn.customFileInput = function(options){var settings = $.extend( {
	  'width'         : '250px', //width of button
	  'height'		  : '20px',  //height of text
      'btnText'       : 'Browse' //text of the button     
    }, options);
	    this.each(function(){$(this).addClass('fileWrap').css({width : settings.width}).append("<input type='text' class='fileInput' readonly='readonly' style='height:"+settings.height+"' />").append("<input type='button' class='fileButton' value='"+settings.btnText+"' style='height:"+settings.height+"' />").find("input[type='file']").css({height:settings.height, width:settings.width, zIndex: '99', position: 'absolute', right:'0px', top:($(this).outerHeight()-settings.height)/2+'px'}).fadeTo(100,0);});$(".fileWrap input[type='file']").change(function(){$(this).closest('.fileWrap').find(".fileInput").val($(this).val());})};})( jQuery );