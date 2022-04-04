function docker_cmd(){

var i = document.getElementById("in1").value

var xhr = new XMLHttpRequest();

xhr.open("GET" , "http://<enter_your_ip>/cgi-bin/docker.py?x="+i,true);

xhr.send()

xhr.onload = function (){
	var output = xhr.responseText;
	document.getElementById("d1").innerHTML = output;
}

}
