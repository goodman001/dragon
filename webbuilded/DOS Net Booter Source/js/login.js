/* compressed js code              */
/* this is just for our demo       */
/* save time and buy the theme ;-) */
/* copyright by creativemilk       */
(function(a,b,c,d){a.fn.eCheckbox=function(d){d=a.extend({},a.fn.eCheckbox.options,d);return this.each(function(){var e=a(this);var f="e-checkbox-normal";var g="e-checkbox-active";if("ontouchstart"in b||b.DocumentTouch&&c instanceof DocumentTouch){var h="click tap"}else{var h="click"}if(e.is("[type=checkbox]")){if(e.next("label").length){e.hide().next("label").andSelf().wrapAll('<div class="e-checkbox"/>')}else if(e.prev("label").length){e.hide().prev("label").andSelf().wrapAll('<div class="e-checkbox labelleft"/>')}else{e.hide().wrap('<div class="e-checkbox"/>')}a('<div class="e-checkbox-img"></div>').insertBefore(e);if(e.is(":disabled")){e.parent("div").addClass("e-checkbox-disabled")}if(e.is(":checked")){e.parent("div").removeClass(f).addClass(g)}else{e.parent("div").removeClass(g).addClass(f)}e.parent("div.e-checkbox").not("div.e-checkbox-disabled").on(h,a(this),function(){if(a(this).find("[type=checkbox]").hasClass(d.triggerClass)){if(a(this).find("[type=checkbox]").is(":checked")){a(this).parents("."+d.sectionClass).find("div.e-checkbox").not("div.e-checkbox-disabled").removeClass(g).addClass(f).find("input").removeAttr("checked")}else{a(this).parents("."+d.sectionClass).find("div.e-checkbox").not("div.e-checkbox-disabled").removeClass(f).addClass(g).find("input").attr("checked","checked")}if(typeof d.toggleCallback=="function"){d.toggleCallback.call(this)}}else{if(a(this).find("[type=checkbox]").is(":checked")){a(this).removeClass(g).addClass(f).find("input").removeAttr("checked")}else{a(this).removeClass(f).addClass(g).find("input").attr("checked","checked")}}})}})};a.fn.eCheckbox.options={sectionClass:"e-checkbox-section",triggerClass:"e-checkbox-trigger",toggleCallback:function(){}}})(jQuery,window,document);(function(a,b,c,d){a.fn.eTabs=function(d){d=a.extend({},a.fn.eTabs.options,d);return this.each(function(){function e(b){var c=b-1;var d=0;k.each(function(){if(d==c){a(this).addClass(m)}else{a(this).removeClass(m)}d++})}function f(b){var c=b-1;var d=0;h.each(function(){if(d==c){a(this).show()}d++})}var g=a(this);var h=g.find("div.etabs-content");var i=g.find("div.etabs-content:first");var j=g.find("ul.etabs:first");var k=j.children("li");var l=k.children("a");var m="etabs-active";var n=j.children("li:first");var o=g.attr("id");var p=0;if("ontouchstart"in b||b.DocumentTouch&&c instanceof DocumentTouch){var q="click tap"}else{var q="click"}if(!o){alert("The tab plugin can only be used with a ID selector, please change this!")}h.hide().addClass("clearfix");if(localStorage&&d.storeTab===true){var r=localStorage.getItem("e_tabs_"+location.pathname+"_"+o)}else{var r=1}if(d.selected==1&&r==1){n.addClass(m).show();i.show()}else{if(d.storeTab==true&&r!=null){e(r);f(r)}else{e(d.selected);f(d.selected)}}l.each(function(){var b=a(this).data("tab-source");var c=a(this).attr("href");if(b&&!a.trim(a(c).html()).length){a(c).load(b,function(b,d,e){if(d=="error"){a(c).html(e.status+" "+e.statusText)}})}});k.on(q,"a",function(b){var c=a(this).attr("href");l.parent("li").removeClass(m+" etabs-open-active");a(this).parent("li").addClass(m+" etabs-open-active");h.not(c).hide();if(a(c).is(":hidden")){a(c).fadeIn(1,function(){if(typeof d.onSwitch=="function"){d.onSwitch.call(this)}})}if(localStorage&&d.storeTab===true){g.find("li").each(function(b){if(a(this).hasClass(m)){localStorage.setItem("e_tabs_"+location.pathname+"_"+o,b+1)}})}b.preventDefault()});if(d.responsive===true){k.each(function(){p+=a(this).width()});function s(){j.children("."+m).addClass("etabs-open-active");var b=g.children("div.etabs-to-select").length;if(p>=j.outerWidth()-10){if(b==0){j.wrap('<div class="etabs-to-select"/>').after('<div class="etabs-arrow-left"><span></span></div><div class="etabs-arrow-right"><span></span></div>')}k.hide().css({width:j.outerWidth()-10});j.children("."+m).show()}else{if(b){k.removeAttr("style").show();j.unwrap();a(".etabs-arrow-left, .etabs-arrow-right ").remove();g.find(".etabs-open-active").removeClass("etabs-open-active")}}}g.on(q,".etabs-arrow-left",function(a){var b=j.children("li.etabs-open-active");if(b.prev("li").length){j.children("li.etabs-open-active").hide().removeClass("etabs-open-active").prev("li").show().addClass("etabs-open-active")}});g.on(q,".etabs-arrow-right",function(a){var b=j.children("li.etabs-open-active");if(b.next("li").length){j.children("li.etabs-open-active").hide().removeClass("etabs-open-active").next("li").show().addClass("etabs-open-active")}});s();a(b).bind("resize","ready",function(){s()})}})};a.fn.eTabs.options={selected:1,storeTab:true,responsive:false,onSwitch:function(){}}})(jQuery,window,document);(function(a,b,c,d){a.fn.eMenu=function(d){d=a.extend({},a.fn.eMenu.options,d);return this.each(function(){var e=a(this);var f=e.children("li");var g=f.children("a");if("ontouchstart"in b||b.DocumentTouch&&c instanceof DocumentTouch){var h="click tap"}else{var h="click"}f.each(function(b){if(a(this).parent().hasClass("e-menu")){var c=a(this).children("a").outerWidth()}else{var c=a(this).children("a").outerWidth()-1}a(this).children("div:last-child").prepend('<span class="e-menu-brigde" style="width:'+c+'px"></span>');if(jQuery.inArray(b,d.flip)!="-1"){a(this).children("div").addClass("e-menu-reverze")}});if(d.typeEvent=="click"){a(c).on(h,this,function(b){if(!a(b.target).is(a(" *",e))){g.parent().children("div:last-child").slideUp(d.speed);e.find("."+d.activeClass).removeClass(d.activeClass)}});g.on(h,this,function(){if(d.effect=="fade"){if(a(this).next("div:last-child").is(":hidden")){e.children("li").children("div:last-child").fadeOut(d.speed);a(this).next("div:last-child").stop(true,true).fadeIn(d.speed)}else{a(this).next("div:last-child").stop(true,true).fadeOut(d.speed)}}else{e.children("li").not(a(this).parent()).children("div:last-child").hide();a(this).next("div:last-child").stop(true,true).animate({height:"toggle"},d.speed)}if(a(this).hasClass(d.activeClass)){a(this).removeClass(d.activeClass)}else{e.find("."+d.activeClass).removeClass(d.activeClass);a(this).addClass(d.activeClass)}})}else{g.on("mouseenter tap",function(){a(this).addClass(d.activeClass);if(d.effect=="fade"){a(this).parent().children("div:last-child").stop(true,true).fadeIn(d.speed)}else{a(this).parent().children("div:last-child").stop(true,true).slideDown(d.speed)}});g.parent("li").on("mouseleave tap",function(){a(this).children().removeClass(d.activeClass);if(d.effect=="fade"){a(this).children("div:last-child").stop(true,true).fadeOut(d.speed)}else{a(this).children("div:last-child").stop(true,true).slideUp(d.speed)}})}})};a.fn.eMenu.options={effect:"slide",speed:200,typeEvent:"click",activeClass:"e-menu-active",flip:[]}})(jQuery,window,document);(function(a,b,c,d){a.fn.eContactForm=function(b){b=a.extend({},a.fn.eContactForm.options,b);return this.each(function(){function c(a,c){if(!a.parents("."+h).length){var e=a.parent("div");if(c===d){var f=b.labelError}else{var f=c}if(e.hasClass("e-checkbox")||e.hasClass("e-select")||e.hasClass("e-select-multiple")){if(e.hasClass("e-checkbox")){var g="width:auto;float:left;"}else{var g=""}a.parent().wrap('<div class="'+h+' clearfix" style="'+g+'"/>').parent("."+h).prepend("<span>"+f+"<span></span></span>")}else{a.wrap('<div class="'+h+' clearfix"/>').parent("."+h).prepend("<span>"+f+"<span></span></span>")}}}function e(a){var b=a.parents("."+h);if(b.length){b.children("span").remove().end().replaceWith(b.contents())}}var f=a(this);var g=f.find("input:not([type=submit]), select, textarea");var h="e-contactform-errorlabel";var i="e-af-match";f.submit(function(i){if(typeof b.before=="function"){b.before.call(this)}a("."+h).children("span").show();g.each(function(){var b=a(this);var g=b.attr("data-validation-type");var h=b.attr("data-validation-label");var i=b.attr("data-validation-match-value");var j=b.attr("data-validation-minimum");var k=b.attr("data-validation-maximum");var i=b.attr("data-validation-match");if(j===d){var l=0}else{var l=j-1}if(k===d){var m=1e7}else{var m=k}switch(g){case"present":if(b.is("[type=checkbox]")){if(b.is(":checked")){e(b)}else{c(b,h)}}else if(b.is("select")){if(a.trim(b.val()).length>0){e(b)}else{c(b,h)}}else{if(a.trim(b.val()).length>l&&b.val().length<m){e(b)}else{c(b,h)}}break;case"email":var n=b.val();var o=/^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;if(o.test(n)){e(b)}else{c(b,h)}break;case"url":var n=b.val();var o=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;if(o.test(n)){e(b)}else{c(b,h)}break;case"numbers":var n=b.val();var o=/^[0+9]$/;if(a.trim(b.val()).length>l&&b.val().length<m&&o.test(n)){e(b)}else{c(b,h)}break;case"date":var n=b.val();var o=/^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/i;if(o.test(n)){e(b)}else{c(b,h)}break;case"letters":var n=b.val();var o=/^[A-Za-z ]+$/;if(a.trim(b.val()).length>l&&b.val().length<m&&o.test(n)){e(b)}else{c(b,h)}break;case"regex":var n=b.val();var o=b.attr("valdiation-regex");if(o.test(n)){e(b)}else{c(b,h)}break;case"password":if(a.trim(b.val()).length>l&&b.val().length<m){if(b.val()==f.find('[data-validation-type="password"]').not(b).val()){e(b)}else{c(b,h)}}else{c(b,h)}break;case"match":if(b.val()==i){e(b)}else{c(b,h)}break;case"ip":var n=b.val();var o=/\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;if(o.test(n)){e(b)}else{c(b,h)}break}});if(f.find("."+h).length){return false}else{if(b.useAjax===true){a(".e-contactform-infobox").remove();f.prepend('<div class="e-contactform-infobox"></div>');a.ajax({type:f.attr("method"),url:f.attr("action"),data:f.serialize(),dataType:"html",error:function(){a(".e-contactform-infobox").addClass("e-contactform-fail-color").text(b.labelFail).slideDown(200)},success:function(){a(".e-contactform-infobox").addClass("e-contactform-success-color").text(b.labelSuccess).slideDown(200);if(typeof b.after=="function"){b.after.call(this)}}});return false}else{return true}}});if(b.keydown===true){g.keydown(function(){a(this).parents("."+h).children("span").hide()})}})};a.fn.eContactForm.options={labelError:"This field is required!",labelSuccess:"Your message has been send successfully!",labelFail:"The form has not been send, please try it again!",keydown:true,useAjax:true,before:function(){},after:function(){}}})(jQuery,window,document);(function(a,b,c,d){a.fn.eShowPassword=function(d){d=a.extend({},a.fn.eShowPassword.options,d);return this.each(function(){var e=a(this);if("ontouchstart"in b||b.DocumentTouch&&c instanceof DocumentTouch){var f="click tap"}else{var f="click"}if(e.is("[type=password]")){e.not(d.exclude).wrap('<div class="e-showpassword"/>').before('<input type="text" class="e-showpassword-text"/>')}a("body").on(f,d.trigger,function(a){var b=e.prev();if(b.is(":hidden")){b.show().val(e.val())}else{b.hide();e.val(b.val())}if(typeof d.onSwitch=="function"){d.onSwitch.call(this)}a.preventDefault()})})};a.fn.eShowPassword.options={trigger:"",exclude:"",onSwitch:function(){}}})(jQuery,window,document);$(document).ready(function(a){a("#choose-styling").eStyleSwitcher({target:"#themesheet",dir:"css/theme/",storeStyle:true,onSwitch:function(){}});a('input[type="checkbox"]').eCheckbox();a("ul#login-lang").eMenu({effect:"slide",speed:200,target:"div.e-menu-sub",typeEvent:"hover",activeClass:"e-menu-active",flip:[0]});a("div#login-content-inner, div#login-inner").eTabs({storeTab:true,responsive:false,callback:function(){}});a("#field2").eShowPassword({trigger:"#show-password",exclude:"",onSwitch:function(){}});a("form#login-form").eContactForm({labelError:"This field is required!",labelSuccess:"Your message has been send successfully!",labelFail:"The form has not been send, please try it again!",keydown:true,useAjax:false});a(".tip-s").tipsy({delayIn:0,delayOut:0,fade:false,fallback:"",gravity:"s",html:false,live:false,offset:0,opacity:1,title:"title",trigger:"hover"});a(".tip-nw").tipsy({gravity:"nw",opacity:1});a(".tip-n").tipsy({gravity:"n",opacity:1});a(".tip-ne").tipsy({gravity:"ne",opacity:1});a(".tip-w").tipsy({gravity:"w",opacity:1});a(".tip-e").tipsy({gravity:"e",opacity:1});a(".tip-sw").tipsy({gravity:"sw",opacity:1});a(".tip-se").tipsy({gravity:"se",opacity:1});a(".dialog, .dialog-big, .dialog-inline, .dialog-big-inline,").click(function(){a(this).fadeTo(200,0,function(){a(this).slideUp(400)});return false});a("#e-styleswitcher").delay(200).animate({left:"-130px"},200);a("#e-styleswitcher").draggable({axis:"y",handle:".e-styleswitcher-arrow"});a(".e-styleswitcher-arrow").click(function(){if(a(".ss-open").length){a("#e-styleswitcher").delay(500).animate({left:"-130px"},200).removeClass("ss-open")}else{a("#e-styleswitcher").delay(500).animate({left:"0px"},200).addClass("ss-open")}});a("#set-layout-size").change(function(){a("body").removeClass("layout_fluid layout_768 layout_960 layout_1024 layout_1200 layout_1600").addClass(a(this).val())});a("#set-layout-responsive").change(function(){a("body").removeClass("layout_responsive").addClass(a(this).val())});a("#get-theme").change(function(){if(a(this).val()=="yes"){window.location="http://themeforest.net/user/CreativeMilk"}});if(!Modernizr.input.placeholder){a("[placeholder]").focus(function(){var b=a(this);if(b.val()==b.attr("placeholder")){b.val("");b.removeClass("placeholder")}}).blur(function(){var b=a(this);if(b.val()==""||b.val()==b.attr("placeholder")){b.addClass("placeholder");b.val(b.attr("placeholder"))}}).blur();a("[placeholder]").parents("form").submit(function(){a(this).find("[placeholder]").each(function(){var b=a(this);if(b.val()==b.attr("placeholder")){b.val("")}})})}})