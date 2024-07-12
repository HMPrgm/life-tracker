const datefns = require('date-fns')

console.log(datefns.format(new Date(), "'Today is a' eeee"))
//=> "Today is a Friday"

console.log(datefns.formatDistance(datefns.subDays(new Date(), -1), new Date(), { addSuffix: true }))
//=> "3 days ago"

console.log(datefns.formatRelative(datefns.subDays(new Date(), -1), new Date()))
//=> "last Friday at 7:26 p.m."