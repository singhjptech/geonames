
$(document).ready(function(){
    //this is btnRun click event
    $('#btnRun1').click(function () {
        var  str = "";
        var i = 0;
        var postcode = $('#postcode').val();
        $.ajax({
            url: "libs/php/php.php",
            dataType: 'json',
            method:"post",
            data: {zipcode:postcode},
            success: function(result) {
                console.log (result);
                if (result) {


                    for(i in result){

                        str += "<tr><td>"+result[i]['placeName']+"</td><td>"+result[i]['postalcode']+"</td><td>"+result[i]['countryCode']+"</td><td>"+result[i]['adminName1']+"</td><td>"+result[i]['adminName2']+"</td><td>"+result[i]['adminName3']+"</td></tr>";
                   
                    }

                    $("#data1").html(str);
                }
            }
        });


    });

    $('#btnRun2').click(function () {
        var  str = "";
        var i = 0;
        var statistics = $('#statistics').val().toLowerCase();
        $.ajax({
            url: "libs/php/php.php",
            dataType: 'json',
            method:"post",
            data: {statistics:statistics},
            success: function(result) {
                
                if (result) {


                    for(i in result){
                        
                        if(statistics == result[i]['countryName'].toLowerCase()){
                            str += "<tr><td>"+result[i]['countryName']+"</td><td>"+result[i]['areaInSqKm']+"</td><td>"+result[i]['population']+"</td><tr>";
                            // console.log(result[i]);
                        }
                    }

                    $("#data2").html(str);
                }
            }
        });


    });
    $('#btnRun3').click(function () {
        var  str = "";
        var i = 0;
        var country_weather = $('#country_weather').val();
        $.ajax({
            url: "libs/php/php.php",
            dataType: 'json',
            method:"post",
            data: {country_weather:country_weather},
            success: function(result) {

                if (result) {
                    // console.log(result.current);

                        str += "<tr><td>"+result.current.temp_c+"</td><td>"+result.current.condition.text+"</td><td>"+result.current.humidity+"</td></tr>";
                
                    $("#data3").html(str);
                }
            }
        });


    });


    //this is refresh click event
    $('#refresh').click(function(){
        location.reload();
    });
});





