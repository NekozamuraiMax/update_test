const url = new URL(document.location);
const params = new URLSearchParams(url.search);
const id = params.get('id');

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

const parent = params.get('parent').toString();
const child1 = params.get('child1').toString();
const child2 = params.get('child2').toString();
const child3 = params.get('child3').toString();
const office1= params.get('office1').toString();
const office2= params.get('office2').toString();
const office3= params.get('office3').toString();

const parent_name = document.getElementById("parent-name");
const child1_name = document.getElementById("child1");
const child2_name = document.getElementById("child2");
const child3_name = document.getElementById("child3");
const child1_office = document.getElementById("office1");
const child2_office = document.getElementById("office2");
const child3_office = document.getElementById("office3");
const child1_update = document.getElementById("child1-update");
const child2_update = document.getElementById("child2-update");
const child3_update = document.getElementById("child3-update");

function initializeApp() {
    // ログインチェック
    if (liff.isLoggedIn()) {
        //ログイン済
	parent_name.value = parent;
	child1_name.value = child1;
	child2_name.value = child2;
	child3_name.value = child3;
	if(child1 !== ""){
		child1_update.style.display = "block";
		if(office1==='スマイル') child1_office.value = 'smileday';
		else if(office1==='てむてむ') child1_office.value = 'temu';
		else if(office1==='ほやほや') child1_office.value = 'hoya';
		else if(office1==='なるなる') child1_office.value = 'naru';
	}else child1_update.style.display = "none";
	if(child2 !== ""){
		child2_update.style.display = "block";
		if(office2==='スマイル') child1_office.value = 'smileday';
		else if(office2==='てむてむ') child2_office.value = 'temu';
		else if(office2==='ほやほや') child2_office.value = 'hoya';
		else if(office2==='なるなる') child2_office.value = 'naru';	
	}else child2_update.style.display = "none";
	if(child3 !== ""){
		child3_update.style.display = "block";
		if(office3==='スマイル') child1_office.value = 'smileday';
		else if(office3==='てむてむ') child3_office.value = 'temu';
		else if(office3==='ほやほや') child3_office.value = 'hoya';
		else if(office3==='なるなる') child3_office.value = 'naru';
	}else child3_update.style.display = "none";
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
