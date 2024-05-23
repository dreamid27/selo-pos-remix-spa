export default [
  {
    "statements": [
      "CREATE TABLE \"items\" (\n  \"value\" TEXT NOT NULL,\n  CONSTRAINT \"items_pkey\" PRIMARY KEY (\"value\")\n) WITHOUT ROWID;\n",
      "INSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.items', 1);",
      "DROP TRIGGER IF EXISTS update_ensure_main_items_primarykey;",
      "CREATE TRIGGER update_ensure_main_items_primarykey\n  BEFORE UPDATE ON \"main\".\"items\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"value\" != new.\"value\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column value as it belongs to the primary key')\n    END;\nEND;",
      "DROP TRIGGER IF EXISTS insert_main_items_into_oplog;",
      "CREATE TRIGGER insert_main_items_into_oplog\n   AFTER INSERT ON \"main\".\"items\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.items')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'items', 'INSERT', json_object('value', new.\"value\"), json_object('value', new.\"value\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_items_into_oplog;",
      "CREATE TRIGGER update_main_items_into_oplog\n   AFTER UPDATE ON \"main\".\"items\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.items')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'items', 'UPDATE', json_object('value', new.\"value\"), json_object('value', new.\"value\"), json_object('value', old.\"value\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_items_into_oplog;",
      "CREATE TRIGGER delete_main_items_into_oplog\n   AFTER DELETE ON \"main\".\"items\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.items')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'items', 'DELETE', json_object('value', old.\"value\"), NULL, json_object('value', old.\"value\"), NULL);\nEND;"
    ],
    "version": "1"
  },
  {
    "statements": [
      "CREATE TABLE \"products\" (\n  \"value\" TEXT NOT NULL,\n  CONSTRAINT \"products_pkey\" PRIMARY KEY (\"value\")\n) WITHOUT ROWID;\n",
      "INSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.products', 1);",
      "DROP TRIGGER IF EXISTS update_ensure_main_products_primarykey;",
      "CREATE TRIGGER update_ensure_main_products_primarykey\n  BEFORE UPDATE ON \"main\".\"products\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"value\" != new.\"value\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column value as it belongs to the primary key')\n    END;\nEND;",
      "DROP TRIGGER IF EXISTS insert_main_products_into_oplog;",
      "CREATE TRIGGER insert_main_products_into_oplog\n   AFTER INSERT ON \"main\".\"products\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.products')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'products', 'INSERT', json_object('value', new.\"value\"), json_object('value', new.\"value\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_products_into_oplog;",
      "CREATE TRIGGER update_main_products_into_oplog\n   AFTER UPDATE ON \"main\".\"products\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.products')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'products', 'UPDATE', json_object('value', new.\"value\"), json_object('value', new.\"value\"), json_object('value', old.\"value\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_products_into_oplog;",
      "CREATE TRIGGER delete_main_products_into_oplog\n   AFTER DELETE ON \"main\".\"products\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.products')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'products', 'DELETE', json_object('value', old.\"value\"), NULL, json_object('value', old.\"value\"), NULL);\nEND;"
    ],
    "version": "2"
  },
  {
    "statements": [
      "CREATE TABLE \"productses\" (\n  \"value\" TEXT NOT NULL,\n  CONSTRAINT \"productses_pkey\" PRIMARY KEY (\"value\")\n) WITHOUT ROWID;\n",
      "INSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.productses', 1);",
      "DROP TRIGGER IF EXISTS update_ensure_main_productses_primarykey;",
      "CREATE TRIGGER update_ensure_main_productses_primarykey\n  BEFORE UPDATE ON \"main\".\"productses\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"value\" != new.\"value\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column value as it belongs to the primary key')\n    END;\nEND;",
      "DROP TRIGGER IF EXISTS insert_main_productses_into_oplog;",
      "CREATE TRIGGER insert_main_productses_into_oplog\n   AFTER INSERT ON \"main\".\"productses\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.productses')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'productses', 'INSERT', json_object('value', new.\"value\"), json_object('value', new.\"value\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_productses_into_oplog;",
      "CREATE TRIGGER update_main_productses_into_oplog\n   AFTER UPDATE ON \"main\".\"productses\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.productses')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'productses', 'UPDATE', json_object('value', new.\"value\"), json_object('value', new.\"value\"), json_object('value', old.\"value\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_productses_into_oplog;",
      "CREATE TRIGGER delete_main_productses_into_oplog\n   AFTER DELETE ON \"main\".\"productses\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.productses')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'productses', 'DELETE', json_object('value', old.\"value\"), NULL, json_object('value', old.\"value\"), NULL);\nEND;"
    ],
    "version": "3"
  },
  {
    "statements": [
      "CREATE TABLE \"product\" (\n  \"name\" TEXT NOT NULL,\n  \"isActive\" INTEGER NOT NULL,\n  \"createdAt\" TEXT NOT NULL,\n  \"updatedAt\" TEXT NOT NULL,\n  \"deletedAt\" TEXT,\n  \"description\" TEXT NOT NULL,\n  \"price\" INTEGER NOT NULL,\n  \"image\" TEXT NOT NULL,\n  \"id\" INTEGER NOT NULL,\n  CONSTRAINT \"PK_bebc9158e480b949565b4dc7a82\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "INSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.product', 1);",
      "DROP TRIGGER IF EXISTS update_ensure_main_product_primarykey;",
      "CREATE TRIGGER update_ensure_main_product_primarykey\n  BEFORE UPDATE ON \"main\".\"product\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "DROP TRIGGER IF EXISTS insert_main_product_into_oplog;",
      "CREATE TRIGGER insert_main_product_into_oplog\n   AFTER INSERT ON \"main\".\"product\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.product')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'product', 'INSERT', json_object('id', new.\"id\"), json_object('createdAt', new.\"createdAt\", 'deletedAt', new.\"deletedAt\", 'description', new.\"description\", 'id', new.\"id\", 'image', new.\"image\", 'isActive', new.\"isActive\", 'name', new.\"name\", 'price', new.\"price\", 'updatedAt', new.\"updatedAt\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_product_into_oplog;",
      "CREATE TRIGGER update_main_product_into_oplog\n   AFTER UPDATE ON \"main\".\"product\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.product')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'product', 'UPDATE', json_object('id', new.\"id\"), json_object('createdAt', new.\"createdAt\", 'deletedAt', new.\"deletedAt\", 'description', new.\"description\", 'id', new.\"id\", 'image', new.\"image\", 'isActive', new.\"isActive\", 'name', new.\"name\", 'price', new.\"price\", 'updatedAt', new.\"updatedAt\"), json_object('createdAt', old.\"createdAt\", 'deletedAt', old.\"deletedAt\", 'description', old.\"description\", 'id', old.\"id\", 'image', old.\"image\", 'isActive', old.\"isActive\", 'name', old.\"name\", 'price', old.\"price\", 'updatedAt', old.\"updatedAt\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_product_into_oplog;",
      "CREATE TRIGGER delete_main_product_into_oplog\n   AFTER DELETE ON \"main\".\"product\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.product')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'product', 'DELETE', json_object('id', old.\"id\"), NULL, json_object('createdAt', old.\"createdAt\", 'deletedAt', old.\"deletedAt\", 'description', old.\"description\", 'id', old.\"id\", 'image', old.\"image\", 'isActive', old.\"isActive\", 'name', old.\"name\", 'price', old.\"price\", 'updatedAt', old.\"updatedAt\"), NULL);\nEND;"
    ],
    "version": "4"
  },
  {
    "statements": [
      "CREATE TABLE \"productss\" (\n  \"value\" TEXT NOT NULL,\n  CONSTRAINT \"productss_pkey\" PRIMARY KEY (\"value\")\n) WITHOUT ROWID;\n",
      "INSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.productss', 1);",
      "DROP TRIGGER IF EXISTS update_ensure_main_productss_primarykey;",
      "CREATE TRIGGER update_ensure_main_productss_primarykey\n  BEFORE UPDATE ON \"main\".\"productss\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"value\" != new.\"value\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column value as it belongs to the primary key')\n    END;\nEND;",
      "DROP TRIGGER IF EXISTS insert_main_productss_into_oplog;",
      "CREATE TRIGGER insert_main_productss_into_oplog\n   AFTER INSERT ON \"main\".\"productss\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.productss')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'productss', 'INSERT', json_object('value', new.\"value\"), json_object('value', new.\"value\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_productss_into_oplog;",
      "CREATE TRIGGER update_main_productss_into_oplog\n   AFTER UPDATE ON \"main\".\"productss\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.productss')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'productss', 'UPDATE', json_object('value', new.\"value\"), json_object('value', new.\"value\"), json_object('value', old.\"value\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_productss_into_oplog;",
      "CREATE TRIGGER delete_main_productss_into_oplog\n   AFTER DELETE ON \"main\".\"productss\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.productss')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'productss', 'DELETE', json_object('value', old.\"value\"), NULL, json_object('value', old.\"value\"), NULL);\nEND;"
    ],
    "version": "5"
  }
]