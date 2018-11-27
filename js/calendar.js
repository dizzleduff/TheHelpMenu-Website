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
    events: [{
        title: 'Hollow Knight Remastered',
        start: '2018-11-27'
      },
      {
        title: 'Super Smash Bros Ultimate',
        start: '2018-12-07'
      },
      {
        title: 'ARK Survival',
        start: '2018-12-10'
      },
      {
        title: 'Resident Evil 8',
        start: '2018-12-15',
      },
      {
        title: 'Red Dead 3',
        start: '2018-12-22'
      },
      {
        title: 'War Thunder',
        start: '2018-12-26'
      },
      {
        title: 'Mario Party 10',
        start: '2018-12-29'
      },
      {
        title: 'Benders Universe',
        start: '2018-12-31',
      },
    ]
  });
});
