function showTitle(mask)
{
mask.children[0].style.display="block";
}

function hideTitle(mask)
{
mask.children[0].style.display="none";
}

function showSkill(obj,skill)
{
document.getElementById(skill).style.fontSize="3em";
var detailId=skill+"Detail";
var detailObj=document.getElementById(detailId);

var details = document.getElementsByClassName("skill_detail");//set the display of all text as "none"
for(var i=0; i<details.length; i++)
	details[i].style.display="none";
	
detailObj.style.display="block";
switch(skill)
{
	case "Java":
		obj.style.backgroundColor="#FF9898";
		break;
	case "HTML":
		obj.style.backgroundColor="#FDB18D";
		break;
	case "CSS":
		obj.style.backgroundColor="#FFDF8E";
		break;
	case "JavaScript":
		obj.style.backgroundColor="#F8FFA6";
		break;
	case "PHP":
		obj.style.backgroundColor="#DCFF91";
		break;
	case "SQL":
		obj.style.backgroundColor="#AFFC91";
		break;
}
}
function hideSkill(obj,skill)
{
document.getElementById(skill).style.fontSize="2em";
var detailId=skill+"Detail";
var detailObj=document.getElementById(detailId);
//detailObj.style.display="none";
//document.getElementById("skillTitle").style.display="block";
switch(skill)
{
	case "Java":
		obj.style.backgroundColor="#FF6767";
		break;
	case "HTML":
		obj.style.backgroundColor="#FF9867";
		break;
	case "CSS":
		obj.style.backgroundColor="#FFD467";
		break;
	case "JavaScript":
		obj.style.backgroundColor="#F4FF79";
		break;
	case "PHP":
		obj.style.backgroundColor="#CEFF67";
		break;
	case "SQL":
		obj.style.backgroundColor="#92FF67";
		break;
}
}
function linkTo(link)
{
window.location.href=link;
}