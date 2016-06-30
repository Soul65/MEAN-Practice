angular.module("anchorScroll",[])
.run(['$anchorScroll', function($anchorScroll)
{
	$anchorScroll.yOffset = 50;
}])

angular.module('anchorScroll', [])
.run(['$anchorScroll', function($anchorScroll)
{
	$anchorScroll.yOffset = 50;
}])
.controller('NavController', ['$anchorScroll', '$location', '$scope',
	function($anchorScroll, $location, $scope)
	{
		$scope.gotoAnchor = function(x)
		{
			var newHash = 'anchor' + x;
			if($location.hash() !== newHash)
			{
				$location.hash('anchor' + x);
			}
			else
			{
				$anchorScroll();
			}
		};
	}
]);