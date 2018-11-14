function parser(){
    //console.clear();
    var data = '';
    $( ".ws-browser-table-row.ws-visible" ).each(function( index )
	{
        var dataSrt =$(this).find(".uc-link.UC_AgentClick").text()+';' +
            $(this).find('[coldefindex = 3]').find(".ws-browser-text-no-render").text()+';'+
            $(this).find('[coldefindex = 2]').find('span').text() + '; \n';

        data += dataSrt;
        //console.info(dataSrt);
	});
    returnLinkFile(data);
}

function parsSheta(){
    console.clear();
    var data = '';
    $( ".ws-browser-table-row.ws-visible" ).each(function( index )
    {
        var dataSrt =$(this).find(".conracts-org-title.contracts-title-width").text()+' : ' +
            $(this).find('.contracts-org-inn.contracts-inn-width').text()+';'+
            $(this).find('[coldefindex = 3]').find('.conracts-org-title').text() + '; \n';

        data += dataSrt;
        console.info(dataSrt);
    });
    returnLinkFile(data);
}


function returnLinkFile(data) {
    var datafile = {'data': data};
    $.ajax({
        type: "POST",
        url: "https://veeckbot.tk/sbispars/returnFile.php",
        data: datafile,
        success: function(res)
        {
            var mWin = window.open(res);
        }
    });
}
