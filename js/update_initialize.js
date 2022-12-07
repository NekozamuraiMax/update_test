$(window).load(function(){
	const liffId = "1657662321-nR14gmQy";
	initializeLiff(liffId);
});

function initializeLiff(liffId){
	liff.init({
		liffId:liffId
	}).then(() =>{
		initializeApp();
	}).catch((err) => {
		console.log('LIFF Initialization failed ', err);
	});
}

function sendText(text){
	liff.sendMessages([{
		'type': 'text',
		'text': text
	}]).then(function(){
		liff.closeWindow();
	}).catch(funciont(error){
		window.alert('Failed to send message ' + error);
	});
}

const params = (new URL(document.location)).searchParams;
const key = params.get('key');

$(function(){
	$('form').submit(function(){
		const newName = document.getElementById("new-name").value;
		const newOffice= document.getElementById("new-office").value;
		const message= "";
		if(newName !== "") message = message + '${newName}\n';
		if(document.getElementById("new-office").selectedIndex !== 0) message = message + '${newOffice}';
		sendText(message);
		return false;
	});
});