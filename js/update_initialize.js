const url = new URL(document.location);
const params = new URLSearchParams(url.search);
const id = params.get('id');
const parent = params.get('parent').toString();
const child1 = params.get('child1').toString();
const child2 = params.get('child2').toString();
const child3 = params.get('child3').toString();
const office1= params.get('office1').toString();
const office2= params.get('office2').toString();
const office3= params.get('office3').toString();

window.onload = function(e){
	liff.init({
		liffId: id
	}).then(() =>{
		initializeApp();
	}).catch((err) => {
		window.alert(err);
		console.log('LIFF Initialization failed ', err);
	});
};

const parent_name = document.getElementById("parent-name");
const child1_name = document.getElementById("child1");
const child2_name = document.getElementById("child2");
const child3_name = document.getElementById("child3");
const child1_office = document.getElementById("office1");
const child2_office = document.getElementById("office2");
const child3_office = document.getElementById("office3");
const child1_update = document.getElementById("child1_update");
const child2_update = document.getElementById("child2_update");
const child3_update = document.getElementById("child3_update");
function initializeApp() {
    // ログインチェック
    if (liff.isLoggedIn()) {
        //ログイン済
	parent_name.value = parent;
	child1_name.value = child1;
	child2_name.value = child2;
	child3_name.value = child3;
	child1_office.value = office1;
	child2_office.vaule = office2;
	child3_office.value = office3;
	if(child1 !== "") child1_update.style.display = "block";
	else child1_update.style.display = "none";
	if(child2 !== "") child2_update.style.display = "block";
	else child2_update.style.display = "none";
	if(child3 !== "") child3_update.style.display = "block";
	else child3_update.style.display = "none";
    } else {
        // 未ログイン
        let result = window.confirm("LINE Loginしますか？");
        if(result) {
            liff.login();
        }
    }
}

function sendText(text){
	if(!liff.isInClient()){
		window.alert('This button is unavailable as LIFF is currently being opened in an external browser.');
	}else{
		liff.sendMessages([
			{
			type: 'text',
			text: text
			}
		]).then(function(){
			liff.closeWindow();
		}).catch(function(error){
			window.alert('Failed to send message ' + error);
		});
	}
}

$(function(){	
	$('form').submit(function(){
		const newName = document.getElementById("new-name").value;
		const newOffice = document.getElementById("new-office").value;
		let message = '';
		
		if(newName!==''){
			message = '[変更後の児童名]\n' + newName;
		}
		if(newOffice==='smileday'){
			if(message !== '') message = message + '\n';
			message = message + '[変更後の事業所]\nスマイル';
		}else if(newOffice==='temu'){
			if(message !== '') message = message + '\n';
			message = message + '[変更後の事業所]\nてむてむ';
		}else if(newOffice==='hoya'){
			if(message !== '') message = message + '\n';
			message = message + '[変更後の事業所]\nほやほや';
		}else if(newOffice==='naru'){
			if(message !== '') message = message + '\n';
			message = message + '[変更後の事業所]\nなるなる';
		}
		
		sendText(message);
		return false;
	});
});
