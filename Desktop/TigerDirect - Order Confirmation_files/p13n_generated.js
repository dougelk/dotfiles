var RR = RR || {}; var spinnerTimeout = 0; var edpNos = ""; var rr_check_results = [];  var numPlacementRecs = new Array(7); var defaultRecs = new Array();   var ad_lookup_matrix = {   "home_page.content2":"#hpRow1_products > div:nth-child(5)",   "home_page.content3":"#hpRow2_products > div:nth-child(5)",   "home_page.content4":"#hpRow3_products > div:nth-child(5)" };  var ad_index = {   "0":4,   "1":4,   "2":4,   "3":4,   "4":4 };  jsonpCallback = function(response) {     clearTimeout(spinnerTimeout); 	rr_check_results.push(response); 	var hinted_placements = []; 	 	for (var i = 0; i < response.psa.length; i++) { 		var priceStory = response.psa[i]; 		if (priceStory.available){ 			var hint_placement = renderRR(priceStory.markUpId, priceStory.priceStory1, priceStory.priceStory2); 			if (hint_placement != "") hinted_placements.push(hint_placement); 		} else { 			var indexes = priceStory.markUpId.split("_"); 			if (indexes[1]=="H" || parseInt(indexes[1]) < ad_index[indexes[0]]) ad_index[indexes[0]]++; 		}			 	} 	for (var i = 0; i < hinted_placements.length; i++){ 		$("#rr_item_"+hinted_placements[i]+"_H").height($("#rr_placement"+hinted_placements[i]).height()-15); 		ad_index[hinted_placements[i]]--; 	} 	showHomeAds(); };  renderRR = function(index, pricestory1, pricestory2) {     var split = index.split("_"); 	var placementIndex = split[0];     try{       document.getElementById("rr_img_" + index).style.display="block"; 	  document.getElementById('loading_img_' + placementIndex).style.display = 'none'; 	  document.getElementById("rr_pricestory1_" + index).innerHTML = pricestory1;       document.getElementById("rr_pricestory2_" + index).innerHTML = pricestory2; 	  document.getElementById("rr_item_" + index).style.display = 'block';       document.getElementById('rr_placement' + placementIndex).style.display = 'block';	     } catch(e) {} 	return (split[1] == "H") ? split[0] : ""; };  /* test code for homepage A/B below */ showHomeAds = function() {   var rr_split = false;   for (var i = 0; i < rr_recs.placements.length; i++){     var this_placement = rr_recs.placements[i].placementType; 	if (typeof ad_lookup_matrix[this_placement] != "undefined"){ 	  rr_split = true; 	  var index_for_ad = ad_index[String(i)];       try{         if (console.log) console.log("Setting "+"rr_item_"+i+"_"+index_for_ad);         document.getElementById("rr_item_"+i+"_"+index_for_ad).outerHTML = $(ad_lookup_matrix[this_placement])[0].outerHTML;       } catch (e) {}     }   }   if (!rr_split){     $("#homeFeatured").children().show();   } };   function showDefaultRecs(inRecArr) {      var numVisible = 0;   var placementIndex = -1;   var visibleRecsArr = new Array();   var isHintedStrategy = "";   for (var i in inRecArr) {                 if (placementIndex != (inRecArr[i]).split("_")[0]) {                   if (placementIndex != -1) {                                          visibleRecsArr = new Array();                   }                   placementIndex = (inRecArr[i]).split("_")[0];                                      document.getElementById('rr_placement' + placementIndex).style.display = 'block';                   document.getElementById('loading_img_' + placementIndex).style.display = 'none';                   document.getElementById('rr_item_' + inRecArr[i]).style.display = 'block';                                      numVisible = 0;                 }                 if ((numVisible < numPlacementRecs[placementIndex])&&(inRecArr[i] != "")&&(document.getElementById("rr_item_" + inRecArr[i]) != null)) {                   visibleRecsArr.push(inRecArr[i]);                   if ((inRecArr[i]).split("_")[1] == "H") {                     numVisible++;                   }                                document.getElementById('rr_img_' + inRecArr[i]).style.display= 'block';                   document.getElementById("rr_item_" + inRecArr[i]).style.display = 'block';                 }   }   }   function setRatingHTML(inNumReviews, inRating, inId) {   var retVal;   var retCSS = "background-image: url(\'http://images.highspeedbackbone.net/td/glbl-sprite-sitewide.png\') !important;background-repeat: no-repeat;display: inline-block;float: left;height: 12px;line-height: 12px;margin-right: 5px;text-indent: -9999px;width: 69px;text-align:left;";   var rating = 99;   var retReviews = "";   if (inRating != "") {     rating = parseFloat(inRating);     if (parseInt(inNumReviews) != NaN) {        retReviews = " ("+ inNumReviews +" Reviews)";     }   }   if (rating == 0) {     retVal = '<span style="' + retCSS + 'background-position: -70px -52px;"></span>';   } else if ((rating > 0)&&(rating <= .5)) {     retVal = '<span style="' + retCSS + 'background-position: -56px -52px;"></span>';   } else if ((rating > .5)&&(rating <= 1)) {       retVal = '<span style="' + retCSS + 'background-position: -56px -38px;"></span>';   } else if ((rating > 1)&&(rating <= 1.5)) {     retVal = '<span style="' + retCSS + 'background-position: -42px -52px;"></span>';   } else if ((rating > 1.5)&&(rating <= 2)) {     retVal = '<span style="' + retCSS + 'background-position: -42px -38px;"></span>';   } else if ((rating > 2)&&(rating <= 2.5)) {       retVal = '<span style="' + retCSS + 'background-position: -28px -52px;"></span>';   } else if ((rating > 2.5)&&(rating <= 3)) {       retVal = '<span style="' + retCSS + 'background-position: -28px -38px;"></span>';   } else if ((rating > 3)&&(rating <= 3.5)) {       retVal = '<span style="' + retCSS + 'background-position: -14px -52px;"></span>';   } else if ((rating > 3.5)&&(rating <= 4)) {       retVal = '<span style="' + retCSS + 'background-position: -14px -38px;"></span>';   } else if ((rating > 4)&&(rating <= 4.5)) {       retVal = '<span style="' + retCSS + 'background-position: 0 -52px;"></span>';   } else if ((rating > 4.5)&&(rating <= 5)) {       retVal = '<span style="' + retCSS + 'background-position: 0 -38px;"></span>';   } else {       retVal = "";   }   if (document.getElementById(inId) != null) {     document.getElementById(inId).innerHTML = retVal + retReviews;   } }var rr_remote_data='eF4FwbENgDAMBMAmFbNg6ZO87WQD1sAhSBR0wPzcpeX-nutYa4VkshldTeku6oL0ji0mzoixC2AUjjIFfar0UGpp1cD8A2XOESU';var rr_recs={placements:[]},rr_call_after_flush=function(){edpNos = edpNos.substr(0, edpNos.length-1); if ((rr_recs.placements != "undefined")&&(rr_recs.placements.length > 0)&&(document.getElementById("rr_placement_0") != null)) {   try {     getPA(edpNos);       spinnerTimeout = setTimeout(function(){showDefaultRecs(defaultRecs);}, 2500);     } catch (e) {     showDefaultRecs(defaultRecs);   } };   if (typeof R3_PURCHASED != "undefined") {   var itemIds = R3_COMMON.itemIds.replace("|","");   itemIds = encodeURIComponent(itemIds.replace(/\|/g,","));   var purchasesPrice = R3_PURCHASED.purchasesPrice.replace("|","");   purchasesPrice = encodeURIComponent(purchasesPrice.replace(/\|/g,","));   var quantities = R3_PURCHASED.quantities.replace("|","");   quantities = encodeURIComponent(quantities.replace(/\|/g,","));      var orderId = encodeURIComponent(R3_PURCHASED.orderNumber);   if ((typeof itemIds !== RR.U) && (typeof purchasesPrice !== RR.U) && (typeof quantities !== RR.U) && (typeof orderId !== RR.U)) {     try{       (new Image()).src = (location.protocol == "https:" ? "https:" : "http:") + "///beam.hlserve.com/beacon?action=page&pagetype=conf&hlpt=C&ic=rec&partnerId=177&cid=107&fid=107&prodid=" + itemIds + "&prodprice=" + purchasesPrice + "&produnits=" + quantities + "&orderid=" + orderId + "&rn=" + Math.floor((Math.random() * 10000000) + 1);     } catch(e) {}   } }};rr_flush=function(){if(rr_onload_called){if(RR.defaultCallback){RR.defaultCallback(rr_recs);}else{rr_placements=[];var p=rr_recs.placements,h,i;for(i=0;i<p.length;i++){rr_placements[i]=[(p[i].used?1:0),p[i].placementType,p[i].html];}for(i=0;i<rr_placement_place_holders.length;i++){h=document.getElementById('rr_placement_'+i);if(h&&typeof h!='undefined'){rr_insert_placement(h,rr_placement_place_holders[i]);}}}rr_call_after_flush();}};rr_flush();