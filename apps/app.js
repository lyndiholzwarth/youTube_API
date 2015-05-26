$(function(){

	$('#search-term').submit(function(event){
		event.preventDefault();
		searchTerm=$('#query').val();
		getRequest(searchTerm);
	});

});

function getRequest(searchTerm){
	var params= {
    part: 'snippet',
    // part:'id',
		q: searchTerm,
    key: 'AIzaSyDOWKFst7ZoY1tmQ95yYdX-bop9QPRJwxk'
    // r: 'json',
	};
  	url = 'https://www.googleapis.com/youtube/v3/search';
  	$.getJSON(url, params, function(data){
      console.log(data);
      var myData= data.items;
      // console.log(myData);
    	// $.each(myData)
      showResults(data.items);
  	});
};

function showResults(results){
    var html="";
    $.each(results, function(index,value){
    	html += '<img src='+value.snippet.thumbnails.medium.url+' />';
        $('.search-results').html(html);
    });
};