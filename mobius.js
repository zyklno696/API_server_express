import { createConnection } from 'mysql';


const conn = createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "l2jmobiush5",
    password: "123123123"
});


conn.connect(err =>{
    if (err) {
        console.log(err);
        return err;
    }
    else {
        console.log('Manole conection OK');
    }
});

// Подключение к таблице
let query = "SELECT * FROM characters";

// Отобразить все данные из таблицы
conn.query(query, (err, result, field)=>{
    console.log(err);
    console.log(result);
    console.log(result[1]['char_name']);
    // console.log(field);
});


conn.end(err =>{
    if (err) {
        console.log(err);
        return err;
    }
    else {
        console.log('Manole conection lost');
    }
});