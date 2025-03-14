const listContacts = [
	{
		name: 'Emily',
		lastMessage: 'Hallo',
		lastMessageTime: '10:00',
		// avatar: 'https://randomuser.me/api'
		avatar: './src/images/emily--dorson.png',
		chats: [
			{
				message: 'Hallo',
				time: '10:20',
				type: 'received'
			},
			{
				message: 'Gibt es Kaffee',
				time: '10:21',
				type: 'sent'
			},
			{
				message: 'Kein Mineralwasser, nur',
				time: '10:21',
				type: 'received'
			}
		]
	},
	{
		name: 'David',
		lastMessage: 'Kaffe bitte 😌',
		lastMessageTime: '11:00',
		// avatar: 'https://randomuser.me/api'
		avatar: './src/images/david--moore.png',
		chats: [
			{
				message: 'Hallo',
				time: '10:20',
				type: 'received'
			},
			{
				message: 'Moin',
				time: '10:21',
				type: 'sent'
			},
			{
				message: 'Guten Morgen, Kaffee?',
				time: '10:21',
				type: 'received'
			}
		]
	},
	{
		name: 'Greg',
		lastMessage: 'Ein mineralwasser, bitte',
		lastMessageTime: '12:00',
		// avatar: 'https://randomuser.me/api'
		avatar: './src/images/greg--james.png',
		chats: [
			{
				message: 'Hallo',
				time: '10:20',
				type: 'received'
			},
			{
				message: "Hallo, Wie geht's?",
				time: '10:21',
				type: 'sent'
			},
			{
				message: "geht's gut",
				time: '10:21',
				type: 'received'
			}
		]
	},
	{
		name: 'Jess',
		lastMessage: 'Guten Tag',
		lastMessageTime: '13:00',
		// avatar: 'https://randomuser.me/api'
		avatar: './src/images/jessica--drew.png',
		chats: [
			{
				message: 'Hallo',
				time: '10:20',
				type: 'received'
			},
			{
				message: 'Hallo, Gibt es Kaffee?',
				time: '10:21',
				type: 'sent'
			},
			{
				message: 'Nein, nur Mineralwasser',
				time: '10:21',
				type: 'received'
			}
		]

	}
];

//DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
	console.log('Minha pagina carregou');

	let tabFocus = true;
	const titleOriginal = document.title;

	const inputMsg = document.querySelector('#inputMessage');
	console.log(inputMsg);
	inputMsg.placeholder='Type your message';

	const buttons = document.querySelectorAll('.cursor--pointer');
	console.log(buttons);

	const buttonSend = document.querySelector(".cursor--pointer[src*='send']")
	console.log(buttonSend);

	// buttonSend.classList.add('minha--classe')

	function sendMessage(type){
		const text = inputMsg.value.trim();
		if (text === ''){
			console.log('No message');
		}
		else{
		// alert('click owrks');
		inputMsg.value = '';
		console.log(text);
		addMessage(type,text);
		setTimeout(replyMessage, 800);
		//settimeout
		//setInterval
		}
	};

	buttonSend.addEventListener('click', () => {
		sendMessage('sent');
	});

	inputMsg.addEventListener('keypress', (event) =>{
		console.log('key pressed',event);
		if (event.key === 'Enter'){
			sendMessage('sent');
		}
	});

	const list_messages = document.querySelector('.div--messages');
	// console.log(list_messages);
	
	list_messages.addEventListener('click', (event) => {
		if (event.target.classList.contains('emoji--reaction')){
			const message = event.target.closest('.message');
			menuReaction(message);
		}
	});

	window.addEventListener('blur', () => {
		tabFocus = false;
		document.title = 'chat out';
	});

	window.addEventListener('focus', () => {
		tabFocus = true;
		document.title = titleOriginal;
		document.title = 'chat open';
	});

	// const listEmoji = ['&#129505','&#128534','&#128525','&#128514']
	const listEmoji = ['😖','🧡','😍','😂'];

	function menuReaction(message){
		console.log(message);
		const areaEmoji = message.querySelector('.area--emoji');
		listEmoji.forEach(emoji => {
			const emojiElement = document.createElement('span');
			emojiElement.classList.add('emoji--option', 'emoji--hide');
			// emojiElement.textContent = emoji;
			emojiElement.classList.add('emoji', 'cursor--pointer');
			emojiElement.innerHTML = emoji;
			emojiElement.addEventListener('click', () => {
				console.log('click on emoji', emoji);
				alternateEmoji(message, emoji);
				// areaEmoji.innerHTML = emoji;
			});
			areaEmoji.appendChild(emojiElement);
		});
	};

	function alternateEmoji(message, emoji){
		let selectedEmoji = message.querySelector('.emoji--selected');
		if (selectedEmoji && selectedEmoji.innerHTML.includes(emoji)){
			selectedEmoji.textContent = selectedEmoji.innerHTML.replace(emoji, '');
			if (selectedEmoji.textContent.trim === ''){
				selectedEmoji.remove();
			}
		}
		else{
			if(!selectedEmoji){
				selectedEmoji = document.createElement('div');
				selectedEmoji.classList.add('emoji--selected');
				message.appendChild(selectedEmoji);
			}
			// emoji.classList.add('emoji--selected');
			selectedEmoji.innerHTML += emoji;
		}
	}

	function  addMessage(messageType, text){
		const messageDiv = document.createElement('div');
		const messageElement = document.createElement('div');
		const messageTime = document.createElement('div');
		messageTime.classList.add('flex', 'flex--1', 'justify--content--end', 'align--items--center', 'font--size--12', 'infos-message');
		
		messageElement.classList.add('flex','flex--direction--column', 'message',  'fade-in');
		messageDiv.classList.add('flex', 'width--100');

		const justifyContent = messageType === 'sent' ? 'justify--content--end' : 'justify--content--start';
		messageDiv.classList.add(justifyContent);

		const whoSent = messageType === 'sent' ? 'you' : 'other';
		messageElement.classList.add(whoSent);

		// if (messageType === 'sent'){
		// 	messageElement.classList.add('you', 'flex--direction--column')
		// 	messageDiv.classList.add('justify--content--end')
		// }
		// else{
		// 	messageElement.classList.add('other', 'flex--direction--column')
		// 	messageDiv.classList.add('justify--content--start')
		// }
		// messageElement.innerText = text;
		//current time HH:MM
		const date = new Date();
		messageElement.innerHTML =`
			<div class="flex--4">
				${text}
			</div>
			<div class="flex flex--1 justify--content--end align--items--center font--size--12 infos-message">
			<img src="./src/icons/emoticons.svg" class="cursor--pointer emoji--reaction emojiList--hide">
			<div class="area--emoji"></div>
				<div>${date.getHours()}:${date.getMinutes()}</div>
				<img class='fade-in' src="./src/icons/check.svg" alt="">
			</div>
		`

		list_messages.appendChild(messageDiv);
		messageDiv.appendChild(messageElement);

		setTimeout(() => {
			messageElement.classList.remove('fade-in');
		}, 500);
			
	}

	const inputSearchContact = document.querySelector(".div--search input[type='search']");

	const inputSearchMessage = document.getElementById('search-message');
	console.log(inputSearchMessage);

	const windowAvatar = document.getElementById('window-avatar');

	inputSearchContact.addEventListener('input', () => {
		console.log('input', inputSearchContact.value);
		loadContacts(inputSearchContact.value);
	});

	inputSearchMessage.addEventListener('input', () => {
		console.log('input', inputSearchMessage.value);
		// loadContacts(inputSearchMessage.value);
		searchMessage(inputSearchMessage.value);
	});
	
	function searchMessage(input){
		let foundMessage = false;
		const chatMessages = document.querySelectorAll('.message');

		chatMessages.forEach(message => {
			const textOriginal = message.innerText;
			const textNormalizado = textOriginal.toLowerCase();
			const inputNormalizado = input.toLowerCase();
			if (textNormalizado.includes(inputNormalizado)){
				foundMessage = true;
				const highlightText = textOriginal.replace(new RegExp(input, 'gi'), (match) => `<span class="highlight">${match}</span>`);
				console.log(highlightText);
				message.innerHTML = highlightText;
				message.style.display = 'block';
			}
			else{
				message.style.display = 'none';
			}
		});
		//message are not coming back on waring is writen in the screen
		// if(!foundMessage && input !== ''){
		// 	list_messages.innerHTML = '<div>⚠️No message found</div>';
		// }
		// else if(input === ''){
		// 	chatMessages.forEach(message => {
		// 		message.style.display = 'block';
		// 		message.innerHTML = message.innerText;
		// 	});
		// }
	}

	const botReplies = [
		'Hello',
		'How are you?',
		'I am a bot',
		'What is your name?',
		'Ich bin wie ein Kellner',
		'Ein Mineralwasser, bitte!'
	];

	function replyMessage(){
		const randomIndex = Math.floor(Math.random() * botReplies.length);
		const text = botReplies[randomIndex];
		addMessage('received', text);
		notificationNewMessage();
	}

	function loadContacts(filter =''){
		const divContactsElement = document.querySelector('.div--contacts');
		divContactsElement.innerHTML = '';

		//filter contacts or last message
		const filteredSearch = listContacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.chats[contact.chats.length -1].message.toLowerCase().includes(filter.toLowerCase()));
		// const filteredContacts = listContacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
		// const filteredLastMessage = listContacts.filter(message => message.lastMessage.toLowerCase().includes(filter.toLowerCase()));
		
		if (filteredSearch.length === 0){
			const noContactsElement = document.createElement('div');
			noContactsElement.classList.add('flex', 'justify--content--center', 'align--items--center', 'font--family', 'font--weight--bold');
			noContactsElement.innerText = '⚠️No contacts found';
			divContactsElement.appendChild(noContactsElement);
			return;
		}
		
			filteredSearch.forEach(contact => {
			console.log(contact);
			const contactElement = document.createElement('div');
			contactElement.classList.add('flex', 'area--contact', 'fade-in');
			contactElement.innerHTML = `
			<div class="flex justify--content--center align--items--center flex--1">
			<img class="avatar--left--bar" src="${contact.avatar}" alt="">
			</div>
			<div class="flex flex--direction--column justify--content--center flex--3">
			<div class="flex align--items--center infos--contact">
			<div class="font--family font--weight--bold">${contact.name}</div>
			</div>
			<div class="last--message">${contact.chats[contact.chats.length -1].message}</div>
			</div>
			<div class="flex flex--direction--column justify--content--center align--items--end div--last--messages-info flex--1">
			<div class="hour--last--message">${contact.lastMessageTime}</div>
			</div>
			`;

			contactElement.addEventListener('click', () => {
				console.log('click on contact', contact);
				// alert('click on contact');
				const contactName = document.querySelector('.contact--name');
				windowAvatar.src = contact.avatar;
				contactName.innerText = contact.name;
				list_messages.innerHTML = '';
				if (contact.chats){
					contact.chats.forEach(chat => {
						addMessage(chat.type, chat.message);
					});
				}
			});

			divContactsElement.appendChild(contactElement);
		});
	}

	function notificationNewMessage(){
		const notificationAudio = new Audio('./src/media/Notify.wav');
		let counter = 0;
		notificationAudio.play();
		const interval = setInterval(() => {
			document.title = (counter % 2 === 0) ? `New message! ${counter}` : titleOriginal;
			counter++;
			if (tabFocus){
				clearInterval(interval);
				document.title = titleOriginal;
			}
		}, 1000);
	}

	setTimeout(() => {
		loadContacts();
	}, 500);

	//call api https://randomuser.me/api
	function fetchRandomContacts(){
		fetch('https://randomuser.me/api')
		.then(response => response.json())
		.then(data => {
			console.log(data);
		})
		.catch(error => {
			console.error('Error:', error);
		});
	}
	// fetchRandomContacts()
});