const questions = {
    files: [
        {
            question: "Los archivos con registros de longitud variable:",
            options: [
                "Ocupan menos espacio que los registros con longitud fija.",
                "Ocupan más espacio que los registros con longitud fija.",
                "Ocupan el mismo espacio que los registros con longitud fija.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "Un algoritmo de búsqueda en un archivo:",
            options: [
                "Es más eficiente si el archivo está ordenado.",
                "Puede ser más eficiente si se considera como precondición que el archivo está ordenado.",
                "Es igual de eficiente si el archivo está ordenado o desordenado.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Puede ser más eficiente si se considera como precondición que el archivo está ordenado."
        },
        {
            question: "El proceso de merge de archivos:",
            options: [
                "Requiere que todos los archivos estén ordenados.",
                "Requiere que todos los archivos estén ordenados por el mismo criterio.",
                "Puede hacerse sin los archivos ordenados.",
                "No puede realizarse sin los archivos ordenados.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Puede hacerse sin los archivos ordenados."
        },
        {
            question: "El proceso de alta de un registro por ajuste óptimo:",
            options: [
                "Se puede realizar con registros de longitud fija.",
                "Se debe realizar con registros de longitud fija.",
                "Se puede realizar con registros de longitud variable.",
                "Se debe realizar con registros de longitud variable.",
                "Ninguna."
            ],
            correctAnswer: "Ninguna."
        },
        {
            question: "La operación assign:",
            options: [
                "Se usa para abrir un archivo.",
                "Se usa para posicionarse en el primer registro del archivo.",
                "Vincula el archivo lógico con el archivo físico.",
                "Se usa para saber la longitud del archivo.",
                "Alguna de las anteriores."
            ],
            correctAnswer: "Vincula el archivo lógico con el archivo físico."
        },
        {
            question: "A partir del RRN:",
            options: [
                "Se puede acceder a un archivo fragmentado en un solo acceso.",
                "Se puede acceder a un registro de un archivo no fragmentado en un solo acceso.",
                "Se puede acceder a un registro de un archivo en un solo acceso.",
                "Se puede lograr acceso directo a un archivo.",
                "Todas las anteriores.",
                "Algunas de las anteriores."
            ],
            correctAnswer: "Todas las anteriores."
        },
        {
            question: "Un archivo fragmentado:",
            options: [
                "Debe compactarse para optimizar el espacio usado.",
                "No debe compactarse para optimizar el espacio usado.",
                "A veces puede compactarse.",
                "Nunca debe compactarse.",
                "Algunas de las anteriores."
            ],
            correctAnswer: "A veces puede compactarse."
        },
        {
            question: "Un algoritmo de actualización maestro - detalles:",
            options: [
                "Requiere que todos los archivos tengan la misma estructura.",
                "Puede hacerse entre archivos con diferente estructura.",
                "Requiere que los archivos estén ordenados.",
                "Requiere que los archivos estén desordenados.",
                "Algunas de las anteriores."
            ],
            correctAnswer: "Puede hacerse entre archivos con diferente estructura."
        },
        {
            question: "Un archivo serie:",
            options: [
                "Está ordenado.",
                "Puede ordenarse.",
                "Requiere ordenarse.",
                "No requiere ordenarse.",
                "No está ordenado.",
                "Algunas de las anteriores."
            ],
            correctAnswer: "Puede ordenarse."
        },
        {
            question: "Dado un archivo con 100 registros:",
            options: [
                "Siempre se puede llevar a memoria RAM para hacer búsquedas más eficientes.",
                "No siempre se puede llevar a memoria RAM para hacer búsquedas más eficientes.",
                "Siempre se puede realizar búsqueda dicotómica.",
                "No puede realizarse búsqueda dicotómica.",
                "Algunas de las anteriores."
            ],
            correctAnswer: "No siempre se puede llevar a memoria RAM para hacer búsquedas más eficientes."
        },
        {
            question: "Un archivo ordenado:",
            options: [
                "Puede desordenarse.",
                "Conviene mantenerlo ordenado.",
                "No conviene mantenerlo ordenado.",
                "No puede desordenarse.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Puede desordenarse."
        },
        {
            question: "¿Cuál de las siguientes definiciones corresponde a archivo?",
            options: [
                "Colección de registros que abarca un conjunto de entidades con ciertos aspectos en común para un propósito en particular.",
                "Colección de registros semejantes almacenados en disco rígido.",
                "Colección de registros del mismo tipo almacenados en un dispositivo de memoria secundaria.",
                "Todas las anteriores."
            ],
            correctAnswer: "Todas las anteriores."
        },
        {
            question: "Un archivo que maneja registros de longitud fija necesita:",
            options: [
                "Delimitadores que indiquen el fin de cada campo.",
                "Delimitadores que indiquen el fin de cada registro.",
                "Indicadores de longitud de registros.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "El proceso de baja en un archivo con registros de longitud variable:",
            options: [
                "Puede recuperar el espacio disponible con nuevas altas.",
                "Puede recuperar el espacio disponible compactando periódicamente el archivo.",
                "Puede recuperar el espacio disponible compactando el archivo ante cada baja.",
                "Todas las anteriores."
            ],
            correctAnswer: "Todas las anteriores."
        },
        {
            question: "El procedimiento de alta de información en un archivo:",
            options: [
                "Siempre agrega información al fin del archivo.",
                "Puede recuperar espacio dado de baja físicamente.",
                "Siempre recupera espacio dado de baja lógicamente.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "El proceso de baja lógica (sin ningún agregado de otras operaciones) de un archivo:",
            options: [
                "Nunca recupera espacio en disco.",
                "Siempre recupera espacio en disco.",
                "A veces recupera espacio en disco.",
                "No dispongo de información suficiente para responder la pregunta."
            ],
            correctAnswer: "Nunca recupera espacio en disco."
        },
        {
            question: "Dado un archivo:",
            options: [
                "Siempre se necesita tener un índice asociado.",
                "Un índice asociado le permite optimizar las operaciones de alta.",
                "Siempre debe estar ordenado.",
                "Ninguna."
            ],
            correctAnswer: "Ninguna."
        },
        {
            question: "Una clave candidata:",
            options: [
                "Admite repeticiones de valores.",
                "Admite repeticiones de campos.",
                "Podría haber sido elegida como clave primaria.",
                "Tiene exactamente las mismas características que la clave primaria."
            ],
            correctAnswer: "Podría haber sido elegida como clave primaria."
        },
        {
            question: "El proceso de compactación de un archivo tiene sentido ser aplicado:",
            options: [
                "Luego de realizar una operación de alta.",
                "Luego de realizar una operación de baja lógica.",
                "Luego de realizar una operación de baja físicamente.",
                "Luego de realizar una operación de modificación."
            ],
            correctAnswer: "Luego de realizar una operación de baja lógica."
        },
        {
            question: "El acceso promedio para recuperar un dato en un archivo desordenado:",
            options: [
                "Tiene orden lineal.",
                "Tiene orden logarítmico.",
                "Tiene orden constante (1).",
                "No tengo datos suficientes para responder."
            ],
            correctAnswer: "Tiene orden lineal."
        },
        {
            question: "La política de primer ajuste que permite recuperar espacio borrado de un archivo:",
            options: [
                "Solo se aplica en registros de longitud fija.",
                "Solo se aplica en registros de longitud variable.",
                "Genera fragmentación interna.",
                "Genera fragmentación externa.",
                "Hay más de una respuesta correcta."
            ],
            correctAnswer: "Hay más de una respuesta correcta."
        },
        {
            question: "A partir de un archivo con registros de longitud fija y luego de algunas operaciones con el mismo:",
            options: [
                "Nunca genera fragmentación.",
                "Puede generar fragmentación interna.",
                "Puede generar fragmentación externa.",
                "Las últimas dos son correctas."
            ],
            correctAnswer: "Puede generar fragmentación interna."
        },
        {
            question: "El acceso secuencial a un archivo es:",
            options: [
                "Acceso a los registros uno tras otro y en el orden físico en el que están guardados.",
                "Acceso a los registros de acuerdo al orden establecido por otra estructura.",
                "Acceso a un registro determinado sin necesidad de haber accedido a los predecesores.",
                "Ninguna."
            ],
            correctAnswer: "Acceso a los registros uno tras otro y en el orden físico en el que están guardados."
        },
        {
            question: "Un algoritmo de corte de control:",
            options: [
                "Permite actualizar un archivo maestro con un archivo detalle.",
                "Permite actualizar un archivo maestro a partir de varios archivos detalle.",
                "Permite presentar la información con una estructura especial.",
                "Permite actualizar un archivo con varios archivos detalles."
            ],
            correctAnswer: "Permite presentar la información con una estructura especial."
        },
        {
            question: "Un archivo de datos:",
            options: [
                "Necesariamente tiene registros de longitud fija.",
                "Necesariamente tiene registros de longitud variable.",
                "Puede tener registros de longitud fija y variable en el mismo archivo.",
                "Ninguna."
            ],
            correctAnswer: "Ninguna."
        },
        {
            question: "Un borrado lógico en un archivo de datos:",
            options: [
                "Recupera inmediatamente el espacio borrado, dejando el archivo de tamaño menor.",
                "No se puede aplicar con registros de longitud variable.",
                "Solo se aplica con registros de longitud fija.",
                "Permite recuperar el espacio con nuevas altas."
            ],
            correctAnswer: "Permite recuperar el espacio con nuevas altas."
        },
        {
            question: "Un archivo físicamente ordenado:",
            options: [
                "Es más fácil de recorrer.",
                "Permite búsqueda binaria.",
                "Permite búsqueda binaria solo si las altas mantienen el archivo ordenado.",
                "Permite búsqueda binaria y tambien permite búsqueda binaria solo si las altas mantienen el archivo ordenado.",
                "No permite búsqueda binaria si hay bajas lógicas.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Permite búsqueda binaria. Permite búsqueda binaria solo si las altas mantienen el archivo ordenado."
        },
        {
            question: "En un archivo con registros de longitud variable:",
            options: [
                "Puede usar '$' como delimitador de fin de registro.",
                "Cuando un registro se modifica usa el mismo espacio.",
                "Se puede usar cualquier lugar libre de un archivo para insertar un registro.",
                "Siempre se usa la política de mejor ajuste para recuperar espacio.",
                "Algunas."
            ],
            correctAnswer: "Puede usar '$' como delimitador de fin de registro."
        },
        {
            question: "Para aplicar un algoritmo de merge:",
            options: [
                "Es necesario más de un archivo.",
                "Es necesario que el archivo maestro esté ordenado.",
                "Es necesario que los detalles estén ordenados.",
                "No es necesario que el archivo maestro esté ordenado.",
                "No es necesario que los archivos detalles estén ordenados.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Algunas de las anteriores."
        },
        {
            question: "La función EOF:",
            options: [
                "Puede devolver verdadero después de un reset.",
                "Puede devolver falso después de una lectura.",
                "Puede devolver verdadero después de una lectura.",
                "Devuelve verdadero si estás al final del archivo.",
                "Devuelve falso si no estás al final del archivo.",
                "Todas las anteriores.",
                "Algunas."
            ],
            correctAnswer: "Todas las anteriores."
        },
        {
            question: "Es posible aplicar la búsqueda binaria en:",
            options: [
                "Archivos desordenados con registros de longitud variable.",
                "Archivos desordenados con registros de longitud fija.",
                "Archivos ordenados con registros de longitud variable.",
                "Archivos ordenados con registros de longitud fija.",
                "Ninguna."
            ],
            correctAnswer: "Archivos ordenados con registros de longitud fija."
        },
        {
            question: "Un archivo organizado con registros de longitud variable:",
            options: [
                "No permite realizar bajas lógicas.",
                "Optimiza la utilización de espacio en disco.",
                "No permite realizar bajas físicas.",
                "Solo acepta altas al final del archivo."
            ],
            correctAnswer: "Optimiza la utilización de espacio en disco."
        },
        {
            question: "La eficiencia promedio de búsqueda en un archivo sin orden es:",
            options: [
                "Orden lineal.",
                "Orden logarítmico.",
                "1.",
                "No dispongo datos para contestar la pregunta."
            ],
            correctAnswer: "Orden lineal."
        },
        {
            question: "La siguiente secuencia de instrucciones en un archivo de longitud fija: [instrucciones ilegibles]",
            options: [
                "Modifica el registro de la posición 0 del archivo.",
                "No realiza cambios en el archivo.",
                "Más de una es correcta.",
                "Ninguna es correcta."
            ],
            correctAnswer: "Modifica el registro de la posición 0 del archivo." 
        },
        {
            question: "Un índice secundario asociado a un archivo:",
            options: [
                "Siempre debe referenciar al índice primario.",
                "Siempre debe permitir acceder a los registros del archivo.",
                "A veces debe permitir acceder a los registros del archivo.",
                "Puede referenciar al índice primario.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Siempre debe referenciar al índice primario."
        },
        {
            question: "La búsqueda binaria es aplicable a:",
            options: [
                "Archivos con registros de longitud variable.",
                "Archivos desordenados con registros de longitud fija.",
                "Archivos ordenados con registros de longitud fija.",
                "Ninguna de las opciones es correcta."
            ],
            correctAnswer: "Archivos ordenados con registros de longitud fija."
        },
        {
            question: "Un algoritmo de actualización maestro/detalle:",
            options: [
                "Permite actualizar un archivo maestro con un solo archivo detalle.",
                "Permite presentar la información con un formato especial.",
                "Permite actualizar un archivo maestro a partir de uno o varios archivos detalle.",
                "Permite mezclar en un único archivo los registros del archivo maestro y los registros del archivo detalle.",
                "Ninguna es correcta."
            ],
            correctAnswer: "Permite actualizar un archivo maestro a partir de uno o varios archivos detalle."
        },
        {
            question: "La política de recuperación de espacio de mejor ajuste con registros de longitud fija:",
            options: [
                "A veces genera fragmentación externa.",
                "Siempre genera fragmentación externa.",
                "A veces genera fragmentación interna.",
                "Siempre genera fragmentación interna.",
                "Siempre genera fragmentación interna.",
                "No corresponde utilizarla con archivos de longitud fija."
            ],
            correctAnswer: "No corresponde utilizarla con archivos de longitud fija."
        },
        {
            question: "El proceso de corte de control:",
            options: [
                "Actualiza el archivo maestro a partir de un archivo detalle.",
                "Actualiza el archivo maestro a partir de varios archivos detalle.",
                "Genera un único archivo, uniendo un archivo maestro un archivo detalle.",
                "Genera un único archivo, uniendo un archivo maestro con todos los archivos detalles.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "Un archivo con registros de longitud variable:",
            options: [
                "Admite una organización mediante hashing.",
                "Admite solo bajas lógicas.",
                "Admite solo bajas físicas.",
                "Admite solo política de mejor ajuste para aprovechamiento de espacio.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "La política de recuperación de espacio de peor ajuste con registros de longitud fija:",
            options: [
                "Puede generar fragmentación interna.",
                "Genera siempre fragmentación interna.",
                "Puede generar fragmentación externa.",
                "Genera siempre fragmentación externa.",
                "No corresponde."
            ],
            correctAnswer: "No corresponde."
        },
        {
            question: "Para actualizar un archivo maestro a partir de N archivos:",
            options: [
                "Es necesario que la información que contengan sea compatible.",
                "Es necesario que todos los archivos estén ordenados.",
                "Es necesario solo que los archivos detalle estén ordenados.",
                "Es necesario solo que el maestro esté ordenado.",
                "Es necesario que todos los archivos tengan la misma estructura."
            ],
            correctAnswer: "Es necesario que la información que contengan sea compatible."
        },
        {
            question: "La política de recuperación de espacio de peor ajuste con registros de longitud fija:",
            options: [
                "Puede generar fragmentación interna.",
                "Genera siempre fragmentación interna.",
                "Puede generar fragmentación externa.",
                "Genera siempre fragmentación externa.",
                "No corresponde."
            ],
            correctAnswer: "Puede generar fragmentación interna."
        },
        {
            question: "Un archivo con registros de longitud fija:",
            options: [
                "A veces tiene fragmentación.",
                "Debe tener fragmentación.",
                "No puede tener fragmentación.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "A veces tiene fragmentación."
        },
        {
            question: "Para poder realizar merge entre dos archivos:",
            options: [
                "Los archivos deben estar ordenados con índices implementados con alguna estructura de dato no lineal.",
                "Los archivos deben estar ordenados con índices implementados con alguna estructura de dato lineal.",
                "Los archivos deben estar ordenados.",
                "Los archivos no deben estar ordenados.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "El NRR puede usarse:",
            options: [
                "En archivos con registro de longitud fija.",
                "En archivos con registros de longitud variable.",
                "Para realizar acceso directo a un registro.",
                "Para realizar acceso secuencial en un archivo.",
                "En archivos con registro de longitud fija y Para realizar acceso directo a un registro.",
            ],
            correctAnswer: "En archivos con registro de longitud fija y Para realizar acceso directo a un registro."
        },
        {
            question: "Un archivo con 20 registros:",
            options: [
                "No necesita ordenarse.",
                "Necesita ordenarse.",
                "Si se ordena, debe mantenerse ordenado.",
                "Si se ordena, debe aceptar solo búsquedas binarias.",
                "Si está desordenado, la búsqueda necesita saber la posición.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "No necesita ordenarse."
        },
        {
            question: "Un algoritmo de corte de control:",
            options: [
                "Se debe aplicar a un archivo ordenado para obtener un resultado coherente.",
                "Se debe aplicar a un archivo desordenado para obtener un resultado coherente.",
                "Es necesario que el archivo esté ordenado.",
                "Es suficiente que el archivo esté ordenado por un criterio.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Algunas de las anteriores.(Se debe aplicar a un archivo ordenado para obtener un resultado coherente, es necesario que el archivo esté ordenado y es suficiente que el archivo esté ordenado por un criterio)"
        },
        {
            question: "El proceso de baja lógica:",
            options: [
                "Se puede aplicar a archivos desordenados.",
                "Se puede aplicar a archivos ordenados.",
                "Se puede aplicar a archivos de longitud fija.",
                "Se puede aplicar a archivos de longitud variable.",
                "Se puede aplicar a cualquier archivo.",
                "No se puede aplicar si el archivo está vacío.",
                "Todas las anteriores."
            ],
            correctAnswer: "Todas las anteriores."
        },
        {
            question: "Una operación de lectura en un archivo:",
            options: [
                "Mueve automáticamente al siguiente registro físicamente ordenado.",
                "No puede el puntero.",
                "Solo mueve si no está en el último registro.",
                "Mueve automáticamente el puntero.",
                "Solo se mueve el puntero después de un reset.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Mueve automáticamente el puntero y Mueve automáticamente el puntero."
        },
        {
            question: "La fragmentación en un archivo de longitud fija:",
            options: [
                "Dificulta la baja física.",
                "Dificulta la baja lógica.",
                "Produce pérdida de espacio.",
                "Es menor utilizando primer ajuste.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Produce pérdida de espacio."
        },
        {
            question: "Con respecto a un archivo con registros de longitud fija, ¿cuáles de estas alternativas son correctas?",
            options: [
                "Usar NRR para tener acceso directo.",
                "Usar un indicador de longitud al inicio de cada registro.",
                "Usar un segundo archivo con la información de la dirección del byte de inicio de cada registro.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Usar NRR para tener acceso directo."
        },
        {
            question: "La eficacia de un algoritmo de búsqueda de registros en un archivo de datos que no está ordenado:",
            options: [
                "Orden constante.",
                "Orden lineal.",
                "Orden logarítmico.",
                "No tengo suficientes datos para responder.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Orden lineal."
        },
        {
            question: "La operación seek en un archivo:",
            options: [
                "Permite posicionarse directamente al final de un archivo.",
                "Permite posicionarse directamente en el primer registro del archivo.",
                "Permite conocer la posición actual dentro del archivo.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "Para actualizar un archivo maestro a partir de N archivos detalles:",
            options: [
                "Es necesario que los archivos detalles estén ordenados.",
                "Es necesario que el archivo maestro esté ordenado.",
                "Es necesario que todos los archivos tengan la misma estructura.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Es necesario que los archivos detalles estén ordenados."
        },
        {
            question: "Con respecto a los buffers de E/S:",
            options: [
                "Ocupan lugar en memoria RAM.",
                "El SO está encargado de manipularlos.",
                "Mejoran la performance en lecturas y escrituras.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Algunas de las anteriores."
        },
        {
            question: "Dado un archivo de índice secundario implementado con el método de listas invertidas:",
            options: [
                "Es posible asociar solo una cantidad acotada de claves primarias.",
                "En ocasiones se desperdicia espacio ya que se debe reservar el mismo.",
                "El método consiste en usar un archivo adicional de las claves primarias que son referenciadas desde el índice secundario.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "El método consiste en usar un archivo adicional de las claves primarias que son referenciadas desde el índice secundario."
        },
        {
            question: "Un índice secundario:",
            options: [
                "Relaciona una clave secundaria con una o más claves primarias.",
                "Puede repetir las claves.",
                "Puede organizarse con un árbol B*.",
                "Relaciona una clave secundaria con una o más claves primarias y Puede organizarse con un árbol B*.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Relaciona una clave secundaria con una o más claves primarias y Puede organizarse con un árbol B*."
        },
        {
            question: "Con respecto a los índices:",
            options: [
                "Al realizar bajas lógicas sobre un índice primario, es posible recuperar esos espacios con nuevas altas.",
                "Un índice es una estructura de datos (adicional al archivo de datos) que debe utilizar registros de longitud variable.",
                "Un índice permite imponer orden en un archivo de datos, sin que éste realmente se reacomode.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Un índice permite imponer orden en un archivo de datos, sin que éste realmente se reacomode."
        },
        {
            question: "Un archivo con registro de longitud variable:",
            options: [
                "Puede estar ordenado por algún criterio.",
                "Debe estar ordenado por algún criterio.",
                "Nunca puede ordenarse por algún criterio.",
                "Puede tener un carácter delimitador, por ejemplo '#'.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Algunas de las anteriores."
        },
        {
            question: "Una clave permite:",
            options: [
                "Identificar un elemento particular dentro de un archivo.",
                "Reconocer un conjunto de elementos con igual valor.",
                "Ordenar lógicamente al archivo por los atributos que la componen.",
                "Todas las anteriores son válidas.",
                "Algunas de las anteriores son válidas.",
                "Ninguna de las anteriores es válida."
            ],
            correctAnswer: "Algunas de las anteriores son válidas."
        },
        {
            question: "Para que tenga sentido un algoritmo de corte de control:",
            options: [
                "El archivo no necesita estar ordenado.",
                "El archivo puede estar ordenado.",
                "El archivo puede estar organizado por dispersión.",
                "El archivo debe estar organizado por dispersión.",
                "El archivo necesita al menos un índice asociado.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "Un archivo en el cual se accede a un registro luego de acceder a su predecesor en algún orden:",
            options: [
                "Puede ser un archivo serie.",
                "Puede ser un archivo secuencial.",
                "Debe ser un archivo serie.",
                "Debe ser un archivo secuencial.",
                "Algunas de las anteriores son correctas.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswer: "Algunas de las anteriores son correctas."
        },
        {
            question: "El concepto de fragmentación interna en un archivo:",
            options: [
                "Se puede dar solo en registros de longitud fija.",
                "Se puede dar solo en registros de longitud variable.",
                "Se puede dar solo en archivos ordenados de longitud variable.",
                "Se puede analizar solamente en archivos ordenados de longitud fija.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "La técnica de primer ajuste:",
            options: [
                "Permite borrar elementos de un archivo que contiene registros de longitud fija.",
                "Permite borrar elementos de un archivo que contiene registros de longitud variable.",
                "Permite hacer baja lógica.",
                "Permite hacer baja física.",
                "Algunas de las respuestas anteriores son correctas.",
                "Ninguna de las respuestas anteriores son válidas."
            ],
            correctAnswer: "Ninguna de las respuestas anteriores son válidas."
        },
        {
            question: "El proceso de baja lógica:",
            options: [
                "Está diseñado para borrar un registro de un archivo.",
                "Necesita que el archivo esté ordenado.",
                "Necesita que el archivo esté desordenado.",
                "Se aplica solamente a archivos con registros con longitud fija.",
                "Se aplica solamente a archivos con registros con longitud variable.",
                "Todas las anteriores.",
                "Alguna de las anteriores."
            ],
            correctAnswer: "Está diseñado para borrar un registro de un archivo."
        },
        {
            question: "El proceso de alta de registro con recuperación de espacio:",
            options: [
                "Se debe realizar con registros de longitud variable.",
                "Se debe realizar con registros de longitud fija.",
                "Se realiza solo con registros de longitud fija.",
                "Se realiza solo con registros de longitud variable.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "Un índice primario:",
            options: [
                "Se puede generar a partir de una clave unívoca de un registro.",
                "Se puede generar a partir de una clave no unívoca de un registro.",
                "Puede implementarse con una estructura de datos lineal.",
                "Debe implementarse con una estructura eficiente no lineal.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Puede implementarse con una estructura de datos lineal."
        },
        {
            question: "Un archivo con registro de longitud fija:",
            options: [
                "Puede tener un delimitador de fin de registro.",
                "Debe tener un delimitador de fin de registro.",
                "Puede tener registros del mismo tamaño.",
                "Puede tener registros con distinto tamaño.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "Para realizar un algoritmo de actualización maestro - detalle:",
            options: [
                "Se requiere al menos 2 archivos.",
                "Se requiere que los archivos estén ordenados.",
                "Se requiere que los archivos estén desordenados.",
                "Se requiere que al menos uno de los archivos esté ordenado.",
                "Se requiere que los archivos tengan la misma estructura.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Se requiere al menos 2 archivos."
        },
        {
            question: "El acceso promedio para recuperar un dato en un archivo desordenado:",
            options: [
                "Tiene orden lineal.",
                "Tiene orden logarítmico.",
                "Tiene orden constante (uno).",
                "Las opciones a y b son correctas.",
                "Ninguna opción es correcta."
            ],
            correctAnswer: "Tiene orden lineal."
        },
        {
            question: "Un algoritmo de corte de control:",
            options: [
                "Se puede aplicar sobre un archivo con registros de longitud fija.",
                "Se puede aplicar sobre un archivo con registros de longitud variable.",
                "Se aplica sobre un archivo con registros de longitud fija.",
                "Se aplica sobre un archivo con registros de longitud variable.",
                "Todas las anteriores son correctas.",
                "Algunas de las anteriores son correctas.",
                "Ninguna de las anteriores son correctas."
            ],
            correctAnswer: "Ninguna de las anteriores son correctas."
        },
        {
            question: "El proceso de merge de archivos:",
            options: [
                "Requiere que todos los archivos estén ordenados.",
                "Requiere que todos los archivos estén ordenados por el mismo criterio.",
                "Puede realizarse con los archivos ordenados.",
                "No puede realizarse sin los archivos ordenados.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Puede realizarse con los archivos ordenados."
        },
        {
            question: "La técnica de mejor ajuste:",
            options: [
                "Asigna un registro nuevo (alta) en una la posición que quepa de tamaño menor.",
                "Asigna un registro nuevo (alta) en una la posición que quepa de tamaño mayor.",
                "Asigna el registro al final del archivo si no hay lugar en posiciones intermedias.",
                "Todas las anteriores son correctas.",
                "Algunas de las respuestas anteriores son correctas.",
                "Ninguna de las respuestas anteriores son válidas."
            ],
            correctAnswer: "Algunas de las respuestas anteriores son correctas."
        },
        {
            question: "La técnica de primer ajuste:",
            options: [
                "Se aplica a archivos con registro de longitud fija.",
                "Se aplica a archivos con registro de longitud variable.",
                "Se combina con la técnica de baja física de datos.",
                "Todas las anteriores son correctas.",
                "Algunas de las respuestas anteriores son correctas.",
                "Ninguna de las respuestas anteriores son válidas."
            ],
            correctAnswer: "Se aplica a archivos con registro de longitud variable."
        },
        {
            question: "La técnica de mejor ajuste:",
            options: [
                "Permite borrar elementos de un archivo que contiene registros de longitud fija.",
                "Permite borrar elementos de un archivo que contiene registros de longitud variable.",
                "Permite hacer baja lógica.",
                "Permite hacer baja física.",
                "Algunas de las respuestas anteriores son correctas.",
                "Ninguna de las respuestas anteriores son válidas."
            ],
            correctAnswer: "Ninguna de las respuestas anteriores son válidas."
        },
        {
            question: "El proceso de alta de registro por peor ajuste:",
            options: [
                "Se puede realizar con registros de longitud fija.",
                "Se debe realizar con registros de longitud fija.",
                "Se puede realizar con registros de longitud variable.",
                "Se debe realizar con registros de longitud variable.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Se puede realizar con registros de longitud variable."
        },
        {
            question: "En un índice secundario:",
            options: [
                "Encontrar un registro es a veces más lento que sobre un índice primario.",
                "Encontrar un registro es igual de rápido que sobre un índice primario.",
                "Encontrar un registro puede ser más rápido que sobre un índice primario.",
                "Si la clave a buscar no se repitiera puede ser igual de rápida su búsqueda que en un índice unívoco.",
                "Algunas de las anteriores son válidas.",
                "Ninguna de las anteriores son válidas."
            ],
            correctAnswer: "Ninguna de las anteriores son válidas."
        },
        {
            question: "El concepto de fragmentación interna en un archivo:",
            options: [
                "Se puede dar solo en registros de longitud fija.",
                "Se puede dar solo en registros de longitud variable.",
                "Se puede dar solo en archivos ordenados de longitud variable.",
                "Se puede analizar solamente en archivos ordenados de longitud fija.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "La operación RESET():",
            options: [
                "Se realiza luego de la operación REWRITE().",
                "Se realiza previo a la operación ASSIGN().",
                "Abre un archivo para leer o escribir.",
                "Abre un archivo solo para escribir.",
                "Abre un archivo."
            ],
            correctAnswer: "Abre un archivo."
        },
        {
            question: "La operación REWRITE():",
            options: [
                "Se realiza luego de la operación RESET().",
                "Se realiza previo a la operación ASSIGN().",
                "Abre un archivo para leer o escribir.",
                "Abre un archivo solo para leer.",
                "Abre un archivo."
            ],
            correctAnswer: "Abre un archivo."
        },
        {
            question: "Un archivo en el cual se accede a un registro luego de acceder a su predecesor en orden físico:",
            options: [
                "Puede ser un archivo serie.",
                "Puede ser un archivo secuencial.",
                "Debe ser un archivo serie.",
                "Debe ser un archivo secuencial.",
                "Algunas de las anteriores son correctas.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswer: "Debe ser un archivo serie."
        },
        {
            question: "Para realizar un algoritmo de actualización maestro - detalle:",
            options: [
                "Se requiere al menos 2 archivos.",
                "Se requiere que los archivos estén ordenados.",
                "Se requiere que los archivos estén desordenados.",
                "Se requiere que al menos uno de los archivos esté ordenado.",
                "Se requiere que los archivos tengan la misma estructura.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Se requiere al menos 2 archivos."
        },
        {
            question: "Para que tenga sentido un algoritmo de corte de control:",
            options: [
                "El archivo no necesita estar ordenado.",
                "El archivo puede estar ordenado.",
                "El archivo puede estar organizado por dispersión.",
                "El archivo debe estar organizado por dispersión.",
                "El archivo necesita al menos un índice asociado.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "El proceso de alta de registro con recuperación de espacio:",
            options: [
                "Se debe realizar con registros de longitud variable.",
                "Se debe realizar con registros de longitud fija.",
                "Se realiza solo con registros de longitud fija.",
                "Se realiza solo con registros de longitud variable.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "El proceso de baja lógica:",
            options: [
                "Está diseñado para borrar un registro de un archivo.",
                "Necesita que el archivo esté ordenado.",
                "Necesita que el archivo esté desordenado.",
                "Se aplica solamente a archivos con registros con longitud fija.",
                "Se aplica solamente a archivos con registros con longitud variable.",
                "Todas las anteriores.",
                "Alguna de las anteriores."
            ],
            correctAnswer: "Está diseñado para borrar un registro de un archivo."
        },
        {
            question: "La técnica de primer ajuste:",
            options: [
                "Asigna un registro nuevo (alta) en una la posición que quepa de tamaño menor.",
                "Asigna un registro nuevo (alta) en una la posición que quepa de tamaño mayor.",
                "Asigna el registro al final del archivo si no hay lugar en posiciones intermedias.",
                "Todas las anteriores son correctas.",
                "Algunas de las respuestas anteriores son correctas.",
                "Ninguna de las respuestas anteriores son válidas."
            ],
            correctAnswer: "Asigna el registro al final del archivo si no hay lugar en posiciones intermedias."
        },
        {
            question: "La técnica de altas reutilizando espacio borrado, conocida como mejor ajuste, en archivos de longitud fija:",
            options: [
                "Asigna al registro en el primer espacio que encuentra donde quepa.",
                "Asigna el registro en el espacio donde quepa, de tamaño menor.",
                "Asigna el registro en el espacio donde quepa, de tamaño mayor.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "Un índice primario:",
            options: [
                "Se puede generar a partir de una clave unívoca de un registro.",
                "Se puede generar a partir de una clave no unívoca de un registro.",
                "Puede implementarse con una estructura de datos lineal.",
                "Debe implementarse con una estructura eficiente no lineal.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Puede implementarse con una estructura de datos lineal."
        },
        {
            question: "Una clave permite:",
            options: [
                "Identificar un elemento particular dentro de un archivo.",
                "Reconocer un conjunto de elementos con igual valor.",
                "Ordenar lógicamente el archivo por los atributos que la componen.",
                "Todas las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna."
            ],
            correctAnswer: "Algunas de las anteriores."
        },
        {
            question: "Un archivo secuencial:",
            options: [
                "A . Debe contener registros de longitud fija.",
                "B . Debe contener registros de longitud variable.",
                "C . Puede contener registros de longitud fija.",
                "D . Puede contener registros de longitud variable.",
                "Permite que a y b sean correctas.",
                "Permite que a y c sean correctas.",
                "Permite que c y d sean correctas.",
                "Permite que b y d sean correctas."
            ],
            correctAnswer: "Permite que c y d sean correctas."
        },
        {
            question: "El algoritmo de actualización maestro - detalle:",
            options: [
                "Se puede implementar si los archivos están ordenados.",
                "Se puede implementar con el archivo ordenado.",
                "Se puede implementar con los archivos detalles ordenados.",
                "Se puede implementar si los archivos están desordenados.",
                "Todas las anteriores.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Todas las anteriores."
        },
        {
            question: "El acceso promedio para recuperar un dato en un archivo desordenado:",
            options: [
                "Tiene orden lineal.",
                "Tiene orden logarítmico.",
                "Tiene orden constante.",
                "a y b correctas.",
                "Ninguna."
            ],
            correctAnswer: "Tiene orden lineal."
        },
        {
            question: "Un archivo serie:",
            options: [
                "Debe ser de longitud fija.",
                "Debe ser de longitud variable.",
                "Puede ser de longitud fija.",
                "Puede ser de longitud variable.",
                "Las opciones a y c son correctas.",
                "Las opciones b y c son correctas.",
                "Las opciones a y d son correctas.",
                "Las opciones c y d son correctas."
            ],
            correctAnswer: "Las opciones c y d son correctas."
        },
        {
            question: "Un archivo fragmentado:",
            options: [
                "Debe compactarse para optimizar el espacio usado.",
                "No debe compactarse para optimizar el espacio usado.",
                "A veces no puede compactarse.",
                "Nunca debe compactarse.",
                "Ninguna."
            ],
            correctAnswer: "Ninguna."
        },
        {
            question: "La técnica de primer ajuste:",
            options: [
                "Asigna un registro nuevo en la posición que quepa de tamaño menor.",
                "Asigna un registro nuevo en la posición que quepa de tamaño mayor.",
                "Asigna el registro al final del archivo si no hay lugar en posiciones intermedias.",
                "Todas las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna."
            ],
            correctAnswer: "Asigna un registro nuevo en la posición que quepa de tamaño menor."
        },
        {
            question: "La técnica de mejor ajuste:",
            options: [
                "Permite borrar elementos de un archivo que contiene registros de longitud fija.",
                "Permite borrar elementos de un archivo que contiene registros de longitud variable.",
                "Permite hacer baja lógica.",
                "Permite hacer baja física.",
                "Algunas de las anteriores.",
                "Ninguna."
            ],
            correctAnswer: "Ninguna."
        },
        {
            question: "La técnica de peor ajuste:",
            options: [
                "Se aplica a archivos con registros de longitud fija.",
                "Se aplica a archivos con registro de longitud variable.",
                "Se combina con la técnica de baja física de datos.",
                "Todas las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna."
            ],
            correctAnswer: "Se aplica a archivos con registro de longitud variable."
        },
        {
            question: "La técnica de peor ajuste:",
            options: [
                "Asigna un registro nuevo en la posición que quepa de tamaño menor.",
                "Asigna un registro nuevo en la posición que quepa de tamaño mayor.",
                "Asigna el registro al final del archivo si no hay lugar en posiciones intermedias.",
                "Todas las anteriores son correctas.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Algunas."
        },
        {
            question: "En un índice secundario:",
            options: [
                "Se puede implementar con un árbol binario de búsqueda.",
                "Se puede implementar con una lista invertida.",
                "Se puede implementar con un vector en memoria.",
                "Se puede implementar con una técnica de hashing.",
                "Todas las anteriores son válidas.",
                "Algunas de las anteriores."
            ],
            correctAnswer: "Algunas de las anteriores."
        },
        {
            question: "Un archivo con registro de longitud fija:",
            options: [
                "Puede tener un delimitador de fin de registro.",
                "Debe tener un delimitador de fin de registro.",
                "Puede tener registros del mismo tamaño.",
                "Puede tener registros con distinto tamaño.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "Para realizar un algoritmo de actualización maestro - detalle:",
            options: [
                "Se requiere al menos 2 archivos.",
                "Se requiere que los archivos estén ordenados.",
                "Se requiere que los archivos estén desordenados.",
                "Se requiere que al menos uno de los archivos esté ordenado.",
                "Se requiere que los archivos tengan la misma estructura.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Se requiere al menos 2 archivos."
        },
        {
            question: "El acceso promedio para recuperar un dato en un archivo desordenado:",
            options: [
                "Tiene orden lineal.",
                "Tiene orden logarítmico.",
                "Tiene orden constante (uno).",
                "Las opciones a y b son correctas.",
                "Ninguna opción es correcta."
            ],
            correctAnswer: "Tiene orden lineal."
        },
        {
            question: "Un algoritmo de corte de control:",
            options: [
                "Se puede aplicar sobre un archivo con registros de longitud fija.",
                "Se puede aplicar sobre un archivo con registros de longitud variable.",
                "Se aplica sobre un archivo con registros de longitud fija.",
                "Se aplica sobre un archivo con registros de longitud variable.",
                "Todas las anteriores son correctas.",
                "Algunas de las anteriores son correctas.",
                "Ninguna de las anteriores son correctas."
            ],
            correctAnswer: "Algunas de las anteriores son correctas."
        },
        {
            question: "El acceso promedio para recuperar un dato en un archivo desordenado:",
            options: [
                "Puede tener orden lineal.",
                "Puede tener orden logarítmico.",
                "Tiene orden constante (uno).",
                "Las opciones a y b son correctas.",
                "Ninguna opción es correcta."
            ],
            correctAnswer: "Ninguna opción es correcta."
        },
        {
            question: "El proceso de merge de archivos:",
            options: [
                "Requiere que todos los archivos estén ordenados.",
                "Requiere que todos los archivos estén ordenados por el mismo criterio.",
                "Puede realizarse con los archivos ordenados.",
                "No puede realizarse sin los archivos ordenados.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Puede realizarse con los archivos ordenados."
        },
        {
            question: "La técnica de mejor ajuste:",
            options: [
                "Asigna un registro nuevo (alta) en una la posición que quepa de tamaño menor.",
                "Asigna un registro nuevo (alta) en una la posición que quepa de tamaño mayor.",
                "Asigna el registro al final del archivo si no hay lugar en posiciones intermedias.",
                "Todas las anteriores son correctas.",
                "Algunas de las respuestas anteriores son correctas.",
                "Ninguna de las respuestas anteriores son válidas."
            ],
            correctAnswer: "Algunas de las respuestas anteriores son correctas."
        },
        {
            question: "La técnica de primer ajuste:",
            options: [
                "Se aplica a archivos con registro de longitud fija.",
                "Se aplica a archivos con registro de longitud variable.",
                "Se combina con la técnica de baja física de datos.",
                "Todas las anteriores son correctas.",
                "Algunas de las respuestas anteriores son correctas.",
                "Ninguna de las respuestas anteriores son válidas."
            ],
            correctAnswer: "Se aplica a archivos con registro de longitud variable."
        },
        {
            question: "La técnica de mejor ajuste:",
            options: [
                "Permite borrar elementos de un archivo que contiene registros de longitud fija.",
                "Permite borrar elementos de un archivo que contiene registros de longitud variable.",
                "Permite hacer baja lógica.",
                "Permite hacer baja física.",
                "Algunas de las respuestas anteriores son correctas.",
                "Ninguna de las respuestas anteriores son válidas."
            ],
            correctAnswer: "Ninguna de las respuestas anteriores son válidas."
        },
        {
            question: "El proceso de alta de registro por peor ajuste:",
            options: [
                "Se puede realizar con registros de longitud fija.",
                "Se debe realizar con registros de longitud fija.",
                "Se puede realizar con registros de longitud variable.",
                "Se debe realizar con registros de longitud variable.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Se puede realizar con registros de longitud variable."
        },
        {
            question: "En un índice secundario:",
            options: [
                "Encontrar un registro es a veces más lento que sobre un índice primario.",
                "Encontrar un registro es igual de rápido que sobre un índice primario.",
                "Encontrar un registro puede ser más rápido que sobre un índice primario.",
                "Si la clave a buscar no se repitiera puede ser igual de rápida su búsqueda que en un índice unívoco.",
                "Algunas de las anteriores son válidas.",
                "Ninguna de las anteriores son válidas."
            ],
            correctAnswer: "Ninguna de las anteriores son válidas."
        },
        {
            question: "Un archivo con registro de longitud variable:",
            options: [
                "Puede estar ordenado por algún criterio.",
                "Debe estar ordenado por algún criterio.",
                "Nunca puede ordenarse por algún criterio.",
                "Puede tener un carácter delimitador por ejemplo '#'.",
                "Alguna de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Alguna de las anteriores."
        },
        {
            question: "Una clave unívoca permite:",
            options: [
                "Identificar un elemento particular dentro de un archivo.",
                "Reconocer un conjunto de elementos con igual valor.",
                "Ordenar lógicamente al archivo por los atributos que la componen.",
                "Todas las anteriores.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Algunas."
        },
        {
            question: "El proceso de baja lógica:",
            options: [
                "Está diseñado para borrar un registro de un archivo.",
                "No necesita que el archivo esté ordenado.",
                "Necesita que el archivo esté desordenado.",
                "Se aplica solamente a archivos con registros con longitud fija.",
                "Se aplica solamente a archivos con registros con longitud variable.",
                "Todas las anteriores.",
                "Alguna de las anteriores."
            ],
            correctAnswer: "Está diseñado para borrar un registro de un archivo."
        },
        {
            question: "Un índice primario:",
            options: [
                "Se puede generar a partir de una clave unívoca de un registro.",
                "Se puede generar a partir de una clave no unívoca de un registro.",
                "Puede implementarse con una estructura de datos lineal.",
                "Debe implementarse con una estructura eficiente no lineal.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Puede implementarse con una estructura de datos lineal."
        },
        {
            question: "Suponga que se genera un árbol binario para implantar un índice de un archivo. El índice es por la clave unívoca legajo que ocupa 10 bytes. Entonces, cada nodo del árbol ocupará:",
            options: [
                "18 bytes.",
                "A lo sumo 18 bytes.",
                "Más de 21 bytes.",
                "10 bytes.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Más de 21 bytes."
        },
        {
            question: "Dado un archivo con registros de longitud fija. Suponga que tiene un índice correspondiente a una clave unívoca. Suponga que se crea un árbol de orden 200 para almacenar ese índice unívoco. Si archivo y el árbol generado tuvieran 300 elementos insertados entonces:",
            options: [
                "Si se creara un árbol B tendría la misma altura que crear un árbol B*.",
                "Si se creara un árbol B tendría mayor altura que un árbol B*.",
                "Si se creara un árbol B tendría menor altura que un árbol B*.",
                "No tengo datos suficientes para contestar la pregunta."
            ],
            correctAnswer: "Si se creara un árbol B tendría la misma altura que crear un árbol B*."
        },
        {
            question: "Un árbol B+ de prefijos simples:",
            options: [
                "A veces no tiene prefijos.",
                "Puede no tener prefijos simples.",
                "Si tiene prefijos simples, las hojas están enlazadas.",
                "Si no tiene prefijos simples, las hojas están enlazadas.",
                "Todas las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Todas las anteriores."
        },
        {
            question: "Un árbol B+:",
            options: [
                "Al realizar una inserción, puede tener nodos hojas con underflow.",
                "Al realizar una baja, puede tener nodos hojas con overflow.",
                "Al realizar una inserción, puede requerirse concatenación.",
                "Al realizarse una baja, puede requerirse división.",
                "Al realizarse un alta puede requerirse redistribución.",
                "Todas las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "Un árbol B+ de prefijos simples de orden M:",
            options: [
                "Se puede aplicar a una clave única, cuyo atributo es un string.",
                "Se puede aplicar a una clave secundaria, cuyo atributo es un string.",
                "Se puede aplicar a una clave primaria, cuyo atributo es un entero.",
                "Se puede aplicar solamente a una clave unívoca, cuyo atributo es string.",
                "Todas las anteriores son correctas.",
                "a y b son las opciones correctas.",
                "a, c y d son las opciones correctas.",
                "a, b y d son las opciones correctas.",
                "Ninguna de las opciones que tengo es correcta."
            ],
            correctAnswer: "a y b son las opciones correctas."
        }
    ],
    // OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    trees: [
        {
            question: "Una estructura tipo árbol:",
            options: [
                "Siempre tiene eficiencia de búsqueda logarítmica.",
                "Algunas veces tiene eficiencia de búsqueda constante.",
                "Si es B+ algunas veces tienen eficiencia de búsqueda logarítmica.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Algunas de las anteriores."
        },
        {
            question: "Un B*:",
            options: [
                "Se construye de manera similar a un árbol binario, salvo que en todos los nodos cabe más de un elemento.",
                "Se construye de manera similar a un árbol B.",
                "Puede ser la estructura superior de un árbol B+.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Puede ser la estructura superior de un árbol B+."
        },
        {
            question: "Un índice implementado con una lista invertida:",
            options: [
                "Debe proveer acceso rápido (eficiente) a un registro.",
                "Puede proveer a acceso rápido (eficiente) a un registro.",
                "Debe proveer acceso secuencial rápido a todos los archivos.",
                "Puede proveer acceso secuencial rápido a todos los registros.",
                "Todas.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Algunas."
        },
        {
            question: "Sea un árbol B de orden 100, el nodo X tiene 49 elementos, si se borra un elemento en dicho nodo:",
            options: [
                "Solo se borra el elemento.",
                "Se produce underflow y se deben concatenar el nodo X.",
                "Se produce underflow y se debe redistribuir el nodo X.",
                "Todas.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Algunas."
        },
        {
            question: "Se tiene un árbol B+ de orden M, suponga que se haya usado una de las claves como separador. Si la clave se borra:",
            options: [
                "Se debe borrar el separador.",
                "Se puede borrar el separador.",
                "No se toca el separador.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "No se toca el separador."
        },
        {
            question: "Se definen 4 índices para un archivo de datos. Dichos índices se implementan con árboles balanceados:",
            options: [
                "La eficiencia de los 4 árboles es de orden similar, es decir, orden lineal.",
                "Los 4 árboles tienen una eficiencia en términos matemáticos igual.",
                "Alguno de los árboles pueden ser más eficiente que otro en términos matemáticos.",
                "Todas.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Alguno de los árboles pueden ser más eficiente que otro en términos matemáticos.",
        },
        {
            question: "Sea un árbol B+ de orden M:",
            options: [
                "Ante una inserción se puede producir división.",
                "Ante una inserción con overflow siempre se produce división.",
                "Ante una inserción con overflow siempre se produce redistribución.",
                "Todas.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Ante una inserción se puede producir división."
        },
        {
            question: "Un árbol B+ de orden M:",
            options: [
                "Es un árbol multicamino.",
                "Es un árbol balanceado.",
                "Es un árbol que en cada nodo tiende a llenarse en al menos 2/3.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Algunas."
        },
        {
            question: "Un árbol binario de orden 4:",
            options: [
                "Puede desbalancearse.",
                "Puede balancearse.",
                "Si se emplean los algoritmos correctos puede quedar balanceado en altura.",
                "Si está desbalanceado no puede presentar una eficiencia de búsqueda de orden logarítmica.",
                "Todas.",
                "Algunas.",
                "No corresponde."
            ],
            correctAnswer: "Todas."
        },
        {
            question: "Si se implementa un algoritmo que permita generar un árbol B+ ese algoritmo:",
            options: [
                "No necesita manipular el puntero al nodo raíz.",
                "No necesita manipular el puntero al nodo de los elementos de datos menores.",
                "La estructura interna del árbol puede implementarse como B*.",
                "Todas.",
                "Algunas."
            ],
            correctAnswer: "La estructura interna del árbol puede implementarse como B*."
        },
        {
            question: "Cuando se realiza un alta en un árbol B:",
            options: [
                "Se puede realizar en un nodo interno.",
                "Siempre se produce overflow.",
                "Puede llegar a necesitar realizar una fusión de nodos.",
                "Siempre se llega hasta el nivel hoja.",
                "Ninguna."
            ],
            correctAnswer: "Siempre se llega hasta el nivel hoja."
        },
        {
            question: "Cuáles propiedades corresponden a un árbol B+ de prefijos simples:",
            options: [
                "Cada nodo puede tener como máximo M descendientes, siendo M el orden del árbol.",
                "Un nodo que tiene X descendientes debe tener X - 1 claves.",
                "Está siempre balanceado, sin importar los elementos que se inserten.",
                "Todas las anteriores."
            ],
            correctAnswer: "Todas las anteriores."
        },
        {
            question: "La eficiencia promedio de búsqueda en un árbol B tiene:",
            options: [
                "Orden lineal.",
                "Orden logarítmico.",
                "Orden constante.",
                "Ninguna."
            ],
            correctAnswer: "Orden logarítmico."
        },
        {
            question: "En un árbol B de orden 50, cuando quedan 25 elementos en un nodo:",
            options: [
                "Se produce underflow y necesariamente debe concatenarse con un adyacente hermano.",
                "Se produce underflow y necesariamente debe redistribuirse con un adyacente hermano.",
                "Se produce underflow y la operación a realizar depende del estado de los nodos adyacentes hermanos.",
                "No se produce underflow."
            ],
            correctAnswer: "No se produce underflow."
        },
        {
            question: "Un índice primario es:",
            options: [
                "Una estructura de datos adicional que contiene el mismo volumen de información que el archivo original.",
                "Una estructura de datos adicional que permite ordenar físicamente el archivo original.",
                "Una estructura de datos adicional que agiliza el acceso a la información del archivo.",
                "Una estructura de datos adicional que puede contener mayor volumen de información que el archivo original.",
                "Ninguna."
            ],
            correctAnswer: "Una estructura de datos adicional que agiliza el acceso a la información del archivo."
        },
        {
            question: "Un árbol binario:",
            options: [
                "Es una estructura de datos lineal, en la cual cada nodo puede tener a lo sumo dos hijos.",
                "Es una estructura de datos no lineal que siempre se encuentra balanceada.",
                "Es una estructura de datos no lineal donde cada nodo tiene dos hijos.",
                "Es una estructura de datos lineal que se puede desbalancear.",
                "Es una estructura de datos no lineal que puede llegar a tener un orden lineal de búsqueda."
            ],
            correctAnswer: "Es una estructura de datos no lineal que puede llegar a tener un orden lineal de búsqueda."
        },
        {
            question: "Un índice secundario es:",
            options: [
                "Una estructura de datos adicional que permite asociar una o varias claves primarias con una clave secundaria.",
                "Una estructura de datos adicional que contiene el mismo volumen de información que el archivo original.",
                "Una estructura de datos original que ordena físicamente el archivo original.",
                "Una estructura de datos adicional que permite relacionar una clave secundaria con una sola clave primaria.",
                "Todas."
            ],
            correctAnswer: "Una estructura de datos adicional que permite asociar una o varias claves primarias con una clave secundaria."
        },
        {
            question: "Cuando se realizan bajas en un árbol B:",
            options: [
                "Siempre se aplica redistribución.",
                "Siempre se aplica fusión.",
                "Siempre se accede a nivel hoja.",
                "La altura del árbol siempre se reduce.",
                "Algunas veces puede llegar a reducir la altura del árbol.",
                "Hay más de una respuesta correcta."
            ],
            correctAnswer: "Hay más de una respuesta correcta."
        },
        {
            question: "En un árbol B:",
            options: [
                "Cada nodo contiene X elementos y X - 1 hijos.",
                "En algún caso la raíz puede contener un solo hijo.",
                "Los nodos que contienen X elementos, contienen X+1 hijos.",
                "Los nodos hojas pueden no estar al mismo nivel.",
                "Ninguna es correcta.",
                "Hay más de una correcta."
            ],
            correctAnswer: "Ninguna es correcta."
        },
        {
            question: "En un árbol B+:",
            options: [
                "Para buscar un elemento siempre se llega al nivel hoja.",
                "Los nodos hojas no deben estar enlazados entre sí.",
                "Los nodos internos conforman un índice para llegar a un elemento buscado.",
                "Hay más de una correcta.",
                "Ninguna."
            ],
            correctAnswer: "Hay más de una correcta."
        },
        {
            question: "Con respecto a la paganización de un árbol binario:",
            options: [
                "Cada página debe contener como mínimo 16 claves.",
                "Divide el árbol binario en páginas que almacena en memoria principal.",
                "Para que sea más eficiente es necesario que las páginas se ubiquen en direcciones cercanas.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Para que sea más eficiente es necesario que las páginas se ubiquen en direcciones cercanas."
        },
        {
            question: "Un árbol que no está balanceado:",
            options: [
                "Puede ser un árbol binario.",
                "Puede ser un árbol multicamino.",
                "Puede ser un árbol binario paginado.",
                "No puede ser un árbol B+.",
                "No puede ser un árbol B*.",
                "Todas las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Todas las anteriores."
        },
        {
            question: "Un árbol B de orden 200:",
            options: [
                "En una hoja, puede tener hasta 99 elementos.",
                "En una hoja, puede tener más de 99 elementos.",
                "En una hoja, puede tener menos de 99 elementos.",
                "La raíz siempre tiene hijos.",
                "La raíz tiene hijos si el árbol tiene más de 50 elementos."
            ],
            correctAnswer: "En una hoja, puede tener más de 99 elementos."
        },
        {
            question: "Un árbol B+ de prefijos simples:",
            options: [
                "Se usa para representar un índice de un archivo.",
                "Se usa para lograr acceso secuencial rápido a un archivo.",
                "Optimiza el espacio requerido para almacenar el árbol.",
                "Todas las anteriores son correctas."
            ],
            correctAnswer: "Todas las anteriores son correctas."
        },
        {
            question: "Los árboles B*:",
            options: [
                "Permiten localizar un registro de manera más eficiente que un árbol B, porque además permiten una búsqueda secuencial eficiente.",
                "Permiten localizar un registro de manera más eficiente que un árbol B, cuando ambos árboles tienen un solo nodo respectivamente.",
                "Completan los nodos en al menos 2/3 de su capacidad.",
                "Los nodos terminales no aparecen en igual nivel."
            ],
            correctAnswer: "Completan los nodos en al menos 2/3 de su capacidad."
        },
        {
            question: "Dado un árbol B+:",
            options: [
                "Todos sus nodos siempre tienen claves del archivo.",
                "Se lo puede usar solo para recorrer secuencialmente al archivo.",
                "Es más eficiente que un árbol B en la búsqueda de un elemento.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "Cuáles de las siguientes definiciones pueden atribuirse a un árbol binario:",
            options: [
                "Es una estructura de datos no lineal, en la cual cada nodo puede tener a lo sumo dos hijos.",
                "Es una estructura de datos no lineal que siempre se encuentra balanceada.",
                "Es una estructura de datos no lineal que se encuentra balanceada en altura.",
                "Es una estructura de datos no lineal en la cual cada nodo puede tener un número de hijos ilimitado."
            ],
            correctAnswer: "Es una estructura de datos no lineal, en la cual cada nodo puede tener a lo sumo dos hijos."
        },
        {
            question: "Un árbol multicamino es:",
            options: [
                "Una estructura de datos no lineal en la cual cada nodo puede tener un número determinado de hijos.",
                "Es una estructura de datos no lineal que siempre se encuentra balanceada.",
                "Es una estructura de datos no lineal que se encuentra balanceada en altura.",
                "Es una estructura de datos no lineal en la cual cada nodo puede tener a lo sumo 5 hijos."
            ],
            correctAnswer: "Una estructura de datos no lineal en la cual cada nodo puede tener un número determinado de hijos."
        },
        {
            question: "Cuáles propiedades corresponden a un árbol B:",
            options: [
                "Cada nodo puede tener como máximo M descendientes siendo M el orden del árbol.",
                "Un nodo que tiene X descendientes debe tener X - 1 claves.",
                "Está siempre balanceado, sin importar los elementos que se inserten.",
                "Todas las propiedades anteriores corresponden a un árbol B."
            ],
            correctAnswer: "Todas las propiedades anteriores corresponden a un árbol B."
        },
        {
            question: "Un árbol B*:",
            options: [
                "Es más eficiente en el algoritmo de búsqueda que un árbol B.",
                "La altura puede ser inferior a la de un árbol B porque los elementos se distribuyen más eficientemente en los nodos.",
                "La altura puede ser superior a la de un árbol B porque los elementos se distribuyen más eficientemente en los nodos.",
                "Permite acceder secuencialmente a los elementos del árbol."
            ],
            correctAnswer: "La altura puede ser inferior a la de un árbol B porque los elementos se distribuyen más eficientemente en los nodos."
        },
        {
            question: "Cuando se borra un elemento de un nodo en un árbol B:",
            options: [
                "El elemento debe estar en un nodo terminal, si no lo está debe ser llevado a un nodo terminal.",
                "A veces puede producirse underflow en el nodo y que esto produzca a una redistribución.",
                "A veces puede producirse underflow en un nodo y que esto produzca una concatenación.",
                "Todas las respuestas son correctas."
            ],
            correctAnswer: "Todas las respuestas son correctas."
        },
        {
            question: "Si el orden de un árbol B es 100 y al borrar un elemento quedan 48 en ese nodo:",
            options: [
                "Se produce underflow y necesariamente debe concatenarse con un adyacente hermano.",
                "Se produce underflow y necesariamente debe redistribuirse con un adyacente hermano.",
                "Se produce underflow y la operación a realizar depende del estado de los nodos adyacentes hermanos.",
                "No se produce underflow."
            ],
            correctAnswer: "Se produce underflow y la operación a realizar depende del estado de los nodos adyacentes hermanos."
        },
        {
            question: "Cuáles de las siguientes definiciones pueden atribuirse a un árbol binario:",
            options: [
                "Es una estructura de datos lineal en la cual cada nodo puede tener a lo sumo dos hijos.",
                "Es una estructura de datos no lineal que siempre se encuentra balanceada.",
                "Es una estructura de datos no lineal que se encuentra balanceada en altura.",
                "Es una estructura de datos no lineal en la cual cada nodo puede tener un número de hijos ilimitado.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Es una estructura de datos no lineal que se encuentra balanceada en altura."
        },
        {
            question: "Un árbol multicamino es:",
            options: [
                "Una estructura de datos lineal en la cual cada nodo puede tener un número indeterminado de hijos.",
                "Una estructura de datos no lineal que siempre se encuentra balanceada.",
                "Una estructura de datos no lineal que se encuentra balanceada en altura.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "La eficiencia promedio de búsqueda en un archivo a partir de disponer de un archivo implementado con un árbol del tipo B (B, B+, B*):",
            options: [
                "Orden lineal.",
                "Orden logarítmico.",
                "1.",
                "No dispongo datos para contestar."
            ],
            correctAnswer: "Orden logarítmico."
        },
        {
            question: "Si el orden de un árbol B es 100, y al borrar un elemento quedan 49 en ese nodo:",
            options: [
                "Se produce underflow y necesariamente debe concatenarse con un adyacente hermano.",
                "Se produce underflow y necesariamente debe redistribuirse con un adyacente hermano.",
                "Se produce underflow y la operación a realizar depende del estado de los nodos adyacentes hermanos.",
                "No se produce underflow."
            ],
            correctAnswer: "No se produce underflow."
        },
        {
            question: "Dado un árbol B+:",
            options: [
                "Todos sus nodos siempre tienen el registro completo del archivo.",
                "Se lo puede usar solo para recorrer secuencialmente al archivo.",
                "Puede ser más ineficiente que un árbol B en la búsqueda de un elemento.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Puede ser más ineficiente que un árbol B en la búsqueda de un elemento."
        },
        {
            question: "Un árbol binario:",
            options: [
                "Tiene igual eficiencia para la búsqueda de información que un árbol B*.",
                "Tiene igual eficiencia para la búsqueda de información que un árbol B* con prefijos simples.",
                "Se desbalancean fácilmente.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Se desbalancean fácilmente."
        },
        {
            question: "Un árbol B+ de prefijos simples:",
            options: [
                "Se usa para ordenar físicamente un archivo.",
                "Se usa para lograr acceso rápido a la información de un archivo.",
                "Se usa para lograr acceso secuencial rápido a un archivo.",
                "Se usa para lograr acceso directo a elementos de un archivo.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Se usa para lograr acceso secuencial rápido a un archivo."
        },
        {
            question: "Cuáles propiedades corresponden a un árbol B* de orden M?",
            options: [
                "La diferencia máxima de altura entre los dos subárboles cualesquiera que comparten raíz es 1.",
                "Un nodo terminal tiene como mínimo [M/2] - 1 claves.",
                "Cada nodo puede tener como máximo M hijos.",
                "Un nodo no terminal que tiene K descendientes debe tener K - 1 claves.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Un nodo no terminal que tiene K descendientes debe tener K - 1 claves."
        },
        {
            question: "Un árbol AVL es:",
            options: [
                "Un árbol n-ario (n >= 2).",
                "Un árbol B.",
                "Un árbol binario paginado.",
                "Un árbol binario balanceado en altura (BA(1)).",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Un árbol binario balanceado en altura (BA(1))."
        },
        {
            question: "Al trabajar con un árbol B:",
            options: [
                "Cuando sucede overflow, algunas veces se debe realizar el proceso de división del nodo.",
                "Cuando sucede underflow, algunas veces se debe realizar el proceso de concatenación del nodo.",
                "Cuando sucede overflow, algunas veces se debe realizar el proceso de redistribución del nodo.",
                "Cuando sucede underflow, algunas veces se debe realizar el proceso de redistribución del nodo.",
                "Cuando sucede underflow, algunas veces se debe realizar el proceso de concatenación del nodo. Cuando sucede underflow, algunas veces se debe realizar el proceso de redistribución del nodo.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Cuando sucede underflow, algunas veces se debe realizar el proceso de concatenación del nodo. Cuando sucede underflow, algunas veces se debe realizar el proceso de redistribución del nodo."
        },
        {
            question: "Con respecto a un árbol B*:",
            options: [
                "Es más eficiente realizar una búsqueda sobre un árbol B que sobre un árbol B*.",
                "La altura puede ser inferior a la de un árbol B+ porque los elementos se distribuyen más eficientemente en los nodos.",
                "Permite acceder secuencialmente a los elementos.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "La altura puede ser inferior a la de un árbol B+ porque los elementos se distribuyen más eficientemente en los nodos."
        },
        {
            question: "Cuando se inserta un elemento en un árbol binario:",
            options: [
                "Siempre se debe generar un nuevo nodo.",
                "Siempre es necesario acceder al nivel hoja.",
                "Algunas veces puede llegar a reducir la altura del árbol.",
                "Siempre aumenta la altura del árbol.",
                "Nunca aumenta la altura del árbol.",
                "Hay más de una respuesta correcta."
            ],
            correctAnswer: "Hay más de una respuesta correcta."
        },
        {
            question: "Cuando se realiza un alta en un árbol B:",
            options: [
                "Se puede realizar en un nodo interno.",
                "Siempre produce overflow.",
                "Puede llegar a necesitar de realizar una fusión de nodos.",
                "Siempre se llega hasta el nivel hoja.",
                "Ninguna respuesta es la correcta."
            ],
            correctAnswer: "Siempre se llega hasta el nivel hoja."
        },
        {
            question: "En un árbol B:",
            options: [
                "Cada nodo contiene X elementos y X - 1 hijos.",
                "En algunos casos la raíz puede tener un solo hijo.",
                "Los nodos que contienen X elementos, contienen X+1 hijos.",
                "Los nodos hojas pueden no estar al mismo nivel.",
                "Ninguna respuesta es la correcta.",
                "Hay más de una opción correcta."
            ],
            correctAnswer: "Ninguna respuesta es la correcta."
        },
        {
            question: "Un árbol B*:",
            options: [
                "Distribuye las claves de manera más eficiente que un árbol B.",
                "La altura puede ser inferior a la de un árbol B+ porque los elementos se distribuyen más eficientemente en los nodos.",
                "La altura puede ser superior a la de un árbol B porque los elementos se distribuyen más eficientemente en los nodos.",
                "Permite acceder secuencialmente a los elementos del árbol.",
                "Hay dos respuestas anteriores correctas."
            ],
            correctAnswer: "Hay dos respuestas anteriores correctas."
        },
        {
            question: "Cuando se borra un elemento de un nodo en un árbol B:",
            options: [
                "El elemento debe estar en un nodo terminal, si no lo está debe ser llevado a un nodo terminal.",
                "A veces puede producirse underflow en el nodo, y que esto produzca a una redistribución.",
                "Puede borrarse un elemento que no esté necesariamente ubicado en un nodo terminal.",
                "Alguna de las anteriores respuestas son correctas."
            ],
            correctAnswer: "Alguna de las anteriores respuestas son correctas."
        },
        {
            question: "Suponga que se genera un árbol binario para implantar un índice de un archivo. El índice es por la clave unívoca legajo que ocupa 10 bytes. Entonces, cada nodo del árbol ocupará:",
            options: [
                "18 bytes.",
                "A lo sumo 18 bytes.",
                "Más de 21 bytes.",
                "10 bytes.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Más de 21 bytes."
        },
        {
            question: "Cuando un árbol B tiende a llenarse:",
            options: [
                "Se debe procurar más espacio para el archivo que lo contiene, reacomodando todos los nodos.",
                "Se debe procurar más espacio para el archivo que lo contiene, reacomodando el nodo padre y sus hermanos.",
                "Se debe procurar más espacio para el archivo.",
                "Todas las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "Cuáles de las siguientes propiedades NO corresponde a un árbol B* de orden M:",
            options: [
                "Cada nodo del árbol puede contener máximo M descendientes y M - 1 elementos.",
                "La raíz no posee descendientes o posee [M/2] descendientes.",
                "Todos los nodos terminales se encuentran al mismo nivel.",
                "Los nodos no terminales ni raíz tienen más de [M/2] y a lo sumo M descendientes.",
                "Un nodo con X descendientes contienen X - 1 elementos."
            ],
            correctAnswer: "La raíz no posee descendientes o posee [M/2] descendientes."
        },
        {
            question: "La eficiencia de búsqueda de un árbol B:",
            options: [
                "Es de orden lineal.",
                "Puede ser de orden lineal, bajo alguna circunstancia del árbol generado.",
                "Es de orden logarítmico.",
                "Es de orden constante (orden del árbol).",
                "b y c son correctas.",
                "b, c y d son correctas.",
                "Ninguna opción es correcta."
            ],
            correctAnswer: "Es de orden logarítmico."
        },
        {
            question: "Dado un archivo con registros de longitud fija. Suponga que tiene un índice correspondiente a una clave unívoca. Suponga que se crea un árbol de orden 200 para almacenar ese índice unívoco. Si archivo y el árbol generado tuvieran 300 elementos insertados entonces:",
            options: [
                "Si se creara un árbol B tendría la misma altura que crear un árbol B*.",
                "Si se creara un árbol B tendría mayor altura que un árbol B*.",
                "Si se creara un árbol B tendría menor altura que un árbol B*.",
                "No tengo datos suficientes para contestar la pregunta."
            ],
            correctAnswer: "Si se creara un árbol B tendría menor altura que un árbol B*."
        },
        {
            question: "Un árbol B+ de prefijos simples:",
            options: [
                "A veces no tiene prefijos.",
                "Puede no tener prefijos simples.",
                "Si tiene prefijos simples, las hojas están enlazadas.",
                "Si no tiene prefijos simples, las hojas están enlazadas.",
                "Todas las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Todas las anteriores."
        },
        {
            question: "Un árbol B+:",
            options: [
                "Al realizar una inserción, puede tener nodos hojas con underflow.",
                "Al realizar una baja, puede tener nodos hojas con overflow.",
                "Al realizar una inserción, puede requerirse concatenación.",
                "Al realizarse una baja, puede requerirse división.",
                "Al realizarse un alta puede requerirse redistribución.",
                "Todas las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "Un árbol B+ de prefijos simples de orden M:",
            options: [
                "Se puede aplicar a una clave única, cuyo atributo es un string.",
                "Se puede aplicar a una clave secundaria, cuyo atributo es un string.",
                "Se puede aplicar a una clave primaria, cuyo atributo es un entero.",
                "Se puede aplicar solamente a una clave unívoca, cuyo atributo es string.",
                "Todas las anteriores son correctas.",
                "a y b son las opciones correctas.",
                "a, c y d son las opciones correctas.",
                "a, b y d son las opciones correctas.",
                "Ninguna de las opciones que tengo es correcta."
            ],
            correctAnswer: "a y b son las opciones correctas."
        },
        {
            question: "Un árbol binario:",
            options: [
                "Puede tener eficiencia de búsqueda logarítmica.",
                "Puede estar balanceado si tiene 127 elementos.",
                "Puede tener eficiencia de búsqueda lineal.",
                "Todas las anteriores son correctas.",
                "Algunas de las anteriores son válidas.",
                "Ninguna de las anteriores son válidas."
            ],
            correctAnswer: "Todas las anteriores son correctas."
        },
        {
            question: "Cuáles de las siguientes propiedades NO corresponde a un árbol B* de orden M:",
            options: [
                "Cada nodo del árbol puede contener máximo M descendientes y M - 1 elementos.",
                "La raíz no posee descendientes o posee [M/2] descendientes.",
                "Todos los nodos terminales se encuentran al mismo nivel.",
                "Los nodos no terminales ni raíz tienen más de [M/2] y a lo sumo M descendientes.",
                "Un nodo con X descendientes contienen X - 1 elementos."
            ],
            correctAnswer: "La raíz no posee descendientes o posee [M/2] descendientes."
        },
        {
            question: "Dado un árbol B* de orden M:",
            options: [
                "El nodo raíz pude tener solamente 3 hijos en algún momento de su construcción.",
                "Un nodo terminal puede producir un underflow, si al borrar un elemento quedan 48 en el nodo.",
                "Puede ser que un nodo terminal con 50 elementos, tenga 51 hijos.",
                "Todas las respuestas anteriores son correctas.",
                "Las opciones a y b son correctas.",
                "Las opciones b y c son correctas.",
                "Las opciones a y c son correctas.",
                "Ninguna opción anterior es correcta."
            ],
            correctAnswer: "El nodo raíz pude tener solamente 3 hijos en algún momento de su construcción."
        },
        {
            question: "Una inserción en un nodo cualquiera (terminal) de árbol B:",
            options: [
                "Puede generar overflow.",
                "Puede generar división de un solo nodo.",
                "Pueden dividirse tres nodos.",
                "Todas las anteriores son correctas.",
                "Las dos primeras son correctas.",
                "La segunda y tercera son correctas.",
                "La primera y la tercera son correctas."
            ],
            correctAnswer: "Todas las anteriores son correctas."
        },
        {
            question: "Dado un árbol B de prefijos simples de orden 100:",
            options: [
                "Un nodo entra en underflow si se borra un elemento y solo quedan 48.",
                "Un nodo no terminal ni raíz tendrá al menos [M/2] hijos.",
                "Puede ser que la raíz tenga solamente dos hijos en algún momento.",
                "Todas las anteriores son correctas.",
                "Algunas de las anteriores son correctas.",
                "Ninguna de las anteriores son correctas."
            ],
            correctAnswer: "Algunas de las anteriores son correctas."
        },
        {
            question: "Un árbol B:",
            options: [
                "Puede ser un árbol AVL.",
                "Puede guardarse en memoria RAM.",
                "Puede implementar una clave no unívoca.",
                "Puede tener acceso secuencial eficiente y rápido.",
                "Todas las anteriores son correctas.",
                "Algunas de las anteriores son correctas.",
                "Ninguna de las anteriores son correctas."
            ],
            correctAnswer: "Algunas de las anteriores son correctas."
        },
        {
            question: "Cuáles de las siguientes propiedades NO corresponde a un árbol B+ de orden M:",
            options: [
                "Cada nodo del árbol puede contener como máximo M descendientes y M - 1 elementos.",
                "La raíz no posee descendientes o tiene al menos dos.",
                "Un nodo con X descendientes tiene X - 1 elementos.",
                "Los nodos terminales tiene como máximo M - 1 elementos.",
                "Los nodos no terminales pueden contener como mínimo [2M/3] descendientes.",
                "Los nodos no terminales puede contener como mínimo [M/2] descendientes.",
                "Todas las respuestas anteriores corresponden a propiedades de árboles B+."
            ],
            correctAnswer: "Todas las respuestas anteriores corresponden a propiedades de árboles B+."
        },
        {
            question: "Cuando un árbol B+ de prefijos simples tiende a llenarse:",
            options: [
                "Se debe procurar más espacio para el archivo que lo contiene, reacomodando todos los nodos.",
                "Se debe procurar más espacio para el archivo que lo contiene, reacomodando el nodo padre y sus hermanos.",
                "Se debe procurar más espacio para el archivo.",
                "Todas las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "Un árbol B+:",
            options: [
                "Siempre tiene más claves que un árbol B, para el mismo archivo de datos.",
                "Siempre tiene más claves que un árbol B*, para el mismo archivo de datos.",
                "Siempre es más alto que un árbol B.",
                "Siempre es más alto que un árbol B*.",
                "Todas de las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna."
            ],
            correctAnswer: "Ninguna."
        },
        {
            question: "Cuando se inserta un elemento en un árbol binario:",
            options: [
                "Siempre se debe generar un nuevo nodo.",
                "Siempre es necesario acceder al nivel hoja.",
                "Puede siempre insertarse a derecha del padre",
                "Puede aumentar la altura del árbol.",
                "Todas las anteriores son correctas.",
                "Algunas de las anteriores son correctas.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswer: "Todas las anteriores son correctas."
        },
        {
            question: "Un árbol que se encuentra balanceado:",
            options: [
                "Puede ser un árbol binario.",
                "Puede ser un árbol multicamino.",
                "Puede ser un árbol B+.",
                "Puede ser un árbol B*.",
                "Todas las anteriores son correctas.",
                "c y de son correctas.",
                "b, c y d son correctas.",
                "b y d son correctas.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswer: "Todas las anteriores son correctas."
        }
    ],
    hashing: [
        {
            question: "Una colisión:",
            options: [
                "Puede no ocurrir si hay al menos dos claves sinónimos para una función de hashing.",
                "Puede ocurrir si hay al menos dos claves sinónimos para una función de hashing.",
                "Puede utilizar un algoritmo para tratamiento de registros en saturación.",
                "Puede no utilizar un algoritmo para tratamiento de registros en saturación.",
                "Todas.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Puede ocurrir si hay al menos dos claves sinónimos para una función de hashing."
        },
        {
            question: "La DE:",
            options: [
                "Es un parametro de eficiencia en cualquier tipo de hashing.",
                "Es un parámetro de eficiencia solo para un tipo de hashing.",
                "Permite detectar si la cantidad de espacio libre en el archivo puede crecer.",
                "Permite detectar si la cantidad de elementos en el archivo puede crecer.",
                "Algunas.",
                "Ninguna.",
            ],
            correctAnswer: "Es un parámetro de eficiencia en cualquier tipo de hashing."
        },
        {
            question: "Una colision:",
            options: [
                "Puede no ocurrir si hay al menos dos claves sinónimos para una función de hashing.",
                "Puede ocurrir si hay al menos dos claves sinónimos para una función de hashing.",
                "Puede utilizar un algoritmo para tratamiento de registros en saturación.",
                "Puede no utilizar un algoritmo para tratamiento de registros en saturación.",
                "Todas.",
                "Algunas.",
            ],
            correctAnswer: "Puede ocurrir si hay al menos dos claves sinónimos para una función de hashing."
        },
        {
            question: "Cuáles de los siguientes parámetros afecta la eficiencia de la dispersión:",
            options: [
                "Cantidad de elementos del archivo.",
                "Cantidad de espacio para almacenar el archivo.",
                "Densidad de empaquetamiento.",
                "Función de dispersión.",
                "Algoritmos para el tratamiento de registros en saturación.",
                "Todas.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Todas."
        },
        {
            question: "Si se quiere dispersar un archivo de 40.000 elementos:",
            options: [
                "Se requiere un archivo de 40.000 cubetas.",
                "Se requiere un archivo de al menos 40.000 cubetas.",
                "Se requiere un archivo de menos de 40.000 cubetas.",
                "Todas.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Ninguna."
        },
        {
            question: "Si se dispone la FD de un archivo:",
            options: [
                "Siempre se puede calcular la cantidad probable de registros en saturación.",
                "No se puede calcular la cantidad probable de registros en saturación.",
                "Si se calcula la cantidad probable de registros en saturación, la FD fue mayor que 1.",
                "Si se calcula la cantidad probable de registros en saturación, la FD fue menor que 1.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Ninguna."
        },
        {
            question: "A partir de un archivo dispersado con hashing extensible:",
            options: [
                "Siempre es posible agregar elementos al archivo.",
                "Algunas veces es posible agregar elementos al archivo.",
                "Se puede utilizar dispersión doble para tratar registros en saturación.",
                "No se puede utilizar saturación progresiva para tratar registros en saturación.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Algunas."
        },
        {
            question: "Si se desea ordenar físicamente un archivo:",
            options: [
                "Se puede usar hashing extensible.",
                "Se puede utilizar dispersión doble para tratar registros en saturación.",
                "Se puede utilizar saturación progresiva para tratar registros en saturación.",
                "Se puede utilizar saturación progresiva encadenada para tratar registros en saturación.",
                "La DE debe ser menor o igual a 1.",
                "Todas."
            ],
            correctAnswer: "La DE debe ser menor o igual a 1."
        },
        {
            question: "El método de tratamiento de desbordes:",
            options: [
                "Afecta la DE.",
                "Puede afectar la DE.",
                "Afecta la DE en casos especiales.",
                "Afecta la DE en la mayoría de los casos.",
                "Todas.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Ninguna."
        },
        {
            question: "Una función de hash perfecta:",
            options: [
                "Es difícil de conseguir.",
                "Necesita de un algoritmo para tratamiento de registros en saturación.",
                "Puede tener menos del 1% de claves sinónimos.",
                "No tiene claves sinónimas.",
                "Todas.",
                "Algunas."
            ],
            correctAnswer: "No tiene claves sinónimas."
        },
        {
            question: "Si ocurrió saturación:",
            options: [
                "Hubo colisión.",
                "No hubo colisión.",
                "Pudo haber ocurrido colisión.",
                "Hay más de 2 claves sinónimo.",
                "Todas.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Hubo colisión."
        },
        {
            question: "Una colisión se produce:",
            options: [
                "Cuando dos registros diferentes obtienen de la función de hash la misma dirección de disco.",
                "Cuando dos registros iguales obtienen de la función de hash direcciones diferentes de disco.",
                "Cuando un registro no cabe en el lugar donde debe almacenarse de acuerdo al resultado de la función de hash.",
                "Cuando dos registros diferentes obtienen de la función de hash direcciones diferentes de disco."
            ],
            correctAnswer: "Cuando dos registros diferentes obtienen de la función de hash la misma dirección de disco."
        },
        {
            question: "La eficiencia promedio de búsqueda en un archivo a partir de estar organizado mediante política de hashing:",
            options: [
                "Orden lineal.",
                "Orden logarítmico.",
                "Orden constante.",
                "No dispongo de datos para contestar la pregunta."
            ],
            correctAnswer: "Orden constante."
        },
        {
            question: "La eficiencia de búsqueda de un registro en un archivo organizado mediante hashing estático tiene:",
            options: [
                "Orden lineal.",
                "Algunas veces es uno.",
                "Siempre es uno.",
                "Orden logarítmico."
            ],
            correctAnswer: "Algunas veces es uno."
        },
        {
            question: "La técnica de saturación progresiva encadenada:",
            options: [
                "Evita la generación de colisiones.",
                "Necesita que cada cubeta tenga capacidad para dos o más registros.",
                "Requiere al menos de dos funciones de hash para el tratamiento de los desbordes.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "La densidad de empaquetamiento se puede definir como:",
            options: [
                "DE = cantidad de registros / (cantidad de cubetas * capacidad de cubeta).",
                "La proporción de espacio asignado al archivo que en realidad almacena registros.",
                "La relación entre la cantidad de registros y la cantidad de cubetas del archivo.",
                "Ninguna de las anteriores.",
                "Todas las anteriores."
            ],
            correctAnswer: "Todas las anteriores."
        },
        {
            question: "La densidad de empaquetamiento en un archivo con registros con longitud variable:",
            options: [
                "Se calcula como el cociente entre la cantidad de registros del archivo y la cantidad de espacio disponible.",
                "Es útil para establecer la proporción de espacio del archivo asignado que en realidad almacena registros.",
                "A medida que disminuye, aumenta la probabilidad de overflow.",
                "A medida que disminuye, hay más desperdicio de espacio.",
                "Alguna de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "Cuál de las siguientes definiciones corresponden al método de hash:",
            options: [
                "Técnica para generar una dirección base única para una clave dada.",
                "Técnica que convierte la clave asociada a un registro de datos en un número aleatorio, que se utiliza para determinar donde se almacena el registro.",
                "Técnica de almacenamiento y recuperación que usa una función para mapear registros en direcciones de almacenamiento en memoria secundaria.",
                "Todas las anteriores son aplicables."
            ],
            correctAnswer: "Todas las anteriores son aplicables."
        },
        {
            question: "La técnica de hash:",
            options: [
                "Entorpece la inserción y el borrado de elementos.",
                "La localización de un registro siempre debe utilizar una tabla adicional en memoria.",
                "No es conveniente de aplicar sobre claves secundarias.",
                "Requiere al menos de dos funciones de hash para el tratamiento de los desbordes."
            ],
            correctAnswer: "No es conveniente de aplicar sobre claves secundarias."
        },
        {
            question: "Cuál de los siguientes conceptos corresponden con parámetros de la dispersión:",
            options: [
                "Capacidad de almacenamiento de cada sector del archivo.",
                "Densidad de empaquetamiento.",
                "Método de tratamiento de desbordes.",
                "Todos los anteriores."
            ],
            correctAnswer: "Todos los anteriores."
        },
        {
            question: "La densidad de empaquetamiento se define como:",
            options: [
                "El cociente entre cantidad de registros y espacio disponible en el archivo.",
                "El cociente entre la cantidad de registros y la cantidad de nodos del archivo.",
                "El cociente entre la cantidad de registros, y el producto entre la cantidad de nodos y el contenido posible de registros de cada nodo.",
                "Hay más de una respuesta correcta."
            ],
            correctAnswer: "Hay más de una respuesta correcta."
        },
        {
            question: "Cuando la densidad de empaquetamiento de un archivo tiende a uno:",
            options: [
                "Es necesario redefinir el espacio disponible únicamente.",
                "El archivo se completa y no es posible incorporar más elementos.",
                "Se debe cambiar la política de hash de estática a dinámica.",
                "Es necesario redefinir el espacio disponible y rehashear todo el archivo."
            ],
            correctAnswer: "Es necesario redefinir el espacio disponible y rehashear todo el archivo."
        },
        {
            question: "La técnica de hash extensible:",
            options: [
                "Presenta una variante de hash que permite no solo ubicar rápidamente los registros, sino que además permite el acceso secuencial a los mismos.",
                "Siempre inserta un registro con un y solo un acceso a disco.",
                "Siempre se recupera un registro con un y solo un acceso a disco.",
                "En algunos casos recupera un registro con un y solo un acceso a disco."
            ],
            correctAnswer: "Siempre se recupera un registro con un y solo un acceso a disco."
        },
        {
            question: "Cuáles de estas técnicas se pueden utilizar con un archivo de registros de longitud fija?",
            options: [
                "Dispersión doble.",
                "Hashing asistido por tabla.",
                "Hashing extensible.",
                "Todas las mencionadas.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Todas las mencionadas.",
        },
        {
            question: "En un ambiente de dispersión, cuanto más grande es el tamaño de la cubeta:",
            options: [
                "Hay más fragmentación.",
                "Hay mayor probabilidad de saturación.",
                "La búsqueda dentro de la cubeta es más lenta.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Hay más fragmentación.",
        },
        {
            question: "La densidad de empaquetamiento se puede definir como:",
            options: [
                "La relación entre la cantidad de registros y la cantidad de cubetas del archivo.",
                "La proporción de espacio asignado al archivo que en realidad almacena registros.",
                "DE = cantidad de registros / (cantidad de cubetas).",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "La proporción de espacio asignado al archivo que en realidad almacena registros."
        },
        {
            question: "Se produce saturación:",
            options: [
                "Siempre que dos registros diferentes obtienen de la función de hash la misma dirección de disco.",
                "Siempre que dos registros iguales obtienen de la función de hash direcciones diferentes de disco.",
                "Cuando un registro no cabe en el lugar donde debe almacenarse según el resultado de la función de hash.",
                "Cuando dos registros diferentes obtienen de la función de hash direcciones diferentes de disco.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Cuando un registro no cabe en el lugar donde debe almacenarse según el resultado de la función de hash."
        },
        {
            question: "Al utilizar la técnica de dispersión doble:",
            options: [
                "Dada una clave, siempre se debe aplicar dos funciones: inicialmente se aplica la 1ra función, y al resultado se le aplica la 2da función para obtener finalmente la dirección de almacenamiento.",
                "Se cuenta con dos funciones, pero solo se aplica la 2da función si se produjo una saturación al aplicar la 1ra función.",
                "Cuando se usa la 2da función, el valor obtenido reemplaza al anteriormente obtenido por la 1ra función.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Se cuenta con dos funciones, pero solo se aplica la 2da función si se produjo una saturación al aplicar la 1ra función."
        },
        {
            question: "En un ambiente de dispersión con espacio de direccionamiento estático:",
            options: [
                "Siempre se encuentra un registro con un solo acceso a disco.",
                "No se permiten claves duplicadas.",
                "Es posible usar archivos con registros de longitud variable.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "No se permiten claves duplicadas.",
        },
        {
            question: "Con respecto a la dispersión extensible:",
            options: [
                "El espacio aumenta o disminuye dependiendo de los registros que contiene el archivo.",
                "Necesita una tabla auxiliar.",
                "La densidad de empaquetamiento siempre se mantiene por debajo del 75%.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Necesita una tabla auxiliar."
        },
        {
            question: "Al usar dispersión con espacio de direccionamiento estático. ¿Cuáles de los siguientes procesos se debe realizar si se agota el espacio disponible asignado al archivo?",
            options: [
                "Iniciar un nuevo archivo y relacionarlo con el archivo que quedó completo.",
                "Obtener más espacio para el mismo archivo, actualizar la función de hash, y redispersar el archivo completo.",
                "Obtener más espacio para el mismo archivo, actualizar la función de hash pero no redispersar (se usa la nueva función solo para los nuevos elementos).",
                "No es posible que se agote el espacio disponible asignado al archivo.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Obtener más espacio para el mismo archivo, actualizar la función de hash, y redispersar el archivo completo."
        },
        {
            question: "En un ambiente de dispersión con espacio de almacenamiento estático:",
            options: [
                "Se debe usar archivos con registro de long fija.",
                "Siempre se encuentra un registro con un solo acceso a disco.",
                "No existe orden físico de datos.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Se debe usar archivos con registro de long fija.",
        },
        {
            question: "El método de tratamiento de desborde en área separada:",
            options: [
                "Utiliza una segunda función de hash para determinar donde va el registro en overflow.",
                "Utiliza una segunda función de hash para determinar el nuevo nodo donde se guardará el registro en overflow.",
                "Selecciona el primer nodo libre más cercano al nodo saturado.",
                "Selecciona el primer nodo libre más cercano al saturado y los linkea.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "Indique cuál método de tratamiento de desborde potencialmente podría generar desplazamientos de disco (y consecuentemente demorar más tiempo) para encontrar un registro en saturación. Para este análisis debe suponer que el registro en saturación se aloja en la primera dirección disponible de acuerdo a la política de cada método:",
            options: [
                "Saturación progresiva.",
                "Saturación progresiva encadenada.",
                "Doble dispersión.",
                "Área de desborde separada."
            ],
            correctAnswer: "Área de desborde separada."
        },
        {
            question: "El hash con espacio de direccionamiento dinámico:",
            options: [
                "Utiliza una función de hash diferente cada vez que el tamaño del archivo crece.",
                "Aumenta la capacidad del nodo cuando se puede producir un overflow.",
                "Aumenta la cantidad de nodos en caso de overflow.",
                "Todas la anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Aumenta la cantidad de nodos en caso de overflow."
        },
        {
            question: "Implementar hash para ordenar un archivo:",
            options: [
                "Mejora el acceso a un archivo.",
                "Puede empeorar el acceso a los datos de un archivo.",
                "Si es hash extensible la mejora es notable.",
                "El concepto no es aplicable."
            ],
            correctAnswer: "El concepto no es aplicable."
        },
        {
            question: "El método de saturación progresiva encadenada:",
            options: [
                "Es más eficiente que doble dispersión porque utiliza una sola función de hash.",
                "Se demora siempre menos en la búsqueda que utilizando el método de área separado.",
                "Es un método más de tratamiento de colisiones.",
                "Siempre es más eficiente que cualquier situación similar resultante con el método de saturación progresiva."
            ],
            correctAnswer: "Es un método más de tratamiento de colisiones."
        },
        {
            question: "Una función de hash:",
            options: [
                "Siempre devuelve una dirección donde se debería almacenar el registro dispersado.",
                "Siempre devuelve una secuencia de bits que sirve para determinar dónde se debería almacenar el registro dispersado.",
                "Siempre debe ser aleatoria.",
                "Todas las anteriores.",
                "Algunas de las anteriores."
            ],
            correctAnswer: "Siempre debe ser aleatoria.",
        },
        {
            question: "Cuáles de los siguientes ítems puede considerarse atributos o propiedades de la técnica de hash:",
            options: [
                "No requerir espacio adicional de almacenamiento.",
                "Facilitar inserción y eliminación rápida de elementos en el archivo.",
                "Permitir la búsqueda más eficiente de información en un archivo de datos.",
                "Permitir acceso secuencial a los datos.",
                "Todas las anteriores.",
                "Algunas de las anteriores."
            ],
            correctAnswer: "Algunas de las anteriores."
        },
        {
            question: "Cuál de los siguientes parámetros de la técnica de hash es más importante?",
            options: [
                "Función de hash.",
                "Tamaño de cada nodo de almacenamiento.",
                "Densidad de empaquetamiento.",
                "Método de tratamiento de overflow.",
                "Ninguno es importante.",
                "Ninguno prevalece sobre el otro."
            ],
            correctAnswer: "Ninguno prevalece sobre el otro."
        },
        {
            question: "Se define la densidad de empaquetamiento como:",
            options: [
                "A. El cociente entre la cantidad de registros del archivo y el espacio disponible para su almacenamiento.",
                "B. El cociente entre la capacidad del archivo y los registros del archivo.",
                "C. El cociente entre la cantidad de registros del archivo, y el producto entre la cantidad de nodos disponibles y la capacidad de estos nodos.",
                "Las respuestas a, b y c son correctas.",
                "Las respuestas a y b son correctas.",
                "Las respuestas a y c son correctas.",
                "Las respuestas b y c son correctas."
            ],
            correctAnswer: "El cociente entre la cantidad de registros del archivo, y el producto entre la cantidad de nodos disponibles y la capacidad de estos nodos."
        },
        {
            question: "La técnica de dispersión de archivos se utiliza para:",
            options: [
                "Mantener el archivo físicamente ordenado.",
                "Mejorar la performance de las inserciones.",
                "Mejorar la performance de las bajas.",
                "No realizar grandes desplazamientos en disco.",
                "Hay más de una respuesta correcta.",
                "Ninguna de las opciones es correcta."
            ],
            correctAnswer: "Hay más de una respuesta correcta."
        },
        {
            question: "Cuáles de los siguientes parámetros no corresponde a hashing:",
            options: [
                "Función de hash.",
                "Tamaño del nodo (capacidad para almacenar registros).",
                "Densidad de búsqueda.",
                "Forma de tratar los desbordes.",
                "Todas las anteriores corresponden."
            ],
            correctAnswer: "Densidad de búsqueda."
        },
        {
            question: "Cuál de los siguientes parámetros afecta la eficiencia de la dispersión:",
            options: [
                "Cantidad de elementos del archivo.",
                "Cantidad de espacio para almacenar el archivo.",
                "Densidad de empaquetamiento.",
                "Función de dispersión.",
                "Algoritmos para el tratamiento de registros sinónimos.",
                "Todas las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Algunas de las anteriores."
        },
        {
            question: "Un archivo tratado con hash estático, que tiene una densidad de empaquetamiento del 10%:",
            options: [
                "A. Tiene mucha fragmentación interna.",
                "B. Tiene mucha fragmentación externa.",
                "C. Presenta un nivel de colisiones bajo.",
                "D. Presenta un nivel de overflow bajo.",
                "Todas las anteriores son correctas.",
                "Las opciones b y c son correctas.",
                "Las opciones a y c son correctas.",
                "Las opciones a, c y d son correctas.",
                "Las opciones b, c y d son correctas.",
                "Ninguna opción es correcta."
            ],
            correctAnswer: "Las opciones a, c y d son correctas."
        },
        {
            question: "La función de hashing:",
            options: [
                "Afecta a la densidad de empaquetamiento.",
                "Puede afectar a la densidad de empaquetamiento.",
                "Afecta la densidad de empaquetamiento solo en casos especiales.",
                "Afecta la densidad de empaquetamiento en la mayoría de los casos.",
                "Todas las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "La técnica de área de desborde por separado:",
            options: [
                "Utiliza un área de memoria separada para las claves en overflow.",
                "Reduce la densidad de empaquetamiento.",
                "Utiliza una segunda función de dispersión siempre que se desee almacenar un registro en un archivo.",
                "Solo se aplica a la dispersión extensible.",
                "Ayuda a predecir la cantidad de claves en overflow.",
                "Hay más de una opción correcta."
            ],
            correctAnswer: "Utiliza un área de memoria separada para las claves en overflow."
        },
        {
            question: "El método de área de desborde separada:",
            options: [
                "Reubica los registros en overflow.",
                "Utiliza una segunda función de hash en caso de ser necesaria.",
                "Puede generar áreas de overflow dentro del archivo.",
                "Todas las anteriores son válidas.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Reubica los registros en overflow."
        },
        {
            question: "Si se tiene una política de hash con espacio de direccionamiento dinámico:",
            options: [
                "La densidad de empaquetamiento puede ser mayor que 1.",
                "Cuando la densidad de empaquetamiento supera el 75% se debe reacomodar al archivo.",
                "Cuando la densidad de empaquetamiento supera el 75% se debe utilizar más espacio para nodos.",
                "Cuando la densidad de empaquetamiento supera el 75% debe activarse una política de tratamiento de overflow, como por ejemplo área de desborde separado.",
                "Algunas de las anteriores son válidas.",
                "Ninguna de las anteriores son válidas."
            ],
            correctAnswer: "Ninguna de las anteriores son válidas."
        },
        {
            question: "A partir de un archivo dispersado con hashing extensible:",
            options: [
                "Siempre es posible agregar elementos al archivo.",
                "Algunas veces no es posible agregar elementos al archivo.",
                "Se puede utilizar saturación progresiva encadenada para tratar registros en saturación.",
                "No se puede utilizar Dispersión Doble para tratar registros en saturación.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Algunas de las anteriores."
        },
        {
            question: "La técnica de hashing extensible:",
            options: [
                "No utiliza una función de hash porque debe cambiar dinámicamente.",
                "No utiliza una función de hash porque encuentra los registros siempre en un acceso.",
                "Utiliza una función de hash pero esta función no devuelve la dirección donde guardar el registro.",
                "Utiliza área de desborde por separado para los registros en overflow.",
                "Todas las anteriores son válidas.",
                "Las respuestas a y c son correctas.",
                "Las respuestas b y c son correctas.",
                "Las respuestas a, c y d son correctas.",
                "Ninguna es correcta."
            ],
            correctAnswer: "Utiliza una función de hash pero esta función no devuelve la dirección donde guardar el registro."
        },
        {
            question: "Cuál de las siguientes consignas no define hash dinámico:",
            options: [
                "Recupera los registros en un acceso a disco.",
                "No puede haber estructuras adicionales.",
                "Se organiza todo el archivo de datos.",
                "Solo puede organizarse por un ÚNICO criterio, la clave primaria.",
                "Todas las anteriores pertenecen a hash dinámico."
            ],
            correctAnswer: "No puede haber estructuras adicionales."
        },
        {
            question: "El hash con espacio de direccionamiento estático:",
            options: [
                "Puede tener densidad de empaquetamiento menor que uno.",
                "Puede tener un tratamiento de desbordes.",
                "Puede tener una función aleatoria y uniforme.",
                "Todas de las anteriores.",
                "Las opciones a y b son correctas.",
                "Las opciones a y c son correctas.",
                "Las opciones b y c son correctas.",
                "Ninguna de las anteriores son correcta."
            ],
            correctAnswer: "Ninguna de las anteriores son correcta."
        },
        {
            question: "Si la densidad de empaquetamiento tiende a 1 (o el 100%):",
            options: [
                "Es conveniente utilizar dispersión doble para el tratamiento de overflow.",
                "Se debe cambiar la función de dispersión.",
                "Debe aumentarse el tamaño del archivo.",
                "Debe aumentarse el tamaño de los nodos.",
                "Todas las anteriores son válidas.",
                "Las opciones b y c son correctas.",
                "Las opciones b y d son correctas.",
                "Las opciones c y d son correctas.",
                "Las opciones b, c y d son correctas.",
                "Ninguna de las opciones anteriores es correcta."
            ],
            correctAnswer: "Las opciones b, c son correctas."
        },
        {
            question: "Cuál de los siguientes parámetros afecta la eficiencia de la dispersión:",
            options: [
                "Cantidad de elementos del archivo.",
                "Cantidad de espacio para almacenar el archivo.",
                "Densidad de empaquetamiento.",
                "Función de dispersión.",
                "Algoritmos para el tratamiento de registros en saturación.",
                "Todas las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Todas las anteriores."
        },
        {
            question: "Cuál de los siguientes métodos sirve para el tratamiento de colisiones en hash estático:",
            options: [
                "Área de desborde por separado.",
                "Saturación progresiva.",
                "Saturación progresiva encadenada.",
                "Doble dispersión.",
                "Todas las anteriores.",
                "Ninguna de las anteriores son válidas."
            ],
            correctAnswer: "Ninguna de las anteriores son válidas."
        },
        {
            question: "El método de área de desborde por separado:",
            options: [
                "Utiliza una segunda función de hash para ubicar los registros en saturación de un archivo.",
                "Direcciona el overflow de un nodo a otro nodo diferente.",
                "Evita generar zonas contiguas de nodos en overflow.",
                "Todas las anteriores son válidas.",
                "Las opciones a y b son verdaderas.",
                "Las opciones a y c son verdaderas.",
                "Las opciones b y c son verdaderas.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Las opciones b y c son verdaderas."
        },
        {
            question: "La técnica de hashing extensible:",
            options: [
                "No utiliza una función de hash porque debe cambiar dinámicamente.",
                "No utiliza una función de hash porque encuentra los registros siempre en un acceso.",
                "Utiliza una función de hash pero esta función no devuelve la dirección donde guardar el registro.",
                "Utiliza área de desborde por separado para los registros en overflow.",
                "Todas las anteriores son válidas.",
                "Las respuestas a y c son correctas.",
                "Las respuestas b y c son correctas.",
                "Las respuestas a, c y d son correctas.",
                "Ninguna es correcta."
            ],
            correctAnswer: "Utiliza una función de hash pero esta función no devuelve la dirección donde guardar el registro."
        },
        {
            question: "La eficiencia de búsqueda de un registro en un archivo organizado mediante dispersión estática:",
            options: [
                "Es de orden lineal.",
                "Tiende a uno.",
                "Siempre es uno.",
                "Es de orden logarítmico.",
                "Algunas de las anteriores son correctas.",
                "Ninguno de las opciones anteriores es correcta."
            ],
            correctAnswer: "Tiende a uno."
        },
        {
            question: "A partir de un archivo dispersado con hashing extensible:",
            options: [
                "Siempre es posible agregar elementos al archivo.",
                "Algunas veces no es posible agregar elementos al archivo.",
                "Se puede utilizar saturación progresiva encadenada para tratar registros en saturación.",
                "No se puede utilizar dispersión doble para tratar registros en saturación.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Algunas de las anteriores."
        },
        {
            question: "Cuál de las siguientes consignas no define hash dinámico:",
            options: [
                "Recupera los registros en un acceso a disco.",
                "No puede haber estructuras adicionales.",
                "Se organiza todo el archivo de datos.",
                "Solo puede organizarse por un único criterio, la clave primaria.",
                "Todas las anteriores pertenecen a hash dinámico."
            ],
            correctAnswer: "No puede haber estructuras adicionales."
        },
        {
            question: "El hash con espacio de direccionamiento estático:",
            options: [
                "Puede tener densidad de empaquetamiento menor que uno.",
                "Puede tener un tratamiento de desbordes.",
                "Puede tener una función aleatoria y uniforme.",
                "Todas de las anteriores.",
                "Las opciones a y b son correctas.",
                "Las opciones a y c son correctas.",
                "Las opciones b y c son correctas.",
                "Ninguna de las anteriores son correctas."
            ],
            correctAnswer: "Ninguna de las anteriores son correctas."
        },
        {
            question: "El método de doble dispersión, para el tratamiento de colisiones:",
            options: [
                "Utiliza una segunda función de hash para ubicar a todos los registros del archivo.",
                "Utiliza una segunda función de hash para ubicar algunos registros del archivo.",
                "Evita generar zonas contiguas de nodos en overflow.",
                "Todas las anteriores son válidas.",
                "Las opciones a y b son verdaderas.",
                "Las opciones a y c son verdaderas.",
                "Las opciones b y c son verdaderas.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "El método de dispersión doble:",
            options: [
                "Afecta a la densidad de empaquetamiento.",
                "Puede afectar a la densidad de empaquetamiento.",
                "Afecta la densidad de empaquetamiento solo en casos especiales.",
                "Afecta la densidad de empaquetamiento en la mayoría de los casos.",
                "Todas las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "Con 10000 direcciones con capacidad para 4 registros cada una y 30000 claves para dispersar, entonces:",
            options: [
                "La densidad de empaquetamiento es mayor que uno.",
                "La densidad de empaquetamiento es superior o igual al 75%.",
                "La densidad de empaquetamiento es inferior al 75% pero mayor o igual al 50%.",
                "La densidad de empaquetamiento es inferior al 50% pero mayor o igual al 25%.",
                "No se puede calcular."
            ],
            correctAnswer: "La densidad de empaquetamiento es superior o igual al 75%."
        },
        {
            question: "El método de área de desborde separada:",
            options: [
                "Reubica los registros en overflow.",
                "Utiliza una segunda función de hash en caso de ser necesaria.",
                "Puede generar áreas de overflow dentro del archivo.",
                "Todas las anteriores son válidas.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Reubica los registros en overflow."
        },
        {
            question: "El método de área de desborde por separado:",
            options: [
                "Utiliza una segunda función de hash para ubicar los registros en saturación de un archivo.",
                "Ubica los registros lo más próximo posible a su dirección base.",
                "Evita generar zonas contiguas de nodos en overflow.",
                "Todas las anteriores son válidas.",
                "Las opciones a y b son verdaderas.",
                "Las opciones a y c son verdaderas.",
                "Las opciones b y c son verdaderas.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Evita generar zonas contiguas de nodos en overflow."
        },
        {
            question: "El hashing extensible:",
            options: [
                "Afecta a la densidad de empaquetamiento.",
                "Puede afectar a la densidad de empaquetamiento.",
                "Afecta la densidad de empaquetamiento solo en casos especiales.",
                "Afecta la densidad de empaquetamiento en la mayoría de los casos.",
                "Todas las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "A partir de un archivo dispersado con hashing extensible:",
            options: [
                "Siempre es posible agregar elementos al archivo.",
                "Algunas veces es posible agregar elementos al archivo.",
                "Se puede utilizar dispersión doble para tratar registros en saturación.",
                "No se puede utilizar saturación progresiva para tratar registros en saturación.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Algunas de las anteriores."
        },
        {
            question: "Un archivo tratado con hash estático que tiene una densidad del 10%:",
            options: [
                "Tiene mucha fragmentación interna.",
                "Tiene mucha fragmentación externa.",
                "Presenta un nivel de colisiones bajo.",
                "Presenta un nivel de overflow bajo.",
                "Todas las anteriores.",
                "b y c son correctas.",
                "a y c son correctas.",
                "a, c y d son correctas.",
                "b, c y d son correctas.",
                "Ninguna."
            ],
            correctAnswer: "a, c y d son correctas."
        },
        {
            question: "Cuando una clave X y otra clave Y generamos el mismo hash por función de dispersión diferente dirección entonces:",
            options: [
                "Una de las dos no será almacenada en el archivo.",
                "Se puede producir un desborde.",
                "Se produce una colisión.",
                "Hay más de una correcta.",
                "Ninguna."
            ],
            correctAnswer: "Se puede producir un desborde."
        },
        {
            question: "Cuál de los siguientes parámetros afecta la eficiencia de la dispersión:",
            options: [
                "Cantidad de elementos.",
                "Cantidad de espacio.",
                "Densidad de empaquetamiento.",
                "Función de dispersión.",
                "Algoritmos para el tratamiento de registros sinónimos.",
                "Todas.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Algunas."
        },
        {
            question: "El hash con espacio de direccionamiento estático:",
            options: [
                "Puede tener densidad de empaquetamiento menor que uno.",
                "Puede tener un tratamiento de desbordes.",
                "Puede tener una función aleatoria y uniforme.",
                "Todas las anteriores.",
                "a y b.",
                "a y c.",
                "b y c.",
                "Ninguna."
            ],
            correctAnswer: "Ninguna."
        },
        {
            question: "El método de área de desborde por separado:",
            options: [
                "Usa una segunda función para ubicar los registros en saturación de un archivo.",
                "Ubica los registros lo más próximo posible a su dirección base.",
                "Evita generar zonas contiguas de nodos en overflow.",
                "Todas las anteriores son válidas.",
                "a y b.",
                "a y c.",
                "b y c.",
                "Ninguna."
            ],
            correctAnswer: "Evita generar zonas contiguas de nodos en overflow."
        },
        {
            question: "El método de área de desborde separada:",
            options: [
                "Reubica los registros en overflow.",
                "Usa una segunda función de hash en caso de ser necesaria.",
                "Puede generar áreas de overflow dentro del archivo.",
                "Todas las anteriores.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Reubica los registros en overflow."
        },
        {
            question: "El hashing extensible:",
            options: [
                "Afecta a la densidad de empaquetamiento.",
                "Puede afectar a la densidad de empaquetamiento.",
                "Afecta la densidad de empaquetamiento solo en casos especiales.",
                "Afecta la densidad de empaquetamiento en la mayoría de los casos.",
                "Todas las anteriores.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Ninguna."
        },
        {
            question: "Si tiene una política de hash con espacio de direccionamiento dinámico:",
            options: [
                "La densidad de empaquetamiento puede ser mayor que 1.",
                "Cuando la FD supera el 75% se debe reacomodar el archivo.",
                "Cuando la FD supera el 75% se debe usar más espacio para nodos.",
                "Cuando la FD supera el 75% debe activarse una política de tratamiento de overflow como por ejemplo área de desborde separado.",
                "Algunas.",
                "Ninguna."
            ],
            correctAnswer: "Ninguna."
        },
        {
            question: "La eficiencia de búsqueda de un registro en un archivo organizado mediante dispersión dinámica:",
            options: [
                "Es de orden lineal.",
                "Tiende a uno.",
                "Siempre es uno.",
                "Es de orden logarítmico.",
                "Algunas.",
                "Ninguno."
            ],
            correctAnswer: "Siempre es uno."
        },
        {
            question: "El hash con espacio de direccionamiento estático:",
            options: [
                "Puede tener densidad de empaquetamiento menor que uno.",
                "Puede tener un tratamiento de desbordes.",
                "Puede tener una función aleatoria y uniforme.",
                "Todas de las anteriores.",
                "Las opciones a y b son correctas.",
                "Las opciones a y c son correctas.",
                "Las opciones b y c son correctas.",
                "Ninguna de las anteriores son correctas."
            ],
            correctAnswer: "Ninguna de las anteriores son correctas."
        },
        {
            question: "Cuáles de los siguientes parámetros no corresponde a hashing:",
            options: [
                "Función de hash.",
                "Tamaño del nodo (capacidad para almacenar registros).",
                "Densidad de búsqueda.",
                "Forma de tratar los desbordes.",
                "Todas las anteriores corresponden."
            ],
            correctAnswer: "Densidad de búsqueda."
        },
        {
            question: "Cuál de los siguientes parámetros afecta la eficiencia de la dispersión:",
            options: [
                "Cantidad de elementos del archivo.",
                "Cantidad de espacio para almacenar el archivo.",
                "Densidad de empaquetamiento.",
                "Función de dispersión.",
                "Algoritmos para el tratamiento de registros sinónimos.",
                "Todas las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Algunas de las anteriores."
        },
        {
            question: "Un archivo tratado con hash estático, que tiene una densidad de empaquetamiento del 10%:",
            options: [
                "Tiene mucha fragmentación interna.",
                "Tiene mucha fragmentación externa.",
                "Presenta un nivel de colisiones bajo.",
                "Presenta un nivel de overflow bajo.",
                "Todas las anteriores son correctas.",
                "Las opciones b y c son correctas.",
                "Las opciones a y c son correctas.",
                "Las opciones a, c y d son correctas.",
                "Las opciones b, c y d son correctas.",
                "Ninguna opción es correcta."
            ],
            correctAnswer: "Las opciones a, c y d son correctas."
        },
        {
            question: "La función de hashing:",
            options: [
                "Afecta a la densidad de empaquetamiento.",
                "Puede afectar a la densidad de empaquetamiento.",
                "Afecta la densidad de empaquetamiento solo en casos especiales.",
                "Afecta la densidad de empaquetamiento en la mayoría de los casos.",
                "Todas las anteriores.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Ninguna de las anteriores."
        },
        {
            question: "La técnica de área de desborde por separado:",
            options: [
                "Utiliza un área de memoria separada para las claves en overflow.",
                "Reduce la densidad de empaquetamiento.",
                "Utiliza una segunda función de dispersión siempre que se desee almacenar un registro en un archivo.",
                "Solo se aplica a la dispersión extensible.",
                "Ayuda a predecir la cantidad de claves en overflow.",
                "Hay más de una opción correcta."
            ],
            correctAnswer: "Utiliza un área de memoria separada para las claves en overflow."
        },
        {
            question: "El método de área de desborde separada:",
            options: [
                "Reubica los registros en overflow.",
                "Utiliza una segunda función de hash en caso de ser necesaria.",
                "Puede generar áreas de overflow dentro del archivo.",
                "Todas las anteriores son válidas.",
                "Algunas de las anteriores.",
                "Ninguna de las anteriores."
            ],
            correctAnswer: "Reubica los registros en overflow."
        }
    ]
};

const modeMixedButton = document.getElementById('mode-mixed');
const modeFilesButton = document.getElementById('mode-files');
const modeTreesButton = document.getElementById('mode-trees');
const modeHashingButton = document.getElementById('mode-hashing');
const quizContainer = document.getElementById('quiz-container');
const questionCounter = document.getElementById('question-counter');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back-button'); // Botón nuevo
const resultsContainer = document.getElementById('results-container');
const scoreText = document.getElementById('score-text');
const percentageText = document.getElementById('percentage-text');
const restartButton = document.getElementById('restart-button');
const gameModes = document.getElementById('game-modes');
const feedbackMessage = document.getElementById('feedback-message');

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;
let selectedOption = null;
let questionsAnswered = 0;

// Convert index to letter (A, B, C, ...)
function getOptionLetter(index) {
    return String.fromCharCode(65 + index);
}

// Shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame(mode) {
    const questionCountInput = document.getElementById('question-count');
    const questionCount = parseInt(questionCountInput.value, 10);

    if (isNaN(questionCount) || questionCount <= 0) {
        alert("Por favor, ingresa un número válido de preguntas.");
        return;
    }

    gameModes.style.display = 'none';
    quizContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    score = 0;
    currentQuestionIndex = 0;
    questionsAnswered = 0;

    if (mode === 'mixed') {
        const allQuestions = [
            ...questions.files,
            ...questions.trees,
            ...questions.hashing
        ];
        currentQuestions = shuffleArray(allQuestions).slice(0, questionCount);
    } else {
        let categoryQuestions;
        if (mode === 'files') {
            categoryQuestions = questions.files;
        } else if (mode === 'trees') {
            categoryQuestions = questions.trees;
        } else if (mode === 'hashing') {
            categoryQuestions = questions.hashing;
        }
        currentQuestions = shuffleArray(categoryQuestions).slice(0, questionCount);
    }

    totalQuestions = questionCount;
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex < totalQuestions) {
        const questionData = currentQuestions[currentQuestionIndex];
        questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}`;
        questionText.textContent = questionData.question;
        optionsContainer.innerHTML = '';
        feedbackMessage.textContent = '';
        feedbackMessage.style.color = '';
        selectedOption = null;
        nextButton.disabled = true;
        nextButton.style.display = 'none';

        const shuffledOptions = shuffleArray([...questionData.options]);

        shuffledOptions.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option-button');
            button.textContent = `${getOptionLetter(index)}. ${option}`;
            button.addEventListener('click', () => selectOption(button, option, questionData.correctAnswer));
            optionsContainer.appendChild(button);
        });
    } else {
        showResults();
    }
}

function selectOption(selectedButton, selectedAnswer, correctAnswer) {
    if (selectedButton.classList.contains('selected')) {
        selectedButton.classList.remove('selected');
        selectedOption = null;
        nextButton.disabled = true;
    } else {
        Array.from(optionsContainer.children).forEach(button => {
            button.disabled = true;
        });

        selectedOption = selectedAnswer;
        nextButton.disabled = false;
        selectedButton.classList.add('selected');

        if (selectedAnswer === correctAnswer) {
            selectedButton.classList.add('correct');
            feedbackMessage.textContent = "✅ ¡Respuesta correcta!";
            feedbackMessage.style.color = "green";
            score++;
        } else {
            selectedButton.classList.add('incorrect');
            feedbackMessage.textContent = `❌ Incorrecta. La respuesta correcta era: ${correctAnswer}`;
            feedbackMessage.style.color = "red";

            Array.from(optionsContainer.children).forEach(button => {
                const buttonTextWithoutPrefix = button.textContent.substring(3);
                if (buttonTextWithoutPrefix === correctAnswer) {
                    button.classList.add('correct');
                }
            });
        }

        questionsAnswered++;
        nextButton.style.display = 'inline-block';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';

    const percentage = (score / totalQuestions) * 100;
    scoreText.textContent = `Respuestas correctas: ${score} de ${totalQuestions}`;
    percentageText.textContent = `Puntuación: ${percentage.toFixed(2)}%`;
}

function restartGame() {
    gameModes.style.display = 'block';
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'none';
    feedbackMessage.textContent = '';
    currentQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    totalQuestions = 0;
    selectedOption = null;
    questionsAnswered = 0;
}

// Event Listeners
modeMixedButton.addEventListener('click', () => startGame('mixed'));
modeFilesButton.addEventListener('click', () => startGame('files'));
modeTreesButton.addEventListener('click', () => startGame('trees'));
modeHashingButton.addEventListener('click', () => startGame('hashing'));
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartGame);
backButton.addEventListener('click', restartGame); // Evento para volver al menú

// Estado inicial
restartGame();
