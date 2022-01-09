FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD="root"
ENV MYSQL_DATABASE="patient"

COPY patient.sql /docker-entrypoint-initdb.d/
#RUN "mysql -u root --password=root" patient < /tmp/patient.sql"