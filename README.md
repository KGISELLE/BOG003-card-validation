# Card Validation Project 1

## Índice

* [1. Resumen (Abstract)](#1-resumen-abstract)

* [2. Imagen Final del Proyecto](#2-imagen-final-del-proyecto)

* [3. Investigación UX (UX research)](#3-investigación-ux-ux-research)

* [3.1. Usuarios y Objetivos del Producto (Users and product goals)](#31-usuarios-y-objetivos-del-producto-users-and-product-goals)

* [3.2. Cómo el producto resuelve el problema (How the product solves user problem/requests)](#32-cómo-el-producto-resuelve-el-problema)


* [3.3. Primer Prototipo en papel (First Paper Prototyping)](#33-primer-prototipo-en-papel-first-paper-prototyping)

* [3.4. Retroalimentación de Usuarios (Users Feedback)](#34-retroalimentación-de-usuarios-users-feedback)

* [3.5. Prototipo Final (Final Prototyping)](#35-prototipo-final-final-prototyping)

***

## 1. Resumen (Abstract)
En este proyecto se construyó una aplicación web que le permite a un
usuario validar el número de su tarjeta de crédito. 

La aplicación se diseñó de acuerdo a los lineamiendo dados en el feedback del usuario, pensando en cómo debería ser esa
experiencia de uso (colores, logo, tipo de letra, etc).

Además de la funcionalidad principal validar la tarjeta de credito del usuario, se implementó la funcionalidad para ocultar todos los dígitos de la tarjeta menos
los últimos cuatro digitos, en el resultado de la validación.

***

## 2. Imagen Final del Proyecto

![imagen de mi proyecto](http://127.0.0.1:5500/src/index.html)

***

## 3. Investigación UX (UX Research)

### 3.1. Usuarios y Objetivos del Producto (Users and Product goals)

Los usuarios de esta app web son personas jóvenes que reciben la tarjeta de crédito del banco "Bansolutions" que es nuestro cliente, son usuarios que reciben la tarjeta por primera vez y que no quieren incurrir en gastos innecesrios. 

El cliente de la app web es un "banco de bajo costo", que tampoco quiere incurrir en gastos adicionales, quiere manejar una imagen descomplicada y no tan rigida como los bancos tradicionales, por esta razón el banco envia sus tarjetas por sistema de correo normal pero al no ser correo certificado se pueden presentar problemas de fraude, principalmente en la situación que al usuario le llegue otro tipo de tarjeta que sólo sea para extraer datos del usuario y no sea una tarjeta de crédito válida. 

Por esta razón el objetivo del producto es poder decirle al usuario sí la tarjeta de crédito que recibió es válida o no, y que el usuario se sienta seguro que en efecto la tarjeta recibida si fue la tarjeta enviada por el banco.

***

### 3.2. Cómo el producto resuelve el problema

El producto es una app web que le pregunta al usuario su número de tarjeta y el usuario al ingresarla en el lugar indicado y dar click en validar, realiza en efecto este proceso de validación de su tarjeta de crédito, esta validacion se realiza por medio del Algoritmo de Luhn ó Algoritmo de módulo 10. Sí la tarjeta es válida le mostrará al usuario un mensaje diciendole que su tarjeta es válida pero si por el contrario no es válida el mensaje será que rectifique el número y vuelva a la válidación ó que se comunique con el banco para evitar fraudes.

***

### 3.3. Primer Prototipo en papel (First Paper Prototyping)

![Imagen prototipo en papel](img/Paper-prototype.png)

***

### 3.4. Retroalimentación de Usuarios (Users Feedback)

* Utilizar un estilo de letra fresco no rigido por el tipo de usuario y letras grandes para mejor accesibilidad.  

* Utilizar colores que resalten pero que a la vez se vean serios.  

* Tener coherencia entre los colores de la página y los colores del logo del banco y así mismo el estilo de letra que sea similar.  

* La página debe ser sencilla y fácil de entender para el usuario, en especial las instrucciones para validar la tarjeta.  

* Que el usuario entienda que tiene que hacer para evitar fraude "ponerse en contacto con el banco".  

* Procurar que la página no tenga mucho texto.  

***

### 3.5. Prototipo Final (Final Prototyping)

![imagen prototipo final balsamiq](img/bienvenida.png) 

![imagen prototipo respuesta true](img/validadortrue.png)

![imagen prototipo respuesta false](img/validadorfalse.png)



