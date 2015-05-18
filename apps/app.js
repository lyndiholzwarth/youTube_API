$(function(){

	$('#search-term').submit(function(event){
		event.preventDefault();
		searchTerm=$('#query').val();
		getRequest(searchTerm)
	});

});

function getRequest(searchTerm){
	var params = {
		q: searchTerm,
    key: 'AIzaSyBmi6_1lFcxVd7XYZIGVVyOC4EOiye0UiY',
    part: 'snippet',
    r: 'json',
	};
  	url = 'https://www.googleapis.com/youtube/v3/search';

  	$.getJSON(url, params, function(data){
    	showResults(data.Search);
  	});
};

function showResults(results){
    var html="";
    $.each(results, function(index,value){
    	html += '<p>' + value.Title + '</p>';
     	console.log(value.Title);
      	$('#search-results').html(html);
    });
};


//https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=YOUR_API_KEY
     // &part=snippet,contentDetails,statistics,status