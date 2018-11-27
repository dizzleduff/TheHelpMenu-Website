// 1. create the module / app, make sure ng-app points to it.
var newsApp = angular.module('newsApp', []);
// 2. create the controller and give it $scope.
newsApp.controller("newsController", ['$scope', function($scope) {
  $scope.new_article = {};
  $scope.articles = [{
      title: 'Last of Us Part 2 New Gameplay Features',
      date: '2018/11/23',
      link: 'article1.html',
      author: 'Kirk McKeand',
      image: 'LOU2.jpeg',
      console: 'PS4',
      summary: 'While no release data has been announced yet, but Naughty Dog and Sony were able to show fans some fresh gameplay (including in-game footage) at E3 2018 that has fans hyped up. Gamers should be ready to buy a PS4 to play Last of Us Part 2 as Ellie from the first game, with some gameplay mechanics new to the title that will really add to the survival horror feel of the game.'
    },
    {
      title: 'Hope for Fallout 76 After Failure At Launch',
      date: '2018/11/25',
      link: 'article2.html',
      author: 'Rob Thubron',
      image: 'F76.jpeg',
      console: 'Xbox',
      summary: 'Any Fallout fan with a PS4, Xbox One, or PC gets hyped when a new game is announced. But what does Fallout 76 have in common with Aliens: Colonial Marines, Mafia 3, and No Man’s Sky? It’s one of those high-profile games that’s been universally panned by critics. But, like No Man’s Sky, could Bethesda’s title eventually receive enough patches and updates to make it worth playing?'
    },
    {
      title: 'Recruit The Mage-Sister in the Upcoming Kirby Star Allies Update',
      date: '2018/11/23',
      link: 'article3.html',
      author: 'Chris Carter',
      image: 'KSA.jpeg',
      console: 'Nintendo',
      summary: "This upcoming massive free update for Kirby Star Allies on the Nintendo Switch is presumed to be its last. It's going to be a doozy though, as it sports Susie, Taranza, Magolor, and all three Mage-Sisters -- the secondary antagonists of the game."
    },
    {
      title: 'Pokémon: Let’s Go, Pikachu or Eevee?',
      date: '2018/11/25',
      link: 'article4.html',
      author: 'Allegra Frank',
      image: 'PLG.jpg',
      console: 'Nintendo',
      summary: 'Nintendo Switch Pokémon: Let’s Go! deviates from Pokémon in some novel ways. But it’s still a Pokémon RPG, which means there are two versions to choose from. The question a Pokémon lover must ask themselves is less, “Should I play these games?” and more, “Which game should I play?” You may think this is subjective -and it mostly is- but there are solid reasons to pick one over the other.'
    },
    {
      title: 'Red Dead Online Delayed Again',
      date: '2018/11/25',
      link: 'article5.html',
      author: 'Tyler Fischer ',
      image: 'RDR2.jpg',
      console: 'PS4',
      summary: "Rockstar Games previously said that the Red Dead Online beta would arrive before the end of November. It's now November 25, and it's still nothing but crickets. As Rockstar seemingly runs out of time to launch the highly-anticipated Red Dead Redemption 2 mode, some Xbox One and PS4 players have apparently already gotten their hands on the beta, as Red Dead Redemption 2's Red Dead Online-specific achievements are currently being popped by a very small percentage of players."
    }
  ];

  // to find console for each article
  $scope.includeConsole = function(console) {
    var i = $.inArray(console, $scope.consoleIncludes);
    if (i > -1) {
      $scope.consoleIncludes.splice(i, 1);
    } else {
      $scope.consoleIncludes.push(console);
    }
  }

  // filter through each article to find corresponding console
  $scope.consoleFilter = function(articles) {
    if ($scope.consoleIncludes.length > 0) {
      if ($.inArray(articles.console, $scope.consoleIncludes) < 0)
        return;
    }

    return articles;
  }

  $scope.addArticle = function(article) {
    $scope.articles.push(article);
    $scope.new_article = "";
    return false;
  }

}]);

function formatDate(date) {

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return (monthIndex + 1) + '/' + day + '/' + year;
}

//console.log(formatDate(new Date()));

document.getElementById("pressOnly").style.visibility = "hidden";

var scrollingElement = (document.scrollingElement || document.body);

function showForm() {
  document.getElementById("pressOnly").style.visibility = "visible";
  $('#myModal').modal('hide');
  $(scrollingElement).animate({
    scrollTop: document.body.scrollHeight
  }, 500);
}

function closeLoginModal() {
  $('#myModal').modal('hide');
  $('#myOtherModal').modal('show')
}

function closeSignupModal() {
  $('#myOtherModal').modal('hide');
  $('#myModal').modal('show')
}
