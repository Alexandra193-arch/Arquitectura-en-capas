class Inventario {

public void consultarMaterial() (

System.out.println("Material disponible en inventario");

class Ventas (

public void registrarventa() (

} System.out.println("Venta registrada correctamente");

class Factura (

public void generarFactura() (

System.out.println("Factura generada correctamente");

public class Main (

public static void main(String[] args)

// Creamos los módulos del sistema Inventario inventario new Inventario();//

Ventas ventas-new Ventas();

Factura factura new Factura();

// Ejecutamos las funciones

Inventario.consultarMaterial();

ventas.registrarVenta();

factura.generarfactura();