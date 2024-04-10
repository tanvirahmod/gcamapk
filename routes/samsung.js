const express = require('express')
const router = express.Router()
const db = require("../db/table_data")


// English to Bengali Homepage sobdartho.com/python/
router.get('/', async(req, res) => {
    let qu = req.query.query
    let brandName = req.baseUrl.substring(1)
    brandName = brandName.replace(brandName[0],brandName[0].toLocaleUpperCase())
    if (qu) {
        return res.redirect(`/search/${qu.replace(/\s+$/, '').toLowerCase()}?page=1`);
    }
    const getAllBrand = await db.getAll(brandName);

    if(getAllBrand.length > 0){
        res.render('python/python_home')
    }else{
        return res.redirect(`not-found/404`);
    }

})


// python Results page
router.get('/:input', async (req, res) => {
    let qu = req.query.query
    let baseURL = req.baseUrl
    if (qu) {
        return res.redirect(`/search/${qu.replace(/\s+$/, '').toLowerCase()}?page=1`);
    }
    const python_doc = await db.getOne(req.params.input);
    // android version verity
    let android_version_verity = python_doc?.android_version.split("(")[1]?.replace(")", "")
    android_version_verity = parseInt(android_version_verity)
    let developers
    let gcam_version
    let features
    if (android_version_verity < 6) {
        gcam_version = "GCam Go"
        developers = "Greatness, Shamim and Wichaya"
        features = "<li>Night Mode uses advanced algorithms for brighter and clearer photos in low-light conditions.</li><li>Brings computational photography technology.</li><li>Improves camera Performance on entry-level smartphones.</li><li>Added Night Mode and Folter Mode from Pixel Camera</li><li>HDR+ Support.</li><li>The zoom level is increased to 100X for all devices</li><li>64-bit photo support and Support for secondary cameras.</li>"
    } else if (android_version_verity >= 6 && android_version_verity < 7) {
        gcam_version = "GCam 3.2"
        developers = "MGC"
        features = "<li>HDR+ with Exposure and White Balance Controls - Take incredible photos using HDR+, especially in low-light or backlit scenes.</li><li>Night Sight - You’ll never want to use your flash again. Night Sight brings out all the details and colors that get lost in the dark. You can even take photos of the Milky Way with Astrophotography!</li><li>Super Res Zoom - Get way close from far away. Super Res Zoom makes your pictures sharper when you zoom in.</li><li>Long Exposure - Add a creative blur to moving subjects in the scene</li><li>Action Pan - Add a creative blur to the background while keeping your subject in focus</li><li>Macro Focus - Vivid color and striking contrast in even the smallest subjects</li><li>Record smooth videos with stunning resolution and clear audio, even in crowded, dimly lit places.</li><li>Cinematic Blur - Create a cinematic effect by blurring the background behind your subject.</li><li>Cinematic Pan - Slow down your phone’s panning movements.</li><li>Long Shot - Take casual, quick videos by simply long-pressing the shutter key while in the default photo mode</li>"
    } else if (android_version_verity >= 7 && android_version_verity < 8 ) {
        gcam_version = "GCam 4"
        developers = "BSG and ivanich"
        features = "<li>HDR+ with Exposure and White Balance Controls - Take incredible photos using HDR+, especially in low-light or backlit scenes.</li><li>Night Sight - You’ll never want to use your flash again. Night Sight brings out all the details and colors that get lost in the dark. You can even take photos of the Milky Way with Astrophotography!</li><li>Super Res Zoom - Get way close from far away. Super Res Zoom makes your pictures sharper when you zoom in.</li><li>Long Exposure - Add a creative blur to moving subjects in the scene</li><li>Action Pan - Add a creative blur to the background while keeping your subject in focus</li><li>Macro Focus - Vivid color and striking contrast in even the smallest subjects</li><li>Record smooth videos with stunning resolution and clear audio, even in crowded, dimly lit places.</li><li>Cinematic Blur - Create a cinematic effect by blurring the background behind your subject.</li><li>Cinematic Pan - Slow down your phone’s panning movements.</li><li>Long Shot - Take casual, quick videos by simply long-pressing the shutter key while in the default photo mode</li>"
    } else if (android_version_verity >= 8 && android_version_verity < 9 ) {
        gcam_version = "GCam 5, GCam 6.1"
        developers = "Arnova"
        features = "<li>HDR+ - Take pictures using HDR+ to capture fantastic photos, especially in low-light or backlit scenes.</li><li>Video Stabilization - Capture exceptionally smooth videos even if your hands shake.</li><li>Smartburst - Hold down the shutter button to automatically capture a stream of photos and make moving GIFs.</li><li>Photo sphere - Create immersive spherical photos.</li><li>Lens Blur - Add elegant background blur (bokeh) to close-up pictures.</li><li>Slow Motion - Capture action in epic slow motion video (up to 240fps on some supported devices).</li>"
    } else if (android_version_verity >= 9 && android_version_verity < 10 ) {
        gcam_version = "GCam 6.2, GCam 6.3, GCam 7.2, GCam 7.3+"
        developers = "Urny, Arnova, BSG, Nikita, Wichaya, Greatness, wyroczen, Zoran, the_dise, San1ty and cstark"
        features = "<li>HDR+ - Take pictures using HDR+ to capture fantastic photos, especially in low-light or backlit scenes.</li><li>Video Stabilization - Capture exceptionally smooth videos even if your hands shake.</li><li>Smartburst - Hold down the shutter button to automatically capture a stream of photos and make moving GIFs.</li><li>Photo sphere - Create immersive spherical photos.</li><li>Lens Blur - Add elegant background blur (bokeh) to close-up pictures.</li><li>Slow Motion - Capture action in epic slow motion video (up to 240fps on some supported devices).</li><li>Night Sight - You’ll never want to use your flash again. Night Sight brings out all the best details and colors that get lost in the dark.</li><li>Top Shot - Pick the perfect moment with Top Shot. Automatically recommends the best pics, where no one is blinking and everything looks just right.</li><li>Google Lens Suggestions - Just point your camera at contact info, URLs, and barcodes, and it’ll automatically suggest things to do like calling the number, or sending an email.</li><li>Playground - Have fun mixing the real world with the virtual through AR stickers and effects!</li>"
    } else if (android_version_verity >= 10 && android_version_verity < 11 ) {
        gcam_version = "GCam 8.1 - GCam 8.4"
        developers = "BSG, BigKaka, Hasli, Greatness, Nikita, Wichaya, Arnova, Urnyx, Wyroczen and MPV"
        features = "<li>HDR+ - Take pictures using HDR+ to capture fantastic photos, especially in low-light or backlit scenes.</li><li>Video Stabilization - Capture exceptionally smooth videos even if your hands shake.</li><li>Smartburst - Hold down the shutter button to automatically capture a stream of photos and make moving GIFs.</li><li>Photo sphere - Create immersive spherical photos.</li><li>Lens Blur - Add elegant background blur (bokeh) to close-up pictures.</li><li>Slow Motion - Capture action in epic slow motion video (up to 240fps on some supported devices).</li><li>Night Sight - You’ll never want to use your flash again. Night Sight brings out all the best details and colors that get lost in the dark.</li><li>Top Shot - Pick the perfect moment with Top Shot. Automatically recommends the best pics, where no one is blinking and everything looks just right.</li><li>Google Lens Suggestions - Just point your camera at contact info, URLs, and barcodes, and it’ll automatically suggest things to do like calling the number, or sending an email.</li><li>Playground - Have fun mixing the real world with the virtual through AR stickers and effects!</li>"
    } else if (android_version_verity >= 11 && android_version_verity < 12 ) {
        gcam_version = "GCam 8.6+"
        developers = "BSG, BigKaka, Arnova and Shamim"
        features = "<li>HDR+ - Take pictures using HDR+ to capture fantastic photos, especially in low-light or backlit scenes.</li><li>Video Stabilization - Capture exceptionally smooth videos even if your hands shake.</li><li>Smartburst - Hold down the shutter button to automatically capture a stream of photos and make moving GIFs.</li><li>Photo sphere - Create immersive spherical photos.</li><li>Lens Blur - Add elegant background blur (bokeh) to close-up pictures.</li><li>Slow Motion - Capture action in epic slow motion video (up to 240fps on some supported devices).</li><li>Night Sight - You’ll never want to use your flash again. Night Sight brings out all the best details and colors that get lost in the dark.</li><li>Top Shot - Pick the perfect moment with Top Shot. Automatically recommends the best pics, where no one is blinking and everything looks just right.</li><li>Google Lens Suggestions - Just point your camera at contact info, URLs, and barcodes, and it’ll automatically suggest things to do like calling the number, or sending an email.</li><li>Playground - Have fun mixing the real world with the virtual through AR stickers and effects!</li><li>Motion Mode - Capture life in motion. Take professional quality Long Exposure and Action Pan photos.</li>"
    } else if (android_version_verity >= 12) {
        gcam_version = "GCam 9.0+"
        developers = "BSG, BigKaka and Shamim"
        features = "<li>HDR+ with Exposure and White Balance Controls - Take pictures using HDR+ to capture fantastic photos, especially in low-light or backlit scenes.</li><li>Video Stabilization - Capture exceptionally smooth videos even if your hands shake.</li><li>Smartburst - Hold down the shutter button to automatically capture a stream of photos and make moving GIFs.</li><li>Photo sphere - Create immersive spherical photos.</li><li>Lens Blur - Add elegant background blur (bokeh) to close-up pictures.</li><li>Slow Motion - Capture action in epic slow motion video (up to 240fps on some supported devices).</li><li>Night Sight - You’ll never want to use your flash again. Night Sight brings out all the best details and colors that get lost in the dark.</li><li>Top Shot - Pick the perfect moment with Top Shot. Automatically recommends the best pics, where no one is blinking and everything looks just right.</li><li>Google Lens Suggestions - Just point your camera at contact info, URLs, and barcodes, and it’ll automatically suggest things to do like calling the number, or sending an email.</li><li>Playground - Have fun mixing the real world with the virtual through AR stickers and effects!</li><li>Motion Mode - Capture life in motion. Take professional quality Long Exposure and Action Pan photos.</li>"
    }


    if (python_doc && python_doc.brand.toLowerCase() == baseURL.substring(1)) {
        const check = await db.getEvery(python_doc.id);
        res.render('python/python', { word: req.params.input, info: python_doc, check: check, android_verisons: android_version_verity, developers:developers, gcam_version:gcam_version, features:features  })
    } else {
        return res.redirect(`not-found/404`);
    }

    // res.status(200).json({python_doc})
})




// not found 404 page
router.get('/not-found/404', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
        return res.redirect(`/samsung/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('python/not_found')
})


module.exports = router
