const express = require('express');
const samsungRoutes = require('./routes/samsung')
const tagsRoutes = require('./routes/tags')
const searchRoutes = require('./routes/search')

const app = express();



app.set('view engine','ejs')
app.use(express.static('public'));



app.use('/tag', tagsRoutes)
app.use('/search', searchRoutes)


app.get('/', (req, res) => {
    let qu = req.query.query
    if (qu) {
        return res.redirect(`/search/${qu.replace(/\s+$/, '').toLowerCase()}?page=1`);
    }
    res.render('index')
})


app.get('/privacy-policy', (req, res) => {
    res.render('otherPages/privacy_policy')
  })
  
app.get('/terms-and-conditions', (req, res) => {
    res.render('otherPages/terms_and_conditions')
  })
  
app.get('/copyright', (req, res) => {
    res.render('otherPages/copyright')
  })
  
app.get('/contact', (req, res) => {
    res.render('otherPages/contact')
  })


// sitemaps
app.get('/sitemap.xml', async function(req, res, next){
    res.set('Content-Type', 'text/xml')
    res.sendFile(__dirname + '/public/sitemaps/sitemap.xml');
  })
  

app.use('/robots.txt', function (req, res, next) {
    res.type('text/plain')
    res.send("User-agent: *\nDisallow: /admin/\nDisallow: /login/\nDisallow: /logout/");
});

app.get('/gcam-faq', (req, res) => {
  let qu = req.query.query
  if (qu) {
      return res.redirect(`/search/${qu.replace(/\s+$/, '').toLowerCase()}?page=1`);
  }
  res.render('faq-pages/gcam-faq')
})

app.use('/:brand', samsungRoutes)

// 404 not found pages --- keen bottom of the page this section-------------
app.use(function(req, res, next) {
    let queryparm = req.query.query
    if (queryparm) {
        return res.redirect(`/samsung/${queryparm}`);
    }
    res.status(404);
    // respond with html page
    if (req.accepts('html')) {
    res.render('python/not_found', { url: req.url });
    return;
    }

});


const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
})