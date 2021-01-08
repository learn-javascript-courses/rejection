const STORAGE_KEY = "questions";

function ask(askee, question, status) {
	const questions = getQuestions();
	const newQuestions = [
		...questions,
		{
			id: generateRandomId(),
			timestamp: Date.now(),
			question,
			askee,
			status,
		},
	];
	console.log(newQuestions);
	persistObjectToStorage(STORAGE_KEY, newQuestions);
	updateTable();
}

function getQuestions() {
	return getObjectFromStorage(STORAGE_KEY) || [];
}

function getObjectFromStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}

function persistObjectToStorage(key, obj) {
	localStorage.setItem(key, JSON.stringify(obj));
}

function generateRandomId() {
	return Math.random().toString(36).slice(2);
}

const askeeInput = document.getElementById("askee");
const questionInput = document.getElementById("question");
const dataTable = document.getElementById("data-table");

const buttonHandlers = Array.from(
	document.getElementsByClassName("button-handler")
);
buttonHandlers.forEach((buttonHandler) => {
	buttonHandler.addEventListener("click", ({ target: button }) => {
		const { action: status } = button.dataset;
		const askee = askeeInput.value;
		const question = questionInput.value;
		if (askee && question && status) {
			ask(askee, question, status);
		}
	});
});

function remove(id) {
	const questions = getQuestions();
	const questionIndex = questions.findIndex((question) => question.id === id);

	if (questionIndex >= 0) {
		persistObjectToStorage(STORAGE_KEY, [
			...questions.slice(0, questionIndex),
			...questions.slice(questionIndex + 1),
		]);
	}

	updateTable();
}

function generateTable(questions) {
	return questions
		.map(({ id, askee, question, timestamp, status }, index) => {
			return `
				<tr>
					<td>${index + 1}</td>
					<td>${askee}</td>
					<td>${question}</td>
					<td>${datetimeFormatter(new Date(timestamp))}</td>
					<td>${status}</td>
					<td><button onclick="remove('${id}')">Remove</button></td>
				</tr>
			`;
		})
		.join("");
}

function datetimeFormatter(date = new Date()) {
	return `${(date.getDate() + "").padStart(2, "0")}/${(
		date.getMonth() +
		1 +
		""
	).padStart(2, "0")}/${date.getFullYear()}`;
}

function updateTable() {
	const questions = getQuestions();
	let tableTemplate = "";
	if (questions.length) {
		tableTemplate = `
				<table>
					<thead>
						<tr>
							<th>&#35;</th>
							<th>Askee</th>
							<th>Question</th>
							<th>Timestampt</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						${generateTable(questions)}
					</tbody>
				</table>
			`;
	} else {
		tableTemplate = "No data!";
	}
	dataTable.innerHTML = tableTemplate;
}

updateTable();
