var con;
//   localStorage.setItem('Benjamin','Visual');
//   console.log(localStorage.getItem('Benjamin'));
// const con = require('./connect');
function validarDatos(){
    const user = document.getElementById('nombre').value;
    const password = document.getElementById('contrasena').value;
    if(user=='B' && password=='123'){
        location.href='index2.html'
    }
    else{
        alert('Datos incorrectos, intente de nuevo')
    }
}
function sendParams() {

    con = require('./connect');
    // localStorage.setItem('con', con);

    // const host = document.getElementById('host').value;
    // const user = document.getElementById('user').value;
    // const password = document.getElementById('password').value;
    // const database = document.getElementById('database').value;
    // const port = document.getElementById('port').value;

    // document.getElementById('txtData').value = `host: ${host} user: ${user} password: ${password} database: ${database} port: ${port}`;


}

function addData() {
    // con = localStorage.getItem('Benjamin')
    con = require('./connect');
    // const id = 0;
    // Crear query para INSERT, SELECT, UPDATE O DELETE
    const nombre =document.getElementById('nombre').value;
    const ap_pat = document.getElementById('ap_pat').value;
    const ap_mat = document.getElementById('ap_mat').value;
    const edad = document.getElementById('edad').value

    // $query = `INSERT INTO persona (nombre, ap_pat, ap_mat, edad) VALUES (${nombre},${ap_pat},${ap_mat},${edad} )`;

    $query = `INSERT INTO persona (nombre, ap_pat, ap_mat, edad) VALUES ("${nombre}","${ap_pat}","${ap_mat}","${edad}")`;

    con.query($query, function (err, rows, fields) {

        if (err) {
            console.log('Error Query');
            console.log(err);
            alert(err);
            return;
        }

        console.log("Query exitoso", rows);
        alert (rows);
        selectData()
    });

    // con.end(function () {
    // Conexión Finalizada 
    // Input data conection database
}

function selectData(){
    $query = `select * from persona`;
    con.query($query, function (err, rows, fields) {
        if (err) {
            console.log('Error Query');
            console.log(err);
            alert(err);
            return;
        }
        let html='',fila1="<tr><td>id</td> <td>Nombre</td> <td>Apellido Paterno</td> <td>Apellido Materno</td> <td>Edad</td></tr>";
        rows.forEach(function(element){
            html+="<tr><td>"+element.id+"</td> <td>"+element.nombre+"</td> <td>"+element.ap_pat+"</td> <td>"+element.ap_mat+"</td> <td>"+element.edad+"</td></tr>"; 
        });
        document.getElementById('table').innerHTML = fila1;
        document.getElementById('table').innerHTML+=html;
    });
}