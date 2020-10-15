const enterBtn = document.getElementById('enterBtn');





enterBtn.addEventListener('click', function(){
	let loginName = document.getElementById('loginName');
	let loginPass = document.getElementById('loginPass');

	if(loginName.value.length < 3 || loginPass.value.length <3){
		alert("Please enter your name or password");
	}
	else {
		let mainPage = document.getElementById('main');
		mainPage.style.display= 'none'
		let bankPage = document.getElementById('bank');
		bankPage.style.display = 'block'
		


		let userName = document.getElementById('userName');
		userName.innerHTML = loginName.value;

		document.getElementById('loginName').value= "";
		document.getElementById('loginPass').value = "";

	}
})

//prev button
const prevBtn = document.getElementById('prevBtn');
prevBtn.addEventListener('click', function(){
	let mainPage = document.getElementById('main');
		mainPage.style.display= 'block'
		let bankPage = document.getElementById('bank');
		bankPage.style.display = 'none';
})




// deposit button 
const depsitBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function(){
	//setting added deposit money
	let depositAmountInput = document.getElementById('depositAmountInput');
	let depositAmountNum = parseFloat(depositAmountInput.value);
	let currentDepositAmount = document.getElementById('currentDepositAmount').innerText;
	let currentDepositNum = parseFloat(currentDepositAmount);
	
	let addedDeposit= depositAmountNum + currentDepositNum;

	 document.getElementById('currentDepositAmount').innerHTML = addedDeposit;


	//setting added banlance
	let currentBalanceAmount = document.getElementById('currentBalanceAmount').innerHTML;
	let currentBalanceNum = parseFloat(currentBalanceAmount)
	let addedBalance = depositAmountNum + currentBalanceNum;
	document.getElementById('currentBalanceAmount').innerHTML = addedBalance

	//eraging depositAmountInput value for new value a
	depositAmountInput.value = '';

})


// withdraw button 
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function(){
	let withdrawAmountInput = document.getElementById('withdrawAmountInput');
	let withdrawAmountNum = parseFloat(withdrawAmountInput.value);

	let currentWithdrawAmount = document.getElementById('currentWithdrawAmount').innerHTML;
	let currentWithdrawNum = parseFloat(currentWithdrawAmount);

	let currentBalanceAmount = document.getElementById('currentBalanceAmount').innerHTML;
	let currentBalanceNum = parseFloat(currentBalanceAmount)

	let addedWithdraw = withdrawAmountNum + currentWithdrawNum;

	


	// debuted balance
	let debutedBalance = currentBalanceNum - withdrawAmountNum;
	if(debutedBalance < 0){

	}else{
		document.getElementById('currentBalanceAmount').innerHTML = debutedBalance;
		document.getElementById('currentWithdrawAmount').innerHTML = addedWithdraw;
	}
	
	
	//eraging withdrawAmountInput value for new value a
	withdrawAmountInput.value = '';
})