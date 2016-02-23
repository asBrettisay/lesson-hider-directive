angular.module('directivePractice')
.directive('lessonHider', function() {
  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&',
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function(scope, element, attrs) {

      console.log(scope.checked)

      scope.getSchedule.then(function(data) {
        scope.schedule = data.data;

        scope.schedule.forEach(function(scheduleDay) {
          if (scheduleDay.lesson === scope.lesson) {
            scope.lessonDay = scheduleDay.weekday;
            element.toggleClass('checked');
            scope.checked = true;

            return;
          }
        })
        scope.checkLesson = function() {
          if (scope.checked) {
            element.toggleClass('checked');
          } else {
            element.toggleClass('checked')
          }
        }
      });
    }
  }
})
