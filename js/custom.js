
	$(document).ready(function() { 
	calcutation();
	});
	
	
	
	
	function isMonth(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
	
	
	
	
	
	function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
	
	
	
	function isNumber(evt, element) {

        var charCode = (evt.which) ? evt.which : event.keyCode

        if (
            (charCode != 46 || $(element).val().indexOf('.') != -1 || charCode == 45) &&      // “.” CHECK DOT, AND ONLY ONE.
            (charCode < 48 || charCode > 57))
            return false;

        return true;
    }  

	
	function isNumberss() {

        //var charCode = (evt.which) ? evt.which : event.keyCode

	}
	
	
    
    function calcutation(){
		
		var c6=$("#c6").val();
		c6=round(c6, 2);
		var d6=c6;
		$("#d6").val(c6);
		 $("#tt_d6").html(numberWithCommas(c6));
		
		
	
		 
		 
		 var c7=$("#c7").val();
		c7=round(c7, 2);
		 
		 var d7=c7;
		 $("#d7").val(d7);
		 $("#tt_d7").html(numberWithCommas(d7));
		 
		
		
		
		
		
		 var c8=$("#c8").val();
		var d8=round((c7*c8)/100,2);
		 $("#d8").val(d8);
		 $("#tt_d8").html(numberWithCommas(d8));
		 
		 
		
		 
		
		var d9=round((parseFloat(c7)-parseFloat(d8)),2);
		$("#d9").val(d9);
		 $("#tt_d9").html(numberWithCommas(d9));
		
		
	
	
	 var c10=$("#c10").val();
	var d10=round(c10,2);
	
		$("#d10").val(d10);
		 $("#tt_d10").html(numberWithCommas(d10));
	
	
	
	
	
		 
		 
		  var c12=$("#c12").val();
		c12=round(c12, 2);
		 
		 var d12=round((c6*c12)/100,2);
		 $("#d12").val(d12);
		 $("#tt_d12").html(numberWithCommas(d12));
		 
		 
		 
	
		
		
		 var c13=$("#c13").val();
		c13=round(c13, 2);
		 
		 var d13=round((c7*c13)/100,2);
		 $("#d13").val(d13);
		 $("#tt_d13").html(numberWithCommas(d13));
		 
		 
		 
		 
		
		var c14=$("#c14").val();
		c14=round(c14, 2);		
		 var d14=round((d8*c14)/100,2);
		$("#d14").val(d14);
		 $("#tt_d14").html(numberWithCommas(d14));
		
		
	
		
		 
		 var c15=$("#c15").val();		
		 d15=round(c15,2);
		
		 $("#d15").val(d15);
		 $("#tt_d15").html(numberWithCommas(d15));
		 
		 
		 
		
		 
		 var b16=$("#b16").val();
		 var b17=b16;
		 $("#b17").val(b17);
		 $("#tt_b17").html(b17);
		 
		 var b18=b16;
		 $("#b18").val(b18);
		 $("#tt_b18").html(b18);
		 
		
		 
		 
		 
		 var c16=$("#c16").val();
		c16=round(c16, 2);
		
		
		 var d16=(d8/12)*b16*(c16/100);
		 d16=round((d16),2);
		 $("#d16").val(d16);
		 $("#tt_d16").html(numberWithCommas(d16));
		
		
		
		
		var c17=$("#c17").val();
		c17=round(c17, 2);
		 
		 var d17=(c6)*(c17/100);
		 
		 d17=(b17/12)*d17;
		 d17=round((d17),2);
		 $("#d17").val(d17);
		 $("#tt_d17").html(numberWithCommas(d17));
		 
		
		
	
		
		var c18=$("#c18").val();
		c18=round(c18, 2);
		 
		 var d18=round(((c10*b18)*(c18)/1200),2);
		 $("#d18").val(d18);
		 $("#tt_d18").html(numberWithCommas(d18));
		 
		
		
		
		var c19=$("#c19").val();
		c19=round(c19, 2);
		 
		 var d19=c19;
		 $("#d19").val(d19);
		 $("#tt_d19").html(numberWithCommas(d19));
		 
		
		
	  	var b20=b16;
		 $("#b20").val(b20);
		 $("#tt_b20").html(b20);
		
		var c20=$("#c20").val();
		c20=round(c20, 2);
		
		var d20=round((b20*c20),2);
		 $("#d20").val(d20);
		 $("#tt_d20").html(numberWithCommas(d20));
		
		
		
		
		var c21=$("#c21").val();
		c21=round(c21, 2);
		var d21=c21;
		$("#d21").val(d21);
		 $("#tt_d21").html(numberWithCommas(d21));
		
	
		
		var c22=$("#c22").val();
		c22=round(c22, 2);
		
		var d22=c22;
		 $("#d22").val(d22);
		 $("#tt_d22").html(numberWithCommas(d22));
		
		
	
		
		
		var d23=round((parseFloat(d13)+parseFloat(d14)+parseFloat(d15)+parseFloat(d16)+parseFloat(d17)+parseFloat(d18)+parseFloat(d19)+parseFloat(d20)+parseFloat(d21)-parseFloat(d22)),2);
				
		$("#d23").val(d23);
		 $("#tt_d23").html(numberWithCommas(d23));
		
		
	
		var d24=round((parseFloat(d9)+parseFloat(d23)),2);
		$("#d24").val(d24);
		 $("#tt_d24").html(numberWithCommas(d24));
		
		
	
		
		
		var c29=$("#c29").val();
		 var d29=round((c29/100)*d8,2);
		$("#d29").val(d29);
		 $("#tt_d29").html(numberWithCommas(d29));
		 
		 
		 var c30=$("#c30").val();
		 var d30=round((c30/100)*d6,2);
		$("#d30").val(d30);
		 $("#tt_d30").html(numberWithCommas(d30));
		 
		 
		  var c31=$("#c31").val();
		 var d31=round((c31/100)*c10,2);
		$("#d31").val(d31);
		 $("#tt_d31").html(numberWithCommas(d31));
		 
	
		
		var c32=$("#c32").val();
		c32=round(c32, 2);
		
		var d32=c32;
		 $("#d32").val(d32);
		 $("#tt_d32").html(numberWithCommas(d32));
		
		
	
	
		var c48=$("#c48").val();
		var d49=round((c48*12),2);
		
		$("#d49").val(d49);
		 $("#tt_d49").html(numberWithCommas(d49));
		
		
		var c33=$("#c33").val();
		c33=round(c33, 2);
		
		var d33=round((d49*c33/100),2);
		
		$("#d33").val(d33);
		 $("#tt_d33").html(numberWithCommas(d33));
		 
		
		
		
		var c34=$("#c34").val();
		c34=round(c34, 2);
		
		var d34=round((d49*c34/100),2);		
		$("#d34").val(d34);
		 $("#tt_d34").html(numberWithCommas(d34));
	
	
	
		var c35=$("#c35").val();
		c35=round(c35, 2);
		
		var d35=round((d49*c35/100),2);		
		$("#d35").val(d35);
		 $("#tt_d35").html(numberWithCommas(d35));
		
		
	
	
	
	
	var c36=$("#c36").val();
		c36=round(c36, 2);
		
		var d36=round((d49*c36/100),2);		
		$("#d36").val(d36);
		 $("#tt_d36").html(numberWithCommas(d36));
	
	
	
	
	
	var c37=$("#c37").val();
		c37=round(c37, 2);
		
		var d37=c37;		
		$("#d37").val(d37);
		 $("#tt_d37").html(numberWithCommas(d37));
	
	
	var c38=$("#c38").val();
		c38=round(c38, 2);
		
		var d38=round((d49*c38/100),2);		
		$("#d38").val(d38);
		 $("#tt_d38").html(numberWithCommas(d38));
	
	
	
	var c39=$("#c39").val();
		c39=round(c39, 2);
		
		var d39=c39;		
		$("#d39").val(d39);
		 $("#tt_d39").html(numberWithCommas(d39));
	
	
    
    
var c40=$("#c40").val();
		c40=round(c40, 2);
		
		var d40=c40;		
		$("#d40").val(d40);
		 $("#tt_d40").html(numberWithCommas(d40));
	
	
    var c41=$("#c41").val();
		c41=round(c41, 2);
		
		var d41=c41;		
		$("#d41").val(d41);
		 $("#tt_d41").html(numberWithCommas(d41));
	
var c42=$("#c42").val();
		c42=round(c42, 2);
		
		var d42=round((d49*c42/100),2);		
		$("#d42").val(d42);
		 $("#tt_d42").html(numberWithCommas(d42));

var c43=$("#c43").val();
		c43=round(c43, 2);
		
		var d43=round((d49*c43/100),2);		
		$("#d43").val(d43);
		 $("#tt_d43").html(numberWithCommas(d43));




 var c44=$("#c44").val();
		c44=round(c44, 2);
		
		var d44=c44;		
		$("#d44").val(d44);
		 $("#tt_d44").html(numberWithCommas(d44));






var d45=round((parseFloat(d29)+parseFloat(d30)+parseFloat(d31)+parseFloat(d32)+parseFloat(d33)+parseFloat(d34)+parseFloat(d35)+parseFloat(d36)+parseFloat(d37)+parseFloat(d38)+parseFloat(d39)+parseFloat(d40)+parseFloat(d41)+parseFloat(d42)+parseFloat(d43)+parseFloat(d44)),2);
				
		$("#d45").val(d45);
		 $("#tt_d45").html(numberWithCommas(d45));







var d50=round((parseFloat(d49)-parseFloat(d45)),2);
		$("#d50").val(d50);
		 $("#tt_d50").html(numberWithCommas(d50));



var d51=round(d24,2);
		$("#d51").val(d51);
		 $("#tt_d51").html(numberWithCommas(d51));
		 
		 
		 
		 
		 
		 
		 var d52=round(d50/d51*100,2);
		$("#d52").val(d52);
		 $("#tt_d52").html(numberWithCommas(d52));
		 
		
		 var c55=$("#c55").val();
		c55=round(c55, 2);
		 
		 
		 var d55=round(d10*c55/100,2);
		$("#d55").val(d55);
		 $("#tt_d55").html(numberWithCommas(d55)); 
		 
		  var c56=$("#c56").val();
		c56=round(c56, 2);
		 
		 
 var d57=round(c56/26*0.3,2);
		$("#d57").val(d57);
		 $("#tt_d57").html(numberWithCommas(d57));
		 



 var d58=round((parseFloat(d50)+parseFloat(d55)+parseFloat(d57)),2);
		$("#d58").val(d58);
		 $("#tt_d58").html(numberWithCommas(d58));

 var d59=round(d58/d51*100,2);
		$("#d59").val(d59);
		 $("#tt_d59").html(numberWithCommas(d59));

	}

    