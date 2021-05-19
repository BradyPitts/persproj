DELETE FROM wimpitts_cart
WHERE cart_id = $1;
-- RETURNING *;