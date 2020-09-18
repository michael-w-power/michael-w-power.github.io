$(document).ready(function(){

    $('input[type=radio][name=walkAround]').change(function(){
        if ($(this).val()!=1){
            $('#visualExplainationDiv').removeClass('visualExplaination')
            $('#visualExplaination').attr('required',true)

        }
        else if($(this).val()==1){
            $('#visualExplainationDiv').addClass('visualExplaination')
            $('#visualExplaination').attr('required',false)
        }
    })
});