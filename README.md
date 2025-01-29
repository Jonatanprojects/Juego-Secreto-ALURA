<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego de Adivinanza de Números</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #333;
        }
        p {
            font-size: 1.1em;
        }
        ul {
            list-style-type: disc;
            margin-left: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Juego de Adivinanza de Números</h1>
        <p>Este es un juego de adivinanza de números. El objetivo es adivinar un número secreto generado aleatoriamente dentro de un rango específico (en este caso, del 1 al 123).</p>
        <h2>Cómo jugar:</h2>
        <ul>
            <li>El sistema genera un número secreto aleatorio que debes adivinar.</li>
            <li>Ingresas un número en el campo de texto y haces clic en "Verificar".</li>
            <li>El sistema te dirá si el número secreto es mayor o menor que tu intento.</li>
            <li>Continúa haciendo intentos hasta que adivines el número secreto.</li>
            <li>El juego te indicará cuántos intentos te tomó adivinar el número y te dará la opción de reiniciar para
