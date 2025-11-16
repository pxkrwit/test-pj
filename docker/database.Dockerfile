FROM mysql:8

ENV MYSQL_DATABASE=project_database
ENV MYSQL_ROOT_PASSWORD=projectit30
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=projectit30
ENV LANG=C.UTF-8

COPY database/schema/init.sql /docker-entrypoint-initdb.d/01-init.sql
COPY database/seed/seed_data.sql /docker-entrypoint-initdb.d/02-seed_data.sql

EXPOSE 3306

