var canvas = document.getElementById("visualisationPiece").getContext('2d');

	/*canvas.beginPath();
	
	canvas.font = "20px Arial";
	canvas.fillStyle = "black";
	canvas.textAlign = "center";
	canvas.fillText("Liverool FC, Arrests and Banning Orders in the Premier League and Champions League",
		canvas.width/2, canvas.height/2);

	canvas.closePath();*/

	function Line(c,d) {
		canvas.lineTo(c,d);
	}

	function Curve(cp1x,cp1y,cp2x,cp2y,x,y) {
		canvas.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
		canvas.stroke();
	}

		/*sky background colour gradient code used from 
	https://www.w3schools.com/tags/canvas_createlineargradient.asp on 05/03/2017*/
	var gradient=canvas.createLinearGradient(0,0,0,300);
	gradient.addColorStop(0, "#66b3ff");
	gradient.addColorStop(1,"#0000ff");
	canvas.fillStyle = gradient;
	canvas.fillRect(0,0,1000,300);
	canvas.closePath();
	canvas.beginPath();
	//grass background
	var grad=canvas.createLinearGradient(0,300,0,370);
	grad.addColorStop(0, "#003300");
	grad.addColorStop(1,"#009900");
	canvas.fillStyle = grad;
	canvas.fillRect(0,300,1000,400);
	canvas.closePath();

	canvas.beginPath();

		canvas.moveTo(30,20);
		Curve(27,100,27,350,30,450);
		Line(70,450);
		Curve(66,250,67,100,70,50);
		Curve(140,52,500,52,930,50);
		Curve(934,100,933,250,930,450);
		Line(970,450);
		Curve(973,350,973,100,970,20);
		Curve(500,16,140,16,30,20);
		canvas.strokeStyle = "black";
		canvas.stroke();
	
	canvas.closePath();

	canvas.beginPath();

		canvas.moveTo(90,50);
		Line(90,429);
		Line(120,429);
		Line(120,51);
		Line(150,52);
		Line(150,428);
		Line(180,428);
		Line(180,52);
		Line(210,52);
		Line(210,428);
		Line(240,428);
		Line(240,52);
		Line(270,52);
		Line(270,427);
		Line(300,427);
		Line(300,52);
		Line(330,52);
		Line(330,427);
		Line(360,427);
		Line(360,52);
		Line(390,52);
		Line(390,427);
		Line(420,427);
		Line(420,52);
		Line(450,52);
		Line(450,427);
		Line(480,427);
		Line(480,52);
		Line(510,52);
		Line(510,428);
		Line(540,428);
		Line(540,52);
		Line(570,52);
		Line(570,428);
		Line(600,428);
		Line(600,51);
		Line(630,51);
		Line(630,428);
		Line(660,429);
		Line(660,51);
		Line(690,51);
		Line(690,430);
		Line(720,430);
		Line(720,51);
		Line(750,51);
		Line(750,430);
		canvas.strokeStyle = "black";
		canvas.stroke();
	
	canvas.closePath();

	canvas.beginPath();

		canvas.moveTo(70,70);
		Curve(250,74,450,66,711,70);
		Line(711,100);
		Curve(650,110,200,90,68,100);
		Line(68,130);
		Curve(100,125,450,135,712,130);
		Line(712,160);
		Curve(550,162,200,158,68,160);
		Line(67,190);
		Curve(150,193,625,185,713,190);
		Line(713,220);
		Curve(650,225,200,210,68,220);
		Line(67,247);
		Curve(250,245,500,250,712,247);
		Line(712,274);
		Curve(520,270,250,275,68,274);
		Line(68,301);
		Curve(120,297,450,303,712,301);
		Line(712,328);
		Curve(645,325,265,329,69,328);
		Line(69,355);
		Curve(290,353,590,358,711,355);
		Line(711,382);
		Curve(530,380,200,384,69,382);
		Line(70,409);
		Curve(390,405,500,412,710,409);
		canvas.strokeStyle = "black";
		canvas.stroke();

	canvas.closePath();
		
	canvas.beginPath();
	
		canvas.moveTo(70,450);
		Curve(140,448,500,448,710,450);
		Line(710,430)
		Curve(500,427,140,427,70,430);
		Line(70,450);
		canvas.strokeStyle = "black";
		canvas.stroke();

	canvas.closePath();
