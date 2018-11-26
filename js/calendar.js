$(function() {
  // page is now ready, initialize the calendar...
  $('#calendar').fullCalendar({
    // put your options and callbacks here
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,basicWeek,basicDay'
    },
    defaultDate: '2018-11-26',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    // events: [{
    //     title: 'First Day of Fall Semester',
    //     start: '2018-08-27'
    //   },
    //   {
    //     title: 'Mile Test',
    //     start: '2018-09-05T12:30:00',
    //     end: '2018-09-05T13:30:00'
    //   },
    //   {
    //     title: 'Team Hero Practice',
    //     start: '2018-09-05T14:30:00',
    //     end: '2018-09-05T16:30:00'
    //   },
    //   {
    //     title: 'UA Sports Festival',
    //     start: '2018-10-11',
    //   },
    //   {
    //     title: 'Trip to Hero Museum',
    //     start: '2018-10-16',
    //   },
    //   {
    //     title: 'Presentation',
    //     start: '2018-10-20T12:00:00',
    //   },
    //   {
    //     title: 'Self Training',
    //     start: '2018-10-20T16:00:00',
    //   },
    //   {
    //     title: 'Internship',
    //     start: '2018-10-22',
    //     end: '2018-10-27'
    //   },
    //   {
    //     title: 'Last Day of Fall Semester',
    //     start: '2018-11-16',
    //   },
    // ]
  });
});
