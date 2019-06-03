const messageIn = document.querySelector('#messageIn')
const messageOut = document.querySelector('#messageOut')

const sendBtn = document.querySelector('#sendBtn')


sendBtn.addEventListener('click', sendMsg)


function sendMsg() {
	let content = messageIn.value

	if (content === '') {
		alert('please enter a valid value')
	}
	else{
		messageOut.innerHTML = content
		messageIn.value = ''	
	}
	
}