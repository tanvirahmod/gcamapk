const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "database.sqlite3"
    },
    useNullAsDefault: true
})


// const connectedKnex = knex({
//     client: 'mysql',
//     connection: {
//       host : "104.156.49.206",
//       port : 3306,
//       user : "sobdarth_ourpython",
//       password : "@1tanvir.comahmedoke",
//       database : "sobdarth_python_doc"
//     },
//     useNullAsDefault: true
// })







module.exports = connectedKnex;