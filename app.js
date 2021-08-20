const express = require('express');

const landingPageRouter = require("./routes/LandingPageRouter");
const galleryPageRouter = require("./routes/GalleryPageRouter");
const nearByPageRouter = require("./routes/NearByPageRouter");
const contactPageRouter = require("./routes/ContactPageRouter");
const FAQPageRouter = require("./routes/FAQPageRouter");
const app = express();
app.use('/',landingPageRouter);
app.use('/gallery',galleryPageRouter);
app.use('/nearby',nearByPageRouter);
app.use('/contact',contactPageRouter);
app.use('/FAQ',FAQPageRouter);
app.use(express.static('public/images'));
app.use(express.static('public/css'));
app.use(express.static('public/java_script'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.listen(3001);