// Don't look at me! I'm just a prototype so my code is a little ugly.
// I'll be cleaned up soon ;)

function taggify(input, target)
{
	$(input).keydown(function(e)
	{
		if (e.which === 188 && $(input).val().length > 0)
		{
			var tag = ' <span class="label">' + input.val() + '</span>';
			$(tag).appendTo(target);
			$(input).val('');
			return false;
		}

		if (e.which === 8 && $(input).val().length === 0 && target.length > 0)
		{
			var last = $(target).children().last();
			if ($(last).hasClass('notice')) {
				$(last).remove();
			}
			else {
				$(last).addClass('notice');
			}
		}

		if (e.which != 8 && $(input).val().length === 0) {
			$(target).children().last().removeClass('notice');
		}
	});

	$('span b', target).live('click', function()
	{
		$(this).parent().remove();
	});

	$(target).parent().click(function()
	{
		$(input).focus();
	});
}

$(document).ready(function() {
	taggify($('.tag_list input'), $('.tag_list div'));
});
