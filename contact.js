jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

    $("#nameDetails").hide();
    $("#messageScreen").hide();
      obj = [];
	   $.getJSON('./contacts.json',function(data)
        {
          data = data.contacts;
          $.each(data, function(){
		  $('.names').append('<li>'+ this['name'] +'</li>');
           })

        $("#tab1 div").on("click", "li", function() {
          var tabIndex = $(this).index();
          x=this.textContent;
          $('.names').hide();
          $("#nameDetails").show();
          for(var i=0; i<= data.length;i++)
          {
             if(x==data[i].name) {
              nameId = data[i].name;
               document.getElementById("nameid").innerHTML=data[i].name;
                document.getElementById("phoneid").innerHTML=data[i].phone;
                 document.getElementById("emailid").innerHTML=data[i].email;
             }
          }

          });
      });

    $('#sendMsg').on("click",function() {
        $("#nameDetails").hide();
        $("#messageScreen").show();
        content = "Hi Your OTP is "+ Math.floor(Math.random()*999999);
         $("#txtMsg").val(content);
        var test = localStorage.getItem("test");
        obj.push({"name": nameId ,"msg":content });
          localStorage.setItem("test",JSON.stringify(obj));

    });

    $("#messages").on("click", function() {

      contactsDetail = JSON.parse(localStorage.getItem("test"));
      $.each(contactsDetail, function(){
      $('#messagesList').append('<li>'+ this['name'] +'<br>'+ this['msg'] +'</li>');
    });

    });
});
