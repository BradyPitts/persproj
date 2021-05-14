INSERT INTO wimpitts_cart (user_id, product_id)
VALUES ($1, $2)
RETURNING *;