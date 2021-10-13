--overwrite_password
UPDATE wimpitts_users 
SET hash = $2
WHERE email = $1
RETURNING *;