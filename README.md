# Video de referencia

<iframe width="560" height="315" src="https://www.youtube.com/embed/oWmOqxIanjk?si=5-d7lzG1Y7dDdOUq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

APUNTES HTML

<nav></nav>
El elemento `<nav>` en HTML se utiliza para definir una sección de navegación en una página web. Se utiliza para agrupar enlaces que conducen a otras páginas dentro del sitio web o a secciones específicas de la misma página. Esto ayuda a estructurar y organizar el contenido de manera que sea fácilmente accesible para los usuarios.

<div></div>
El elemento `<div>` en HTML se utiliza como un contenedor genérico para agrupar y estructurar contenido dentro de una página web. No tiene un significado semántico específico como otros elementos como `<header>`, `<nav>` o `<footer>`, pero se utiliza ampliamente junto con CSS para aplicar estilos y crear diseños complejos. Es una herramienta fundamental para organizar y dar formato al contenido de una página web.

`<img src="" alt="" class=""/>`
 El elemento `<img>` en HTML se utiliza para insertar imágenes en una página web. La etiqueta `<img>` tiene un atributo obligatorio llamado src que especifica la URL de la imagen que se va a mostrar.
 El atributo alt se utiliza para proporcionar un texto alternativo que describe la imagen cuando esta no se puede cargar o cuando el usuario utiliza un lector de pantalla. Esto es importante para la accesibilidad web y ayuda a las personas con discapacidades visuales a comprender el contenido de la imagen.
El atributo class se utiliza para asignar una o más clases CSS al elemento. Esto permite aplicar estilos específicos a la imagen utilizando reglas de estilo definidas en la hoja de estilo CSS. Por ejemplo, se puede usar para aplicar márgenes, bordes, sombras u otros efectos visuales a la imagen.

`<ul></ul>`

El elemento `<ul>` en HTML se utiliza para crear una lista desordenada. "UL" significa "unordered list" (lista desordenada). Se utiliza para agrupar elementos de lista que no tienen una secuencia específica o un orden definido. Cada elemento de lista dentro de `<ul>` se representa por defecto con viñetas, pero el estilo visual puede ser modificado mediante CSS.

`<li></li>`
El elemento `<li>` en HTML se utiliza para representar un ítem en una lista, ya sea ordenada (`<ol>`) o desordenada (`<ul>`). Cada `<li>` dentro de una lista contiene un elemento de la lista y se muestra en la página como un elemento individual, como un punto en una lista desordenada o un número en una lista ordenada.

`<a href=""><a/>`
El elemento `<a>` en HTML se utiliza para crear hipervínculos, también conocidos como enlaces. El atributo href dentro de la etiqueta `<a>` se utiliza para especificar la URL a la que el enlace debe llevar al usuario cuando se hace clic en él.

`<form></form>`

El elemento `<form>` en HTML se utiliza para crear un formulario interactivo en una página web. Dentro de un formulario, se pueden incluir varios elementos como campos de entrada de texto, casillas de verificación, botones de opción y botones de envío, entre otros. Cuando el usuario completa y envía el formulario, los datos ingresados se pueden enviar a un servidor para su procesamiento utilizando el atributo action del elemento `<form>`. Es una herramienta fundamental para recopilar información y realizar interacciones con los usuarios en la web.

`<i class=""><i/>`
El atributo class en el elemento `<i>` se utiliza para asignar una o más clases CSS al elemento. En este caso ("fas fas fa-search")se está utilizando una clase de la biblioteca Font Awesome, que es una biblioteca de iconos vectoriales populares. La clase "fas fa-search" se utiliza para representar un icono de búsqueda en la página web.
"fas fa-cart-plus" representa un carrito de compras con un signo de suma. Este icono se utiliza comúnmente para indicar la acción de agregar un artículo al carrito de compras en una tienda en línea o en un sistema de comercio electrónico.
La clase "fas fa-bars" representa un conjunto de barras horizontales, comúnmente utilizado para indicar un menú o una lista de opciones en un sitio web.
La clase fas fa-star representa una estrellas

`<input type="" class="" placeholder="">`
El elemento `<input>` en HTML se utiliza para crear campos interactivos en formularios. 

- El atributo type especifica el tipo de campo de entrada, como texto, contraseña, correo electrónico, etc.
- El atributo class se utiliza para asignar una o más clases CSS al elemento, lo que permite aplicar estilos específicos al campo de entrada.
- El atributo placeholder proporciona un texto de marcador de posición que se muestra dentro del campo antes de que el usuario ingrese algún valor. Ayuda a indicar qué tipo de información se espera en el campo.

`<button class=""><button/>`
El elemento `<button>` en HTML se utiliza para crear un botón interactivo en una página web. El atributo class se utiliza para asignar una o más clases CSS al botón, lo que permite aplicar estilos específicos al botón. 

- `<h1>`: Se utiliza para definir el encabezado de nivel 1 en una página web, que generalmente es el título principal o más importante de la página. Es el encabezado más grande y visualmente destacado.

- \- `<h4>`: Se utiliza para definir el encabezado de nivel 4 en una página web, que es de menor importancia que `<h1>, <h2> y <h3>,` pero más que `<h5> y <h6>.`

  \- `<p>:` Se utiliza para definir un párrafo de texto en una página web. Se utiliza para agrupar y estructurar texto en párrafos, lo que facilita la legibilidad y la organización del contenido.

APUNTES CSS
padding: ;
El padding en CSS sirve para agregar espacio alrededor del contenido de un elemento HTML. Este espacio se añade entre el borde del elemento y su contenido interno. 

font-family: ;
La propiedad font-family en CSS se utiliza para especificar la fuente o fuentes que se utilizarán para mostrar el texto dentro de un elemento HTML. Puedes proporcionar una lista de nombres de fuentes en orden de preferencia, separados por comas. El navegador intentará utilizar la primera fuente de la lista, y si no está disponible, utilizará la siguiente, y así sucesivamente hasta encontrar una fuente que pueda mostrar el texto.

z-index:
La propiedad z-index en CSS se utiliza para controlar el apilamiento de elementos posicionados en capas en un diseño web. Se aplica a elementos que tienen una propiedad de posición establecida, como position: relative, absolute, etc.
El valor de z-index determina la posición de un elemento a lo largo del eje Z, que es perpendicular al plano de la pantalla. Los elementos con un z-index mayor se superponen sobre aquellos con un z-index menor. Si dos elementos tienen el mismo z-index, el orden de apilamiento se determina por el orden en el que aparecen en el código HTML, es decir, el último elemento aparecerá encima de los anteriores.

text-decoration:
La propiedad text-decoration en CSS se utiliza para controlar la decoración del texto, como subrayado, tachado, línea sobre el texto, entre otros. Puede tomar varios valores:
none: No hay ninguna decoración en el texto.
underline: El texto se subraya.
overline: Se dibuja una línea encima del texto.
line-through: Se dibuja una línea a través del texto (tachado).

display:
La propiedad display en CSS se utiliza para controlar cómo se muestra un elemento en el diseño de una página web. Puede tomar varios valores, cada uno afectando la forma en que se comporta el elemento en el flujo del documento:
block: El elemento se muestra como un bloque, lo que significa que ocupa todo el ancho disponible y se coloca en una nueva línea.
inline: El elemento se muestra como una caja en línea, lo que significa que solo ocupa el ancho del contenido y no inicia una nueva línea.
inline-block: Similar a inline, pero permite especificar un ancho y alto para el elemento, y aún así se comporta como un elemento en línea.
none: El elemento no se muestra en absoluto, como si estuviera oculto.
flex: El elemento se comporta como un contenedor flexible y permite un fácil manejo de su disposición y alineación de sus elementos secundarios.
grid: El elemento se comporta como un contenedor de cuadrícula, lo que permite un posicionamiento más complejo de sus elementos secundarios en una cuadrícula bidimensional.
table: El elemento se comporta como un elemento de tabla (<table>), y sus hijos se comportarán como filas, columnas o celdas de una tabla, dependiendo del valor de display aplicado a ellos.

grid-template-columns:
La propiedad grid-template-columns en CSS se utiliza para definir el tamaño y la distribución de las columnas en un contenedor de cuadrícula (display: grid). Permite especificar el ancho de cada columna en la cuadrícula.
Puedes definir el tamaño de las columnas utilizando valores como píxeles, porcentajes, fracciones (fr), unidades flexibles (fr), entre otros.

font-size:
La propiedad font-size en CSS se utiliza para establecer el tamaño de la fuente para el texto dentro de un elemento HTML. Puede tomar varios tipos de valores:
Tamaños absolutos: como píxeles (px), puntos (pt), milímetros (mm), centímetros (cm), etc. Estos valores proporcionan un tamaño de fuente fijo independiente de otros factores, como el tamaño de la ventana del navegador o las preferencias del usuario.
Tamaños relativos: como porcentajes (%) o la unidad em. Estos valores se basan en el tamaño de fuente del elemento padre o en un valor base establecido en otra parte del estilo.

width:
La propiedad width en CSS se utiliza para establecer el ancho de un elemento HTML. Puede tomar varios tipos de valores, incluyendo:
Longitudes absolutas: como píxeles (px), puntos (pt), milímetros (mm), centímetros (cm), etc. E
Porcentajes (%): Estos valores establecen el ancho del elemento como un porcentaje del ancho de su contenedor padre. 
auto: El navegador calculará automáticamente el ancho del elemento basado en su contenido y las reglas de diseño.

outline: [ancho] [estilo] [color];
La propiedad outline en CSS se utiliza para establecer un contorno alrededor de un elemento HTML, similar al borde (border), pero a menudo se usa de manera diferente.

La diferencia clave entre outline y border es que el outline no afecta al tamaño o diseño del contenedor, no ocupa espacio adicional y no influye en el diseño de la página. Se utiliza principalmente para resaltar elementos, como enlaces o campos de entrada de formularios, sin alterar el diseño visual.

height:
La propiedad height en CSS se utiliza para establecer la altura de un elemento HTML. Puede tomar varios tipos de valores, incluyendo:
Longitudes absolutas: c
Porcentajes (%): E
auto: 

overflow:
La propiedad overflow en CSS se utiliza para controlar cómo se maneja el contenido que desborda los límites de un contenedor con un tamaño fijo.
visible: El contenido que desborda el contenedor es visible fuera de los límites del contenedor.
hidden: El contenido que desborda el contenedor está oculto y no es visible fuera de los límites del contenedor.
scroll: Se agrega una barra de desplazamiento al contenedor, permitiendo al usuario desplazarse para ver el contenido que desborda los límites del contenedor.
auto: Similar a scroll, pero el navegador decide si agregar una barra de desplazamiento según sea necesario para mostrar el contenido que desborda.

top:
La propiedad top en CSS se utiliza para posicionar un elemento en relación con su contenedor padre o, en el caso de elementos posicionados de manera absoluta o fija, en relación con el contenedor más cercano que tenga una posición relativa, absoluta o fija establecida.
Se utiliza comúnmente en combinación con otras propiedades de posición como position: relative, position: absolute, o position: fixed.
Cuando se utiliza con position: relative, top especifica la distancia en píxeles o porcentajes que el elemento se moverá hacia abajo desde su posición original.
Cuando se utiliza con position: absolute o position: fixed, top especifica la distancia en píxeles o porcentajes desde la parte superior del contenedor de posicionamiento más cercano.

transform:
La propiedad transform en CSS se utiliza para aplicar transformaciones a un elemento, como rotación, escala, traslación (movimiento), inclinación, etc.

header::before 
La selección header::before en CSS se utiliza para aplicar estilos a un pseudo-elemento ::before que se coloca antes del contenido del elemento <header> en el documento HTML.
Este pseudo-elemento se utiliza comúnmente para añadir contenido decorativo o estilos adicionales a un elemento sin necesidad de agregar elementos adicionales al HTML.

Content: ;
La propiedad content en CSS se utiliza para insertar contenido generado con pseudo-elementos (::before y ::after). Sin embargo, su uso está limitado a pseudo-elementos y no es aplicable directamente a los elementos HTML regulares.

Font-weight:
La propiedad font-weight en CSS se utiliza para especificar el grosor o el peso de la fuente para el texto dentro de un elemento HTML. Puede tomar varios valores, que van desde normal hasta bold y valores numéricos que van desde 100 hasta 900, donde 400 generalmente se considera normal y 700 se considera bold.
normal: Define la fuente con un grosor normal.
bold: Define la fuente con un grosor más oscuro que normal.
Valores numéricos de 100 a 900: Define el grosor específico de la fuente. 