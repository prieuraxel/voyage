var naturalWidth = 0;
var naturalHeight = 0;
var airps = new Array();
var vists = new Array();
var timeline = new Array();

window.onload =  function(){ 
	console.log("loaded");
	var map = document.getElementById("map");
	var width = map.clientWidth;
	var height = map.clientHeight;
	naturalWidth = map.naturalWidth;
	naturalHeight = map.naturalHeight;
	console.log("nw="+map.naturalWidth);
	console.log("w="+map.width);
	var ratioW = width/naturalWidth;
	var ratioH = height/naturalHeight;
	console.log("ratioW="+ratioW);
	console.log("ratioH="+ratioH);	
	console.log("cw="+width);
	
	var jqxhr = $.getJSON( "sVoyAirp.php",{ action: "listAll" }, function() {
	console.log( "success" );
	})
	.done(function(jsonMsg) {
		console.log( "second success:"+jsonMsg );
		//var jsonData = JSON.parse(myMessage);
		var jsonMsgret = jsonMsg.msg;
		var jsonNbRows = jsonMsg.nbRows;
		airps = jsonMsg.airps;
		//$.each(jsonAirps, function(iAirp,airp){			
		//}
		newRatio(100,0);	
		//populateTimeline();
	})
	.fail(function() {
		console.log( "error" );
	})
	.always(function() {
		console.log( "complete" );
	});
	
		
	
	//$("#destSFO").attr("coords", sfoCoord.join(', '));
	//resizePos(posSFO,ratioW);	
	//$("#pSFO").css(formatCss(pos[0].left,pos[0].top));
	//resizePos(posLAX,ratioW);	
	//$("#pLAX").css(formatCss(pos[1].left,pos[1].top));	
};



$( "#t1" ).click(function() {
  newRatio(100,0); 
});
$( "#t2" ).click(function() {
  newRatio(140,0.01);
});
$( "#t3" ).click(function() {
  newRatio(180,0.02);
});
$( "#t4" ).click(function() {
  newRatio(220,0.025);
});

function newRatio(rat,adjust) {
	$( "#map" ).attr("width",rat+"%");
	//console.log($( "#map" ).width());	
	var r = ($( "#map" ).width())/naturalWidth;
	var ratioW = r+(r*adjust);
	//console.log($( "#map" ).width()+"    r="+r+"     ratio="+ratioW+"  ajust="+(r*adjust));
	placePos(ratioW);	
	populateTimeline(ratioW);
}

function populateTimeline(ratio) {

	var w = $( "#timeline" ).width();
	var position = $( "#timeline" ).position();
	console.log(w);
	console.log(w/35);
	
	//timelineYears timelineLabel
	/*
	var html="";
	var bgc="#A8D3EC";
	var top = position.top+(-25);
	for (i = 0; i < 34; i++) {
		var left = (w/35) * i;
		var width = w/35;
		if (i%2 == 0) {
			bgc="#A8F3EC";
		} else {
			bgc="#A8D3EC";
		}
		html+='<div class="fixed-rectangle" style="position: absolute;top:'+top+'px;left:'+left+'px;height:30px;width:'+width+'px;background-color:'+bgc+'"></div>';			
	}
	$( "#timelineYears" ).html(html);
	html="";
	top = position.top+(-25);
	for (i = 0; i < 34; i++) {
		if (i >= 14) {
				an = i -14;
		} else {
				an = i + 86;
		}
		var left = (w/35) * i;		
		html+='<div class="textAnnee" style="position: absolute;top:'+top+'px;left:'+left+'px">' + an +'</div>';	
	}
	$( "#timelineLabel" ).html(html);	
	*/
	
	 
	var jqxhr = $.getJSON( "sVoyVist.php",{ action: "listTimeline" }, function() {
	console.log( "success" );
	})
	.done(function(jsonMsg) {
		console.log( "second success:"+jsonMsg );
		//var jsonData = JSON.parse(myMessage);
		var jsonMsgret = jsonMsg.msg;
		var jsonNbRows = jsonMsg.nbRows;
		timeline = jsonMsg.vists;
		var htmlYears="";
		var htmlLabel="";
		var topYears = position.top+(-26);	
		var leftYears = 0;
		var widthYears = 0;
		var bgc="#A8D3EC";
		var html="";
		var prevAnAbs=0;
		var prevAn="86";
		var anAbs = 0;
		var nbVistParAn=0;
		//var prevNbVistParAn=0;
		var first=true;
		$.each( timeline, function( i, vist ) {
			var an = vist.datevisite.substr(2,2);
			var mois = vist.datevisite.substr(5,2);			
			if (vist.datevisite.substr(0,4) != "0000") {
			if (an >= "86") {
				anAbs = parseInt(an,10) - 86;
			} else {
				anAbs = parseInt(an,10) + 14;
			}	
			if (anAbs != prevAnAbs  ) {				
				widthYears = (nbVistParAn*15);
				if (bgc=="#A8F3EC") {
					bgc="#9FE886";
				} else {
					bgc="#A8F3EC";
				}
				htmlYears+='<div class="fixed-rectangle" style="position: absolute;top:'+topYears+'px;left:'+leftYears+'px;height:40px;width:'+widthYears+'px;background-color:'+bgc+'"></div>';
				htmlLabel+='<div class="textAnnee" style="position: absolute;top:'+topYears+'px;left:'+leftYears+'px">' + prevAn +'</div>';
				//console.log("    --->  topYears="+topYears+",  leftYears="+leftYears);
				nbVistParAn=0;	
				leftYears += widthYears;					
				prevAnAbs = anAbs;
				prevAn = an;
				
			}
			nbVistParAn+=1;
			var left = leftYears +((nbVistParAn)*12  ) - 10;
			//var top = position.top+(nbVistParAn*7)-20;
			var top = position.top-16;
			//console.log( vist.datevisite+"/"+ vist.airpcode+". anAbs="+anAbs+" et nbVistParAn= "+nbVistParAn+". left = "+left);
			html+='<div id="t' + vist.airpcode+'" title="'+vist.datevisite+'='+nbVistParAn+'" class="circleTimeline" style="left:'+left+'px;top:'+top+'px" onmouseenter="highlightFromTimeline(\''+vist.airpcode+'\');" onmouseleave="darkenFromTimeline(\''+vist.airpcode+'\');"> ';
			html+='<div class="textTimeline">' + vist.airpcode+'</div></div>';
			
			}
		});
		widthYears = (nbVistParAn*15);
		if (bgc=="#A8F3EC") {
			bgc="#A8D3EC";
		} else {
			bgc="#A8F3EC";
		}
		htmlYears+='<div class="fixed-rectangle" style="position: absolute;top:'+topYears+'px;left:'+leftYears+'px;height:40px;width:'+widthYears+'px;background-color:'+bgc+'"></div>';
		htmlLabel+='<div class="textAnnee" style="position: absolute;top:'+topYears+'px;left:'+leftYears+'px">' + prevAn +'</div>';		
		$( "#timelineYears" ).html(htmlYears);
		$( "#timelineLabel" ).html(htmlLabel);
		$( "#timeline" ).html(html);	
	})
	.fail(function() {
		console.log( "error" );
	})
	.always(function() {
		console.log( "complete" );
	});
	 
	
	/*

	$( "#timeline" ).empty();
	var html="";
	$.each( airps, function( i, airp ) {
		html+='<div id="t' + airp.airpcode+'" class="fixed-rectangle" > ';
		html+='<div class="text">' + airp.airpcode+'</div></div>';
	});
	 
	$( "#timeline" ).html(html);
	$.each( airps, function( i, val ) {		
		$( "#t" + val.airpcode ).css( formatCss(val.leftpos * ratio,val.toppos * ratio)   );		
	});
	
	*/
}
function highlightFromTimeline(dest) { 

  highlight(document.getElementById("p" + dest  ));
  go(dest,"");
}
function darkenFromTimeline(dest) { 

  darken(document.getElementById("p" + dest  ));
}

function highlight(destElem) { 

	set_opacity(destElem, 100);
	//$("#circle").css("visibility","visible");
	//$("#circle").css("top","595px");
	//$("#circle").css("left","386px");
}
function darken(destElem) {

	//$("#circle").css("visibility","hidden");	
	set_opacity(destElem, 0);
}
 
function set_opacity(el, opacity) {

        //el = document.getElementById(id);
        el.style["filter"] = "alpha(opacity="+opacity+")";
        el.style["-moz-opacity"] = opacity/100;
        el.style["-khtml-opacity"] = opacity/100;
        el.style["opacity"] = opacity/100;
        return true;
}

function closeList() {
	$( "#list" ).empty();
	$( "#detail" ).empty();
}
 
function go(dest,ville) {
	//var visitesDest = new Array() ;
	//var visitesDestIndex = -1;
	//var visitesVille = "";
	
	var jqxhr = $.getJSON( "sVoyVist.php",{ action: "listAirpCode",airpCode:dest }, function() {
	console.log( "success" );
	})
	.done(function(jsonMsg) {
		console.log( "second success:"+jsonMsg );
		//var jsonData = JSON.parse(myMessage);
		var jsonMsgret = jsonMsg.msg;
		var jsonNbRows = jsonMsg.nbRows;
		vists = jsonMsg.vists;
		console.log(vists);
		//$.each(jsonAirps, function(iAirp,airp){			
		//}
	
		$( "#list" ).empty();
		$( "#detail" ).empty();
		var html="";
		html+='<div class="panel panel-primary">';
		html+='<div class="mypadding panel-heading text-center">'+ville+' ('+dest+')&nbsp;&nbsp;';
		html+='<button type="button" class="close" onclick="closeList();"><span aria-hidden="true">X</span></button>';
		html+='</div>';
		html+='<div class="mypadding panel-body">';
	
		$.each( vists, function( i, vist ) {
console.log("vist.datevisite="+vist.datevisite);		
			html+="<div>"+formatDate(vist.datevisite)+" "+vist.lieux;
			if (vist.detail != "") {
				//html+='onclick=\"detail('"+formatDate(vist.datevisite)+"','"+vist.lieux+"','"+vist.detail+"')\"";
				html+='<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" ';
				html+='onclick="detail(\''+formatDate(vist.datevisite)+'\',\''+vist.lieux+'\',\''+vist.detail+'\')\">';
				html+='<span class="glyphicon glyphicon-zoom-in" aria-hidden="true"></span>';
				html+='</button>';
			}
			// rajout acces a la liste des videos
			html+='<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" ';
			html+='onclick="listVideos(\''+formatDate(vist.datevisite)+'\',\''+vist.lieux+'\',\''+vist.detail+'\',\''+vist.id+'\')\">';
			html+='<span class="glyphicon glyphicon-camera" aria-hidden="true"></span>';
			html+='</button>';
			
			
			html+='</div>';
		});    	
		//html+='<div class="panel-footer">Panel footer</div>';
		html+='</div>';
		html+='</div>';
		$( "#list" ).html(html);	
	})
	.fail(function() {
		console.log( "error" );
	})
	.always(function() {
		console.log( "complete" );
	});
	
}

function listVideos(date,lieux,detail,visiteId) {
	$( "#detail" ).empty();
	var html="";
	html+='<div class="panel panel-primary">';
	html+='<div class="mypadding panel-heading text-center">Listes videos : '+date+' à '+lieux+'</div>';
	html+='<div class="mypadding panel-body">';

	var jqxhr = $.getJSON( "sVoyVdeo.php",{ action: "listForVisite",visite_id:visiteId }, function() {
	console.log( "success" );
	})
	.done(function(jsonMsg) {
		console.log( "second success:"+jsonMsg );
		//var jsonData = JSON.parse(myMessage);
		var jsonMsgret = jsonMsg.msg;
		var jsonNbRows = jsonMsg.nbRows;
		vdeos = jsonMsg.vdeos;
		html+='<table class="table">';
		html+='<tr><td>Dossier</td><td>Fichiers</td><td>Sauvegarde disk</td><td>Sauvegarde cd</td></tr>';
		$.each( vdeos, function( i, vdeo ) {	
			console.log(vdeo.nomdossier);
			html+='<tr><td>'+vdeo.nomdossier+'</td><td>'+vdeo.nomfichiers+'</td><td>'+vdeo.savedisk+'</td><td>'+vdeo.savecd+'</td></tr>';
		
		}); 
		html+='</table>';		
		html+='</div>';
		html+='</div>';
		console.log(html);
		$( "#detail" ).html(html);		
					
	})
	.fail(function() {
		console.log( "error" );
	})
	.always(function() {
		console.log( "complete" );
	});
	
	
}

function detail(date,lieux,detail) {
	console.log('detail');
	$( "#detail" ).empty();
	var html="";
	html+='<div class="panel panel-primary">';
	html+='<div class="mypadding panel-heading text-center">'+date+' : '+lieux+'</div>';
	html+='<div class="mypadding panel-body">';
	html+=detail;
	html+='</div>';
	html+='</div>';
	console.log(html);
	$( "#detail" ).html(html);
}


function formatDate(d) {
	$mois = d.substr(5,2);
	if ($mois=="01") $moisClair = "jan";
	if ($mois=="02") $moisClair = "fev";
	if ($mois=="03") $moisClair = "mar";
	if ($mois=="04") $moisClair = "apr";
	if ($mois=="05") $moisClair = "may";
	if ($mois=="06") $moisClair = "jun";
	if ($mois=="07") $moisClair = "jul";
	if ($mois=="08") $moisClair = "aug";
	if ($mois=="09") $moisClair = "sep";
	if ($mois=="10") $moisClair = "oct";
	if ($mois=="11") $moisClair = "nov";
	if ($mois=="12") $moisClair = "dec";
	
	return $moisClair+"/"+d.substr(2,2)

}

function formatCss(left,top) {
	//var r = i+'px';	
	var css = { left : "0px",   top: "0px"  };
	css.left=left;css.top=top;
	return css;
}

function placePos(ratio) {
//console.log(pos[0].left * ratio,pos[0].top * ratio);
	$( "#pos" ).empty();
	var html="";
	$.each( airps, function( i, airp ) {
		html+='<div id="p' + airp.airpcode+'" class="circle hand" onclick="go(\'' + airp.airpcode+'\',\''+airp.ville+'\');" onmouseenter="highlight(this);" onmouseleave="darken(this);"> ';
		html+='<div class="text">' + airp.airpcode+'</div></div>';
	});
	//console.log(html);
	$( "#pos" ).html(html);
	$.each( airps, function( i, val ) {		
		$( "#p" + val.airpcode ).css( formatCss(val.leftpos * ratio,val.toppos * ratio)   );		
	});
	
}