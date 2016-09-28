/**
 * Created by Mojgan on 16/09/28.
 */
/**
 * Created by Mojgan on 16/09/26.
 */
$(document).ready(function () {
    $('#submit').click(function () {

        var name = $("#username").val();
        var email = $("#email").val();
        var number = $("#number").val();
        var message = $("#text").val();


        var mail_pattern = new RegExp( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g);


        var co_no =new RegExp(/^(09)[0-9]{9}$/g);

        if(name == '' || email=='' || number==''){
            alert("fill all field");}
        else if(!mail_pattern.test(email)){
            alert("wrong email!");}
        else if(!co_no.test(number)){
            alert("wrong contact.no");}
        else {

            $('#tbody').append('<tr>').append('<td>' + name + '</td>')
                .append('<td>' + number + '</td>').append('<td>' + email + '</td>').append('<td>'+message +'</td>');
        }

    })
})
