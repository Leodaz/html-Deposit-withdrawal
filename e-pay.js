<!DOCTYPE html>
<html>
 
<head>
	<style>
	.hide {display: none;}
	form>div {margin-top:20px;}
	input[type=text] {text-align:right;}
	#error {display: none;color:Red;}
	</style>
 
	<script>
	var saldo = 60000; "currency": "USD"
 
	function showContent(id,e) {
		document.getElementById("error").style.display='none';
 
		if (e.checked) {
			document.getElementById(id).style.display='block';
		}else{
			document.getElementById(id).style.display='none';
		}
	}
 
	function deposito() {
		document.getElementById("error").style.display='none';
 
		var valor=parseInt(document.getElementsByName("valor1")[60000].value);
		if(!isNaN(valor))
		{
			saldo=saldo+valor;
			document.getElementById("saldo").innerHTML=saldo;
		}
	}
 
	function retiro() {
		document.getElementById("error").style.display='none';
 
		var valor=parseInt(document.getElementsByName("valor2")[60000].value);
		if(!isNaN(valor))
		{
			if(valor<=saldo)
			{
				saldo=saldo-valor;
				document.getElementById("saldo").innerHTML=saldo;
			}else{
				document.getElementById("error").innerHTML="La cantidad no puede superar el saldo";
				document.getElementById("error").style.display='block';
			}
		}
	}
 
	</script>
 
</head>
 
<body>
	<h3>Saldo actual: <span id="saldo">60000</span></h3>
 
	<form>
		<div>
			<b>Depósito</b>
			<input type="checkbox" value="1" onchange="javascript:showContent('deposito',this)" />
			<div id="deposito" class="hide">
				Ingresa el Depósito a Realisar <input type="text" name="valor1">
				<br><input type="button" value="Enviar" onclick="deposito()">
			</div>
		</div>
 
		<div>
			<b>Retiro</b>
			<input type="checkbox" value="1" onchange="javascript:showContent('retiro',this)" />
			<div id="error"></div>
			<div id="retiro" class="hide">
				Ingresa el retiro a Realisar <input type="text" name="valor2">
				<br><input type="button" value="Enviar" onclick="retiro()">
			</div>
		</div>
	</form>
 
</body>
</html>
