-- Create a simple items table.
CREATE TABLE IF NOT EXISTS product (
  value TEXT PRIMARY KEY NOT NULL
);

-- ⚡
-- Electrify the items table
ALTER TABLE product DISABLE ELECTRIC;
