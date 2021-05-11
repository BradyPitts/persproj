INSERT INTO wimpitts_users (email, hash, admin)
VALUES ($1, $2, $3)
RETURNING *;