const { ClassicEditor, Essentials, Bold, Italic, Paragraph } = CKEDITOR;

document.querySelectorAll("textarea").forEach((textarea) => {
	ClassicEditor.create(textarea, {
		plugins: [Essentials, Bold, Italic, Paragraph],
		toolbar: ["undo", "redo", "|", "bold", "italic", "|"],
		enterMode: CKEDITOR.ENTER_DIV, //p to div
		shiftEnterMode: CKEDITOR.ENTER_BR, //enters to br
	}).catch((error) => {
		console.error("Error initializing editor for", textarea, error);
	});
});
