var posxxx =  [
//AUS
{airp:"SYD",left:2555,top: 1190 } ,
//BRE
{airp:"GIG",left:1020 ,top: 1075 } ,
//{airp:"REC",left:00 ,top: 00 } ,
//{airp:"SSA",left:00 ,top: 00 } ,
//{airp:"IGR",left:00 ,top: 00 } ,
//CAN
{airp:"YYZ",left:767 ,top: 505 } ,
//{airp:"YMX",left:00 ,top: 00 } ,
//DOM
{airp:"PUJ",left:800 ,top: 755 } ,
//EAU
{airp:"DBX",left:1795 ,top: 705 } ,
//ECO
{airp:"EDI",left:320 ,top: 960 } ,
//EGY
{airp:"CAI",left:1595 ,top: 660 } ,
//GUA
{airp:"PTP",left:880 ,top: 792 } ,
//HAW
{airp:"HNL",left:95 ,top: 750 } ,
//MAR
{airp:"FDF",left:878 ,top: 785 } ,
//MAU
{airp:"MRU",left:1812 ,top: 1062 } ,
//MEX
{airp:"MEX",left:570 ,top: 750 } ,
//MRC
{airp:"RAK",left:1280 ,top: 650 } ,
//POL
{airp:"PPT",left:180 ,top: 1125 } ,
//POR
{airp:"LIS",left:255 ,top: 1215 } ,
//REU
{airp:"RUN",left:1796 ,top: 1072 } ,
//RUS
{airp:"SVO",left:1652 ,top: 410 } ,
//SAF
{airp:"CPT",left:1500,top: 1170 } ,
{airp:"JNB",left:1575 ,top: 1130 } ,
//SEY
{airp:"SEZ",left:1800 ,top: 940 } ,
//STM
{airp:"SXM",left:850 ,top: 755 } ,
//THA
{airp:"BKK",left:2147 ,top: 795 } ,
//TUN
{airp:"TUN",left:1425 ,top: 600 } ,
//USE
{airp:"JFK",left:770 ,top: 565 } ,
{airp:"IAD",left:730 ,top: 590 } ,
{airp:"MIA",left:700 ,top: 670 } ,
{airp:"IAH",left:610 ,top: 650 } ,
//USO
{airp:"SFO",left:375 ,top: 595 } , 
{airp:"LAX",left:395 ,top: 620 } ,
//JAP
{airp:"KIX",left:2442 ,top: 617 } ,
//CHI
{airp:"HKG",left:2270 ,top: 720 } ,
{airp:"PEK",left:2297 ,top: 567 } ,
//GBR
{airp:"LHR",left:352 ,top: 1030 } ,
//DAN
{airp:"CPH",left:495 ,top: 970 } ,
//HOL
{airp:"AMS",left:420 ,top: 1020 } ,
//ALL
{airp:"MUC",left:490 ,top: 1080 } ,
//AUT
{airp:"VIE",left:500 ,top: 1100 } ,
//ITA
{airp:"FCO",left:495 ,top: 1170 } ,
{airp:"VCE",left:510 ,top: 1113 } ,
//POR
{airp:"OPO",left:255 ,top: 1185 } ,
//ESP
{airp:"BCN",left:365 ,top: 1180 } ,
{airp:"AGP",left:350 ,top: 1225 } ,
//FRA
{airp:"ORY",left:385 ,top: 1080 } ,


];
/* 
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 
 */
var voy = [
{aero:"YYZ",ville:"Toronto",
	visites:[	
	{aamm:"1408",lieux:"Toronto,Montreal,Quebec"  }
	]
},
{aero:"SFO",ville:"San Francsico",
	visites:[	
	{aamm:"0908",lieux:"San Francisco"  },
	{aamm:"1108",lieux:"Yellow Stone",detail:"Super8(Twinfalls),ConfortInn(West yellowstone),Super8(JacksonHole),VagabonInn(Lake Tahoe)"  }
	]
},
{aero:"LAX",ville:"Los Angeles",
	visites:[
	{aamm:"8711",lieux:"Los Angeles..."  },
	{aamm:"9107",lieux:"San Diego"  },
	{aamm:"0708",lieux:"Los Angeles..."  },
	{aamm:"1008",lieux:"San Diego"  },
	{aamm:"1208",lieux:"New mexico...",detail:"Ramada(Tempe,Pheonix),ArozonaRiverPark(Tucson),Quinta(LasCruces),DaysInn(Albuquerque),Super8(Flagstaff),Excalibur(LasVegas)"  }
	]
},
{aero:"HNL",ville:"Hawaii",
	visites:[
	{aamm:"9403",lieux:"Honolulu..."  },
	{aamm:"0908",lieux:"Honolulu..."  },
	{aamm:"0307",lieux:"Maui,Honolulu",detail:"Quinta(Lax),WaiohuluBeachHale(Maui,Kehei),QueenKapiolani(Honululu),Motel6(Lax)"  }
	]
},
{aero:"PPT",ville:"Tahiti",
	visites:[
	{aamm:"9403",lieux:"Tahiti..."  }
	]
},
{aero:"IAH",ville:"Huston",
	visites:[
	{aamm:"9004",lieux:"Louisiane"  },
	{aamm:"9808",lieux:"Texas"  },
	{aamm:"0904",lieux:"Texas sud"  }
	]
},
{aero:"MEX",ville:"Mexico",
	visites:[
	{aamm:"8610",lieux:"Mexico city,Yucatan"  }
	]
},
{aero:"MIA",ville:"Miami",
	visites:[
	{aamm:"8905",lieux:"Miami"  },
	{aamm:"9201",lieux:"Orlando"  },
	{aamm:"9304",lieux:"Orlando"  },
	{aamm:"9605",lieux:"Palm Beach"  },
	{aamm:"9705",lieux:"Orlando"  },
	{aamm:"9904",lieux:"Orlando"  },
	{aamm:"0804",lieux:"Miami"  }	
	]
},
{aero:"IAD",ville:"Washington",
	visites:[
	{aamm:"9508",lieux:"Virginie"  },
	{aamm:"9608",lieux:"Virginie"  },
	{aamm:"9708",lieux:"Caroline"  }
	]
},
{aero:"JFK",ville:"New York City",
	visites:[
	{aamm:"8807",lieux:"New York City"  },
	{aamm:"0704",lieux:"New York City"  },
	{aamm:"1001",lieux:"New York City"  },
	{aamm:"1105",lieux:"New York City",detail:"HilTon Hapmton Inn(CE)" }
	]
},
{aero:"PUJ",ville:"Punta Cana",
	visites:[
	{aamm:"0502",lieux:"Punta Cana",detail:"Grand Flamenco Punta Cana by Occidental,http://www.occidentalhotels.com/hotel_information.aspx?hotel=1119416538047"},
	{aamm:"0604",lieux:"Punta Cana",detail:"Grand Bahie Principe$http://www.bahia-principe.com/bp/hoteles/puntacana_informacion.jsp"}
	]
},
{aero:"SXM",ville:"Saint Martin",
	visites:[
	{aamm:"9701",lieux:"Saint Martin"},
	{aamm:"9802",lieux:"Saint Martin"},
	{aamm:"9907",lieux:"Saint Martin"}	
	]
},
{aero:"FDF",ville:"Fort de France",
	visites:[
	{aamm:"9201",lieux:"Guadeloupe"  }
	]
},
{aero:"PTP",ville:"Point-a-Pitre",
	visites:[
	{aamm:"9602",lieux:"Martinique"  }
	]
},
{aero:"GIG",ville:"Rio",
	visites:[
	{aamm:"8810",lieux:"Rio" }
	]
},
{aero:"RAK",ville:"Marrakech",
	visites:[
	{aamm:"0208",lieux:"Marrakech"  }
	]
},
{aero:"JNB",ville:"Johannesburg",
	visites:[
	{aamm:"0208",lieux:"Sun City",detail:"Pilanesberg park"  }
	]
},
{aero:"CPT",ville:"Cap Town",
	visites:[
	{aamm:"1412",lieux:"Cap Town"  }
	]
},
{aero:"CAI",ville:"Le Caire",
	visites:[
	{aamm:"8903",lieux:"Le Caire"  }
	]
},
{aero:"DXB",ville:"Dubai",
	visites:[
	{aamm:"1004",lieux:"Dubai",detail:" Novotel(worldTradeCenter)" },
	{aamm:"1201",lieux:"Dubai",detail:" Novotel(DieraCity)" }
	]
},
{aero:"SEZ",ville:"Seychelles",
	visites:[
	{aamm:"8910",lieux:"Seychelles",detail:"Mahe,Pralin,La Dique" }
	]
},
{aero:"TUN",ville:"Tunis",
	visites:[
	{aamm:"0511",lieux:"Monastir",detail:"Houda Golf & Beach Club,http://www.soussepalace.com/Houda/fre/index-1.html"},
	{aamm:"0611",lieux:"Hammamet",detail:"Hotel Dar Khayam,http://agence.voyages-sncf.com/pub/agent.dll/qscr=dspv/nojs=1/htid=1256832/crti=4/photo-hotel"},
	{aamm:"1011",lieux:"Madhia-Tozeur",detail:"ElMehdi(Mahdia) 4x4 grandSud"}	
	]
},
{aero:"MRU",ville:"Ile Maurice",
	visites:[
	{aamm:"8705",lieux:"Maurice"},
	{aamm:"9010",lieux:"Maurice"},
	{aamm:"0004",lieux:"Maurice"},
	{aamm:"0104",lieux:"Maurice"},
	{aamm:"0204",lieux:"Maurice"},
	{aamm:"0304",lieux:"Maurice"},
	{aamm:"0404",lieux:"Maurice"}	
	]
},
{aero:"RUN",ville:"Ile de Réunion",
	visites:[
	{aamm:"8804",lieux:"Ile de Réunion" },
	{aamm:"9804",lieux:"Ile de Réunion" }
	]
},
{aero:"SVO",ville:"Moscou",
	visites:[
	{aamm:"9111",lieux:"Moscou" }
	]
},
{aero:"BKK",ville:"Bangkok",
	visites:[
	{aamm:"8801",lieux:"Phuket,Kho Phi Phi" },
	{aamm:"8911",lieux:"Phuket,Kho Phi Phi" }	
	]
},
{aero:"HKG",ville:"Hong Kong",
	visites:[
	{aamm:"1312",lieux:"Hong Kong" }
	]
},
{aero:"SYD",ville:"Sydney",
	visites:[
	{aamm:"8801",lieux:"Sydney,Melbourne,Adélaide,Alice Springs,Brisbanne" }
	]
},
{aero:"KIX",ville:"Osaka",
	visites:[
	{aamm:"1508",lieux:"Kyoto,Hiroshima,Kyoto" }
	]
},
{aero:"LHR",ville:"Londres",
	visites:[
	{aamm:"8801",lieux:"Londres" },
	{aamm:"8910",lieux:"Londres" },
	{aamm:"0504",lieux:"Londres" },
	{aamm:"1001",lieux:"Londres",detail:"hotel:Novotel Excel" },
	{aamm:"1301",lieux:"Londres",detail:"hotel:Royal Nationnal" }
	]
},
{aero:"CPH",ville:"Copenhagen",
	visites:[
	{aamm:"8601",lieux:"Copenhagen" }
	]
},
{aero:"AMS",ville:"Amsterdam",
	visites:[
	{aamm:"8808",lieux:"Amsterdam" },
	{aamm:"8905",lieux:"Amsterdam" } ,
	{aamm:"9108",lieux:"Amsterdam" } ,
	{aamm:"1007",lieux:"Amsterdam",detail:"mobilhome:DroomParken" }
	]
},
{aero:"MUC",ville:"Munich",
	visites:[
	{aamm:"9008",lieux:"Munich" },
	{aamm:"9111",lieux:"Munich" } 
	]
},
{aero:"VIE",ville:"Vienne",
	visites:[
	{aamm:"8808",lieux:"Vienne" },
	{aamm:"9005",lieux:"Vienne" },
	{aamm:"1107",lieux:"Vienne" } 
	]
},
{aero:"FCO",ville:"Rome",
	visites:[
	{aamm:"8806",lieux:"Naples" },
	{aamm:"8809",lieux:"Rome" },
	{aamm:"1304",lieux:"Rome",detail:"Abritel PonteMammolo" } 
	]
},
{aero:"VCE",ville:"Venice",
	visites:[
	{aamm:"xxyy",lieux:"Venice" },
	{aamm:"xxyy",lieux:"Venice" }
	]
},
{aero:"OPO",ville:"Porto",
	visites:[
	{aamm:"9005",lieux:"Porto,Lisbonne" }	
	]
},
{aero:"BCN",ville:"Barcelone",
	visites:[
	{aamm:"9007",lieux:"Barcelone" }	
	]
},
{aero:"AGP",ville:"Malaga",
	visites:[
	{aamm:"9304",lieux:"Malaga" }	
	]
},
{aero:"ORY",ville:"France",
	visites:[
	{aamm:"8809",lieux:"Ajaccio" },	
	{aamm:"8908",lieux:"Ajaccio" },	
	{aamm:"9006",lieux:"Lorient" },	
	{aamm:"9110",lieux:"Bordeaux" },	
	{aamm:"0306",lieux:"Nice" },	
	{aamm:"0508",lieux:"Ajaccio,Ghisonaccia" },	
	{aamm:"0801",lieux:"Menuires" }
	]
}
];
//var voy = JSON.parse(voyText);
/*
"FRA$Ajaccio  $ Sep 88$",
"FRA$Ajaccio  $ Aout 89$",
"FRA$Lorient  $ Juin 90$",
"FRA$Bordeaux  $ Oct 91$",
"FRA$Nice  $ Juin 03$",
"FRA$Ghisonaccia  $ Aout 05$",
"FRA$Menuires $ Jan 08$",

"ESP$Barcelone  $ Juil 90$26$Madrid$",
"ESP$Malaga  $ Avr 93$",
"POR$Porto  $ Mai 90$",
"ITA$Naples  $ Juin 88$",
"ITA$Rome  $ Sep 88$",
"ITA$Rome $ avr 13$ $ $Abritel PonteMammolo$",
"AUT$Vienne  $ Aout 88$",
"AUT$Vienne  $ Mai 90$",
"AUT$Vienne$ Juil 11$ $ $Atraveo loc$",
"ALL$Munich  $ Aout 90$",
"ALL$Munich  $ Nov 91$",

"HOL$Amsterdam  $ Aout 88$",
"HOL$Amsterdam  $ Mai 89$",
"HOL$Amsterdam  $ Aout 91$",
"HOL$Amsterdam$ Juil 10$ $ $DroomParken$",

"DAN$Copenhague$ Jan 86$",
"GBR$Londres  $ Jan 88$25$Londres$",
"GBR$Londres  $ Oct 89$25$Londres$",
"GBR$Londres  $ Avr 05$25$Londres$",
"GBR$Londres$ Jan 10$0$ $Novotel(Excel)$",
"GBR$Londres$ jan 13$ $ $Royal Nationnal$",

"USE$Texas $ Avr 90$232$NEW ORLEANS$",
"USE$Texas $ Aout 98$",
"USO$Texas $ Avril 09$",
"USO$Yellow Stone$ Aout 11$ $ $sfo,Super8(Twinfalls),ConfortInn(West yellowstone),Super8(JacksonHole),VagabonInn(Lake Tahoe)$",
"USO$San Francisco $ Aout 09$", 
"USO$Cote Ouest $ Nov 87$11$LOS ANGELES$",
"USO$Cote Ouest $ Juil 91$972$SAN DIEGO$",
"USO$New Mexico$ aout 12$ $ $Ramada(Tempe,Pheonix),ArozonaRiverPark(Tucson),Quinta(LasCruces),DaysInn(Albuquerque),Super8(Flagstaff),Excalibur(LasVegas)$",
"USO$Cote Ouest $ Aout 07$11$LOS ANGELES$",
"HAW$hawaii  $ Mars 94$86$HONOLULU$",
"HAW$Hawaii $ Aout 09$",
"HAW$Hawaii$ Juil 13$ $ $Quinta(Lax),WaiohuluBeachHale(Maui,Kehei),QueenKapiolani(Honululu),Motel6(Lax)$"
"POL$Polynesie  $ Mars 94$3$PAPEETE$",
"MEX$Mexique$ Nov 86$16$Mexico$",
	"USE$Floride $ Mars 93$653$ORLANDO$",
	"USE$Floride $ Avril 08$",
	"USE$Floride $ Mai 89$230$MIAMI$",
	"USE$Floride $ Jan 92$653$ORLANDO$",
	"USE$Floride $ Mai 96$642$PALM BEACH$",
	"USE$Floride $ Mai 97$653$ORLANDO$",
	"USE$Floride $ Avr 99$653$ORLANDO$",
"USE$Virginie $ aout 96$",
"USE$Virginie $ Aout 95$",
"USE$Caroline $ Aout 97$",
"USE$New York $ Jul 88$14$NEW YORK$",
"USE$New York $ Avr 07$14$NEW YORK$",
"USE$New york$ Jan 10$",
"USE$New York$ Mai 11$ $ $HilTon Hapmton Inn(CE)$",
"DOM$Punta Cana  $ Fev 05$510$SANTIAGO$Grand Flamenco Punta Cana by Occidental$http://www.occidentalhotels.com/hotel_information.aspx?hotel=1119416538047$",
"DOM$Punta Cana  $  Avril 06$510$SANTIAGO (REP.DOMINICAINE)$Grand Bahie Principe$http://www.bahia-principe.com/bp/hoteles/puntacana_informacion.jsp$" ,
"STM$St Martin  $ Jan 97$",
"STM$St Martin  $ Fev 98$",
"STM$St Martin  $ Juil 99$",
"GUA$Fort de France $ Jan 92$346$FORT-DE-FRANCE$",
"MAR$Point-a-Pitre  $ Fev 96$61$POINTE-A-PITRE$",
"MRC$Marrakech  $ Aout 02$312$MARRAKECH$",
"SAF$Afrique du sud $ Oct 02$1365$PIETERSBURG$",
"BRE$Bresil$ Oct 88$22$RIO DE JANEIRO$",
"EGY$Egypte  $ Mars 89$492$ALEXANDRIE$",
"EAU$Dubai$ Avr 10$ $ $Novotel(worldTradeCenter)$",
"EAU$Dubai$ jan 12$ $ $Novotel(DieraCity)$",
"SEY$Seychelles  $ Oct 89$211$Seychelles$",
"TUN$Monastir  $ Nov 05$47$Tunise$Home Page Houda Golf & Beach Club$http://www.soussepalace.com/Houda/fre/index-1.html$",
"TUN$Hammamet  $ Nov 06$47$Tunise$Hotel Dar Khayam$http://agence.voyages-sncf.com/pub/agent.dll/qscr=dspv/nojs=1/htid=1256832/crti=4/photo-hotel$",
"TUN$Madhia-Tozeur$ Nov 10$ $ $ElMehdi(Mahdia) 4x4 grandSud$",
"MAU$Maurice $ Mai 87$1778$Maurice$",
"MAU$Maurice $ Oct 90$1778$Maurice$",
"MAU$Maurice $ Avr 00$1778$Maurice$",
"MAU$Maurice $ Avr 01$1778$Maurice$",
"MAU$Maurice $ Avr 02$1778$Maurice$",
"MAU$Maurice $ Avr 03$1778$Maurice$",
"MAU$Maurice $ Avr 04$1778$Maurice$",
"REU$Reunion  $ Avr 88$4$St Denis$",
"REU$Reunion  $ Avr 98$4$St Denis$",
"RUS$Moscou  $ Nov 91$157$Moscou$",
"THA$Thailand $ Jan 88$85$Bangkok$",
"THA$Thailand $ Nov 89$85$Bangkok$",
"AUS$Australie  $ Dec 90$101$Canberra$",
/* ------------------------------------------------------------------
console.log(voy[0].ville);
console.log(voy[0].visites[1].lieux);
console.log(voy[0].visites[1]);
console.log(voy[0].visites.length);
*/

/*
var tLocation = new Array(

);
  */