#! /bin/bash

mongoimport --host mongodb --db mediscreen --collection notes --type json --file /notes-database/notesdb.json --jsonArray