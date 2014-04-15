/**
 * helper-messageDialog.js - v1.0.0
 * https://github.com/brandung/helper-messageDialog.git
 *
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/ *
 * MIT License (MIT)
 *
 * @require helper-loading.js
 *
 * @param {string} error message
 * @param {string} button text
 * @param {function} callback
 */

Brandung.Helpers.messageDialog = function(msg, btnText, callback) {
	// remove loading overlay
	$('.helper-loading').remove();
	// init new overlay
	Brandung.Helpers.loading();
	// append error container
	$('body').append('<div class="helper-message-dialog"><p>' + msg + '</p><a class="button" href="javascript:void(0)" title="' + btnText + '">' + btnText + '</a></div>');
	// bind click event
	$('.helper-message-dialog').on('click', function() {
		var $_self = $(this);
		$_self.remove();
		$('.helper-loading').remove();
		if (callback && typeof(callback) === "function") {
			callback();
		}
	});
};