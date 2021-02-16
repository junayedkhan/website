

$(document).ready(()=> {

   const root_url = 'http://localhost:1000'
   var pattern = /^[a-zA-Z]*$/;

   $.get(`${root_url}/utility`, res => {
      $('input[name="logo"]').val(res.logo)
      $('input[name="baner_name"]').val(res.baner_name)
      $('input[name="baner_designation"]').val(res.baner_designation)
      $('input[name="baner_button"]').val(res.baner_button)
      $('input[name="facebook"]').val(res.facebook)
      $('input[name="twitter"]').val(res.twitter)
      $('input[name="instagram"]').val(res.instagram)
      $('input[name="youtube"]').val(res.youtube)
   
      $('#utility_img').html(`<img width="250" height="400" src="${root_url}/${res.upload_baner_photo}" alt="">`)
   })

   $('.utility_form_submit').submit((event)=> {
      event.preventDefault()
      
      $("#logo_error_message").hide();
      $("#baner_name_error_message").hide();
      $("#baner_designation_error_message").hide()
      $("#baner_btn_error_message").hide()
      $("#facebook_error_message").hide()
      $("#twitter_error_message").hide()
      $("#instagram_error_message").hide()
      $("#youtube_error_message").hide()
      $("#upload_baner_photo_error_message").hide()

      let logo = $('input[name="logo"]').val()
      let baner_name = $('input[name="baner_name"]').val()
      let baner_designation = $('input[name="baner_designation"]').val()
      let baner_button = $('input[name="baner_button"]').val()
      let facebook = $('input[name="facebook"]').val()
      let twitter = $('input[name="twitter"]').val()
      let instagram = $('input[name="instagram"]').val()
      let youtube = $('input[name="youtube"]').val()
      let upload_baner_photo = $('input[name="upload_baner_photo"]')[0].files[0]

      //validation 

      if(logo === ""){
         $("#logo_error_message").html("content is empty").css('color','red');
         $("#logo_error_message").show();
      } else if(!pattern.test(logo)) {
         $("#logo_error_message").html("Should contain only Characters").css('color','red');
         $("#logo_error_message").show();
      }else if(baner_name === ""){
         $("#baner_name_error_message").html("content is empty").css('color','red');
         $("#baner_name_error_message").show();
      } else if(!pattern.test(baner_name)) {
         $("#baner_name_error_message").html("Should contain only Characters").css('color','red');
         $("#baner_name_error_message").show();
      } else if(baner_designation === ""){
         $("#baner_designation_error_message").html("content is empty").css('color','red');
         $("#baner_designation_error_message").show();
      } else if(!pattern.test(baner_designation)) {
         $("#baner_designation_error_message").html("Should contain only Characters").css('color','red');
         $("#baner_designation_error_message").show();
      } else if(baner_button === ""){
         $("#baner_btn_error_message").html("content is empty").css('color','red');
         $("#baner_btn_error_message").show();
      } else if(!pattern.test(baner_button)) {
         $("#baner_btn_error_message").html("Should contain only Characters").css('color','red');
         $("#baner_btn_error_message").show();
      } else if(facebook === ""){
         $("#facebook_error_message").html("content is empty").css('color','red');
         $("#baner_name_error_message").show();
      } else if(twitter === ""){
         $("#twitter_error_message").html("content is empty").css('color','red');
         $("#twitter_error_message").show();
      } else if(instagram === ""){
         $("#instagram_error_message").html("content is empty").css('color','red');
         $("#instagram_error_message").show();
      } else if(youtube === ""){
         $("#youtube_error_message").html("content is empty").css('color','red');
         $("#youtube_error_message").show();
      } else if(!upload_baner_photo === ""){
         $("#youtube_error_message").html("content is empty").css('color','red');
         $("#youtube_error_message").show();
      } else {

         // send data form server

         var utility_data = new FormData();
         utility_data.append('logo', logo)
         utility_data.append('baner_name', baner_name)
         utility_data.append('baner_designation', baner_designation)
         utility_data.append('baner_button', baner_button)
         utility_data.append('facebook', facebook)
         utility_data.append('twitter', twitter)
         utility_data.append('instagram', instagram)
         utility_data.append('youtube', youtube)
         utility_data.append('upload_baner_photo', upload_baner_photo)

         $.ajax({
            url:`${root_url}/utility`,
            method:"POST",
            data:utility_data,
            contentType:false,
            processData:false,
            cache:false
         }).done(res => {
            console.log(res)
         }).fail(error => {
            console.log(error)
         })
      }
   })



// utility section end

// about section start



   $('.about_form_submit').submit((event)=> {
      event.preventDefault()

      // error massage hide 
      $('#about_title_error_message').hide()
      $('#about_photo_error_message').hide()
      $('#about_designation_error_message').hide()
      $('#about_description_error_message').hide()
      $('#about_name_error_message').hide()
      $('#about_email_error_message').hide()
      $('#about_date_of_birth_error_message').hide()
      $('#about_nationality_error_message').hide()
      $('#about_address_error_message').hide()
      $('#about_btn_1_error_message').hide()
      $('#about_btn_2_error_message').hide()
      

      let about_title = $('input[name="about_title"]').val() 
      let about_photo = $('input[name="about_photo"]')[0].files[0] 
      let about_designation = $('input[name="about_designation"]').val() 
      let about_description = $('input[name="about_description"]').val() 
      let about_name = $('input[name="about_name"]').val() 
      let about_email = $('input[name="about_email"]').val() 
      let about_date_of_birth = $('input[name="about_date_of_birth"]').val() 
      let about_nationality = $('input[name="about_nationality"]').val() 
      let about_address = $('input[name="about_address"]').val() 
      let about_btn_1 = $('input[name="about_btn_1"]').val() 
      let about_btn_2 = $('input[name="about_btn_2"]').val() 


      // validation
      if(about_title === ""){
         $("#about_title_error_message").html("content is empty").css('color','red');
         $("#about_title_error_message").show();
      } else if(about_photo === ""){
         $("#about_photo_error_message").html("content is empty").css('color','red');
         $("#about_photo_error_message").show();
      } else if(about_designation === ""){
         $("#about_designation_error_message").html("content is empty").css('color','red');
         $("#about_designation_error_message").show();
      } else if(about_description === ""){
         $("#about_description_error_message").html("content is empty").css('color','red');
         $("#about_description_error_message").show();
      } else if(about_name === ""){
         $("#about_name_error_message").html("content is empty").css('color','red');
         $("#about_name_error_message").show();
      } else if(!pattern.test(about_name)){
         $("#about_name_error_message").html("Should contain only Characters").css('color','red');
         $("#about_name_error_message").show();
      } else if(about_email === ""){
         $("#about_email_error_message").html("content is empty").css('color','red');
         $("#about_email_error_message").show();
      } else if(about_date_of_birth === ""){
         $("#about_date_of_birth_error_message").html("content is empty").css('color','red');
         $("#about_date_of_birth_error_message").show();
      } else if(about_nationality === ""){
         $("#about_nationality_error_message").html("content is empty").css('color','red');
         $("#about_nationality_error_message").show();
      } else if(about_address === ""){
         $("#about_address_error_message").html("content is empty").css('color','red');
         $("#about_address_error_message").show();
      } else if(about_btn_1 === ""){
         $("#about_btn_1_error_message").html("content is empty").css('color','red');
         $("#about_btn_1_error_message").show();
      } else if(about_btn_2 === ""){
         $("#about_btn_2_error_message").html("content is empty").css('color','red');
         $("#about_btn_2_error_message").show();
      } else {
         
         // data send form server

        var about_data = new FormData();
        
        about_data.append('about_title', about_title)
        about_data.append('about_photo', about_photo)
        about_data.append('about_designation', about_designation)
        about_data.append('about_description', about_description)
        about_data.append('about_name', about_name)
        about_data.append('about_email', about_email)
        about_data.append('about_date_of_birth', about_date_of_birth)
        about_data.append('about_nationality', about_nationality)
        about_data.append('about_address', about_address)
        about_data.append('about_btn_1', about_btn_1)
        about_data.append('about_btn_2', about_btn_2)

        $.ajax({
            url: `${root_url}/about`,
            method: 'POST',
            data: about_data,
            contentType:false,
            processData:false,
            cache:false
        }).done(res=> {
           console.log(res)
        }).fail(error=> {
           console.log(error)
        })

      }
   
   })


   $.get(`${root_url}/about`, res => {
      console.log(res)
      $('input[name="about_title"]').val(res.about_title)
      $('input[name="about_designation"]').val(res.about_designation)
      $('input[name="about_description"]').val(res.about_description)
      $('input[name="about_name"]').val(res.about_name)
      $('input[name="about_email"]').val(res.about_email)
      $('input[name="about_date_of_birth"]').val(res.about_date_of_birth)
      $('input[name="about_nationality"]').val(res.about_nationality)
      $('input[name="about_address"]').val(res.about_address)
      $('input[name="about_btn_1"]').val(res.about_btn_1)
      $('input[name="about_btn_2"]').val(res.about_btn_2)

      $('#about_img').html(`<img width="250" height="400" src="${root_url}/${res.about_photo}" alt="">`)
   })

   // about section end

   // skills section start

   $('.skills_form_submit').submit((event)=> {
      event.preventDefault()

      $('#skills_title_error_message').hide()
      $('#skills_percent_error_message').hide()
      $('#skills_name_error_message').hide()
      $('#skills_description_error_message').hide()
      

      let skills_title = $('input[name="skills_title"]').val() 
      let skills_percent = $('input[name="skills_percent"]').val() 
      let skills_name = $('input[name="skills_name"]').val() 
      let skills_description = $('input[name="skills_description"]').val() 

      if(skills_title === ""){
         $("#skills_title_error_message").html("content is empty").css('color','red');
         $("#skills_title_error_message").show();
      } else if(!pattern.test(skills_title)){
         $("#skills_title_error_message").html("Should contain only Characters").css('color','red');
         $("#skills_title_error_message").show();
      } else if(skills_percent === ""){
         $("#skills_percent_error_message").html("content is empty").css('color','red');
         $("#skills_percent_error_message").show();
      } else if(skills_name === ""){
         $("#skills_name_error_message").html("content is empty").css('color','red');
         $("#skills_name_error_message").show();
      } else if(!pattern.test(skills_name)){
         $("#skills_name_error_message").html("Should contain only Characters").css('color','red');
         $("#skills_name_error_message").show();
      } else if(skills_description === ""){
         $("#skills_description_error_message").html("content is empty").css('color','red');
         $("#skills_description_error_message").show();
      } else {
          
         var skills_data = new FormData();

         skills_data.append('skills_title', skills_title)
         skills_data.append('skills_percent', skills_percent)
         skills_data.append('skills_name', skills_name)
         skills_data.append('skills_description', skills_description)

         $.ajax({
            url: `${root_url}/skills`,
            method: "POST",
            data: skills_data,
            contentType:false,
            processData:false,
            cache:false
         }).done((res) => {
            console.log(res)
         }).fail((error) => {
            console.log(error)
         })
      }




   })









})

