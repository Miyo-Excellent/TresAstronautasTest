### Parte I - Prueba lógica: 

#####1. ¿Cómo encontraría usted el número faltante dado un arreglo no ordenado que contenga una secuencia de enteros del 1 al 100, y le falte un número?

> Ejecutaría un ciclo validando la existencia del dato requerido.

#####2. ¿Cómo encontraría usted el primer número que aparezca duplicado en un arreglo de enteros desordenados?

> Se crea un nuevo array vacío, se crea una variable vacia, dónde se almacenará el primer valor duplicado, se ejecutar un ciclo sobre el arreglo con los datos duplicados, validar en cada ciclo que el elemento en cada ciclo no existe dentro del nuevo array, si existe, entonces rompe el ciclo y asigna ese valor a la variable vacia, de lo contrario continuar con el ciclo hasta que termine de recorrer el array con los datos duplicados.

#####3. ¿Cómo reversaría usted el orden de un arreglo de enteros?

> Por lo general los lenguajes de programación proveen de una funcion/método para revertir el orden de los arreglos.

#####4. ¿Cómo intercambiaría usted el valor de dos variables que contienen enteros, sin utilizar una tercera variable?

> Utilizando una función, se puede utilizar el scope como solución.

#####5. ¿Cómo verificaría usted que una cadena de texto es palindrome?

> Se valida de forma inversa cada carácter del string, si la cadena de mantiene de la misma manera es palimdrome de lo contrario no.

#####6. ¿Cómo reversaría usted una cadena de texto utilizando recursión?

> Basándome en la longitud de la cadena y el índice de carácter se puede implementar u a función recursiva

#####7. ¿Cómo contaría usted el número de consonantes en una cadena de texto?
    Sugerencia: Escriba las respuestas como pseudocódigo para claridad..

> La forma más fácil y sencilla es utilizar expresiones regulares, /(a|e|i|o|u)/i

### Parte II - Prueba conceptual:

#####10. Si se quiere emplear el proceso TDD (Test Driven Development) en la empresa, seleccione la opción que mejor represente el flujo de trabajo de los métodos TDD.
 - Requisitos → Arquitectura de software → Desarrollo de software → Pruebas funcionales → Soporte

 - Requisitos → Arquitectura de software → Requisitos de hardware → Aprobación del área administrativa → Desarrollo de software → Soporte

 - ✓ Requisitos → Arquitectura de software → Pruebas unitarias → Desarrollo de software → Revisión de código → Pruebas funcionales → Soporte

 - Requisitos → Soporte → Arquitectura de hardware → Desarrollo de software

#####11. ¿Qué tipo de lenguaje es Ruby, y en qué se diferencia con Java?
 -   no necesitas compilar tu código fuente. Directamente lo ejecutas.
 -   hay distintos conjuntos de herramientas para interfaz gráfica, o el Ruby Tk incluido, por ejemplo.
 -   se usa la palabra clave  `end`  después de definir clases, en vez de tener que poner llaves encerrando el código.
 -   tienes  `require`  en vez de  `import`.
 -   todas las variables de instancia son privadas. Desde afuera, todo se accede usando métodos.
 -   los paréntesis en las llamadas a los métodos usualmente son opcionales y a menudo son omitidos.
 -   todo es un objeto, incluyendo los números como 2 y 3,14159.
 -   no hay validación estática de tipos de datos.
 -   los nombres de variables son sólo etiquetas. No tienen un tipo de dato asociado.
 -   no hay declaración de tipo de datos. Simplemente se asigna a nuevos nombres de variable a medida que se necesita.
 -   no hay transformación de tipos (casting). Simplemente se llama a los métodos. Tus pruebas unitarias deberían avisarte antes de que ejecutes el código si habrá una excepción.
 -   es  `foo = Foo.new("hola")`  en vez de  `Foo foo = new Foo("hola")`.
 -   el constructor siempre se llama “initialize” en vez del nombre de la clase.
 -   tienes “mixins” en vez de interfaces.
 -   se tiende a favorecer el uso de YAML en vez de XML.
 -   es  `nil`  en vez de  `null`.

#####12. ¿Qué son los microservicios?

 > Los microservicios son tanto un estilo de arquitectura como un modo de programar software. Con los microservicios, las aplicaciones se dividen en sus elementos más pequeños e independientes entre sí. A diferencia del enfoque tradicional y monolítico de las aplicaciones, en el que todo se compila en una sola pieza, los microservicios son elementos independientes que funcionan en conjunto para llevar a cabo las mismas tareas.

#####13. ¿Por qué serían beneficiosos los microservicios para una organización?

**Ventajas**:
-   Equipo de trabajo mínimo
-   Escalabilidad
-   Funcionalidad modular, módulos independientes.
-   Libertad del desarrollador de desarrollar y desplegar servicios de forma independiente
-   Uso de contenedores permitiendo el despliegue y el desarrollo de la aplicación rápidamente

#####14. ¿Por qué no serían beneficiosos los microservicios para una organización?

**Desventajas**
-   Alto consumo de memoria
-   Necesidad de tiempo para poder fragmentar distintos microservicios
-   Complejidad de gestión de un gran número de servicios
-   Necesidad de desarrolladores para la solución de problemas como latencia en la red o balanceo de cargas
-   Pruebas o testeos complicados al despliegue distribuido

#####15. ¿Cuál es la diferencia entre SOA y Microservicios?
> **No hay una arquitectura mejor que otra, la elección depende del objetivo y propósito del proyecto a desarrollar.**  En términos generales, SOA suele ser más recomendable para organizaciones más grandes que trabajan en base a la integración de aplicaciones. Los Microservices se caracterizan por ser sistemas más pequeños y fraccionados que permiten un mayor control al desarrollador de  _software_.
> 
> Una diferenciación importante entre ambas arquitecturas es el  **tamaño y alcance**  de cada una de ellas. En el sistema de microservicios, cada servicio presenta una única funcionalidad que ejecuta a la perfección. Por su parte, SOA incluye más funcionalidades y es capaz de desarrollar sistemas completos.

#####16. ¿Por qué podría ser más compleja la comunicación por una red en una arquitectura por microservicios?

> Es más compleja una comunión por una red ya que se tiene que integrar uno o más módulos de comunicación que funcione como intérprete, por otro lado, con los micro servicios son servicios únicos que se enfocan en cumplir/ejercer una función.

#####17. Proponga un método de comunicación para una arquitectura por microservicios.

#####18. ¿Qué es y cómo funciona Docker?

#####19. ¿Qué es y cómo funciona Kubernetes?

###Parte III - Prueba en Javascript (Entregar el código): 

#####1. En un salón se tienen las notas de 14 alumnos; de los cuales se desea saber cuál fue el promedio de todas las notas, cuál fue la nota mayor y la nota menor. Así como la cantidad de aprobados en el curso (Para Aprobar la asignatura se requiere de una nota mayor o igual a 3.0). 

#####2. Simular 20 tiradas de dos dados y contar las veces que entre los dos suman 10.

#####3. Escribir un algoritmo que muestre todas las fichas de dominó, sin repetir. 

#####4. Introducir un número menor de 5000 y pasarlo a número romano. 
