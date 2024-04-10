const express = require('express')
const router = express.Router()
const db = require("../db/table_data")



// English to Bengali Homepage sobdartho.com/tag/
router.get('/', (req, res) => {
    let qu = req.query.query
    if (qu) {
        return res.redirect(`/search/${qu.replace(/\s+$/, '').toLowerCase()}?page=1`);
    }
    res.render('tags/tag_home')
    })



// tag Results page
// router.get('/:input', async(req, res) => {
//     let qu = req.query.query
//     if (qu) {
//         return res.redirect(`/tag/${qu.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
//     }
//     const python_doc = await db.getTags();
//     if (python_doc) {
//         res.render('tags/tags',{word:req.params.input, info: python_doc})
//     } else {
//         return res.redirect(`not-found/404`);
//     }
    
//     // res.status(200).json({tag_doc})
// })


router.get('/:input', async(req, res) => {
    let qu = req.query.query
    if (qu) {
        return res.redirect(`/search/${qu.replace(/\s+$/, '').toLowerCase()}?page=1`);
    }
 
    let page = req.query.page ? req.query.page : "1";

    const python_doc = await db.getTags(req.params.input).paginate({
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
        res.render('tags/tags',{word:req.params.input, info: python_doc, page_no:page_no})
  }})
  








// not found 404 page
router.get('/not-found/404', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/tag/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('tags/not_found')
    })


module.exports = router