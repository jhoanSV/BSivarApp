import { Router } from 'express';
import { getTasks, 
        ValidarDatos, 
        BuscarClientesTodos, 
        aTablas, 
        consecutivos, 
        DatosProgreso, 
        PedidosEnviados, 
        DetalleDelPedidoVendedor, 
        PedidosCerrados, 
        PedidosPorEntregar,
        DetallePedidoEntregas, 
        ActualizarProcesoDelPedido, 
        DetallePedidoCerrado,
        ListOfAlias,
        ProductDataWeb,
        checkLogInData,
        changePassword,
        BottonCaroucel,
        CustomerDetail,
        getProductDetailAll
        } from '../controllers/tasks';


const router = Router();

/**
 * @swagger
 * tags:
 *  name: products
 *  description: products endpoints
 */

/**
 * @swagger
 * /tasks:
 * get:
 *  summary: Get all products
 *  tags: [products]
 */
router.get('/app', getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get:
 *  summary: count all the products
 *  tags: [products]
 */
/*router.get('/tasks/search/:cod', searchTasks)*/

/**
 * @swagger
 * /tasks/:cod:
 *  get:
 *  summary: Get a product by cod
 *  tags: [products]
 */
/*router.get('/tasks/:cod', getTask)*/

/**
 * @swagger
 * /tasks:
 *  get:
 *  summary: save a new product
 *  tags: [products]
 */
/*router.get('/tasks/clientes/:cod', clientes)*/

router.post('/app/validar', ValidarDatos)

router.get('/app/BuscarClientesTodos/:cod', BuscarClientesTodos)

router.post('/app/aTablas', aTablas)

router.post('/app/con', consecutivos)

router.get('/app/DatosProgreso/:cod', DatosProgreso)

router.get('/app/PedidosEnviados/:cod', PedidosEnviados)

router.get('/app/DetallePedidoVendedor/:cod', DetalleDelPedidoVendedor)

router.get('/app/PedidosCerrados/:cod', PedidosCerrados)

router.get('/app/PedidosPorEntregar/:cod', PedidosPorEntregar)

router.get('/app/DetallePedidoEntregas/:cod', DetallePedidoEntregas)

router.post('/app/ActualizarProcesoDelPedido', ActualizarProcesoDelPedido)

router.get('/app/DetallePedidoCerrado/:cod', DetallePedidoCerrado)

router.post('/app/getProductDetailAll', getProductDetailAll)

router.post('/app/customerdetail', CustomerDetail)




//Routes for the webpage
router.post('/tasks/login', checkLogInData)

router.post('/tasks/Changepassword', changePassword)

router.get('/tasks/TAlias', ListOfAlias)

router.post('/tasks/productsdataweb', ProductDataWeb)

//router.post('/tasks/BottonCaroucel', BottonCaroucel)

//router.post('/tasks/SendSale', SendSale)

export default router
