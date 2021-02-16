const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const multer = require('multer')
const fs = require('fs')
const port = process.env.port || 1000;

//mongoDB connections
const momongoDB_connections = require('./mongoDB/mongoDB_connection')
//mongoDB function call
momongoDB_connections()
//models_import
const user_model =require('./models/user_model')
const utility_model = require('./models/utility_model');
const about_model = require('./models/about_model');
const skills_model = require('./models/skills_model');
const stats_model = require('./models/stats_model')
const project_model = require('./models/project_model');
const contect_model = require('./models/contect_model');
const { static } = require('express');
// Middleware
//bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//cors
app.use(cors());
//methodOverride
app.use(methodOverride('_method'));
// file path
app.use(static('upload_file'))
//multer configaration
const storage = multer.diskStorage({
  destination:(req, file, callback)=> {
    callback(null, 'upload_file')
  },
  filename:(req, file, callback) => {
    var filename = Date.now()+'.'+String(file.originalname).split('.')[1]
    req.body.image = filename
    callback(null, filename)
  }
}) 
//
const upload = multer({
  storage:storage
})
//
  app.get("/utility", async(req, res)=> {
    let utility = await utility_model.findOne();
    if
    (utility){
      res.json(utility)
    } else {
      res.json({data: 'not found'})
    }
  })
//
app.get("/about", async(req, res) => {
  let about = await about_model.findOne();
  if(about){
    res.json(about)
  } else {
    res.json({data: 'not found'})
  }
})
//
  app.post("/utility", upload.single('upload_baner_photo'), async(req, res) => {
    const {logo,
      baner_name,
      baner_designation,
      baner_button,
      facebook,
      twitter,
      instagram,
      youtube,
      image} = req.body
    
     if(logo=="" || baner_name=="" || baner_designation=="" || baner_button=="" || facebook=="" || twitter=="" || instagram=="" || youtube=="" || image=="" ) {
      res.json({success:false, message:"Please Fill out all the Field"})
     } else {
       let utility = await utility_model.findOne();
       if(utility){
         utility.logo = logo
         utility.baner_name = baner_name
         utility.baner_designation = baner_designation
         utility.baner_button = baner_button
         utility.facebook = facebook
         utility.twitter = twitter
         utility.instagram = instagram
         utility.youtube = youtube
         utility.upload_baner_photo = image==null?utility.upload_baner_photo:image

         let updated = await utility.save()

         if(updated){
           res.json({success:true, massage: "we are done"})
         } else {
           res.json({success:false, massage: "data not found"})
         }

       } else {
         let new_data = await new utility_model({
          logo,
          baner_name,
          baner_designation,
          baner_button,
          facebook,
          twitter,
          instagram,
          youtube,
          upload_baner_photo:image
         }).save()

         if(new_data){
           res.json({success: true , message:"Data Saved Successfully"})
         } else {
           res.json({success: false, message:"Data Not Saved"})
         }
       } 
     }
  });

  app.post("/about",upload.single('about_photo'), async(req, res) => {
    const{about_title,
      image,
      about_designation,
      about_description,
      about_name,
      about_email,
      about_date_of_birth,
      about_nationality,
      about_address,
      about_btn_1,
      about_btn_2} = req.body

      if(about_title=="" || image=="" || about_designation=="" || about_description=="" || about_name=="" || about_email=="" || about_date_of_birth=="" || about_nationality=="" || about_address=="" || about_btn_1=="" || about_btn_2==""){
        res.json({success:false, message:"Please Fill out all the Field"})
      } else {
        // check data
        let about = await about_model.findOne();
        if(about){
          // update data
          about.about_title = about_title
          about.about_photo = image==null?about.about_photo:image
          about.about_designation = about_title
          about.about_description = about_title
          about.about_name = about_title
          about.about_email = about_title
          about.about_date_of_birth = about_title
          about.about_nationality = about_title
          about.about_address = about_title
          about.about_btn_1 = about_title
          about.about_btn_2 = about_title

          let about_data_update = await about.save()

          if(about_data_update){
            res.json({success:true, massage: 'about data update'})
          } else {
            res.json({success:false, massage: 'about data not update'})
          }

        } else {
          // insart data
          let new_about_data = new about_model({
                about_title,
                image,
                about_designation,
                about_description,
                about_name,
                about_email,
                about_date_of_birth,
                about_nationality,
                about_address,
                about_btn_1,
                about_btn_2
          }).save()

          if(new_about_data){
            res.json({success:true, massage: 'about data found'})
          } else {
            res.json({success:false, massage: 'about data not found'})
          }

        }
      }

  })

  app.post("/skills", (req, res) => {
    console.log(req.body);
    res.json({data: 'skills data found'})
  })

app.get('/', (req, res) => {
    res.send('<h1 style="text-align:center;">Server running </h1>')
})

app.listen(port, console.log(`server running on port ${port}`));
