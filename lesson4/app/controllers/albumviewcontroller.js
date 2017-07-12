(function(){

   function AlbumViewController($scope, $routeParams){
   	 $scope.load_error_text = " ";
     $scope.album_name = $routeParams.album_name;

     /*switch ($routeParams.album_name) {
          case "madrid1309":
            $scope.photos = [ 
                { filename: "madrid1309-001.jpg",
                  date: "2013/09/05",
                  description: "I love this place" },
                { filename: "madrid1309-002.jpg",
                  date: "2013/09/05",
                  description: "so much winning!!!" } ];
            break;
            case "iceland1404": [
                 {filename: "iceland1404-001.jpg",
                  date: "2014/09/10",
                  description: "I love this place" },
                  {filename: "iceland1404-002.jpg",
                  date: "2014/09/15",
                  description: "so much winning!!!" } ];

        default:
            $scope.load_error_text = "I don't know about that album yet, sorry";
        }  */
     var photos = {
     	"madrid1309": [
     	     {filename: "madrid1309-001.jpg",
                  date: "2016/09/05",
                  description: "I love this place"

     	     },
     	     {filename: "madrid1309-002.jpg",
                  date: "2016/09/05",
                  description: "so much winning!!!"

     	     }
     	],
     	"iceland1404": [{filename: "iceland1404-001.jpg",
                  date: "2014/09/10",
                  description: "I love this place"

     	     },
     	     {filename: "iceland1404-002.jpg",
                  date: "2014/09/15",
                  description: "so much winning!!!"
     	     	
     	     }
     	],
     	"thailand1210": [{filename: "thailand1210-001.jpg",
                  date: "2013/09/15",
                  description: "I love this place"

     	     },
     	     {filename: "thailand1210-002.jpg",
                  date: "2013/09/25",
                  description: "so much winning!!!"
     	     	
     	     }
     	],
     	"australia1207": [{filename: "australia1207-001.jpg",
                  date: "2012/07/05",
                  description: "The wedding was lovly"

     	     },
     	     {filename: "australia1207-002.jpg",
                  date: "2012/07/20",
                  description: "great Ocean Road!!!"
     	     	
     	     }

     	]
     };
     if(photos[$scope.album_name]){
     	$scope.photos = photos[$scope.album_name];
     }else {
     	$scope.load_error_text = "I can't find an album with that name";
     }
   }
   photoApp.controller("AlbumViewController", AlbumViewController);

})();