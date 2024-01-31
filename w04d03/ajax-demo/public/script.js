console.log("hello");

$(document).ready(() => {
  const $foodItemContainer = $("#food-item-container");
  const $newFoodItemForm = $('#new-food-item');

  const createFoodItem = (foodItem) => {
    const $foodItem = $(`
      <article class="food-item">
        <header>
          <h2>Name: ${foodItem.name} (${foodItem.id})</h2>
        </header>
        <h2>Tagline: ${foodItem.tagline}</h2>
        <footer>
          <h4>Calories: ${foodItem.calories}</h4>
          <h4>Price: $${foodItem.price}</h4>
        </footer>
      </article>
    `);

    return $foodItem;
  };

  const renderFoodItems = (foodItems) => {
    $foodItemContainer.empty();

    for (const foodItem of foodItems) {
      const $foodItem = createFoodItem(foodItem);
      $foodItemContainer.prepend($foodItem);
    }
  };

  const loadFoodItems = () => {
    $.ajax({
      url: '/food-items',
      method: 'GET',
      success: (foodItems) => {
        console.log(foodItems);
        renderFoodItems(foodItems);
      }
    });
  };

  loadFoodItems();

  $newFoodItemForm.on('submit', (event) => {
    // prevent the default behaviour of the browser
    event.preventDefault();
    
    // grab the data from the form
    const data = $newFoodItemForm.serialize();

    // POST the data to the server
    $.ajax({
      url: '/food-items',
      method: 'POST',
      data: data,
      success: () => {
        console.log('post request resolved successfully');
        loadFoodItems();
      }
    }); 
  });
});
