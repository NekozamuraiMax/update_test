

document.getElementById('submit').addEventListener('click', () => {
	if(document.getElementById('new-name').value === "" && document.getElementById('new-ofice').selectedIndex === 0) event.preventDefault();
	if(window.confirm('登録内容を更新しますか？')){
		return true;
	}else event.preventDefault();
}, false);