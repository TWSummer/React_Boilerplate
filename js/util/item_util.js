export const fetchItems = () => (
  $.ajax({
    method: 'GET',
    url: `/api/items`
  })
);

export const createItem = item => (
  $.ajax({
    method: 'POST',
    url: `/api/item`,
    data: { item }
  })
);
