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
const delete_msg1 = document.getElementById("delete-msg1");
const delete_msg2 = document.getElementById("delete-msg2");
const delete_msg3 = document.getElementById("delete-msg3");
const child1_post = document.getElementById("child1-post");
const child2_post = document.getElementById("child2-post");
const child3_post = document.getElementById("child3-post");
const office1_post= document.getElementById("office1-post");
const office2_post= document.getElementById("office2-post");
const office3_post= document.getElementById("office3-post");
const child1_none = document.getElementById("child1_none");
const child1_notchar = document.getElementById("child1_notchar");
const child1_dup  = document.getElementById("child1_dup");
const child2_none = document.getElementById("child2_none");
const child2_notchar = document.getElementById("child2_notchar");
const child2_dup  = document.getElementById("child2_dup");
const child3_none = document.getElementById("child3_none");
const child3_notchar = document.getElementById("child3_notchar");
const child3_dup  = document.getElementById("child3_dup");
const parent_none = document.getElementById("parent_none");
const parent_notchar = document.getElementById("parent_notchar");

function initializeApp() {
    // ログインチェック
    if (liff.isLoggedIn()) {
        //ログイン済
	parent_name.value = parent;
	child1_name.value = child1;	child1_post.value = child1;
	child2_name.value = child2;	child2_post.value = child2;
	child3_name.value = child3;	child3_post.value = child3;
	if(child1 !== ""){
		child1_update.style.display = "block";
		if(office1==='スマイル'){child1_office.value = 'smileday';	office1_post.value = 'smileday';}
		else if(office1==='てむてむ'){child1_office.value = 'temu'; office1_post.value = 'temu';}
		else if(office1==='ほやほや'){child1_office.value = 'hoya'; office1_post.value = 'hoya';}
		else if(office1==='なるなる'){child1_office.value = 'naru'; office1_post.value = 'naru';}
	}else child1_update.style.display = "none";
	if(child2 !== ""){
		child2_update.style.display = "block";
		if(office2==='スマイル'){child2_office.value = 'smileday'; office2_post.value = 'smileday';}
		else if(office2==='てむてむ'){child2_office.value = 'temu'; office2_post.value = 'temu';}
		else if(office2==='ほやほや'){child2_office.value = 'hoya'; office2_post.value = 'hoya';}
		else if(office2==='なるなる'){child2_office.value = 'naru'; office2_post.value = 'naru';}	
	}else child2_update.style.display = "none";
	if(child3 !== ""){
		child3_update.style.display = "block";
		if(office3==='スマイル'){child3_office.value = 'smileday'; office3_post.value = 'smileday';}
		else if(office3==='てむてむ'){child3_office.value = 'temu'; office3_post.value = 'temu';}
		else if(office3==='ほやほや'){child3_office.value = 'hoya'; office3_post.value = 'hoya';}
		else if(office3==='なるなる'){child3_office.value = 'naru'; office3_post.value = 'naru';}
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
		let message = '[登録の更新]\n';
		
		message = message + '[利用者名]\n' + parent_name.value;
		let count = 0;
		if(child1_update.style.display === "block"){
			count = count + 1;
			message = message + '\n[児童名' + count + ']\n' + child1_name.value + '\n' + '[事業所' + count + ']\n';
			if(child1_office.value === 'smileday') message = message + 'スマイル';
			else if(child1_office.value === 'temu')message = message + 'てむてむ';
			else if(child1_office.value === 'hoya')message = message + 'ほやほや';
			else if(child1_office.value === 'naru')message = message + 'なるなる';
		}
		if(child2_update.style.display === "block"){
			count = count + 1;
			message = message + '\n[児童名' + count + ']\n' + child2_name.value + '\n' + '[事業所' + count + ']\n';
			if(child2_office.value === 'smileday') message = message + 'スマイル';
			else if(child2_office.value === 'temu')message = message + 'てむてむ';
			else if(child2_office.value === 'hoya')message = message + 'ほやほや';
			else if(child2_office.value === 'naru')message = message + 'なるなる';
		}
		if(child3_update.style.display === "block"){
			count = count + 1;
			message = message + '\n[児童名' + count + ']\n' + child3_name.value + '\n' + '[事業所' + count + ']\n';
			if(child3_office.value === 'smileday') message = message + 'スマイル';
			else if(child3_office.value === 'temu')message = message + 'てむてむ';
			else if(child3_office.value === 'hoya')message = message + 'ほやほや';
			else if(child3_office.value === 'naru')message = message + 'なるなる';
		}
		sendText(message);
		return false;
	});
});
