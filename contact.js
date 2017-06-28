jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
    
    
    var phoneNum;

    $(document).ready(function(){
    $(window).load(function(){
        $("#nameDetails").hide();
    $("#messageScreen").hide();
    });
});
    
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
         // $("#nameDetails").show();
            document.getElementById('nameDetails').style.display = "block";
          for(var i=0; i< data.length;i++)
          {
             if(x==data[i].name) {
              nameId = data[i].name;
              phoneNum = data[i].phone;
               document.getElementById("nameid").innerHTML=data[i].name;
                document.getElementById("phoneid").innerHTML=data[i].phone;
                 document.getElementById("emailid").innerHTML=data[i].email;
             }
          }

          });
      });
    
    var content;
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



$('#optBtn').on("click", function()
{
    console.log("Aman");
	var xmlhttp = new XMLHttpRequest();
       //var url = "https://api.twilio.com/2010-04-01/Accounts/ACc8591e0ea12ba8dfe9ca3941f0683095/Messages.json";
	   /*var url = "http://smsc.biz/httpapi/send?username=aman.abhishek874@gmail.com&password=Amansingh&sender_id=SMSIND&route=T&phonenumber=9980946907&message=Test%20sms%20from%20aman.abhishek874@gmail.com.%20Thanks%20for%20choosing%20our%20service%20-%20USERNAME%20SERVICE%20-%20SMSC%20Platform";
      */
    for(var i=0;i<content.length;i++){
        if(content.charAt(i)==" ")
            {
                content1+="%20";
            }
        else
            {
                content1+=content.charAt(i);
            }
    }
    var url = "http://smsc.biz/httpapi/send?username=aman.abhishek874@gmail.com&password=Amansingh&sender_id=SMSIND&route=T&phonenumber="+phoneNum+"&message="+content1+"";
       xmlhttp.open("POST", url, false);
       xmlhttp.setRequestHeader("Content-type", "application/form-data");
        xmlhttp.send();
       /*xmlhttp.onreadystatechange = function () { //Call a function when the state changes.
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        alert(xmlhttp.responseText);
    }
}*/
});
    
    
});    
    