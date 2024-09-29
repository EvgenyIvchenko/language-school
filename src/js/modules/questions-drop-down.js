const dropdownElements = document.getElementsByClassName('questions__drop-button');

export const initQuestionsDropdown = () => {
	for (let i = 0; i < dropdownElements.length; i++) {
		dropdownElements[i].addEventListener('click', function () {
			this.parentElement.classList.toggle('questions__drop-item--opened');
			const content = this.nextElementSibling;
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = `${content.scrollHeight}px`;
			}
		});
	}
};
