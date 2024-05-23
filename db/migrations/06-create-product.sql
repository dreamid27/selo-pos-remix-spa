CREATE TABLE IF NOT EXISTS
  public.product (
    name character varying not null,
    "isActive" boolean not null,
    "createdAt" timestamp with time zone not null,
    "updatedAt" timestamp with time zone not null,
    "deletedAt" timestamp without time zone null,
    description character varying not null,
    price integer not null,
    image text not null,
    id uuid not null,
    uuid uuid null,
    constraint product_pkey primary key (id)
  ) tablespace pg_default;

create trigger as_first__save_deleted_rows_to_tombstone_table
after delete on product for each row
execute function electric.generate_tombstone_entry___public__product ();

create trigger postgres_write__upsert_generate_shadow_rows before insert
or
update on product for each row when (
  electric.__session_replication_role () <> 'replica'::text
)
execute function electric.create_shadow_row_from_upsert___public__product ();

create trigger postgres_write__delete_generate_shadow_rows before delete on product for each row when (
  electric.__session_replication_role () <> 'replica'::text
)
execute function electric.update_shadow_row_from_delete___public__product ();

create trigger satellite_write__save_operation_for_reordering before insert
or
update on product for each row when (
  electric.__session_replication_role () = 'replica'::text
  and pg_trigger_depth() < 1
)
execute function electric.reorder_main_op___public__product ();

create trigger send_self_and_references_on_insert
after insert on product referencing new table as new_table for each statement
execute function electric.send_self_trigger___public__product ();

create trigger send_self_and_references_on_update
after
update on product referencing new table as new_table for each statement
execute function electric.send_self_trigger___public__product ();