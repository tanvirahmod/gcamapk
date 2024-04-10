const knex = require("./knex");
// these two lines for knex-paginate--------------
const { attachPaginate } = require('knex-paginate');
attachPaginate();

// Functions for English to Bengali -----------------------------------------------
// function createWord(word) {
//     return knex("eng2bn").insert(word);
// }
function getAll(brandName){
    return knex("gcamTable").where("brand", brandName);
}

function getOne(input) {
    return knex("gcamTable").where("url", input).first();
}


function getEvery(id) {
//     return knex("bn2bn").where("word", input).first();
    // return knex("gcamTable").select("url","tags");
    return knex("gcamTable").whereIn('id', [id-20, id-19, id-18, id-17, id-16, id-15,id-14, id-13, id-12,id-11, id-10, id-9,id-8, id-7, id-6,id-5, id-4, id-3,id-2, id-1,id, id+1, id+2, id+3, id+4, id+5,id+6, id+7, id+8,id+9, id+10, id+11,id+12, id+13, id+14,id+15, id+16, id+17,id+18, id+19, id+20]).select("phone_title","brand","url");
    // return knex.raw('select url from gcamTable where id in (?)', [[29999, 29998, 29991]]) // not working
    // return knex("gcamTable").where("id", 'like', `%${id}%`).select("url","tags");
}

function getTags(input) {
    // return knex("gcamTable").select("tags","header","url");
    return knex("gcamTable").where("url",'like', `%${input}%`).select("brand","phone_title","url");
}



function getSearch(input) {
    // return knex("gcamTable").select("tags","header","url");
    return knex("gcamTable").where("phone_title",'like', `%${input}%`).select("phone_title","url","brand");
}


// function deleteWord(id) {
//     return knex("eng2bn").where("id", id).del();
// }

// function updateWord(id,word) {
//     return knex("eng2bn").where("id", id).update(word);
// }



module.exports = {
    // for python output
    getOne,
    getEvery,
    getTags,
    getSearch,
    getAll
}