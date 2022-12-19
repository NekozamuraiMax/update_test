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

function initializeApp() {
    // ログインチェック
    if (liff.isLoggedIn()) {
        //ログイン済

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

const params = (new URL(document.location)).searchParams;
const key = params.get('key');

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
