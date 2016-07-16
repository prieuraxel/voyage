
window.onload =  function(){ 	
	
};

 

$( "#Videos" ).click(function() {
	$( "#Videos" ).addClass('active');
	$( "#Visites" ).removeClass('active');
	$( "#Lienvdvi" ).removeClass('active');
  listVideos(); 
});
$( "#Visites" ).click(function() {
	$( "#Videos" ).removeClass('active');
	$( "#Visites" ).addClass('active');
	$( "#Lienvdvi" ).removeClass('active');
  listVisites(); 
});
$( "#Lienvdvi" ).click(function() {
	$( "#Videos" ).removeClass('active');
	$( "#Visites" ).removeClass('active');
	$( "#Lienvdvi" ).addClass('active');
	lienvdvi(); 
});

$( "#vistTAB" ).click(function() {
  console.log("vistTAB0"); 
});

$('#vistTAB').on('click', '.clickable-row', function(event) {
console.log("vistTAB");
  $(this).addClass('active').siblings().removeClass('active');
});

$('#vistTAB').on('click', '.clickable-row', function(event) {
console.log("vistTAB2");
  if($(this).hasClass('active')){
    $(this).removeClass('active'); 
  } else {
    $(this).addClass('active').siblings().removeClass('active');
  }
});


function lienvdvi() {
	$( "#myContent" ).empty();
	var html="";
	
	
	var jqxhr = $.getJSON( "sVoyVdeo.php",{ action: "listAll" }, function() {
	console.log( "success" );
	})
	.done(function(jsonMsg) {
		console.log( "second success:"+jsonMsg );
		var jsonMsgret = jsonMsg.msg;
		var jsonNbRows = jsonMsg.nbRows;
		vdeos = jsonMsg.vdeos;
		
		var jqxhr = $.getJSON( "sVoyVist.php",{ action: "listTimeline" }, function() {
		console.log( "success" );
		})
		.done(function(jsonMsg) {
			console.log( "second success:"+jsonMsg );
			var jsonMsgret = jsonMsg.msg;
			var jsonNbRows = jsonMsg.nbRows;
			vists = jsonMsg.vists;
			
			var jqxhr = $.getJSON( "sVoyVistVdeo.php",{ action: "listAll" }, function() {
			console.log( "success" );
			})
			.done(function(jsonMsg) {
				console.log( "sVoyVistVdeo.php listAll success:"+jsonMsg );
				var jsonMsgret = jsonMsg.msg;
				var jsonNbRows = jsonMsg.nbRows;
				vsvds = jsonMsg.vsvds;
				
			
			
				// on a les tab vdeos et vists et vsvd!
				
				//html+='<div class="panel panel-primary col-md-12">';
				//html+='<div class=" panel-heading text-center">Listes videos et visistes</div>';
				//html+='<div class=" panel-body">';				
				html+='<div class="container" style="width:1500px;">';
				
				html+='<div class="row col-lg-12">';
				html+='<div class="col-lg-6">';
				
				html+='<table  id="vdeoTAB" class="table" style="height:500px;width: 100%;" >';
				html+='<thead>';		
				html+='<tr><td >Id</td>';
				html+='<td >Dossier</td><td >Fichiers</td><td>Id associated</td>';			
				html+='</tr>';
				html+='</thead>';
				html+='<tbody style="overflow-y: scroll;  height: 400px;  width: 95%;  position: absolute;">';
				$.each( vdeos, function( i, vdeo ) {	
					
					html+='<tr class="clickable-row" ><td ">'+vdeo.id+'</td>';
					html+='<td >'+vdeo.nomdossier+'</td><td>'+vdeo.nomfichiers+'</td>';	
					html+='<td >'+generateAssVistList(vsvds,vdeo.id)+'</td>';											
					html+='</tr>';
			
				}); 
				html+='</tbody>';
				html+='</table>';
				
				html+='</div>';	

				html+='<div class="col-lg-6">';
				
				html+='<table id="vistTAB" class="table" style="height:500px;width: 95%;" >';
				html+='<thead>';		
				html+='<tr><td >Id</td>';
				html+='<td >Date</td><td >Lieux</td><td>Id associated</td>';			
				html+='</tr>';
				html+='</thead>';
				html+='<tbody style="overflow-y: scroll;  height: 400px;  width: 100%;  position: absolute;">';
				$.each( vists, function( i, vist ) {	
					
					html+='<tr class="clickable-row"><td ">'+vist.id+'</td>';
					html+='<td >'+vist.datevisite+'</td><td >'+vist.lieux+'</td>';	
					html+='<td >'+generateAssVdeoList(vsvds,vist.id)+'</td>';						
					html+='</tr>';
			
				}); 
				html+='</tbody>';
				html+='</table>';
				
				html+='</div>';	
				html+='</div>';					
				
				html+='<div class="row">';
				html+='<div class="col-md-6">';
				html+='<form id="associate" class="form-inline">';
				//html+='<div class="form-group">';
				html+='<label>Video ID :&nbsp;&nbsp; </label><label id="vdeoChoisi"></label>&nbsp;&nbsp;&nbsp;';
				html+='<label>Visiste ID :&nbsp;&nbsp; </label><label id="vistChoisi"></label>&nbsp;&nbsp;&nbsp;';
				html+='<button type="submit" name="associate" class="btn btn-default">Associate</button>';
				html+='<button type="submit" name="disassociate" class="btn btn-default">Disassociate</button>';
				
				html+='</form>';
				html+='</div>';	
				html+='</div>';	

				
				html+='</div>'; // container
				//html+='</div>';
				//html+='</div>';			
				$( "#myContent" ).html(html);		

				var vistChoisi = 0;
				var vdeoChoisi = 0;

				$('#vistTAB').on('click', '.clickable-row', function(event) {
					console.log("vistTAB"+$(this).children(":first").text());
					$(this).addClass('active').siblings().removeClass('active');
					vistChoisi=$(this).children(":first").text();
					$('#vistChoisi').text(vistChoisi);
				});			
				
				$('#vdeoTAB').on('click', '.clickable-row', function(event) {
					//console.log("vdeoTAB");
					$(this).addClass('active').siblings().removeClass('active');
					vdeoChoisi=$(this).children(":first").text();
					$('#vdeoChoisi').text(vdeoChoisi);
				});			
				
				$( "#associate" ).submit(function(e){
					e.preventDefault();
					var submit = $(this.id).context.activeElement;				
					console.log(submit.name+" for "+vistChoisi+" and "+vdeoChoisi); 
					if (submit.name == "associate") {
						associate(vistChoisi,vdeoChoisi);
					}
					if (submit.name == "disassociate") {
						disassociate(vistChoisi,vdeoChoisi);
					}
					
					
				});
				
					
			

			})
			.fail(function() {
				console.log( "error" );
			})
			.always(function() {
				console.log( "complete" );
			})
			
			
			
		})
		.fail(function() {
			console.log( "error" );
		})
		.always(function() {
		console.log( "complete" );
		});		
		
		
			
					
	})
	.fail(function() {
		console.log( "error" );
	})
	.always(function() {
		console.log( "complete" );
	});


}


function associate(vistChoisi,vdeoChoisi) {
	var jqxhr = $.getJSON( "sVoyVistVdeo.php",{ action: "associate",visite_id:vistChoisi,video_id:vdeoChoisi }, function() {
	console.log( "success" );
	})
	.done(function(jsonMsg) {
		console.log( "second success:"+jsonMsg );
		//var jsonData = JSON.parse(myMessage);
		var jsonMsgret = jsonMsg.msg;		
	})
	.fail(function() {
		console.log( "error" );
	})
	.always(function() {
		console.log( "complete" );
	});


}

function disassociate(vistChoisi,vdeoChoisi) {
	var jqxhr = $.getJSON( "sVoyVistVdeo.php",{ action: "disassociate",visite_id:vistChoisi,video_id:vdeoChoisi }, function() {
	console.log( "success" );
	})
	.done(function(jsonMsg) {
		console.log( "second success:"+jsonMsg );
		//var jsonData = JSON.parse(myMessage);
		var jsonMsgret = jsonMsg.msg;		
	})
	.fail(function() {
		console.log( "error" );
	})
	.always(function() {
		console.log( "complete" );
	});


}

function generateAssVistList(vsvds,videoid) {
	console.log( "generateAssVistList "+vsvds );
	var h="";
	$.each( vsvds, function( i, vsvd ) {
		if (vsvd.videoid == videoid) {
			h+="/"+vsvd.visiteid;		
		}
	
	}); 
	return h;
	
}
function generateAssVdeoList(vsvds,visitid) {
	console.log( "generateAssVistList "+vsvds );
	var h="";
	$.each( vsvds, function( i, vsvd ) {
		if (vsvd.visiteid == visitid) {
			h+="/"+vsvd.videoid;		
		}
	
	}); 
	return h;
	
}
function listVideos() {
	$( "#myContent" ).empty();
	var html="";
	html+='<div class="panel panel-primary col-md-9">';
	html+='<div class=" panel-heading text-center">Listes videos</div>';
	html+='<div class=" panel-body">';

	var jqxhr = $.getJSON( "sVoyVdeo.php",{ action: "listAll" }, function() {
	console.log( "success" );
	})
	.done(function(jsonMsg) {
		console.log( "second success:"+jsonMsg );
		//var jsonData = JSON.parse(myMessage);
		var jsonMsgret = jsonMsg.msg;
		var jsonNbRows = jsonMsg.nbRows;
		vdeos = jsonMsg.vdeos;
		html+='<table class="table LVtable" >';
		html+='<thead>';		
		html+='<tr><td class="col-md-1">Id</td>';
		html+='<td class="col-md-1">Dossier</td><td class="col-md-2">Fichiers</td><td class="col-md-1">com</td>';
		html+='<td class="col-md-1">date</td><td class="col-md-1">taille</td><td class="col-md-1">SavHD</td>';
		html+='<td class="col-md-1">SavCd</td>';
		html+='<td class="col-md-1">VisiteId</td>';
		html+='</tr>';
		html+='</thead>';
		html+='<tbody class="LVtbody">';
		$.each( vdeos, function( i, vdeo ) {	
			console.log(vdeo.nomdossier);
			html+='<tr class="LVtr"><td class="col-md-1">'+vdeo.id+'</td>';
			html+='<td class="col-md-1">'+vdeo.nomdossier+'</td><td class="col-md-2">'+vdeo.nomfichiers+'</td>';
			html+='<td class="col-md-1">'+vdeo.com+'</td><td class="col-md-1">'+vdeo.date+'</td>';
			html+='<td class="col-md-1">'+vdeo.taille+'</td><td class="col-md-1">'+vdeo.savedisk+'</td>';
			
			html+='<td class="col-md-1">'+vdeo.savecd+'</td>';
			html+='<td class="col-md-1">'+vdeo.visiteid+'</td>';
			html+='</tr>';
		
		}); 
		html+='</tbody>';
		html+='</table>';		
		html+='</div>';
		html+='</div>';
		html+='</div>';
		console.log(html);
		$( "#myContent" ).html(html);		
					
	})
	.fail(function() {
		console.log( "error" );
	})
	.always(function() {
		console.log( "complete" );
	});
	
	
}


