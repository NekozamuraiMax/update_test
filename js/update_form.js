document.getElementById('delete1').addEventListener('click', () => {
	child1_update.style.display = 'none';
	delete_msg1.style.display = 'block';
});

document.getElementById('back1').addEventListener('click', () => {
	child1_update.style.display = 'block';
	delete_msg1.style.display = 'none';
});

document.getElementById('delete2').addEventListener('click', () => {
	child2_update.style.display = 'none';
	delete_msg2.style.display = 'block';
});

document.getElementById('back2').addEventListener('click', () => {
	child2_update.style.display = 'block';
	delete_msg2.style.display = 'none';
});

document.getElementById('delete3').addEventListener('click', () => {
	child3_update.style.display = 'none';
	delete_msg3.style.display = 'block';
});

document.getElementById('back3').addEventListener('click', () => {
	child3_update.style.display = 'block';
	delete_msg3.style.display = 'none';
});
