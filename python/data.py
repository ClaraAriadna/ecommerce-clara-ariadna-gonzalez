# -*- coding: utf-8 -*- 

from config import *
import os, json

ruta = os.path.join(os.path.abspath(__file__), '..\..\json\data')
ruta = os.path.abspath(ruta)
archivos = os.listdir(ruta)
for file in archivos:
    with open(ruta+'\\'+file, "r") as datos:
        datosObtenidos = json.load(datos)
        nombre = datosObtenidos['nombre']
        email = datosObtenidos['email']
        clave = datosObtenidos['clave']
    cursor.execute('use claudiavitraux')
    if cursor.execute(f'SELECT * FROM registro_usuarios WHERE email="{email}"'):
        with open('../js/registro.js', 'w') as alerta:
            contenido = 'El correo electrónico ya está registrado.'
            alerta.write(f'alert({contenido})')
    else:
        cursor.execute(f'INSERT INTO registro_usuarios(username, email, password) VALUES ("{nombre}", "{email}", "{clave}")')
conexion.commit()
conexion.close()
