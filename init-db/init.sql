/* Roles */
create role appuser with
    login
    nosuperuser
    noinherit
    nocreatedb
    nocreaterole
    noreplication
    password 'user';

create role dbmanager with
    login
    nosuperuser
    noinherit
    nocreatedb
    nocreaterole
    noreplication
    password 'manager';

/* Database */
create database kaupunginperhoset
    with owner = dbmanager
    encoding = 'UTF8'
    lc_collate = 'en_US.UTF-8'
    lc_ctype = 'en_US.UTF-8'
    tablespace = pg_default
    connection limit = -1;

/* Schemas */
create schema if not exists testi authorization dbmanager;
create schema if not exists tuotanto authorization dbmanager;

/* Privileges */

-- dbmanager
grant connect on database kaupunginperhoset to dbmanager;
grant all on database kaupunginperhoset to dbmanager;

grant all on schema testi to dbmanager;
grant all on schema tuotanto to dbmanager;

alter default privileges in schema testi grant all on sequences to dbmanager;
alter default privileges in schema tuotanto grant all on sequences to dbmanager;

alter default privileges in schema testi grant select, insert, delete, update, truncate on tables to dbmanager;
alter default privileges in schema tuotanto grant select, insert, delete, update, truncate on tables to dbmanager;

-- appuser
grant connect on database kaupunginperhoset to appuser;
alter default privileges in schema testi grant select on tables to appuser;
alter default privileges in schema tuotanto grant select on tables to appuser;

/* Tables */
create table testi.havainto (
    id serial not null,
    tieteellinen_nimi text not null,
    arkikielinen_nimi text null,
    kunta text null,
    kaupunginosa text null,
    loyto_pvm timestamp with time zone not null,
	created_at timestamp with time zone not null default now(), -- onko tälle suomenkielistä nimeä
    constraint havainto_pk primary key (id)
);