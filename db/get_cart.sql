SELECT * FROM	wimpitts_product
LEFT JOIN wimpitts_cart 
    ON wimpitts_cart.product_id = wimpitts_product.product_id
    WHERE user_id = $1;