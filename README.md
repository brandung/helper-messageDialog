helper-messageDialog
====================

Show an Message Dialog box

@require [helper-loading.js](https://github.com/brandung/helper-loading)

[DEMO](http://jsfiddle.net/B6Da7/1/)

### JavaScript Snippet:

```JavaScript
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
```
