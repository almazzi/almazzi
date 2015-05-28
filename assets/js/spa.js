/**
 * Created by almazbeck on 5/28/15.
 */
angular.module("Almazzi",[]);
angular.module("Almazzi",[])
  .controller('BaseCtrl',['$scope', function ($scope)
  {
    io.socket.get('/emoji',function (res)
      {
        $scope.emojis=res;
        $scope.$apply();
      }
    );
    io.socket.on('emoji',function(event)
      {
        switch (event.verb){
          case 'created':
                $scope.emojis.push(event.data);
                $scope.$apply();
                break;
        }

      }
    );

  }]);
