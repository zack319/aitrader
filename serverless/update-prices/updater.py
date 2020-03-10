import sys
import os
import json
import boto3
from urllib.request import urlopen
import requests
import requests
import time
import re

from datetime import date

from helpers import dbHelper as DBWrapper

def parseData(url):
    response = urlopen(url)
    data = response.read().decode("utf-8")
    tmpStocks = json.loads(data)

    stocks = []
    bannedList = ['Paris', 'Amsterdam', 'Brussels', 'YHD']

    for stock in tmpStocks['symbolsList']:
        if "exchange" in stock.keys() and "name" in stock.keys() and stock['exchange'] not in bannedList:
            newStock = {
                "name": stock['name'],
                "indice": stock['symbol'],
                "value": stock['price'],
                "userId": "",
                "date": (date.today()).strftime("%Y/%m/%d")
            }
            stocks.append(newStock)

    return {"stocks": stocks, "count": len(stocks)}


def updater(event, context):
    # connect to DB and set collection
    host = os.environ['DBHOST']
    dbName = os.environ['DBNAME']
    dbObject = DBWrapper.DBClass(host, dbName)
    clientObj = dbObject.getDBClient()
    collectionObj = clientObj.stocks

    # data = parseData(os.environ['FINANCIALURL])

    # get all stocks from stocks collection
    dbStocks = []
    test = collectionObj.find_one({'indice': 'AAPL'})
    print(test)

    # for stock in collectionObj.find():
    #     dbStocks.append(stock)
    
    # newCount = data['count']
    # print('API data count => ' + str(data['count']))

    # dbCount = len(dbStocks)
    # print('Array DB count => ' + str(dbCount))

    # if newCount != dbCount:
    #     print('Need to get the missing or added stocks')
    #     addMissing = addMissingStocks(dbStocks, data['stocks'], collectionObj)

    #     print('Now updating stock prices')
    #     updates = generalUpdate(data['stocks'], collectionObj)
    # else:
    #     print('Need to update the prices')
    #     updates = updateStocks(dbStocks, collectionObj)
    
    return {'status': 'Success'}
