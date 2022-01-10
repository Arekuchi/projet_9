FROM mongo:latest

#COPY ./init-db.d/notesdb.json /docker-entrypoint-initdb.d
#! /bin/bash
CMD mongoimport --host localhost --db mediscreen --collection notes --type json --file /notesdb.json --jsonArray