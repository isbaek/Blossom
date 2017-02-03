const _ = require('lodash');
const log = console.log.bind(console);

const events = [
    {
        date: new Date("12/1/2016"),
    },
    {
        date: new Date("12/3/2016"),
        'user' : 'Rachel',
    },
    {
        date: new Date("12/5/2016"),
        'sex': true,
        'user' : 'Rachel',
    },
    {
        date: new Date("12/12/2016"),
    },
    {
        date: new Date("12/19/2016"),
    },
    {
        date: new Date("1/1/2017"),
    },
    {
        date: new Date("3/1/2017"),
    },
];

function checkEvent(events) {
  return _.find(events, 'user');
}


function matchEventDate(events) {
  var filtered = _.find(events, {date: new Date("12/5/2016") });
  var b = filtered.user;
    if ( b === 'Rachel' )
    return "Yahoo";
    else
    return "Wrong";
}


getEventforDay(events) {
  return _.find(events, props.sex, props.fight, props.nightIn, props.nightOut, props.notes)

onEdit() {
  var a = this.getEventforDay();
  var b = a.event.date;
  var d = this.currentDate();
  if { b === d }
  }
}

function getWeekOfYear(date) {
    const onejan = new Date(date.getFullYear(), 0, 1);
    const week = Math.ceil( (((date - onejan) / 86400000) + onejan.getDay() + 1) / 7 );
    return week;
}

function groupByMonth(events) {
    return _.groupBy(events, function bucketName(e) {
        return `${e.date.getMonth()+1}/${e.date.getFullYear()}`
    });
}

function groupByDay(events) {
    return _.groupBy(events, function bucketName(e) {
        return `${e.date.getDate()}/${e.date.getMonth()+1}/${e.date.getFullYear()}`
    });
}

function groupByWeek(events) {
    return _.groupBy(events, function bucketName(e) {
        return `${getWeekOfYear(e.date)}/${e.date.getFullYear()}`
    });
}

<Icon.TabBarItem
  title="Analytics"
  selected = {this.state.selectedTab === 'Analytics'}
  iconName="ios-analytics-outline"
  selectedIconName="ios-analytics"
  onPress={() => {
    this.setState({
      selectedTab: 'Analytics',
    });
  }}>
    <Analytics {...this.props} />
</Icon.TabBarItem>

log(matchEventDate(events));
