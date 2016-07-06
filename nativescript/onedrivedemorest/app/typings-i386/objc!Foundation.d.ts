
declare const enum NSActivityOptions {

	IdleDisplaySleepDisabled = 1099511627776,

	IdleSystemSleepDisabled = 1048576,

	SuddenTerminationDisabled = 16384,

	AutomaticTerminationDisabled = 32768,

	UserInitiated = 16777215,

	UserInitiatedAllowingIdleSystemSleep = 15728639,

	Background = 255,

	LatencyCritical = 1095216660480
}

declare function NSAllocateMemoryPages(bytes: number): interop.Pointer;

declare function NSAllocateObject(aClass: typeof NSObject, extraBytes: number, zone: interop.Pointer): any;

declare var NSArgumentDomain: string;

declare class NSArray<ObjectType> extends NSObject implements CKRecordValue, NSCopying, NSFastEnumeration, NSMutableCopying, NSSecureCoding {

	static alloc<ObjectType>(): NSArray<ObjectType>; // inherited from NSObject

	static array<ObjectType>(): NSArray<ObjectType>;

	static arrayWithArray<ObjectType>(array: NSArray<ObjectType>): NSArray<ObjectType>;

	static arrayWithContentsOfFile<ObjectType>(path: string): NSArray<ObjectType>;

	static arrayWithContentsOfURL<ObjectType>(url: NSURL): NSArray<ObjectType>;

	static arrayWithObject<ObjectType>(anObject: ObjectType): NSArray<ObjectType>;

	static arrayWithObjects<ObjectType>(firstObj: ObjectType): NSArray<ObjectType>;

	static arrayWithObjectsCount<ObjectType>(objects: interop.Reference<ObjectType>, cnt: number): NSArray<ObjectType>;

	static new<ObjectType>(): NSArray<ObjectType>; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ count: number;

	/* readonly */ firstObject: ObjectType;

	/* readonly */ lastObject: ObjectType;

	/* readonly */ sortedArrayHint: NSData;
	[index: number]: ObjectType;
	[Symbol.iterator](): Iterator<any>;

	constructor(); // inherited from NSObject

	constructor(o: { array: NSArray<ObjectType>; });

	constructor(o: { array: NSArray<ObjectType>; copyItems: boolean; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { contentsOfFile: string; });

	constructor(o: { contentsOfURL: NSURL; });

	constructor(o: { objects: ObjectType; });

	constructor(o: { objects: interop.Reference<ObjectType>; count: number; });

	addObserverToObjectsAtIndexesForKeyPathOptionsContext(observer: NSObject, indexes: NSIndexSet, keyPath: string, options: NSKeyValueObservingOptions, context: interop.Pointer): void;

	arrayByAddingObject(anObject: ObjectType): NSArray<ObjectType>;

	arrayByAddingObjectsFromArray(otherArray: NSArray<ObjectType>): NSArray<ObjectType>;

	arrayFromItem(): NSArray<any>;

	componentsJoinedByString(separator: string): string;

	containsObject(anObject: ObjectType): boolean;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	descriptionWithLocale(locale: any): string;

	descriptionWithLocaleIndent(locale: any, level: number): string;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	enumerateObjectsAtIndexesOptionsUsingBlock(s: NSIndexSet, opts: NSEnumerationOptions, block: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => void): void;

	enumerateObjectsUsingBlock(block: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => void): void;

	enumerateObjectsWithOptionsUsingBlock(opts: NSEnumerationOptions, block: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => void): void;

	filteredArrayUsingPredicate(predicate: NSPredicate): NSArray<ObjectType>;

	firstObjectCommonWithArray(otherArray: NSArray<ObjectType>): ObjectType;

	getObjects(objects: interop.Reference<ObjectType>): void;

	getObjectsRange(objects: interop.Reference<ObjectType>, range: NSRange): void;

	indexOfObject(anObject: ObjectType): number;

	indexOfObjectAtIndexesOptionsPassingTest(s: NSIndexSet, opts: NSEnumerationOptions, predicate: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => boolean): number;

	indexOfObjectIdenticalTo(anObject: ObjectType): number;

	indexOfObjectIdenticalToInRange(anObject: ObjectType, range: NSRange): number;

	indexOfObjectInRange(anObject: ObjectType, range: NSRange): number;

	indexOfObjectInSortedRangeOptionsUsingComparator(obj: ObjectType, r: NSRange, opts: NSBinarySearchingOptions, cmp: (p1: any, p2: any) => NSComparisonResult): number;

	indexOfObjectPassingTest(predicate: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => boolean): number;

	indexOfObjectWithOptionsPassingTest(opts: NSEnumerationOptions, predicate: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => boolean): number;

	indexesOfObjectsAtIndexesOptionsPassingTest(s: NSIndexSet, opts: NSEnumerationOptions, predicate: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => boolean): NSIndexSet;

	indexesOfObjectsPassingTest(predicate: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => boolean): NSIndexSet;

	indexesOfObjectsWithOptionsPassingTest(opts: NSEnumerationOptions, predicate: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => boolean): NSIndexSet;

	isEqualToArray(otherArray: NSArray<ObjectType>): boolean;

	makeObjectsPerformSelector(aSelector: string): void;

	makeObjectsPerformSelectorWithObject(aSelector: string, argument: any): void;

	mutableCopyWithZone(zone: interop.Pointer): any; // inherited from NSMutableCopying

	objectAtIndex(index: number): ObjectType;

	objectAtIndexedSubscript(idx: number): ObjectType;

	objectEnumerator(): NSEnumerator<ObjectType>;

	objectsAtIndexes(indexes: NSIndexSet): NSArray<ObjectType>;

	pathsMatchingExtensions(filterTypes: NSArray<string>): NSArray<string>;

	removeObserverFromObjectsAtIndexesForKeyPath(observer: NSObject, indexes: NSIndexSet, keyPath: string): void;

	removeObserverFromObjectsAtIndexesForKeyPathContext(observer: NSObject, indexes: NSIndexSet, keyPath: string, context: interop.Pointer): void;

	reverseObjectEnumerator(): NSEnumerator<ObjectType>;

	self(): NSArray<ObjectType>; // inherited from NSObjectProtocol

	sortedArrayUsingComparator(cmptr: (p1: any, p2: any) => NSComparisonResult): NSArray<ObjectType>;

	sortedArrayUsingDescriptors(sortDescriptors: NSArray<NSSortDescriptor>): NSArray<ObjectType>;

	sortedArrayUsingFunctionContext(comparator: interop.FunctionReference<(p1: ObjectType, p2: ObjectType, p3: interop.Pointer) => number>, context: interop.Pointer): NSArray<ObjectType>;

	sortedArrayUsingFunctionContextHint(comparator: interop.FunctionReference<(p1: ObjectType, p2: ObjectType, p3: interop.Pointer) => number>, context: interop.Pointer, hint: NSData): NSArray<ObjectType>;

	sortedArrayUsingSelector(comparator: string): NSArray<ObjectType>;

	sortedArrayWithOptionsUsingComparator(opts: NSSortOptions, cmptr: (p1: any, p2: any) => NSComparisonResult): NSArray<ObjectType>;

	subarrayWithRange(range: NSRange): NSArray<ObjectType>;

	writeToFileAtomically(path: string, useAuxiliaryFile: boolean): boolean;

	writeToURLAtomically(url: NSURL, atomically: boolean): boolean;
}

declare class NSAssertionHandler extends NSObject {

	static alloc(): NSAssertionHandler; // inherited from NSObject

	static currentHandler(): NSAssertionHandler;

	static new(): NSAssertionHandler; // inherited from NSObject

	constructor(); // inherited from NSObject

	self(): NSAssertionHandler; // inherited from NSObjectProtocol
}

declare var NSAssertionHandlerKey: string;

declare class NSAttributedString extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	static alloc(): NSAttributedString; // inherited from NSObject

	static attributedStringWithAttachment(attachment: NSTextAttachment): NSAttributedString;

	static new(): NSAttributedString; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ length: number;

	/* readonly */ string: string;

	constructor(); // inherited from NSObject

	constructor(o: { attributedString: NSAttributedString; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { data: NSData; options: NSDictionary<string, any>; documentAttributes: interop.Reference<NSDictionary<string, any>>; });

	constructor(o: { fileURL: NSURL; options: NSDictionary<any, any>; documentAttributes: interop.Reference<NSDictionary<any, any>>; });

	constructor(o: { string: string; });

	constructor(o: { string: string; attributes: NSDictionary<string, any>; });

	constructor(o: { URL: NSURL; options: NSDictionary<string, any>; documentAttributes: interop.Reference<NSDictionary<string, any>>; });

	attributeAtIndexEffectiveRange(attrName: string, location: number, range: interop.Reference<NSRange>): any;

	attributeAtIndexLongestEffectiveRangeInRange(attrName: string, location: number, range: interop.Reference<NSRange>, rangeLimit: NSRange): any;

	attributedSubstringFromRange(range: NSRange): NSAttributedString;

	attributesAtIndexEffectiveRange(location: number, range: interop.Reference<NSRange>): NSDictionary<string, any>;

	attributesAtIndexLongestEffectiveRangeInRange(location: number, range: interop.Reference<NSRange>, rangeLimit: NSRange): NSDictionary<string, any>;

	boundingRectWithSizeOptionsContext(size: CGSize, options: NSStringDrawingOptions, context: NSStringDrawingContext): CGRect;

	containsAttachmentsInRange(range: NSRange): boolean;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	dataFromRangeDocumentAttributesError(range: NSRange, dict: NSDictionary<string, any>): NSData;

	drawAtPoint(point: CGPoint): void;

	drawInRect(rect: CGRect): void;

	drawWithRectOptionsContext(rect: CGRect, options: NSStringDrawingOptions, context: NSStringDrawingContext): void;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	enumerateAttributeInRangeOptionsUsingBlock(attrName: string, enumerationRange: NSRange, opts: NSAttributedStringEnumerationOptions, block: (p1: any, p2: NSRange, p3: interop.Reference<boolean>) => void): void;

	enumerateAttributesInRangeOptionsUsingBlock(enumerationRange: NSRange, opts: NSAttributedStringEnumerationOptions, block: (p1: NSDictionary<string, any>, p2: NSRange, p3: interop.Reference<boolean>) => void): void;

	fileWrapperFromRangeDocumentAttributesError(range: NSRange, dict: NSDictionary<string, any>): NSFileWrapper;

	isEqualToAttributedString(other: NSAttributedString): boolean;

	mutableCopyWithZone(zone: interop.Pointer): any; // inherited from NSMutableCopying

	self(): NSAttributedString; // inherited from NSObjectProtocol

	size(): CGSize;
}

declare const enum NSAttributedStringEnumerationOptions {

	Reverse = 2,

	LongestEffectiveRangeNotRequired = 1048576
}

declare class NSAutoreleasePool extends NSObject {

	static addObject(anObject: any): void;

	static alloc(): NSAutoreleasePool; // inherited from NSObject

	static new(): NSAutoreleasePool; // inherited from NSObject

	constructor(); // inherited from NSObject

	addObject(anObject: any): void;

	drain(): void;

	self(): NSAutoreleasePool; // inherited from NSObjectProtocol
}

declare var NSAverageKeyValueOperator: string;

declare const enum NSBinarySearchingOptions {

	FirstEqual = 256,

	LastEqual = 512,

	InsertionIndex = 1024
}

declare class NSBlockOperation extends NSOperation {

	static blockOperationWithBlock(block: () => void): NSBlockOperation;

	/* readonly */ executionBlocks: NSArray<() => void>;

	addExecutionBlock(block: () => void): void;
}

declare var NSBuddhistCalendar: string;

declare class NSBundle extends NSObject {

	static URLForResourceWithExtensionSubdirectoryInBundleWithURL(name: string, ext: string, subpath: string, bundleURL: NSURL): NSURL;

	static URLsForResourcesWithExtensionSubdirectoryInBundleWithURL(ext: string, subpath: string, bundleURL: NSURL): NSArray<NSURL>;

	static allBundles(): NSArray<NSBundle>;

	static allFrameworks(): NSArray<NSBundle>;

	static alloc(): NSBundle; // inherited from NSObject

	static bundleForClass(aClass: typeof NSObject): NSBundle;

	static bundleWithIdentifier(identifier: string): NSBundle;

	static bundleWithPath(path: string): NSBundle;

	static bundleWithURL(url: NSURL): NSBundle;

	static mainBundle(): NSBundle;

	static new(): NSBundle; // inherited from NSObject

	static pathForResourceOfTypeInDirectory(name: string, ext: string, bundlePath: string): string;

	static pathsForResourcesOfTypeInDirectory(ext: string, bundlePath: string): NSArray<string>;

	static preferredLocalizationsFromArray(localizationsArray: NSArray<string>): NSArray<string>;

	static preferredLocalizationsFromArrayForPreferences(localizationsArray: NSArray<string>, preferencesArray: NSArray<string>): NSArray<string>;

	/* readonly */ appStoreReceiptURL: NSURL;

	/* readonly */ builtInPlugInsPath: string;

	/* readonly */ builtInPlugInsURL: NSURL;

	/* readonly */ bundleIdentifier: string;

	/* readonly */ bundlePath: string;

	/* readonly */ bundleURL: NSURL;

	/* readonly */ developmentLocalization: string;

	/* readonly */ executableArchitectures: NSArray<number>;

	/* readonly */ executablePath: string;

	/* readonly */ executableURL: NSURL;

	/* readonly */ infoDictionary: NSDictionary<string, any>;

	/* readonly */ loaded: boolean;

	/* readonly */ localizations: NSArray<string>;

	/* readonly */ localizedInfoDictionary: NSDictionary<string, any>;

	/* readonly */ preferredLocalizations: NSArray<string>;

	/* readonly */ principalClass: typeof NSObject;

	/* readonly */ privateFrameworksPath: string;

	/* readonly */ privateFrameworksURL: NSURL;

	/* readonly */ resourcePath: string;

	/* readonly */ resourceURL: NSURL;

	/* readonly */ sharedFrameworksPath: string;

	/* readonly */ sharedFrameworksURL: NSURL;

	/* readonly */ sharedSupportPath: string;

	/* readonly */ sharedSupportURL: NSURL;

	constructor(); // inherited from NSObject

	constructor(o: { path: string; });

	constructor(o: { URL: NSURL; });

	URLForAuxiliaryExecutable(executableName: string): NSURL;

	URLForResourceWithExtension(name: string, ext: string): NSURL;

	URLForResourceWithExtensionSubdirectory(name: string, ext: string, subpath: string): NSURL;

	URLForResourceWithExtensionSubdirectoryLocalization(name: string, ext: string, subpath: string, localizationName: string): NSURL;

	URLsForResourcesWithExtensionSubdirectory(ext: string, subpath: string): NSArray<NSURL>;

	URLsForResourcesWithExtensionSubdirectoryLocalization(ext: string, subpath: string, localizationName: string): NSArray<NSURL>;

	classNamed(className: string): typeof NSObject;

	load(): boolean;

	loadAndReturnError(): boolean;

	loadNibNamedOwnerOptions(name: string, owner: any, options: NSDictionary<any, any>): NSArray<any>;

	localizedStringForKeyValueTable(key: string, value: string, tableName: string): string;

	objectForInfoDictionaryKey(key: string): any;

	pathForAuxiliaryExecutable(executableName: string): string;

	pathForResourceOfType(name: string, ext: string): string;

	pathForResourceOfTypeInDirectory(name: string, ext: string, subpath: string): string;

	pathForResourceOfTypeInDirectoryForLocalization(name: string, ext: string, subpath: string, localizationName: string): string;

	pathsForResourcesOfTypeInDirectory(ext: string, subpath: string): NSArray<string>;

	pathsForResourcesOfTypeInDirectoryForLocalization(ext: string, subpath: string, localizationName: string): NSArray<string>;

	preflightAndReturnError(): boolean;

	preservationPriorityForTag(tag: string): number;

	self(): NSBundle; // inherited from NSObjectProtocol

	setPreservationPriorityForTags(priority: number, tags: NSSet<string>): void;

	unload(): boolean;
}

declare var NSBundleDidLoadNotification: string;

declare class NSBundleResourceRequest extends NSObject implements NSProgressReporting {

	static alloc(): NSBundleResourceRequest; // inherited from NSObject

	static new(): NSBundleResourceRequest; // inherited from NSObject

	/* readonly */ bundle: NSBundle;

	loadingPriority: number;

	/* readonly */ tags: NSSet<string>;

	/* readonly */ progress: NSProgress; // inherited from NSProgressReporting

	constructor(); // inherited from NSObject

	constructor(o: { tags: NSSet<string>; });

	constructor(o: { tags: NSSet<string>; bundle: NSBundle; });

	beginAccessingResourcesWithCompletionHandler(completionHandler: (p1: NSError) => void): void;

	conditionallyBeginAccessingResourcesWithCompletionHandler(completionHandler: (p1: boolean) => void): void;

	endAccessingResources(): void;

	self(): NSBundleResourceRequest; // inherited from NSObjectProtocol
}

declare var NSBundleResourceRequestLoadingPriorityUrgent: number;

declare var NSBundleResourceRequestLowDiskSpaceNotification: string;

declare class NSByteCountFormatter extends NSFormatter {

	static stringFromByteCountCountStyle(byteCount: number, countStyle: NSByteCountFormatterCountStyle): string;

	adaptive: boolean;

	allowedUnits: NSByteCountFormatterUnits;

	allowsNonnumericFormatting: boolean;

	countStyle: NSByteCountFormatterCountStyle;

	formattingContext: NSFormattingContext;

	includesActualByteCount: boolean;

	includesCount: boolean;

	includesUnit: boolean;

	zeroPadsFractionDigits: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	stringFromByteCount(byteCount: number): string;
}

declare const enum NSByteCountFormatterCountStyle {

	File = 0,

	Memory = 1,

	Decimal = 2,

	Binary = 3
}

declare const enum NSByteCountFormatterUnits {

	UseDefault = 0,

	UseBytes = 1,

	UseKB = 2,

	UseMB = 4,

	UseGB = 8,

	UseTB = 16,

	UsePB = 32,

	UseEB = 64,

	UseZB = 128,

	UseYBOrHigher = 65280,

	UseAll = 65535
}

declare class NSCache<KeyType, ObjectType> extends NSObject {

	static alloc<KeyType, ObjectType>(): NSCache<KeyType, ObjectType>; // inherited from NSObject

	static new<KeyType, ObjectType>(): NSCache<KeyType, ObjectType>; // inherited from NSObject

	countLimit: number;

	delegate: NSCacheDelegate;

	evictsObjectsWithDiscardedContent: boolean;

	name: string;

	totalCostLimit: number;

	constructor(); // inherited from NSObject

	objectForKey(key: KeyType): ObjectType;

	removeAllObjects(): void;

	removeObjectForKey(key: KeyType): void;

	self(): NSCache<KeyType, ObjectType>; // inherited from NSObjectProtocol

	setObjectForKey(obj: ObjectType, key: KeyType): void;

	setObjectForKeyCost(obj: ObjectType, key: KeyType, g: number): void;
}

interface NSCacheDelegate extends NSObjectProtocol {

	cacheWillEvictObject?(cache: NSCache<any, any>, obj: any): void;
}
declare var NSCacheDelegate: {

	prototype: NSCacheDelegate;
};

declare class NSCachedURLResponse extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSCachedURLResponse; // inherited from NSObject

	static new(): NSCachedURLResponse; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ data: NSData;

	/* readonly */ response: NSURLResponse;

	/* readonly */ storagePolicy: NSURLCacheStoragePolicy;

	/* readonly */ userInfo: NSDictionary<any, any>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { response: NSURLResponse; data: NSData; });

	constructor(o: { response: NSURLResponse; data: NSData; userInfo: NSDictionary<any, any>; storagePolicy: NSURLCacheStoragePolicy; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NSCachedURLResponse; // inherited from NSObjectProtocol
}

declare const enum NSCalculationError {

	NoError = 0,

	LossOfPrecision = 1,

	Underflow = 2,

	Overflow = 3,

	DivideByZero = 4
}

declare class NSCalendar extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSCalendar; // inherited from NSObject

	static autoupdatingCurrentCalendar(): NSCalendar;

	static calendarWithIdentifier(calendarIdentifierConstant: string): NSCalendar;

	static currentCalendar(): NSCalendar;

	static new(): NSCalendar; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ AMSymbol: string;

	/* readonly */ PMSymbol: string;

	/* readonly */ calendarIdentifier: string;

	/* readonly */ eraSymbols: NSArray<string>;

	firstWeekday: number;

	locale: NSLocale;

	/* readonly */ longEraSymbols: NSArray<string>;

	minimumDaysInFirstWeek: number;

	/* readonly */ monthSymbols: NSArray<string>;

	/* readonly */ quarterSymbols: NSArray<string>;

	/* readonly */ shortMonthSymbols: NSArray<string>;

	/* readonly */ shortQuarterSymbols: NSArray<string>;

	/* readonly */ shortStandaloneMonthSymbols: NSArray<string>;

	/* readonly */ shortStandaloneQuarterSymbols: NSArray<string>;

	/* readonly */ shortStandaloneWeekdaySymbols: NSArray<string>;

	/* readonly */ shortWeekdaySymbols: NSArray<string>;

	/* readonly */ standaloneMonthSymbols: NSArray<string>;

	/* readonly */ standaloneQuarterSymbols: NSArray<string>;

	/* readonly */ standaloneWeekdaySymbols: NSArray<string>;

	timeZone: NSTimeZone;

	/* readonly */ veryShortMonthSymbols: NSArray<string>;

	/* readonly */ veryShortStandaloneMonthSymbols: NSArray<string>;

	/* readonly */ veryShortStandaloneWeekdaySymbols: NSArray<string>;

	/* readonly */ veryShortWeekdaySymbols: NSArray<string>;

	/* readonly */ weekdaySymbols: NSArray<string>;

	constructor(); // inherited from NSObject

	constructor(o: { calendarIdentifier: string; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	compareDateToDateToUnitGranularity(date1: Date, date2: Date, unit: NSCalendarUnit): NSComparisonResult;

	componentFromDate(unit: NSCalendarUnit, date: Date): number;

	componentsFromDate(unitFlags: NSCalendarUnit, date: Date): NSDateComponents;

	componentsFromDateComponentsToDateComponentsOptions(unitFlags: NSCalendarUnit, startingDateComp: NSDateComponents, resultDateComp: NSDateComponents, options: NSCalendarOptions): NSDateComponents;

	componentsFromDateToDateOptions(unitFlags: NSCalendarUnit, startingDate: Date, resultDate: Date, opts: NSCalendarOptions): NSDateComponents;

	componentsInTimeZoneFromDate(timezone: NSTimeZone, date: Date): NSDateComponents;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	dateByAddingComponentsToDateOptions(comps: NSDateComponents, date: Date, opts: NSCalendarOptions): Date;

	dateByAddingUnitValueToDateOptions(unit: NSCalendarUnit, value: number, date: Date, options: NSCalendarOptions): Date;

	dateBySettingHourMinuteSecondOfDateOptions(h: number, m: number, s: number, date: Date, opts: NSCalendarOptions): Date;

	dateBySettingUnitValueOfDateOptions(unit: NSCalendarUnit, v: number, date: Date, opts: NSCalendarOptions): Date;

	dateFromComponents(comps: NSDateComponents): Date;

	dateMatchesComponents(date: Date, components: NSDateComponents): boolean;

	dateWithEraYearForWeekOfYearWeekOfYearWeekdayHourMinuteSecondNanosecond(eraValue: number, yearValue: number, weekValue: number, weekdayValue: number, hourValue: number, minuteValue: number, secondValue: number, nanosecondValue: number): Date;

	dateWithEraYearMonthDayHourMinuteSecondNanosecond(eraValue: number, yearValue: number, monthValue: number, dayValue: number, hourValue: number, minuteValue: number, secondValue: number, nanosecondValue: number): Date;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	enumerateDatesStartingAfterDateMatchingComponentsOptionsUsingBlock(start: Date, comps: NSDateComponents, opts: NSCalendarOptions, block: (p1: Date, p2: boolean, p3: interop.Reference<boolean>) => void): void;

	getEraYearForWeekOfYearWeekOfYearWeekdayFromDate(eraValuePointer: interop.Reference<number>, yearValuePointer: interop.Reference<number>, weekValuePointer: interop.Reference<number>, weekdayValuePointer: interop.Reference<number>, date: Date): void;

	getEraYearMonthDayFromDate(eraValuePointer: interop.Reference<number>, yearValuePointer: interop.Reference<number>, monthValuePointer: interop.Reference<number>, dayValuePointer: interop.Reference<number>, date: Date): void;

	getHourMinuteSecondNanosecondFromDate(hourValuePointer: interop.Reference<number>, minuteValuePointer: interop.Reference<number>, secondValuePointer: interop.Reference<number>, nanosecondValuePointer: interop.Reference<number>, date: Date): void;

	isDateEqualToDateToUnitGranularity(date1: Date, date2: Date, unit: NSCalendarUnit): boolean;

	isDateInSameDayAsDate(date1: Date, date2: Date): boolean;

	isDateInToday(date: Date): boolean;

	isDateInTomorrow(date: Date): boolean;

	isDateInWeekend(date: Date): boolean;

	isDateInYesterday(date: Date): boolean;

	maximumRangeOfUnit(unit: NSCalendarUnit): NSRange;

	minimumRangeOfUnit(unit: NSCalendarUnit): NSRange;

	nextDateAfterDateMatchingComponentsOptions(date: Date, comps: NSDateComponents, options: NSCalendarOptions): Date;

	nextDateAfterDateMatchingHourMinuteSecondOptions(date: Date, hourValue: number, minuteValue: number, secondValue: number, options: NSCalendarOptions): Date;

	nextDateAfterDateMatchingUnitValueOptions(date: Date, unit: NSCalendarUnit, value: number, options: NSCalendarOptions): Date;

	nextWeekendStartDateIntervalOptionsAfterDate(datep: interop.Reference<Date>, tip: interop.Reference<number>, options: NSCalendarOptions, date: Date): boolean;

	ordinalityOfUnitInUnitForDate(smaller: NSCalendarUnit, larger: NSCalendarUnit, date: Date): number;

	rangeOfUnitInUnitForDate(smaller: NSCalendarUnit, larger: NSCalendarUnit, date: Date): NSRange;

	rangeOfUnitStartDateIntervalForDate(unit: NSCalendarUnit, datep: interop.Reference<Date>, tip: interop.Reference<number>, date: Date): boolean;

	rangeOfWeekendStartDateIntervalContainingDate(datep: interop.Reference<Date>, tip: interop.Reference<number>, date: Date): boolean;

	self(): NSCalendar; // inherited from NSObjectProtocol

	startOfDayForDate(date: Date): Date;
}

declare var NSCalendarDayChangedNotification: string;

declare var NSCalendarIdentifierBuddhist: string;

declare var NSCalendarIdentifierChinese: string;

declare var NSCalendarIdentifierCoptic: string;

declare var NSCalendarIdentifierEthiopicAmeteAlem: string;

declare var NSCalendarIdentifierEthiopicAmeteMihret: string;

declare var NSCalendarIdentifierGregorian: string;

declare var NSCalendarIdentifierHebrew: string;

declare var NSCalendarIdentifierISO8601: string;

declare var NSCalendarIdentifierIndian: string;

declare var NSCalendarIdentifierIslamic: string;

declare var NSCalendarIdentifierIslamicCivil: string;

declare var NSCalendarIdentifierIslamicTabular: string;

declare var NSCalendarIdentifierIslamicUmmAlQura: string;

declare var NSCalendarIdentifierJapanese: string;

declare var NSCalendarIdentifierPersian: string;

declare var NSCalendarIdentifierRepublicOfChina: string;

declare const enum NSCalendarOptions {

	WrapComponents = 1,

	MatchStrictly = 2,

	SearchBackwards = 4,

	MatchPreviousTimePreservingSmallerUnits = 256,

	MatchNextTimePreservingSmallerUnits = 512,

	MatchNextTime = 1024,

	MatchFirst = 4096,

	MatchLast = 8192
}

declare const enum NSCalendarUnit {

	CalendarUnitEra = 2,

	CalendarUnitYear = 4,

	CalendarUnitMonth = 8,

	CalendarUnitDay = 16,

	CalendarUnitHour = 32,

	CalendarUnitMinute = 64,

	CalendarUnitSecond = 128,

	CalendarUnitWeekday = 512,

	CalendarUnitWeekdayOrdinal = 1024,

	CalendarUnitQuarter = 2048,

	CalendarUnitWeekOfMonth = 4096,

	CalendarUnitWeekOfYear = 8192,

	CalendarUnitYearForWeekOfYear = 16384,

	CalendarUnitNanosecond = 32768,

	CalendarUnitCalendar = 1048576,

	CalendarUnitTimeZone = 2097152,

	EraCalendarUnit = 2,

	YearCalendarUnit = 4,

	MonthCalendarUnit = 8,

	DayCalendarUnit = 16,

	HourCalendarUnit = 32,

	MinuteCalendarUnit = 64,

	SecondCalendarUnit = 128,

	WeekCalendarUnit = 256,

	WeekdayCalendarUnit = 512,

	WeekdayOrdinalCalendarUnit = 1024,

	QuarterCalendarUnit = 2048,

	WeekOfMonthCalendarUnit = 4096,

	WeekOfYearCalendarUnit = 8192,

	YearForWeekOfYearCalendarUnit = 16384,

	CalendarCalendarUnit = 1048576,

	TimeZoneCalendarUnit = 2097152
}

declare var NSCharacterConversionException: string;

declare class NSCharacterSet extends NSObject implements NSCoding, NSCopying, NSMutableCopying {

	static URLFragmentAllowedCharacterSet(): NSCharacterSet;

	static URLHostAllowedCharacterSet(): NSCharacterSet;

	static URLPasswordAllowedCharacterSet(): NSCharacterSet;

	static URLPathAllowedCharacterSet(): NSCharacterSet;

	static URLQueryAllowedCharacterSet(): NSCharacterSet;

	static URLUserAllowedCharacterSet(): NSCharacterSet;

	static alloc(): NSCharacterSet; // inherited from NSObject

	static alphanumericCharacterSet(): NSCharacterSet;

	static capitalizedLetterCharacterSet(): NSCharacterSet;

	static characterSetWithBitmapRepresentation(data: NSData): NSCharacterSet;

	static characterSetWithCharactersInString(aString: string): NSCharacterSet;

	static characterSetWithContentsOfFile(fName: string): NSCharacterSet;

	static characterSetWithRange(aRange: NSRange): NSCharacterSet;

	static controlCharacterSet(): NSCharacterSet;

	static decimalDigitCharacterSet(): NSCharacterSet;

	static decomposableCharacterSet(): NSCharacterSet;

	static illegalCharacterSet(): NSCharacterSet;

	static letterCharacterSet(): NSCharacterSet;

	static lowercaseLetterCharacterSet(): NSCharacterSet;

	static new(): NSCharacterSet; // inherited from NSObject

	static newlineCharacterSet(): NSCharacterSet;

	static nonBaseCharacterSet(): NSCharacterSet;

	static punctuationCharacterSet(): NSCharacterSet;

	static symbolCharacterSet(): NSCharacterSet;

	static uppercaseLetterCharacterSet(): NSCharacterSet;

	static whitespaceAndNewlineCharacterSet(): NSCharacterSet;

	static whitespaceCharacterSet(): NSCharacterSet;

	/* readonly */ bitmapRepresentation: NSData;

	/* readonly */ invertedSet: NSCharacterSet;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	characterIsMember(aCharacter: string): boolean;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	hasMemberInPlane(thePlane: number): boolean;

	isSupersetOfSet(theOtherSet: NSCharacterSet): boolean;

	longCharacterIsMember(theLongChar: number): boolean;

	mutableCopyWithZone(zone: interop.Pointer): any; // inherited from NSMutableCopying

	self(): NSCharacterSet; // inherited from NSObjectProtocol
}

declare var NSChineseCalendar: string;

declare function NSClassFromString(aClassName: string): typeof NSObject;

declare var NSCocoaErrorDomain: string;

declare class NSCoder extends NSObject {

	static alloc(): NSCoder; // inherited from NSObject

	static new(): NSCoder; // inherited from NSObject

	/* readonly */ allowedClasses: NSSet<typeof NSObject>;

	/* readonly */ allowsKeyedCoding: boolean;

	/* readonly */ requiresSecureCoding: boolean;

	/* readonly */ systemVersion: number;

	constructor(); // inherited from NSObject

	containsValueForKey(key: string): boolean;

	decodeArrayOfObjCTypeCountAt(itemType: string, count: number, array: interop.Pointer): void;

	decodeBoolForKey(key: string): boolean;

	decodeBytesForKeyReturnedLength(key: string, lengthp: interop.Reference<number>): string;

	decodeBytesWithReturnedLength(lengthp: interop.Reference<number>): interop.Pointer;

	decodeCGAffineTransformForKey(key: string): CGAffineTransform;

	decodeCGPointForKey(key: string): CGPoint;

	decodeCGRectForKey(key: string): CGRect;

	decodeCGSizeForKey(key: string): CGSize;

	decodeCGVectorForKey(key: string): CGVector;

	decodeCMTimeForKey(key: string): CMTime;

	decodeCMTimeMappingForKey(key: string): CMTimeMapping;

	decodeCMTimeRangeForKey(key: string): CMTimeRange;

	decodeDataObject(): NSData;

	decodeDoubleForKey(key: string): number;

	decodeFloatForKey(key: string): number;

	decodeInt32ForKey(key: string): number;

	decodeInt64ForKey(key: string): number;

	decodeIntForKey(key: string): number;

	decodeIntegerForKey(key: string): number;

	decodeObject(): any;

	decodeObjectForKey(key: string): any;

	decodeObjectOfClassForKey(aClass: typeof NSObject, key: string): any;

	decodeObjectOfClassesForKey(classes: NSSet<typeof NSObject>, key: string): any;

	decodePropertyListForKey(key: string): any;

	decodeTopLevelObjectAndReturnError(): any;

	decodeTopLevelObjectForKeyError(key: string): any;

	decodeTopLevelObjectOfClassForKeyError(aClass: typeof NSObject, key: string): any;

	decodeTopLevelObjectOfClassesForKeyError(classes: NSSet<typeof NSObject>, key: string): any;

	decodeUIEdgeInsetsForKey(key: string): UIEdgeInsets;

	decodeUIOffsetForKey(key: string): UIOffset;

	decodeValueOfObjCTypeAt(type: string, data: interop.Pointer): void;

	encodeArrayOfObjCTypeCountAt(type: string, count: number, array: interop.Pointer): void;

	encodeBoolForKey(boolv: boolean, key: string): void;

	encodeBycopyObject(anObject: any): void;

	encodeByrefObject(anObject: any): void;

	encodeBytesLength(byteaddr: interop.Pointer, length: number): void;

	encodeBytesLengthForKey(bytesp: string, lenv: number, key: string): void;

	encodeCGAffineTransformForKey(transform: CGAffineTransform, key: string): void;

	encodeCGPointForKey(point: CGPoint, key: string): void;

	encodeCGRectForKey(rect: CGRect, key: string): void;

	encodeCGSizeForKey(size: CGSize, key: string): void;

	encodeCGVectorForKey(vector: CGVector, key: string): void;

	encodeCMTimeForKey(time: CMTime, key: string): void;

	encodeCMTimeMappingForKey(timeMapping: CMTimeMapping, key: string): void;

	encodeCMTimeRangeForKey(timeRange: CMTimeRange, key: string): void;

	encodeConditionalObject(object: any): void;

	encodeConditionalObjectForKey(objv: any, key: string): void;

	encodeDataObject(data: NSData): void;

	encodeDoubleForKey(realv: number, key: string): void;

	encodeFloatForKey(realv: number, key: string): void;

	encodeInt32ForKey(intv: number, key: string): void;

	encodeInt64ForKey(intv: number, key: string): void;

	encodeIntForKey(intv: number, key: string): void;

	encodeIntegerForKey(intv: number, key: string): void;

	encodeObject(object: any): void;

	encodeObjectForKey(objv: any, key: string): void;

	encodeRootObject(rootObject: any): void;

	encodeUIEdgeInsetsForKey(insets: UIEdgeInsets, key: string): void;

	encodeUIOffsetForKey(offset: UIOffset, key: string): void;

	encodeValueOfObjCTypeAt(type: string, addr: interop.Pointer): void;

	failWithError(error: NSError): void;

	objectZone(): interop.Pointer;

	self(): NSCoder; // inherited from NSObjectProtocol

	setObjectZone(zone: interop.Pointer): void;

	versionForClassName(className: string): number;
}

interface NSCoding {

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder?(aDecoder: NSCoder): NSCoding;
}
declare var NSCoding: {

	prototype: NSCoding;
};

declare class NSComparisonPredicate extends NSPredicate {

	static predicateWithLeftExpressionRightExpressionCustomSelector(lhs: NSExpression, rhs: NSExpression, selector: string): NSComparisonPredicate;

	static predicateWithLeftExpressionRightExpressionModifierTypeOptions(lhs: NSExpression, rhs: NSExpression, modifier: NSComparisonPredicateModifier, type: NSPredicateOperatorType, options: NSComparisonPredicateOptions): NSComparisonPredicate;

	/* readonly */ comparisonPredicateModifier: NSComparisonPredicateModifier;

	/* readonly */ customSelector: string;

	/* readonly */ leftExpression: NSExpression;

	/* readonly */ options: NSComparisonPredicateOptions;

	/* readonly */ predicateOperatorType: NSPredicateOperatorType;

	/* readonly */ rightExpression: NSExpression;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { leftExpression: NSExpression; rightExpression: NSExpression; customSelector: string; });

	constructor(o: { leftExpression: NSExpression; rightExpression: NSExpression; modifier: NSComparisonPredicateModifier; type: NSPredicateOperatorType; options: NSComparisonPredicateOptions; });

	predicateWithSubstitutionVariables(variables: NSDictionary<string, any>): NSComparisonPredicate; // inherited from NSPredicate
}

declare const enum NSComparisonPredicateModifier {

	DirectPredicateModifier = 0,

	AllPredicateModifier = 1,

	AnyPredicateModifier = 2
}

declare const enum NSComparisonPredicateOptions {

	CaseInsensitivePredicateOption = 1,

	DiacriticInsensitivePredicateOption = 2,

	NormalizedPredicateOption = 4
}

declare const enum NSComparisonResult {

	OrderedAscending = -1,

	OrderedSame = 0,

	OrderedDescending = 1
}

declare class NSCompoundPredicate extends NSPredicate {

	static andPredicateWithSubpredicates(subpredicates: NSArray<NSPredicate>): NSCompoundPredicate;

	static notPredicateWithSubpredicate(predicate: NSPredicate): NSCompoundPredicate;

	static orPredicateWithSubpredicates(subpredicates: NSArray<NSPredicate>): NSCompoundPredicate;

	/* readonly */ compoundPredicateType: NSCompoundPredicateType;

	/* readonly */ subpredicates: NSArray<any>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { type: NSCompoundPredicateType; subpredicates: NSArray<NSPredicate>; });

	predicateWithSubstitutionVariables(variables: NSDictionary<string, any>): NSCompoundPredicate; // inherited from NSPredicate
}

declare const enum NSCompoundPredicateType {

	NotPredicateType = 0,

	AndPredicateType = 1,

	OrPredicateType = 2
}

declare class NSCondition extends NSObject implements NSLocking {

	static alloc(): NSCondition; // inherited from NSObject

	static new(): NSCondition; // inherited from NSObject

	name: string;

	constructor(); // inherited from NSObject

	broadcast(): void;

	lock(): void; // inherited from NSLocking

	self(): NSCondition; // inherited from NSObjectProtocol

	signal(): void;

	unlock(): void; // inherited from NSLocking

	wait(): void;

	waitUntilDate(limit: Date): boolean;
}

declare class NSConditionLock extends NSObject implements NSLocking {

	static alloc(): NSConditionLock; // inherited from NSObject

	static new(): NSConditionLock; // inherited from NSObject

	/* readonly */ condition: number;

	name: string;

	constructor(); // inherited from NSObject

	constructor(o: { condition: number; });

	lock(): void; // inherited from NSLocking

	lockBeforeDate(limit: Date): boolean;

	lockWhenCondition(condition: number): void;

	lockWhenConditionBeforeDate(condition: number, limit: Date): boolean;

	self(): NSConditionLock; // inherited from NSObjectProtocol

	tryLock(): boolean;

	tryLockWhenCondition(condition: number): boolean;

	unlock(): void; // inherited from NSLocking

	unlockWithCondition(condition: number): void;
}

declare class NSConstantString extends NSSimpleCString {
}

declare function NSCopyMemoryPages(source: interop.Pointer, dest: interop.Pointer, bytes: number): void;

declare function NSCopyObject(object: any, extraBytes: number, zone: interop.Pointer): any;

interface NSCopying {

	copyWithZone(zone: interop.Pointer): any;
}
declare var NSCopying: {

	prototype: NSCopying;
};

declare var NSCountKeyValueOperator: string;

declare class NSCountedSet<ObjectType> extends NSMutableSet<ObjectType> {

	static setWithCapacity<ObjectType>(numItems: number): NSCountedSet<ObjectType>; // inherited from NSMutableSet

	constructor(o: { capacity: number; }); // inherited from NSMutableSet

	countForObject(object: ObjectType): number;
}

declare function NSCreateZone(startSize: number, granularity: number, canFree: boolean): interop.Pointer;

declare var NSCurrentLocaleDidChangeNotification: string;

declare class NSData extends NSObject implements CKRecordValue, NSCopying, NSMutableCopying, NSSecureCoding {

	static alloc(): NSData; // inherited from NSObject

	static data(): NSData;

	static dataWithBytesLength(bytes: interop.Pointer, length: number): NSData;

	static dataWithBytesNoCopyLength(bytes: interop.Pointer, length: number): NSData;

	static dataWithBytesNoCopyLengthFreeWhenDone(bytes: interop.Pointer, length: number, b: boolean): NSData;

	static dataWithContentsOfFile(path: string): NSData;

	static dataWithContentsOfFileOptionsError(path: string, readOptionsMask: NSDataReadingOptions): NSData;

	static dataWithContentsOfMappedFile(path: string): any;

	static dataWithContentsOfURL(url: NSURL): NSData;

	static dataWithContentsOfURLOptionsError(url: NSURL, readOptionsMask: NSDataReadingOptions): NSData;

	static dataWithData(data: NSData): NSData;

	static new(): NSData; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ bytes: interop.Pointer;

	/* readonly */ length: number;

	constructor(); // inherited from NSObject

	constructor(o: { base64EncodedData: NSData; options: NSDataBase64DecodingOptions; });

	constructor(o: { base64EncodedString: string; options: NSDataBase64DecodingOptions; });

	constructor(o: { base64Encoding: string; });

	constructor(o: { bytes: interop.Pointer; length: number; });

	constructor(o: { bytesNoCopy: interop.Pointer; length: number; });

	constructor(o: { bytesNoCopy: interop.Pointer; length: number; deallocator: (p1: interop.Pointer, p2: number) => void; });

	constructor(o: { bytesNoCopy: interop.Pointer; length: number; freeWhenDone: boolean; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { contentsOfFile: string; });

	constructor(o: { contentsOfFile: string; options: NSDataReadingOptions; });

	constructor(o: { contentsOfMappedFile: string; });

	constructor(o: { contentsOfURL: NSURL; });

	constructor(o: { contentsOfURL: NSURL; options: NSDataReadingOptions; });

	constructor(o: { data: NSData; });

	base64EncodedDataWithOptions(options: NSDataBase64EncodingOptions): NSData;

	base64EncodedStringWithOptions(options: NSDataBase64EncodingOptions): string;

	base64Encoding(): string;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	enumerateByteRangesUsingBlock(block: (p1: interop.Pointer, p2: NSRange, p3: interop.Reference<boolean>) => void): void;

	getBytes(buffer: interop.Pointer): void;

	getBytesLength(buffer: interop.Pointer, length: number): void;

	getBytesRange(buffer: interop.Pointer, range: NSRange): void;

	isEqualToData(other: NSData): boolean;

	mutableCopyWithZone(zone: interop.Pointer): any; // inherited from NSMutableCopying

	nx_SHA1Digest(): NSData;

	nx_SHA1Hexdigest(): string;

	rangeOfDataOptionsRange(dataToFind: NSData, mask: NSDataSearchOptions, searchRange: NSRange): NSRange;

	self(): NSData; // inherited from NSObjectProtocol

	subdataWithRange(range: NSRange): NSData;

	writeToFileAtomically(path: string, useAuxiliaryFile: boolean): boolean;

	writeToFileOptionsError(path: string, writeOptionsMask: NSDataWritingOptions): boolean;

	writeToURLAtomically(url: NSURL, atomically: boolean): boolean;

	writeToURLOptionsError(url: NSURL, writeOptionsMask: NSDataWritingOptions): boolean;
}

declare const enum NSDataBase64DecodingOptions {

	IgnoreUnknownCharacters = 1
}

declare const enum NSDataBase64EncodingOptions {

	Encoding64CharacterLineLength = 1,

	Encoding76CharacterLineLength = 2,

	EncodingEndLineWithCarriageReturn = 16,

	EncodingEndLineWithLineFeed = 32
}

declare class NSDataDetector extends NSRegularExpression {

	static dataDetectorWithTypesError(checkingTypes: number): NSDataDetector;

	/* readonly */ checkingTypes: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { pattern: string; options: NSRegularExpressionOptions; }); // inherited from NSRegularExpression

	constructor(o: { types: number; });
}

declare const enum NSDataReadingOptions {

	DataReadingMappedIfSafe = 1,

	DataReadingUncached = 2,

	DataReadingMappedAlways = 8,

	DataReadingMapped = 1,

	MappedRead = 1,

	UncachedRead = 2
}

declare const enum NSDataSearchOptions {

	Backwards = 1,

	Anchored = 2
}

declare const enum NSDataWritingOptions {

	DataWritingAtomic = 1,

	DataWritingWithoutOverwriting = 2,

	DataWritingFileProtectionNone = 268435456,

	DataWritingFileProtectionComplete = 536870912,

	DataWritingFileProtectionCompleteUnlessOpen = 805306368,

	DataWritingFileProtectionCompleteUntilFirstUserAuthentication = 1073741824,

	DataWritingFileProtectionMask = 4026531840,

	AtomicWrite = 1
}

declare class NSDate extends NSObject implements CKRecordValue, NSCopying, NSSecureCoding {

	static alloc(): NSDate; // inherited from NSObject

	static date(): NSDate;

	static dateWithTimeIntervalSince1970(secs: number): NSDate;

	static dateWithTimeIntervalSinceDate(secsToBeAdded: number, date: Date): NSDate;

	static dateWithTimeIntervalSinceNow(secs: number): NSDate;

	static dateWithTimeIntervalSinceReferenceDate(ti: number): NSDate;

	static distantFuture(): Date;

	static distantPast(): Date;

	static ms_dateFromString(dateString: string): NSDate;

	static new(): NSDate; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static timeIntervalSinceReferenceDate(): number;

	/* readonly */ timeIntervalSince1970: number;

	/* readonly */ timeIntervalSinceNow: number;

	/* readonly */ timeIntervalSinceReferenceDate: number;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { timeIntervalSince1970: number; });

	constructor(o: { timeInterval: number; sinceDate: Date; });

	constructor(o: { timeIntervalSinceNow: number; });

	constructor(o: { timeIntervalSinceReferenceDate: number; });

	addTimeInterval(seconds: number): any;

	compare(other: Date): NSComparisonResult;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	dateByAddingTimeInterval(ti: number): NSDate;

	descriptionWithLocale(locale: any): string;

	earlierDate(anotherDate: Date): Date;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	isEqualToDate(otherDate: Date): boolean;

	laterDate(anotherDate: Date): Date;

	ms_toString(): string;

	self(): NSDate; // inherited from NSObjectProtocol

	timeIntervalSinceDate(anotherDate: Date): number;
}

declare class NSDateComponents extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSDateComponents; // inherited from NSObject

	static new(): NSDateComponents; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	calendar: NSCalendar;

	/* readonly */ date: Date;

	day: number;

	era: number;

	hour: number;

	leapMonth: boolean;

	minute: number;

	month: number;

	nanosecond: number;

	quarter: number;

	second: number;

	timeZone: NSTimeZone;

	/* readonly */ validDate: boolean;

	weekOfMonth: number;

	weekOfYear: number;

	weekday: number;

	weekdayOrdinal: number;

	year: number;

	yearForWeekOfYear: number;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	isValidDateInCalendar(calendar: NSCalendar): boolean;

	self(): NSDateComponents; // inherited from NSObjectProtocol

	setValueForComponent(value: number, unit: NSCalendarUnit): void;

	setWeek(v: number): void;

	valueForComponent(unit: NSCalendarUnit): number;

	week(): number;
}

declare class NSDateComponentsFormatter extends NSFormatter {

	static localizedStringFromDateComponentsUnitsStyle(components: NSDateComponents, unitsStyle: NSDateComponentsFormatterUnitsStyle): string;

	allowedUnits: NSCalendarUnit;

	allowsFractionalUnits: boolean;

	calendar: NSCalendar;

	collapsesLargestUnit: boolean;

	formattingContext: NSFormattingContext;

	includesApproximationPhrase: boolean;

	includesTimeRemainingPhrase: boolean;

	maximumUnitCount: number;

	unitsStyle: NSDateComponentsFormatterUnitsStyle;

	zeroFormattingBehavior: NSDateComponentsFormatterZeroFormattingBehavior;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	stringFromDateComponents(components: NSDateComponents): string;

	stringFromDateToDate(startDate: Date, endDate: Date): string;

	stringFromTimeInterval(ti: number): string;
}

declare const enum NSDateComponentsFormatterUnitsStyle {

	Positional = 0,

	Abbreviated = 1,

	Short = 2,

	Full = 3,

	SpellOut = 4
}

declare const enum NSDateComponentsFormatterZeroFormattingBehavior {

	None = 0,

	Default = 1,

	DropLeading = 2,

	DropMiddle = 4,

	DropTrailing = 8,

	DropAll = 14,

	Pad = 65536
}

declare class NSDateFormatter extends NSFormatter {

	static dateFormatFromTemplateOptionsLocale(tmplate: string, opts: number, locale: NSLocale): string;

	static defaultFormatterBehavior(): NSDateFormatterBehavior;

	static localizedStringFromDateDateStyleTimeStyle(date: Date, dstyle: NSDateFormatterStyle, tstyle: NSDateFormatterStyle): string;

	static setDefaultFormatterBehavior(behavior: NSDateFormatterBehavior): void;

	AMSymbol: string;

	PMSymbol: string;

	calendar: NSCalendar;

	dateFormat: string;

	dateStyle: NSDateFormatterStyle;

	defaultDate: Date;

	doesRelativeDateFormatting: boolean;

	eraSymbols: NSArray<string>;

	formatterBehavior: NSDateFormatterBehavior;

	formattingContext: NSFormattingContext;

	generatesCalendarDates: boolean;

	gregorianStartDate: Date;

	lenient: boolean;

	locale: NSLocale;

	longEraSymbols: NSArray<string>;

	monthSymbols: NSArray<string>;

	quarterSymbols: NSArray<string>;

	shortMonthSymbols: NSArray<string>;

	shortQuarterSymbols: NSArray<string>;

	shortStandaloneMonthSymbols: NSArray<string>;

	shortStandaloneQuarterSymbols: NSArray<string>;

	shortStandaloneWeekdaySymbols: NSArray<string>;

	shortWeekdaySymbols: NSArray<string>;

	standaloneMonthSymbols: NSArray<string>;

	standaloneQuarterSymbols: NSArray<string>;

	standaloneWeekdaySymbols: NSArray<string>;

	timeStyle: NSDateFormatterStyle;

	timeZone: NSTimeZone;

	twoDigitStartDate: Date;

	veryShortMonthSymbols: NSArray<string>;

	veryShortStandaloneMonthSymbols: NSArray<string>;

	veryShortStandaloneWeekdaySymbols: NSArray<string>;

	veryShortWeekdaySymbols: NSArray<string>;

	weekdaySymbols: NSArray<string>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	dateFromString(string: string): Date;

	getObjectValueForStringRangeError(obj: interop.Reference<any>, string: string, rangep: interop.Reference<NSRange>): boolean;

	setLocalizedDateFormatFromTemplate(dateFormatTemplate: string): void;

	stringFromDate(date: Date): string;
}

declare const enum NSDateFormatterBehavior {

	BehaviorDefault = 0,

	Behavior10_4 = 1040
}

declare const enum NSDateFormatterStyle {

	NoStyle = 0,

	ShortStyle = 1,

	MediumStyle = 2,

	LongStyle = 3,

	FullStyle = 4
}

declare class NSDateIntervalFormatter extends NSFormatter {

	calendar: NSCalendar;

	dateStyle: NSDateIntervalFormatterStyle;

	dateTemplate: string;

	locale: NSLocale;

	timeStyle: NSDateIntervalFormatterStyle;

	timeZone: NSTimeZone;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	stringFromDateToDate(fromDate: Date, toDate: Date): string;
}

declare const enum NSDateIntervalFormatterStyle {

	NoStyle = 0,

	ShortStyle = 1,

	MediumStyle = 2,

	LongStyle = 3,

	FullStyle = 4
}

declare function NSDeallocateMemoryPages(ptr: interop.Pointer, bytes: number): void;

declare function NSDeallocateObject(object: any): void;

interface NSDecimal {
	_exponent: number;
	_length: number;
	_isNegative: number;
	_isCompact: number;
	_reserved: number;
	_mantissa: interop.Reference<number>;
}
declare var NSDecimal: interop.StructType<NSDecimal>;

declare function NSDecimalAdd(result: interop.Reference<NSDecimal>, leftOperand: interop.Reference<NSDecimal>, rightOperand: interop.Reference<NSDecimal>, roundingMode: NSRoundingMode): NSCalculationError;

declare function NSDecimalCompact(number: interop.Reference<NSDecimal>): void;

declare function NSDecimalCompare(leftOperand: interop.Reference<NSDecimal>, rightOperand: interop.Reference<NSDecimal>): NSComparisonResult;

declare function NSDecimalCopy(destination: interop.Reference<NSDecimal>, source: interop.Reference<NSDecimal>): void;

declare function NSDecimalDivide(result: interop.Reference<NSDecimal>, leftOperand: interop.Reference<NSDecimal>, rightOperand: interop.Reference<NSDecimal>, roundingMode: NSRoundingMode): NSCalculationError;

declare function NSDecimalMultiply(result: interop.Reference<NSDecimal>, leftOperand: interop.Reference<NSDecimal>, rightOperand: interop.Reference<NSDecimal>, roundingMode: NSRoundingMode): NSCalculationError;

declare function NSDecimalMultiplyByPowerOf10(result: interop.Reference<NSDecimal>, number: interop.Reference<NSDecimal>, power: number, roundingMode: NSRoundingMode): NSCalculationError;

declare function NSDecimalNormalize(number1: interop.Reference<NSDecimal>, number2: interop.Reference<NSDecimal>, roundingMode: NSRoundingMode): NSCalculationError;

declare class NSDecimalNumber extends NSNumber {

	static decimalNumberWithDecimal(dcm: NSDecimal): NSDecimalNumber;

	static decimalNumberWithMantissaExponentIsNegative(mantissa: number, exponent: number, flag: boolean): NSDecimalNumber;

	static decimalNumberWithString(numberValue: string): NSDecimalNumber;

	static decimalNumberWithStringLocale(numberValue: string, locale: any): NSDecimalNumber;

	static defaultBehavior(): NSDecimalNumberBehaviors;

	static maximumDecimalNumber(): NSDecimalNumber;

	static minimumDecimalNumber(): NSDecimalNumber;

	static notANumber(): NSDecimalNumber;

	static one(): NSDecimalNumber;

	static setDefaultBehavior(behavior: NSDecimalNumberBehaviors): void;

	static zero(): NSDecimalNumber;

	constructor(o: { bool: boolean; }); // inherited from NSNumber

	constructor(o: { char: number; }); // inherited from NSNumber

	constructor(o: { decimal: NSDecimal; });

	constructor(o: { double: number; }); // inherited from NSNumber

	constructor(o: { float: number; }); // inherited from NSNumber

	constructor(o: { int: number; }); // inherited from NSNumber

	constructor(o: { integer: number; }); // inherited from NSNumber

	constructor(o: { long: number; }); // inherited from NSNumber

	constructor(o: { longLong: number; }); // inherited from NSNumber

	constructor(o: { mantissa: number; exponent: number; isNegative: boolean; });

	constructor(o: { short: number; }); // inherited from NSNumber

	constructor(o: { string: string; });

	constructor(o: { string: string; locale: any; });

	constructor(o: { unsignedChar: number; }); // inherited from NSNumber

	constructor(o: { unsignedInt: number; }); // inherited from NSNumber

	constructor(o: { unsignedInteger: number; }); // inherited from NSNumber

	constructor(o: { unsignedLong: number; }); // inherited from NSNumber

	constructor(o: { unsignedLongLong: number; }); // inherited from NSNumber

	constructor(o: { unsignedShort: number; }); // inherited from NSNumber

	decimalNumberByAdding(decimalNumber: NSDecimalNumber): NSDecimalNumber;

	decimalNumberByAddingWithBehavior(decimalNumber: NSDecimalNumber, behavior: NSDecimalNumberBehaviors): NSDecimalNumber;

	decimalNumberByDividingBy(decimalNumber: NSDecimalNumber): NSDecimalNumber;

	decimalNumberByDividingByWithBehavior(decimalNumber: NSDecimalNumber, behavior: NSDecimalNumberBehaviors): NSDecimalNumber;

	decimalNumberByMultiplyingBy(decimalNumber: NSDecimalNumber): NSDecimalNumber;

	decimalNumberByMultiplyingByPowerOf10(power: number): NSDecimalNumber;

	decimalNumberByMultiplyingByPowerOf10WithBehavior(power: number, behavior: NSDecimalNumberBehaviors): NSDecimalNumber;

	decimalNumberByMultiplyingByWithBehavior(decimalNumber: NSDecimalNumber, behavior: NSDecimalNumberBehaviors): NSDecimalNumber;

	decimalNumberByRaisingToPower(power: number): NSDecimalNumber;

	decimalNumberByRaisingToPowerWithBehavior(power: number, behavior: NSDecimalNumberBehaviors): NSDecimalNumber;

	decimalNumberByRoundingAccordingToBehavior(behavior: NSDecimalNumberBehaviors): NSDecimalNumber;

	decimalNumberBySubtracting(decimalNumber: NSDecimalNumber): NSDecimalNumber;

	decimalNumberBySubtractingWithBehavior(decimalNumber: NSDecimalNumber, behavior: NSDecimalNumberBehaviors): NSDecimalNumber;

	self(): NSDecimalNumber; // inherited from NSObjectProtocol
}

interface NSDecimalNumberBehaviors {

	exceptionDuringOperationErrorLeftOperandRightOperand(operation: string, error: NSCalculationError, leftOperand: NSDecimalNumber, rightOperand: NSDecimalNumber): NSDecimalNumber;

	roundingMode(): NSRoundingMode;

	scale(): number;
}
declare var NSDecimalNumberBehaviors: {

	prototype: NSDecimalNumberBehaviors;
};

declare var NSDecimalNumberDivideByZeroException: string;

declare var NSDecimalNumberExactnessException: string;

declare class NSDecimalNumberHandler extends NSObject implements NSCoding, NSDecimalNumberBehaviors {

	static alloc(): NSDecimalNumberHandler; // inherited from NSObject

	static decimalNumberHandlerWithRoundingModeScaleRaiseOnExactnessRaiseOnOverflowRaiseOnUnderflowRaiseOnDivideByZero(roundingMode: NSRoundingMode, scale: number, exact: boolean, overflow: boolean, underflow: boolean, divideByZero: boolean): NSDecimalNumberHandler;

	static defaultDecimalNumberHandler(): NSDecimalNumberHandler;

	static new(): NSDecimalNumberHandler; // inherited from NSObject

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { roundingMode: NSRoundingMode; scale: number; raiseOnExactness: boolean; raiseOnOverflow: boolean; raiseOnUnderflow: boolean; raiseOnDivideByZero: boolean; });

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	exceptionDuringOperationErrorLeftOperandRightOperand(operation: string, error: NSCalculationError, leftOperand: NSDecimalNumber, rightOperand: NSDecimalNumber): NSDecimalNumber; // inherited from NSDecimalNumberBehaviors

	roundingMode(): NSRoundingMode; // inherited from NSDecimalNumberBehaviors

	scale(): number; // inherited from NSDecimalNumberBehaviors

	self(): NSDecimalNumberHandler; // inherited from NSObjectProtocol
}

declare var NSDecimalNumberOverflowException: string;

declare var NSDecimalNumberUnderflowException: string;

declare function NSDecimalPower(result: interop.Reference<NSDecimal>, number: interop.Reference<NSDecimal>, power: number, roundingMode: NSRoundingMode): NSCalculationError;

declare function NSDecimalRound(result: interop.Reference<NSDecimal>, number: interop.Reference<NSDecimal>, scale: number, roundingMode: NSRoundingMode): void;

declare function NSDecimalString(dcm: interop.Reference<NSDecimal>, locale: any): string;

declare function NSDecimalSubtract(result: interop.Reference<NSDecimal>, leftOperand: interop.Reference<NSDecimal>, rightOperand: interop.Reference<NSDecimal>, roundingMode: NSRoundingMode): NSCalculationError;

declare function NSDecrementExtraRefCountWasZero(object: any): boolean;

declare function NSDefaultMallocZone(): interop.Pointer;

declare var NSDefaultRunLoopMode: string;

declare var NSDestinationInvalidException: string;

declare class NSDictionary<KeyType, ObjectType> extends NSObject implements NSCopying, NSFastEnumeration, NSMutableCopying, NSSecureCoding {

	static alloc<KeyType, ObjectType>(): NSDictionary<KeyType, ObjectType>; // inherited from NSObject

	static dictionary<KeyType, ObjectType>(): NSDictionary<KeyType, ObjectType>;

	static dictionaryWithContentsOfFile<KeyType, ObjectType>(path: string): NSDictionary<KeyType, ObjectType>;

	static dictionaryWithContentsOfURL<KeyType, ObjectType>(url: NSURL): NSDictionary<KeyType, ObjectType>;

	static dictionaryWithDictionary<KeyType, ObjectType>(dict: NSDictionary<KeyType, ObjectType>): NSDictionary<KeyType, ObjectType>;

	static dictionaryWithObjectForKey<KeyType, ObjectType>(object: ObjectType, key: NSCopying): NSDictionary<KeyType, ObjectType>;

	static dictionaryWithObjectsAndKeys<KeyType, ObjectType>(firstObject: any): NSDictionary<KeyType, ObjectType>;

	static dictionaryWithObjectsForKeys<KeyType, ObjectType>(objects: NSArray<ObjectType>, keys: NSArray<NSCopying>): NSDictionary<KeyType, ObjectType>;

	static dictionaryWithObjectsForKeysCount<KeyType, ObjectType>(objects: interop.Reference<ObjectType>, keys: interop.Reference<NSCopying>, cnt: number): NSDictionary<KeyType, ObjectType>;

	static new<KeyType, ObjectType>(): NSDictionary<KeyType, ObjectType>; // inherited from NSObject

	static sharedKeySetForKeys(keys: NSArray<NSCopying>): any;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ allKeys: NSArray<KeyType>;

	/* readonly */ allValues: NSArray<ObjectType>;

	/* readonly */ count: number;

	/* readonly */ descriptionInStringsFileFormat: string;
	[Symbol.iterator](): Iterator<any>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { contentsOfFile: string; });

	constructor(o: { contentsOfURL: NSURL; });

	constructor(o: { dictionary: NSDictionary<KeyType, ObjectType>; });

	constructor(o: { dictionary: NSDictionary<KeyType, ObjectType>; copyItems: boolean; });

	constructor(o: { objectsAndKeys: any; });

	constructor(o: { objects: NSArray<ObjectType>; forKeys: NSArray<NSCopying>; });

	constructor(o: { objects: interop.Reference<ObjectType>; forKeys: interop.Reference<NSCopying>; count: number; });

	allKeysForObject(anObject: ObjectType): NSArray<KeyType>;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	descriptionWithLocale(locale: any): string;

	descriptionWithLocaleIndent(locale: any, level: number): string;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	enumerateKeysAndObjectsUsingBlock(block: (p1: KeyType, p2: ObjectType, p3: interop.Reference<boolean>) => void): void;

	enumerateKeysAndObjectsWithOptionsUsingBlock(opts: NSEnumerationOptions, block: (p1: KeyType, p2: ObjectType, p3: interop.Reference<boolean>) => void): void;

	fileCreationDate(): Date;

	fileExtensionHidden(): boolean;

	fileGroupOwnerAccountID(): number;

	fileGroupOwnerAccountName(): string;

	fileHFSCreatorCode(): number;

	fileHFSTypeCode(): number;

	fileIsAppendOnly(): boolean;

	fileIsImmutable(): boolean;

	fileModificationDate(): Date;

	fileOwnerAccountID(): number;

	fileOwnerAccountName(): string;

	filePosixPermissions(): number;

	fileSize(): number;

	fileSystemFileNumber(): number;

	fileSystemNumber(): number;

	fileType(): string;

	getObjectsAndKeys(objects: interop.Reference<ObjectType>, keys: interop.Reference<KeyType>): void;

	getObjectsAndKeysCount(objects: interop.Reference<ObjectType>, keys: interop.Reference<KeyType>, count: number): void;

	isEqualToDictionary(otherDictionary: NSDictionary<KeyType, ObjectType>): boolean;

	keyEnumerator(): NSEnumerator<KeyType>;

	keysOfEntriesPassingTest(predicate: (p1: KeyType, p2: ObjectType, p3: interop.Reference<boolean>) => boolean): NSSet<KeyType>;

	keysOfEntriesWithOptionsPassingTest(opts: NSEnumerationOptions, predicate: (p1: KeyType, p2: ObjectType, p3: interop.Reference<boolean>) => boolean): NSSet<KeyType>;

	keysSortedByValueUsingComparator(cmptr: (p1: any, p2: any) => NSComparisonResult): NSArray<KeyType>;

	keysSortedByValueUsingSelector(comparator: string): NSArray<KeyType>;

	keysSortedByValueWithOptionsUsingComparator(opts: NSSortOptions, cmptr: (p1: any, p2: any) => NSComparisonResult): NSArray<KeyType>;

	mutableCopyWithZone(zone: interop.Pointer): any; // inherited from NSMutableCopying

	objectEnumerator(): NSEnumerator<ObjectType>;

	objectForKey(aKey: KeyType): ObjectType;

	objectForKeyedSubscript(key: KeyType): ObjectType;

	objectsForKeysNotFoundMarker(keys: NSArray<KeyType>, marker: ObjectType): NSArray<ObjectType>;

	self(): NSDictionary<KeyType, ObjectType>; // inherited from NSObjectProtocol

	valueForKey(key: string): ObjectType;

	writeToFileAtomically(path: string, useAuxiliaryFile: boolean): boolean;

	writeToURLAtomically(url: NSURL, atomically: boolean): boolean;
}

declare var NSDidBecomeSingleThreadedNotification: string;

declare const enum NSDirectoryEnumerationOptions {

	SkipsSubdirectoryDescendants = 1,

	SkipsPackageDescendants = 2,

	SkipsHiddenFiles = 4
}

declare class NSDirectoryEnumerator<ObjectType> extends NSEnumerator<ObjectType> {

	/* readonly */ directoryAttributes: NSDictionary<string, any>;

	/* readonly */ fileAttributes: NSDictionary<string, any>;

	/* readonly */ level: number;
	[Symbol.iterator](): Iterator<any>;

	skipDescendants(): void;

	skipDescendents(): void;
}

interface NSDiscardableContent {

	beginContentAccess(): boolean;

	discardContentIfPossible(): void;

	endContentAccess(): void;

	isContentDiscarded(): boolean;
}
declare var NSDiscardableContent: {

	prototype: NSDiscardableContent;
};

declare var NSDistinctUnionOfArraysKeyValueOperator: string;

declare var NSDistinctUnionOfObjectsKeyValueOperator: string;

declare var NSDistinctUnionOfSetsKeyValueOperator: string;

declare class NSEnergyFormatter extends NSFormatter {

	forFoodEnergyUse: boolean;

	numberFormatter: NSNumberFormatter;

	unitStyle: NSFormattingUnitStyle;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	stringFromJoules(numberInJoules: number): string;

	stringFromValueUnit(value: number, unit: NSEnergyFormatterUnit): string;

	unitStringFromJoulesUsedUnit(numberInJoules: number, unitp: interop.Reference<NSEnergyFormatterUnit>): string;

	unitStringFromValueUnit(value: number, unit: NSEnergyFormatterUnit): string;
}

declare const enum NSEnergyFormatterUnit {

	Joule = 11,

	Kilojoule = 14,

	Calorie = 1793,

	Kilocalorie = 1794
}

declare const enum NSEnumerationOptions {

	Concurrent = 1,

	Reverse = 2
}

declare class NSEnumerator<ObjectType> extends NSObject implements NSFastEnumeration {

	static alloc<ObjectType>(): NSEnumerator<ObjectType>; // inherited from NSObject

	static new<ObjectType>(): NSEnumerator<ObjectType>; // inherited from NSObject

	/* readonly */ allObjects: NSArray<ObjectType>;
	[Symbol.iterator](): Iterator<any>;

	constructor(); // inherited from NSObject

	nextObject(): ObjectType;

	self(): NSEnumerator<ObjectType>; // inherited from NSObjectProtocol
}

declare class NSError extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSError; // inherited from NSObject

	static errorWithDomainCodeUserInfo(domain: string, code: number, dict: NSDictionary<any, any>): NSError;

	static new(): NSError; // inherited from NSObject

	static setUserInfoValueProviderForDomainProvider(errorDomain: string, provider: (p1: NSError, p2: string) => any): void;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static userInfoValueProviderForDomain(errorDomain: string): (p1: NSError, p2: string) => any;

	/* readonly */ code: number;

	/* readonly */ domain: string;

	/* readonly */ helpAnchor: string;

	/* readonly */ localizedDescription: string;

	/* readonly */ localizedFailureReason: string;

	/* readonly */ localizedRecoveryOptions: NSArray<string>;

	/* readonly */ localizedRecoverySuggestion: string;

	/* readonly */ recoveryAttempter: any;

	/* readonly */ userInfo: NSDictionary<any, any>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { domain: string; code: number; userInfo: NSDictionary<any, any>; });

	clientError(): MSError;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	isAuthCanceledError(): boolean;

	isAuthenticationError(): boolean;

	isClientError(): boolean;

	self(): NSError; // inherited from NSObjectProtocol
}

declare var NSErrorFailingURLStringKey: string;

declare class NSException extends NSObject implements NSCoding, NSCopying {

	static alloc(): NSException; // inherited from NSObject

	static exceptionWithNameReasonUserInfo(name: string, reason: string, userInfo: NSDictionary<any, any>): NSException;

	static new(): NSException; // inherited from NSObject

	/* readonly */ callStackReturnAddresses: NSArray<number>;

	/* readonly */ callStackSymbols: NSArray<string>;

	/* readonly */ name: string;

	/* readonly */ reason: string;

	/* readonly */ userInfo: NSDictionary<any, any>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { name: string; reason: string; userInfo: NSDictionary<any, any>; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	raise(): void;

	self(): NSException; // inherited from NSObjectProtocol
}

declare class NSExpression extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSExpression; // inherited from NSObject

	static expressionForAggregate(subexpressions: NSArray<any>): NSExpression;

	static expressionForAnyKey(): NSExpression;

	static expressionForBlockArguments(block: (p1: any, p2: NSArray<any>, p3: NSMutableDictionary<any, any>) => any, _arguments: NSArray<NSExpression>): NSExpression;

	static expressionForConditionalTrueExpressionFalseExpression(predicate: NSPredicate, trueExpression: NSExpression, falseExpression: NSExpression): NSExpression;

	static expressionForConstantValue(obj: any): NSExpression;

	static expressionForEvaluatedObject(): NSExpression;

	static expressionForFunctionArguments(name: string, parameters: NSArray<any>): NSExpression;

	static expressionForFunctionSelectorNameArguments(target: NSExpression, name: string, parameters: NSArray<any>): NSExpression;

	static expressionForIntersectSetWith(left: NSExpression, right: NSExpression): NSExpression;

	static expressionForKeyPath(keyPath: string): NSExpression;

	static expressionForMinusSetWith(left: NSExpression, right: NSExpression): NSExpression;

	static expressionForSubqueryUsingIteratorVariablePredicate(expression: NSExpression, variable: string, predicate: any): NSExpression;

	static expressionForUnionSetWith(left: NSExpression, right: NSExpression): NSExpression;

	static expressionForVariable(string: string): NSExpression;

	static expressionWithFormatArgumentArray(expressionFormat: string, _arguments: NSArray<any>): NSExpression;

	static new(): NSExpression; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ arguments: NSArray<NSExpression>;

	/* readonly */ collection: any;

	/* readonly */ constantValue: any;

	/* readonly */ expressionBlock: (p1: any, p2: NSArray<any>, p3: NSMutableDictionary<any, any>) => any;

	/* readonly */ expressionType: NSExpressionType;

	/* readonly */ falseExpression: NSExpression;

	/* readonly */ function: string;

	/* readonly */ keyPath: string;

	/* readonly */ leftExpression: NSExpression;

	/* readonly */ operand: NSExpression;

	/* readonly */ predicate: NSPredicate;

	/* readonly */ rightExpression: NSExpression;

	/* readonly */ trueExpression: NSExpression;

	/* readonly */ variable: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { expressionType: NSExpressionType; });

	allowEvaluation(): void;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	expressionValueWithObjectContext(object: any, context: NSMutableDictionary<any, any>): any;

	self(): NSExpression; // inherited from NSObjectProtocol
}

declare const enum NSExpressionType {

	ConstantValueExpressionType = 0,

	EvaluatedObjectExpressionType = 1,

	VariableExpressionType = 2,

	KeyPathExpressionType = 3,

	FunctionExpressionType = 4,

	UnionSetExpressionType = 5,

	IntersectSetExpressionType = 6,

	MinusSetExpressionType = 7,

	SubqueryExpressionType = 13,

	AggregateExpressionType = 14,

	AnyKeyExpressionType = 15,

	BlockExpressionType = 19,

	ConditionalExpressionType = 20
}

declare class NSExtensionContext extends NSObject {

	static alloc(): NSExtensionContext; // inherited from NSObject

	static new(): NSExtensionContext; // inherited from NSObject

	/* readonly */ inputItems: NSArray<any>;

	constructor(); // inherited from NSObject

	cancelRequestWithError(error: NSError): void;

	completeRequestReturningItemsCompletionHandler(items: NSArray<any>, completionHandler: (p1: boolean) => void): void;

	openURLCompletionHandler(URL: NSURL, completionHandler: (p1: boolean) => void): void;

	self(): NSExtensionContext; // inherited from NSObjectProtocol
}

declare var NSExtensionHostDidBecomeActiveNotification: string;

declare var NSExtensionHostDidEnterBackgroundNotification: string;

declare var NSExtensionHostWillEnterForegroundNotification: string;

declare var NSExtensionHostWillResignActiveNotification: string;

declare class NSExtensionItem extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSExtensionItem; // inherited from NSObject

	static new(): NSExtensionItem; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	attachments: NSArray<any>;

	attributedContentText: NSAttributedString;

	attributedTitle: NSAttributedString;

	userInfo: NSDictionary<any, any>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NSExtensionItem; // inherited from NSObjectProtocol
}

declare var NSExtensionItemAttachmentsKey: string;

declare var NSExtensionItemAttributedContentTextKey: string;

declare var NSExtensionItemAttributedTitleKey: string;

declare var NSExtensionItemsAndErrorsKey: string;

declare var NSExtensionJavaScriptFinalizeArgumentKey: string;

declare var NSExtensionJavaScriptPreprocessingResultsKey: string;

interface NSExtensionRequestHandling extends NSObjectProtocol {

	beginRequestWithExtensionContext(context: NSExtensionContext): void;
}
declare var NSExtensionRequestHandling: {

	prototype: NSExtensionRequestHandling;
};

declare function NSExtraRefCount(object: any): number;

interface NSFastEnumeration {
}
declare var NSFastEnumeration: {

	prototype: NSFastEnumeration;
};

interface NSFastEnumerationState {
	state: number;
	itemsPtr: interop.Reference<any>;
	mutationsPtr: interop.Reference<number>;
	extra: interop.Reference<number>;
}
declare var NSFastEnumerationState: interop.StructType<NSFastEnumerationState>;

declare class NSFileAccessIntent extends NSObject {

	static alloc(): NSFileAccessIntent; // inherited from NSObject

	static new(): NSFileAccessIntent; // inherited from NSObject

	static readingIntentWithURLOptions(url: NSURL, options: NSFileCoordinatorReadingOptions): NSFileAccessIntent;

	static writingIntentWithURLOptions(url: NSURL, options: NSFileCoordinatorWritingOptions): NSFileAccessIntent;

	/* readonly */ URL: NSURL;

	constructor(); // inherited from NSObject

	self(): NSFileAccessIntent; // inherited from NSObjectProtocol
}

declare var NSFileAppendOnly: string;

declare var NSFileBusy: string;

declare class NSFileCoordinator extends NSObject {

	static addFilePresenter(filePresenter: NSFilePresenter): void;

	static alloc(): NSFileCoordinator; // inherited from NSObject

	static filePresenters(): NSArray<NSFilePresenter>;

	static new(): NSFileCoordinator; // inherited from NSObject

	static removeFilePresenter(filePresenter: NSFilePresenter): void;

	purposeIdentifier: string;

	constructor(); // inherited from NSObject

	constructor(o: { filePresenter: NSFilePresenter; });

	cancel(): void;

	coordinateAccessWithIntentsQueueByAccessor(intents: NSArray<NSFileAccessIntent>, queue: NSOperationQueue, accessor: (p1: NSError) => void): void;

	coordinateReadingItemAtURLOptionsErrorByAccessor(url: NSURL, options: NSFileCoordinatorReadingOptions, outError: interop.Reference<NSError>, reader: (p1: NSURL) => void): void;

	coordinateReadingItemAtURLOptionsWritingItemAtURLOptionsErrorByAccessor(readingURL: NSURL, readingOptions: NSFileCoordinatorReadingOptions, writingURL: NSURL, writingOptions: NSFileCoordinatorWritingOptions, outError: interop.Reference<NSError>, readerWriter: (p1: NSURL, p2: NSURL) => void): void;

	coordinateWritingItemAtURLOptionsErrorByAccessor(url: NSURL, options: NSFileCoordinatorWritingOptions, outError: interop.Reference<NSError>, writer: (p1: NSURL) => void): void;

	coordinateWritingItemAtURLOptionsWritingItemAtURLOptionsErrorByAccessor(url1: NSURL, options1: NSFileCoordinatorWritingOptions, url2: NSURL, options2: NSFileCoordinatorWritingOptions, outError: interop.Reference<NSError>, writer: (p1: NSURL, p2: NSURL) => void): void;

	itemAtURLDidMoveToURL(oldURL: NSURL, newURL: NSURL): void;

	itemAtURLWillMoveToURL(oldURL: NSURL, newURL: NSURL): void;

	prepareForReadingItemsAtURLsOptionsWritingItemsAtURLsOptionsErrorByAccessor(readingURLs: NSArray<NSURL>, readingOptions: NSFileCoordinatorReadingOptions, writingURLs: NSArray<NSURL>, writingOptions: NSFileCoordinatorWritingOptions, outError: interop.Reference<NSError>, batchAccessor: (p1: () => void) => void): void;

	self(): NSFileCoordinator; // inherited from NSObjectProtocol
}

declare const enum NSFileCoordinatorReadingOptions {

	WithoutChanges = 1,

	ResolvesSymbolicLink = 2,

	ImmediatelyAvailableMetadataOnly = 4,

	ForUploading = 8
}

declare const enum NSFileCoordinatorWritingOptions {

	ForDeleting = 1,

	ForMoving = 2,

	ForMerging = 4,

	ForReplacing = 8,

	ContentIndependentMetadataOnly = 16
}

declare var NSFileCreationDate: string;

declare var NSFileDeviceIdentifier: string;

declare var NSFileExtensionHidden: string;

declare var NSFileGroupOwnerAccountID: string;

declare var NSFileGroupOwnerAccountName: string;

declare var NSFileHFSCreatorCode: string;

declare var NSFileHFSTypeCode: string;

declare class NSFileHandle extends NSObject implements NSSecureCoding {

	static alloc(): NSFileHandle; // inherited from NSObject

	static fileHandleForReadingAtPath(path: string): NSFileHandle;

	static fileHandleForReadingFromURLError(url: NSURL): NSFileHandle;

	static fileHandleForUpdatingAtPath(path: string): NSFileHandle;

	static fileHandleForUpdatingURLError(url: NSURL): NSFileHandle;

	static fileHandleForWritingAtPath(path: string): NSFileHandle;

	static fileHandleForWritingToURLError(url: NSURL): NSFileHandle;

	static fileHandleWithNullDevice(): NSFileHandle;

	static fileHandleWithStandardError(): NSFileHandle;

	static fileHandleWithStandardInput(): NSFileHandle;

	static fileHandleWithStandardOutput(): NSFileHandle;

	static new(): NSFileHandle; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ availableData: NSData;

	/* readonly */ fileDescriptor: number;

	/* readonly */ offsetInFile: number;

	readabilityHandler: (p1: NSFileHandle) => void;

	writeabilityHandler: (p1: NSFileHandle) => void;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { fileDescriptor: number; });

	constructor(o: { fileDescriptor: number; closeOnDealloc: boolean; });

	acceptConnectionInBackgroundAndNotify(): void;

	acceptConnectionInBackgroundAndNotifyForModes(modes: NSArray<string>): void;

	closeFile(): void;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	readDataOfLength(length: number): NSData;

	readDataToEndOfFile(): NSData;

	readInBackgroundAndNotify(): void;

	readInBackgroundAndNotifyForModes(modes: NSArray<string>): void;

	readToEndOfFileInBackgroundAndNotify(): void;

	readToEndOfFileInBackgroundAndNotifyForModes(modes: NSArray<string>): void;

	seekToEndOfFile(): number;

	seekToFileOffset(offset: number): void;

	self(): NSFileHandle; // inherited from NSObjectProtocol

	synchronizeFile(): void;

	truncateFileAtOffset(offset: number): void;

	waitForDataInBackgroundAndNotify(): void;

	waitForDataInBackgroundAndNotifyForModes(modes: NSArray<string>): void;

	writeData(data: NSData): void;
}

declare var NSFileHandleConnectionAcceptedNotification: string;

declare var NSFileHandleDataAvailableNotification: string;

declare var NSFileHandleNotificationDataItem: string;

declare var NSFileHandleNotificationFileHandleItem: string;

declare var NSFileHandleNotificationMonitorModes: string;

declare var NSFileHandleOperationException: string;

declare var NSFileHandleReadCompletionNotification: string;

declare var NSFileHandleReadToEndOfFileCompletionNotification: string;

declare var NSFileImmutable: string;

declare class NSFileManager extends NSObject {

	static alloc(): NSFileManager; // inherited from NSObject

	static defaultManager(): NSFileManager;

	static new(): NSFileManager; // inherited from NSObject

	/* readonly */ currentDirectoryPath: string;

	delegate: NSFileManagerDelegate;

	/* readonly */ ubiquityIdentityToken: any;

	constructor(); // inherited from NSObject

	URLForDirectoryInDomainAppropriateForURLCreateError(directory: NSSearchPathDirectory, domain: NSSearchPathDomainMask, url: NSURL, shouldCreate: boolean): NSURL;

	URLForPublishingUbiquitousItemAtURLExpirationDateError(url: NSURL, outDate: interop.Reference<Date>): NSURL;

	URLForUbiquityContainerIdentifier(containerIdentifier: string): NSURL;

	URLsForDirectoryInDomains(directory: NSSearchPathDirectory, domainMask: NSSearchPathDomainMask): NSArray<NSURL>;

	attributesOfFileSystemForPathError(path: string): NSDictionary<string, any>;

	attributesOfItemAtPathError(path: string): NSDictionary<string, any>;

	changeCurrentDirectoryPath(path: string): boolean;

	changeFileAttributesAtPath(attributes: NSDictionary<any, any>, path: string): boolean;

	componentsToDisplayForPath(path: string): NSArray<string>;

	containerURLForSecurityApplicationGroupIdentifier(groupIdentifier: string): NSURL;

	contentsAtPath(path: string): NSData;

	contentsEqualAtPathAndPath(path1: string, path2: string): boolean;

	contentsOfDirectoryAtPathError(path: string): NSArray<string>;

	contentsOfDirectoryAtURLIncludingPropertiesForKeysOptionsError(url: NSURL, keys: NSArray<string>, mask: NSDirectoryEnumerationOptions): NSArray<NSURL>;

	copyItemAtPathToPathError(srcPath: string, dstPath: string): boolean;

	copyItemAtURLToURLError(srcURL: NSURL, dstURL: NSURL): boolean;

	createDirectoryAtPathAttributes(path: string, attributes: NSDictionary<any, any>): boolean;

	createDirectoryAtPathWithIntermediateDirectoriesAttributesError(path: string, createIntermediates: boolean, attributes: NSDictionary<string, any>): boolean;

	createDirectoryAtURLWithIntermediateDirectoriesAttributesError(url: NSURL, createIntermediates: boolean, attributes: NSDictionary<string, any>): boolean;

	createFileAtPathContentsAttributes(path: string, data: NSData, attr: NSDictionary<string, any>): boolean;

	createSymbolicLinkAtPathPathContent(path: string, otherpath: string): boolean;

	createSymbolicLinkAtPathWithDestinationPathError(path: string, destPath: string): boolean;

	createSymbolicLinkAtURLWithDestinationURLError(url: NSURL, destURL: NSURL): boolean;

	destinationOfSymbolicLinkAtPathError(path: string): string;

	directoryContentsAtPath(path: string): NSArray<any>;

	displayNameAtPath(path: string): string;

	enumeratorAtPath(path: string): NSDirectoryEnumerator<string>;

	enumeratorAtURLIncludingPropertiesForKeysOptionsErrorHandler(url: NSURL, keys: NSArray<string>, mask: NSDirectoryEnumerationOptions, handler: (p1: NSURL, p2: NSError) => boolean): NSDirectoryEnumerator<NSURL>;

	evictUbiquitousItemAtURLError(url: NSURL): boolean;

	fileAttributesAtPathTraverseLink(path: string, yorn: boolean): NSDictionary<any, any>;

	fileExistsAtPath(path: string): boolean;

	fileExistsAtPathIsDirectory(path: string, isDirectory: interop.Reference<boolean>): boolean;

	fileSystemAttributesAtPath(path: string): NSDictionary<any, any>;

	fileSystemRepresentationWithPath(path: string): string;

	getRelationshipOfDirectoryAtURLToItemAtURLError(outRelationship: interop.Reference<NSURLRelationship>, directoryURL: NSURL, otherURL: NSURL): boolean;

	getRelationshipOfDirectoryInDomainToItemAtURLError(outRelationship: interop.Reference<NSURLRelationship>, directory: NSSearchPathDirectory, domainMask: NSSearchPathDomainMask, url: NSURL): boolean;

	isDeletableFileAtPath(path: string): boolean;

	isExecutableFileAtPath(path: string): boolean;

	isReadableFileAtPath(path: string): boolean;

	isUbiquitousItemAtURL(url: NSURL): boolean;

	isWritableFileAtPath(path: string): boolean;

	linkItemAtPathToPathError(srcPath: string, dstPath: string): boolean;

	linkItemAtURLToURLError(srcURL: NSURL, dstURL: NSURL): boolean;

	mountedVolumeURLsIncludingResourceValuesForKeysOptions(propertyKeys: NSArray<string>, options: NSVolumeEnumerationOptions): NSArray<NSURL>;

	moveItemAtPathToPathError(srcPath: string, dstPath: string): boolean;

	moveItemAtURLToURLError(srcURL: NSURL, dstURL: NSURL): boolean;

	pathContentOfSymbolicLinkAtPath(path: string): string;

	removeItemAtPathError(path: string): boolean;

	removeItemAtURLError(URL: NSURL): boolean;

	replaceItemAtURLWithItemAtURLBackupItemNameOptionsResultingItemURLError(originalItemURL: NSURL, newItemURL: NSURL, backupItemName: string, options: NSFileManagerItemReplacementOptions, resultingURL: interop.Reference<NSURL>): boolean;

	self(): NSFileManager; // inherited from NSObjectProtocol

	setAttributesOfItemAtPathError(attributes: NSDictionary<string, any>, path: string): boolean;

	setUbiquitousItemAtURLDestinationURLError(flag: boolean, url: NSURL, destinationURL: NSURL): boolean;

	startDownloadingUbiquitousItemAtURLError(url: NSURL): boolean;

	stringWithFileSystemRepresentationLength(str: string, len: number): string;

	subpathsAtPath(path: string): NSArray<string>;

	subpathsOfDirectoryAtPathError(path: string): NSArray<string>;
}

interface NSFileManagerDelegate extends NSObjectProtocol {

	fileManagerShouldCopyItemAtPathToPath?(fileManager: NSFileManager, srcPath: string, dstPath: string): boolean;

	fileManagerShouldCopyItemAtURLToURL?(fileManager: NSFileManager, srcURL: NSURL, dstURL: NSURL): boolean;

	fileManagerShouldLinkItemAtPathToPath?(fileManager: NSFileManager, srcPath: string, dstPath: string): boolean;

	fileManagerShouldLinkItemAtURLToURL?(fileManager: NSFileManager, srcURL: NSURL, dstURL: NSURL): boolean;

	fileManagerShouldMoveItemAtPathToPath?(fileManager: NSFileManager, srcPath: string, dstPath: string): boolean;

	fileManagerShouldMoveItemAtURLToURL?(fileManager: NSFileManager, srcURL: NSURL, dstURL: NSURL): boolean;

	fileManagerShouldProceedAfterErrorCopyingItemAtPathToPath?(fileManager: NSFileManager, error: NSError, srcPath: string, dstPath: string): boolean;

	fileManagerShouldProceedAfterErrorCopyingItemAtURLToURL?(fileManager: NSFileManager, error: NSError, srcURL: NSURL, dstURL: NSURL): boolean;

	fileManagerShouldProceedAfterErrorLinkingItemAtPathToPath?(fileManager: NSFileManager, error: NSError, srcPath: string, dstPath: string): boolean;

	fileManagerShouldProceedAfterErrorLinkingItemAtURLToURL?(fileManager: NSFileManager, error: NSError, srcURL: NSURL, dstURL: NSURL): boolean;

	fileManagerShouldProceedAfterErrorMovingItemAtPathToPath?(fileManager: NSFileManager, error: NSError, srcPath: string, dstPath: string): boolean;

	fileManagerShouldProceedAfterErrorMovingItemAtURLToURL?(fileManager: NSFileManager, error: NSError, srcURL: NSURL, dstURL: NSURL): boolean;

	fileManagerShouldProceedAfterErrorRemovingItemAtPath?(fileManager: NSFileManager, error: NSError, path: string): boolean;

	fileManagerShouldProceedAfterErrorRemovingItemAtURL?(fileManager: NSFileManager, error: NSError, URL: NSURL): boolean;

	fileManagerShouldRemoveItemAtPath?(fileManager: NSFileManager, path: string): boolean;

	fileManagerShouldRemoveItemAtURL?(fileManager: NSFileManager, URL: NSURL): boolean;
}
declare var NSFileManagerDelegate: {

	prototype: NSFileManagerDelegate;
};

declare const enum NSFileManagerItemReplacementOptions {

	UsingNewMetadataOnly = 1,

	WithoutDeletingBackupItem = 2
}

declare var NSFileModificationDate: string;

declare var NSFileOwnerAccountID: string;

declare var NSFileOwnerAccountName: string;

declare var NSFilePathErrorKey: string;

declare var NSFilePosixPermissions: string;

interface NSFilePresenter extends NSObjectProtocol {

	presentedItemOperationQueue: NSOperationQueue;

	presentedItemURL: NSURL;

	accommodatePresentedItemDeletionWithCompletionHandler?(completionHandler: (p1: NSError) => void): void;

	accommodatePresentedSubitemDeletionAtURLCompletionHandler?(url: NSURL, completionHandler: (p1: NSError) => void): void;

	presentedItemDidChange?(): void;

	presentedItemDidGainVersion?(version: NSFileVersion): void;

	presentedItemDidLoseVersion?(version: NSFileVersion): void;

	presentedItemDidMoveToURL?(newURL: NSURL): void;

	presentedItemDidResolveConflictVersion?(version: NSFileVersion): void;

	presentedSubitemAtURLDidGainVersion?(url: NSURL, version: NSFileVersion): void;

	presentedSubitemAtURLDidLoseVersion?(url: NSURL, version: NSFileVersion): void;

	presentedSubitemAtURLDidMoveToURL?(oldURL: NSURL, newURL: NSURL): void;

	presentedSubitemAtURLDidResolveConflictVersion?(url: NSURL, version: NSFileVersion): void;

	presentedSubitemDidAppearAtURL?(url: NSURL): void;

	presentedSubitemDidChangeAtURL?(url: NSURL): void;

	relinquishPresentedItemToReader?(reader: (p1: () => void) => void): void;

	relinquishPresentedItemToWriter?(writer: (p1: () => void) => void): void;

	savePresentedItemChangesWithCompletionHandler?(completionHandler: (p1: NSError) => void): void;
}
declare var NSFilePresenter: {

	prototype: NSFilePresenter;
};

declare var NSFileProtectionComplete: string;

declare var NSFileProtectionCompleteUnlessOpen: string;

declare var NSFileProtectionCompleteUntilFirstUserAuthentication: string;

declare var NSFileProtectionKey: string;

declare var NSFileProtectionNone: string;

declare var NSFileReferenceCount: string;

declare class NSFileSecurity extends NSObject implements NSCoding, NSCopying {

	static alloc(): NSFileSecurity; // inherited from NSObject

	static new(): NSFileSecurity; // inherited from NSObject

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NSFileSecurity; // inherited from NSObjectProtocol
}

declare var NSFileSize: string;

declare var NSFileSystemFileNumber: string;

declare var NSFileSystemFreeNodes: string;

declare var NSFileSystemFreeSize: string;

declare var NSFileSystemNodes: string;

declare var NSFileSystemNumber: string;

declare var NSFileSystemSize: string;

declare var NSFileType: string;

declare var NSFileTypeBlockSpecial: string;

declare var NSFileTypeCharacterSpecial: string;

declare var NSFileTypeDirectory: string;

declare var NSFileTypeRegular: string;

declare var NSFileTypeSocket: string;

declare var NSFileTypeSymbolicLink: string;

declare var NSFileTypeUnknown: string;

declare class NSFileVersion extends NSObject {

	static alloc(): NSFileVersion; // inherited from NSObject

	static currentVersionOfItemAtURL(url: NSURL): NSFileVersion;

	static getNonlocalVersionsOfItemAtURLCompletionHandler(url: NSURL, completionHandler: (p1: NSArray<NSFileVersion>, p2: NSError) => void): void;

	static new(): NSFileVersion; // inherited from NSObject

	static otherVersionsOfItemAtURL(url: NSURL): NSArray<NSFileVersion>;

	static removeOtherVersionsOfItemAtURLError(url: NSURL): boolean;

	static unresolvedConflictVersionsOfItemAtURL(url: NSURL): NSArray<NSFileVersion>;

	static versionOfItemAtURLForPersistentIdentifier(url: NSURL, persistentIdentifier: any): NSFileVersion;

	/* readonly */ URL: NSURL;

	/* readonly */ conflict: boolean;

	/* readonly */ hasLocalContents: boolean;

	/* readonly */ hasThumbnail: boolean;

	/* readonly */ localizedName: string;

	/* readonly */ localizedNameOfSavingComputer: string;

	/* readonly */ modificationDate: Date;

	/* readonly */ persistentIdentifier: NSCoding;

	resolved: boolean;

	constructor(); // inherited from NSObject

	removeAndReturnError(): boolean;

	replaceItemAtURLOptionsError(url: NSURL, options: NSFileVersionReplacingOptions): NSURL;

	self(): NSFileVersion; // inherited from NSObjectProtocol
}

declare const enum NSFileVersionAddingOptions {

	ByMoving = 1
}

declare const enum NSFileVersionReplacingOptions {

	ByMoving = 1
}

declare class NSFileWrapper extends NSObject implements NSCoding {

	static alloc(): NSFileWrapper; // inherited from NSObject

	static new(): NSFileWrapper; // inherited from NSObject

	/* readonly */ directory: boolean;

	fileAttributes: NSDictionary<string, any>;

	/* readonly */ fileWrappers: NSDictionary<string, NSFileWrapper>;

	filename: string;

	preferredFilename: string;

	/* readonly */ regularFile: boolean;

	/* readonly */ regularFileContents: NSData;

	/* readonly */ serializedRepresentation: NSData;

	/* readonly */ symbolicLink: boolean;

	/* readonly */ symbolicLinkDestinationURL: NSURL;

	constructor(); // inherited from NSObject

	constructor(o: { directoryWithFileWrappers: NSDictionary<string, NSFileWrapper>; });

	constructor(o: { regularFileWithContents: NSData; });

	constructor(o: { symbolicLinkWithDestinationURL: NSURL; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { serializedRepresentation: NSData; });

	constructor(o: { URL: NSURL; options: NSFileWrapperReadingOptions; });

	addFileWrapper(child: NSFileWrapper): string;

	addRegularFileWithContentsPreferredFilename(data: NSData, fileName: string): string;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	keyForFileWrapper(child: NSFileWrapper): string;

	matchesContentsOfURL(url: NSURL): boolean;

	readFromURLOptionsError(url: NSURL, options: NSFileWrapperReadingOptions): boolean;

	removeFileWrapper(child: NSFileWrapper): void;

	self(): NSFileWrapper; // inherited from NSObjectProtocol

	writeToURLOptionsOriginalContentsURLError(url: NSURL, options: NSFileWrapperWritingOptions, originalContentsURL: NSURL): boolean;
}

declare const enum NSFileWrapperReadingOptions {

	Immediate = 1,

	WithoutMapping = 2
}

declare const enum NSFileWrapperWritingOptions {

	Atomic = 1,

	WithNameUpdating = 2
}

declare class NSFormatter extends NSObject implements NSCoding, NSCopying {

	static alloc(): NSFormatter; // inherited from NSObject

	static new(): NSFormatter; // inherited from NSObject

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	attributedStringForObjectValueWithDefaultAttributes(obj: any, attrs: NSDictionary<string, any>): NSAttributedString;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	editingStringForObjectValue(obj: any): string;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	getObjectValueForStringErrorDescription(obj: interop.Reference<any>, string: string, error: interop.Reference<string>): boolean;

	isPartialStringValidNewEditingStringErrorDescription(partialString: string, newString: interop.Reference<string>, error: interop.Reference<string>): boolean;

	isPartialStringValidProposedSelectedRangeOriginalStringOriginalSelectedRangeErrorDescription(partialStringPtr: interop.Reference<string>, proposedSelRangePtr: interop.Reference<NSRange>, origString: string, origSelRange: NSRange, error: interop.Reference<string>): boolean;

	self(): NSFormatter; // inherited from NSObjectProtocol

	stringForObjectValue(obj: any): string;
}

declare const enum NSFormattingContext {

	Unknown = 0,

	Dynamic = 1,

	Standalone = 2,

	ListItem = 3,

	BeginningOfSentence = 4,

	MiddleOfSentence = 5
}

declare const enum NSFormattingUnitStyle {

	Short = 1,

	Medium = 2,

	Long = 3
}

declare var NSFoundationVersionNumber: number;

declare function NSFullUserName(): string;

declare var NSGenericException: string;

declare function NSGetSizeAndAlignment(typePtr: string, sizep: interop.Reference<number>, alignp: interop.Reference<number>): string;

declare function NSGetUncaughtExceptionHandler(): interop.Reference<interop.FunctionReference<(p1: NSException) => void>>;

declare var NSGlobalDomain: string;

declare var NSGregorianCalendar: string;

declare class NSHTTPCookie extends NSObject {

	static alloc(): NSHTTPCookie; // inherited from NSObject

	static cookieWithProperties(properties: NSDictionary<string, any>): NSHTTPCookie;

	static cookiesWithResponseHeaderFieldsForURL(headerFields: NSDictionary<string, string>, URL: NSURL): NSArray<NSHTTPCookie>;

	static new(): NSHTTPCookie; // inherited from NSObject

	static requestHeaderFieldsWithCookies(cookies: NSArray<NSHTTPCookie>): NSDictionary<string, string>;

	/* readonly */ HTTPOnly: boolean;

	/* readonly */ comment: string;

	/* readonly */ commentURL: NSURL;

	/* readonly */ domain: string;

	/* readonly */ expiresDate: Date;

	/* readonly */ name: string;

	/* readonly */ path: string;

	/* readonly */ portList: NSArray<number>;

	/* readonly */ properties: NSDictionary<string, any>;

	/* readonly */ secure: boolean;

	/* readonly */ sessionOnly: boolean;

	/* readonly */ value: string;

	/* readonly */ version: number;

	constructor(); // inherited from NSObject

	constructor(o: { properties: NSDictionary<string, any>; });

	self(): NSHTTPCookie; // inherited from NSObjectProtocol
}

declare const enum NSHTTPCookieAcceptPolicy {

	Always = 0,

	Never = 1,

	OnlyFromMainDocumentDomain = 2
}

declare var NSHTTPCookieComment: string;

declare var NSHTTPCookieCommentURL: string;

declare var NSHTTPCookieDiscard: string;

declare var NSHTTPCookieDomain: string;

declare var NSHTTPCookieExpires: string;

declare var NSHTTPCookieManagerAcceptPolicyChangedNotification: string;

declare var NSHTTPCookieManagerCookiesChangedNotification: string;

declare var NSHTTPCookieMaximumAge: string;

declare var NSHTTPCookieName: string;

declare var NSHTTPCookieOriginURL: string;

declare var NSHTTPCookiePath: string;

declare var NSHTTPCookiePort: string;

declare var NSHTTPCookieSecure: string;

declare class NSHTTPCookieStorage extends NSObject {

	static alloc(): NSHTTPCookieStorage; // inherited from NSObject

	static new(): NSHTTPCookieStorage; // inherited from NSObject

	static sharedCookieStorageForGroupContainerIdentifier(identifier: string): NSHTTPCookieStorage;

	static sharedHTTPCookieStorage(): NSHTTPCookieStorage;

	cookieAcceptPolicy: NSHTTPCookieAcceptPolicy;

	/* readonly */ cookies: NSArray<NSHTTPCookie>;

	constructor(); // inherited from NSObject

	cookiesForURL(URL: NSURL): NSArray<NSHTTPCookie>;

	deleteCookie(cookie: NSHTTPCookie): void;

	getCookiesForTaskCompletionHandler(task: NSURLSessionTask, completionHandler: (p1: NSArray<NSHTTPCookie>) => void): void;

	removeCookiesSinceDate(date: Date): void;

	self(): NSHTTPCookieStorage; // inherited from NSObjectProtocol

	setCookie(cookie: NSHTTPCookie): void;

	setCookiesForURLMainDocumentURL(cookies: NSArray<NSHTTPCookie>, URL: NSURL, mainDocumentURL: NSURL): void;

	sortedCookiesUsingDescriptors(sortOrder: NSArray<NSSortDescriptor>): NSArray<NSHTTPCookie>;

	storeCookiesForTask(cookies: NSArray<NSHTTPCookie>, task: NSURLSessionTask): void;
}

declare var NSHTTPCookieValue: string;

declare var NSHTTPCookieVersion: string;

declare class NSHTTPURLResponse extends NSURLResponse {

	static localizedStringForStatusCode(statusCode: number): string;

	/* readonly */ allHeaderFields: NSDictionary<any, any>;

	/* readonly */ statusCode: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { URL: NSURL; MIMEType: string; expectedContentLength: number; textEncodingName: string; }); // inherited from NSURLResponse

	constructor(o: { URL: NSURL; statusCode: number; HTTPVersion: string; headerFields: NSDictionary<string, string>; });
}

declare class NSHashTable<ObjectType> extends NSObject implements NSCoding, NSCopying, NSFastEnumeration {

	static alloc<ObjectType>(): NSHashTable<ObjectType>; // inherited from NSObject

	static hashTableWithOptions<ObjectType>(options: NSPointerFunctionsOptions): NSHashTable<ObjectType>;

	static new<ObjectType>(): NSHashTable<ObjectType>; // inherited from NSObject

	static weakObjectsHashTable<ObjectType>(): NSHashTable<ObjectType>;

	/* readonly */ allObjects: NSArray<ObjectType>;

	/* readonly */ anyObject: ObjectType;

	/* readonly */ count: number;

	/* readonly */ pointerFunctions: NSPointerFunctions;

	/* readonly */ setRepresentation: NSSet<ObjectType>;
	[Symbol.iterator](): Iterator<any>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { options: NSPointerFunctionsOptions; capacity: number; });

	constructor(o: { pointerFunctions: NSPointerFunctions; capacity: number; });

	addObject(object: ObjectType): void;

	containsObject(anObject: ObjectType): boolean;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	intersectHashTable(other: NSHashTable<ObjectType>): void;

	intersectsHashTable(other: NSHashTable<ObjectType>): boolean;

	isEqualToHashTable(other: NSHashTable<ObjectType>): boolean;

	isSubsetOfHashTable(other: NSHashTable<ObjectType>): boolean;

	member(object: ObjectType): ObjectType;

	minusHashTable(other: NSHashTable<ObjectType>): void;

	objectEnumerator(): NSEnumerator<ObjectType>;

	removeAllObjects(): void;

	removeObject(object: ObjectType): void;

	self(): NSHashTable<ObjectType>; // inherited from NSObjectProtocol

	unionHashTable(other: NSHashTable<ObjectType>): void;
}

declare var NSHashTableCopyIn: NSPointerFunctionsOptions;

declare var NSHashTableObjectPointerPersonality: NSPointerFunctionsOptions;

declare var NSHashTableStrongMemory: NSPointerFunctionsOptions;

declare var NSHashTableWeakMemory: NSPointerFunctionsOptions;

declare var NSHebrewCalendar: string;

declare var NSHelpAnchorErrorKey: string;

declare function NSHomeDirectory(): string;

declare function NSHomeDirectoryForUser(userName: string): string;

declare var NSISO8601Calendar: string;

declare function NSIncrementExtraRefCount(object: any): void;

declare class NSIndexPath extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSIndexPath; // inherited from NSObject

	static indexPathForItemInSection(item: number, section: number): NSIndexPath;

	static indexPathForRowInSection(row: number, section: number): NSIndexPath;

	static indexPathWithIndex(index: number): NSIndexPath;

	static indexPathWithIndexesLength(indexes: interop.Reference<number>, length: number): NSIndexPath;

	static new(): NSIndexPath; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ item: number;

	/* readonly */ length: number;

	/* readonly */ row: number;

	/* readonly */ section: number;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { index: number; });

	constructor(o: { indexes: interop.Reference<number>; length: number; });

	compare(otherObject: NSIndexPath): NSComparisonResult;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	getIndexes(indexes: interop.Reference<number>): void;

	getIndexesRange(indexes: interop.Reference<number>, positionRange: NSRange): void;

	indexAtPosition(position: number): number;

	indexPathByAddingIndex(index: number): NSIndexPath;

	indexPathByRemovingLastIndex(): NSIndexPath;

	self(): NSIndexPath; // inherited from NSObjectProtocol
}

declare class NSIndexSet extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	static alloc(): NSIndexSet; // inherited from NSObject

	static indexSet(): NSIndexSet;

	static indexSetWithIndex(value: number): NSIndexSet;

	static indexSetWithIndexesInRange(range: NSRange): NSIndexSet;

	static new(): NSIndexSet; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ count: number;

	/* readonly */ firstIndex: number;

	/* readonly */ lastIndex: number;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { index: number; });

	constructor(o: { indexSet: NSIndexSet; });

	constructor(o: { indexesInRange: NSRange; });

	containsIndex(value: number): boolean;

	containsIndexes(indexSet: NSIndexSet): boolean;

	containsIndexesInRange(range: NSRange): boolean;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	countOfIndexesInRange(range: NSRange): number;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	enumerateIndexesInRangeOptionsUsingBlock(range: NSRange, opts: NSEnumerationOptions, block: (p1: number, p2: interop.Reference<boolean>) => void): void;

	enumerateIndexesUsingBlock(block: (p1: number, p2: interop.Reference<boolean>) => void): void;

	enumerateIndexesWithOptionsUsingBlock(opts: NSEnumerationOptions, block: (p1: number, p2: interop.Reference<boolean>) => void): void;

	enumerateRangesInRangeOptionsUsingBlock(range: NSRange, opts: NSEnumerationOptions, block: (p1: NSRange, p2: interop.Reference<boolean>) => void): void;

	enumerateRangesUsingBlock(block: (p1: NSRange, p2: interop.Reference<boolean>) => void): void;

	enumerateRangesWithOptionsUsingBlock(opts: NSEnumerationOptions, block: (p1: NSRange, p2: interop.Reference<boolean>) => void): void;

	getIndexesMaxCountInIndexRange(indexBuffer: interop.Reference<number>, bufferSize: number, range: interop.Reference<NSRange>): number;

	indexGreaterThanIndex(value: number): number;

	indexGreaterThanOrEqualToIndex(value: number): number;

	indexInRangeOptionsPassingTest(range: NSRange, opts: NSEnumerationOptions, predicate: (p1: number, p2: interop.Reference<boolean>) => boolean): number;

	indexLessThanIndex(value: number): number;

	indexLessThanOrEqualToIndex(value: number): number;

	indexPassingTest(predicate: (p1: number, p2: interop.Reference<boolean>) => boolean): number;

	indexWithOptionsPassingTest(opts: NSEnumerationOptions, predicate: (p1: number, p2: interop.Reference<boolean>) => boolean): number;

	indexesInRangeOptionsPassingTest(range: NSRange, opts: NSEnumerationOptions, predicate: (p1: number, p2: interop.Reference<boolean>) => boolean): NSIndexSet;

	indexesPassingTest(predicate: (p1: number, p2: interop.Reference<boolean>) => boolean): NSIndexSet;

	indexesWithOptionsPassingTest(opts: NSEnumerationOptions, predicate: (p1: number, p2: interop.Reference<boolean>) => boolean): NSIndexSet;

	intersectsIndexesInRange(range: NSRange): boolean;

	isEqualToIndexSet(indexSet: NSIndexSet): boolean;

	mutableCopyWithZone(zone: interop.Pointer): any; // inherited from NSMutableCopying

	self(): NSIndexSet; // inherited from NSObjectProtocol
}

declare var NSIndianCalendar: string;

declare class NSInputStream extends NSStream {

	static inputStreamWithData(data: NSData): NSInputStream;

	static inputStreamWithFileAtPath(path: string): NSInputStream;

	static inputStreamWithURL(url: NSURL): NSInputStream;

	/* readonly */ hasBytesAvailable: boolean;

	constructor(o: { data: NSData; });

	constructor(o: { fileAtPath: string; });

	constructor(o: { URL: NSURL; });

	getBufferLength(buffer: interop.Reference<string>, len: interop.Reference<number>): boolean;

	readMaxLength(buffer: string, len: number): number;
}

declare var NSInternalInconsistencyException: string;

declare function NSIntersectionRange(range1: NSRange, range2: NSRange): NSRange;

declare var NSInvalidArchiveOperationException: string;

declare var NSInvalidArgumentException: string;

declare var NSInvalidReceivePortException: string;

declare var NSInvalidSendPortException: string;

declare var NSInvalidUnarchiveOperationException: string;

declare class NSInvocation extends NSObject {

	static alloc(): NSInvocation; // inherited from NSObject

	static invocationWithMethodSignature(sig: NSMethodSignature): NSInvocation;

	static new(): NSInvocation; // inherited from NSObject

	/* readonly */ argumentsRetained: boolean;

	/* readonly */ methodSignature: NSMethodSignature;

	selector: string;

	target: any;

	constructor(); // inherited from NSObject

	getArgumentAtIndex(argumentLocation: interop.Pointer, idx: number): void;

	getReturnValue(retLoc: interop.Pointer): void;

	invoke(): void;

	invokeWithTarget(target: any): void;

	retainArguments(): void;

	self(): NSInvocation; // inherited from NSObjectProtocol

	setArgumentAtIndex(argumentLocation: interop.Pointer, idx: number): void;

	setReturnValue(retLoc: interop.Pointer): void;
}

declare class NSInvocationOperation extends NSOperation {

	/* readonly */ invocation: NSInvocation;

	/* readonly */ result: any;

	constructor(o: { invocation: NSInvocation; });

	constructor(o: { target: any; selector: string; object: any; });
}

declare var NSInvocationOperationCancelledException: string;

declare var NSInvocationOperationVoidResultException: string;

declare var NSIsNilTransformerName: string;

declare var NSIsNotNilTransformerName: string;

declare var NSIslamicCalendar: string;

declare var NSIslamicCivilCalendar: string;

declare class NSItemProvider extends NSObject implements NSCopying {

	static alloc(): NSItemProvider; // inherited from NSObject

	static new(): NSItemProvider; // inherited from NSObject

	previewImageHandler: (p1: (p1: NSSecureCoding, p2: NSError) => void, p2: typeof NSObject, p3: NSDictionary<any, any>) => void;

	/* readonly */ registeredTypeIdentifiers: NSArray<any>;

	constructor(); // inherited from NSObject

	constructor(o: { contentsOfURL: NSURL; });

	constructor(o: { item: NSSecureCoding; typeIdentifier: string; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	hasItemConformingToTypeIdentifier(typeIdentifier: string): boolean;

	loadItemForTypeIdentifierOptionsCompletionHandler(typeIdentifier: string, options: NSDictionary<any, any>, completionHandler: (p1: NSSecureCoding, p2: NSError) => void): void;

	loadPreviewImageWithOptionsCompletionHandler(options: NSDictionary<any, any>, completionHandler: (p1: NSSecureCoding, p2: NSError) => void): void;

	registerItemForTypeIdentifierLoadHandler(typeIdentifier: string, loadHandler: (p1: (p1: NSSecureCoding, p2: NSError) => void, p2: typeof NSObject, p3: NSDictionary<any, any>) => void): void;

	self(): NSItemProvider; // inherited from NSObjectProtocol
}

declare const enum NSItemProviderErrorCode {

	UnknownError = -1,

	ItemUnavailableError = -1000,

	UnexpectedValueClassError = -1100,

	UnavailableCoercionError = -1200
}

declare var NSItemProviderErrorDomain: string;

declare var NSItemProviderPreferredImageSizeKey: string;

declare const enum NSJSONReadingOptions {

	MutableContainers = 1,

	MutableLeaves = 2,

	AllowFragments = 4
}

declare class NSJSONSerialization extends NSObject {

	static JSONObjectWithDataOptionsError(data: NSData, opt: NSJSONReadingOptions): any;

	static JSONObjectWithStreamOptionsError(stream: NSInputStream, opt: NSJSONReadingOptions): any;

	static alloc(): NSJSONSerialization; // inherited from NSObject

	static dataWithJSONObjectOptionsError(obj: any, opt: NSJSONWritingOptions): NSData;

	static dictionaryWithResponseResponseDataError(response: NSURLResponse, data: NSData): NSDictionary<any, any>;

	static errorFromResponseResponseObject(response: NSURLResponse, responseObject: NSDictionary<any, any>): NSError;

	static errorWithStatusCodeResponseDictionary(statusCode: number, responseDictionary: NSDictionary<any, any>): NSError;

	static isValidJSONObject(obj: any): boolean;

	static new(): NSJSONSerialization; // inherited from NSObject

	static writeJSONObjectToStreamOptionsError(obj: any, stream: NSOutputStream, opt: NSJSONWritingOptions): number;

	constructor(); // inherited from NSObject

	self(): NSJSONSerialization; // inherited from NSObjectProtocol
}

declare const enum NSJSONWritingOptions {

	PrettyPrinted = 1
}

declare var NSJapaneseCalendar: string;

declare const enum NSKeyValueChange {

	Setting = 1,

	Insertion = 2,

	Removal = 3,

	Replacement = 4
}

declare var NSKeyValueChangeIndexesKey: string;

declare var NSKeyValueChangeKindKey: string;

declare var NSKeyValueChangeNewKey: string;

declare var NSKeyValueChangeNotificationIsPriorKey: string;

declare var NSKeyValueChangeOldKey: string;

declare const enum NSKeyValueObservingOptions {

	New = 1,

	Old = 2,

	Initial = 4,

	Prior = 8
}

declare const enum NSKeyValueSetMutationKind {

	UnionSetMutation = 1,

	MinusSetMutation = 2,

	IntersectSetMutation = 3,

	SetSetMutation = 4
}

declare var NSKeyedArchiveRootObjectKey: string;

declare class NSKeyedArchiver extends NSCoder {

	static archiveRootObjectToFile(rootObject: any, path: string): boolean;

	static archivedDataWithRootObject(rootObject: any): NSData;

	static classNameForClass(cls: typeof NSObject): string;

	static setClassNameForClass(codedName: string, cls: typeof NSObject): void;

	delegate: NSKeyedArchiverDelegate;

	outputFormat: NSPropertyListFormat;

	requiresSecureCoding: boolean;

	constructor(o: { forWritingWithMutableData: NSMutableData; });

	classNameForClass(cls: typeof NSObject): string;

	finishEncoding(): void;

	setClassNameForClass(codedName: string, cls: typeof NSObject): void;
}

interface NSKeyedArchiverDelegate extends NSObjectProtocol {

	archiverDidEncodeObject?(archiver: NSKeyedArchiver, object: any): void;

	archiverDidFinish?(archiver: NSKeyedArchiver): void;

	archiverWillEncodeObject?(archiver: NSKeyedArchiver, object: any): any;

	archiverWillFinish?(archiver: NSKeyedArchiver): void;

	archiverWillReplaceObjectWithObject?(archiver: NSKeyedArchiver, object: any, newObject: any): void;
}
declare var NSKeyedArchiverDelegate: {

	prototype: NSKeyedArchiverDelegate;
};

declare var NSKeyedUnarchiveFromDataTransformerName: string;

declare class NSKeyedUnarchiver extends NSCoder {

	static classForClassName(codedName: string): typeof NSObject;

	static setClassForClassName(cls: typeof NSObject, codedName: string): void;

	static unarchiveObjectWithData(data: NSData): any;

	static unarchiveObjectWithFile(path: string): any;

	static unarchiveTopLevelObjectWithDataError(data: NSData): any;

	delegate: NSKeyedUnarchiverDelegate;

	requiresSecureCoding: boolean;

	constructor(o: { forReadingWithData: NSData; });

	classForClassName(codedName: string): typeof NSObject;

	finishDecoding(): void;

	setClassForClassName(cls: typeof NSObject, codedName: string): void;
}

interface NSKeyedUnarchiverDelegate extends NSObjectProtocol {

	unarchiverCannotDecodeObjectOfClassNameOriginalClasses?(unarchiver: NSKeyedUnarchiver, name: string, classNames: NSArray<string>): typeof NSObject;

	unarchiverDidDecodeObject?(unarchiver: NSKeyedUnarchiver, object: any): any;

	unarchiverDidFinish?(unarchiver: NSKeyedUnarchiver): void;

	unarchiverWillFinish?(unarchiver: NSKeyedUnarchiver): void;

	unarchiverWillReplaceObjectWithObject?(unarchiver: NSKeyedUnarchiver, object: any, newObject: any): void;
}
declare var NSKeyedUnarchiverDelegate: {

	prototype: NSKeyedUnarchiverDelegate;
};

declare class NSLengthFormatter extends NSFormatter {

	forPersonHeightUse: boolean;

	numberFormatter: NSNumberFormatter;

	unitStyle: NSFormattingUnitStyle;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	stringFromMeters(numberInMeters: number): string;

	stringFromValueUnit(value: number, unit: NSLengthFormatterUnit): string;

	unitStringFromMetersUsedUnit(numberInMeters: number, unitp: interop.Reference<NSLengthFormatterUnit>): string;

	unitStringFromValueUnit(value: number, unit: NSLengthFormatterUnit): string;
}

declare const enum NSLengthFormatterUnit {

	Millimeter = 8,

	Centimeter = 9,

	Meter = 11,

	Kilometer = 14,

	Inch = 1281,

	Foot = 1282,

	Yard = 1283,

	Mile = 1284
}

declare var NSLinguisticTagAdjective: string;

declare var NSLinguisticTagAdverb: string;

declare var NSLinguisticTagClassifier: string;

declare var NSLinguisticTagCloseParenthesis: string;

declare var NSLinguisticTagCloseQuote: string;

declare var NSLinguisticTagConjunction: string;

declare var NSLinguisticTagDash: string;

declare var NSLinguisticTagDeterminer: string;

declare var NSLinguisticTagIdiom: string;

declare var NSLinguisticTagInterjection: string;

declare var NSLinguisticTagNoun: string;

declare var NSLinguisticTagNumber: string;

declare var NSLinguisticTagOpenParenthesis: string;

declare var NSLinguisticTagOpenQuote: string;

declare var NSLinguisticTagOrganizationName: string;

declare var NSLinguisticTagOther: string;

declare var NSLinguisticTagOtherPunctuation: string;

declare var NSLinguisticTagOtherWhitespace: string;

declare var NSLinguisticTagOtherWord: string;

declare var NSLinguisticTagParagraphBreak: string;

declare var NSLinguisticTagParticle: string;

declare var NSLinguisticTagPersonalName: string;

declare var NSLinguisticTagPlaceName: string;

declare var NSLinguisticTagPreposition: string;

declare var NSLinguisticTagPronoun: string;

declare var NSLinguisticTagPunctuation: string;

declare var NSLinguisticTagSchemeLanguage: string;

declare var NSLinguisticTagSchemeLemma: string;

declare var NSLinguisticTagSchemeLexicalClass: string;

declare var NSLinguisticTagSchemeNameType: string;

declare var NSLinguisticTagSchemeNameTypeOrLexicalClass: string;

declare var NSLinguisticTagSchemeScript: string;

declare var NSLinguisticTagSchemeTokenType: string;

declare var NSLinguisticTagSentenceTerminator: string;

declare var NSLinguisticTagVerb: string;

declare var NSLinguisticTagWhitespace: string;

declare var NSLinguisticTagWord: string;

declare var NSLinguisticTagWordJoiner: string;

declare class NSLinguisticTagger extends NSObject {

	static alloc(): NSLinguisticTagger; // inherited from NSObject

	static availableTagSchemesForLanguage(language: string): NSArray<string>;

	static new(): NSLinguisticTagger; // inherited from NSObject

	string: string;

	/* readonly */ tagSchemes: NSArray<string>;

	constructor(); // inherited from NSObject

	constructor(o: { tagSchemes: NSArray<string>; options: number; });

	enumerateTagsInRangeSchemeOptionsUsingBlock(range: NSRange, tagScheme: string, opts: NSLinguisticTaggerOptions, block: (p1: string, p2: NSRange, p3: NSRange, p4: interop.Reference<boolean>) => void): void;

	orthographyAtIndexEffectiveRange(charIndex: number, effectiveRange: interop.Reference<NSRange>): NSOrthography;

	possibleTagsAtIndexSchemeTokenRangeSentenceRangeScores(charIndex: number, tagScheme: string, tokenRange: interop.Reference<NSRange>, sentenceRange: interop.Reference<NSRange>, scores: interop.Reference<NSArray<NSValue>>): NSArray<string>;

	self(): NSLinguisticTagger; // inherited from NSObjectProtocol

	sentenceRangeForRange(range: NSRange): NSRange;

	setOrthographyRange(orthography: NSOrthography, range: NSRange): void;

	stringEditedInRangeChangeInLength(newRange: NSRange, delta: number): void;

	tagAtIndexSchemeTokenRangeSentenceRange(charIndex: number, tagScheme: string, tokenRange: interop.Reference<NSRange>, sentenceRange: interop.Reference<NSRange>): string;

	tagsInRangeSchemeOptionsTokenRanges(range: NSRange, tagScheme: string, opts: NSLinguisticTaggerOptions, tokenRanges: interop.Reference<NSArray<NSValue>>): NSArray<string>;
}

declare const enum NSLinguisticTaggerOptions {

	OmitWords = 1,

	OmitPunctuation = 2,

	OmitWhitespace = 4,

	OmitOther = 8,

	JoinNames = 16
}

declare var NSLoadedClasses: string;

declare class NSLocale extends NSObject implements NSCopying, NSSecureCoding {

	static ISOCountryCodes(): NSArray<string>;

	static ISOCurrencyCodes(): NSArray<string>;

	static ISOLanguageCodes(): NSArray<string>;

	static alloc(): NSLocale; // inherited from NSObject

	static autoupdatingCurrentLocale(): NSLocale;

	static availableLocaleIdentifiers(): NSArray<string>;

	static canonicalLanguageIdentifierFromString(string: string): string;

	static canonicalLocaleIdentifierFromString(string: string): string;

	static characterDirectionForLanguage(isoLangCode: string): NSLocaleLanguageDirection;

	static commonISOCurrencyCodes(): NSArray<string>;

	static componentsFromLocaleIdentifier(string: string): NSDictionary<string, string>;

	static currentLocale(): NSLocale;

	static lineDirectionForLanguage(isoLangCode: string): NSLocaleLanguageDirection;

	static localeIdentifierFromComponents(dict: NSDictionary<string, string>): string;

	static localeIdentifierFromWindowsLocaleCode(lcid: number): string;

	static localeWithLocaleIdentifier(ident: string): NSLocale;

	static new(): NSLocale; // inherited from NSObject

	static preferredLanguages(): NSArray<string>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static systemLocale(): NSLocale;

	static windowsLocaleCodeFromLocaleIdentifier(localeIdentifier: string): number;

	/* readonly */ localeIdentifier: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { localeIdentifier: string; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	displayNameForKeyValue(key: any, value: any): string;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	objectForKey(key: any): any;

	self(): NSLocale; // inherited from NSObjectProtocol
}

declare var NSLocaleAlternateQuotationBeginDelimiterKey: string;

declare var NSLocaleAlternateQuotationEndDelimiterKey: string;

declare var NSLocaleCalendar: string;

declare var NSLocaleCollationIdentifier: string;

declare var NSLocaleCollatorIdentifier: string;

declare var NSLocaleCountryCode: string;

declare var NSLocaleCurrencyCode: string;

declare var NSLocaleCurrencySymbol: string;

declare var NSLocaleDecimalSeparator: string;

declare var NSLocaleExemplarCharacterSet: string;

declare var NSLocaleGroupingSeparator: string;

declare var NSLocaleIdentifier: string;

declare var NSLocaleLanguageCode: string;

declare const enum NSLocaleLanguageDirection {

	Unknown = 0,

	LeftToRight = 1,

	RightToLeft = 2,

	TopToBottom = 3,

	BottomToTop = 4
}

declare var NSLocaleMeasurementSystem: string;

declare var NSLocaleQuotationBeginDelimiterKey: string;

declare var NSLocaleQuotationEndDelimiterKey: string;

declare var NSLocaleScriptCode: string;

declare var NSLocaleUsesMetricSystem: string;

declare var NSLocaleVariantCode: string;

declare var NSLocalizedDescriptionKey: string;

declare var NSLocalizedFailureReasonErrorKey: string;

declare var NSLocalizedRecoveryOptionsErrorKey: string;

declare var NSLocalizedRecoverySuggestionErrorKey: string;

declare class NSLock extends NSObject implements NSLocking {

	static alloc(): NSLock; // inherited from NSObject

	static new(): NSLock; // inherited from NSObject

	name: string;

	constructor(); // inherited from NSObject

	lock(): void; // inherited from NSLocking

	lockBeforeDate(limit: Date): boolean;

	self(): NSLock; // inherited from NSObjectProtocol

	tryLock(): boolean;

	unlock(): void; // inherited from NSLocking
}

interface NSLocking {

	lock(): void;

	unlock(): void;
}
declare var NSLocking: {

	prototype: NSLocking;
};

declare function NSLogPageSize(): number;

declare var NSMachErrorDomain: string;

declare class NSMachPort extends NSPort {

	static portWithMachPort(machPort: number): NSPort;

	static portWithMachPortOptions(machPort: number, f: NSMachPortOptions): NSPort;

	/* readonly */ machPort: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { machPort: number; });

	constructor(o: { machPort: number; options: NSMachPortOptions; });

	delegate(): NSMachPortDelegate;

	setDelegate(anObject: NSMachPortDelegate): void;
}

interface NSMachPortDelegate extends NSPortDelegate {

	handleMachMessage?(msg: interop.Pointer): void;
}
declare var NSMachPortDelegate: {

	prototype: NSMachPortDelegate;
};

declare const enum NSMachPortOptions {

	DeallocateNone = 0,

	DeallocateSendRight = 1,

	DeallocateReceiveRight = 2
}

declare function NSMakeCollectable(cf: any): any;

declare var NSMallocException: string;

declare class NSMapTable<KeyType, ObjectType> extends NSObject implements NSCoding, NSCopying, NSFastEnumeration {

	static alloc<KeyType, ObjectType>(): NSMapTable<KeyType, ObjectType>; // inherited from NSObject

	static mapTableWithKeyOptionsValueOptions<KeyType, ObjectType>(keyOptions: NSPointerFunctionsOptions, valueOptions: NSPointerFunctionsOptions): NSMapTable<KeyType, ObjectType>;

	static new<KeyType, ObjectType>(): NSMapTable<KeyType, ObjectType>; // inherited from NSObject

	static strongToStrongObjectsMapTable<KeyType, ObjectType>(): NSMapTable<KeyType, ObjectType>;

	static strongToWeakObjectsMapTable<KeyType, ObjectType>(): NSMapTable<KeyType, ObjectType>;

	static weakToStrongObjectsMapTable<KeyType, ObjectType>(): NSMapTable<KeyType, ObjectType>;

	static weakToWeakObjectsMapTable<KeyType, ObjectType>(): NSMapTable<KeyType, ObjectType>;

	/* readonly */ count: number;

	/* readonly */ keyPointerFunctions: NSPointerFunctions;

	/* readonly */ valuePointerFunctions: NSPointerFunctions;
	[Symbol.iterator](): Iterator<any>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { keyOptions: NSPointerFunctionsOptions; valueOptions: NSPointerFunctionsOptions; capacity: number; });

	constructor(o: { keyPointerFunctions: NSPointerFunctions; valuePointerFunctions: NSPointerFunctions; capacity: number; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	dictionaryRepresentation(): NSDictionary<KeyType, ObjectType>;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	keyEnumerator(): NSEnumerator<KeyType>;

	objectEnumerator(): NSEnumerator<ObjectType>;

	objectForKey(aKey: KeyType): ObjectType;

	removeAllObjects(): void;

	removeObjectForKey(aKey: KeyType): void;

	self(): NSMapTable<KeyType, ObjectType>; // inherited from NSObjectProtocol

	setObjectForKey(anObject: ObjectType, aKey: KeyType): void;
}

declare var NSMapTableCopyIn: NSPointerFunctionsOptions;

declare var NSMapTableObjectPointerPersonality: NSPointerFunctionsOptions;

declare var NSMapTableStrongMemory: NSPointerFunctionsOptions;

declare var NSMapTableWeakMemory: NSPointerFunctionsOptions;

declare class NSMassFormatter extends NSFormatter {

	forPersonMassUse: boolean;

	numberFormatter: NSNumberFormatter;

	unitStyle: NSFormattingUnitStyle;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	stringFromKilograms(numberInKilograms: number): string;

	stringFromValueUnit(value: number, unit: NSMassFormatterUnit): string;

	unitStringFromKilogramsUsedUnit(numberInKilograms: number, unitp: interop.Reference<NSMassFormatterUnit>): string;

	unitStringFromValueUnit(value: number, unit: NSMassFormatterUnit): string;
}

declare const enum NSMassFormatterUnit {

	Gram = 11,

	Kilogram = 14,

	Ounce = 1537,

	Pound = 1538,

	Stone = 1539
}

declare const enum NSMatchingFlags {

	Progress = 1,

	Completed = 2,

	HitEnd = 4,

	RequiredEnd = 8,

	InternalError = 16
}

declare const enum NSMatchingOptions {

	ReportProgress = 1,

	ReportCompletion = 2,

	Anchored = 4,

	WithTransparentBounds = 8,

	WithoutAnchoringBounds = 16
}

declare var NSMaximumKeyValueOperator: string;

declare class NSMessagePort extends NSPort {

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare class NSMetadataItem extends NSObject {

	static alloc(): NSMetadataItem; // inherited from NSObject

	static new(): NSMetadataItem; // inherited from NSObject

	/* readonly */ attributes: NSArray<string>;

	constructor(); // inherited from NSObject

	self(): NSMetadataItem; // inherited from NSObjectProtocol

	valueForAttribute(key: string): any;

	valuesForAttributes(keys: NSArray<string>): NSDictionary<string, any>;
}

declare var NSMetadataItemContentTypeKey: string;

declare var NSMetadataItemContentTypeTreeKey: string;

declare var NSMetadataItemDisplayNameKey: string;

declare var NSMetadataItemFSContentChangeDateKey: string;

declare var NSMetadataItemFSCreationDateKey: string;

declare var NSMetadataItemFSNameKey: string;

declare var NSMetadataItemFSSizeKey: string;

declare var NSMetadataItemIsUbiquitousKey: string;

declare var NSMetadataItemPathKey: string;

declare var NSMetadataItemURLKey: string;

declare class NSMetadataQuery extends NSObject {

	static alloc(): NSMetadataQuery; // inherited from NSObject

	static new(): NSMetadataQuery; // inherited from NSObject

	delegate: NSMetadataQueryDelegate;

	/* readonly */ gathering: boolean;

	/* readonly */ groupedResults: NSArray<NSMetadataQueryResultGroup>;

	groupingAttributes: NSArray<string>;

	notificationBatchingInterval: number;

	operationQueue: NSOperationQueue;

	predicate: NSPredicate;

	/* readonly */ resultCount: number;

	/* readonly */ results: NSArray<any>;

	searchItems: NSArray<any>;

	searchScopes: NSArray<any>;

	sortDescriptors: NSArray<NSSortDescriptor>;

	/* readonly */ started: boolean;

	/* readonly */ stopped: boolean;

	valueListAttributes: NSArray<string>;

	/* readonly */ valueLists: NSDictionary<string, NSArray<NSMetadataQueryAttributeValueTuple>>;

	constructor(); // inherited from NSObject

	disableUpdates(): void;

	enableUpdates(): void;

	enumerateResultsUsingBlock(block: (p1: any, p2: number, p3: interop.Reference<boolean>) => void): void;

	enumerateResultsWithOptionsUsingBlock(opts: NSEnumerationOptions, block: (p1: any, p2: number, p3: interop.Reference<boolean>) => void): void;

	indexOfResult(result: any): number;

	resultAtIndex(idx: number): any;

	self(): NSMetadataQuery; // inherited from NSObjectProtocol

	startQuery(): boolean;

	stopQuery(): void;

	valueOfAttributeForResultAtIndex(attrName: string, idx: number): any;
}

declare var NSMetadataQueryAccessibleUbiquitousExternalDocumentsScope: string;

declare class NSMetadataQueryAttributeValueTuple extends NSObject {

	static alloc(): NSMetadataQueryAttributeValueTuple; // inherited from NSObject

	static new(): NSMetadataQueryAttributeValueTuple; // inherited from NSObject

	/* readonly */ attribute: string;

	/* readonly */ count: number;

	/* readonly */ value: any;

	constructor(); // inherited from NSObject

	self(): NSMetadataQueryAttributeValueTuple; // inherited from NSObjectProtocol
}

interface NSMetadataQueryDelegate extends NSObjectProtocol {

	metadataQueryReplacementObjectForResultObject?(query: NSMetadataQuery, result: NSMetadataItem): any;

	metadataQueryReplacementValueForAttributeValue?(query: NSMetadataQuery, attrName: string, attrValue: any): any;
}
declare var NSMetadataQueryDelegate: {

	prototype: NSMetadataQueryDelegate;
};

declare var NSMetadataQueryDidFinishGatheringNotification: string;

declare var NSMetadataQueryDidStartGatheringNotification: string;

declare var NSMetadataQueryDidUpdateNotification: string;

declare var NSMetadataQueryGatheringProgressNotification: string;

declare var NSMetadataQueryResultContentRelevanceAttribute: string;

declare class NSMetadataQueryResultGroup extends NSObject {

	static alloc(): NSMetadataQueryResultGroup; // inherited from NSObject

	static new(): NSMetadataQueryResultGroup; // inherited from NSObject

	/* readonly */ attribute: string;

	/* readonly */ resultCount: number;

	/* readonly */ results: NSArray<any>;

	/* readonly */ subgroups: NSArray<NSMetadataQueryResultGroup>;

	/* readonly */ value: any;

	constructor(); // inherited from NSObject

	resultAtIndex(idx: number): any;

	self(): NSMetadataQueryResultGroup; // inherited from NSObjectProtocol
}

declare var NSMetadataQueryUbiquitousDataScope: string;

declare var NSMetadataQueryUbiquitousDocumentsScope: string;

declare var NSMetadataQueryUpdateAddedItemsKey: string;

declare var NSMetadataQueryUpdateChangedItemsKey: string;

declare var NSMetadataQueryUpdateRemovedItemsKey: string;

declare var NSMetadataUbiquitousItemContainerDisplayNameKey: string;

declare var NSMetadataUbiquitousItemDownloadRequestedKey: string;

declare var NSMetadataUbiquitousItemDownloadingErrorKey: string;

declare var NSMetadataUbiquitousItemDownloadingStatusCurrent: string;

declare var NSMetadataUbiquitousItemDownloadingStatusDownloaded: string;

declare var NSMetadataUbiquitousItemDownloadingStatusKey: string;

declare var NSMetadataUbiquitousItemDownloadingStatusNotDownloaded: string;

declare var NSMetadataUbiquitousItemHasUnresolvedConflictsKey: string;

declare var NSMetadataUbiquitousItemIsDownloadedKey: string;

declare var NSMetadataUbiquitousItemIsDownloadingKey: string;

declare var NSMetadataUbiquitousItemIsExternalDocumentKey: string;

declare var NSMetadataUbiquitousItemIsUploadedKey: string;

declare var NSMetadataUbiquitousItemIsUploadingKey: string;

declare var NSMetadataUbiquitousItemPercentDownloadedKey: string;

declare var NSMetadataUbiquitousItemPercentUploadedKey: string;

declare var NSMetadataUbiquitousItemURLInLocalContainerKey: string;

declare var NSMetadataUbiquitousItemUploadingErrorKey: string;

declare class NSMethodSignature extends NSObject {

	static alloc(): NSMethodSignature; // inherited from NSObject

	static new(): NSMethodSignature; // inherited from NSObject

	static signatureWithObjCTypes(types: string): NSMethodSignature;

	/* readonly */ frameLength: number;

	/* readonly */ methodReturnLength: number;

	/* readonly */ methodReturnType: string;

	/* readonly */ numberOfArguments: number;

	constructor(); // inherited from NSObject

	getArgumentTypeAtIndex(idx: number): string;

	isOneway(): boolean;

	self(): NSMethodSignature; // inherited from NSObjectProtocol
}

declare var NSMinimumKeyValueOperator: string;

declare class NSMutableArray<ObjectType> extends NSArray<ObjectType> {

	static array<ObjectType>(): NSMutableArray<ObjectType>; // inherited from NSArray

	static arrayWithArray<ObjectType>(array: NSArray<ObjectType>): NSMutableArray<ObjectType>; // inherited from NSArray

	static arrayWithCapacity<ObjectType>(numItems: number): NSMutableArray<ObjectType>;

	static arrayWithContentsOfFile<ObjectType>(path: string): NSMutableArray<ObjectType>;

	static arrayWithContentsOfURL<ObjectType>(url: NSURL): NSMutableArray<ObjectType>;

	static arrayWithObject<ObjectType>(anObject: ObjectType): NSMutableArray<ObjectType>; // inherited from NSArray

	static arrayWithObjects<ObjectType>(firstObj: ObjectType): NSMutableArray<ObjectType>; // inherited from NSArray

	static arrayWithObjectsCount<ObjectType>(objects: interop.Reference<ObjectType>, cnt: number): NSMutableArray<ObjectType>; // inherited from NSArray
	[index: number]: ObjectType;
	[Symbol.iterator](): Iterator<any>;

	constructor(o: { array: NSArray<ObjectType>; }); // inherited from NSArray

	constructor(o: { array: NSArray<ObjectType>; copyItems: boolean; }); // inherited from NSArray

	constructor(o: { capacity: number; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { contentsOfFile: string; }); // inherited from NSArray

	constructor(o: { contentsOfURL: NSURL; }); // inherited from NSArray

	constructor(o: { objects: ObjectType; }); // inherited from NSArray

	constructor(o: { objects: interop.Reference<ObjectType>; count: number; }); // inherited from NSArray

	addObject(anObject: ObjectType): void;

	addObjectsFromArray(otherArray: NSArray<ObjectType>): void;

	exchangeObjectAtIndexWithObjectAtIndex(idx1: number, idx2: number): void;

	filterUsingPredicate(predicate: NSPredicate): void;

	insertObjectAtIndex(anObject: ObjectType, index: number): void;

	insertObjectsAtIndexes(objects: NSArray<ObjectType>, indexes: NSIndexSet): void;

	removeAllObjects(): void;

	removeLastObject(): void;

	removeObject(anObject: ObjectType): void;

	removeObjectAtIndex(index: number): void;

	removeObjectIdenticalTo(anObject: ObjectType): void;

	removeObjectIdenticalToInRange(anObject: ObjectType, range: NSRange): void;

	removeObjectInRange(anObject: ObjectType, range: NSRange): void;

	removeObjectsAtIndexes(indexes: NSIndexSet): void;

	removeObjectsFromIndicesNumIndices(indices: interop.Reference<number>, cnt: number): void;

	removeObjectsInArray(otherArray: NSArray<ObjectType>): void;

	removeObjectsInRange(range: NSRange): void;

	replaceObjectAtIndexWithObject(index: number, anObject: ObjectType): void;

	replaceObjectsAtIndexesWithObjects(indexes: NSIndexSet, objects: NSArray<ObjectType>): void;

	replaceObjectsInRangeWithObjectsFromArray(range: NSRange, otherArray: NSArray<ObjectType>): void;

	replaceObjectsInRangeWithObjectsFromArrayRange(range: NSRange, otherArray: NSArray<ObjectType>, otherRange: NSRange): void;

	self(): NSMutableArray<ObjectType>; // inherited from NSObjectProtocol

	setArray(otherArray: NSArray<ObjectType>): void;

	setObjectAtIndexedSubscript(obj: ObjectType, idx: number): void;

	sortUsingComparator(cmptr: (p1: any, p2: any) => NSComparisonResult): void;

	sortUsingDescriptors(sortDescriptors: NSArray<NSSortDescriptor>): void;

	sortUsingFunctionContext(compare: interop.FunctionReference<(p1: ObjectType, p2: ObjectType, p3: interop.Pointer) => number>, context: interop.Pointer): void;

	sortUsingSelector(comparator: string): void;

	sortWithOptionsUsingComparator(opts: NSSortOptions, cmptr: (p1: any, p2: any) => NSComparisonResult): void;
}

declare class NSMutableAttributedString extends NSAttributedString {

	/* readonly */ mutableString: NSMutableString;

	constructor(o: { attributedString: NSAttributedString; }); // inherited from NSAttributedString

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { data: NSData; options: NSDictionary<string, any>; documentAttributes: interop.Reference<NSDictionary<string, any>>; }); // inherited from NSAttributedString

	constructor(o: { fileURL: NSURL; options: NSDictionary<any, any>; documentAttributes: interop.Reference<NSDictionary<any, any>>; }); // inherited from NSAttributedString

	constructor(o: { string: string; }); // inherited from NSAttributedString

	constructor(o: { string: string; attributes: NSDictionary<string, any>; }); // inherited from NSAttributedString

	constructor(o: { URL: NSURL; options: NSDictionary<string, any>; documentAttributes: interop.Reference<NSDictionary<string, any>>; }); // inherited from NSAttributedString

	addAttributeValueRange(name: string, value: any, range: NSRange): void;

	addAttributesRange(attrs: NSDictionary<string, any>, range: NSRange): void;

	appendAttributedString(attrString: NSAttributedString): void;

	beginEditing(): void;

	deleteCharactersInRange(range: NSRange): void;

	endEditing(): void;

	fixAttributesInRange(range: NSRange): void;

	insertAttributedStringAtIndex(attrString: NSAttributedString, loc: number): void;

	readFromDataOptionsDocumentAttributesError(data: NSData, opts: NSDictionary<string, any>, dict: interop.Reference<NSDictionary<string, any>>): boolean;

	readFromFileURLOptionsDocumentAttributesError(url: NSURL, opts: NSDictionary<any, any>, dict: interop.Reference<NSDictionary<any, any>>): boolean;

	readFromURLOptionsDocumentAttributesError(url: NSURL, opts: NSDictionary<string, any>, dict: interop.Reference<NSDictionary<string, any>>): boolean;

	removeAttributeRange(name: string, range: NSRange): void;

	replaceCharactersInRangeWithAttributedString(range: NSRange, attrString: NSAttributedString): void;

	replaceCharactersInRangeWithString(range: NSRange, str: string): void;

	setAttributedString(attrString: NSAttributedString): void;

	setAttributesRange(attrs: NSDictionary<string, any>, range: NSRange): void;
}

declare class NSMutableCharacterSet extends NSCharacterSet implements NSCopying, NSMutableCopying {

	static alphanumericCharacterSet(): NSMutableCharacterSet;

	static capitalizedLetterCharacterSet(): NSMutableCharacterSet;

	static characterSetWithBitmapRepresentation(data: NSData): NSMutableCharacterSet;

	static characterSetWithCharactersInString(aString: string): NSMutableCharacterSet;

	static characterSetWithContentsOfFile(fName: string): NSMutableCharacterSet;

	static characterSetWithRange(aRange: NSRange): NSMutableCharacterSet;

	static controlCharacterSet(): NSMutableCharacterSet;

	static decimalDigitCharacterSet(): NSMutableCharacterSet;

	static decomposableCharacterSet(): NSMutableCharacterSet;

	static illegalCharacterSet(): NSMutableCharacterSet;

	static letterCharacterSet(): NSMutableCharacterSet;

	static lowercaseLetterCharacterSet(): NSMutableCharacterSet;

	static newlineCharacterSet(): NSMutableCharacterSet;

	static nonBaseCharacterSet(): NSMutableCharacterSet;

	static punctuationCharacterSet(): NSMutableCharacterSet;

	static symbolCharacterSet(): NSMutableCharacterSet;

	static uppercaseLetterCharacterSet(): NSMutableCharacterSet;

	static whitespaceAndNewlineCharacterSet(): NSMutableCharacterSet;

	static whitespaceCharacterSet(): NSMutableCharacterSet;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	addCharactersInRange(aRange: NSRange): void;

	addCharactersInString(aString: string): void;

	formIntersectionWithCharacterSet(otherSet: NSCharacterSet): void;

	formUnionWithCharacterSet(otherSet: NSCharacterSet): void;

	invert(): void;

	removeCharactersInRange(aRange: NSRange): void;

	removeCharactersInString(aString: string): void;
}

interface NSMutableCopying {

	mutableCopyWithZone(zone: interop.Pointer): any;
}
declare var NSMutableCopying: {

	prototype: NSMutableCopying;
};

declare class NSMutableData extends NSData {

	static data(): NSMutableData; // inherited from NSData

	static dataWithBytesLength(bytes: interop.Pointer, length: number): NSMutableData; // inherited from NSData

	static dataWithBytesNoCopyLength(bytes: interop.Pointer, length: number): NSMutableData; // inherited from NSData

	static dataWithBytesNoCopyLengthFreeWhenDone(bytes: interop.Pointer, length: number, b: boolean): NSMutableData; // inherited from NSData

	static dataWithCapacity(aNumItems: number): NSMutableData;

	static dataWithContentsOfFile(path: string): NSMutableData; // inherited from NSData

	static dataWithContentsOfFileOptionsError(path: string, readOptionsMask: NSDataReadingOptions): NSMutableData; // inherited from NSData

	static dataWithContentsOfURL(url: NSURL): NSMutableData; // inherited from NSData

	static dataWithContentsOfURLOptionsError(url: NSURL, readOptionsMask: NSDataReadingOptions): NSMutableData; // inherited from NSData

	static dataWithData(data: NSData): NSMutableData; // inherited from NSData

	static dataWithLength(length: number): NSMutableData;

	length: number;

	/* readonly */ mutableBytes: interop.Pointer;

	constructor(o: { base64EncodedData: NSData; options: NSDataBase64DecodingOptions; }); // inherited from NSData

	constructor(o: { base64EncodedString: string; options: NSDataBase64DecodingOptions; }); // inherited from NSData

	constructor(o: { base64Encoding: string; }); // inherited from NSData

	constructor(o: { bytes: interop.Pointer; length: number; }); // inherited from NSData

	constructor(o: { bytesNoCopy: interop.Pointer; length: number; }); // inherited from NSData

	constructor(o: { bytesNoCopy: interop.Pointer; length: number; deallocator: (p1: interop.Pointer, p2: number) => void; }); // inherited from NSData

	constructor(o: { bytesNoCopy: interop.Pointer; length: number; freeWhenDone: boolean; }); // inherited from NSData

	constructor(o: { capacity: number; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { contentsOfFile: string; }); // inherited from NSData

	constructor(o: { contentsOfFile: string; options: NSDataReadingOptions; }); // inherited from NSData

	constructor(o: { contentsOfMappedFile: string; }); // inherited from NSData

	constructor(o: { contentsOfURL: NSURL; }); // inherited from NSData

	constructor(o: { contentsOfURL: NSURL; options: NSDataReadingOptions; }); // inherited from NSData

	constructor(o: { data: NSData; }); // inherited from NSData

	constructor(o: { length: number; });

	appendBytesLength(bytes: interop.Pointer, length: number): void;

	appendData(other: NSData): void;

	increaseLengthBy(extraLength: number): void;

	replaceBytesInRangeWithBytes(range: NSRange, bytes: interop.Pointer): void;

	replaceBytesInRangeWithBytesLength(range: NSRange, replacementBytes: interop.Pointer, replacementLength: number): void;

	resetBytesInRange(range: NSRange): void;

	self(): NSMutableData; // inherited from NSObjectProtocol

	setData(data: NSData): void;
}

declare class NSMutableDictionary<KeyType, ObjectType> extends NSDictionary<KeyType, ObjectType> {

	static dictionary<KeyType, ObjectType>(): NSMutableDictionary<KeyType, ObjectType>; // inherited from NSDictionary

	static dictionaryWithCapacity<KeyType, ObjectType>(numItems: number): NSMutableDictionary<KeyType, ObjectType>;

	static dictionaryWithContentsOfFile<KeyType, ObjectType>(path: string): NSMutableDictionary<KeyType, ObjectType>;

	static dictionaryWithContentsOfURL<KeyType, ObjectType>(url: NSURL): NSMutableDictionary<KeyType, ObjectType>;

	static dictionaryWithDictionary<KeyType, ObjectType>(dict: NSDictionary<KeyType, ObjectType>): NSMutableDictionary<KeyType, ObjectType>; // inherited from NSDictionary

	static dictionaryWithObjectForKey<KeyType, ObjectType>(object: ObjectType, key: NSCopying): NSMutableDictionary<KeyType, ObjectType>; // inherited from NSDictionary

	static dictionaryWithObjectsAndKeys<KeyType, ObjectType>(firstObject: any): NSMutableDictionary<KeyType, ObjectType>; // inherited from NSDictionary

	static dictionaryWithObjectsForKeys<KeyType, ObjectType>(objects: NSArray<ObjectType>, keys: NSArray<NSCopying>): NSMutableDictionary<KeyType, ObjectType>; // inherited from NSDictionary

	static dictionaryWithObjectsForKeysCount<KeyType, ObjectType>(objects: interop.Reference<ObjectType>, keys: interop.Reference<NSCopying>, cnt: number): NSMutableDictionary<KeyType, ObjectType>; // inherited from NSDictionary

	static dictionaryWithSharedKeySet<KeyType, ObjectType>(keyset: any): NSMutableDictionary<KeyType, ObjectType>;
	[Symbol.iterator](): Iterator<any>;

	constructor(o: { capacity: number; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { contentsOfFile: string; }); // inherited from NSDictionary

	constructor(o: { contentsOfURL: NSURL; }); // inherited from NSDictionary

	constructor(o: { dictionary: NSDictionary<KeyType, ObjectType>; }); // inherited from NSDictionary

	constructor(o: { dictionary: NSDictionary<KeyType, ObjectType>; copyItems: boolean; }); // inherited from NSDictionary

	constructor(o: { objectsAndKeys: any; }); // inherited from NSDictionary

	constructor(o: { objects: NSArray<ObjectType>; forKeys: NSArray<NSCopying>; }); // inherited from NSDictionary

	constructor(o: { objects: interop.Reference<ObjectType>; forKeys: interop.Reference<NSCopying>; count: number; }); // inherited from NSDictionary

	addEntriesFromDictionary(otherDictionary: NSDictionary<KeyType, ObjectType>): void;

	removeAllObjects(): void;

	removeObjectForKey(aKey: KeyType): void;

	removeObjectsForKeys(keyArray: NSArray<KeyType>): void;

	setDictionary(otherDictionary: NSDictionary<KeyType, ObjectType>): void;

	setObjectForKey(anObject: ObjectType, aKey: NSCopying): void;

	setObjectForKeyedSubscript(obj: ObjectType, key: NSCopying): void;

	setValueForKey(value: ObjectType, key: string): void;
}

declare class NSMutableIndexSet extends NSIndexSet {

	static indexSet(): NSMutableIndexSet; // inherited from NSIndexSet

	static indexSetWithIndex(value: number): NSMutableIndexSet; // inherited from NSIndexSet

	static indexSetWithIndexesInRange(range: NSRange): NSMutableIndexSet; // inherited from NSIndexSet

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { index: number; }); // inherited from NSIndexSet

	constructor(o: { indexSet: NSIndexSet; }); // inherited from NSIndexSet

	constructor(o: { indexesInRange: NSRange; }); // inherited from NSIndexSet

	addIndex(value: number): void;

	addIndexes(indexSet: NSIndexSet): void;

	addIndexesInRange(range: NSRange): void;

	removeAllIndexes(): void;

	removeIndex(value: number): void;

	removeIndexes(indexSet: NSIndexSet): void;

	removeIndexesInRange(range: NSRange): void;

	shiftIndexesStartingAtIndexBy(index: number, delta: number): void;
}

declare class NSMutableOrderedSet<ObjectType> extends NSOrderedSet<ObjectType> {

	static orderedSet<ObjectType>(): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithArray<ObjectType>(array: NSArray<ObjectType>): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithArrayRangeCopyItems<ObjectType>(array: NSArray<ObjectType>, range: NSRange, flag: boolean): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithCapacity<ObjectType>(numItems: number): NSMutableOrderedSet<ObjectType>;

	static orderedSetWithObject<ObjectType>(object: ObjectType): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithObjects<ObjectType>(firstObj: ObjectType): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithObjectsCount<ObjectType>(objects: interop.Reference<ObjectType>, cnt: number): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithOrderedSet<ObjectType>(set: NSOrderedSet<ObjectType>): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithOrderedSetRangeCopyItems<ObjectType>(set: NSOrderedSet<ObjectType>, range: NSRange, flag: boolean): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithSet<ObjectType>(set: NSSet<ObjectType>): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithSetCopyItems<ObjectType>(set: NSSet<ObjectType>, flag: boolean): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet
	[index: number]: ObjectType;
	[Symbol.iterator](): Iterator<any>;

	constructor(o: { array: NSArray<ObjectType>; }); // inherited from NSOrderedSet

	constructor(o: { array: NSArray<ObjectType>; copyItems: boolean; }); // inherited from NSOrderedSet

	constructor(o: { array: NSArray<ObjectType>; range: NSRange; copyItems: boolean; }); // inherited from NSOrderedSet

	constructor(o: { capacity: number; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { object: ObjectType; }); // inherited from NSOrderedSet

	constructor(o: { objects: ObjectType; }); // inherited from NSOrderedSet

	constructor(o: { objects: interop.Reference<ObjectType>; count: number; }); // inherited from NSOrderedSet

	constructor(o: { orderedSet: NSOrderedSet<ObjectType>; }); // inherited from NSOrderedSet

	constructor(o: { orderedSet: NSOrderedSet<ObjectType>; copyItems: boolean; }); // inherited from NSOrderedSet

	constructor(o: { orderedSet: NSOrderedSet<ObjectType>; range: NSRange; copyItems: boolean; }); // inherited from NSOrderedSet

	constructor(o: { set: NSSet<ObjectType>; }); // inherited from NSOrderedSet

	constructor(o: { set: NSSet<ObjectType>; copyItems: boolean; }); // inherited from NSOrderedSet

	addObject(object: ObjectType): void;

	addObjectsCount(objects: interop.Reference<ObjectType>, count: number): void;

	addObjectsFromArray(array: NSArray<ObjectType>): void;

	exchangeObjectAtIndexWithObjectAtIndex(idx1: number, idx2: number): void;

	filterUsingPredicate(p: NSPredicate): void;

	insertObjectAtIndex(object: ObjectType, idx: number): void;

	insertObjectsAtIndexes(objects: NSArray<ObjectType>, indexes: NSIndexSet): void;

	intersectOrderedSet(other: NSOrderedSet<ObjectType>): void;

	intersectSet(other: NSSet<ObjectType>): void;

	minusOrderedSet(other: NSOrderedSet<ObjectType>): void;

	minusSet(other: NSSet<ObjectType>): void;

	moveObjectsAtIndexesToIndex(indexes: NSIndexSet, idx: number): void;

	removeAllObjects(): void;

	removeObject(object: ObjectType): void;

	removeObjectAtIndex(idx: number): void;

	removeObjectsAtIndexes(indexes: NSIndexSet): void;

	removeObjectsInArray(array: NSArray<ObjectType>): void;

	removeObjectsInRange(range: NSRange): void;

	replaceObjectAtIndexWithObject(idx: number, object: ObjectType): void;

	replaceObjectsAtIndexesWithObjects(indexes: NSIndexSet, objects: NSArray<ObjectType>): void;

	replaceObjectsInRangeWithObjectsCount(range: NSRange, objects: interop.Reference<ObjectType>, count: number): void;

	setObjectAtIndex(obj: ObjectType, idx: number): void;

	setObjectAtIndexedSubscript(obj: ObjectType, idx: number): void;

	sortRangeOptionsUsingComparator(range: NSRange, opts: NSSortOptions, cmptr: (p1: any, p2: any) => NSComparisonResult): void;

	sortUsingComparator(cmptr: (p1: any, p2: any) => NSComparisonResult): void;

	sortUsingDescriptors(sortDescriptors: NSArray<NSSortDescriptor>): void;

	sortWithOptionsUsingComparator(opts: NSSortOptions, cmptr: (p1: any, p2: any) => NSComparisonResult): void;

	unionOrderedSet(other: NSOrderedSet<ObjectType>): void;

	unionSet(other: NSSet<ObjectType>): void;
}

declare class NSMutableSet<ObjectType> extends NSSet<ObjectType> {

	static set<ObjectType>(): NSMutableSet<ObjectType>; // inherited from NSSet

	static setWithArray<ObjectType>(array: NSArray<ObjectType>): NSMutableSet<ObjectType>; // inherited from NSSet

	static setWithCapacity<ObjectType>(numItems: number): NSMutableSet<ObjectType>;

	static setWithObject<ObjectType>(object: ObjectType): NSMutableSet<ObjectType>; // inherited from NSSet

	static setWithObjects<ObjectType>(firstObj: ObjectType): NSMutableSet<ObjectType>; // inherited from NSSet

	static setWithObjectsCount<ObjectType>(objects: interop.Reference<ObjectType>, cnt: number): NSMutableSet<ObjectType>; // inherited from NSSet

	static setWithSet<ObjectType>(set: NSSet<ObjectType>): NSMutableSet<ObjectType>; // inherited from NSSet
	[Symbol.iterator](): Iterator<any>;

	constructor(o: { array: NSArray<ObjectType>; }); // inherited from NSSet

	constructor(o: { capacity: number; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { objects: ObjectType; }); // inherited from NSSet

	constructor(o: { objects: interop.Reference<ObjectType>; count: number; }); // inherited from NSSet

	constructor(o: { set: NSSet<ObjectType>; }); // inherited from NSSet

	constructor(o: { set: NSSet<ObjectType>; copyItems: boolean; }); // inherited from NSSet

	addObject(object: ObjectType): void;

	addObjectsFromArray(array: NSArray<ObjectType>): void;

	filterUsingPredicate(predicate: NSPredicate): void;

	intersectSet(otherSet: NSSet<ObjectType>): void;

	minusSet(otherSet: NSSet<ObjectType>): void;

	removeAllObjects(): void;

	removeObject(object: ObjectType): void;

	setSet(otherSet: NSSet<ObjectType>): void;

	unionSet(otherSet: NSSet<ObjectType>): void;
}

declare class NSMutableString extends NSString {

	static string(): NSMutableString; // inherited from NSString

	static stringWithCStringEncoding(cString: string, enc: number): NSMutableString; // inherited from NSString

	static stringWithCapacity(capacity: number): NSMutableString;

	static stringWithCharactersLength(characters: interop.Reference<string>, length: number): NSMutableString; // inherited from NSString

	static stringWithContentsOfFileEncodingError(path: string, enc: number): NSMutableString; // inherited from NSString

	static stringWithContentsOfFileUsedEncodingError(path: string, enc: interop.Reference<number>): NSMutableString; // inherited from NSString

	static stringWithContentsOfURLEncodingError(url: NSURL, enc: number): NSMutableString; // inherited from NSString

	static stringWithContentsOfURLUsedEncodingError(url: NSURL, enc: interop.Reference<number>): NSMutableString; // inherited from NSString

	static stringWithString(string: string): NSMutableString; // inherited from NSString

	static stringWithUTF8String(nullTerminatedCString: string): NSMutableString; // inherited from NSString

	constructor(o: { bytes: interop.Pointer; length: number; encoding: number; }); // inherited from NSString

	constructor(o: { bytesNoCopy: interop.Pointer; length: number; encoding: number; freeWhenDone: boolean; }); // inherited from NSString

	constructor(o: { CString: string; }); // inherited from NSString

	constructor(o: { CString: string; encoding: number; }); // inherited from NSString

	constructor(o: { CString: string; length: number; }); // inherited from NSString

	constructor(o: { CStringNoCopy: string; length: number; freeWhenDone: boolean; }); // inherited from NSString

	constructor(o: { capacity: number; });

	constructor(o: { characters: interop.Reference<string>; length: number; }); // inherited from NSString

	constructor(o: { charactersNoCopy: interop.Reference<string>; length: number; freeWhenDone: boolean; }); // inherited from NSString

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { contentsOfFile: string; }); // inherited from NSString

	constructor(o: { contentsOfFile: string; encoding: number; }); // inherited from NSString

	constructor(o: { contentsOfFile: string; usedEncoding: interop.Reference<number>; }); // inherited from NSString

	constructor(o: { contentsOfURL: NSURL; }); // inherited from NSString

	constructor(o: { contentsOfURL: NSURL; encoding: number; }); // inherited from NSString

	constructor(o: { contentsOfURL: NSURL; usedEncoding: interop.Reference<number>; }); // inherited from NSString

	constructor(o: { data: NSData; encoding: number; }); // inherited from NSString

	constructor(o: { string: string; }); // inherited from NSString

	constructor(o: { UTF8String: string; }); // inherited from NSString

	appendString(aString: string): void;

	applyTransformReverseRangeUpdatedRange(transform: string, reverse: boolean, range: NSRange, resultingRange: interop.Reference<NSRange>): boolean;

	deleteCharactersInRange(range: NSRange): void;

	insertStringAtIndex(aString: string, loc: number): void;

	replaceCharactersInRangeWithString(range: NSRange, aString: string): void;

	replaceOccurrencesOfStringWithStringOptionsRange(target: string, replacement: string, options: NSStringCompareOptions, searchRange: NSRange): number;

	self(): NSMutableString; // inherited from NSObjectProtocol

	setString(aString: string): void;
}

declare class NSMutableURLRequest extends NSURLRequest {

	static requestWithURL(URL: NSURL): NSMutableURLRequest; // inherited from NSURLRequest

	static requestWithURLCachePolicyTimeoutInterval(URL: NSURL, cachePolicy: NSURLRequestCachePolicy, timeoutInterval: number): NSMutableURLRequest; // inherited from NSURLRequest

	HTTPBody: NSData;

	HTTPBodyStream: NSInputStream;

	HTTPMethod: string;

	HTTPShouldHandleCookies: boolean;

	HTTPShouldUsePipelining: boolean;

	URL: NSURL;

	allHTTPHeaderFields: NSDictionary<string, string>;

	allowsCellularAccess: boolean;

	cachePolicy: NSURLRequestCachePolicy;

	mainDocumentURL: NSURL;

	networkServiceType: NSURLRequestNetworkServiceType;

	timeoutInterval: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { URL: NSURL; }); // inherited from NSURLRequest

	constructor(o: { URL: NSURL; cachePolicy: NSURLRequestCachePolicy; timeoutInterval: number; }); // inherited from NSURLRequest

	addValueForHTTPHeaderField(value: string, field: string): void;

	bindToHotspotHelperCommand(command: NEHotspotHelperCommand): void;

	setValueForHTTPHeaderField(value: string, field: string): void;
}

declare var NSNegateBooleanTransformerName: string;

declare class NSNetService extends NSObject {

	static alloc(): NSNetService; // inherited from NSObject

	static dataFromTXTRecordDictionary(txtDictionary: NSDictionary<string, NSData>): NSData;

	static dictionaryFromTXTRecordData(txtData: NSData): NSDictionary<string, NSData>;

	static new(): NSNetService; // inherited from NSObject

	/* readonly */ addresses: NSArray<NSData>;

	delegate: NSNetServiceDelegate;

	/* readonly */ domain: string;

	/* readonly */ hostName: string;

	includesPeerToPeer: boolean;

	/* readonly */ name: string;

	/* readonly */ port: number;

	/* readonly */ type: string;

	constructor(); // inherited from NSObject

	constructor(o: { domain: string; type: string; name: string; });

	constructor(o: { domain: string; type: string; name: string; port: number; });

	TXTRecordData(): NSData;

	getInputStreamOutputStream(inputStream: interop.Reference<NSInputStream>, outputStream: interop.Reference<NSOutputStream>): boolean;

	publish(): void;

	publishWithOptions(options: NSNetServiceOptions): void;

	removeFromRunLoopForMode(aRunLoop: NSRunLoop, mode: string): void;

	resolve(): void;

	resolveWithTimeout(timeout: number): void;

	scheduleInRunLoopForMode(aRunLoop: NSRunLoop, mode: string): void;

	self(): NSNetService; // inherited from NSObjectProtocol

	setTXTRecordData(recordData: NSData): boolean;

	startMonitoring(): void;

	stop(): void;

	stopMonitoring(): void;
}

declare class NSNetServiceBrowser extends NSObject {

	static alloc(): NSNetServiceBrowser; // inherited from NSObject

	static new(): NSNetServiceBrowser; // inherited from NSObject

	delegate: NSNetServiceBrowserDelegate;

	includesPeerToPeer: boolean;

	constructor(); // inherited from NSObject

	removeFromRunLoopForMode(aRunLoop: NSRunLoop, mode: string): void;

	scheduleInRunLoopForMode(aRunLoop: NSRunLoop, mode: string): void;

	searchForBrowsableDomains(): void;

	searchForRegistrationDomains(): void;

	searchForServicesOfTypeInDomain(type: string, domainString: string): void;

	self(): NSNetServiceBrowser; // inherited from NSObjectProtocol

	stop(): void;
}

interface NSNetServiceBrowserDelegate extends NSObjectProtocol {

	netServiceBrowserDidFindDomainMoreComing?(browser: NSNetServiceBrowser, domainString: string, moreComing: boolean): void;

	netServiceBrowserDidFindServiceMoreComing?(browser: NSNetServiceBrowser, service: NSNetService, moreComing: boolean): void;

	netServiceBrowserDidNotSearch?(browser: NSNetServiceBrowser, errorDict: NSDictionary<string, number>): void;

	netServiceBrowserDidRemoveDomainMoreComing?(browser: NSNetServiceBrowser, domainString: string, moreComing: boolean): void;

	netServiceBrowserDidRemoveServiceMoreComing?(browser: NSNetServiceBrowser, service: NSNetService, moreComing: boolean): void;

	netServiceBrowserDidStopSearch?(browser: NSNetServiceBrowser): void;

	netServiceBrowserWillSearch?(browser: NSNetServiceBrowser): void;
}
declare var NSNetServiceBrowserDelegate: {

	prototype: NSNetServiceBrowserDelegate;
};

interface NSNetServiceDelegate extends NSObjectProtocol {

	netServiceDidAcceptConnectionWithInputStreamOutputStream?(sender: NSNetService, inputStream: NSInputStream, outputStream: NSOutputStream): void;

	netServiceDidNotPublish?(sender: NSNetService, errorDict: NSDictionary<string, number>): void;

	netServiceDidNotResolve?(sender: NSNetService, errorDict: NSDictionary<string, number>): void;

	netServiceDidPublish?(sender: NSNetService): void;

	netServiceDidResolveAddress?(sender: NSNetService): void;

	netServiceDidStop?(sender: NSNetService): void;

	netServiceDidUpdateTXTRecordData?(sender: NSNetService, data: NSData): void;

	netServiceWillPublish?(sender: NSNetService): void;

	netServiceWillResolve?(sender: NSNetService): void;
}
declare var NSNetServiceDelegate: {

	prototype: NSNetServiceDelegate;
};

declare const enum NSNetServiceOptions {

	NoAutoRename = 1,

	ListenForConnections = 2
}

declare const enum NSNetServicesError {

	UnknownError = -72000,

	CollisionError = -72001,

	NotFoundError = -72002,

	ActivityInProgress = -72003,

	BadArgumentError = -72004,

	CancelledError = -72005,

	InvalidError = -72006,

	TimeoutError = -72007
}

declare var NSNetServicesErrorCode: string;

declare var NSNetServicesErrorDomain: string;

declare var NSNotFound: number;

declare class NSNotification extends NSObject implements NSCoding, NSCopying {

	static alloc(): NSNotification; // inherited from NSObject

	static new(): NSNotification; // inherited from NSObject

	static notificationWithNameObject(aName: string, anObject: any): NSNotification;

	static notificationWithNameObjectUserInfo(aName: string, anObject: any, aUserInfo: NSDictionary<any, any>): NSNotification;

	/* readonly */ name: string;

	/* readonly */ object: any;

	/* readonly */ userInfo: NSDictionary<any, any>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { name: string; object: any; userInfo: NSDictionary<any, any>; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NSNotification; // inherited from NSObjectProtocol
}

declare class NSNotificationCenter extends NSObject {

	static alloc(): NSNotificationCenter; // inherited from NSObject

	static defaultCenter(): NSNotificationCenter;

	static new(): NSNotificationCenter; // inherited from NSObject

	constructor(); // inherited from NSObject

	addObserverForNameObjectQueueUsingBlock(name: string, obj: any, queue: NSOperationQueue, block: (p1: NSNotification) => void): NSObjectProtocol;

	addObserverSelectorNameObject(observer: any, aSelector: string, aName: string, anObject: any): void;

	postNotification(notification: NSNotification): void;

	postNotificationNameObject(aName: string, anObject: any): void;

	postNotificationNameObjectUserInfo(aName: string, anObject: any, aUserInfo: NSDictionary<any, any>): void;

	removeObserver(observer: any): void;

	removeObserverNameObject(observer: any, aName: string, anObject: any): void;

	self(): NSNotificationCenter; // inherited from NSObjectProtocol
}

declare const enum NSNotificationCoalescing {

	NoCoalescing = 0,

	CoalescingOnName = 1,

	CoalescingOnSender = 2
}

declare class NSNotificationQueue extends NSObject {

	static alloc(): NSNotificationQueue; // inherited from NSObject

	static defaultQueue(): NSNotificationQueue;

	static new(): NSNotificationQueue; // inherited from NSObject

	constructor(); // inherited from NSObject

	constructor(o: { notificationCenter: NSNotificationCenter; });

	dequeueNotificationsMatchingCoalesceMask(notification: NSNotification, coalesceMask: number): void;

	enqueueNotificationPostingStyle(notification: NSNotification, postingStyle: NSPostingStyle): void;

	enqueueNotificationPostingStyleCoalesceMaskForModes(notification: NSNotification, postingStyle: NSPostingStyle, coalesceMask: NSNotificationCoalescing, modes: NSArray<string>): void;

	self(): NSNotificationQueue; // inherited from NSObjectProtocol
}

declare class NSNull extends NSObject implements CAAction, NSCopying, NSSecureCoding {

	static alloc(): NSNull; // inherited from NSObject

	static new(): NSNull; // inherited from NSObject

	static null(): NSNull;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	runActionForKeyObjectArguments(event: string, anObject: any, dict: NSDictionary<any, any>): void; // inherited from CAAction

	self(): NSNull; // inherited from NSObjectProtocol
}

declare class NSNumber extends NSValue implements CKRecordValue {

	static numberWithBool(value: boolean): number;

	static numberWithChar(value: number): number;

	static numberWithDouble(value: number): number;

	static numberWithFloat(value: number): number;

	static numberWithInt(value: number): number;

	static numberWithInteger(value: number): number;

	static numberWithLong(value: number): number;

	static numberWithLongLong(value: number): number;

	static numberWithShort(value: number): number;

	static numberWithUnsignedChar(value: number): number;

	static numberWithUnsignedInt(value: number): number;

	static numberWithUnsignedInteger(value: number): number;

	static numberWithUnsignedLong(value: number): number;

	static numberWithUnsignedLongLong(value: number): number;

	static numberWithUnsignedShort(value: number): number;

	/* readonly */ boolValue: boolean;

	/* readonly */ charValue: number;

	/* readonly */ decimalValue: NSDecimal;

	/* readonly */ doubleValue: number;

	/* readonly */ floatValue: number;

	/* readonly */ intValue: number;

	/* readonly */ integerValue: number;

	/* readonly */ longLongValue: number;

	/* readonly */ longValue: number;

	/* readonly */ shortValue: number;

	/* readonly */ stringValue: string;

	/* readonly */ unsignedCharValue: number;

	/* readonly */ unsignedIntValue: number;

	/* readonly */ unsignedIntegerValue: number;

	/* readonly */ unsignedLongLongValue: number;

	/* readonly */ unsignedLongValue: number;

	/* readonly */ unsignedShortValue: number;

	/* readonly */ debugDescription: string; // inherited from NSObjectProtocol

	/* readonly */ description: string; // inherited from NSObjectProtocol

	/* readonly */ hash: number; // inherited from NSObjectProtocol

	/* readonly */ isProxy: boolean; // inherited from NSObjectProtocol

	/* readonly */ superclass: typeof NSObject; // inherited from NSObjectProtocol

	/* readonly */ zone: interop.Pointer; // inherited from NSObjectProtocol

	constructor(o: { bool: boolean; });

	constructor(o: { bytes: interop.Pointer; objCType: string; }); // inherited from NSValue

	constructor(o: { char: number; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { double: number; });

	constructor(o: { float: number; });

	constructor(o: { int: number; });

	constructor(o: { integer: number; });

	constructor(o: { long: number; });

	constructor(o: { longLong: number; });

	constructor(o: { short: number; });

	constructor(o: { unsignedChar: number; });

	constructor(o: { unsignedInt: number; });

	constructor(o: { unsignedInteger: number; });

	constructor(o: { unsignedLong: number; });

	constructor(o: { unsignedLongLong: number; });

	constructor(o: { unsignedShort: number; });

	class(): typeof NSObject; // inherited from NSObjectProtocol

	compare(otherNumber: number): NSComparisonResult;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean; // inherited from NSObjectProtocol

	descriptionWithLocale(locale: any): string;

	isEqual(object: any): boolean; // inherited from NSObjectProtocol

	isEqualToNumber(number: number): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean; // inherited from NSObjectProtocol

	isMemberOfClass(aClass: typeof NSObject): boolean; // inherited from NSObjectProtocol

	performSelector(aSelector: string): any; // inherited from NSObjectProtocol

	performSelectorWithObject(aSelector: string, object: any): any; // inherited from NSObjectProtocol

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any; // inherited from NSObjectProtocol

	respondsToSelector(aSelector: string): boolean; // inherited from NSObjectProtocol

	retainCount(): number; // inherited from NSObjectProtocol

	self(): NSNumber; // inherited from NSObjectProtocol
}

declare class NSNumberFormatter extends NSFormatter {

	static defaultFormatterBehavior(): NSNumberFormatterBehavior;

	static localizedStringFromNumberNumberStyle(num: number, nstyle: NSNumberFormatterStyle): string;

	static setDefaultFormatterBehavior(behavior: NSNumberFormatterBehavior): void;

	allowsFloats: boolean;

	alwaysShowsDecimalSeparator: boolean;

	currencyCode: string;

	currencyDecimalSeparator: string;

	currencyGroupingSeparator: string;

	currencySymbol: string;

	decimalSeparator: string;

	exponentSymbol: string;

	formatWidth: number;

	formatterBehavior: NSNumberFormatterBehavior;

	formattingContext: NSFormattingContext;

	generatesDecimalNumbers: boolean;

	groupingSeparator: string;

	groupingSize: number;

	internationalCurrencySymbol: string;

	lenient: boolean;

	locale: NSLocale;

	maximum: number;

	maximumFractionDigits: number;

	maximumIntegerDigits: number;

	maximumSignificantDigits: number;

	minimum: number;

	minimumFractionDigits: number;

	minimumIntegerDigits: number;

	minimumSignificantDigits: number;

	minusSign: string;

	multiplier: number;

	negativeFormat: string;

	negativeInfinitySymbol: string;

	negativePrefix: string;

	negativeSuffix: string;

	nilSymbol: string;

	notANumberSymbol: string;

	numberStyle: NSNumberFormatterStyle;

	paddingCharacter: string;

	paddingPosition: NSNumberFormatterPadPosition;

	partialStringValidationEnabled: boolean;

	perMillSymbol: string;

	percentSymbol: string;

	plusSign: string;

	positiveFormat: string;

	positiveInfinitySymbol: string;

	positivePrefix: string;

	positiveSuffix: string;

	roundingIncrement: number;

	roundingMode: NSNumberFormatterRoundingMode;

	secondaryGroupingSize: number;

	textAttributesForNegativeInfinity: NSDictionary<string, any>;

	textAttributesForNegativeValues: NSDictionary<string, any>;

	textAttributesForNil: NSDictionary<string, any>;

	textAttributesForNotANumber: NSDictionary<string, any>;

	textAttributesForPositiveInfinity: NSDictionary<string, any>;

	textAttributesForPositiveValues: NSDictionary<string, any>;

	textAttributesForZero: NSDictionary<string, any>;

	usesGroupingSeparator: boolean;

	usesSignificantDigits: boolean;

	zeroSymbol: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	getObjectValueForStringRangeError(obj: interop.Reference<any>, string: string, rangep: interop.Reference<NSRange>): boolean;

	numberFromString(string: string): number;

	stringFromNumber(number: number): string;
}

declare const enum NSNumberFormatterBehavior {

	BehaviorDefault = 0,

	Behavior10_4 = 1040
}

declare const enum NSNumberFormatterPadPosition {

	BeforePrefix = 0,

	AfterPrefix = 1,

	BeforeSuffix = 2,

	AfterSuffix = 3
}

declare const enum NSNumberFormatterRoundingMode {

	Ceiling = 0,

	Floor = 1,

	Down = 2,

	Up = 3,

	HalfEven = 4,

	HalfDown = 5,

	HalfUp = 6
}

declare const enum NSNumberFormatterStyle {

	NoStyle = 0,

	DecimalStyle = 1,

	CurrencyStyle = 2,

	PercentStyle = 3,

	ScientificStyle = 4,

	SpellOutStyle = 5,

	OrdinalStyle = 6,

	CurrencyISOCodeStyle = 8,

	CurrencyPluralStyle = 9,

	CurrencyAccountingStyle = 10
}

declare var NSOSStatusErrorDomain: string;

declare var NSObjectInaccessibleException: string;

declare var NSObjectNotAvailableException: string;

declare var NSOldStyleException: string;

declare function NSOpenStepRootDirectory(): string;

interface NSOperatingSystemVersion {
	majorVersion: number;
	minorVersion: number;
	patchVersion: number;
}
declare var NSOperatingSystemVersion: interop.StructType<NSOperatingSystemVersion>;

declare class NSOperation extends NSObject {

	static alloc(): NSOperation; // inherited from NSObject

	static new(): NSOperation; // inherited from NSObject

	/* readonly */ asynchronous: boolean;

	/* readonly */ cancelled: boolean;

	completionBlock: () => void;

	/* readonly */ concurrent: boolean;

	/* readonly */ dependencies: NSArray<NSOperation>;

	/* readonly */ executing: boolean;

	/* readonly */ finished: boolean;

	name: string;

	qualityOfService: NSQualityOfService;

	queuePriority: NSOperationQueuePriority;

	/* readonly */ ready: boolean;

	threadPriority: number;

	constructor(); // inherited from NSObject

	addDependency(op: NSOperation): void;

	cancel(): void;

	main(): void;

	removeDependency(op: NSOperation): void;

	self(): NSOperation; // inherited from NSObjectProtocol

	start(): void;

	waitUntilFinished(): void;
}

declare class NSOperationQueue extends NSObject {

	static alloc(): NSOperationQueue; // inherited from NSObject

	static currentQueue(): NSOperationQueue;

	static mainQueue(): NSOperationQueue;

	static new(): NSOperationQueue; // inherited from NSObject

	maxConcurrentOperationCount: number;

	name: string;

	/* readonly */ operationCount: number;

	/* readonly */ operations: NSArray<NSOperation>;

	qualityOfService: NSQualityOfService;

	suspended: boolean;

	underlyingQueue: NSObject;

	constructor(); // inherited from NSObject

	addOperation(op: NSOperation): void;

	addOperationWithBlock(block: () => void): void;

	addOperationsWaitUntilFinished(ops: NSArray<NSOperation>, wait: boolean): void;

	cancelAllOperations(): void;

	self(): NSOperationQueue; // inherited from NSObjectProtocol

	waitUntilAllOperationsAreFinished(): void;
}

declare var NSOperationQueueDefaultMaxConcurrentOperationCount: number;

declare const enum NSOperationQueuePriority {

	VeryLow = -8,

	Low = -4,

	Normal = 0,

	High = 4,

	VeryHigh = 8
}

declare class NSOrderedSet<ObjectType> extends NSObject implements NSCopying, NSFastEnumeration, NSMutableCopying, NSSecureCoding {

	static alloc<ObjectType>(): NSOrderedSet<ObjectType>; // inherited from NSObject

	static new<ObjectType>(): NSOrderedSet<ObjectType>; // inherited from NSObject

	static orderedSet<ObjectType>(): NSOrderedSet<ObjectType>;

	static orderedSetWithArray<ObjectType>(array: NSArray<ObjectType>): NSOrderedSet<ObjectType>;

	static orderedSetWithArrayRangeCopyItems<ObjectType>(array: NSArray<ObjectType>, range: NSRange, flag: boolean): NSOrderedSet<ObjectType>;

	static orderedSetWithObject<ObjectType>(object: ObjectType): NSOrderedSet<ObjectType>;

	static orderedSetWithObjects<ObjectType>(firstObj: ObjectType): NSOrderedSet<ObjectType>;

	static orderedSetWithObjectsCount<ObjectType>(objects: interop.Reference<ObjectType>, cnt: number): NSOrderedSet<ObjectType>;

	static orderedSetWithOrderedSet<ObjectType>(set: NSOrderedSet<ObjectType>): NSOrderedSet<ObjectType>;

	static orderedSetWithOrderedSetRangeCopyItems<ObjectType>(set: NSOrderedSet<ObjectType>, range: NSRange, flag: boolean): NSOrderedSet<ObjectType>;

	static orderedSetWithSet<ObjectType>(set: NSSet<ObjectType>): NSOrderedSet<ObjectType>;

	static orderedSetWithSetCopyItems<ObjectType>(set: NSSet<ObjectType>, flag: boolean): NSOrderedSet<ObjectType>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ array: NSArray<ObjectType>;

	/* readonly */ count: number;

	/* readonly */ firstObject: ObjectType;

	/* readonly */ lastObject: ObjectType;

	/* readonly */ reversedOrderedSet: NSOrderedSet<ObjectType>;

	/* readonly */ set: NSSet<ObjectType>;
	[index: number]: ObjectType;
	[Symbol.iterator](): Iterator<any>;

	constructor(); // inherited from NSObject

	constructor(o: { array: NSArray<ObjectType>; });

	constructor(o: { array: NSArray<ObjectType>; copyItems: boolean; });

	constructor(o: { array: NSArray<ObjectType>; range: NSRange; copyItems: boolean; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { object: ObjectType; });

	constructor(o: { objects: ObjectType; });

	constructor(o: { objects: interop.Reference<ObjectType>; count: number; });

	constructor(o: { orderedSet: NSOrderedSet<ObjectType>; });

	constructor(o: { orderedSet: NSOrderedSet<ObjectType>; copyItems: boolean; });

	constructor(o: { orderedSet: NSOrderedSet<ObjectType>; range: NSRange; copyItems: boolean; });

	constructor(o: { set: NSSet<ObjectType>; });

	constructor(o: { set: NSSet<ObjectType>; copyItems: boolean; });

	containsObject(object: ObjectType): boolean;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	descriptionWithLocale(locale: any): string;

	descriptionWithLocaleIndent(locale: any, level: number): string;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	enumerateObjectsAtIndexesOptionsUsingBlock(s: NSIndexSet, opts: NSEnumerationOptions, block: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => void): void;

	enumerateObjectsUsingBlock(block: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => void): void;

	enumerateObjectsWithOptionsUsingBlock(opts: NSEnumerationOptions, block: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => void): void;

	filteredOrderedSetUsingPredicate(p: NSPredicate): NSOrderedSet<ObjectType>;

	getObjectsRange(objects: interop.Reference<ObjectType>, range: NSRange): void;

	indexOfObject(object: ObjectType): number;

	indexOfObjectAtIndexesOptionsPassingTest(s: NSIndexSet, opts: NSEnumerationOptions, predicate: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => boolean): number;

	indexOfObjectInSortedRangeOptionsUsingComparator(object: ObjectType, range: NSRange, opts: NSBinarySearchingOptions, cmp: (p1: any, p2: any) => NSComparisonResult): number;

	indexOfObjectPassingTest(predicate: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => boolean): number;

	indexOfObjectWithOptionsPassingTest(opts: NSEnumerationOptions, predicate: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => boolean): number;

	indexesOfObjectsAtIndexesOptionsPassingTest(s: NSIndexSet, opts: NSEnumerationOptions, predicate: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => boolean): NSIndexSet;

	indexesOfObjectsPassingTest(predicate: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => boolean): NSIndexSet;

	indexesOfObjectsWithOptionsPassingTest(opts: NSEnumerationOptions, predicate: (p1: ObjectType, p2: number, p3: interop.Reference<boolean>) => boolean): NSIndexSet;

	intersectsOrderedSet(other: NSOrderedSet<ObjectType>): boolean;

	intersectsSet(set: NSSet<ObjectType>): boolean;

	isEqualToOrderedSet(other: NSOrderedSet<ObjectType>): boolean;

	isSubsetOfOrderedSet(other: NSOrderedSet<ObjectType>): boolean;

	isSubsetOfSet(set: NSSet<ObjectType>): boolean;

	mutableCopyWithZone(zone: interop.Pointer): any; // inherited from NSMutableCopying

	objectAtIndex(idx: number): ObjectType;

	objectAtIndexedSubscript(idx: number): ObjectType;

	objectEnumerator(): NSEnumerator<ObjectType>;

	objectsAtIndexes(indexes: NSIndexSet): NSArray<ObjectType>;

	reverseObjectEnumerator(): NSEnumerator<ObjectType>;

	self(): NSOrderedSet<ObjectType>; // inherited from NSObjectProtocol

	sortedArrayUsingComparator(cmptr: (p1: any, p2: any) => NSComparisonResult): NSArray<ObjectType>;

	sortedArrayUsingDescriptors(sortDescriptors: NSArray<NSSortDescriptor>): NSArray<ObjectType>;

	sortedArrayWithOptionsUsingComparator(opts: NSSortOptions, cmptr: (p1: any, p2: any) => NSComparisonResult): NSArray<ObjectType>;
}

declare class NSOrthography extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSOrthography; // inherited from NSObject

	static new(): NSOrthography; // inherited from NSObject

	static orthographyWithDominantScriptLanguageMap(script: string, map: NSDictionary<string, NSArray<string>>): NSOrthography;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ allLanguages: NSArray<string>;

	/* readonly */ allScripts: NSArray<string>;

	/* readonly */ dominantLanguage: string;

	/* readonly */ dominantScript: string;

	/* readonly */ languageMap: NSDictionary<string, NSArray<string>>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { dominantScript: string; languageMap: NSDictionary<string, NSArray<string>>; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	dominantLanguageForScript(script: string): string;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	languagesForScript(script: string): NSArray<string>;

	self(): NSOrthography; // inherited from NSObjectProtocol
}

declare class NSOutputStream extends NSStream {

	static outputStreamToBufferCapacity(buffer: string, capacity: number): NSOutputStream;

	static outputStreamToFileAtPathAppend(path: string, shouldAppend: boolean): NSOutputStream;

	static outputStreamToMemory(): NSOutputStream;

	static outputStreamWithURLAppend(url: NSURL, shouldAppend: boolean): NSOutputStream;

	/* readonly */ hasSpaceAvailable: boolean;

	constructor(o: { toBuffer: string; capacity: number; });

	constructor(o: { toFileAtPath: string; append: boolean; });

	constructor(o: { toMemory: void; });

	constructor(o: { URL: NSURL; append: boolean; });

	writeMaxLength(buffer: string, len: number): number;
}

declare var NSPOSIXErrorDomain: string;

declare function NSPageSize(): number;

declare var NSParseErrorException: string;

declare var NSPersianCalendar: string;

declare var NSPersonNameComponentDelimiter: string;

declare var NSPersonNameComponentFamilyName: string;

declare var NSPersonNameComponentGivenName: string;

declare var NSPersonNameComponentKey: string;

declare var NSPersonNameComponentMiddleName: string;

declare var NSPersonNameComponentNickname: string;

declare var NSPersonNameComponentPrefix: string;

declare var NSPersonNameComponentSuffix: string;

declare class NSPersonNameComponents extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSPersonNameComponents; // inherited from NSObject

	static new(): NSPersonNameComponents; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	familyName: string;

	givenName: string;

	middleName: string;

	namePrefix: string;

	nameSuffix: string;

	nickname: string;

	phoneticRepresentation: NSPersonNameComponents;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NSPersonNameComponents; // inherited from NSObjectProtocol
}

declare class NSPersonNameComponentsFormatter extends NSFormatter {

	static localizedStringFromPersonNameComponentsStyleOptions(components: NSPersonNameComponents, nameFormatStyle: NSPersonNameComponentsFormatterStyle, nameOptions: NSPersonNameComponentsFormatterOptions): string;

	phonetic: boolean;

	style: NSPersonNameComponentsFormatterStyle;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	annotatedStringFromPersonNameComponents(components: NSPersonNameComponents): NSAttributedString;

	stringFromPersonNameComponents(components: NSPersonNameComponents): string;
}

declare const enum NSPersonNameComponentsFormatterOptions {

	Phonetic = 2
}

declare const enum NSPersonNameComponentsFormatterStyle {

	Default = 0,

	Short = 1,

	Medium = 2,

	Long = 3,

	Abbreviated = 4
}

declare class NSPipe extends NSObject {

	static alloc(): NSPipe; // inherited from NSObject

	static new(): NSPipe; // inherited from NSObject

	static pipe(): NSPipe;

	/* readonly */ fileHandleForReading: NSFileHandle;

	/* readonly */ fileHandleForWriting: NSFileHandle;

	constructor(); // inherited from NSObject

	self(): NSPipe; // inherited from NSObjectProtocol
}

declare class NSPointerArray extends NSObject implements NSCoding, NSCopying, NSFastEnumeration {

	static alloc(): NSPointerArray; // inherited from NSObject

	static new(): NSPointerArray; // inherited from NSObject

	static pointerArrayWithOptions(options: NSPointerFunctionsOptions): NSPointerArray;

	static pointerArrayWithPointerFunctions(functions: NSPointerFunctions): NSPointerArray;

	static strongObjectsPointerArray(): NSPointerArray;

	static weakObjectsPointerArray(): NSPointerArray;

	/* readonly */ allObjects: NSArray<any>;

	count: number;

	/* readonly */ pointerFunctions: NSPointerFunctions;
	[Symbol.iterator](): Iterator<any>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { options: NSPointerFunctionsOptions; });

	constructor(o: { pointerFunctions: NSPointerFunctions; });

	addPointer(pointer: interop.Pointer): void;

	compact(): void;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	insertPointerAtIndex(item: interop.Pointer, index: number): void;

	pointerAtIndex(index: number): interop.Pointer;

	removePointerAtIndex(index: number): void;

	replacePointerAtIndexWithPointer(index: number, item: interop.Pointer): void;

	self(): NSPointerArray; // inherited from NSObjectProtocol
}

declare class NSPointerFunctions extends NSObject implements NSCopying {

	static alloc(): NSPointerFunctions; // inherited from NSObject

	static new(): NSPointerFunctions; // inherited from NSObject

	static pointerFunctionsWithOptions(options: NSPointerFunctionsOptions): NSPointerFunctions;

	acquireFunction: interop.FunctionReference<(p1: interop.Pointer, p2: interop.FunctionReference<(p1: interop.Pointer) => number>, p3: boolean) => interop.Pointer>;

	descriptionFunction: interop.FunctionReference<(p1: interop.Pointer) => string>;

	hashFunction: interop.FunctionReference<(p1: interop.Pointer, p2: interop.FunctionReference<(p1: interop.Pointer) => number>) => number>;

	isEqualFunction: interop.FunctionReference<(p1: interop.Pointer, p2: interop.Pointer, p3: interop.FunctionReference<(p1: interop.Pointer) => number>) => boolean>;

	relinquishFunction: interop.FunctionReference<(p1: interop.Pointer, p2: interop.FunctionReference<(p1: interop.Pointer) => number>) => void>;

	sizeFunction: interop.FunctionReference<(p1: interop.Pointer) => number>;

	usesStrongWriteBarrier: boolean;

	usesWeakReadAndWriteBarriers: boolean;

	constructor(); // inherited from NSObject

	constructor(o: { options: NSPointerFunctionsOptions; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): NSPointerFunctions; // inherited from NSObjectProtocol
}

declare const enum NSPointerFunctionsOptions {

	StrongMemory = 0,

	OpaqueMemory = 2,

	MallocMemory = 3,

	MachVirtualMemory = 4,

	WeakMemory = 5,

	ObjectPersonality = 0,

	OpaquePersonality = 256,

	ObjectPointerPersonality = 512,

	CStringPersonality = 768,

	StructPersonality = 1024,

	IntegerPersonality = 1280,

	CopyIn = 65536
}

declare class NSPort extends NSObject implements NSCoding, NSCopying {

	static alloc(): NSPort; // inherited from NSObject

	static new(): NSPort; // inherited from NSObject

	static port(): NSPort;

	/* readonly */ reservedSpaceLength: number;

	/* readonly */ valid: boolean;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	delegate(): NSPortDelegate;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	invalidate(): void;

	removeFromRunLoopForMode(runLoop: NSRunLoop, mode: string): void;

	scheduleInRunLoopForMode(runLoop: NSRunLoop, mode: string): void;

	self(): NSPort; // inherited from NSObjectProtocol

	sendBeforeDateComponentsFromReserved(limitDate: Date, components: NSMutableArray<any>, receivePort: NSPort, headerSpaceReserved: number): boolean;

	sendBeforeDateMsgidComponentsFromReserved(limitDate: Date, msgID: number, components: NSMutableArray<any>, receivePort: NSPort, headerSpaceReserved: number): boolean;

	setDelegate(anObject: NSPortDelegate): void;
}

interface NSPortDelegate extends NSObjectProtocol {
}
declare var NSPortDelegate: {

	prototype: NSPortDelegate;
};

declare var NSPortDidBecomeInvalidNotification: string;

declare var NSPortReceiveException: string;

declare var NSPortSendException: string;

declare var NSPortTimeoutException: string;

declare const enum NSPostingStyle {

	WhenIdle = 1,

	ASAP = 2,

	Now = 3
}

declare class NSPredicate extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSPredicate; // inherited from NSObject

	static new(): NSPredicate; // inherited from NSObject

	static predicateWithBlock(block: (p1: any, p2: NSDictionary<string, any>) => boolean): NSPredicate;

	static predicateWithFormatArgumentArray(predicateFormat: string, _arguments: NSArray<any>): NSPredicate;

	static predicateWithValue(value: boolean): NSPredicate;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ predicateFormat: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	allowEvaluation(): void;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	evaluateWithObject(object: any): boolean;

	evaluateWithObjectSubstitutionVariables(object: any, bindings: NSDictionary<string, any>): boolean;

	predicateWithSubstitutionVariables(variables: NSDictionary<string, any>): NSPredicate;

	self(): NSPredicate; // inherited from NSObjectProtocol
}

declare const enum NSPredicateOperatorType {

	LessThanPredicateOperatorType = 0,

	LessThanOrEqualToPredicateOperatorType = 1,

	GreaterThanPredicateOperatorType = 2,

	GreaterThanOrEqualToPredicateOperatorType = 3,

	EqualToPredicateOperatorType = 4,

	NotEqualToPredicateOperatorType = 5,

	MatchesPredicateOperatorType = 6,

	LikePredicateOperatorType = 7,

	BeginsWithPredicateOperatorType = 8,

	EndsWithPredicateOperatorType = 9,

	InPredicateOperatorType = 10,

	CustomSelectorPredicateOperatorType = 11,

	ContainsPredicateOperatorType = 99,

	BetweenPredicateOperatorType = 100
}

declare class NSProcessInfo extends NSObject {

	static alloc(): NSProcessInfo; // inherited from NSObject

	static new(): NSProcessInfo; // inherited from NSObject

	static processInfo(): NSProcessInfo;

	/* readonly */ activeProcessorCount: number;

	/* readonly */ arguments: NSArray<string>;

	/* readonly */ environment: NSDictionary<string, string>;

	/* readonly */ globallyUniqueString: string;

	/* readonly */ hostName: string;

	/* readonly */ lowPowerModeEnabled: boolean;

	/* readonly */ operatingSystemVersion: NSOperatingSystemVersion;

	/* readonly */ operatingSystemVersionString: string;

	/* readonly */ physicalMemory: number;

	/* readonly */ processIdentifier: number;

	processName: string;

	/* readonly */ processorCount: number;

	/* readonly */ systemUptime: number;

	constructor(); // inherited from NSObject

	beginActivityWithOptionsReason(options: NSActivityOptions, reason: string): NSObjectProtocol;

	endActivity(activity: NSObjectProtocol): void;

	isOperatingSystemAtLeastVersion(version: NSOperatingSystemVersion): boolean;

	operatingSystem(): number;

	operatingSystemName(): string;

	performActivityWithOptionsReasonUsingBlock(options: NSActivityOptions, reason: string, block: () => void): void;

	performExpiringActivityWithReasonUsingBlock(reason: string, block: (p1: boolean) => void): void;

	self(): NSProcessInfo; // inherited from NSObjectProtocol
}

declare var NSProcessInfoPowerStateDidChangeNotification: string;

declare class NSProgress extends NSObject {

	static alloc(): NSProgress; // inherited from NSObject

	static currentProgress(): NSProgress;

	static discreteProgressWithTotalUnitCount(unitCount: number): NSProgress;

	static new(): NSProgress; // inherited from NSObject

	static progressWithTotalUnitCount(unitCount: number): NSProgress;

	static progressWithTotalUnitCountParentPendingUnitCount(unitCount: number, parent: NSProgress, portionOfParentTotalUnitCount: number): NSProgress;

	cancellable: boolean;

	cancellationHandler: () => void;

	/* readonly */ cancelled: boolean;

	completedUnitCount: number;

	/* readonly */ fractionCompleted: number;

	/* readonly */ indeterminate: boolean;

	kind: string;

	localizedAdditionalDescription: string;

	localizedDescription: string;

	pausable: boolean;

	/* readonly */ paused: boolean;

	pausingHandler: () => void;

	resumingHandler: () => void;

	totalUnitCount: number;

	/* readonly */ userInfo: NSDictionary<any, any>;

	constructor(); // inherited from NSObject

	constructor(o: { parent: NSProgress; userInfo: NSDictionary<any, any>; });

	addChildWithPendingUnitCount(child: NSProgress, inUnitCount: number): void;

	becomeCurrentWithPendingUnitCount(unitCount: number): void;

	cancel(): void;

	pause(): void;

	resignCurrent(): void;

	resume(): void;

	self(): NSProgress; // inherited from NSObjectProtocol

	setUserInfoObjectForKey(objectOrNil: any, key: string): void;
}

declare var NSProgressEstimatedTimeRemainingKey: string;

declare var NSProgressFileCompletedCountKey: string;

declare var NSProgressFileOperationKindCopying: string;

declare var NSProgressFileOperationKindDecompressingAfterDownloading: string;

declare var NSProgressFileOperationKindDownloading: string;

declare var NSProgressFileOperationKindKey: string;

declare var NSProgressFileOperationKindReceiving: string;

declare var NSProgressFileTotalCountKey: string;

declare var NSProgressFileURLKey: string;

declare var NSProgressKindFile: string;

interface NSProgressReporting extends NSObjectProtocol {

	progress: NSProgress;
}
declare var NSProgressReporting: {

	prototype: NSProgressReporting;
};

declare var NSProgressThroughputKey: string;

declare const enum NSPropertyListFormat {

	OpenStepFormat = 1,

	XMLFormat_v1_0 = 100,

	BinaryFormat_v1_0 = 200
}

declare const enum NSPropertyListMutabilityOptions {

	Immutable = 0,

	MutableContainers = 1,

	MutableContainersAndLeaves = 2
}

declare class NSPropertyListSerialization extends NSObject {

	static alloc(): NSPropertyListSerialization; // inherited from NSObject

	static dataFromPropertyListFormatErrorDescription(plist: any, format: NSPropertyListFormat, errorString: interop.Reference<string>): NSData;

	static dataWithPropertyListFormatOptionsError(plist: any, format: NSPropertyListFormat, opt: number): NSData;

	static new(): NSPropertyListSerialization; // inherited from NSObject

	static propertyListFromDataMutabilityOptionFormatErrorDescription(data: NSData, opt: NSPropertyListMutabilityOptions, format: interop.Reference<NSPropertyListFormat>, errorString: interop.Reference<string>): any;

	static propertyListIsValidForFormat(plist: any, format: NSPropertyListFormat): boolean;

	static propertyListWithDataOptionsFormatError(data: NSData, opt: NSPropertyListMutabilityOptions, format: interop.Reference<NSPropertyListFormat>): any;

	static propertyListWithStreamOptionsFormatError(stream: NSInputStream, opt: NSPropertyListMutabilityOptions, format: interop.Reference<NSPropertyListFormat>): any;

	static writePropertyListToStreamFormatOptionsError(plist: any, stream: NSOutputStream, format: NSPropertyListFormat, opt: number): number;

	constructor(); // inherited from NSObject

	self(): NSPropertyListSerialization; // inherited from NSObjectProtocol
}

declare function NSProtocolFromString(namestr: string): any /* Protocol */;

declare class NSProxy implements NSObjectProtocol {

	static alloc(): NSProxy;

	static class(): typeof NSObject;

	static respondsToSelector(aSelector: string): boolean;

	/* readonly */ debugDescription: string; // inherited from NSObjectProtocol

	/* readonly */ description: string; // inherited from NSObjectProtocol

	/* readonly */ hash: number; // inherited from NSObjectProtocol

	/* readonly */ isProxy: boolean; // inherited from NSObjectProtocol

	/* readonly */ superclass: typeof NSObject; // inherited from NSObjectProtocol

	/* readonly */ zone: interop.Pointer; // inherited from NSObjectProtocol

	class(): typeof NSObject; // inherited from NSObjectProtocol

	conformsToProtocol(aProtocol: any /* Protocol */): boolean; // inherited from NSObjectProtocol

	dealloc(): void;

	finalize(): void;

	forwardInvocation(invocation: NSInvocation): void;

	isEqual(object: any): boolean; // inherited from NSObjectProtocol

	isKindOfClass(aClass: typeof NSObject): boolean; // inherited from NSObjectProtocol

	isMemberOfClass(aClass: typeof NSObject): boolean; // inherited from NSObjectProtocol

	methodSignatureForSelector(sel: string): NSMethodSignature;

	performSelector(aSelector: string): any; // inherited from NSObjectProtocol

	performSelectorWithObject(aSelector: string, object: any): any; // inherited from NSObjectProtocol

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any; // inherited from NSObjectProtocol

	respondsToSelector(aSelector: string): boolean; // inherited from NSObjectProtocol

	retainCount(): number; // inherited from NSObjectProtocol

	self(): NSProxy; // inherited from NSObjectProtocol
}

declare class NSPurgeableData extends NSMutableData implements NSDiscardableContent {

	static dataWithCapacity(aNumItems: number): NSPurgeableData; // inherited from NSMutableData

	static dataWithLength(length: number): NSPurgeableData; // inherited from NSMutableData

	constructor(o: { capacity: number; }); // inherited from NSMutableData

	constructor(o: { length: number; }); // inherited from NSMutableData

	beginContentAccess(): boolean; // inherited from NSDiscardableContent

	discardContentIfPossible(): void; // inherited from NSDiscardableContent

	endContentAccess(): void; // inherited from NSDiscardableContent

	isContentDiscarded(): boolean; // inherited from NSDiscardableContent
}

declare const enum NSQualityOfService {

	UserInteractive = 33,

	UserInitiated = 25,

	Utility = 17,

	Background = 9,

	Default = -1
}

interface NSRange {
	location: number;
	length: number;
}
declare var NSRange: interop.StructType<NSRange>;

declare var NSRangeException: string;

declare function NSRangeFromString(aString: string): NSRange;

declare function NSRealMemoryAvailable(): number;

declare var NSRecoveryAttempterErrorKey: string;

declare class NSRecursiveLock extends NSObject implements NSLocking {

	static alloc(): NSRecursiveLock; // inherited from NSObject

	static new(): NSRecursiveLock; // inherited from NSObject

	name: string;

	constructor(); // inherited from NSObject

	lock(): void; // inherited from NSLocking

	lockBeforeDate(limit: Date): boolean;

	self(): NSRecursiveLock; // inherited from NSObjectProtocol

	tryLock(): boolean;

	unlock(): void; // inherited from NSLocking
}

declare function NSRecycleZone(zone: interop.Pointer): void;

declare var NSRegistrationDomain: string;

declare class NSRegularExpression extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSRegularExpression; // inherited from NSObject

	static escapedPatternForString(string: string): string;

	static escapedTemplateForString(string: string): string;

	static new(): NSRegularExpression; // inherited from NSObject

	static regularExpressionWithPatternOptionsError(pattern: string, options: NSRegularExpressionOptions): NSRegularExpression;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ numberOfCaptureGroups: number;

	/* readonly */ options: NSRegularExpressionOptions;

	/* readonly */ pattern: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { pattern: string; options: NSRegularExpressionOptions; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	enumerateMatchesInStringOptionsRangeUsingBlock(string: string, options: NSMatchingOptions, range: NSRange, block: (p1: NSTextCheckingResult, p2: NSMatchingFlags, p3: interop.Reference<boolean>) => void): void;

	firstMatchInStringOptionsRange(string: string, options: NSMatchingOptions, range: NSRange): NSTextCheckingResult;

	matchesInStringOptionsRange(string: string, options: NSMatchingOptions, range: NSRange): NSArray<NSTextCheckingResult>;

	numberOfMatchesInStringOptionsRange(string: string, options: NSMatchingOptions, range: NSRange): number;

	rangeOfFirstMatchInStringOptionsRange(string: string, options: NSMatchingOptions, range: NSRange): NSRange;

	replaceMatchesInStringOptionsRangeWithTemplate(string: NSMutableString, options: NSMatchingOptions, range: NSRange, templ: string): number;

	replacementStringForResultInStringOffsetTemplate(result: NSTextCheckingResult, string: string, offset: number, templ: string): string;

	self(): NSRegularExpression; // inherited from NSObjectProtocol

	stringByReplacingMatchesInStringOptionsRangeWithTemplate(string: string, options: NSMatchingOptions, range: NSRange, templ: string): string;
}

declare const enum NSRegularExpressionOptions {

	CaseInsensitive = 1,

	AllowCommentsAndWhitespace = 2,

	IgnoreMetacharacters = 4,

	DotMatchesLineSeparators = 8,

	AnchorsMatchLines = 16,

	UseUnixLineSeparators = 32,

	UseUnicodeWordBoundaries = 64
}

declare var NSRepublicOfChinaCalendar: string;

declare function NSRoundDownToMultipleOfPageSize(bytes: number): number;

declare function NSRoundUpToMultipleOfPageSize(bytes: number): number;

declare const enum NSRoundingMode {

	Plain = 0,

	Down = 1,

	Up = 2,

	Bankers = 3
}

declare class NSRunLoop extends NSObject {

	static alloc(): NSRunLoop; // inherited from NSObject

	static currentRunLoop(): NSRunLoop;

	static mainRunLoop(): NSRunLoop;

	static new(): NSRunLoop; // inherited from NSObject

	/* readonly */ currentMode: string;

	constructor(); // inherited from NSObject

	acceptInputForModeBeforeDate(mode: string, limitDate: Date): void;

	addPortForMode(aPort: NSPort, mode: string): void;

	addTimerForMode(timer: NSTimer, mode: string): void;

	cancelPerformSelectorTargetArgument(aSelector: string, target: any, arg: any): void;

	cancelPerformSelectorsWithTarget(target: any): void;

	getCFRunLoop(): any;

	limitDateForMode(mode: string): Date;

	performSelectorTargetArgumentOrderModes(aSelector: string, target: any, arg: any, order: number, modes: NSArray<string>): void;

	removePortForMode(aPort: NSPort, mode: string): void;

	run(): void;

	runModeBeforeDate(mode: string, limitDate: Date): boolean;

	runUntilDate(limitDate: Date): void;

	self(): NSRunLoop; // inherited from NSObjectProtocol
}

declare var NSRunLoopCommonModes: string;

declare class NSScanner extends NSObject implements NSCopying {

	static alloc(): NSScanner; // inherited from NSObject

	static localizedScannerWithString(string: string): any;

	static new(): NSScanner; // inherited from NSObject

	static scannerWithString(string: string): NSScanner;

	/* readonly */ atEnd: boolean;

	caseSensitive: boolean;

	charactersToBeSkipped: NSCharacterSet;

	locale: any;

	scanLocation: number;

	/* readonly */ string: string;

	constructor(); // inherited from NSObject

	constructor(o: { string: string; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	scanCharactersFromSetIntoString(set: NSCharacterSet, result: interop.Reference<string>): boolean;

	scanDecimal(dcm: interop.Reference<NSDecimal>): boolean;

	scanDouble(result: interop.Reference<number>): boolean;

	scanFloat(result: interop.Reference<number>): boolean;

	scanHexDouble(result: interop.Reference<number>): boolean;

	scanHexFloat(result: interop.Reference<number>): boolean;

	scanHexInt(result: interop.Reference<number>): boolean;

	scanHexLongLong(result: interop.Reference<number>): boolean;

	scanInt(result: interop.Reference<number>): boolean;

	scanInteger(result: interop.Reference<number>): boolean;

	scanLongLong(result: interop.Reference<number>): boolean;

	scanStringIntoString(string: string, result: interop.Reference<string>): boolean;

	scanUnsignedLongLong(result: interop.Reference<number>): boolean;

	scanUpToCharactersFromSetIntoString(set: NSCharacterSet, result: interop.Reference<string>): boolean;

	scanUpToStringIntoString(string: string, result: interop.Reference<string>): boolean;

	self(): NSScanner; // inherited from NSObjectProtocol
}

declare const enum NSSearchPathDirectory {

	ApplicationDirectory = 1,

	DemoApplicationDirectory = 2,

	DeveloperApplicationDirectory = 3,

	AdminApplicationDirectory = 4,

	LibraryDirectory = 5,

	DeveloperDirectory = 6,

	UserDirectory = 7,

	DocumentationDirectory = 8,

	DocumentDirectory = 9,

	CoreServiceDirectory = 10,

	AutosavedInformationDirectory = 11,

	DesktopDirectory = 12,

	CachesDirectory = 13,

	ApplicationSupportDirectory = 14,

	DownloadsDirectory = 15,

	InputMethodsDirectory = 16,

	MoviesDirectory = 17,

	MusicDirectory = 18,

	PicturesDirectory = 19,

	PrinterDescriptionDirectory = 20,

	SharedPublicDirectory = 21,

	PreferencePanesDirectory = 22,

	ApplicationScriptsDirectory = 23,

	ItemReplacementDirectory = 99,

	AllApplicationsDirectory = 100,

	AllLibrariesDirectory = 101,

	TrashDirectory = 102
}

declare const enum NSSearchPathDomainMask {

	UserDomainMask = 1,

	LocalDomainMask = 2,

	NetworkDomainMask = 4,

	SystemDomainMask = 8,

	AllDomainsMask = 65535
}

declare function NSSearchPathForDirectoriesInDomains(directory: NSSearchPathDirectory, domainMask: NSSearchPathDomainMask, expandTilde: boolean): NSArray<string>;

interface NSSecureCoding extends NSCoding {
}
declare var NSSecureCoding: {

	prototype: NSSecureCoding;

	supportsSecureCoding(): boolean;
};

declare function NSSelectorFromString(aSelectorName: string): string;

declare class NSSet<ObjectType> extends NSObject implements NSCopying, NSFastEnumeration, NSMutableCopying, NSSecureCoding {

	static alloc<ObjectType>(): NSSet<ObjectType>; // inherited from NSObject

	static new<ObjectType>(): NSSet<ObjectType>; // inherited from NSObject

	static set<ObjectType>(): NSSet<ObjectType>;

	static setWithArray<ObjectType>(array: NSArray<ObjectType>): NSSet<ObjectType>;

	static setWithObject<ObjectType>(object: ObjectType): NSSet<ObjectType>;

	static setWithObjects<ObjectType>(firstObj: ObjectType): NSSet<ObjectType>;

	static setWithObjectsCount<ObjectType>(objects: interop.Reference<ObjectType>, cnt: number): NSSet<ObjectType>;

	static setWithSet<ObjectType>(set: NSSet<ObjectType>): NSSet<ObjectType>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ allObjects: NSArray<ObjectType>;

	/* readonly */ count: number;
	[Symbol.iterator](): Iterator<any>;

	constructor(); // inherited from NSObject

	constructor(o: { array: NSArray<ObjectType>; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { objects: ObjectType; });

	constructor(o: { objects: interop.Reference<ObjectType>; count: number; });

	constructor(o: { set: NSSet<ObjectType>; });

	constructor(o: { set: NSSet<ObjectType>; copyItems: boolean; });

	anyObject(): ObjectType;

	containsObject(anObject: ObjectType): boolean;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	descriptionWithLocale(locale: any): string;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	enumerateObjectsUsingBlock(block: (p1: ObjectType, p2: interop.Reference<boolean>) => void): void;

	enumerateObjectsWithOptionsUsingBlock(opts: NSEnumerationOptions, block: (p1: ObjectType, p2: interop.Reference<boolean>) => void): void;

	filteredSetUsingPredicate(predicate: NSPredicate): NSSet<ObjectType>;

	intersectsSet(otherSet: NSSet<ObjectType>): boolean;

	isEqualToSet(otherSet: NSSet<ObjectType>): boolean;

	isSubsetOfSet(otherSet: NSSet<ObjectType>): boolean;

	makeObjectsPerformSelector(aSelector: string): void;

	makeObjectsPerformSelectorWithObject(aSelector: string, argument: any): void;

	member(object: ObjectType): ObjectType;

	mutableCopyWithZone(zone: interop.Pointer): any; // inherited from NSMutableCopying

	objectEnumerator(): NSEnumerator<ObjectType>;

	objectsPassingTest(predicate: (p1: ObjectType, p2: interop.Reference<boolean>) => boolean): NSSet<ObjectType>;

	objectsWithOptionsPassingTest(opts: NSEnumerationOptions, predicate: (p1: ObjectType, p2: interop.Reference<boolean>) => boolean): NSSet<ObjectType>;

	self(): NSSet<ObjectType>; // inherited from NSObjectProtocol

	setByAddingObject(anObject: ObjectType): NSSet<ObjectType>;

	setByAddingObjectsFromArray(other: NSArray<ObjectType>): NSSet<ObjectType>;

	setByAddingObjectsFromSet(other: NSSet<ObjectType>): NSSet<ObjectType>;

	sortedArrayUsingDescriptors(sortDescriptors: NSArray<NSSortDescriptor>): NSArray<ObjectType>;
}

declare function NSSetUncaughtExceptionHandler(p1: interop.Reference<interop.FunctionReference<(p1: NSException) => void>>): void;

declare function NSSetZoneName(zone: interop.Pointer, name: string): void;

declare function NSShouldRetainWithZone(anObject: any, requestedZone: interop.Pointer): boolean;

declare class NSSimpleCString extends NSString {

	static string(): NSSimpleCString; // inherited from NSString

	static stringWithCStringEncoding(cString: string, enc: number): NSSimpleCString; // inherited from NSString

	static stringWithCharactersLength(characters: interop.Reference<string>, length: number): NSSimpleCString; // inherited from NSString

	static stringWithContentsOfFileEncodingError(path: string, enc: number): NSSimpleCString; // inherited from NSString

	static stringWithContentsOfFileUsedEncodingError(path: string, enc: interop.Reference<number>): NSSimpleCString; // inherited from NSString

	static stringWithContentsOfURLEncodingError(url: NSURL, enc: number): NSSimpleCString; // inherited from NSString

	static stringWithContentsOfURLUsedEncodingError(url: NSURL, enc: interop.Reference<number>): NSSimpleCString; // inherited from NSString

	static stringWithString(string: string): NSSimpleCString; // inherited from NSString

	static stringWithUTF8String(nullTerminatedCString: string): NSSimpleCString; // inherited from NSString

	constructor(o: { bytes: interop.Pointer; length: number; encoding: number; }); // inherited from NSString

	constructor(o: { bytesNoCopy: interop.Pointer; length: number; encoding: number; freeWhenDone: boolean; }); // inherited from NSString

	constructor(o: { CString: string; }); // inherited from NSString

	constructor(o: { CString: string; encoding: number; }); // inherited from NSString

	constructor(o: { CString: string; length: number; }); // inherited from NSString

	constructor(o: { CStringNoCopy: string; length: number; freeWhenDone: boolean; }); // inherited from NSString

	constructor(o: { characters: interop.Reference<string>; length: number; }); // inherited from NSString

	constructor(o: { charactersNoCopy: interop.Reference<string>; length: number; freeWhenDone: boolean; }); // inherited from NSString

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { contentsOfFile: string; }); // inherited from NSString

	constructor(o: { contentsOfFile: string; encoding: number; }); // inherited from NSString

	constructor(o: { contentsOfFile: string; usedEncoding: interop.Reference<number>; }); // inherited from NSString

	constructor(o: { contentsOfURL: NSURL; }); // inherited from NSString

	constructor(o: { contentsOfURL: NSURL; encoding: number; }); // inherited from NSString

	constructor(o: { contentsOfURL: NSURL; usedEncoding: interop.Reference<number>; }); // inherited from NSString

	constructor(o: { data: NSData; encoding: number; }); // inherited from NSString

	constructor(o: { string: string; }); // inherited from NSString

	constructor(o: { UTF8String: string; }); // inherited from NSString

	self(): NSSimpleCString; // inherited from NSObjectProtocol
}

declare class NSSocketPort extends NSPort {

	/* readonly */ address: NSData;

	/* readonly */ protocol: number;

	/* readonly */ protocolFamily: number;

	/* readonly */ socket: number;

	/* readonly */ socketType: number;

	constructor(o: { remoteWithProtocolFamily: number; socketType: number; protocol: number; address: NSData; });

	constructor(o: { remoteWithTCPPort: number; host: string; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { protocolFamily: number; socketType: number; protocol: number; address: NSData; });

	constructor(o: { protocolFamily: number; socketType: number; protocol: number; socket: number; });

	constructor(o: { TCPPort: number; });
}

declare class NSSortDescriptor extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSSortDescriptor; // inherited from NSObject

	static new(): NSSortDescriptor; // inherited from NSObject

	static sortDescriptorWithKeyAscending(key: string, ascending: boolean): NSSortDescriptor;

	static sortDescriptorWithKeyAscendingComparator(key: string, ascending: boolean, cmptr: (p1: any, p2: any) => NSComparisonResult): NSSortDescriptor;

	static sortDescriptorWithKeyAscendingSelector(key: string, ascending: boolean, selector: string): NSSortDescriptor;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ ascending: boolean;

	/* readonly */ comparator: (p1: any, p2: any) => NSComparisonResult;

	/* readonly */ key: string;

	/* readonly */ reversedSortDescriptor: any;

	/* readonly */ selector: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { key: string; ascending: boolean; });

	constructor(o: { key: string; ascending: boolean; comparator: (p1: any, p2: any) => NSComparisonResult; });

	constructor(o: { key: string; ascending: boolean; selector: string; });

	allowEvaluation(): void;

	compareObjectToObject(object1: any, object2: any): NSComparisonResult;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NSSortDescriptor; // inherited from NSObjectProtocol
}

declare const enum NSSortOptions {

	Concurrent = 1,

	Stable = 16
}

declare class NSStream extends NSObject {

	static alloc(): NSStream; // inherited from NSObject

	static getBoundStreamsWithBufferSizeInputStreamOutputStream(bufferSize: number, inputStream: interop.Reference<NSInputStream>, outputStream: interop.Reference<NSOutputStream>): void;

	static getStreamsToHostWithNamePortInputStreamOutputStream(hostname: string, port: number, inputStream: interop.Reference<NSInputStream>, outputStream: interop.Reference<NSOutputStream>): void;

	static new(): NSStream; // inherited from NSObject

	delegate: NSStreamDelegate;

	/* readonly */ streamError: NSError;

	/* readonly */ streamStatus: NSStreamStatus;

	constructor(); // inherited from NSObject

	close(): void;

	open(): void;

	propertyForKey(key: string): any;

	removeFromRunLoopForMode(aRunLoop: NSRunLoop, mode: string): void;

	scheduleInRunLoopForMode(aRunLoop: NSRunLoop, mode: string): void;

	self(): NSStream; // inherited from NSObjectProtocol

	setPropertyForKey(property: any, key: string): boolean;
}

declare var NSStreamDataWrittenToMemoryStreamKey: string;

interface NSStreamDelegate extends NSObjectProtocol {

	streamHandleEvent?(aStream: NSStream, eventCode: NSStreamEvent): void;
}
declare var NSStreamDelegate: {

	prototype: NSStreamDelegate;
};

declare const enum NSStreamEvent {

	None = 0,

	OpenCompleted = 1,

	HasBytesAvailable = 2,

	HasSpaceAvailable = 4,

	ErrorOccurred = 8,

	EndEncountered = 16
}

declare var NSStreamFileCurrentOffsetKey: string;

declare var NSStreamNetworkServiceType: string;

declare var NSStreamNetworkServiceTypeBackground: string;

declare var NSStreamNetworkServiceTypeVideo: string;

declare var NSStreamNetworkServiceTypeVoIP: string;

declare var NSStreamNetworkServiceTypeVoice: string;

declare var NSStreamSOCKSErrorDomain: string;

declare var NSStreamSOCKSProxyConfigurationKey: string;

declare var NSStreamSOCKSProxyHostKey: string;

declare var NSStreamSOCKSProxyPasswordKey: string;

declare var NSStreamSOCKSProxyPortKey: string;

declare var NSStreamSOCKSProxyUserKey: string;

declare var NSStreamSOCKSProxyVersion4: string;

declare var NSStreamSOCKSProxyVersion5: string;

declare var NSStreamSOCKSProxyVersionKey: string;

declare var NSStreamSocketSSLErrorDomain: string;

declare var NSStreamSocketSecurityLevelKey: string;

declare var NSStreamSocketSecurityLevelNegotiatedSSL: string;

declare var NSStreamSocketSecurityLevelNone: string;

declare var NSStreamSocketSecurityLevelSSLv2: string;

declare var NSStreamSocketSecurityLevelSSLv3: string;

declare var NSStreamSocketSecurityLevelTLSv1: string;

declare const enum NSStreamStatus {

	NotOpen = 0,

	Opening = 1,

	Open = 2,

	Reading = 3,

	Writing = 4,

	AtEnd = 5,

	Closed = 6,

	Error = 7
}

declare class NSString extends NSObject implements CKRecordValue, CNKeyDescriptor, NSCopying, NSMutableCopying, NSSecureCoding {

	static alloc(): NSString; // inherited from NSObject

	static availableStringEncodings(): interop.Reference<number>;

	static defaultCStringEncoding(): number;

	static localizedNameOfStringEncoding(encoding: number): string;

	static new(): NSString; // inherited from NSObject

	static nxoauth2_stringWithEncodedQueryParameters(parameters: NSDictionary<any, any>): string;

	static nxoauth2_stringWithUUID(): string;

	static pathWithComponents(components: NSArray<string>): string;

	static string(): NSString;

	static stringEncodingForDataEncodingOptionsConvertedStringUsedLossyConversion(data: NSData, opts: NSDictionary<string, any>, string: interop.Reference<string>, usedLossyConversion: interop.Reference<boolean>): number;

	static stringWithCString(bytes: string): any;

	static stringWithCStringEncoding(cString: string, enc: number): NSString;

	static stringWithCStringLength(bytes: string, length: number): any;

	static stringWithCharactersLength(characters: interop.Reference<string>, length: number): NSString;

	static stringWithContentsOfFile(path: string): any;

	static stringWithContentsOfFileEncodingError(path: string, enc: number): NSString;

	static stringWithContentsOfFileUsedEncodingError(path: string, enc: interop.Reference<number>): NSString;

	static stringWithContentsOfURL(url: NSURL): any;

	static stringWithContentsOfURLEncodingError(url: NSURL, enc: number): NSString;

	static stringWithContentsOfURLUsedEncodingError(url: NSURL, enc: interop.Reference<number>): NSString;

	static stringWithString(string: string): NSString;

	static stringWithUTF8String(nullTerminatedCString: string): NSString;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ UTF8String: string;

	/* readonly */ absolutePath: boolean;

	/* readonly */ boolValue: boolean;

	/* readonly */ capitalizedString: string;

	/* readonly */ decomposedStringWithCanonicalMapping: string;

	/* readonly */ decomposedStringWithCompatibilityMapping: string;

	/* readonly */ doubleValue: number;

	/* readonly */ fastestEncoding: number;

	/* readonly */ fileSystemRepresentation: string;

	/* readonly */ floatValue: number;

	/* readonly */ intValue: number;

	/* readonly */ integerValue: number;

	/* readonly */ lastPathComponent: string;

	/* readonly */ length: number;

	/* readonly */ localizedCapitalizedString: string;

	/* readonly */ localizedLowercaseString: string;

	/* readonly */ localizedUppercaseString: string;

	/* readonly */ longLongValue: number;

	/* readonly */ lowercaseString: string;

	/* readonly */ pathComponents: NSArray<string>;

	/* readonly */ pathExtension: string;

	/* readonly */ precomposedStringWithCanonicalMapping: string;

	/* readonly */ precomposedStringWithCompatibilityMapping: string;

	/* readonly */ smallestEncoding: number;

	/* readonly */ stringByAbbreviatingWithTildeInPath: string;

	/* readonly */ stringByDeletingLastPathComponent: string;

	/* readonly */ stringByDeletingPathExtension: string;

	/* readonly */ stringByExpandingTildeInPath: string;

	/* readonly */ stringByRemovingPercentEncoding: string;

	/* readonly */ stringByResolvingSymlinksInPath: string;

	/* readonly */ stringByStandardizingPath: string;

	/* readonly */ uppercaseString: string;

	constructor(); // inherited from NSObject

	constructor(o: { bytes: interop.Pointer; length: number; encoding: number; });

	constructor(o: { bytesNoCopy: interop.Pointer; length: number; encoding: number; freeWhenDone: boolean; });

	constructor(o: { CString: string; });

	constructor(o: { CString: string; encoding: number; });

	constructor(o: { CString: string; length: number; });

	constructor(o: { CStringNoCopy: string; length: number; freeWhenDone: boolean; });

	constructor(o: { characters: interop.Reference<string>; length: number; });

	constructor(o: { charactersNoCopy: interop.Reference<string>; length: number; freeWhenDone: boolean; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { contentsOfFile: string; });

	constructor(o: { contentsOfFile: string; encoding: number; });

	constructor(o: { contentsOfFile: string; usedEncoding: interop.Reference<number>; });

	constructor(o: { contentsOfURL: NSURL; });

	constructor(o: { contentsOfURL: NSURL; encoding: number; });

	constructor(o: { contentsOfURL: NSURL; usedEncoding: interop.Reference<number>; });

	constructor(o: { data: NSData; encoding: number; });

	constructor(o: { string: string; });

	constructor(o: { UTF8String: string; });

	boundingRectWithSizeOptionsAttributesContext(size: CGSize, options: NSStringDrawingOptions, attributes: NSDictionary<string, any>, context: NSStringDrawingContext): CGRect;

	cString(): string;

	cStringLength(): number;

	cStringUsingEncoding(encoding: number): string;

	canBeConvertedToEncoding(encoding: number): boolean;

	capitalizedStringWithLocale(locale: NSLocale): string;

	caseInsensitiveCompare(string: string): NSComparisonResult;

	characterAtIndex(index: number): string;

	commonPrefixWithStringOptions(str: string, mask: NSStringCompareOptions): string;

	compare(string: string): NSComparisonResult;

	compareOptions(string: string, mask: NSStringCompareOptions): NSComparisonResult;

	compareOptionsRange(string: string, mask: NSStringCompareOptions, compareRange: NSRange): NSComparisonResult;

	compareOptionsRangeLocale(string: string, mask: NSStringCompareOptions, compareRange: NSRange, locale: any): NSComparisonResult;

	completePathIntoStringCaseSensitiveMatchesIntoArrayFilterTypes(outputName: interop.Reference<string>, flag: boolean, outputArray: interop.Reference<NSArray<string>>, filterTypes: NSArray<string>): number;

	componentsSeparatedByCharactersInSet(separator: NSCharacterSet): NSArray<string>;

	componentsSeparatedByString(separator: string): NSArray<string>;

	containsString(str: string): boolean;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	dataUsingEncoding(encoding: number): NSData;

	dataUsingEncodingAllowLossyConversion(encoding: number, lossy: boolean): NSData;

	drawAtPointForWidthWithFontFontSizeLineBreakModeBaselineAdjustment(point: CGPoint, width: number, font: UIFont, fontSize: number, lineBreakMode: NSLineBreakMode, baselineAdjustment: UIBaselineAdjustment): CGSize;

	drawAtPointForWidthWithFontLineBreakMode(point: CGPoint, width: number, font: UIFont, lineBreakMode: NSLineBreakMode): CGSize;

	drawAtPointForWidthWithFontMinFontSizeActualFontSizeLineBreakModeBaselineAdjustment(point: CGPoint, width: number, font: UIFont, minFontSize: number, actualFontSize: interop.Reference<number>, lineBreakMode: NSLineBreakMode, baselineAdjustment: UIBaselineAdjustment): CGSize;

	drawAtPointWithAttributes(point: CGPoint, attrs: NSDictionary<string, any>): void;

	drawAtPointWithFont(point: CGPoint, font: UIFont): CGSize;

	drawInRectWithAttributes(rect: CGRect, attrs: NSDictionary<string, any>): void;

	drawInRectWithFont(rect: CGRect, font: UIFont): CGSize;

	drawInRectWithFontLineBreakMode(rect: CGRect, font: UIFont, lineBreakMode: NSLineBreakMode): CGSize;

	drawInRectWithFontLineBreakModeAlignment(rect: CGRect, font: UIFont, lineBreakMode: NSLineBreakMode, alignment: NSTextAlignment): CGSize;

	drawWithRectOptionsAttributesContext(rect: CGRect, options: NSStringDrawingOptions, attributes: NSDictionary<string, any>, context: NSStringDrawingContext): void;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	enumerateLinesUsingBlock(block: (p1: string, p2: interop.Reference<boolean>) => void): void;

	enumerateLinguisticTagsInRangeSchemeOptionsOrthographyUsingBlock(range: NSRange, tagScheme: string, opts: NSLinguisticTaggerOptions, orthography: NSOrthography, block: (p1: string, p2: NSRange, p3: NSRange, p4: interop.Reference<boolean>) => void): void;

	enumerateSubstringsInRangeOptionsUsingBlock(range: NSRange, opts: NSStringEnumerationOptions, block: (p1: string, p2: NSRange, p3: NSRange, p4: interop.Reference<boolean>) => void): void;

	getBytesMaxLengthUsedLengthEncodingOptionsRangeRemainingRange(buffer: interop.Pointer, maxBufferCount: number, usedBufferCount: interop.Reference<number>, encoding: number, options: NSStringEncodingConversionOptions, range: NSRange, leftover: interop.Reference<NSRange>): boolean;

	getCString(bytes: string): void;

	getCStringMaxLength(bytes: string, maxLength: number): void;

	getCStringMaxLengthEncoding(buffer: string, maxBufferCount: number, encoding: number): boolean;

	getCStringMaxLengthRangeRemainingRange(bytes: string, maxLength: number, aRange: NSRange, leftoverRange: interop.Reference<NSRange>): void;

	getCharacters(buffer: interop.Reference<string>): void;

	getCharactersRange(buffer: interop.Reference<string>, range: NSRange): void;

	getFileSystemRepresentationMaxLength(cname: string, max: number): boolean;

	getLineStartEndContentsEndForRange(startPtr: interop.Reference<number>, lineEndPtr: interop.Reference<number>, contentsEndPtr: interop.Reference<number>, range: NSRange): void;

	getParagraphStartEndContentsEndForRange(startPtr: interop.Reference<number>, parEndPtr: interop.Reference<number>, contentsEndPtr: interop.Reference<number>, range: NSRange): void;

	hasPrefix(str: string): boolean;

	hasSuffix(str: string): boolean;

	isEqualToString(aString: string): boolean;

	lengthOfBytesUsingEncoding(enc: number): number;

	lineRangeForRange(range: NSRange): NSRange;

	linguisticTagsInRangeSchemeOptionsOrthographyTokenRanges(range: NSRange, tagScheme: string, opts: NSLinguisticTaggerOptions, orthography: NSOrthography, tokenRanges: interop.Reference<NSArray<NSValue>>): NSArray<string>;

	localizedCaseInsensitiveCompare(string: string): NSComparisonResult;

	localizedCaseInsensitiveContainsString(str: string): boolean;

	localizedCompare(string: string): NSComparisonResult;

	localizedStandardCompare(string: string): NSComparisonResult;

	localizedStandardContainsString(str: string): boolean;

	localizedStandardRangeOfString(str: string): NSRange;

	lossyCString(): string;

	lowercaseStringWithLocale(locale: NSLocale): string;

	maximumLengthOfBytesUsingEncoding(enc: number): number;

	mutableCopyWithZone(zone: interop.Pointer): any; // inherited from NSMutableCopying

	nxoauth2_URLDecodedString(): string;

	nxoauth2_URLEncodedString(): string;

	nxoauth2_parametersFromEncodedQueryString(): NSDictionary<any, any>;

	paragraphRangeForRange(range: NSRange): NSRange;

	propertyList(): any;

	propertyListFromStringsFileFormat(): NSDictionary<any, any>;

	rangeOfCharacterFromSet(searchSet: NSCharacterSet): NSRange;

	rangeOfCharacterFromSetOptions(searchSet: NSCharacterSet, mask: NSStringCompareOptions): NSRange;

	rangeOfCharacterFromSetOptionsRange(searchSet: NSCharacterSet, mask: NSStringCompareOptions, searchRange: NSRange): NSRange;

	rangeOfComposedCharacterSequenceAtIndex(index: number): NSRange;

	rangeOfComposedCharacterSequencesForRange(range: NSRange): NSRange;

	rangeOfString(searchString: string): NSRange;

	rangeOfStringOptions(searchString: string, mask: NSStringCompareOptions): NSRange;

	rangeOfStringOptionsRange(searchString: string, mask: NSStringCompareOptions, searchRange: NSRange): NSRange;

	rangeOfStringOptionsRangeLocale(searchString: string, mask: NSStringCompareOptions, searchRange: NSRange, locale: NSLocale): NSRange;

	self(): NSString; // inherited from NSObjectProtocol

	sizeWithAttributes(attrs: NSDictionary<string, any>): CGSize;

	sizeWithFont(font: UIFont): CGSize;

	sizeWithFontConstrainedToSize(font: UIFont, size: CGSize): CGSize;

	sizeWithFontConstrainedToSizeLineBreakMode(font: UIFont, size: CGSize, lineBreakMode: NSLineBreakMode): CGSize;

	sizeWithFontForWidthLineBreakMode(font: UIFont, width: number, lineBreakMode: NSLineBreakMode): CGSize;

	sizeWithFontMinFontSizeActualFontSizeForWidthLineBreakMode(font: UIFont, minFontSize: number, actualFontSize: interop.Reference<number>, width: number, lineBreakMode: NSLineBreakMode): CGSize;

	stringByAddingPercentEncodingWithAllowedCharacters(allowedCharacters: NSCharacterSet): string;

	stringByAddingPercentEscapesUsingEncoding(enc: number): string;

	stringByAppendingPathComponent(str: string): string;

	stringByAppendingPathExtension(str: string): string;

	stringByAppendingString(aString: string): string;

	stringByApplyingTransformReverse(transform: string, reverse: boolean): string;

	stringByFoldingWithOptionsLocale(options: NSStringCompareOptions, locale: NSLocale): string;

	stringByPaddingToLengthWithStringStartingAtIndex(newLength: number, padString: string, padIndex: number): string;

	stringByReplacingCharactersInRangeWithString(range: NSRange, replacement: string): string;

	stringByReplacingOccurrencesOfStringWithString(target: string, replacement: string): string;

	stringByReplacingOccurrencesOfStringWithStringOptionsRange(target: string, replacement: string, options: NSStringCompareOptions, searchRange: NSRange): string;

	stringByReplacingPercentEscapesUsingEncoding(enc: number): string;

	stringByTrimmingCharactersInSet(set: NSCharacterSet): string;

	stringsByAppendingPaths(paths: NSArray<string>): NSArray<string>;

	substringFromIndex(from: number): string;

	substringToIndex(to: number): string;

	substringWithRange(range: NSRange): string;

	toMSGraphAttendeeType(): MSGraphAttendeeType;

	toMSGraphBodyType(): MSGraphBodyType;

	toMSGraphCalendarColor(): MSGraphCalendarColor;

	toMSGraphDayOfWeek(): MSGraphDayOfWeek;

	toMSGraphEventType(): MSGraphEventType;

	toMSGraphFreeBusyStatus(): MSGraphFreeBusyStatus;

	toMSGraphImportance(): MSGraphImportance;

	toMSGraphMeetingMessageType(): MSGraphMeetingMessageType;

	toMSGraphRecurrencePatternType(): MSGraphRecurrencePatternType;

	toMSGraphRecurrenceRangeType(): MSGraphRecurrenceRangeType;

	toMSGraphResponseType(): MSGraphResponseType;

	toMSGraphSensitivity(): MSGraphSensitivity;

	toMSGraphWeekIndex(): MSGraphWeekIndex;

	uppercaseStringWithLocale(locale: NSLocale): string;

	variantFittingPresentationWidth(width: number): string;

	writeToFileAtomically(path: string, useAuxiliaryFile: boolean): boolean;

	writeToFileAtomicallyEncodingError(path: string, useAuxiliaryFile: boolean, enc: number): boolean;

	writeToURLAtomically(url: NSURL, atomically: boolean): boolean;

	writeToURLAtomicallyEncodingError(url: NSURL, useAuxiliaryFile: boolean, enc: number): boolean;
}

declare const enum NSStringCompareOptions {

	CaseInsensitiveSearch = 1,

	LiteralSearch = 2,

	BackwardsSearch = 4,

	AnchoredSearch = 8,

	NumericSearch = 64,

	DiacriticInsensitiveSearch = 128,

	WidthInsensitiveSearch = 256,

	ForcedOrderingSearch = 512,

	RegularExpressionSearch = 1024
}

declare const enum NSStringEncodingConversionOptions {

	AllowLossy = 1,

	ExternalRepresentation = 2
}

declare var NSStringEncodingDetectionAllowLossyKey: string;

declare var NSStringEncodingDetectionDisallowedEncodingsKey: string;

declare var NSStringEncodingDetectionFromWindowsKey: string;

declare var NSStringEncodingDetectionLikelyLanguageKey: string;

declare var NSStringEncodingDetectionLossySubstitutionKey: string;

declare var NSStringEncodingDetectionSuggestedEncodingsKey: string;

declare var NSStringEncodingDetectionUseOnlySuggestedEncodingsKey: string;

declare var NSStringEncodingErrorKey: string;

declare const enum NSStringEnumerationOptions {

	ByLines = 0,

	ByParagraphs = 1,

	ByComposedCharacterSequences = 2,

	ByWords = 3,

	BySentences = 4,

	Reverse = 256,

	SubstringNotRequired = 512,

	Localized = 1024
}

declare function NSStringFromClass(aClass: typeof NSObject): string;

declare function NSStringFromProtocol(proto: any /* Protocol */): string;

declare function NSStringFromRange(range: NSRange): string;

declare function NSStringFromSelector(aSelector: string): string;

declare var NSStringTransformFullwidthToHalfwidth: string;

declare var NSStringTransformHiraganaToKatakana: string;

declare var NSStringTransformLatinToArabic: string;

declare var NSStringTransformLatinToCyrillic: string;

declare var NSStringTransformLatinToGreek: string;

declare var NSStringTransformLatinToHangul: string;

declare var NSStringTransformLatinToHebrew: string;

declare var NSStringTransformLatinToHiragana: string;

declare var NSStringTransformLatinToKatakana: string;

declare var NSStringTransformLatinToThai: string;

declare var NSStringTransformMandarinToLatin: string;

declare var NSStringTransformStripCombiningMarks: string;

declare var NSStringTransformStripDiacritics: string;

declare var NSStringTransformToLatin: string;

declare var NSStringTransformToUnicodeName: string;

declare var NSStringTransformToXMLHex: string;

declare var NSSumKeyValueOperator: string;

interface NSSwappedDouble {
	v: number;
}
declare var NSSwappedDouble: interop.StructType<NSSwappedDouble>;

interface NSSwappedFloat {
	v: number;
}
declare var NSSwappedFloat: interop.StructType<NSSwappedFloat>;

declare var NSSystemClockDidChangeNotification: string;

declare var NSSystemTimeZoneDidChangeNotification: string;

declare function NSTemporaryDirectory(): string;

declare var NSTextCheckingAirlineKey: string;

declare var NSTextCheckingCityKey: string;

declare var NSTextCheckingCountryKey: string;

declare var NSTextCheckingFlightKey: string;

declare var NSTextCheckingJobTitleKey: string;

declare var NSTextCheckingNameKey: string;

declare var NSTextCheckingOrganizationKey: string;

declare var NSTextCheckingPhoneKey: string;

declare class NSTextCheckingResult extends NSObject implements NSCopying, NSSecureCoding {

	static addressCheckingResultWithRangeComponents(range: NSRange, components: NSDictionary<string, string>): NSTextCheckingResult;

	static alloc(): NSTextCheckingResult; // inherited from NSObject

	static correctionCheckingResultWithRangeReplacementString(range: NSRange, replacementString: string): NSTextCheckingResult;

	static correctionCheckingResultWithRangeReplacementStringAlternativeStrings(range: NSRange, replacementString: string, alternativeStrings: NSArray<string>): NSTextCheckingResult;

	static dashCheckingResultWithRangeReplacementString(range: NSRange, replacementString: string): NSTextCheckingResult;

	static dateCheckingResultWithRangeDate(range: NSRange, date: Date): NSTextCheckingResult;

	static dateCheckingResultWithRangeDateTimeZoneDuration(range: NSRange, date: Date, timeZone: NSTimeZone, duration: number): NSTextCheckingResult;

	static grammarCheckingResultWithRangeDetails(range: NSRange, details: NSArray<string>): NSTextCheckingResult;

	static linkCheckingResultWithRangeURL(range: NSRange, url: NSURL): NSTextCheckingResult;

	static new(): NSTextCheckingResult; // inherited from NSObject

	static orthographyCheckingResultWithRangeOrthography(range: NSRange, orthography: NSOrthography): NSTextCheckingResult;

	static phoneNumberCheckingResultWithRangePhoneNumber(range: NSRange, phoneNumber: string): NSTextCheckingResult;

	static quoteCheckingResultWithRangeReplacementString(range: NSRange, replacementString: string): NSTextCheckingResult;

	static regularExpressionCheckingResultWithRangesCountRegularExpression(ranges: interop.Reference<NSRange>, count: number, regularExpression: NSRegularExpression): NSTextCheckingResult;

	static replacementCheckingResultWithRangeReplacementString(range: NSRange, replacementString: string): NSTextCheckingResult;

	static spellCheckingResultWithRange(range: NSRange): NSTextCheckingResult;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static transitInformationCheckingResultWithRangeComponents(range: NSRange, components: NSDictionary<string, string>): NSTextCheckingResult;

	/* readonly */ URL: NSURL;

	/* readonly */ addressComponents: NSDictionary<string, string>;

	/* readonly */ alternativeStrings: NSArray<string>;

	/* readonly */ components: NSDictionary<string, string>;

	/* readonly */ date: Date;

	/* readonly */ duration: number;

	/* readonly */ grammarDetails: NSArray<string>;

	/* readonly */ numberOfRanges: number;

	/* readonly */ orthography: NSOrthography;

	/* readonly */ phoneNumber: string;

	/* readonly */ range: NSRange;

	/* readonly */ regularExpression: NSRegularExpression;

	/* readonly */ replacementString: string;

	/* readonly */ resultType: NSTextCheckingType;

	/* readonly */ timeZone: NSTimeZone;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	rangeAtIndex(idx: number): NSRange;

	resultByAdjustingRangesWithOffset(offset: number): NSTextCheckingResult;

	self(): NSTextCheckingResult; // inherited from NSObjectProtocol
}

declare var NSTextCheckingStateKey: string;

declare var NSTextCheckingStreetKey: string;

declare const enum NSTextCheckingType {

	Orthography = 1,

	Spelling = 2,

	Grammar = 4,

	Date = 8,

	Address = 16,

	Link = 32,

	Quote = 64,

	Dash = 128,

	Replacement = 256,

	Correction = 512,

	RegularExpression = 1024,

	PhoneNumber = 2048,

	TransitInformation = 4096
}

declare var NSTextCheckingZIPKey: string;

declare class NSThread extends NSObject {

	static alloc(): NSThread; // inherited from NSObject

	static callStackReturnAddresses(): NSArray<number>;

	static callStackSymbols(): NSArray<string>;

	static currentThread(): NSThread;

	static detachNewThreadSelectorToTargetWithObject(selector: string, target: any, argument: any): void;

	static exit(): void;

	static isMainThread(): boolean;

	static isMultiThreaded(): boolean;

	static mainThread(): NSThread;

	static new(): NSThread; // inherited from NSObject

	static setThreadPriority(p: number): boolean;

	static sleepForTimeInterval(ti: number): void;

	static sleepUntilDate(date: Date): void;

	static threadPriority(): number;

	/* readonly */ cancelled: boolean;

	/* readonly */ executing: boolean;

	/* readonly */ finished: boolean;

	/* readonly */ isMainThread: boolean;

	name: string;

	qualityOfService: NSQualityOfService;

	stackSize: number;

	/* readonly */ threadDictionary: NSMutableDictionary<any, any>;

	threadPriority: number;

	constructor(); // inherited from NSObject

	constructor(o: { target: any; selector: string; object: any; });

	cancel(): void;

	main(): void;

	self(): NSThread; // inherited from NSObjectProtocol

	start(): void;
}

declare var NSThreadWillExitNotification: string;

declare var NSThumbnail1024x1024SizeKey: string;

declare class NSTimeZone extends NSObject implements NSCopying, NSSecureCoding {

	static abbreviationDictionary(): NSDictionary<string, string>;

	static alloc(): NSTimeZone; // inherited from NSObject

	static defaultTimeZone(): NSTimeZone;

	static knownTimeZoneNames(): NSArray<string>;

	static localTimeZone(): NSTimeZone;

	static new(): NSTimeZone; // inherited from NSObject

	static resetSystemTimeZone(): void;

	static setAbbreviationDictionary(dict: NSDictionary<string, string>): void;

	static setDefaultTimeZone(aTimeZone: NSTimeZone): void;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static systemTimeZone(): NSTimeZone;

	static timeZoneDataVersion(): string;

	static timeZoneForSecondsFromGMT(seconds: number): NSTimeZone;

	static timeZoneWithAbbreviation(abbreviation: string): NSTimeZone;

	static timeZoneWithName(tzName: string): NSTimeZone;

	static timeZoneWithNameData(tzName: string, aData: NSData): NSTimeZone;

	/* readonly */ abbreviation: string;

	/* readonly */ data: NSData;

	/* readonly */ daylightSavingTime: boolean;

	/* readonly */ daylightSavingTimeOffset: number;

	/* readonly */ name: string;

	/* readonly */ nextDaylightSavingTimeTransition: Date;

	/* readonly */ secondsFromGMT: number;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { name: string; });

	constructor(o: { name: string; data: NSData; });

	abbreviationForDate(aDate: Date): string;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	daylightSavingTimeOffsetForDate(aDate: Date): number;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	isDaylightSavingTimeForDate(aDate: Date): boolean;

	isEqualToTimeZone(aTimeZone: NSTimeZone): boolean;

	localizedNameLocale(style: NSTimeZoneNameStyle, locale: NSLocale): string;

	nextDaylightSavingTimeTransitionAfterDate(aDate: Date): Date;

	secondsFromGMTForDate(aDate: Date): number;

	self(): NSTimeZone; // inherited from NSObjectProtocol
}

declare const enum NSTimeZoneNameStyle {

	Standard = 0,

	ShortStandard = 1,

	DaylightSaving = 2,

	ShortDaylightSaving = 3,

	Generic = 4,

	ShortGeneric = 5
}

declare class NSTimer extends NSObject {

	static alloc(): NSTimer; // inherited from NSObject

	static new(): NSTimer; // inherited from NSObject

	static scheduledTimerWithTimeIntervalInvocationRepeats(ti: number, invocation: NSInvocation, yesOrNo: boolean): NSTimer;

	static scheduledTimerWithTimeIntervalTargetSelectorUserInfoRepeats(ti: number, aTarget: any, aSelector: string, userInfo: any, yesOrNo: boolean): NSTimer;

	static timerWithTimeIntervalInvocationRepeats(ti: number, invocation: NSInvocation, yesOrNo: boolean): NSTimer;

	static timerWithTimeIntervalTargetSelectorUserInfoRepeats(ti: number, aTarget: any, aSelector: string, userInfo: any, yesOrNo: boolean): NSTimer;

	fireDate: Date;

	/* readonly */ timeInterval: number;

	tolerance: number;

	/* readonly */ userInfo: any;

	/* readonly */ valid: boolean;

	constructor(); // inherited from NSObject

	constructor(o: { fireDate: Date; interval: number; target: any; selector: string; userInfo: any; repeats: boolean; });

	fire(): void;

	invalidate(): void;

	self(): NSTimer; // inherited from NSObjectProtocol
}

declare class NSURL extends NSObject implements NSCopying, NSSecureCoding, QLPreviewItem {

	static URLByResolvingAliasFileAtURLOptionsError(url: NSURL, options: NSURLBookmarkResolutionOptions): NSURL;

	static URLByResolvingBookmarkDataOptionsRelativeToURLBookmarkDataIsStaleError(bookmarkData: NSData, options: NSURLBookmarkResolutionOptions, relativeURL: NSURL, isStale: interop.Reference<boolean>): NSURL;

	static URLWithDataRepresentationRelativeToURL(data: NSData, baseURL: NSURL): NSURL;

	static URLWithString(URLString: string): NSURL;

	static URLWithStringRelativeToURL(URLString: string, baseURL: NSURL): NSURL;

	static absoluteURLWithDataRepresentationRelativeToURL(data: NSData, baseURL: NSURL): NSURL;

	static alloc(): NSURL; // inherited from NSObject

	static bookmarkDataWithContentsOfURLError(bookmarkFileURL: NSURL): NSData;

	static fileURLWithFileSystemRepresentationIsDirectoryRelativeToURL(path: string, isDir: boolean, baseURL: NSURL): NSURL;

	static fileURLWithPath(path: string): NSURL;

	static fileURLWithPathComponents(components: NSArray<string>): NSURL;

	static fileURLWithPathIsDirectory(path: string, isDir: boolean): NSURL;

	static fileURLWithPathIsDirectoryRelativeToURL(path: string, isDir: boolean, baseURL: NSURL): NSURL;

	static fileURLWithPathRelativeToURL(path: string, baseURL: NSURL): NSURL;

	static new(): NSURL; // inherited from NSObject

	static resourceValuesForKeysFromBookmarkData(keys: NSArray<string>, bookmarkData: NSData): NSDictionary<string, any>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static writeBookmarkDataToURLOptionsError(bookmarkData: NSData, bookmarkFileURL: NSURL, options: number): boolean;

	/* readonly */ URLByDeletingLastPathComponent: NSURL;

	/* readonly */ URLByDeletingPathExtension: NSURL;

	/* readonly */ URLByResolvingSymlinksInPath: NSURL;

	/* readonly */ URLByStandardizingPath: NSURL;

	/* readonly */ absoluteString: string;

	/* readonly */ absoluteURL: NSURL;

	/* readonly */ baseURL: NSURL;

	/* readonly */ dataRepresentation: NSData;

	/* readonly */ filePathURL: NSURL;

	/* readonly */ fileSystemRepresentation: string;

	/* readonly */ fileURL: boolean;

	/* readonly */ fragment: string;

	/* readonly */ hasDirectoryPath: boolean;

	/* readonly */ host: string;

	/* readonly */ lastPathComponent: string;

	/* readonly */ parameterString: string;

	/* readonly */ password: string;

	/* readonly */ path: string;

	/* readonly */ pathComponents: NSArray<string>;

	/* readonly */ pathExtension: string;

	/* readonly */ port: number;

	/* readonly */ query: string;

	/* readonly */ relativePath: string;

	/* readonly */ relativeString: string;

	/* readonly */ resourceSpecifier: string;

	/* readonly */ scheme: string;

	/* readonly */ standardizedURL: NSURL;

	/* readonly */ user: string;

	/* readonly */ previewItemTitle: string; // inherited from QLPreviewItem

	/* readonly */ previewItemURL: NSURL; // inherited from QLPreviewItem

	constructor(); // inherited from NSObject

	constructor(o: { absoluteURLWithDataRepresentation: NSData; relativeToURL: NSURL; });

	constructor(o: { byResolvingBookmarkData: NSData; options: NSURLBookmarkResolutionOptions; relativeToURL: NSURL; bookmarkDataIsStale: interop.Reference<boolean>; });

	constructor(o: { fileURLWithFileSystemRepresentation: string; isDirectory: boolean; relativeToURL: NSURL; });

	constructor(o: { fileURLWithPath: string; });

	constructor(o: { fileURLWithPath: string; isDirectory: boolean; });

	constructor(o: { fileURLWithPath: string; isDirectory: boolean; relativeToURL: NSURL; });

	constructor(o: { fileURLWithPath: string; relativeToURL: NSURL; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { dataRepresentation: NSData; relativeToURL: NSURL; });

	constructor(o: { scheme: string; host: string; path: string; });

	constructor(o: { string: string; });

	constructor(o: { string: string; relativeToURL: NSURL; });

	URLByAppendingPathComponent(pathComponent: string): NSURL;

	URLByAppendingPathComponentIsDirectory(pathComponent: string, isDirectory: boolean): NSURL;

	URLByAppendingPathExtension(pathExtension: string): NSURL;

	bookmarkDataWithOptionsIncludingResourceValuesForKeysRelativeToURLError(options: NSURLBookmarkCreationOptions, keys: NSArray<string>, relativeURL: NSURL): NSData;

	checkPromisedItemIsReachableAndReturnError(): boolean;

	checkResourceIsReachableAndReturnError(): boolean;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	fileReferenceURL(): NSURL;

	getFileSystemRepresentationMaxLength(buffer: string, maxBufferLength: number): boolean;

	getPromisedItemResourceValueForKeyError(value: interop.Reference<any>, key: string): boolean;

	getResourceValueForKeyError(value: interop.Reference<any>, key: string): boolean;

	isFileReferenceURL(): boolean;

	nxoauth2_URLByAddingParameters(parameters: NSDictionary<any, any>): NSURL;

	nxoauth2_URLStringWithoutQueryString(): string;

	nxoauth2_URLWithoutQueryString(): NSURL;

	nxoauth2_valueForQueryParameterKey(key: string): string;

	promisedItemResourceValuesForKeysError(keys: NSArray<string>): NSDictionary<string, any>;

	removeAllCachedResourceValues(): void;

	removeCachedResourceValueForKey(key: string): void;

	resourceValuesForKeysError(keys: NSArray<string>): NSDictionary<string, any>;

	self(): NSURL; // inherited from NSObjectProtocol

	setResourceValueForKeyError(value: any, key: string): boolean;

	setResourceValuesError(keyedValues: NSDictionary<string, any>): boolean;

	setTemporaryResourceValueForKey(value: any, key: string): void;

	startAccessingSecurityScopedResource(): boolean;

	stopAccessingSecurityScopedResource(): void;
}

declare var NSURLAddedToDirectoryDateKey: string;

declare var NSURLAttributeModificationDateKey: string;

declare class NSURLAuthenticationChallenge extends NSObject implements NSSecureCoding {

	static alloc(): NSURLAuthenticationChallenge; // inherited from NSObject

	static new(): NSURLAuthenticationChallenge; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ error: NSError;

	/* readonly */ failureResponse: NSURLResponse;

	/* readonly */ previousFailureCount: number;

	/* readonly */ proposedCredential: NSURLCredential;

	/* readonly */ protectionSpace: NSURLProtectionSpace;

	/* readonly */ sender: NSURLAuthenticationChallengeSender;

	constructor(); // inherited from NSObject

	constructor(o: { authenticationChallenge: NSURLAuthenticationChallenge; sender: NSURLAuthenticationChallengeSender; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { protectionSpace: NSURLProtectionSpace; proposedCredential: NSURLCredential; previousFailureCount: number; failureResponse: NSURLResponse; error: NSError; sender: NSURLAuthenticationChallengeSender; });

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NSURLAuthenticationChallenge; // inherited from NSObjectProtocol
}

interface NSURLAuthenticationChallengeSender extends NSObjectProtocol {

	cancelAuthenticationChallenge(challenge: NSURLAuthenticationChallenge): void;

	continueWithoutCredentialForAuthenticationChallenge(challenge: NSURLAuthenticationChallenge): void;

	performDefaultHandlingForAuthenticationChallenge?(challenge: NSURLAuthenticationChallenge): void;

	rejectProtectionSpaceAndContinueWithChallenge?(challenge: NSURLAuthenticationChallenge): void;

	useCredentialForAuthenticationChallenge(credential: NSURLCredential, challenge: NSURLAuthenticationChallenge): void;
}
declare var NSURLAuthenticationChallengeSender: {

	prototype: NSURLAuthenticationChallengeSender;
};

declare var NSURLAuthenticationMethodClientCertificate: string;

declare var NSURLAuthenticationMethodDefault: string;

declare var NSURLAuthenticationMethodHTMLForm: string;

declare var NSURLAuthenticationMethodHTTPBasic: string;

declare var NSURLAuthenticationMethodHTTPDigest: string;

declare var NSURLAuthenticationMethodNTLM: string;

declare var NSURLAuthenticationMethodNegotiate: string;

declare var NSURLAuthenticationMethodServerTrust: string;

declare const enum NSURLBookmarkCreationOptions {

	PreferFileIDResolution = 256,

	MinimalBookmark = 512,

	SuitableForBookmarkFile = 1024,

	WithSecurityScope = 2048,

	SecurityScopeAllowOnlyReadAccess = 4096
}

declare const enum NSURLBookmarkResolutionOptions {

	WithoutUI = 256,

	WithoutMounting = 512,

	WithSecurityScope = 1024
}

declare class NSURLCache extends NSObject {

	static alloc(): NSURLCache; // inherited from NSObject

	static new(): NSURLCache; // inherited from NSObject

	static setSharedURLCache(cache: NSURLCache): void;

	static sharedURLCache(): NSURLCache;

	/* readonly */ currentDiskUsage: number;

	/* readonly */ currentMemoryUsage: number;

	diskCapacity: number;

	memoryCapacity: number;

	constructor(); // inherited from NSObject

	constructor(o: { memoryCapacity: number; diskCapacity: number; diskPath: string; });

	cachedResponseForRequest(request: NSURLRequest): NSCachedURLResponse;

	getCachedResponseForDataTaskCompletionHandler(dataTask: NSURLSessionDataTask, completionHandler: (p1: NSCachedURLResponse) => void): void;

	removeAllCachedResponses(): void;

	removeCachedResponseForDataTask(dataTask: NSURLSessionDataTask): void;

	removeCachedResponseForRequest(request: NSURLRequest): void;

	removeCachedResponsesSinceDate(date: Date): void;

	self(): NSURLCache; // inherited from NSObjectProtocol

	storeCachedResponseForDataTask(cachedResponse: NSCachedURLResponse, dataTask: NSURLSessionDataTask): void;

	storeCachedResponseForRequest(cachedResponse: NSCachedURLResponse, request: NSURLRequest): void;
}

declare const enum NSURLCacheStoragePolicy {

	Allowed = 0,

	AllowedInMemoryOnly = 1,

	NotAllowed = 2
}

declare class NSURLComponents extends NSObject implements NSCopying {

	static alloc(): NSURLComponents; // inherited from NSObject

	static componentsWithString(URLString: string): NSURLComponents;

	static componentsWithURLResolvingAgainstBaseURL(url: NSURL, resolve: boolean): NSURLComponents;

	static new(): NSURLComponents; // inherited from NSObject

	/* readonly */ URL: NSURL;

	fragment: string;

	host: string;

	password: string;

	path: string;

	percentEncodedFragment: string;

	percentEncodedHost: string;

	percentEncodedPassword: string;

	percentEncodedPath: string;

	percentEncodedQuery: string;

	percentEncodedUser: string;

	port: number;

	query: string;

	queryItems: NSArray<NSURLQueryItem>;

	/* readonly */ rangeOfFragment: NSRange;

	/* readonly */ rangeOfHost: NSRange;

	/* readonly */ rangeOfPassword: NSRange;

	/* readonly */ rangeOfPath: NSRange;

	/* readonly */ rangeOfPort: NSRange;

	/* readonly */ rangeOfQuery: NSRange;

	/* readonly */ rangeOfScheme: NSRange;

	/* readonly */ rangeOfUser: NSRange;

	scheme: string;

	/* readonly */ string: string;

	user: string;

	constructor(); // inherited from NSObject

	constructor(o: { string: string; });

	constructor(o: { URL: NSURL; resolvingAgainstBaseURL: boolean; });

	URLRelativeToURL(baseURL: NSURL): NSURL;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): NSURLComponents; // inherited from NSObjectProtocol
}

declare class NSURLConnection extends NSObject {

	static alloc(): NSURLConnection; // inherited from NSObject

	static canHandleRequest(request: NSURLRequest): boolean;

	static connectionWithRequestDelegate(request: NSURLRequest, delegate: any): NSURLConnection;

	static new(): NSURLConnection; // inherited from NSObject

	static sendAsynchronousRequestQueueCompletionHandler(request: NSURLRequest, queue: NSOperationQueue, handler: (p1: NSURLResponse, p2: NSData, p3: NSError) => void): void;

	static sendSynchronousRequestReturningResponseError(request: NSURLRequest, response: interop.Reference<NSURLResponse>): NSData;

	/* readonly */ currentRequest: NSURLRequest;

	/* readonly */ newsstandAssetDownload: NKAssetDownload;

	/* readonly */ originalRequest: NSURLRequest;

	constructor(); // inherited from NSObject

	constructor(o: { request: NSURLRequest; delegate: any; });

	constructor(o: { request: NSURLRequest; delegate: any; startImmediately: boolean; });

	cancel(): void;

	scheduleInRunLoopForMode(aRunLoop: NSRunLoop, mode: string): void;

	self(): NSURLConnection; // inherited from NSObjectProtocol

	setDelegateQueue(queue: NSOperationQueue): void;

	start(): void;

	unscheduleFromRunLoopForMode(aRunLoop: NSRunLoop, mode: string): void;
}

interface NSURLConnectionDataDelegate extends NSURLConnectionDelegate {

	connectionDidFinishLoading?(connection: NSURLConnection): void;

	connectionDidReceiveData?(connection: NSURLConnection, data: NSData): void;

	connectionDidReceiveResponse?(connection: NSURLConnection, response: NSURLResponse): void;

	connectionDidSendBodyDataTotalBytesWrittenTotalBytesExpectedToWrite?(connection: NSURLConnection, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;

	connectionNeedNewBodyStream?(connection: NSURLConnection, request: NSURLRequest): NSInputStream;

	connectionWillCacheResponse?(connection: NSURLConnection, cachedResponse: NSCachedURLResponse): NSCachedURLResponse;

	connectionWillSendRequestRedirectResponse?(connection: NSURLConnection, request: NSURLRequest, response: NSURLResponse): NSURLRequest;
}
declare var NSURLConnectionDataDelegate: {

	prototype: NSURLConnectionDataDelegate;
};

interface NSURLConnectionDelegate extends NSObjectProtocol {

	connectionCanAuthenticateAgainstProtectionSpace?(connection: NSURLConnection, protectionSpace: NSURLProtectionSpace): boolean;

	connectionDidCancelAuthenticationChallenge?(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionDidFailWithError?(connection: NSURLConnection, error: NSError): void;

	connectionDidReceiveAuthenticationChallenge?(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionShouldUseCredentialStorage?(connection: NSURLConnection): boolean;

	connectionWillSendRequestForAuthenticationChallenge?(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;
}
declare var NSURLConnectionDelegate: {

	prototype: NSURLConnectionDelegate;
};

interface NSURLConnectionDownloadDelegate extends NSURLConnectionDelegate {

	connectionDidFinishDownloadingDestinationURL(connection: NSURLConnection, destinationURL: NSURL): void;

	connectionDidResumeDownloadingTotalBytesWrittenExpectedTotalBytes?(connection: NSURLConnection, totalBytesWritten: number, expectedTotalBytes: number): void;

	connectionDidWriteDataTotalBytesWrittenExpectedTotalBytes?(connection: NSURLConnection, bytesWritten: number, totalBytesWritten: number, expectedTotalBytes: number): void;
}
declare var NSURLConnectionDownloadDelegate: {

	prototype: NSURLConnectionDownloadDelegate;
};

declare var NSURLContentAccessDateKey: string;

declare var NSURLContentModificationDateKey: string;

declare var NSURLCreationDateKey: string;

declare class NSURLCredential extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSURLCredential; // inherited from NSObject

	static credentialForTrust(trust: any): NSURLCredential;

	static credentialWithIdentityCertificatesPersistence(identity: any, certArray: NSArray<any>, persistence: NSURLCredentialPersistence): NSURLCredential;

	static credentialWithUserPasswordPersistence(user: string, password: string, persistence: NSURLCredentialPersistence): NSURLCredential;

	static new(): NSURLCredential; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ certificates: NSArray<any>;

	/* readonly */ hasPassword: boolean;

	/* readonly */ identity: any;

	/* readonly */ password: string;

	/* readonly */ persistence: NSURLCredentialPersistence;

	/* readonly */ user: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { identity: any; certificates: NSArray<any>; persistence: NSURLCredentialPersistence; });

	constructor(o: { trust: any; });

	constructor(o: { user: string; password: string; persistence: NSURLCredentialPersistence; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NSURLCredential; // inherited from NSObjectProtocol
}

declare const enum NSURLCredentialPersistence {

	None = 0,

	ForSession = 1,

	Permanent = 2,

	Synchronizable = 3
}

declare class NSURLCredentialStorage extends NSObject {

	static alloc(): NSURLCredentialStorage; // inherited from NSObject

	static new(): NSURLCredentialStorage; // inherited from NSObject

	static sharedCredentialStorage(): NSURLCredentialStorage;

	/* readonly */ allCredentials: NSDictionary<NSURLProtectionSpace, NSDictionary<string, NSURLCredential>>;

	constructor(); // inherited from NSObject

	credentialsForProtectionSpace(space: NSURLProtectionSpace): NSDictionary<string, NSURLCredential>;

	defaultCredentialForProtectionSpace(space: NSURLProtectionSpace): NSURLCredential;

	getCredentialsForProtectionSpaceTaskCompletionHandler(protectionSpace: NSURLProtectionSpace, task: NSURLSessionTask, completionHandler: (p1: NSDictionary<string, NSURLCredential>) => void): void;

	getDefaultCredentialForProtectionSpaceTaskCompletionHandler(space: NSURLProtectionSpace, task: NSURLSessionTask, completionHandler: (p1: NSURLCredential) => void): void;

	removeCredentialForProtectionSpace(credential: NSURLCredential, space: NSURLProtectionSpace): void;

	removeCredentialForProtectionSpaceOptions(credential: NSURLCredential, space: NSURLProtectionSpace, options: NSDictionary<string, any>): void;

	removeCredentialForProtectionSpaceOptionsTask(credential: NSURLCredential, protectionSpace: NSURLProtectionSpace, options: NSDictionary<string, any>, task: NSURLSessionTask): void;

	self(): NSURLCredentialStorage; // inherited from NSObjectProtocol

	setCredentialForProtectionSpace(credential: NSURLCredential, space: NSURLProtectionSpace): void;

	setCredentialForProtectionSpaceTask(credential: NSURLCredential, protectionSpace: NSURLProtectionSpace, task: NSURLSessionTask): void;

	setDefaultCredentialForProtectionSpace(credential: NSURLCredential, space: NSURLProtectionSpace): void;

	setDefaultCredentialForProtectionSpaceTask(credential: NSURLCredential, protectionSpace: NSURLProtectionSpace, task: NSURLSessionTask): void;
}

declare var NSURLCredentialStorageChangedNotification: string;

declare var NSURLCredentialStorageRemoveSynchronizableCredentials: string;

declare var NSURLCustomIconKey: string;

declare var NSURLDocumentIdentifierKey: string;

declare var NSURLEffectiveIconKey: string;

declare var NSURLErrorBackgroundTaskCancelledReasonKey: string;

declare var NSURLErrorDomain: string;

declare var NSURLErrorFailingURLErrorKey: string;

declare var NSURLErrorFailingURLPeerTrustErrorKey: string;

declare var NSURLErrorFailingURLStringErrorKey: string;

declare var NSURLErrorKey: string;

declare var NSURLFileAllocatedSizeKey: string;

declare var NSURLFileProtectionComplete: string;

declare var NSURLFileProtectionCompleteUnlessOpen: string;

declare var NSURLFileProtectionCompleteUntilFirstUserAuthentication: string;

declare var NSURLFileProtectionKey: string;

declare var NSURLFileProtectionNone: string;

declare var NSURLFileResourceIdentifierKey: string;

declare var NSURLFileResourceTypeBlockSpecial: string;

declare var NSURLFileResourceTypeCharacterSpecial: string;

declare var NSURLFileResourceTypeDirectory: string;

declare var NSURLFileResourceTypeKey: string;

declare var NSURLFileResourceTypeNamedPipe: string;

declare var NSURLFileResourceTypeRegular: string;

declare var NSURLFileResourceTypeSocket: string;

declare var NSURLFileResourceTypeSymbolicLink: string;

declare var NSURLFileResourceTypeUnknown: string;

declare var NSURLFileScheme: string;

declare var NSURLFileSecurityKey: string;

declare var NSURLFileSizeKey: string;

declare var NSURLGenerationIdentifierKey: string;

declare var NSURLHasHiddenExtensionKey: string;

declare var NSURLIsAliasFileKey: string;

declare var NSURLIsApplicationKey: string;

declare var NSURLIsDirectoryKey: string;

declare var NSURLIsExcludedFromBackupKey: string;

declare var NSURLIsExecutableKey: string;

declare var NSURLIsHiddenKey: string;

declare var NSURLIsMountTriggerKey: string;

declare var NSURLIsPackageKey: string;

declare var NSURLIsReadableKey: string;

declare var NSURLIsRegularFileKey: string;

declare var NSURLIsSymbolicLinkKey: string;

declare var NSURLIsSystemImmutableKey: string;

declare var NSURLIsUbiquitousItemKey: string;

declare var NSURLIsUserImmutableKey: string;

declare var NSURLIsVolumeKey: string;

declare var NSURLIsWritableKey: string;

declare var NSURLKeysOfUnsetValuesKey: string;

declare var NSURLLabelColorKey: string;

declare var NSURLLabelNumberKey: string;

declare var NSURLLinkCountKey: string;

declare var NSURLLocalizedLabelKey: string;

declare var NSURLLocalizedNameKey: string;

declare var NSURLLocalizedTypeDescriptionKey: string;

declare var NSURLNameKey: string;

declare var NSURLParentDirectoryURLKey: string;

declare var NSURLPathKey: string;

declare var NSURLPreferredIOBlockSizeKey: string;

declare class NSURLProtectionSpace extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSURLProtectionSpace; // inherited from NSObject

	static new(): NSURLProtectionSpace; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ authenticationMethod: string;

	/* readonly */ distinguishedNames: NSArray<NSData>;

	/* readonly */ host: string;

	/* readonly */ isProxy: boolean;

	/* readonly */ port: number;

	/* readonly */ protocol: string;

	/* readonly */ proxyType: string;

	/* readonly */ realm: string;

	/* readonly */ receivesCredentialSecurely: boolean;

	/* readonly */ serverTrust: any;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { host: string; port: number; protocol: string; realm: string; authenticationMethod: string; });

	constructor(o: { proxyHost: string; port: number; type: string; realm: string; authenticationMethod: string; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NSURLProtectionSpace; // inherited from NSObjectProtocol
}

declare var NSURLProtectionSpaceFTP: string;

declare var NSURLProtectionSpaceFTPProxy: string;

declare var NSURLProtectionSpaceHTTP: string;

declare var NSURLProtectionSpaceHTTPProxy: string;

declare var NSURLProtectionSpaceHTTPS: string;

declare var NSURLProtectionSpaceHTTPSProxy: string;

declare var NSURLProtectionSpaceSOCKSProxy: string;

declare class NSURLProtocol extends NSObject {

	static alloc(): NSURLProtocol; // inherited from NSObject

	static canInitWithRequest(request: NSURLRequest): boolean;

	static canInitWithTask(task: NSURLSessionTask): boolean;

	static canonicalRequestForRequest(request: NSURLRequest): NSURLRequest;

	static new(): NSURLProtocol; // inherited from NSObject

	static propertyForKeyInRequest(key: string, request: NSURLRequest): any;

	static registerClass(protocolClass: typeof NSObject): boolean;

	static removePropertyForKeyInRequest(key: string, request: NSMutableURLRequest): void;

	static requestIsCacheEquivalentToRequest(a: NSURLRequest, b: NSURLRequest): boolean;

	static setPropertyForKeyInRequest(value: any, key: string, request: NSMutableURLRequest): void;

	static unregisterClass(protocolClass: typeof NSObject): void;

	/* readonly */ cachedResponse: NSCachedURLResponse;

	/* readonly */ client: NSURLProtocolClient;

	/* readonly */ request: NSURLRequest;

	/* readonly */ task: NSURLSessionTask;

	constructor(); // inherited from NSObject

	constructor(o: { request: NSURLRequest; cachedResponse: NSCachedURLResponse; client: NSURLProtocolClient; });

	constructor(o: { task: NSURLSessionTask; cachedResponse: NSCachedURLResponse; client: NSURLProtocolClient; });

	self(): NSURLProtocol; // inherited from NSObjectProtocol

	startLoading(): void;

	stopLoading(): void;
}

interface NSURLProtocolClient extends NSObjectProtocol {

	URLProtocolCachedResponseIsValid(protocol: NSURLProtocol, cachedResponse: NSCachedURLResponse): void;

	URLProtocolDidCancelAuthenticationChallenge(protocol: NSURLProtocol, challenge: NSURLAuthenticationChallenge): void;

	URLProtocolDidFailWithError(protocol: NSURLProtocol, error: NSError): void;

	URLProtocolDidFinishLoading(protocol: NSURLProtocol): void;

	URLProtocolDidLoadData(protocol: NSURLProtocol, data: NSData): void;

	URLProtocolDidReceiveAuthenticationChallenge(protocol: NSURLProtocol, challenge: NSURLAuthenticationChallenge): void;

	URLProtocolDidReceiveResponseCacheStoragePolicy(protocol: NSURLProtocol, response: NSURLResponse, policy: NSURLCacheStoragePolicy): void;

	URLProtocolWasRedirectedToRequestRedirectResponse(protocol: NSURLProtocol, request: NSURLRequest, redirectResponse: NSURLResponse): void;
}
declare var NSURLProtocolClient: {

	prototype: NSURLProtocolClient;
};

declare class NSURLQueryItem extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSURLQueryItem; // inherited from NSObject

	static new(): NSURLQueryItem; // inherited from NSObject

	static queryItemWithNameValue(name: string, value: string): NSURLQueryItem;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ name: string;

	/* readonly */ value: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { name: string; value: string; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NSURLQueryItem; // inherited from NSObjectProtocol
}

declare const enum NSURLRelationship {

	Contains = 0,

	Same = 1,

	Other = 2
}

declare class NSURLRequest extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	static alloc(): NSURLRequest; // inherited from NSObject

	static new(): NSURLRequest; // inherited from NSObject

	static requestWithURL(URL: NSURL): NSURLRequest;

	static requestWithURLCachePolicyTimeoutInterval(URL: NSURL, cachePolicy: NSURLRequestCachePolicy, timeoutInterval: number): NSURLRequest;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ HTTPBody: NSData;

	/* readonly */ HTTPBodyStream: NSInputStream;

	/* readonly */ HTTPMethod: string;

	/* readonly */ HTTPShouldHandleCookies: boolean;

	/* readonly */ HTTPShouldUsePipelining: boolean;

	/* readonly */ URL: NSURL;

	/* readonly */ allHTTPHeaderFields: NSDictionary<string, string>;

	/* readonly */ allowsCellularAccess: boolean;

	/* readonly */ cachePolicy: NSURLRequestCachePolicy;

	/* readonly */ mainDocumentURL: NSURL;

	/* readonly */ networkServiceType: NSURLRequestNetworkServiceType;

	/* readonly */ timeoutInterval: number;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { URL: NSURL; });

	constructor(o: { URL: NSURL; cachePolicy: NSURLRequestCachePolicy; timeoutInterval: number; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	mutableCopyWithZone(zone: interop.Pointer): any; // inherited from NSMutableCopying

	self(): NSURLRequest; // inherited from NSObjectProtocol

	valueForHTTPHeaderField(field: string): string;
}

declare const enum NSURLRequestCachePolicy {

	UseProtocolCachePolicy = 0,

	ReloadIgnoringLocalCacheData = 1,

	ReloadIgnoringLocalAndRemoteCacheData = 4,

	ReloadIgnoringCacheData = 1,

	ReturnCacheDataElseLoad = 2,

	ReturnCacheDataDontLoad = 3,

	ReloadRevalidatingCacheData = 5
}

declare const enum NSURLRequestNetworkServiceType {

	NetworkServiceTypeDefault = 0,

	NetworkServiceTypeVoIP = 1,

	NetworkServiceTypeVideo = 2,

	NetworkServiceTypeBackground = 3,

	NetworkServiceTypeVoice = 4
}

declare class NSURLResponse extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSURLResponse; // inherited from NSObject

	static new(): NSURLResponse; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ MIMEType: string;

	/* readonly */ URL: NSURL;

	/* readonly */ expectedContentLength: number;

	/* readonly */ suggestedFilename: string;

	/* readonly */ textEncodingName: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { URL: NSURL; MIMEType: string; expectedContentLength: number; textEncodingName: string; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NSURLResponse; // inherited from NSObjectProtocol
}

declare class NSURLSession extends NSObject {

	static alloc(): NSURLSession; // inherited from NSObject

	static new(): NSURLSession; // inherited from NSObject

	static sessionWithConfiguration(configuration: NSURLSessionConfiguration): NSURLSession;

	static sessionWithConfigurationDelegateDelegateQueue(configuration: NSURLSessionConfiguration, delegate: NSURLSessionDelegate, queue: NSOperationQueue): NSURLSession;

	static sharedSession(): NSURLSession;

	/* readonly */ configuration: NSURLSessionConfiguration;

	/* readonly */ delegate: NSURLSessionDelegate;

	/* readonly */ delegateQueue: NSOperationQueue;

	sessionDescription: string;

	constructor(); // inherited from NSObject

	dataTaskWithRequest(request: NSURLRequest): NSURLSessionDataTask;

	dataTaskWithRequestCompletionHandler(request: NSURLRequest, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): NSURLSessionDataTask;

	dataTaskWithURL(url: NSURL): NSURLSessionDataTask;

	dataTaskWithURLCompletionHandler(url: NSURL, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): NSURLSessionDataTask;

	downloadTaskWithRequest(request: NSURLRequest): NSURLSessionDownloadTask;

	downloadTaskWithRequestCompletionHandler(request: NSURLRequest, completionHandler: (p1: NSURL, p2: NSURLResponse, p3: NSError) => void): NSURLSessionDownloadTask;

	downloadTaskWithResumeData(resumeData: NSData): NSURLSessionDownloadTask;

	downloadTaskWithResumeDataCompletionHandler(resumeData: NSData, completionHandler: (p1: NSURL, p2: NSURLResponse, p3: NSError) => void): NSURLSessionDownloadTask;

	downloadTaskWithURL(url: NSURL): NSURLSessionDownloadTask;

	downloadTaskWithURLCompletionHandler(url: NSURL, completionHandler: (p1: NSURL, p2: NSURLResponse, p3: NSError) => void): NSURLSessionDownloadTask;

	finishTasksAndInvalidate(): void;

	flushWithCompletionHandler(completionHandler: () => void): void;

	getAllTasksWithCompletionHandler(completionHandler: (p1: NSArray<NSURLSessionTask>) => void): void;

	getTasksWithCompletionHandler(completionHandler: (p1: NSArray<NSURLSessionDataTask>, p2: NSArray<NSURLSessionUploadTask>, p3: NSArray<NSURLSessionDownloadTask>) => void): void;

	invalidateAndCancel(): void;

	resetWithCompletionHandler(completionHandler: () => void): void;

	self(): NSURLSession; // inherited from NSObjectProtocol

	streamTaskWithHostNamePort(hostname: string, port: number): NSURLSessionStreamTask;

	streamTaskWithNetService(service: NSNetService): NSURLSessionStreamTask;

	uploadTaskWithRequestFromData(request: NSURLRequest, bodyData: NSData): NSURLSessionUploadTask;

	uploadTaskWithRequestFromDataCompletionHandler(request: NSURLRequest, bodyData: NSData, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): NSURLSessionUploadTask;

	uploadTaskWithRequestFromFile(request: NSURLRequest, fileURL: NSURL): NSURLSessionUploadTask;

	uploadTaskWithRequestFromFileCompletionHandler(request: NSURLRequest, fileURL: NSURL, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): NSURLSessionUploadTask;

	uploadTaskWithStreamedRequest(request: NSURLRequest): NSURLSessionUploadTask;
}

declare const enum NSURLSessionAuthChallengeDisposition {

	UseCredential = 0,

	PerformDefaultHandling = 1,

	CancelAuthenticationChallenge = 2,

	RejectProtectionSpace = 3
}

declare class NSURLSessionConfiguration extends NSObject implements NSCopying {

	static alloc(): NSURLSessionConfiguration; // inherited from NSObject

	static backgroundSessionConfiguration(identifier: string): NSURLSessionConfiguration;

	static backgroundSessionConfigurationWithIdentifier(identifier: string): NSURLSessionConfiguration;

	static defaultSessionConfiguration(): NSURLSessionConfiguration;

	static ephemeralSessionConfiguration(): NSURLSessionConfiguration;

	static new(): NSURLSessionConfiguration; // inherited from NSObject

	HTTPAdditionalHeaders: NSDictionary<any, any>;

	HTTPCookieAcceptPolicy: NSHTTPCookieAcceptPolicy;

	HTTPCookieStorage: NSHTTPCookieStorage;

	HTTPMaximumConnectionsPerHost: number;

	HTTPShouldSetCookies: boolean;

	HTTPShouldUsePipelining: boolean;

	TLSMaximumSupportedProtocol: SSLProtocol;

	TLSMinimumSupportedProtocol: SSLProtocol;

	URLCache: NSURLCache;

	URLCredentialStorage: NSURLCredentialStorage;

	allowsCellularAccess: boolean;

	connectionProxyDictionary: NSDictionary<any, any>;

	discretionary: boolean;

	/* readonly */ identifier: string;

	networkServiceType: NSURLRequestNetworkServiceType;

	protocolClasses: NSArray<typeof NSObject>;

	requestCachePolicy: NSURLRequestCachePolicy;

	sessionSendsLaunchEvents: boolean;

	sharedContainerIdentifier: string;

	shouldUseExtendedBackgroundIdleMode: boolean;

	timeoutIntervalForRequest: number;

	timeoutIntervalForResource: number;

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): NSURLSessionConfiguration; // inherited from NSObjectProtocol
}

interface NSURLSessionDataDelegate extends NSURLSessionTaskDelegate {

	URLSessionDataTaskDidBecomeDownloadTask?(session: NSURLSession, dataTask: NSURLSessionDataTask, downloadTask: NSURLSessionDownloadTask): void;

	URLSessionDataTaskDidBecomeStreamTask?(session: NSURLSession, dataTask: NSURLSessionDataTask, streamTask: NSURLSessionStreamTask): void;

	URLSessionDataTaskDidReceiveData?(session: NSURLSession, dataTask: NSURLSessionDataTask, data: NSData): void;

	URLSessionDataTaskDidReceiveResponseCompletionHandler?(session: NSURLSession, dataTask: NSURLSessionDataTask, response: NSURLResponse, completionHandler: (p1: NSURLSessionResponseDisposition) => void): void;

	URLSessionDataTaskWillCacheResponseCompletionHandler?(session: NSURLSession, dataTask: NSURLSessionDataTask, proposedResponse: NSCachedURLResponse, completionHandler: (p1: NSCachedURLResponse) => void): void;
}
declare var NSURLSessionDataDelegate: {

	prototype: NSURLSessionDataDelegate;
};

declare class NSURLSessionDataTask extends NSURLSessionTask {
}

interface NSURLSessionDelegate extends NSObjectProtocol {

	URLSessionDidBecomeInvalidWithError?(session: NSURLSession, error: NSError): void;

	URLSessionDidFinishEventsForBackgroundURLSession?(session: NSURLSession): void;

	URLSessionDidReceiveChallengeCompletionHandler?(session: NSURLSession, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;
}
declare var NSURLSessionDelegate: {

	prototype: NSURLSessionDelegate;
};

interface NSURLSessionDownloadDelegate extends NSURLSessionTaskDelegate {

	URLSessionDownloadTaskDidFinishDownloadingToURL(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, location: NSURL): void;

	URLSessionDownloadTaskDidResumeAtOffsetExpectedTotalBytes?(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, fileOffset: number, expectedTotalBytes: number): void;

	URLSessionDownloadTaskDidWriteDataTotalBytesWrittenTotalBytesExpectedToWrite?(session: NSURLSession, downloadTask: NSURLSessionDownloadTask, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;
}
declare var NSURLSessionDownloadDelegate: {

	prototype: NSURLSessionDownloadDelegate;
};

declare class NSURLSessionDownloadTask extends NSURLSessionTask {

	cancelByProducingResumeData(completionHandler: (p1: NSData) => void): void;
}

declare var NSURLSessionDownloadTaskResumeData: string;

declare const enum NSURLSessionResponseDisposition {

	Cancel = 0,

	Allow = 1,

	BecomeDownload = 2,

	BecomeStream = 3
}

interface NSURLSessionStreamDelegate extends NSURLSessionTaskDelegate {

	URLSessionBetterRouteDiscoveredForStreamTask?(session: NSURLSession, streamTask: NSURLSessionStreamTask): void;

	URLSessionReadClosedForStreamTask?(session: NSURLSession, streamTask: NSURLSessionStreamTask): void;

	URLSessionStreamTaskDidBecomeInputStreamOutputStream?(session: NSURLSession, streamTask: NSURLSessionStreamTask, inputStream: NSInputStream, outputStream: NSOutputStream): void;

	URLSessionWriteClosedForStreamTask?(session: NSURLSession, streamTask: NSURLSessionStreamTask): void;
}
declare var NSURLSessionStreamDelegate: {

	prototype: NSURLSessionStreamDelegate;
};

declare class NSURLSessionStreamTask extends NSURLSessionTask {

	captureStreams(): void;

	closeRead(): void;

	closeWrite(): void;

	readDataOfMinLengthMaxLengthTimeoutCompletionHandler(minBytes: number, maxBytes: number, timeout: number, completionHandler: (p1: NSData, p2: boolean, p3: NSError) => void): void;

	startSecureConnection(): void;

	stopSecureConnection(): void;

	writeDataTimeoutCompletionHandler(data: NSData, timeout: number, completionHandler: (p1: NSError) => void): void;
}

declare class NSURLSessionTask extends NSObject implements NSCopying {

	static alloc(): NSURLSessionTask; // inherited from NSObject

	static new(): NSURLSessionTask; // inherited from NSObject

	/* readonly */ countOfBytesExpectedToReceive: number;

	/* readonly */ countOfBytesExpectedToSend: number;

	/* readonly */ countOfBytesReceived: number;

	/* readonly */ countOfBytesSent: number;

	/* readonly */ currentRequest: NSURLRequest;

	/* readonly */ error: NSError;

	/* readonly */ originalRequest: NSURLRequest;

	priority: number;

	/* readonly */ response: NSURLResponse;

	/* readonly */ state: NSURLSessionTaskState;

	taskDescription: string;

	/* readonly */ taskIdentifier: number;

	constructor(); // inherited from NSObject

	cancel(): void;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	resume(): void;

	self(): NSURLSessionTask; // inherited from NSObjectProtocol

	suspend(): void;
}

interface NSURLSessionTaskDelegate extends NSURLSessionDelegate {

	URLSessionTaskDidCompleteWithError?(session: NSURLSession, task: NSURLSessionTask, error: NSError): void;

	URLSessionTaskDidReceiveChallengeCompletionHandler?(session: NSURLSession, task: NSURLSessionTask, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	URLSessionTaskDidSendBodyDataTotalBytesSentTotalBytesExpectedToSend?(session: NSURLSession, task: NSURLSessionTask, bytesSent: number, totalBytesSent: number, totalBytesExpectedToSend: number): void;

	URLSessionTaskNeedNewBodyStream?(session: NSURLSession, task: NSURLSessionTask, completionHandler: (p1: NSInputStream) => void): void;

	URLSessionTaskWillPerformHTTPRedirectionNewRequestCompletionHandler?(session: NSURLSession, task: NSURLSessionTask, response: NSHTTPURLResponse, request: NSURLRequest, completionHandler: (p1: NSURLRequest) => void): void;
}
declare var NSURLSessionTaskDelegate: {

	prototype: NSURLSessionTaskDelegate;
};

declare var NSURLSessionTaskPriorityDefault: number;

declare var NSURLSessionTaskPriorityHigh: number;

declare var NSURLSessionTaskPriorityLow: number;

declare const enum NSURLSessionTaskState {

	Running = 0,

	Suspended = 1,

	Canceling = 2,

	Completed = 3
}

declare var NSURLSessionTransferSizeUnknown: number;

declare class NSURLSessionUploadTask extends NSURLSessionDataTask {
}

declare var NSURLThumbnailDictionaryKey: string;

declare var NSURLTotalFileAllocatedSizeKey: string;

declare var NSURLTotalFileSizeKey: string;

declare var NSURLTypeIdentifierKey: string;

declare var NSURLUbiquitousItemContainerDisplayNameKey: string;

declare var NSURLUbiquitousItemDownloadRequestedKey: string;

declare var NSURLUbiquitousItemDownloadingErrorKey: string;

declare var NSURLUbiquitousItemDownloadingStatusCurrent: string;

declare var NSURLUbiquitousItemDownloadingStatusDownloaded: string;

declare var NSURLUbiquitousItemDownloadingStatusKey: string;

declare var NSURLUbiquitousItemDownloadingStatusNotDownloaded: string;

declare var NSURLUbiquitousItemHasUnresolvedConflictsKey: string;

declare var NSURLUbiquitousItemIsDownloadedKey: string;

declare var NSURLUbiquitousItemIsDownloadingKey: string;

declare var NSURLUbiquitousItemIsUploadedKey: string;

declare var NSURLUbiquitousItemIsUploadingKey: string;

declare var NSURLUbiquitousItemPercentDownloadedKey: string;

declare var NSURLUbiquitousItemPercentUploadedKey: string;

declare var NSURLUbiquitousItemUploadingErrorKey: string;

declare var NSURLVolumeAvailableCapacityKey: string;

declare var NSURLVolumeCreationDateKey: string;

declare var NSURLVolumeIdentifierKey: string;

declare var NSURLVolumeIsAutomountedKey: string;

declare var NSURLVolumeIsBrowsableKey: string;

declare var NSURLVolumeIsEjectableKey: string;

declare var NSURLVolumeIsInternalKey: string;

declare var NSURLVolumeIsJournalingKey: string;

declare var NSURLVolumeIsLocalKey: string;

declare var NSURLVolumeIsReadOnlyKey: string;

declare var NSURLVolumeIsRemovableKey: string;

declare var NSURLVolumeLocalizedFormatDescriptionKey: string;

declare var NSURLVolumeLocalizedNameKey: string;

declare var NSURLVolumeMaximumFileSizeKey: string;

declare var NSURLVolumeNameKey: string;

declare var NSURLVolumeResourceCountKey: string;

declare var NSURLVolumeSupportsAdvisoryFileLockingKey: string;

declare var NSURLVolumeSupportsCasePreservedNamesKey: string;

declare var NSURLVolumeSupportsCaseSensitiveNamesKey: string;

declare var NSURLVolumeSupportsExtendedSecurityKey: string;

declare var NSURLVolumeSupportsHardLinksKey: string;

declare var NSURLVolumeSupportsJournalingKey: string;

declare var NSURLVolumeSupportsPersistentIDsKey: string;

declare var NSURLVolumeSupportsRenamingKey: string;

declare var NSURLVolumeSupportsRootDirectoryDatesKey: string;

declare var NSURLVolumeSupportsSparseFilesKey: string;

declare var NSURLVolumeSupportsSymbolicLinksKey: string;

declare var NSURLVolumeSupportsVolumeSizesKey: string;

declare var NSURLVolumeSupportsZeroRunsKey: string;

declare var NSURLVolumeTotalCapacityKey: string;

declare var NSURLVolumeURLForRemountingKey: string;

declare var NSURLVolumeURLKey: string;

declare var NSURLVolumeUUIDStringKey: string;

declare class NSUUID extends NSObject implements NSCopying, NSSecureCoding {

	static UUID(): NSUUID;

	static alloc(): NSUUID; // inherited from NSObject

	static new(): NSUUID; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ UUIDString: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { UUIDBytes: interop.Reference<number>; });

	constructor(o: { UUIDString: string; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	getUUIDBytes(uuid: interop.Reference<number>): void;

	self(): NSUUID; // inherited from NSObjectProtocol
}

declare class NSUbiquitousKeyValueStore extends NSObject {

	static alloc(): NSUbiquitousKeyValueStore; // inherited from NSObject

	static defaultStore(): NSUbiquitousKeyValueStore;

	static new(): NSUbiquitousKeyValueStore; // inherited from NSObject

	/* readonly */ dictionaryRepresentation: NSDictionary<string, any>;

	constructor(); // inherited from NSObject

	arrayForKey(aKey: string): NSArray<any>;

	boolForKey(aKey: string): boolean;

	dataForKey(aKey: string): NSData;

	dictionaryForKey(aKey: string): NSDictionary<string, any>;

	doubleForKey(aKey: string): number;

	longLongForKey(aKey: string): number;

	objectForKey(aKey: string): any;

	removeObjectForKey(aKey: string): void;

	self(): NSUbiquitousKeyValueStore; // inherited from NSObjectProtocol

	setArrayForKey(anArray: NSArray<any>, aKey: string): void;

	setBoolForKey(value: boolean, aKey: string): void;

	setDataForKey(aData: NSData, aKey: string): void;

	setDictionaryForKey(aDictionary: NSDictionary<string, any>, aKey: string): void;

	setDoubleForKey(value: number, aKey: string): void;

	setLongLongForKey(value: number, aKey: string): void;

	setObjectForKey(anObject: any, aKey: string): void;

	setStringForKey(aString: string, aKey: string): void;

	stringForKey(aKey: string): string;

	synchronize(): boolean;
}

declare var NSUbiquitousKeyValueStoreChangeReasonKey: string;

declare var NSUbiquitousKeyValueStoreChangedKeysKey: string;

declare var NSUbiquitousKeyValueStoreDidChangeExternallyNotification: string;

declare var NSUbiquitousUserDefaultsCompletedInitialSyncNotification: string;

declare var NSUbiquitousUserDefaultsDidChangeAccountsNotification: string;

declare var NSUbiquityIdentityDidChangeNotification: string;

declare var NSUnarchiveFromDataTransformerName: string;

declare var NSUndefinedKeyException: string;

declare var NSUnderlyingErrorKey: string;

declare var NSUndoCloseGroupingRunLoopOrdering: number;

declare class NSUndoManager extends NSObject {

	static alloc(): NSUndoManager; // inherited from NSObject

	static new(): NSUndoManager; // inherited from NSObject

	/* readonly */ canRedo: boolean;

	/* readonly */ canUndo: boolean;

	/* readonly */ groupingLevel: number;

	groupsByEvent: boolean;

	levelsOfUndo: number;

	/* readonly */ redoActionIsDiscardable: boolean;

	/* readonly */ redoActionName: string;

	/* readonly */ redoMenuItemTitle: string;

	/* readonly */ redoing: boolean;

	runLoopModes: NSArray<string>;

	/* readonly */ undoActionIsDiscardable: boolean;

	/* readonly */ undoActionName: string;

	/* readonly */ undoMenuItemTitle: string;

	/* readonly */ undoRegistrationEnabled: boolean;

	/* readonly */ undoing: boolean;

	constructor(); // inherited from NSObject

	beginUndoGrouping(): void;

	disableUndoRegistration(): void;

	enableUndoRegistration(): void;

	endUndoGrouping(): void;

	prepareWithInvocationTarget(target: any): any;

	redo(): void;

	redoMenuTitleForUndoActionName(actionName: string): string;

	registerUndoWithTargetHandler(target: any, undoHandler: (p1: any) => void): void;

	registerUndoWithTargetSelectorObject(target: any, selector: string, anObject: any): void;

	removeAllActions(): void;

	removeAllActionsWithTarget(target: any): void;

	self(): NSUndoManager; // inherited from NSObjectProtocol

	setActionIsDiscardable(discardable: boolean): void;

	setActionName(actionName: string): void;

	undo(): void;

	undoMenuTitleForUndoActionName(actionName: string): string;

	undoNestedGroup(): void;
}

declare var NSUndoManagerCheckpointNotification: string;

declare var NSUndoManagerDidCloseUndoGroupNotification: string;

declare var NSUndoManagerDidOpenUndoGroupNotification: string;

declare var NSUndoManagerDidRedoChangeNotification: string;

declare var NSUndoManagerDidUndoChangeNotification: string;

declare var NSUndoManagerGroupIsDiscardableKey: string;

declare var NSUndoManagerWillCloseUndoGroupNotification: string;

declare var NSUndoManagerWillRedoChangeNotification: string;

declare var NSUndoManagerWillUndoChangeNotification: string;

declare var NSUnionOfArraysKeyValueOperator: string;

declare var NSUnionOfObjectsKeyValueOperator: string;

declare var NSUnionOfSetsKeyValueOperator: string;

declare function NSUnionRange(range1: NSRange, range2: NSRange): NSRange;

declare class NSUserActivity extends NSObject {

	static alloc(): NSUserActivity; // inherited from NSObject

	static new(): NSUserActivity; // inherited from NSObject

	/* readonly */ activityType: string;

	contentAttributeSet: CSSearchableItemAttributeSet;

	delegate: NSUserActivityDelegate;

	eligibleForHandoff: boolean;

	eligibleForPublicIndexing: boolean;

	eligibleForSearch: boolean;

	expirationDate: Date;

	keywords: NSSet<string>;

	needsSave: boolean;

	requiredUserInfoKeys: NSSet<string>;

	supportsContinuationStreams: boolean;

	title: string;

	userInfo: NSDictionary<any, any>;

	webpageURL: NSURL;

	constructor(); // inherited from NSObject

	constructor(o: { activityType: string; });

	addUserInfoEntriesFromDictionary(otherDictionary: NSDictionary<any, any>): void;

	becomeCurrent(): void;

	getContinuationStreamsWithCompletionHandler(completionHandler: (p1: NSInputStream, p2: NSOutputStream, p3: NSError) => void): void;

	invalidate(): void;

	resignCurrent(): void;

	self(): NSUserActivity; // inherited from NSObjectProtocol
}

interface NSUserActivityDelegate extends NSObjectProtocol {

	userActivityDidReceiveInputStreamOutputStream?(userActivity: NSUserActivity, inputStream: NSInputStream, outputStream: NSOutputStream): void;

	userActivityWasContinued?(userActivity: NSUserActivity): void;

	userActivityWillSave?(userActivity: NSUserActivity): void;
}
declare var NSUserActivityDelegate: {

	prototype: NSUserActivityDelegate;
};

declare var NSUserActivityTypeBrowsingWeb: string;

declare class NSUserDefaults extends NSObject {

	static alloc(): NSUserDefaults; // inherited from NSObject

	static new(): NSUserDefaults; // inherited from NSObject

	static resetStandardUserDefaults(): void;

	static standardUserDefaults(): NSUserDefaults;

	/* readonly */ volatileDomainNames: NSArray<string>;

	constructor(); // inherited from NSObject

	constructor(o: { suiteName: string; });

	constructor(o: { user: string; });

	URLForKey(defaultName: string): NSURL;

	addSuiteNamed(suiteName: string): void;

	arrayForKey(defaultName: string): NSArray<any>;

	boolForKey(defaultName: string): boolean;

	dataForKey(defaultName: string): NSData;

	dictionaryForKey(defaultName: string): NSDictionary<string, any>;

	dictionaryRepresentation(): NSDictionary<string, any>;

	doubleForKey(defaultName: string): number;

	floatForKey(defaultName: string): number;

	integerForKey(defaultName: string): number;

	objectForKey(defaultName: string): any;

	objectIsForcedForKey(key: string): boolean;

	objectIsForcedForKeyInDomain(key: string, domain: string): boolean;

	persistentDomainForName(domainName: string): NSDictionary<string, any>;

	persistentDomainNames(): NSArray<any>;

	registerDefaults(registrationDictionary: NSDictionary<string, any>): void;

	removeObjectForKey(defaultName: string): void;

	removePersistentDomainForName(domainName: string): void;

	removeSuiteNamed(suiteName: string): void;

	removeVolatileDomainForName(domainName: string): void;

	self(): NSUserDefaults; // inherited from NSObjectProtocol

	setBoolForKey(value: boolean, defaultName: string): void;

	setDoubleForKey(value: number, defaultName: string): void;

	setFloatForKey(value: number, defaultName: string): void;

	setIntegerForKey(value: number, defaultName: string): void;

	setObjectForKey(value: any, defaultName: string): void;

	setPersistentDomainForName(domain: NSDictionary<string, any>, domainName: string): void;

	setURLForKey(url: NSURL, defaultName: string): void;

	setVolatileDomainForName(domain: NSDictionary<string, any>, domainName: string): void;

	stringArrayForKey(defaultName: string): NSArray<string>;

	stringForKey(defaultName: string): string;

	synchronize(): boolean;

	volatileDomainForName(domainName: string): NSDictionary<string, any>;
}

declare var NSUserDefaultsDidChangeNotification: string;

declare var NSUserDefaultsSizeLimitExceededNotification: string;

declare function NSUserName(): string;

declare class NSValue extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NSValue; // inherited from NSObject

	static new(): NSValue; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static valueWithBytesObjCType(value: interop.Pointer, type: string): NSValue;

	static valueWithCATransform3D(t: CATransform3D): NSValue;

	static valueWithCGAffineTransform(transform: CGAffineTransform): NSValue;

	static valueWithCGPoint(point: CGPoint): NSValue;

	static valueWithCGRect(rect: CGRect): NSValue;

	static valueWithCGSize(size: CGSize): NSValue;

	static valueWithCGVector(vector: CGVector): NSValue;

	static valueWithCMTime(time: CMTime): NSValue;

	static valueWithCMTimeMapping(timeMapping: CMTimeMapping): NSValue;

	static valueWithCMTimeRange(timeRange: CMTimeRange): NSValue;

	static valueWithMKCoordinate(coordinate: CLLocationCoordinate2D): NSValue;

	static valueWithMKCoordinateSpan(span: MKCoordinateSpan): NSValue;

	static valueWithNonretainedObject(anObject: any): NSValue;

	static valueWithObjCType(value: interop.Pointer, type: string): NSValue;

	static valueWithPointer(pointer: interop.Pointer): NSValue;

	static valueWithRange(range: NSRange): NSValue;

	static valueWithSCNMatrix4(v: SCNMatrix4): NSValue;

	static valueWithSCNVector3(v: SCNVector3): NSValue;

	static valueWithSCNVector4(v: SCNVector4): NSValue;

	static valueWithUIEdgeInsets(insets: UIEdgeInsets): NSValue;

	static valueWithUIOffset(insets: UIOffset): NSValue;

	/* readonly */ CATransform3DValue: CATransform3D;

	/* readonly */ CMTimeMappingValue: CMTimeMapping;

	/* readonly */ CMTimeRangeValue: CMTimeRange;

	/* readonly */ CMTimeValue: CMTime;

	/* readonly */ MKCoordinateSpanValue: MKCoordinateSpan;

	/* readonly */ MKCoordinateValue: CLLocationCoordinate2D;

	/* readonly */ SCNMatrix4Value: SCNMatrix4;

	/* readonly */ SCNVector3Value: SCNVector3;

	/* readonly */ SCNVector4Value: SCNVector4;

	/* readonly */ nonretainedObjectValue: any;

	/* readonly */ objCType: string;

	/* readonly */ pointerValue: interop.Pointer;

	/* readonly */ rangeValue: NSRange;

	constructor(); // inherited from NSObject

	constructor(o: { bytes: interop.Pointer; objCType: string; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	CGAffineTransformValue(): CGAffineTransform;

	CGPointValue(): CGPoint;

	CGRectValue(): CGRect;

	CGSizeValue(): CGSize;

	CGVectorValue(): CGVector;

	UIEdgeInsetsValue(): UIEdgeInsets;

	UIOffsetValue(): UIOffset;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	getValue(value: interop.Pointer): void;

	isEqualToValue(value: NSValue): boolean;

	self(): NSValue; // inherited from NSObjectProtocol
}

declare class NSValueTransformer extends NSObject {

	static alloc(): NSValueTransformer; // inherited from NSObject

	static allowsReverseTransformation(): boolean;

	static new(): NSValueTransformer; // inherited from NSObject

	static setValueTransformerForName(transformer: NSValueTransformer, name: string): void;

	static transformedValueClass(): typeof NSObject;

	static valueTransformerForName(name: string): NSValueTransformer;

	static valueTransformerNames(): NSArray<string>;

	constructor(); // inherited from NSObject

	reverseTransformedValue(value: any): any;

	self(): NSValueTransformer; // inherited from NSObjectProtocol

	transformedValue(value: any): any;
}

declare const enum NSVolumeEnumerationOptions {

	SkipHiddenVolumes = 2,

	ProduceFileReferenceURLs = 4
}

declare var NSWillBecomeMultiThreadedNotification: string;

declare class NSXMLParser extends NSObject {

	static alloc(): NSXMLParser; // inherited from NSObject

	static new(): NSXMLParser; // inherited from NSObject

	allowedExternalEntityURLs: NSSet<NSURL>;

	/* readonly */ columnNumber: number;

	delegate: NSXMLParserDelegate;

	externalEntityResolvingPolicy: NSXMLParserExternalEntityResolvingPolicy;

	/* readonly */ lineNumber: number;

	/* readonly */ parserError: NSError;

	/* readonly */ publicID: string;

	shouldProcessNamespaces: boolean;

	shouldReportNamespacePrefixes: boolean;

	shouldResolveExternalEntities: boolean;

	/* readonly */ systemID: string;

	constructor(); // inherited from NSObject

	constructor(o: { contentsOfURL: NSURL; });

	constructor(o: { data: NSData; });

	constructor(o: { stream: NSInputStream; });

	abortParsing(): void;

	parse(): boolean;

	self(): NSXMLParser; // inherited from NSObjectProtocol
}

interface NSXMLParserDelegate extends NSObjectProtocol {

	parserDidEndDocument?(parser: NSXMLParser): void;

	parserDidEndElementNamespaceURIQualifiedName?(parser: NSXMLParser, elementName: string, namespaceURI: string, qName: string): void;

	parserDidEndMappingPrefix?(parser: NSXMLParser, prefix: string): void;

	parserDidStartDocument?(parser: NSXMLParser): void;

	parserDidStartElementNamespaceURIQualifiedNameAttributes?(parser: NSXMLParser, elementName: string, namespaceURI: string, qName: string, attributeDict: NSDictionary<string, string>): void;

	parserDidStartMappingPrefixToURI?(parser: NSXMLParser, prefix: string, namespaceURI: string): void;

	parserFoundAttributeDeclarationWithNameForElementTypeDefaultValue?(parser: NSXMLParser, attributeName: string, elementName: string, type: string, defaultValue: string): void;

	parserFoundCDATA?(parser: NSXMLParser, CDATABlock: NSData): void;

	parserFoundCharacters?(parser: NSXMLParser, string: string): void;

	parserFoundComment?(parser: NSXMLParser, comment: string): void;

	parserFoundElementDeclarationWithNameModel?(parser: NSXMLParser, elementName: string, model: string): void;

	parserFoundExternalEntityDeclarationWithNamePublicIDSystemID?(parser: NSXMLParser, name: string, publicID: string, systemID: string): void;

	parserFoundIgnorableWhitespace?(parser: NSXMLParser, whitespaceString: string): void;

	parserFoundInternalEntityDeclarationWithNameValue?(parser: NSXMLParser, name: string, value: string): void;

	parserFoundNotationDeclarationWithNamePublicIDSystemID?(parser: NSXMLParser, name: string, publicID: string, systemID: string): void;

	parserFoundProcessingInstructionWithTargetData?(parser: NSXMLParser, target: string, data: string): void;

	parserFoundUnparsedEntityDeclarationWithNamePublicIDSystemIDNotationName?(parser: NSXMLParser, name: string, publicID: string, systemID: string, notationName: string): void;

	parserParseErrorOccurred?(parser: NSXMLParser, parseError: NSError): void;

	parserResolveExternalEntityNameSystemID?(parser: NSXMLParser, name: string, systemID: string): NSData;

	parserValidationErrorOccurred?(parser: NSXMLParser, validationError: NSError): void;
}
declare var NSXMLParserDelegate: {

	prototype: NSXMLParserDelegate;
};

declare const enum NSXMLParserError {

	InternalError = 1,

	OutOfMemoryError = 2,

	DocumentStartError = 3,

	EmptyDocumentError = 4,

	PrematureDocumentEndError = 5,

	InvalidHexCharacterRefError = 6,

	InvalidDecimalCharacterRefError = 7,

	InvalidCharacterRefError = 8,

	InvalidCharacterError = 9,

	CharacterRefAtEOFError = 10,

	CharacterRefInPrologError = 11,

	CharacterRefInEpilogError = 12,

	CharacterRefInDTDError = 13,

	EntityRefAtEOFError = 14,

	EntityRefInPrologError = 15,

	EntityRefInEpilogError = 16,

	EntityRefInDTDError = 17,

	ParsedEntityRefAtEOFError = 18,

	ParsedEntityRefInPrologError = 19,

	ParsedEntityRefInEpilogError = 20,

	ParsedEntityRefInInternalSubsetError = 21,

	EntityReferenceWithoutNameError = 22,

	EntityReferenceMissingSemiError = 23,

	ParsedEntityRefNoNameError = 24,

	ParsedEntityRefMissingSemiError = 25,

	UndeclaredEntityError = 26,

	UnparsedEntityError = 28,

	EntityIsExternalError = 29,

	EntityIsParameterError = 30,

	UnknownEncodingError = 31,

	EncodingNotSupportedError = 32,

	StringNotStartedError = 33,

	StringNotClosedError = 34,

	NamespaceDeclarationError = 35,

	EntityNotStartedError = 36,

	EntityNotFinishedError = 37,

	LessThanSymbolInAttributeError = 38,

	AttributeNotStartedError = 39,

	AttributeNotFinishedError = 40,

	AttributeHasNoValueError = 41,

	AttributeRedefinedError = 42,

	LiteralNotStartedError = 43,

	LiteralNotFinishedError = 44,

	CommentNotFinishedError = 45,

	ProcessingInstructionNotStartedError = 46,

	ProcessingInstructionNotFinishedError = 47,

	NotationNotStartedError = 48,

	NotationNotFinishedError = 49,

	AttributeListNotStartedError = 50,

	AttributeListNotFinishedError = 51,

	MixedContentDeclNotStartedError = 52,

	MixedContentDeclNotFinishedError = 53,

	ElementContentDeclNotStartedError = 54,

	ElementContentDeclNotFinishedError = 55,

	XMLDeclNotStartedError = 56,

	XMLDeclNotFinishedError = 57,

	ConditionalSectionNotStartedError = 58,

	ConditionalSectionNotFinishedError = 59,

	ExternalSubsetNotFinishedError = 60,

	DOCTYPEDeclNotFinishedError = 61,

	MisplacedCDATAEndStringError = 62,

	CDATANotFinishedError = 63,

	MisplacedXMLDeclarationError = 64,

	SpaceRequiredError = 65,

	SeparatorRequiredError = 66,

	NMTOKENRequiredError = 67,

	NAMERequiredError = 68,

	PCDATARequiredError = 69,

	URIRequiredError = 70,

	PublicIdentifierRequiredError = 71,

	LTRequiredError = 72,

	GTRequiredError = 73,

	LTSlashRequiredError = 74,

	EqualExpectedError = 75,

	TagNameMismatchError = 76,

	UnfinishedTagError = 77,

	StandaloneValueError = 78,

	InvalidEncodingNameError = 79,

	CommentContainsDoubleHyphenError = 80,

	InvalidEncodingError = 81,

	ExternalStandaloneEntityError = 82,

	InvalidConditionalSectionError = 83,

	EntityValueRequiredError = 84,

	NotWellBalancedError = 85,

	ExtraContentError = 86,

	InvalidCharacterInEntityError = 87,

	ParsedEntityRefInInternalError = 88,

	EntityRefLoopError = 89,

	EntityBoundaryError = 90,

	InvalidURIError = 91,

	URIFragmentError = 92,

	NoDTDError = 94,

	DelegateAbortedParseError = 512
}

declare var NSXMLParserErrorDomain: string;

declare const enum NSXMLParserExternalEntityResolvingPolicy {

	ResolveExternalEntitiesNever = 0,

	ResolveExternalEntitiesNoNetwork = 1,

	ResolveExternalEntitiesSameOriginOnly = 2,

	ResolveExternalEntitiesAlways = 3
}

declare function NSZoneCalloc(zone: interop.Pointer, numElems: number, byteSize: number): interop.Pointer;

declare function NSZoneFree(zone: interop.Pointer, ptr: interop.Pointer): void;

declare function NSZoneFromPointer(ptr: interop.Pointer): interop.Pointer;

declare function NSZoneMalloc(zone: interop.Pointer, size: number): interop.Pointer;

declare function NSZoneName(zone: interop.Pointer): string;

declare function NSZoneRealloc(zone: interop.Pointer, ptr: interop.Pointer, size: number): interop.Pointer;

declare var _NSConstantStringClassReference: interop.Pointer;

interface _expressionFlags {
	_evaluationBlocked: number;
	_reservedExpressionFlags: number;
}
declare var _expressionFlags: interop.StructType<_expressionFlags>;

interface _predicateFlags {
	_evaluationBlocked: number;
	_reservedPredicateFlags: number;
}
declare var _predicateFlags: interop.StructType<_predicateFlags>;
