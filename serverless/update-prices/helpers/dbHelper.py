import sys
import os
import json
import boto3
import requests
import requests
import time
import re
import pymongo

from datetime import datetime

class DBClass:

    def __init__(self, host, dbName):
        self.setClient(host)
        self.setDBName(dbName)

    def getDBClient(self):
        client = self.getClient()
        dbClient = client.get_database(self.getDBName())

        return dbClient
    
    def update(self, collection, primaryKey, primaryValue, changeKey, changeValue):
        collection.update_one(
            {
                primaryKey: primaryValue
            }, {
                "$set": { changeKey: changeValue }
            }
         )
    
    def insert(self, collection, data, insertMany = True):
        if insertMany:
            collection.insert_many(data)
        else:
            collection.insert_one(data)
    
    def setClient(self, host):
        self.client = pymongo.MongoClient(host)
    
    def setDBName(self, name):
        self.dbName = name
    
    def getClient(self):
        return self.client
    
    def getDBName(self):
        return self.dbName
