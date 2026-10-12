// 1. CAPA DE DATOS (Singleton)
class CarritoDB {
    constructor() {
        if (CarritoDB.instancia) {
            return CarritoDB.instancia;
        }
        this.productos = [];
        CarritoDB.instancia = this;
    }

    obtenerProductos() {
        return this.productos;
    }

    guardarProducto(producto) {
        this.productos.push(producto);
    }
}

// 2. CAPA DE NEGOCIO (Lógica)
class CarritoServicio {
    constructor() {
        this.db = new CarritoDB();
    }

    agregar(producto) {
        if (producto.precio <= 0) {
            throw new Error("El precio no es válido");
        }
        this.db.guardarProducto(producto);
        console.log(`[Negocio] Agregado: ${producto.nombre}`);
    }

    calcularTotal() {
        const lista = this.db.obtenerProductos();
        return lista.reduce((total, item) => total + item.precio, 0);
    }
}

// 3. CAPA DE PRESENTACIÓN (Ejecución)
function iniciarApp() {
    console.log("=== TIENDA DIYEH RACING STORE ===");
    
    const servicio = new CarritoServicio();

    servicio.agregar({ nombre: "Exosto Pulsar NS 200", precio: 100000 });
    servicio.agregar({ nombre: "Pastillas de freno Duke NG", precio: 95000 });
    servicio.agregar({ nombre: "Pastillas de freno Duke clasica", precio: 90000 });

    // Prueba del Singleton (creamos otro carrito de prueba)
    const otroCarrito = new CarritoDB();
    console.log("Total de productos en el carrito único:", otroCarrito.obtenerProductos().length);

    const total = servicio.calcularTotal();
    console.log(`[Presentación] Total a pagar: $${total} COP`);
}

iniciarApp();