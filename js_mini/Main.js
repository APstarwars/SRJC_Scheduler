$(function(){function T(e){$("html").height(window.innerHeight+"px");$("#container2").height(window.innerHeight+"px");$("#container").css("width","100%");$("header img").css("width","40%");var t=$("#container").innerWidth();var n=Math.round(Math.max(190,t/4.5));if(e){u=99;a=36}else{u=Math.floor(Math.max(30,(t-v-7-2*n)/6-3));if(o){a=Math.round(Math.max(24,(window.innerHeight-16-d-24)/17))}else{a=Math.round(Math.max(24,(window.innerHeight-$("#header").outerHeight(true)-d-38)/17))}}$("th:not(#firstColumn)").width(u+"px");$("th div").width(u+"px");if(u<=75){$("th:nth-child(2) div").html("Mon");$("th:nth-child(3) div").html("Tue");$("th:nth-child(4) div").html("Wed");$("th:nth-child(5) div").html("Thu");$("th:nth-child(6) div").html("Fri");$("th:nth-child(7) div").html("Sat")}else{$("th:nth-child(2) div").html("Monday");$("th:nth-child(3) div").html("Tuesday");$("th:nth-child(4) div").html("Wedneday");$("th:nth-child(5) div").html("Thursday");$("th:nth-child(6) div").html("Friday");$("th:nth-child(7) div").html("Saturday")}$("tr:not(tr:first-child)").height(a+"px");m=$("#timeSheet").outerWidth(true);g=$("#timeSheet").outerHeight(true);$("#first").height(g+"px");$("#second").height(g+"px");$("#third").height(g+"px");$("#infoPane").height(g-($("#topButton").height()+42+$("#lowButton").height())+"px");$("#divCanvas").height(g+"px");$("#divCanvas").width(m+"px");d=$("#firstColumn").outerHeight(true)-1;v=38;$("#second").width(n+"px");$("#third").width(n+"px");if(e){$("#container").width($("#first").outerWidth()+$("#third").outerWidth()+"px")}else{$("#container").width($("#first").outerWidth()+$("#second").outerWidth()+$("#third").outerWidth()+"px")}N();k()}function N(){$("#divCanvas").html("");for(var e=0;e<c.length;e++){for(var t=0;t<c[e].classes.length;t++){c[e].classes[t].RefreshDrawClass()}}}function C(e){$("#divCanvas").html("");for(var t=0;t<c.length;t++){for(var n=0;n<c[t].classes.length;n++){c[t].classes[n].RefreshColor();c[t].classes[n].RefreshDrawClass()}c[t].RefreshButtons(e)}}function k(e){var t;for(var n=0;n<6;n++){t=L(n,e);if(t.length<=1){continue}for(var r=0;r<t.length;r++){var i,s,o,u;i=t[r].dateStart;s=t[r].dateEnd;o=t[r].timeStart;u=t[r].timeEnd;for(var a=r+1;a<t.length;a++){var f,l,c,h;f=t[a].dateStart;l=t[a].dateEnd;c=t[a].timeStart;h=t[a].timeEnd;if(A(i,s,o,u,f,l,c,h)){var p,d,v,m;p=V(n,Math.max(i,f),Math.max(i,f));d=V(n,Math.min(s,l)+.001,Math.max(i,f));v=J(Math.max(o,c));m=J(Math.min(u,h));X(p,v,d,m,"red",3,true,"hsla(0,0%,0%,.35)")}}}}}function L(e,t){var n=[];for(var r=0;r<c.length;r++){if(r!=t){for(var i=0;i<c[r].classes.length;i++){if(c[r].classes[i].display||c[r].classes[i].hover){for(var s=0;s<c[r].classes[i].sessions.length;s++){if(c[r].classes[i].sessions[s].days[e]==1){n.push(c[r].classes[i].sessions[s])}}}}}else{for(var i=0;i<c[r].classes.length;i++){if(c[r].classes[i].hover){for(var s=0;s<c[r].classes[i].sessions.length;s++){if(c[r].classes[i].sessions[s].days[e]==1){n.push(c[r].classes[i].sessions[s])}}}}}}return n}function A(e,t,n,r,i,s,o,u){if(!(o>=r)&&!(u<=n)){return!(i>t)&&!(s<e)}return false}function O(){var e;for(var t=0;t<6;t++){e=L(t);if(e.length<=1){continue}for(var n=0;n<e.length-1;n++){var r,i,s,o;r=e[n].dateStart;i=e[n].dateEnd;s=e[n].timeStart;o=e[n].timeEnd;for(var u=n+1;u<e.length;u++){var a,f,l,c;a=e[u].dateStart;f=e[u].dateEnd;l=e[u].timeStart;c=e[u].timeEnd;if(A(r,i,s,o,a,f,l,c)){return true}}}}return false}function M(e){var t=1;for(S=0;S<c.length;S++){t*=c[S].classes.length}console.log(t);for(S=0;S<t+1;S++){for(r=c.length-1;r>=0;r--){if(e=="F"){c[r].cycle++;if(c[r].cycle<c[r].classes.length){break}else{c[r].cycle=0}}else{c[r].cycle--;if(c[r].cycle>=0){break}else{c[r].cycle=c[r].classes.length-1}}}for(var n=0;n<c.length;n++){for(var r=0;r<c[n].classes.length;r++){if(c[n].cycle==r){c[n].classes[r].display=true}else{c[n].classes[r].display=false}}}if(!O()){C();k();console.log(S);j();return true}if(S>999999){alert("Process Timed Out\ntry removing some classes");for(var n=0;n<c.length;n++){for(var r=0;r<c[n].classes.length;r++){c[n].classes[r].display=false}}j();return false}}for(var n=0;n<c.length;n++){for(var r=0;r<c[n].classes.length;r++){c[n].classes[r].display=false}}C();k();j();return false;alert("Could not find a possible schedule")}function _(e,t,n,r){this.$button=$(e);$(e).data("button",this);this.hue=t;this.actionCallBack=n;this.parameter=r}function D(e){}function P(e,t,n){this.$div=id;this.colorNorm="hsl("+t+","+y+"%,"+b+"%)";this.colorHover="hsl("+t+","+y+"%,"+(b+7)+"%)";this.colorDown="hsl("+t+","+y+"%,"+(b-10)+"%)";this.actionCallBack=n;$(id+" div").css("background-color","hsl("+t+", 1%,"+b+"%)");$(id+" div").animate({backgroundColor:"hsl("+t+","+y+"%,"+b+"%)"},500)}function H(e){try{e=e.match(/^[A-Z][A-Z]{1,6}[ ]\d[A-z0-9a-z.]{0,7}\b/)[0]}catch(t){e=prompt("The course name was missing.\nplease enter a course name.","Course "+(c.length+1))}return e}function B(){$.jStorage.set("Courses",JSON.stringify(h));j()}function j(){p.splice(0,p.length);for(var e=0;e<c.length;e++){p[e]=-1;for(var t=0;t<c[e].classes.length;t++){if(c[e].classes[t].display==true){p[e]=c[e].classes[t].oPos;break}}}$.jStorage.set("Classes",JSON.stringify(p))}function F(e,t){var n=$("#textbox").val();if(e!=undefined){n=e}$("#textbox").val("");$("#B_addCourse div").addClass("disabled");n=n.trim();var r=n;var i=new I;i.courseTitle=H(n);{}n=G(n);f=(f+48)%360;if(f==240){f=(f+48)%360}var s=q(i.courseTitle,f);s.children(".closeButton").data("$course",i);i.$div=s;try{z(i,n,t)}catch(o){console.log("error_adding_class")}s.data("course",i);if(i.classes.length>0){c.push(i);h.push(r);B()}else{s.remove();alert("There was a problem adding the course, please check that it was copied correctly.")}}function I(){this.courseTitle;this.display=true;this.cycle=0;this.hue=0;this.classes=[];this.$div;this.deleted=0;this.ToggleCourseDisplay=function(){this.display=!this.display;return this.display};this.RefreshButtons=function(e){if(!this.display||e==true){for(var t=0;t<this.classes.length;t++){if(this.classes[t].display){this.classes[t].$div.parentsUntil(".courseGroup").removeClass("hiddenClass")}else{this.classes[t].$div.parentsUntil(".courseGroup").addClass("hiddenClass")}}}else{for(var t=0;t<this.classes.length;t++){this.classes[t].$div.parentsUntil(".courseGroup").removeClass("hiddenClass")}}};this.RefreshDeleteCount=function(){if(this.deleted==1){this.$div.children("span").children("span").html(" ("+this.deleted+" Class Deleted)")}else{this.$div.children("span").children("span").html(" ("+this.deleted+" Classes Deleted)")}};this.DimClasses=function(e){for(var t=0;t<this.classes.length;t++){this.classes[t].dim=e}}}function q(e){var t=$("<div>",{"class":"courseGroup"});$("#third").append(t);t.append("<span>"+e+' <wbr><span></span></span><div class="closeButton">X</div><div class="arrow arrow-down"></div>');t.children(".arrow").data("$course",t);t.css("background-color","hsl("+f+", 40%,80%)");return t}function R(e){var t=$("<div>",{"class":"buttonCont"});e.append(t);var n=$("<div>",{"class":"button"});t.append(n);var r=$("<div>",{"class":"buttonInside"});n.append(r);return r}function U(e,t){parsed=[];for(var n=0;n<t;n++){var r=e.match(/.*?(>|&|\t)/)[0];e=e.replace(/.*?(>|&|\t)/,"");parsed.push(r.substring(0,r.length-1));if(e.length<=1){break}}return parsed}function z(e,t,n){var r=t.length;var i=[];for(var s=0;s<r;s++){var o=new W;e.classes.push(o);try{o.sect=t[s].match(/\d{4}/)[0];t[s]=t[s].replace(/.*?(>|\t)/,"");var u=t[s].match(/.*?(>|\t)/)[0];u=u.replace(/Th/g,"R");u=u.replace(/Sat/g,"S");u=u.replace(/TBA/g,"X");i.splice(0,i.length);i=U(u,20);var a=i.length;for(var f=0;f<a;f++){var l=new Q;o.sessions.push(l);var c="";while(true){c=i[f].charAt(0);switch(c.toUpperCase()){case"M":l.days[0]=1;break;case"T":l.days[1]=1;break;case"W":l.days[2]=1;break;case"R":l.days[3]=1;break;case"F":l.days[4]=1;break;case"S":l.days[5]=1;break}if(i[f].length==1){break}i[f]=i[f].substring(1,i[f].length)}}u=t[s].match(/.*?(>|\t)/)[0];t[s]=t[s].replace(/.*?(>|\t)/,"");i.splice(0,i.length);i=U(u,a);for(var f=0;f<a;f++){o.sessions[f].daysS=i[f]}u=t[s].match(/.*?(>|\t)/)[0];t[s]=t[s].replace(/.*?(>|\t)/,"");i.splice(0,i.length);i=U(u,a);for(var f=0;f<a;f++){try{var h,p,d;u=i[f];o.sessions[f].timeS=u;h=Number(u.match(/\d\d?/)[0]);u=u.replace(/.*?:/,"");p=Number(u.match(/\d\d/)[0]);u=u.replace(/.*?\s/,"");d=u.match(/\s*?[amp]{2}/)[0];u=u.replace(/\s\-\s/,"");if(d.toLowerCase()=="pm"){if(h!=12){h+=12}}else{if(h==12){h=0}}o.sessions[f].timeStart=h*60+p-420;h=Number(u.match(/\d\d?/)[0]);u=u.replace(/.*?:/,"");p=Number(u.match(/\d\d/)[0]);u=u.replace(/.*?\s/,"");d=u.match(/\s*?[amp]{2}/)[0];if(d.toLowerCase()=="pm"){if(h!=12){h+=12}}else{if(h==12){h=0}}o.sessions[f].timeEnd=h*60+p-420}catch(v){console.log("error adding times"+f)}}u=t[s].match(/.*?(>|\t)/)[0];t[s]=t[s].replace(/.*?(>|\t)/,"");i.splice(0,i.length);i=U(u,a);for(var f=0;f<a;f++){o.sessions[f].instructor=i[f]}try{u=t[s].match(/.*?(>|\t)/)[0];t[s]=t[s].replace(/.*?(>|\t)/,"");i.splice(0,i.length);i=U(u,a);for(var f=0;f<a;f++){o.sessions[f].location=i[f]}}catch(v){console.log("Class locations missing")}try{u=t[s].match(/.*?(>|\t)/)[0];t[s]=t[s].replace(/.*?(>|\t)/,"");o.units=u.substring(0,u.length-1)}catch(v){console.log("Class units missing")}try{u=t[s].match(/.*?(>|\t)/)[0];t[s]=t[s].replace(/.*?(>|\t)/,"");o.status=u.substring(0,u.length-1)}catch(v){console.log("Class status missing")}try{u=t[s].match(/.*?(>|\t)/)[0];t[s]=t[s].replace(/.*?(>|\t)/,"");o.seats=u.substring(0,u.length-1)}catch(v){console.log("Available number of seats missing")}u=t[s].match(/.*?(>|\t)/)[0];t[s]=t[s].replace(/.*?(>|\t)/,"");i.splice(0,i.length);i=U(u,a);for(var f=0;f<a;f++){var m,g;o.sessions[f].dateS=i[f];u=i[f];m=Y(Number(u.match(/\d\d?/)[0]));u=u.replace(/\d\d?\//,"");g=Number(u.match(/\d\d?/)[0]);u=u.replace(/\d\d?\-/,"");o.sessions[f].dateStart=m+g;m=Y(Number(u.match(/\d\d?/)[0]));u=u.replace(/\d\d?\//,"");g=Number(u.match(/\d\d?/)[0]);o.sessions[f].dateEnd=m+g}try{u=t[s].match(/.*?(>|\t)/)[0];t[s]=t[s].replace(/.*?(>|\t)/,"");o.finalExam=u.match(/\d\d?\/\d\d?\/\d{4}/)[0]}catch(v){console.log("error adding final exam date")}try{if(t[s].length>0){u=t[s].match(/.*?(>|\t)/)[0];o.note=u.substring(0,u.length-1)}}catch(v){console.log("error adding class notes")}var y=R(e.$div);y.data("class",o);y.append('<div style="float:left; width:100%;"><div style="margin-right: 20px">'+o.sect+" - "+o.sessions[0].instructor+"</div></div>"+'<div class="closeButton2">X</div>');y.find(".closeButton2").data("$class",o);y.find(".closeButton2").hide();o.$div=y;o.parent=e.$div;o.oPos=s;if(s==n){o.display=true}o.RefreshColor()}catch(v){e.classes.pop();console.log("error_AddClass"+v)}}}function W(){this.display=false;this.hover=false;this.note="";this.sect=0;this.seats=0;this.units="";this.status="";this.finalExam="";this.sessions=[];this.$div;this.lhue=f;this.lsat;this.lval;this.lalp;this.parent;this.dim=false;this.oPos;this.RefreshColor=function(){if(this.hover){this.lsat=100;this.lval=45}else if(this.display){this.lsat=90;this.lval=60}else{this.lsat=40;this.lval=70}this.$div.css("box-shadow","inset 0 0 0 1000px hsl("+this.lhue+","+this.lsat+"%,"+this.lval+"%)")};this.RefreshDrawClass=function(){if(this.dim&&this.display){this.lalp=.3;this.lineColor="gray"}else if(this.hover){this.lalp=1;this.lineColor="white"}else if(this.display){this.lalp=.7;this.lineColor="black"}else{this.lalp=0}if(this.lalp!=0){this.DrawClass()}};this.DrawClass=function(){for(var e=0;e<this.sessions.length;e++){this.DrawSession(e)}};this.DrawSession=function(e){var t=this.parent.data("course").courseTitle;var n;for(var r=0;r<6;r++){if(this.sessions[e].days[r]==1){var i,s,o,u;i=V(r,this.sessions[e].dateStart,this.sessions[e].dateStart);s=V(r,this.sessions[e].dateEnd+.001,this.sessions[e].dateStart);o=J(this.sessions[e].timeStart);u=J(this.sessions[e].timeEnd);n=t+"</br>Loc: "+this.sessions[e].location;X(i,o,s,u,this.lineColor,1,true,"hsla("+this.lhue+","+90+"%,"+60+"%,"+this.lalp+")",n,this,e)}}};this.PopulateInfoPane=function(e){var t=$("#infoPane");var n="";n+=this.parent.data("course").courseTitle;n+="<br/>Sect: "+this.sect;for(var r=0;r<this.sessions.length;r++){if(r==e){n+="<span style='font-weight:700'>"}n+="<br/><br/>Days: "+this.sessions[r].daysS;n+="<br/>Hours: "+this.sessions[r].timeS;n+="<br/>Instruction: "+this.sessions[r].instructor;n+="<br/>Location: "+this.sessions[r].location;n+="<br/>Dates: "+this.sessions[r].dateS;if(r==e){n+="</span>"}}n+="<br/><br/>Units: "+this.units;n+="<br/>Status: "+this.status;n+="<br/>seats: "+this.seats;n+="<br/>Final: "+this.finalExam;n+="<br/></br>Notes: "+this.note;t.html(n)};this.ClearInfoPane=function(){$("#infoPane").html("")}}function X(e,t,n,r,i,s,o,u,a,f,l){$div=$("<div>",{"class":"drawClass"});$div.width(n-e-s*2+"px");$div.height(1+r-t-s*2+"px");$div.css("top",t+"px");$div.css("left",e+"px");$div.css("box-shadow","inset 0 0 0 1000px "+u);$div.css("border-color",i);$div.css("border-width",s+"px");if(a!==undefined){$div.html("<div><p>"+a+"</p></div>");$div.data("parent",f);$div.data("sessionNum",l)}$("#divCanvas").append($div)}function V(o,a,f){var l,c;if(f<152){l=e;c=t}else if(f<213){l=n;c=r}else{l=i;c=s}if(a==f){return v+Math.round(Math.min(Math.round(Math.min(Math.max(0,a-l),c-l)/7)*7,c-l)*(u/(c-l))+(u+2)*o)}else{return v+Math.round(Math.min(Math.ceil(Math.min(Math.max(0,a-l),c-l)/7)*7,c-l)*((u+3)/(c-l))+(u+2)*o)}}function J(e){return d+Math.round(e*(a/60))}function K(){for(var e=0;e<c.length;e++){c[e].$div.remove()}c.splice(0,c.length);h.splice(0,h.length);N();$("#infoPane").html("");$("#textbox").val("");$("#B_addCourse div").addClass("disabled");f=0;B()}function Q(){this.days=[];this.daysS="";this.timeStart=0;this.timeS="";this.timeEnd=0;this.instructor="";this.location=0;this.dateStart=0;this.dateS="";this.dateEnd=0}function G(e){e=e.replace(/\n\s?\t(\d{4})/g,"><$1");e=e.replace(/(\n|.)*?>/,"");e=e.replace(/\n/g,"&");e+=">";e=e.match(/<(.*?)>/g);return e}function Y(e){var t=0;switch(e){case 2:t+=31;break;case 3:t+=59;break;case 4:t+=90;break;case 5:t+=120;break;case 6:t+=151;break;case 7:t+=181;break;case 8:t+=212;break;case 9:t+=243;break;case 10:t+=273;break;case 11:t+=304;break;case 12:t+=334;break}return t}function Z(){T(true);C(true);k();$("html").css("height",g+"px");$("body").css("height",g+"px");$("#container2").css("height",g+"px");window.print();T();C();k();$("html").css("height","intial");$("body").css("height","intial");$("#container2").css("height","intial")}var e=Y(1)+20;var t=Y(5)+10;var n=Y(6)+20;var r=Y(7)+27;var i=Y(8)+26;var s=Y(12)+9;if("ontouchstart"in window||navigator.msMaxTouchPoints){var o=true}else{var o=false}if(o){$("#container2").css("max-width","none");$("#container").css("margin-top","24px");$("#header").hide();$("#B_print").parent().css("display","none")}var u=99;var a=36;var f=0;var l=[];var c=[];var h=[];var p=[];var d=$("#firstColumn").height();var v=$("#firstColumn").width();var m=$("#timeSheet").width();var g=$("#timeSheet").height();$("#first").height(g+"px");$("#second").height(g+"px");$("#third").height(g+"px");var y=55;var b=66;try{if($.jStorage.get("Courses",undefined)!=undefined){var w=JSON.parse($.jStorage.get("Courses"));var E=JSON.parse($.jStorage.get("Classes"));for(var S=0;S<w.length;S++){F(w[S],E[S])}}}catch(x){$.jStorage.flush()}$(window).on("resize",function(){T()});_.prototype.clickBut=function(){this.actionCallBack(this.parameter)};$("#third").on("vclick",".button>div",function(){var e=$(this).data("class");var t=!e.display;console.log(e.sect+" - "+e.sessions[0].instructor);for(var n=0;n<e.parent.data("course").classes.length;n++){e.parent.data("course").classes[n].display=false;e.parent.data("course").classes[n].RefreshColor()}e.display=t;e.RefreshColor();e.parent.data("course").RefreshButtons();N();k();j()});$("#third").on("mouseenter",".button>div",function(){var e=$(this).data("class");e.hover=true;var t=c.indexOf(e.parent.data("course"));if(!o){e.$div.find(".closeButton2").show();e.parent.data("course").DimClasses(true);e.dim=false}e.PopulateInfoPane();e.RefreshColor();N();e.RefreshDrawClass();k(t)});$("#divCanvas").on("mouseenter",".drawClass",function(){try{$(this).data("parent").PopulateInfoPane($(this).data("sessionNum"))}catch(e){}});$("#divCanvas").on("mouseleave",".drawClass",function(){$("#infoPane").html("")});$("#third").on("mouseleave",".button>div",function(){var e=$(this).data("class");e.hover=false;if(!o){e.$div.find(".closeButton2").hide();e.parent.data("course").DimClasses(false)}e.RefreshColor();N();k();$("#infoPane").html("")});$("#third").on("click",".arrow",function(){var e=$(this).data("$course");if(e.data("course").ToggleCourseDisplay()){$(this).addClass("arrow-down").removeClass("arrow-left")}else{$(this).addClass("arrow-left").removeClass("arrow-down")}e.data("course").RefreshButtons()});$("#third").on("click",".closeButton",function(){var e=$(this).data("$course");var t=c.indexOf(e);if(t!=-1){$("#infoPane").html("");c[t].$div.remove();c.splice(t,1);h.splice(t,1);N();k();B()}});$("#third").on("click",".closeButton2",function(){var e=$(this).data("$class");var t=e.parent.data("course").classes.indexOf(e);if(t!=-1){$("#infoPane").html("");e.parent.data("course").classes.splice(t,1);e.parent.data("course").deleted+=1;e.parent.data("course").RefreshDeleteCount();e.$div.parentsUntil(".courseGroup").remove();N();k();j()}});jQuery(document).bind("keyup keydown",function(e){if(e.ctrlKey&&e.keyCode==80){Z()}});l.push(new _("#B_addCourse",212,F));l.push(new _("#B_classCycleLeft",99,M,"B"));l.push(new _("#B_classCycleRight",99,M,"F"));l.push(new _("#B_save",56,D));l.push(new _("#B_load",56,D));l.push(new _("#B_print",268,Z));l.push(new _("#B_restart",14,K));l.push(new _("#B_help",30));$(".button").click(function(){if(!$(this).children().hasClass("disabled")){$(this).data("button").clickBut()}});$(document).keyup(function(e){if(e.keyCode==37){M("B");return false}});$(document).keyup(function(e){if(e.keyCode==39){M("F");return false}});$("textarea").bind("input",function(){if($(this).val()!=""){$("#B_addCourse div").removeClass("disabled")}else{$("#B_addCourse div").addClass("disabled")}});$("textarea").keypress(function(e){if(!(e.ctrlKey&&e.which===46)||e.which===8)e.preventDefault();if(e.keyCode==13){e.preventDefault();if($(this).val()!=""){console.log("Asdfa");$("#B_addCourse").data("button").clickBut();return 0}}});setTimeout(T,200);setTimeout(T,400);setTimeout(T,1e3);T()})