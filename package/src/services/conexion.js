const {Client} = required("pg");
const obtenerEstablecimiento = async () => {
    const client = new Client({
        user: "postgres",
        host: "localhost",
        databse: "eeis_bd",
        password: "alohechopecho",
        port: 5432,
        ssl: {
            rejectUnauthorized: false,
        },
    });
    await client.connect();
    const res = await client.query("SELECT * FROM establecimiento");
    const result = res.rows;
    await client.end();
    return result;
}

obtenerEstablecimiento().then((result) => {
    console.log(result); 
});