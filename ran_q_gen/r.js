$(document).ready(function(){
  function getQuote(){

    var quotes = ["However strong you become, never seek to bear everything alone. If you do, failure is certain.", "Without pain, there would be no suffering, without suffering we would never learn from our mistakes", "The next generation will always surpass the previous one. Its one of the never-ending cycles in life"];
    var author = ["-itachi uchiha","-pain","-kakashi"];
    var randomNum = Math.floor((Math.random()*quotes.length));
    var randomQuote = quotes[randomNum];
    var randomAuth = author[randomNum];

    $(".forjq").text(randomQuote);
        $(".author").text(randomAuth);
  }
  $(".btn").on("click",function(){
   getQuote();
  });
});
