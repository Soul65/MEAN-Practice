var app = angular.module('pharmacyApp', []);
app.run(['$anchorScroll', function($anchorScroll)
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

app.controller('ProductsCtrl', function($scope)
{	
	$scope.products = [
	{id: 1, name: "Compression Therapy"},
	{id: 2, name: "Diagnostics / Diabetic Supplies"},
	{id: 3, name: "Mobility Aids"},
	{id: 4, name: "Incontinent / Ostomy Supplies"},
	{id: 5, name: "Orthopedic Supports"},
	{id: 6, name: "Bath Safety"},
	{id: 7, name: "Daily Living Aids"}];
	$scope.selectedProduct = 1;
});