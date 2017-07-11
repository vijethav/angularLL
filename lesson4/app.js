
    function AlbumListController($scope){
         $scope.adding_album = {};
         $scope.add_album_error = "";
        $scope.albums = [ 
                 { name: 'madrid1309', title: 'Weekend in Madrid', date: '2013-09-01', description: 'My favourite trip' },
                 { name: 'iceland1404', title: 'Holiday in Iceland', date: '2014-04-15', description: 'This place is cold' },
                 { name: 'thailand1210', title: 'Surfing in Thailand', date: '2012-10-01', description: 'So hot!' },
                 { name: 'australia1207', title: 'Wedding in Australia', date: '2012-07-31', description: 'So many kangaroos and koalas!' } ];

        $scope.addAlbum = function(new_album){
             if(!new_album.title)
                   $scope.add_album_error = "Missing title";
             else if(!new_album.date ||  !is_valid_date(new_album.date))
                  $scope.add_album_error = "Date not correct";
            else if(!new_album.description)
                 $scope.add_album_error = "Missing Description";
            else if(!new_album.name)
                  $scope.add_album_error = "Missing Short Name";
            else{
                $scope.albums.push(new_album);
                $scope.adding_album = {};
                $scope.add_album_error = "";
            }
        };
      }
      function UserController($scope){
        $scope.user = { username: "vijetha", fullname: "vijju vijetha"};
      }
      function is_valid_date(the_date){
        if(the_date.match(/^[0-9]{2,4}[\-\/\.,][0-9]{1,2}[\-\/\.,][0-9]{1,2}$/)){
          var d = new Date(the_date);
          return !isNaN(d.getTime());
        }else{
             return false;
        }
      }