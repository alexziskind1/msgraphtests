"use strict";
var EnumType;
EnumType = require('./enum_type');
exports.enumTypes = {
    bodyType: new EnumType({
        name: 'microsoft.graph.bodyType',
        options: {
            text: 0,
            html: 1
        }
    }),
    importance: new EnumType({
        name: 'microsoft.graph.importance',
        options: {
            low: 0,
            normal: 1,
            high: 2
        }
    }),
    inferenceClassificationType: new EnumType({
        name: 'microsoft.graph.inferenceClassificationType',
        options: {
            focused: 0,
            other: 1
        }
    }),
    calendarColor: new EnumType({
        name: 'microsoft.graph.calendarColor',
        options: {
            lightBlue: 0,
            lightGreen: 1,
            lightOrange: 2,
            lightGray: 3,
            lightYellow: 4,
            lightTeal: 5,
            lightPink: 6,
            lightBrown: 7,
            lightRed: 8,
            maxColor: 9,
            auto: -1
        }
    }),
    responseType: new EnumType({
        name: 'microsoft.graph.responseType',
        options: {
            none: 0,
            organizer: 1,
            tentativelyAccepted: 2,
            accepted: 3,
            declined: 4,
            notResponded: 5
        }
    }),
    sensitivity: new EnumType({
        name: 'microsoft.graph.sensitivity',
        options: {
            normal: 0,
            personal: 1,
            "private": 2,
            confidential: 3
        }
    }),
    recurrencePatternType: new EnumType({
        name: 'microsoft.graph.recurrencePatternType',
        options: {
            daily: 0,
            weekly: 1,
            absoluteMonthly: 2,
            relativeMonthly: 3,
            absoluteYearly: 4,
            relativeYearly: 5
        }
    }),
    dayOfWeek: new EnumType({
        name: 'microsoft.graph.dayOfWeek',
        options: {
            sunday: 0,
            monday: 1,
            tuesday: 2,
            wednesday: 3,
            thursday: 4,
            friday: 5,
            saturday: 6
        }
    }),
    weekIndex: new EnumType({
        name: 'microsoft.graph.weekIndex',
        options: {
            first: 0,
            second: 1,
            third: 2,
            fourth: 3,
            last: 4
        }
    }),
    recurrenceRangeType: new EnumType({
        name: 'microsoft.graph.recurrenceRangeType',
        options: {
            endDate: 0,
            noEnd: 1,
            numbered: 2
        }
    }),
    freeBusyStatus: new EnumType({
        name: 'microsoft.graph.freeBusyStatus',
        options: {
            free: 0,
            tentative: 1,
            busy: 2,
            oof: 3,
            workingElsewhere: 4,
            unknown: -1
        }
    }),
    eventType: new EnumType({
        name: 'microsoft.graph.eventType',
        options: {
            singleInstance: 0,
            occurrence: 1,
            exception: 2,
            seriesMaster: 3
        }
    }),
    attendeeType: new EnumType({
        name: 'microsoft.graph.attendeeType',
        options: {
            required: 0,
            optional: 1,
            resource: 2
        }
    }),
    meetingMessageType: new EnumType({
        name: 'microsoft.graph.meetingMessageType',
        options: {
            none: 0,
            meetingRequest: 1,
            meetingCancelled: 2,
            meetingAccepted: 3,
            meetingTenativelyAccepted: 4,
            meetingDeclined: 5
        }
    })
};
//# sourceMappingURL=Enum_types.js.map