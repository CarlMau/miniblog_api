-- Only used for development where Postgres is run in Docker
create role miniblog_api with CREATEDB SUPERUSER  login password 'miniblog_api';