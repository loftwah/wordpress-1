function toggleOptions(parentOption, childOptions) {
	var display = '';

	if (document.getElementById(parentOption).checked == false) {
		display = 'none';
	}
	for (var i = 0; i < childOptions.length; i++) {
		console.log(childOptions[i]);
		console.log(document.getElementById(childOptions[i]));
		document.getElementById(childOptions[i]).style.display = display;
	}
}

function authFacebook() {
	FB.login(function(response) {
		if (response.authResponse) {
			window.location.reload();
		} else {
			console.log('User cancelled login or did not fully authorize.');
		}
	}, {scope: 'manage_pages, publish_actions, publish_stream'});
}

jQuery(function() {
	jQuery("#suggest-friends").tokenInput("?fb-friends=1", {
      theme: "facebook",
      preventDuplicates: true,
      hintText: "Type to find a friend."
  });
});;

jQuery(function() {
	jQuery("#suggest-pages").tokenInput("?fb-pages=1", {
      theme: "facebook",
      preventDuplicates: true,
      hintText: "Type to find a page."
  });
});