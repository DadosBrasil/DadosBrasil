try {
    JSONRequest.get("http://api.pgi.gov.br/api/1/serie/2426.json", function(sn, response, exception){
            console.log(response);
            console.log(exception);
    });
}
catch(e) {
    alert(e);
}
