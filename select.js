'use strict';

angular.module('angularApp').directive('customSelect', function($location) {
	return {
		restrict: 'E',
		scope: {
			placeholder: '@',
			default: '@',
			options: '=',
			model: '=ngModel',
			name: '@'
		},
		template: function(){
			return ' \
			<p ng-click="state.open=\'open\'">\
				<span ng-if="!state.selected">{{placeholder}}</span>\
				<span ng-if="state.selected">{{state.value}}</span>\
				<span class="triangle-down"></span>\
			</p>\
			<div class="options" ng-show="state.open">\
			  <ul>\
			    <li ng-repeat="(key, value) in options" \
			    	ng-click="\
			    		state.open=\'\';\
			    		state.selected=key;\
			    		state.value=value;\
			    		state.model=key"\
			    	>{{value}}</li>\
			  </ul>\
			</div>\
			<input \
				watcher \
				type="hidden" \
				action="setValue(newVal)" \
				name="{{name}}" \
				ng-model="model" \
				to-value="{{state.model}}" \
			/>'
		},
		controller: function($scope) {

			$scope.state = {
				open: '',
				selected: '',
				model : $scope.model
			};

			$scope.setValue = function(a){
				if (a===''){
					$scope.state.selected = '';
					$scope.state.value = '';
					$scope.state.model = '';
				}
				else if($scope.options[a]){
					$scope.state.selected = a
					$scope.state.value = $scope.options[a];
					$scope.state.model = a;
				}
			}
			if ($scope.default) $scope.setValue($scope.default);
			else if (!$scope.placeholder) {
				for (var i in $scope.options){
					$scope.setValue(i);
					break;
				}
			}
		},
		link: function($scope, el, attrs) {
			console.log('link_select-$scope', $scope);

		}
	};
});

angular.module('angularApp').directive('watcher', function($location) {
	return {
		restrict: 'A',
		scope:{
			action: '&',
			toValue: '@',
			model: '=ngModel'
		},
		link: function($scope, el, attrs) {

			$scope[attrs.ngModel] =  attrs.toValue;
			
			attrs.$observe('toValue', function(val) {
                $scope[attrs.ngModel] =  val;
            });

            $scope.$watch(attrs.ngModel, function(val){
            	console.log('watch_ngModel', val);
            	$scope.action({newVal:val});
            })		
		}
	};
});
