
const checkForVictory = function(){

	const wins = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	];

	const player = $('#player').html();

  for (let winSet of wins) {
    let victory = true;
    for (let squareId of winSet) {
      console.log(`squareId:`, squareId);
      $elementBeingTested = $(`td[data-identity=${squareId}]`);
      const checkID = $elementBeingTested.attr('data-identity');
      console.log('checkID', checkID);
      if (!$elementBeingTested.hasClass(player)) { // a square does NOT have player as a class then victory => false 
        victory = false;
      }
    }
    if (victory) {
      return true;
    }
  }
  return false;
};

// document
// window
// navigator

$(document).ready(function(){
	// console.log('it is alive AND the DOM is ready');
	// alert('monkey fuzz');

	// $('tbody').data('identity', 34);
	// console.log('this thing', $('tbody').data('identity'));

	// console.log('first TD', $('td').data('identity'));
	// $('td').data('identity', 99);
	// console.log('first TD', $('td').data('identity'));

	$('td').click(function(event){
		// console.log('event', event);

		$(this).parent().addClass('dashed');

		const player = $('#player').html();
		$(this).addClass(player);
		$(this).off(); // removes all event handlers from this element

		if (checkForVictory()) {
			$('td').off();
			$('h2').html(`${player} has Won !!! <a href="">Play again</a>`);
		} else {
			// now that the turn has taken place
			// let us switch whose turn it is
			if (player === 'X') {
				$('#player').html('O');
			} else {
				$('#player').html('X');
			}
		}

	});

});


