const express = require('express')
const router = express.Router()
const db = require("../db/table_data")


router.get('/:input', async(req, res) => {
    const page = req.query.page
    let qu = req.query.query
    if (qu) {
        return res.redirect(`/search/${qu.replace(/\s+$/, '').toLowerCase()}?page=1`);
    }
    
    const python_doc = await db.getSearch(req.params.input).paginate({
        perPage: 10,
        currentPage: page
      })

    let page_no = []
    if(parseInt(page) == 0){
        for(a = page; a < (parseInt(page) + 6); a++){
            page_no.push(a);
        }
    }else if(parseInt(page) < 2){
        for(a = 1; a < 6; a++){
            page_no.push(a);
        }
    }else{
        for(a = parseInt(page-1) ; a < (parseInt(page) + 6); a++){
            page_no.push(a);
        }
    }

    if (python_doc) {
        res.render('search/search',{word:req.params.input, info: python_doc, page_no:page_no})
  }})
  


module.exports = router