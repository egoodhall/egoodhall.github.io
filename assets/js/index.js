$(function(){var a=3;$(".exp-edu").length<=a?($("#show-exp-edu").hide(),$("#hide-exp-edu").hide()):($("#hide-exp-edu").hide(),$(".exp-edu").slice(a,$(".exp-edu").length).hide(),$("#show-exp-edu").on("click",function(a){a.preventDefault(),$(".exp-edu:hidden").slideDown(),$("#show-exp-edu").hide(),$("#hide-exp-edu").show()}),$("#hide-exp-edu").on("click",function(b){b.preventDefault(),$(".exp-edu").slice(a,$(".exp-edu").length).slideUp(),$("#hide-exp-edu").hide(),$("#show-exp-edu").show()}));var b=3;$(".proj").length<=b?($("#show-proj").hide(),$("#hide-proj").hide()):($("#hide-proj").hide(),$(".proj").slice(b,$(".proj").length).hide(),$("#show-proj").on("click",function(a){a.preventDefault(),$(".proj:hidden").slideDown(),$("#show-proj").hide(),$("#hide-proj").show()}),$("#hide-proj").on("click",function(a){a.preventDefault(),$(".proj").slice(b,$(".proj").length).slideUp(),$("#hide-proj").hide(),$("#show-proj").show()}))});