# -*- coding: utf-8 -*- 

from mysql.connector import connect as conectar
    
conexion = conectar(host='localhost', port=3306, user='root', password='', database='claudiavitraux')
cursor = conexion.cursor(buffered=True)

