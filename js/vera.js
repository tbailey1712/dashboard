
	var xmlhttp;
	xmlhttp=new XMLHttpRequest();
	var urlbase = "http://192.168.1.88:3480";

	var switchon = urlbase + "/data_request?id=action&output_format=xml&serviceId=urn:upnp-org:serviceId:SwitchPower1&action=SetTarget&newTargetValue=1&DeviceNum="
	var switchoff = urlbase + "/data_request?id=action&output_format=xml&serviceId=urn:upnp-org:serviceId:SwitchPower1&action=SetTarget&newTargetValue=0&DeviceNum="

	var sceneurl = urlbase + "/data_request?id=action&serviceId=urn:micasaverde-com:serviceId:HomeAutomationGateway1&action=RunScene&SceneNum="

function sendURL(geturl)
{
	xmlhttp.open("GET",geturl,true);
	xmlhttp.send();
}

function porch_on()
{
	url= switchon + "34";
	sendURL(url);
	url= switchon + "131";
	sendURL(url);
}

function porch_off()
{
	url= switchoff + "34";
	sendURL(url);
	url= switchoff + "131";
	sendURL(url);
}

function backyard_on()
{
	url= switchon + "127";
	sendURL(url);
	url= switchon + "128";
	sendURL(url);
}

function backyard_off()
{
	url= switchoff + "127";
	sendURL(url);
	url= switchoff + "128";
	sendURL(url);
}
	
function main_on()
{	
	url = sceneurl + "9";
	sendURL(url);
}

function main_off()
{	
	url = sceneurl + "21"
	sendURL(url);
}

function kitchen_on()
{
}

function kitchen_off()
{
}
