var photoApp = angular.module("photoSharingApp", [ "ngRoute" ]);

      photoApp.config(function ($routeProvider) {
        $routeProvider
            .when("/albums", { controller: "AlbumListController", templateUrl: "app/partials/album_list_partial.html" })
            .when("/album/:album_name", { controller: "AlbumViewController", templateUrl: "app/partials/album_view_partial.html"})
            .when("/", { redirectTo: "/albums" })
            .when("/404_page", { controller: "Controller404", templateUrl: "404_page_partial.html" })
            .otherwise( { redirectTo: "/404_page" });
      });