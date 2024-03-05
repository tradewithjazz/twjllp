var submitform = true;
var is_submit = true;
var is_ajax_return = true;
//alert('hi');

  // var myParam = location.search.split('sourcesPath=')[1];
  // alert(myParam)
  
function submitcontactvalidate(form_id,name) {
    if (is_submit) {
		//alert(form_id);
        var $inputs = $('#' + form_id + ' textarea, ' + '#' + form_id + ' :input, ' + '#' + form_id + ' select');
		// alert(is_submit);
        $inputs.each(function () {
            if ($(this).attr('validate') != undefined) {
                var validation = $(this).attr('validate');
			
                var validation_array = validation.split(',');
				
                var current_name = $(this).attr('name');
                for (var i = 0; i < validation_array.length; i++)
					{
                    var validation_inner_array = validation_array[i].split('|');
                    for (var j = 0; j < validation_inner_array.length; j++)
						{
							//alert(validation_inner_array);
                        switch (validation_inner_array[j])
						{
                        case 'Required':
                            if (name == 'all' || current_name == name) 
							{
                                var value = $(this).val();
                                if (value == '' || value == validation_inner_array[j + 1])
									{
                                    $(this).removeClass('valid');
                                    $(this).addClass('error');
                                    submitform = false;
                                }
                                else 
								{
                                    $(this).removeClass('error');
                                    $(this).addClass('valid');
                                }
                            }
                            break;
                        case 'Email':
                            var isEmail = false;
                            if (validation_inner_array[j + 1] == 'ifEntered' && validation_inner_array[j + 2] == $(this).val()) {
                                isEmail = false;
                            }
                            else {
                                isEmail = true;
                            }
                            if (isEmail) {
                                if (name == 'all' || current_name == name) {
                                    var value = $(this).val();
                                    var atpos = value.indexOf("@");
                                    var dotpos = value.lastIndexOf(".");
                                    if (value == '' || value == validation_inner_array[j + 1]) {
                                        $(this).removeClass('valid');
                                        $(this).addClass('error');
                                        submitform = false;
                                    }
                                    else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= value.length) {
                                        $(this).removeClass('valid');
                                        $(this).addClass('error');
                                        submitform = false;
                                    }
                                    else {
                                        $(this).removeClass('error');
                                        $(this).addClass('valid');
                                    }
                                }
                            }
                            break;
                        case 'Phone':
                            if (name == 'all' || current_name == name) {
                                var value = $(this).val();
                                if (value == '' || value == validation_inner_array[j + 1]) {
                                    $(this).removeClass('valid');
                                    $(this).addClass('error');
                                    submitform = false;
                                }
                                else if (isNaN(value) ) {
									//|| value.length != 10
                                    $(this).removeClass('valid');
                                    $(this).addClass('error');
                                    submitform = false;
                                }
                                else {
                                    $(this).removeClass('error');
                                    $(this).addClass('valid');
                                }
                            }
                            break;
                        case 'Number':
                            if (name == 'all' || current_name == name) {
                                var value = $(this).val();
                                if (value == '' || value == validation_inner_array[j + 1]) {
                                    $(this).removeClass('valid');
                                    $(this).addClass('error');
                                    submitform = false;
                                }
                                else if (isNaN(value)) {
                                    $(this).removeClass('valid');
                                    $(this).addClass('error');
                                    submitform = false;
                                }
                                else {
                                    $(this).removeClass('error');
                                    $(this).addClass('valid');
                                }
                            }
                            break;
                        case 'Captcha':
                            if (name == 'all' || current_name == name) {
                                var value = $(this).val();
                                var region_id = validation_inner_array[j + 2];
                                is_ajax_return = false;
                                $.ajax({
                                    type: 'POST'
                                    , data: ''
             , url: SITEROOT + 'admin_contact_us/site_contact_us/checkCaptcha/' + region_id + '?captcha' + region_id + '=' + value
                                    , success: function (responseData) {
                                        is_ajax_return = true;
                                        if (responseData == 'false') {
                                            $('#captcha' + region_id).removeClass('valid');
                                            $('#captcha' + region_id).addClass('error');
                                            submitform = false;
                                        }
                                        else {
                                            $('#captcha' + region_id).removeClass('error');
                                            $('#captcha' + region_id).addClass('valid');
                                        }
                                    }
                                });
                            }
                            break;
                        }
                    }
                }
            }
        });
    }
}

function validate(form_id) {
	//alert(form_id,'validation');
    is_submit = true;
    submitform = true;
    submitcontactvalidate(form_id, 'all');
    setTimeout(function () {
        do_form_submit(form_id);
    }, 1);
}

function do_form_submit(form_id)
 {
	 //alert(form_id+'1');
    if (is_ajax_return) 
	{
		//alert(form_id+'2');
        
		if (submitform) 
		{
			//alert(form_id+'3');
			
            if (form_id == "menuContactform")
			 {
			   // alert(form_id+'4');
                //document.getElementsByClassName("submitbtn")[1].disabled=true;
				 document.getElementById('submitbtn1').style.visibility = 'hidden';
                var $inputs = $('#' + form_id + ' textarea, ' + '#' + form_id + ' :input, ' + '#' + form_id + ' select');
                 //alert("menuContactform");
			   var lead = {
                      "AuthToken": "MITSDE-11-06-2020"
                    , "Source": "mitsde"
                    , "FirstName": $inputs[4].value
                    , "MobileNumber": $inputs[6].value
					, "Email": $inputs[5].value
                    , "LeadSource": "MITSkills-Paid-Google(DS)"
                    , "LeadType": "Online"
					, "LeadName": "MITSkills-Paid-Google-Ads-Lead-Form-Extension"
					, "Course": "MIT Skills"
                	
                };
				//alert(JSON.stringify(lead));
				//alert(lead);
                $.ajax({
                    url: "https://thirdpartyapi.extraaedge.com/api/SaveRequest"
                    , type: "POST"
                    , data: JSON.stringify(lead)
                    , dataType: 'Text'
                    , crossDomain: true
					, contentType: 'application/json; charset=utf-8'
                    , success: function (response) {
                       $('#' + form_id).submit();
						
                    }
                    , error: function (response)
					{
						//alert(JSON.stringify(response));
						alert("You have already submited a form");
						location.reload();
                    }
                });
            }
			else  if (form_id == "menuContactFloting")
            {
                //document.getElementsByClassName("submitbtn")[1].disabled=true;
				 document.getElementById('mobile').style.visibility = 'hidden';
                var $inputs = $('#' + form_id + ' textarea, ' + '#' + form_id + ' :input, ' + '#' + form_id + ' select');
                //  alert("menuContactFloting");
			   var lead = {
                      "AuthToken": "MITSDE-11-06-2020"
                    , "Source": "mitsde"
                    , "FirstName": $inputs[4].value
                    , "MobileNumber": $inputs[6].value
					, "Email": $inputs[5].value
                    , "LeadSource": "MITSkills-Paid-Google(DS)"
                    , "LeadType": "Online"
					, "LeadName": "MITSkills-Paid-Google-Ads-Lead-Form-Extension"
					, "Course": "MIT Skills"
                	
                };
				//alert(JSON.stringify(lead));
				//alert(lead);
                $.ajax({
                    url: "https://thirdpartyapi.extraaedge.com/api/SaveRequest"
                    , type: "POST"
                    , data: JSON.stringify(lead)
                    , dataType: 'Text'
                    , crossDomain: true
					, contentType: 'application/json; charset=utf-8'
                    , success: function (response) {
                       $('#' + form_id).submit();
						
                    }
                    , error: function (response)
					{
					   //alert(JSON.stringify(response));
						alert("You have already submited a form");
						location.reload();
                    }
                });
            }
			else  if (form_id == "QuickContact3")
            {
				//alert("QuickContact3");
                //document.getElementsByClassName("submitbtn")[1].disabled=true;
				 document.getElementById('AboutSection').style.visibility = 'hidden';
                var $inputs = $('#' + form_id + ' textarea, ' + '#' + form_id + ' :input, ' + '#' + form_id + ' select');
                 //alert("QuickContact3");
			   var lead = {
                      "AuthToken": "MITSDE-11-06-2020"
                    , "Source": "mitsde"
                    , "FirstName": $inputs[4].value
                    , "MobileNumber": $inputs[6].value
					, "Email": $inputs[5].value
                    , "LeadSource": "MITSkills-Paid-Google(DS)"
                    , "LeadType": "Online"
					, "LeadName": "MITSkills-Paid-Google-Ads-Lead-Form-Extension"
					, "Course": "MIT Skills"
					
					
					
                };
				//alert(JSON.stringify(lead));
				//alert(lead);
                $.ajax({
                    url: "https://thirdpartyapi.extraaedge.com/api/SaveRequest"
                    , type: "POST"
                    , data: JSON.stringify(lead)
                    , dataType: 'Text'
                    , crossDomain: true
					, contentType: 'application/json; charset=utf-8'
                    , success: function (response) {
                       $('#' + form_id).submit();
						
                    }
                    , error: function (response)
					{
					   //alert(JSON.stringify(response));
						//alert("You have already submited a form");
						location.reload();
                    }
                });
            }
            else {
                $('#' + form_id).submit();
            }
        }
		
		
        else {
            return false;
        }
    }
    else {
        setTimeout(function () {
            do_form_submit(form_id);
        }, 1);
    }
}

function validateStep(selection_id, next_id) {
	alert('hi'+next_id)
    is_submit = true;
    submitform = true;
    submitcontactvalidate(selection_id, 'all');
    setTimeout(function () {
        goNextStep(selection_id, next_id);
    }, 1);
}

function goNextStep(selection_id, next_id) {
    if (is_ajax_return) {
        if (submitform) {
            $("#" + selection_id).animate({
                width: 'toggle'
            }, 'slow');
        }
        else {
            return false;
        }
    }
    else {
        setTimeout(function () {
            do_form_submit(form_id);
        }, 1);
    }
}

function jumpStep(selection_id) {
    $("#" + selection_id).animate({
        width: 'toggle'
    }, 'slow');
}

function getFormCaptcha(region_id, captchaLabel) {
    $.ajax({
        type: 'POST'
        , data: ''
        , url: SITEROOT + 'admin_contact_us/site_contact_us/reloadCaptcha/' + region_id
        , success: function (responseData) {
            $('#capt' + region_id).html(responseData);
            $('#captcha' + region_id).val(captchaLabel);
            $('#captcha' + region_id).removeClass('valid');
            $('#captcha' + region_id).removeClass('error');
        }
    });
}
/*function cf(object){var f=object;if(f.value==f.defaultValue)f.value="";}
function cf(obj){if(obj.value==obj.defaultValue)obj.value='';}
function rf(obj){if(obj.value=='')obj.value=obj.defaultValue; is_submit = true; submitcontactvalidate('leftContactFrm',obj.name);}*/
function removeDefault(obj) {
    if (obj.value == obj.defaultValue) {
        obj.value = '';
    }
}

function addDefault(obj, fromId) {
    if (obj.value == '') {
        obj.value = obj.defaultValue;
    }
    is_submit = true;
    submitcontactvalidate(fromId, obj.name);
}