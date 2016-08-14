module Microsoft.Graph {
	export const enum AttendeeType {
		Required = 0,
		Optional = 1,
		Resource = 2
	}
	export const enum BodyType {
		Text = 0,
		Html = 1
	}
	export const enum CalendarColor {
		LightBlue = 0,
		LightGreen = 1,
		LightOrange = 2,
		LightGray = 3,
		LightYellow = 4,
		LightTeal = 5,
		LightPink = 6,
		LightBrown = 7,
		LightRed = 8,
		MaxColor = 9,
		Auto = 10
	}
	export const enum DayOfWeek {
		Sunday = 0,
		Monday = 1,
		Tuesday = 2,
		Wednesday = 3,
		Thursday = 4,
		Friday = 5,
		Saturday = 6
	}
	export const enum EventType {
		SingleInstance = 0,
		Occurrence = 1,
		Exception = 2,
		SeriesMaster = 3
	}
	export const enum FreeBusyStatus {
		Free = 0,
		Tentative = 1,
		Busy = 2,
		Oof = 3,
		WorkingElsewhere = 4,
		Unknown = 5
	}
	export const enum Importance {
		Low = 0,
		Normal = 1,
		High = 2
	}
	export const enum InferenceClassificationType {
		Focused = 0,
		Other = 1
	}
	export const enum RecurrencePatternType {
		Daily = 0,
		Weekly = 1,
		AbsoluteMonthly = 2,
		RelativeMonthly = 3,
		AbsoluteYearly = 4,
		RelativeYearly = 5
	}
	export const enum RecurrenceRangeType {
		EndDate = 0,
		NoEnd = 1,
		Numbered = 2
	}
	export const enum ResponseType {
		None = 0,
		Organizer = 1,
		TentativelyAccepted = 2,
		Accepted = 3,
		Declined = 4,
		NotResponded = 5
	}
	export const enum Sensitivity {
		Normal = 0,
		Personal = 1,
		Private = 2,
		Confidential = 3
	}
	export const enum WeekIndex {
		First = 0,
		Second = 1,
		Third = 2,
		Fourth = 3,
		Last = 4
	}
}

