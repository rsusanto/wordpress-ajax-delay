(function($) {
	AJAX_DELAY_PATTERN = null;
	AJAX_DELAY_MAX = 3000;

	$.___ajax = $.ajax;
	$.ajax = function (...args) {
		let url = 'object' === typeof args[0] ? args[0].url : args[0];
		let xhr = $.___ajax(...args);
		if (AJAX_DELAY_PATTERN) {
			if (!url || !url.match(AJAX_DELAY_PATTERN)) return xhr;
		}

		let fakeXhr = $.Deferred(defer => {
			const delay = Math.floor(Math.random() * AJAX_DELAY_MAX);
			xhr.always((...resp) => console.warn(`Ajax delay (${delay}ms):`, args, resp));
			xhr.done((...resp) => setTimeout(() => defer.resolve(...resp), delay));
			xhr.fail((...resp) => setTimeout(() => defer.reject(...resp), delay));
		});

		fakeXhr.abort = xhr.abort;

		return fakeXhr;
	};
})(window.jQuery);
