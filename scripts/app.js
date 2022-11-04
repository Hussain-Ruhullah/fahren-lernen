var startTime = 0;

document.addEventListener("keydown", function (event) {
	if (startTime === 0) { startTime = new Date().getTime() }
})

document.addEventListener("keyup", function (event) {

	let bookmark = document.getElementsByClassName("icon icon-IconQuestionMark")
	let checkBoxes = document.getElementsByClassName("chk chk-answer")
	let buttons = document.getElementsByClassName("btn btn-command")
	let btnTools = document.getElementsByClassName("btn-tool")
	let homeButon = document.getElementsByClassName("btn-back")
	let picClose = document.getElementsByClassName("question-image");
	let videoClose = document.getElementsByClassName("icon-IconClosePic");
	let textAnswers = document.getElementsByClassName("audio-label");
	let videoPlay = document.getElementsByClassName("icon icon-IconPlayVideo");
	let goToTask = document.getElementsByClassName("icon-IconGoToTask");

	let playAudio = (startTime + 500) < (new Date().getTime()) ? true : false;
	startTime = 0;

	// I just don't like switch cases :)

	if (['Numpad0'].includes(event.code)) {
		textAnswers[0].click()
	};

	if (event.code === 'Numpad1') {
		if (videoPlay.length > 0) {
			videoPlay[0].click();
		} else {
			playAudio ? textAnswers[1].click() : checkBoxes[0].click();
		}
	};

	if (event.code === 'Numpad2') {
		if (goToTask.length > 0) {
			goToTask[0].click();
		} else {
			playAudio ? textAnswers[2].click() : checkBoxes[1].click();
		}
	};

	if (event.code === 'Numpad3') {
		playAudio ? textAnswers[3].click() : checkBoxes[2].click();
	};

	if (['Enter', 'ArrowRight'].includes(event.code)) {
		buttons[2].click();
	};

	if (['ArrowLeft'].includes(event.code)) {
		buttons[1].click();
	};
	if (['ArrowDown'].includes(event.code) && homeButon.length > 0) {
		homeButon[0].click();
	};

	if (['NumpadMultiply'].includes(event.code)) {
		bookmark[0].click();
	};

	if (['Numpad4'].includes(event.code)) {
		btnTools[0].click();
	};
	if (['Numpad5'].includes(event.code)) {
		btnTools[1].click();
	};
	if (['Numpad6'].includes(event.code)) {
		btnTools[2].click();
	};

	if (['Escape', 'NumpadSubtract'].includes(event.code)) {
		videoClose ? videoClose[0].click() : picClose[1].click();
	};

	if (['Numpad8', 'ArrowUp', 'NumpadAdd'].includes(event.code)) {
		btnTools[2].click();
	};
});