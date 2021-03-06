
declare function CGAffineTransformFromString(string: string): CGAffineTransform;

declare function CGPointFromString(string: string): CGPoint;

declare function CGRectFromString(string: string): CGRect;

declare function CGSizeFromString(string: string): CGSize;

declare function CGVectorFromString(string: string): CGVector;

declare var NSAttachmentAttributeName: string;

declare var NSBackgroundColorAttributeName: string;

declare var NSBackgroundColorDocumentAttribute: string;

declare var NSBaselineOffsetAttributeName: string;

declare var NSCharacterEncodingDocumentAttribute: string;

declare const enum NSControlCharacterAction {

	ZeroAdvancement = 1,

	Whitespace = 2,

	HorizontalTab = 4,

	LineBreak = 8,

	ParagraphBreak = 16,

	ContainerBreak = 32
}

declare class NSDataAsset extends NSObject implements NSCopying {

	static alloc(): NSDataAsset; // inherited from NSObject

	static new(): NSDataAsset; // inherited from NSObject

	/* readonly */ data: NSData;

	/* readonly */ name: string;

	/* readonly */ typeIdentifier: string;

	constructor(); // inherited from NSObject

	constructor(o: { name: string; });

	constructor(o: { name: string; bundle: NSBundle; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): NSDataAsset; // inherited from NSObjectProtocol
}

declare var NSDefaultAttributesDocumentAttribute: string;

declare var NSDefaultTabIntervalDocumentAttribute: string;

declare var NSDocumentTypeDocumentAttribute: string;

declare var NSExpansionAttributeName: string;

declare class NSFileProviderExtension extends NSObject {

	static alloc(): NSFileProviderExtension; // inherited from NSObject

	static new(): NSFileProviderExtension; // inherited from NSObject

	static placeholderURLForURL(url: NSURL): NSURL;

	static writePlaceholderAtURLWithMetadataError(placeholderURL: NSURL, metadata: NSDictionary<any, any>): boolean;

	constructor(); // inherited from NSObject

	URLForItemWithPersistentIdentifier(identifier: string): NSURL;

	documentStorageURL(): NSURL;

	itemChangedAtURL(url: NSURL): void;

	persistentIdentifierForItemAtURL(url: NSURL): string;

	providePlaceholderAtURLCompletionHandler(url: NSURL, completionHandler: (p1: NSError) => void): void;

	providerIdentifier(): string;

	self(): NSFileProviderExtension; // inherited from NSObjectProtocol

	startProvidingItemAtURLCompletionHandler(url: NSURL, completionHandler: (p1: NSError) => void): void;

	stopProvidingItemAtURL(url: NSURL): void;
}

declare var NSFontAttributeName: string;

declare var NSForegroundColorAttributeName: string;

declare const enum NSGlyphProperty {

	Null = 1,

	ControlCharacter = 2,

	Elastic = 4,

	NonBaseCharacter = 8
}

declare var NSHTMLTextDocumentType: string;

declare var NSHyphenationFactorDocumentAttribute: string;

declare var NSKernAttributeName: string;

declare class NSLayoutAnchor<AnchorType> extends NSObject {

	static alloc<AnchorType>(): NSLayoutAnchor<AnchorType>; // inherited from NSObject

	static new<AnchorType>(): NSLayoutAnchor<AnchorType>; // inherited from NSObject

	constructor(); // inherited from NSObject

	constraintEqualToAnchor(anchor: NSLayoutAnchor<AnchorType>): NSLayoutConstraint;

	constraintEqualToAnchorConstant(anchor: NSLayoutAnchor<AnchorType>, c: number): NSLayoutConstraint;

	constraintGreaterThanOrEqualToAnchor(anchor: NSLayoutAnchor<AnchorType>): NSLayoutConstraint;

	constraintGreaterThanOrEqualToAnchorConstant(anchor: NSLayoutAnchor<AnchorType>, c: number): NSLayoutConstraint;

	constraintLessThanOrEqualToAnchor(anchor: NSLayoutAnchor<AnchorType>): NSLayoutConstraint;

	constraintLessThanOrEqualToAnchorConstant(anchor: NSLayoutAnchor<AnchorType>, c: number): NSLayoutConstraint;

	self(): NSLayoutAnchor<AnchorType>; // inherited from NSObjectProtocol
}

declare const enum NSLayoutAttribute {

	Left = 1,

	Right = 2,

	Top = 3,

	Bottom = 4,

	Leading = 5,

	Trailing = 6,

	Width = 7,

	Height = 8,

	CenterX = 9,

	CenterY = 10,

	Baseline = 11,

	LastBaseline = 11,

	FirstBaseline = 12,

	LeftMargin = 13,

	RightMargin = 14,

	TopMargin = 15,

	BottomMargin = 16,

	LeadingMargin = 17,

	TrailingMargin = 18,

	CenterXWithinMargins = 19,

	CenterYWithinMargins = 20,

	NotAnAttribute = 0
}

declare class NSLayoutConstraint extends NSObject {

	static activateConstraints(constraints: NSArray<NSLayoutConstraint>): void;

	static alloc(): NSLayoutConstraint; // inherited from NSObject

	static constraintWithItemAttributeRelatedByToItemAttributeMultiplierConstant(view1: any, attr1: NSLayoutAttribute, relation: NSLayoutRelation, view2: any, attr2: NSLayoutAttribute, multiplier: number, c: number): NSLayoutConstraint;

	static constraintsWithVisualFormatOptionsMetricsViews(format: string, opts: NSLayoutFormatOptions, metrics: NSDictionary<string, any>, views: NSDictionary<string, any>): NSArray<NSLayoutConstraint>;

	static deactivateConstraints(constraints: NSArray<NSLayoutConstraint>): void;

	static new(): NSLayoutConstraint; // inherited from NSObject

	active: boolean;

	constant: number;

	/* readonly */ firstAttribute: NSLayoutAttribute;

	/* readonly */ firstItem: any;

	identifier: string;

	/* readonly */ multiplier: number;

	priority: number;

	/* readonly */ relation: NSLayoutRelation;

	/* readonly */ secondAttribute: NSLayoutAttribute;

	/* readonly */ secondItem: any;

	shouldBeArchived: boolean;

	constructor(); // inherited from NSObject

	self(): NSLayoutConstraint; // inherited from NSObjectProtocol
}

declare class NSLayoutDimension extends NSLayoutAnchor<NSLayoutDimension> {

	constraintEqualToAnchorMultiplier(anchor: NSLayoutDimension, m: number): NSLayoutConstraint;

	constraintEqualToAnchorMultiplierConstant(anchor: NSLayoutDimension, m: number, c: number): NSLayoutConstraint;

	constraintEqualToConstant(c: number): NSLayoutConstraint;

	constraintGreaterThanOrEqualToAnchorMultiplier(anchor: NSLayoutDimension, m: number): NSLayoutConstraint;

	constraintGreaterThanOrEqualToAnchorMultiplierConstant(anchor: NSLayoutDimension, m: number, c: number): NSLayoutConstraint;

	constraintGreaterThanOrEqualToConstant(c: number): NSLayoutConstraint;

	constraintLessThanOrEqualToAnchorMultiplier(anchor: NSLayoutDimension, m: number): NSLayoutConstraint;

	constraintLessThanOrEqualToAnchorMultiplierConstant(anchor: NSLayoutDimension, m: number, c: number): NSLayoutConstraint;

	constraintLessThanOrEqualToConstant(c: number): NSLayoutConstraint;
}

declare const enum NSLayoutFormatOptions {

	AlignAllLeft = 2,

	AlignAllRight = 4,

	AlignAllTop = 8,

	AlignAllBottom = 16,

	AlignAllLeading = 32,

	AlignAllTrailing = 64,

	AlignAllCenterX = 512,

	AlignAllCenterY = 1024,

	AlignAllBaseline = 2048,

	AlignAllLastBaseline = 2048,

	AlignAllFirstBaseline = 4096,

	AlignmentMask = 65535,

	DirectionLeadingToTrailing = 0,

	DirectionLeftToRight = 65536,

	DirectionRightToLeft = 131072,

	DirectionMask = 196608
}

declare class NSLayoutManager extends NSObject implements NSCoding {

	static alloc(): NSLayoutManager; // inherited from NSObject

	static new(): NSLayoutManager; // inherited from NSObject

	allowsNonContiguousLayout: boolean;

	delegate: NSLayoutManagerDelegate;

	/* readonly */ extraLineFragmentRect: CGRect;

	/* readonly */ extraLineFragmentTextContainer: NSTextContainer;

	/* readonly */ extraLineFragmentUsedRect: CGRect;

	/* readonly */ hasNonContiguousLayout: boolean;

	hyphenationFactor: number;

	/* readonly */ numberOfGlyphs: number;

	showsControlCharacters: boolean;

	showsInvisibleCharacters: boolean;

	/* readonly */ textContainers: NSArray<NSTextContainer>;

	textStorage: NSTextStorage;

	usesFontLeading: boolean;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	CGGlyphAtIndex(glyphIndex: number): number;

	CGGlyphAtIndexIsValidIndex(glyphIndex: number, isValidIndex: interop.Reference<boolean>): number;

	addTextContainer(container: NSTextContainer): void;

	attachmentSizeForGlyphAtIndex(glyphIndex: number): CGSize;

	boundingRectForGlyphRangeInTextContainer(glyphRange: NSRange, container: NSTextContainer): CGRect;

	characterIndexForGlyphAtIndex(glyphIndex: number): number;

	characterIndexForPointInTextContainerFractionOfDistanceBetweenInsertionPoints(point: CGPoint, container: NSTextContainer, partialFraction: interop.Reference<number>): number;

	characterRangeForGlyphRangeActualGlyphRange(glyphRange: NSRange, actualGlyphRange: interop.Reference<NSRange>): NSRange;

	drawBackgroundForGlyphRangeAtPoint(glyphsToShow: NSRange, origin: CGPoint): void;

	drawGlyphsForGlyphRangeAtPoint(glyphsToShow: NSRange, origin: CGPoint): void;

	drawStrikethroughForGlyphRangeStrikethroughTypeBaselineOffsetLineFragmentRectLineFragmentGlyphRangeContainerOrigin(glyphRange: NSRange, strikethroughVal: NSUnderlineStyle, baselineOffset: number, lineRect: CGRect, lineGlyphRange: NSRange, containerOrigin: CGPoint): void;

	drawUnderlineForGlyphRangeUnderlineTypeBaselineOffsetLineFragmentRectLineFragmentGlyphRangeContainerOrigin(glyphRange: NSRange, underlineVal: NSUnderlineStyle, baselineOffset: number, lineRect: CGRect, lineGlyphRange: NSRange, containerOrigin: CGPoint): void;

	drawsOutsideLineFragmentForGlyphAtIndex(glyphIndex: number): boolean;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	ensureGlyphsForCharacterRange(charRange: NSRange): void;

	ensureGlyphsForGlyphRange(glyphRange: NSRange): void;

	ensureLayoutForBoundingRectInTextContainer(bounds: CGRect, container: NSTextContainer): void;

	ensureLayoutForCharacterRange(charRange: NSRange): void;

	ensureLayoutForGlyphRange(glyphRange: NSRange): void;

	ensureLayoutForTextContainer(container: NSTextContainer): void;

	enumerateEnclosingRectsForGlyphRangeWithinSelectedGlyphRangeInTextContainerUsingBlock(glyphRange: NSRange, selectedRange: NSRange, textContainer: NSTextContainer, block: (p1: CGRect, p2: interop.Reference<boolean>) => void): void;

	enumerateLineFragmentsForGlyphRangeUsingBlock(glyphRange: NSRange, block: (p1: CGRect, p2: CGRect, p3: NSTextContainer, p4: NSRange, p5: interop.Reference<boolean>) => void): void;

	fillBackgroundRectArrayCountForCharacterRangeColor(rectArray: interop.Reference<CGRect>, rectCount: number, charRange: NSRange, color: UIColor): void;

	firstUnlaidCharacterIndex(): number;

	firstUnlaidGlyphIndex(): number;

	fractionOfDistanceThroughGlyphForPointInTextContainer(point: CGPoint, container: NSTextContainer): number;

	getFirstUnlaidCharacterIndexGlyphIndex(charIndex: interop.Reference<number>, glyphIndex: interop.Reference<number>): void;

	getGlyphsInRangeGlyphsPropertiesCharacterIndexesBidiLevels(glyphRange: NSRange, glyphBuffer: interop.Reference<number>, props: interop.Reference<NSGlyphProperty>, charIndexBuffer: interop.Reference<number>, bidiLevelBuffer: string): number;

	getLineFragmentInsertionPointsForCharacterAtIndexAlternatePositionsInDisplayOrderPositionsCharacterIndexes(charIndex: number, aFlag: boolean, dFlag: boolean, positions: interop.Reference<number>, charIndexes: interop.Reference<number>): number;

	glyphAtIndex(glyphIndex: number): number;

	glyphAtIndexIsValidIndex(glyphIndex: number, isValidIndex: interop.Reference<boolean>): number;

	glyphIndexForCharacterAtIndex(charIndex: number): number;

	glyphIndexForPointInTextContainer(point: CGPoint, container: NSTextContainer): number;

	glyphIndexForPointInTextContainerFractionOfDistanceThroughGlyph(point: CGPoint, container: NSTextContainer, partialFraction: interop.Reference<number>): number;

	glyphRangeForBoundingRectInTextContainer(bounds: CGRect, container: NSTextContainer): NSRange;

	glyphRangeForBoundingRectWithoutAdditionalLayoutInTextContainer(bounds: CGRect, container: NSTextContainer): NSRange;

	glyphRangeForCharacterRangeActualCharacterRange(charRange: NSRange, actualCharRange: interop.Reference<NSRange>): NSRange;

	glyphRangeForTextContainer(container: NSTextContainer): NSRange;

	insertTextContainerAtIndex(container: NSTextContainer, index: number): void;

	invalidateDisplayForCharacterRange(charRange: NSRange): void;

	invalidateDisplayForGlyphRange(glyphRange: NSRange): void;

	invalidateGlyphsForCharacterRangeChangeInLengthActualCharacterRange(charRange: NSRange, delta: number, actualCharRange: interop.Reference<NSRange>): void;

	invalidateLayoutForCharacterRangeActualCharacterRange(charRange: NSRange, actualCharRange: interop.Reference<NSRange>): void;

	isValidGlyphIndex(glyphIndex: number): boolean;

	lineFragmentRectForGlyphAtIndexEffectiveRange(glyphIndex: number, effectiveGlyphRange: interop.Reference<NSRange>): CGRect;

	lineFragmentRectForGlyphAtIndexEffectiveRangeWithoutAdditionalLayout(glyphIndex: number, effectiveGlyphRange: interop.Reference<NSRange>, flag: boolean): CGRect;

	lineFragmentUsedRectForGlyphAtIndexEffectiveRange(glyphIndex: number, effectiveGlyphRange: interop.Reference<NSRange>): CGRect;

	lineFragmentUsedRectForGlyphAtIndexEffectiveRangeWithoutAdditionalLayout(glyphIndex: number, effectiveGlyphRange: interop.Reference<NSRange>, flag: boolean): CGRect;

	locationForGlyphAtIndex(glyphIndex: number): CGPoint;

	notShownAttributeForGlyphAtIndex(glyphIndex: number): boolean;

	processEditingForTextStorageEditedRangeChangeInLengthInvalidatedRange(textStorage: NSTextStorage, editMask: NSTextStorageEditActions, newCharRange: NSRange, delta: number, invalidatedCharRange: NSRange): void;

	propertyForGlyphAtIndex(glyphIndex: number): NSGlyphProperty;

	rangeOfNominallySpacedGlyphsContainingIndex(glyphIndex: number): NSRange;

	removeTextContainerAtIndex(index: number): void;

	self(): NSLayoutManager; // inherited from NSObjectProtocol

	setAttachmentSizeForGlyphRange(attachmentSize: CGSize, glyphRange: NSRange): void;

	setDrawsOutsideLineFragmentForGlyphAtIndex(flag: boolean, glyphIndex: number): void;

	setExtraLineFragmentRectUsedRectTextContainer(fragmentRect: CGRect, usedRect: CGRect, container: NSTextContainer): void;

	setGlyphsPropertiesCharacterIndexesFontForGlyphRange(glyphs: interop.Reference<number>, props: interop.Reference<NSGlyphProperty>, charIndexes: interop.Reference<number>, aFont: UIFont, glyphRange: NSRange): void;

	setLineFragmentRectForGlyphRangeUsedRect(fragmentRect: CGRect, glyphRange: NSRange, usedRect: CGRect): void;

	setLocationForStartOfGlyphRange(location: CGPoint, glyphRange: NSRange): void;

	setNotShownAttributeForGlyphAtIndex(flag: boolean, glyphIndex: number): void;

	setTextContainerForGlyphRange(container: NSTextContainer, glyphRange: NSRange): void;

	showCGGlyphsPositionsCountFontMatrixAttributesInContext(glyphs: interop.Reference<number>, positions: interop.Reference<CGPoint>, glyphCount: number, font: UIFont, textMatrix: CGAffineTransform, attributes: NSDictionary<string, any>, graphicsContext: any): void;

	strikethroughGlyphRangeStrikethroughTypeLineFragmentRectLineFragmentGlyphRangeContainerOrigin(glyphRange: NSRange, strikethroughVal: NSUnderlineStyle, lineRect: CGRect, lineGlyphRange: NSRange, containerOrigin: CGPoint): void;

	textContainerChangedGeometry(container: NSTextContainer): void;

	textContainerForGlyphAtIndexEffectiveRange(glyphIndex: number, effectiveGlyphRange: interop.Reference<NSRange>): NSTextContainer;

	textContainerForGlyphAtIndexEffectiveRangeWithoutAdditionalLayout(glyphIndex: number, effectiveGlyphRange: interop.Reference<NSRange>, flag: boolean): NSTextContainer;

	truncatedGlyphRangeInLineFragmentForGlyphAtIndex(glyphIndex: number): NSRange;

	underlineGlyphRangeUnderlineTypeLineFragmentRectLineFragmentGlyphRangeContainerOrigin(glyphRange: NSRange, underlineVal: NSUnderlineStyle, lineRect: CGRect, lineGlyphRange: NSRange, containerOrigin: CGPoint): void;

	usedRectForTextContainer(container: NSTextContainer): CGRect;
}

interface NSLayoutManagerDelegate extends NSObjectProtocol {

	layoutManagerBoundingBoxForControlGlyphAtIndexForTextContainerProposedLineFragmentGlyphPositionCharacterIndex?(layoutManager: NSLayoutManager, glyphIndex: number, textContainer: NSTextContainer, proposedRect: CGRect, glyphPosition: CGPoint, charIndex: number): CGRect;

	layoutManagerDidCompleteLayoutForTextContainerAtEnd?(layoutManager: NSLayoutManager, textContainer: NSTextContainer, layoutFinishedFlag: boolean): void;

	layoutManagerDidInvalidateLayout?(sender: NSLayoutManager): void;

	layoutManagerLineSpacingAfterGlyphAtIndexWithProposedLineFragmentRect?(layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect): number;

	layoutManagerParagraphSpacingAfterGlyphAtIndexWithProposedLineFragmentRect?(layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect): number;

	layoutManagerParagraphSpacingBeforeGlyphAtIndexWithProposedLineFragmentRect?(layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect): number;

	layoutManagerShouldBreakLineByHyphenatingBeforeCharacterAtIndex?(layoutManager: NSLayoutManager, charIndex: number): boolean;

	layoutManagerShouldBreakLineByWordBeforeCharacterAtIndex?(layoutManager: NSLayoutManager, charIndex: number): boolean;

	layoutManagerShouldGenerateGlyphsPropertiesCharacterIndexesFontForGlyphRange?(layoutManager: NSLayoutManager, glyphs: interop.Reference<number>, props: interop.Reference<NSGlyphProperty>, charIndexes: interop.Reference<number>, aFont: UIFont, glyphRange: NSRange): number;

	layoutManagerShouldSetLineFragmentRectLineFragmentUsedRectBaselineOffsetInTextContainerForGlyphRange?(layoutManager: NSLayoutManager, lineFragmentRect: interop.Reference<CGRect>, lineFragmentUsedRect: interop.Reference<CGRect>, baselineOffset: interop.Reference<number>, textContainer: NSTextContainer, glyphRange: NSRange): boolean;

	layoutManagerShouldUseActionForControlCharacterAtIndex?(layoutManager: NSLayoutManager, action: NSControlCharacterAction, charIndex: number): NSControlCharacterAction;

	layoutManagerTextContainerDidChangeGeometryFromSize?(layoutManager: NSLayoutManager, textContainer: NSTextContainer, oldSize: CGSize): void;
}
declare var NSLayoutManagerDelegate: {

	prototype: NSLayoutManagerDelegate;
};

declare const enum NSLayoutRelation {

	LessThanOrEqual = -1,

	Equal = 0,

	GreaterThanOrEqual = 1
}

declare class NSLayoutXAxisAnchor extends NSLayoutAnchor<NSLayoutXAxisAnchor> {
}

declare class NSLayoutYAxisAnchor extends NSLayoutAnchor<NSLayoutYAxisAnchor> {
}

declare var NSLigatureAttributeName: string;

declare const enum NSLineBreakMode {

	ByWordWrapping = 0,

	ByCharWrapping = 1,

	ByClipping = 2,

	ByTruncatingHead = 3,

	ByTruncatingTail = 4,

	ByTruncatingMiddle = 5
}

declare var NSLinkAttributeName: string;

declare class NSMutableParagraphStyle extends NSParagraphStyle {

	alignment: NSTextAlignment;

	allowsDefaultTighteningForTruncation: boolean;

	baseWritingDirection: NSWritingDirection;

	defaultTabInterval: number;

	firstLineHeadIndent: number;

	headIndent: number;

	hyphenationFactor: number;

	lineBreakMode: NSLineBreakMode;

	lineHeightMultiple: number;

	lineSpacing: number;

	maximumLineHeight: number;

	minimumLineHeight: number;

	paragraphSpacing: number;

	paragraphSpacingBefore: number;

	tabStops: NSArray<NSTextTab>;

	tailIndent: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	addTabStop(anObject: NSTextTab): void;

	removeTabStop(anObject: NSTextTab): void;

	setParagraphStyle(obj: NSParagraphStyle): void;
}

declare var NSObliquenessAttributeName: string;

declare var NSPaperMarginDocumentAttribute: string;

declare var NSPaperSizeDocumentAttribute: string;

declare class NSParagraphStyle extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	static alloc(): NSParagraphStyle; // inherited from NSObject

	static defaultParagraphStyle(): NSParagraphStyle;

	static defaultWritingDirectionForLanguage(languageName: string): NSWritingDirection;

	static new(): NSParagraphStyle; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ alignment: NSTextAlignment;

	/* readonly */ allowsDefaultTighteningForTruncation: boolean;

	/* readonly */ baseWritingDirection: NSWritingDirection;

	/* readonly */ defaultTabInterval: number;

	/* readonly */ firstLineHeadIndent: number;

	/* readonly */ headIndent: number;

	/* readonly */ hyphenationFactor: number;

	/* readonly */ lineBreakMode: NSLineBreakMode;

	/* readonly */ lineHeightMultiple: number;

	/* readonly */ lineSpacing: number;

	/* readonly */ maximumLineHeight: number;

	/* readonly */ minimumLineHeight: number;

	/* readonly */ paragraphSpacing: number;

	/* readonly */ paragraphSpacingBefore: number;

	/* readonly */ tabStops: NSArray<NSTextTab>;

	/* readonly */ tailIndent: number;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	mutableCopyWithZone(zone: interop.Pointer): any; // inherited from NSMutableCopying

	self(): NSParagraphStyle; // inherited from NSObjectProtocol
}

declare var NSParagraphStyleAttributeName: string;

declare var NSPlainTextDocumentType: string;

declare var NSRTFDTextDocumentType: string;

declare var NSRTFTextDocumentType: string;

declare var NSReadOnlyDocumentAttribute: string;

declare class NSShadow extends NSObject implements NSCoding, NSCopying {

	static alloc(): NSShadow; // inherited from NSObject

	static new(): NSShadow; // inherited from NSObject

	shadowBlurRadius: number;

	shadowColor: any;

	shadowOffset: CGSize;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NSShadow; // inherited from NSObjectProtocol
}

declare var NSShadowAttributeName: string;

declare var NSStrikethroughColorAttributeName: string;

declare var NSStrikethroughStyleAttributeName: string;

declare class NSStringDrawingContext extends NSObject {

	static alloc(): NSStringDrawingContext; // inherited from NSObject

	static new(): NSStringDrawingContext; // inherited from NSObject

	/* readonly */ actualScaleFactor: number;

	/* readonly */ actualTrackingAdjustment: number;

	minimumScaleFactor: number;

	minimumTrackingAdjustment: number;

	/* readonly */ totalBounds: CGRect;

	constructor(); // inherited from NSObject

	self(): NSStringDrawingContext; // inherited from NSObjectProtocol
}

declare const enum NSStringDrawingOptions {

	UsesLineFragmentOrigin = 1,

	UsesFontLeading = 2,

	UsesDeviceMetrics = 8,

	TruncatesLastVisibleLine = 32
}

declare function NSStringFromCGAffineTransform(transform: CGAffineTransform): string;

declare function NSStringFromCGPoint(point: CGPoint): string;

declare function NSStringFromCGRect(rect: CGRect): string;

declare function NSStringFromCGSize(size: CGSize): string;

declare function NSStringFromCGVector(vector: CGVector): string;

declare function NSStringFromUIEdgeInsets(insets: UIEdgeInsets): string;

declare function NSStringFromUIOffset(offset: UIOffset): string;

declare var NSStrokeColorAttributeName: string;

declare var NSStrokeWidthAttributeName: string;

declare var NSTabColumnTerminatorsAttributeName: string;

declare const enum NSTextAlignment {

	Left = 0,

	Center = 1,

	Right = 2,

	Justified = 3,

	Natural = 4
}

declare function NSTextAlignmentFromCTTextAlignment(ctTextAlignment: CTTextAlignment): NSTextAlignment;

declare function NSTextAlignmentToCTTextAlignment(nsTextAlignment: NSTextAlignment): CTTextAlignment;

declare class NSTextAttachment extends NSObject implements NSCoding, NSTextAttachmentContainer {

	static alloc(): NSTextAttachment; // inherited from NSObject

	static new(): NSTextAttachment; // inherited from NSObject

	bounds: CGRect;

	contents: NSData;

	fileType: string;

	fileWrapper: NSFileWrapper;

	image: UIImage;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { data: NSData; ofType: string; });

	attachmentBoundsForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(textContainer: NSTextContainer, lineFrag: CGRect, position: CGPoint, charIndex: number): CGRect; // inherited from NSTextAttachmentContainer

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	imageForBoundsTextContainerCharacterIndex(imageBounds: CGRect, textContainer: NSTextContainer, charIndex: number): UIImage; // inherited from NSTextAttachmentContainer

	self(): NSTextAttachment; // inherited from NSObjectProtocol
}

interface NSTextAttachmentContainer extends NSObjectProtocol {

	attachmentBoundsForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(textContainer: NSTextContainer, lineFrag: CGRect, position: CGPoint, charIndex: number): CGRect;

	imageForBoundsTextContainerCharacterIndex(imageBounds: CGRect, textContainer: NSTextContainer, charIndex: number): UIImage;
}
declare var NSTextAttachmentContainer: {

	prototype: NSTextAttachmentContainer;
};

declare class NSTextContainer extends NSObject implements NSCoding, NSTextLayoutOrientationProvider {

	static alloc(): NSTextContainer; // inherited from NSObject

	static new(): NSTextContainer; // inherited from NSObject

	exclusionPaths: NSArray<UIBezierPath>;

	heightTracksTextView: boolean;

	layoutManager: NSLayoutManager;

	lineBreakMode: NSLineBreakMode;

	lineFragmentPadding: number;

	maximumNumberOfLines: number;

	/* readonly */ simpleRectangularTextContainer: boolean;

	size: CGSize;

	widthTracksTextView: boolean;

	/* readonly */ layoutOrientation: NSTextLayoutOrientation; // inherited from NSTextLayoutOrientationProvider

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { size: CGSize; });

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	lineFragmentRectForProposedRectAtIndexWritingDirectionRemainingRect(proposedRect: CGRect, characterIndex: number, baseWritingDirection: NSWritingDirection, remainingRect: interop.Reference<CGRect>): CGRect;

	replaceLayoutManager(newLayoutManager: NSLayoutManager): void;

	self(): NSTextContainer; // inherited from NSObjectProtocol
}

declare var NSTextEffectAttributeName: string;

declare var NSTextEffectLetterpressStyle: string;

declare const enum NSTextLayoutOrientation {

	Horizontal = 0,

	Vertical = 1
}

interface NSTextLayoutOrientationProvider {

	layoutOrientation: NSTextLayoutOrientation;
}
declare var NSTextLayoutOrientationProvider: {

	prototype: NSTextLayoutOrientationProvider;
};

declare var NSTextLayoutSectionOrientation: string;

declare var NSTextLayoutSectionRange: string;

declare var NSTextLayoutSectionsAttribute: string;

declare class NSTextStorage extends NSMutableAttributedString {

	/* readonly */ changeInLength: number;

	delegate: NSTextStorageDelegate;

	/* readonly */ editedMask: NSTextStorageEditActions;

	/* readonly */ editedRange: NSRange;

	/* readonly */ fixesAttributesLazily: boolean;

	/* readonly */ layoutManagers: NSArray<NSLayoutManager>;

	addLayoutManager(aLayoutManager: NSLayoutManager): void;

	editedRangeChangeInLength(editedMask: NSTextStorageEditActions, editedRange: NSRange, delta: number): void;

	ensureAttributesAreFixedInRange(range: NSRange): void;

	invalidateAttributesInRange(range: NSRange): void;

	processEditing(): void;

	removeLayoutManager(aLayoutManager: NSLayoutManager): void;
}

interface NSTextStorageDelegate extends NSObjectProtocol {

	textStorageDidProcessEditingRangeChangeInLength?(textStorage: NSTextStorage, editedMask: NSTextStorageEditActions, editedRange: NSRange, delta: number): void;

	textStorageWillProcessEditingRangeChangeInLength?(textStorage: NSTextStorage, editedMask: NSTextStorageEditActions, editedRange: NSRange, delta: number): void;
}
declare var NSTextStorageDelegate: {

	prototype: NSTextStorageDelegate;
};

declare var NSTextStorageDidProcessEditingNotification: string;

declare const enum NSTextStorageEditActions {

	EditedAttributes = 1,

	EditedCharacters = 2
}

declare var NSTextStorageWillProcessEditingNotification: string;

declare class NSTextTab extends NSObject implements NSCoding, NSCopying {

	static alloc(): NSTextTab; // inherited from NSObject

	static columnTerminatorsForLocale(aLocale: NSLocale): NSCharacterSet;

	static new(): NSTextTab; // inherited from NSObject

	/* readonly */ alignment: NSTextAlignment;

	/* readonly */ location: number;

	/* readonly */ options: NSDictionary<string, any>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { textAlignment: NSTextAlignment; location: number; options: NSDictionary<string, any>; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NSTextTab; // inherited from NSObjectProtocol
}

declare const enum NSTextWritingDirection {

	Embedding = 0,

	Override = 2
}

declare var NSUnderlineColorAttributeName: string;

declare const enum NSUnderlineStyle {

	StyleNone = 0,

	StyleSingle = 1,

	StyleThick = 2,

	StyleDouble = 9,

	PatternSolid = 0,

	PatternDot = 256,

	PatternDash = 512,

	PatternDashDot = 768,

	PatternDashDotDot = 1024,

	ByWord = 32768
}

declare var NSUnderlineStyleAttributeName: string;

declare var NSUserActivityDocumentURLKey: string;

declare var NSVerticalGlyphFormAttributeName: string;

declare var NSViewModeDocumentAttribute: string;

declare var NSViewSizeDocumentAttribute: string;

declare var NSViewZoomDocumentAttribute: string;

declare const enum NSWritingDirection {

	Natural = -1,

	LeftToRight = 0,

	RightToLeft = 1
}

declare var NSWritingDirectionAttributeName: string;

declare const enum NSWritingDirectionFormatType {

	Embedding = 0,

	Override = 2
}

declare class UIAcceleration extends NSObject {

	static alloc(): UIAcceleration; // inherited from NSObject

	static new(): UIAcceleration; // inherited from NSObject

	/* readonly */ timestamp: number;

	/* readonly */ x: number;

	/* readonly */ y: number;

	/* readonly */ z: number;

	constructor(); // inherited from NSObject

	self(): UIAcceleration; // inherited from NSObjectProtocol
}

declare class UIAccelerometer extends NSObject {

	static alloc(): UIAccelerometer; // inherited from NSObject

	static new(): UIAccelerometer; // inherited from NSObject

	static sharedAccelerometer(): UIAccelerometer;

	delegate: UIAccelerometerDelegate;

	updateInterval: number;

	constructor(); // inherited from NSObject

	self(): UIAccelerometer; // inherited from NSObjectProtocol
}

interface UIAccelerometerDelegate extends NSObjectProtocol {

	accelerometerDidAccelerate?(accelerometer: UIAccelerometer, acceleration: UIAcceleration): void;
}
declare var UIAccelerometerDelegate: {

	prototype: UIAccelerometerDelegate;
};

declare var UIAccessibilityAnnouncementDidFinishNotification: string;

declare var UIAccessibilityAnnouncementKeyStringValue: string;

declare var UIAccessibilityAnnouncementKeyWasSuccessful: string;

declare var UIAccessibilityAnnouncementNotification: number;

declare var UIAccessibilityAssistiveTechnologyKey: string;

declare var UIAccessibilityBoldTextStatusDidChangeNotification: string;

declare var UIAccessibilityClosedCaptioningStatusDidChangeNotification: string;

declare function UIAccessibilityConvertFrameToScreenCoordinates(rect: CGRect, view: UIView): CGRect;

declare function UIAccessibilityConvertPathToScreenCoordinates(path: UIBezierPath, view: UIView): UIBezierPath;

declare class UIAccessibilityCustomAction extends NSObject {

	static alloc(): UIAccessibilityCustomAction; // inherited from NSObject

	static new(): UIAccessibilityCustomAction; // inherited from NSObject

	name: string;

	selector: string;

	target: any;

	constructor(); // inherited from NSObject

	constructor(o: { name: string; target: any; selector: string; });

	self(): UIAccessibilityCustomAction; // inherited from NSObjectProtocol
}

declare function UIAccessibilityDarkerSystemColorsEnabled(): boolean;

declare var UIAccessibilityDarkerSystemColorsStatusDidChangeNotification: string;

declare class UIAccessibilityElement extends NSObject implements UIAccessibilityIdentification {

	static alloc(): UIAccessibilityElement; // inherited from NSObject

	static new(): UIAccessibilityElement; // inherited from NSObject

	accessibilityContainer: any;

	accessibilityIdentifier: string; // inherited from UIAccessibilityIdentification

	constructor(); // inherited from NSObject

	constructor(o: { accessibilityContainer: any; });

	self(): UIAccessibilityElement; // inherited from NSObjectProtocol
}

declare var UIAccessibilityElementFocusedNotification: string;

declare function UIAccessibilityFocusedElement(assistiveTechnologyIdentifier: string): any;

declare var UIAccessibilityFocusedElementKey: string;

declare var UIAccessibilityGrayscaleStatusDidChangeNotification: string;

declare var UIAccessibilityGuidedAccessStatusDidChangeNotification: string;

interface UIAccessibilityIdentification extends NSObjectProtocol {

	accessibilityIdentifier: string;
}
declare var UIAccessibilityIdentification: {

	prototype: UIAccessibilityIdentification;
};

declare var UIAccessibilityInvertColorsStatusDidChangeNotification: string;

declare function UIAccessibilityIsBoldTextEnabled(): boolean;

declare function UIAccessibilityIsClosedCaptioningEnabled(): boolean;

declare function UIAccessibilityIsGrayscaleEnabled(): boolean;

declare function UIAccessibilityIsGuidedAccessEnabled(): boolean;

declare function UIAccessibilityIsInvertColorsEnabled(): boolean;

declare function UIAccessibilityIsMonoAudioEnabled(): boolean;

declare function UIAccessibilityIsReduceMotionEnabled(): boolean;

declare function UIAccessibilityIsReduceTransparencyEnabled(): boolean;

declare function UIAccessibilityIsShakeToUndoEnabled(): boolean;

declare function UIAccessibilityIsSpeakScreenEnabled(): boolean;

declare function UIAccessibilityIsSpeakSelectionEnabled(): boolean;

declare function UIAccessibilityIsSwitchControlRunning(): boolean;

declare function UIAccessibilityIsVoiceOverRunning(): boolean;

declare var UIAccessibilityLayoutChangedNotification: number;

declare var UIAccessibilityMonoAudioStatusDidChangeNotification: string;

declare const enum UIAccessibilityNavigationStyle {

	Automatic = 0,

	Separate = 1,

	Combined = 2
}

declare var UIAccessibilityNotificationSwitchControlIdentifier: string;

declare var UIAccessibilityNotificationVoiceOverIdentifier: string;

declare var UIAccessibilityPageScrolledNotification: number;

declare var UIAccessibilityPauseAssistiveTechnologyNotification: number;

declare function UIAccessibilityPostNotification(notification: number, argument: any): void;

interface UIAccessibilityReadingContent {

	accessibilityContentForLineNumber(lineNumber: number): string;

	accessibilityFrameForLineNumber(lineNumber: number): CGRect;

	accessibilityLineNumberForPoint(point: CGPoint): number;

	accessibilityPageContent(): string;
}
declare var UIAccessibilityReadingContent: {

	prototype: UIAccessibilityReadingContent;
};

declare var UIAccessibilityReduceMotionStatusDidChangeNotification: string;

declare var UIAccessibilityReduceTransparencyStatusDidChangeNotification: string;

declare function UIAccessibilityRegisterGestureConflictWithZoom(): void;

declare function UIAccessibilityRequestGuidedAccessSession(enable: boolean, completionHandler: (p1: boolean) => void): void;

declare var UIAccessibilityResumeAssistiveTechnologyNotification: number;

declare var UIAccessibilityScreenChangedNotification: number;

declare const enum UIAccessibilityScrollDirection {

	Right = 1,

	Left = 2,

	Up = 3,

	Down = 4,

	Next = 5,

	Previous = 6
}

declare var UIAccessibilityShakeToUndoDidChangeNotification: string;

declare var UIAccessibilitySpeakScreenStatusDidChangeNotification: string;

declare var UIAccessibilitySpeakSelectionStatusDidChangeNotification: string;

declare var UIAccessibilitySpeechAttributeLanguage: string;

declare var UIAccessibilitySpeechAttributePitch: string;

declare var UIAccessibilitySpeechAttributePunctuation: string;

declare var UIAccessibilitySwitchControlStatusDidChangeNotification: string;

declare var UIAccessibilityTraitAdjustable: number;

declare var UIAccessibilityTraitAllowsDirectInteraction: number;

declare var UIAccessibilityTraitButton: number;

declare var UIAccessibilityTraitCausesPageTurn: number;

declare var UIAccessibilityTraitHeader: number;

declare var UIAccessibilityTraitImage: number;

declare var UIAccessibilityTraitKeyboardKey: number;

declare var UIAccessibilityTraitLink: number;

declare var UIAccessibilityTraitNone: number;

declare var UIAccessibilityTraitNotEnabled: number;

declare var UIAccessibilityTraitPlaysSound: number;

declare var UIAccessibilityTraitSearchField: number;

declare var UIAccessibilityTraitSelected: number;

declare var UIAccessibilityTraitStartsMediaSession: number;

declare var UIAccessibilityTraitStaticText: number;

declare var UIAccessibilityTraitSummaryElement: number;

declare var UIAccessibilityTraitUpdatesFrequently: number;

declare var UIAccessibilityUnfocusedElementKey: string;

declare var UIAccessibilityVoiceOverStatusChanged: string;

declare function UIAccessibilityZoomFocusChanged(type: UIAccessibilityZoomType, frame: CGRect, view: UIView): void;

declare const enum UIAccessibilityZoomType {

	InsertionPoint = 0
}

declare class UIActionSheet extends UIView {

	static appearance(): UIActionSheet; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIActionSheet; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIActionSheet; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIActionSheet; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIActionSheet; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIActionSheet; // inherited from UIAppearance

	actionSheetStyle: UIActionSheetStyle;

	cancelButtonIndex: number;

	delegate: UIActionSheetDelegate;

	destructiveButtonIndex: number;

	/* readonly */ firstOtherButtonIndex: number;

	/* readonly */ numberOfButtons: number;

	title: string;

	/* readonly */ visible: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	constructor(o: { title: string; delegate: UIActionSheetDelegate; cancelButtonTitle: string; destructiveButtonTitle: string; otherButtonTitles: string; });

	addButtonWithTitle(title: string): number;

	buttonTitleAtIndex(buttonIndex: number): string;

	dismissWithClickedButtonIndexAnimated(buttonIndex: number, animated: boolean): void;

	self(): UIActionSheet; // inherited from NSObjectProtocol

	showFromBarButtonItemAnimated(item: UIBarButtonItem, animated: boolean): void;

	showFromRectInViewAnimated(rect: CGRect, view: UIView, animated: boolean): void;

	showFromTabBar(view: UITabBar): void;

	showFromToolbar(view: UIToolbar): void;

	showInView(view: UIView): void;
}

interface UIActionSheetDelegate extends NSObjectProtocol {

	actionSheetCancel?(actionSheet: UIActionSheet): void;

	actionSheetClickedButtonAtIndex?(actionSheet: UIActionSheet, buttonIndex: number): void;

	actionSheetDidDismissWithButtonIndex?(actionSheet: UIActionSheet, buttonIndex: number): void;

	actionSheetWillDismissWithButtonIndex?(actionSheet: UIActionSheet, buttonIndex: number): void;

	didPresentActionSheet?(actionSheet: UIActionSheet): void;

	willPresentActionSheet?(actionSheet: UIActionSheet): void;
}
declare var UIActionSheetDelegate: {

	prototype: UIActionSheetDelegate;
};

declare const enum UIActionSheetStyle {

	Automatic = -1,

	Default = 0,

	BlackTranslucent = 2,

	BlackOpaque = 1
}

declare class UIActivity extends NSObject {

	static activityCategory(): UIActivityCategory;

	static alloc(): UIActivity; // inherited from NSObject

	static new(): UIActivity; // inherited from NSObject

	constructor(); // inherited from NSObject

	activityDidFinish(completed: boolean): void;

	activityImage(): UIImage;

	activityTitle(): string;

	activityType(): string;

	activityViewController(): UIViewController;

	canPerformWithActivityItems(activityItems: NSArray<any>): boolean;

	performActivity(): void;

	prepareWithActivityItems(activityItems: NSArray<any>): void;

	self(): UIActivity; // inherited from NSObjectProtocol
}

declare const enum UIActivityCategory {

	Action = 0,

	Share = 1
}

declare class UIActivityIndicatorView extends UIView implements NSCoding {

	static appearance(): UIActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIActivityIndicatorView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIActivityIndicatorView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIActivityIndicatorView; // inherited from UIAppearance

	activityIndicatorViewStyle: UIActivityIndicatorViewStyle;

	color: UIColor;

	hidesWhenStopped: boolean;

	constructor(o: { activityIndicatorStyle: UIActivityIndicatorViewStyle; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	isAnimating(): boolean;

	self(): UIActivityIndicatorView; // inherited from NSObjectProtocol

	startAnimating(): void;

	stopAnimating(): void;
}

declare const enum UIActivityIndicatorViewStyle {

	WhiteLarge = 0,

	White = 1,

	Gray = 2
}

declare class UIActivityItemProvider extends NSOperation implements UIActivityItemSource {

	/* readonly */ activityType: string;

	/* readonly */ placeholderItem: any;

	/* readonly */ debugDescription: string; // inherited from NSObjectProtocol

	/* readonly */ description: string; // inherited from NSObjectProtocol

	/* readonly */ hash: number; // inherited from NSObjectProtocol

	/* readonly */ isProxy: boolean; // inherited from NSObjectProtocol

	/* readonly */ superclass: typeof NSObject; // inherited from NSObjectProtocol

	/* readonly */ zone: interop.Pointer; // inherited from NSObjectProtocol

	constructor(o: { placeholderItem: any; });

	activityViewControllerDataTypeIdentifierForActivityType(activityViewController: UIActivityViewController, activityType: string): string; // inherited from UIActivityItemSource

	activityViewControllerItemForActivityType(activityViewController: UIActivityViewController, activityType: string): any; // inherited from UIActivityItemSource

	activityViewControllerPlaceholderItem(activityViewController: UIActivityViewController): any; // inherited from UIActivityItemSource

	activityViewControllerSubjectForActivityType(activityViewController: UIActivityViewController, activityType: string): string; // inherited from UIActivityItemSource

	activityViewControllerThumbnailImageForActivityTypeSuggestedSize(activityViewController: UIActivityViewController, activityType: string, size: CGSize): UIImage; // inherited from UIActivityItemSource

	class(): typeof NSObject; // inherited from NSObjectProtocol

	conformsToProtocol(aProtocol: any /* Protocol */): boolean; // inherited from NSObjectProtocol

	isEqual(object: any): boolean; // inherited from NSObjectProtocol

	isKindOfClass(aClass: typeof NSObject): boolean; // inherited from NSObjectProtocol

	isMemberOfClass(aClass: typeof NSObject): boolean; // inherited from NSObjectProtocol

	item(): any;

	performSelector(aSelector: string): any; // inherited from NSObjectProtocol

	performSelectorWithObject(aSelector: string, object: any): any; // inherited from NSObjectProtocol

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any; // inherited from NSObjectProtocol

	respondsToSelector(aSelector: string): boolean; // inherited from NSObjectProtocol

	retainCount(): number; // inherited from NSObjectProtocol

	self(): UIActivityItemProvider; // inherited from NSObjectProtocol
}

interface UIActivityItemSource extends NSObjectProtocol {

	activityViewControllerDataTypeIdentifierForActivityType?(activityViewController: UIActivityViewController, activityType: string): string;

	activityViewControllerItemForActivityType(activityViewController: UIActivityViewController, activityType: string): any;

	activityViewControllerPlaceholderItem(activityViewController: UIActivityViewController): any;

	activityViewControllerSubjectForActivityType?(activityViewController: UIActivityViewController, activityType: string): string;

	activityViewControllerThumbnailImageForActivityTypeSuggestedSize?(activityViewController: UIActivityViewController, activityType: string, size: CGSize): UIImage;
}
declare var UIActivityItemSource: {

	prototype: UIActivityItemSource;
};

declare var UIActivityTypeAddToReadingList: string;

declare var UIActivityTypeAirDrop: string;

declare var UIActivityTypeAssignToContact: string;

declare var UIActivityTypeCopyToPasteboard: string;

declare var UIActivityTypeMail: string;

declare var UIActivityTypeMessage: string;

declare var UIActivityTypeOpenInIBooks: string;

declare var UIActivityTypePostToFacebook: string;

declare var UIActivityTypePostToFlickr: string;

declare var UIActivityTypePostToTencentWeibo: string;

declare var UIActivityTypePostToTwitter: string;

declare var UIActivityTypePostToVimeo: string;

declare var UIActivityTypePostToWeibo: string;

declare var UIActivityTypePrint: string;

declare var UIActivityTypeSaveToCameraRoll: string;

declare class UIActivityViewController extends UIViewController {

	completionHandler: (p1: string, p2: boolean) => void;

	completionWithItemsHandler: (p1: string, p2: boolean, p3: NSArray<any>, p4: NSError) => void;

	excludedActivityTypes: NSArray<string>;

	constructor(o: { activityItems: NSArray<any>; applicationActivities: NSArray<UIActivity>; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	self(): UIActivityViewController; // inherited from NSObjectProtocol
}

interface UIAdaptivePresentationControllerDelegate extends NSObjectProtocol {

	adaptivePresentationStyleForPresentationController?(controller: UIPresentationController): UIModalPresentationStyle;

	adaptivePresentationStyleForPresentationControllerTraitCollection?(controller: UIPresentationController, traitCollection: UITraitCollection): UIModalPresentationStyle;

	presentationControllerViewControllerForAdaptivePresentationStyle?(controller: UIPresentationController, style: UIModalPresentationStyle): UIViewController;

	presentationControllerWillPresentWithAdaptiveStyleTransitionCoordinator?(presentationController: UIPresentationController, style: UIModalPresentationStyle, transitionCoordinator: UIViewControllerTransitionCoordinator): void;
}
declare var UIAdaptivePresentationControllerDelegate: {

	prototype: UIAdaptivePresentationControllerDelegate;
};

declare class UIAlertAction extends NSObject implements NSCopying {

	static actionWithTitleStyleHandler(title: string, style: UIAlertActionStyle, handler: (p1: UIAlertAction) => void): UIAlertAction;

	static alloc(): UIAlertAction; // inherited from NSObject

	static new(): UIAlertAction; // inherited from NSObject

	enabled: boolean;

	/* readonly */ style: UIAlertActionStyle;

	/* readonly */ title: string;

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): UIAlertAction; // inherited from NSObjectProtocol
}

declare const enum UIAlertActionStyle {

	Default = 0,

	Cancel = 1,

	Destructive = 2
}

declare class UIAlertController extends UIViewController {

	static alertControllerWithTitleMessagePreferredStyle(title: string, message: string, preferredStyle: UIAlertControllerStyle): UIAlertController;

	/* readonly */ actions: NSArray<UIAlertAction>;

	message: string;

	preferredAction: UIAlertAction;

	/* readonly */ preferredStyle: UIAlertControllerStyle;

	/* readonly */ textFields: NSArray<UITextField>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	addAction(action: UIAlertAction): void;

	addTextFieldWithConfigurationHandler(configurationHandler: (p1: UITextField) => void): void;

	self(): UIAlertController; // inherited from NSObjectProtocol
}

declare const enum UIAlertControllerStyle {

	ActionSheet = 0,

	Alert = 1
}

declare class UIAlertView extends UIView {

	static appearance(): UIAlertView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIAlertView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIAlertView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIAlertView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIAlertView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIAlertView; // inherited from UIAppearance

	alertViewStyle: UIAlertViewStyle;

	cancelButtonIndex: number;

	delegate: any;

	/* readonly */ firstOtherButtonIndex: number;

	message: string;

	/* readonly */ numberOfButtons: number;

	title: string;

	/* readonly */ visible: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	constructor(o: { title: string; message: string; delegate: any; cancelButtonTitle: string; otherButtonTitles: string; });

	addButtonWithTitle(title: string): number;

	buttonTitleAtIndex(buttonIndex: number): string;

	dismissWithClickedButtonIndexAnimated(buttonIndex: number, animated: boolean): void;

	self(): UIAlertView; // inherited from NSObjectProtocol

	show(): void;

	textFieldAtIndex(textFieldIndex: number): UITextField;
}

interface UIAlertViewDelegate extends NSObjectProtocol {

	alertViewCancel?(alertView: UIAlertView): void;

	alertViewClickedButtonAtIndex?(alertView: UIAlertView, buttonIndex: number): void;

	alertViewDidDismissWithButtonIndex?(alertView: UIAlertView, buttonIndex: number): void;

	alertViewShouldEnableFirstOtherButton?(alertView: UIAlertView): boolean;

	alertViewWillDismissWithButtonIndex?(alertView: UIAlertView, buttonIndex: number): void;

	didPresentAlertView?(alertView: UIAlertView): void;

	willPresentAlertView?(alertView: UIAlertView): void;
}
declare var UIAlertViewDelegate: {

	prototype: UIAlertViewDelegate;
};

declare const enum UIAlertViewStyle {

	Default = 0,

	SecureTextInput = 1,

	PlainTextInput = 2,

	LoginAndPasswordInput = 3
}

interface UIAppearance extends NSObjectProtocol {
}
declare var UIAppearance: {

	prototype: UIAppearance;

	appearance(): UIAppearance;

	appearanceForTraitCollection(trait: UITraitCollection): UIAppearance;

	appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIAppearance;

	appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIAppearance;

	appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIAppearance;

	appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIAppearance;
};

interface UIAppearanceContainer extends NSObjectProtocol {
}
declare var UIAppearanceContainer: {

	prototype: UIAppearanceContainer;
};

declare class UIApplication extends UIResponder {

	static registerObjectForStateRestorationRestorationIdentifier(object: UIStateRestoring, restorationIdentifier: string): void;

	static sharedApplication(): UIApplication;

	applicationIconBadgeNumber: number;

	/* readonly */ applicationState: UIApplicationState;

	applicationSupportsShakeToEdit: boolean;

	/* readonly */ backgroundRefreshStatus: UIBackgroundRefreshStatus;

	/* readonly */ backgroundTimeRemaining: number;

	delegate: UIApplicationDelegate;

	idleTimerDisabled: boolean;

	/* readonly */ keyWindow: UIWindow;

	networkActivityIndicatorVisible: boolean;

	/* readonly */ preferredContentSizeCategory: string;

	/* readonly */ protectedDataAvailable: boolean;

	proximitySensingEnabled: boolean;

	scheduledLocalNotifications: NSArray<UILocalNotification>;

	shortcutItems: NSArray<UIApplicationShortcutItem>;

	/* readonly */ statusBarFrame: CGRect;

	/* readonly */ statusBarHidden: boolean;

	/* readonly */ statusBarOrientation: UIInterfaceOrientation;

	/* readonly */ statusBarOrientationAnimationDuration: number;

	/* readonly */ statusBarStyle: UIStatusBarStyle;

	/* readonly */ userInterfaceLayoutDirection: UIUserInterfaceLayoutDirection;

	/* readonly */ windows: NSArray<UIWindow>;

	beginBackgroundTaskWithExpirationHandler(handler: () => void): number;

	beginBackgroundTaskWithNameExpirationHandler(taskName: string, handler: () => void): number;

	beginIgnoringInteractionEvents(): void;

	beginReceivingRemoteControlEvents(): void;

	canOpenURL(url: NSURL): boolean;

	cancelAllLocalNotifications(): void;

	cancelLocalNotification(notification: UILocalNotification): void;

	clearKeepAliveTimeout(): void;

	completeStateRestoration(): void;

	currentUserNotificationSettings(): UIUserNotificationSettings;

	enabledRemoteNotificationTypes(): UIRemoteNotificationType;

	endBackgroundTask(identifier: number): void;

	endIgnoringInteractionEvents(): void;

	endReceivingRemoteControlEvents(): void;

	extendStateRestoration(): void;

	ignoreSnapshotOnNextApplicationLaunch(): void;

	isIgnoringInteractionEvents(): boolean;

	isRegisteredForRemoteNotifications(): boolean;

	openURL(url: NSURL): boolean;

	presentLocalNotificationNow(notification: UILocalNotification): void;

	registerForRemoteNotificationTypes(types: UIRemoteNotificationType): void;

	registerForRemoteNotifications(): void;

	registerUserNotificationSettings(notificationSettings: UIUserNotificationSettings): void;

	scheduleLocalNotification(notification: UILocalNotification): void;

	sendActionToFromForEvent(action: string, target: any, sender: any, event: UIEvent): boolean;

	sendEvent(event: UIEvent): void;

	setKeepAliveTimeoutHandler(timeout: number, keepAliveHandler: () => void): boolean;

	setMinimumBackgroundFetchInterval(minimumBackgroundFetchInterval: number): void;

	setNewsstandIconImage(image: UIImage): void;

	setStatusBarHiddenAnimated(hidden: boolean, animated: boolean): void;

	setStatusBarHiddenWithAnimation(hidden: boolean, animation: UIStatusBarAnimation): void;

	setStatusBarOrientationAnimated(interfaceOrientation: UIInterfaceOrientation, animated: boolean): void;

	setStatusBarStyleAnimated(statusBarStyle: UIStatusBarStyle, animated: boolean): void;

	supportedInterfaceOrientationsForWindow(window: UIWindow): UIInterfaceOrientationMask;

	unregisterForRemoteNotifications(): void;
}

declare var UIApplicationBackgroundFetchIntervalMinimum: number;

declare var UIApplicationBackgroundFetchIntervalNever: number;

declare var UIApplicationBackgroundRefreshStatusDidChangeNotification: string;

interface UIApplicationDelegate extends NSObjectProtocol {

	window?: UIWindow;

	applicationContinueUserActivityRestorationHandler?(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<any>) => void): boolean;

	applicationDidBecomeActive?(application: UIApplication): void;

	applicationDidChangeStatusBarFrame?(application: UIApplication, oldStatusBarFrame: CGRect): void;

	applicationDidChangeStatusBarOrientation?(application: UIApplication, oldStatusBarOrientation: UIInterfaceOrientation): void;

	applicationDidDecodeRestorableStateWithCoder?(application: UIApplication, coder: NSCoder): void;

	applicationDidEnterBackground?(application: UIApplication): void;

	applicationDidFailToContinueUserActivityWithTypeError?(application: UIApplication, userActivityType: string, error: NSError): void;

	applicationDidFailToRegisterForRemoteNotificationsWithError?(application: UIApplication, error: NSError): void;

	applicationDidFinishLaunching?(application: UIApplication): void;

	applicationDidFinishLaunchingWithOptions?(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean;

	applicationDidReceiveLocalNotification?(application: UIApplication, notification: UILocalNotification): void;

	applicationDidReceiveMemoryWarning?(application: UIApplication): void;

	applicationDidReceiveRemoteNotification?(application: UIApplication, userInfo: NSDictionary<any, any>): void;

	applicationDidReceiveRemoteNotificationFetchCompletionHandler?(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	applicationDidRegisterForRemoteNotificationsWithDeviceToken?(application: UIApplication, deviceToken: NSData): void;

	applicationDidRegisterUserNotificationSettings?(application: UIApplication, notificationSettings: UIUserNotificationSettings): void;

	applicationDidUpdateUserActivity?(application: UIApplication, userActivity: NSUserActivity): void;

	applicationHandleActionWithIdentifierForLocalNotificationCompletionHandler?(application: UIApplication, identifier: string, notification: UILocalNotification, completionHandler: () => void): void;

	applicationHandleActionWithIdentifierForLocalNotificationWithResponseInfoCompletionHandler?(application: UIApplication, identifier: string, notification: UILocalNotification, responseInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	applicationHandleActionWithIdentifierForRemoteNotificationCompletionHandler?(application: UIApplication, identifier: string, userInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	applicationHandleActionWithIdentifierForRemoteNotificationWithResponseInfoCompletionHandler?(application: UIApplication, identifier: string, userInfo: NSDictionary<any, any>, responseInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	applicationHandleEventsForBackgroundURLSessionCompletionHandler?(application: UIApplication, identifier: string, completionHandler: () => void): void;

	applicationHandleOpenURL?(application: UIApplication, url: NSURL): boolean;

	applicationHandleWatchKitExtensionRequestReply?(application: UIApplication, userInfo: NSDictionary<any, any>, reply: (p1: NSDictionary<any, any>) => void): void;

	applicationOpenURLOptions?(app: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

	applicationOpenURLSourceApplicationAnnotation?(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;

	applicationPerformActionForShortcutItemCompletionHandler?(application: UIApplication, shortcutItem: UIApplicationShortcutItem, completionHandler: (p1: boolean) => void): void;

	applicationPerformFetchWithCompletionHandler?(application: UIApplication, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	applicationProtectedDataDidBecomeAvailable?(application: UIApplication): void;

	applicationProtectedDataWillBecomeUnavailable?(application: UIApplication): void;

	applicationShouldAllowExtensionPointIdentifier?(application: UIApplication, extensionPointIdentifier: string): boolean;

	applicationShouldRequestHealthAuthorization?(application: UIApplication): void;

	applicationShouldRestoreApplicationState?(application: UIApplication, coder: NSCoder): boolean;

	applicationShouldSaveApplicationState?(application: UIApplication, coder: NSCoder): boolean;

	applicationSignificantTimeChange?(application: UIApplication): void;

	applicationSupportedInterfaceOrientationsForWindow?(application: UIApplication, window: UIWindow): UIInterfaceOrientationMask;

	applicationViewControllerWithRestorationIdentifierPathCoder?(application: UIApplication, identifierComponents: NSArray<any>, coder: NSCoder): UIViewController;

	applicationWillChangeStatusBarFrame?(application: UIApplication, newStatusBarFrame: CGRect): void;

	applicationWillChangeStatusBarOrientationDuration?(application: UIApplication, newStatusBarOrientation: UIInterfaceOrientation, duration: number): void;

	applicationWillContinueUserActivityWithType?(application: UIApplication, userActivityType: string): boolean;

	applicationWillEncodeRestorableStateWithCoder?(application: UIApplication, coder: NSCoder): void;

	applicationWillEnterForeground?(application: UIApplication): void;

	applicationWillFinishLaunchingWithOptions?(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean;

	applicationWillResignActive?(application: UIApplication): void;

	applicationWillTerminate?(application: UIApplication): void;
}
declare var UIApplicationDelegate: {

	prototype: UIApplicationDelegate;
};

declare var UIApplicationDidBecomeActiveNotification: string;

declare var UIApplicationDidChangeStatusBarFrameNotification: string;

declare var UIApplicationDidChangeStatusBarOrientationNotification: string;

declare var UIApplicationDidEnterBackgroundNotification: string;

declare var UIApplicationDidFinishLaunchingNotification: string;

declare var UIApplicationDidReceiveMemoryWarningNotification: string;

declare var UIApplicationInvalidInterfaceOrientationException: string;

declare var UIApplicationKeyboardExtensionPointIdentifier: string;

declare var UIApplicationLaunchOptionsAnnotationKey: string;

declare var UIApplicationLaunchOptionsBluetoothCentralsKey: string;

declare var UIApplicationLaunchOptionsBluetoothPeripheralsKey: string;

declare var UIApplicationLaunchOptionsLocalNotificationKey: string;

declare var UIApplicationLaunchOptionsLocationKey: string;

declare var UIApplicationLaunchOptionsNewsstandDownloadsKey: string;

declare var UIApplicationLaunchOptionsRemoteNotificationKey: string;

declare var UIApplicationLaunchOptionsShortcutItemKey: string;

declare var UIApplicationLaunchOptionsSourceApplicationKey: string;

declare var UIApplicationLaunchOptionsURLKey: string;

declare var UIApplicationLaunchOptionsUserActivityDictionaryKey: string;

declare var UIApplicationLaunchOptionsUserActivityTypeKey: string;

declare function UIApplicationMain(argc: number, argv: interop.Reference<string>, principalClassName: string, delegateClassName: string): number;

declare var UIApplicationOpenSettingsURLString: string;

declare var UIApplicationOpenURLOptionsAnnotationKey: string;

declare var UIApplicationOpenURLOptionsOpenInPlaceKey: string;

declare var UIApplicationOpenURLOptionsSourceApplicationKey: string;

declare var UIApplicationProtectedDataDidBecomeAvailable: string;

declare var UIApplicationProtectedDataWillBecomeUnavailable: string;

declare class UIApplicationShortcutIcon extends NSObject implements NSCopying {

	static alloc(): UIApplicationShortcutIcon; // inherited from NSObject

	static iconWithContact(contact: CNContact): UIApplicationShortcutIcon;

	static iconWithTemplateImageName(templateImageName: string): UIApplicationShortcutIcon;

	static iconWithType(type: UIApplicationShortcutIconType): UIApplicationShortcutIcon;

	static new(): UIApplicationShortcutIcon; // inherited from NSObject

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): UIApplicationShortcutIcon; // inherited from NSObjectProtocol
}

declare const enum UIApplicationShortcutIconType {

	Compose = 0,

	Play = 1,

	Pause = 2,

	Add = 3,

	Location = 4,

	Search = 5,

	Share = 6,

	Prohibit = 7,

	Contact = 8,

	Home = 9,

	MarkLocation = 10,

	Favorite = 11,

	Love = 12,

	Cloud = 13,

	Invitation = 14,

	Confirmation = 15,

	Mail = 16,

	Message = 17,

	Date = 18,

	Time = 19,

	CapturePhoto = 20,

	CaptureVideo = 21,

	Task = 22,

	TaskCompleted = 23,

	Alarm = 24,

	Bookmark = 25,

	Shuffle = 26,

	Audio = 27,

	Update = 28
}

declare class UIApplicationShortcutItem extends NSObject implements NSCopying, NSMutableCopying {

	static alloc(): UIApplicationShortcutItem; // inherited from NSObject

	static new(): UIApplicationShortcutItem; // inherited from NSObject

	/* readonly */ icon: UIApplicationShortcutIcon;

	/* readonly */ localizedSubtitle: string;

	/* readonly */ localizedTitle: string;

	/* readonly */ type: string;

	/* readonly */ userInfo: NSDictionary<string, NSSecureCoding>;

	constructor(); // inherited from NSObject

	constructor(o: { type: string; localizedTitle: string; });

	constructor(o: { type: string; localizedTitle: string; localizedSubtitle: string; icon: UIApplicationShortcutIcon; userInfo: NSDictionary<any, any>; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	mutableCopyWithZone(zone: interop.Pointer): any; // inherited from NSMutableCopying

	self(): UIApplicationShortcutItem; // inherited from NSObjectProtocol
}

declare var UIApplicationSignificantTimeChangeNotification: string;

declare const enum UIApplicationState {

	Active = 0,

	Inactive = 1,

	Background = 2
}

declare var UIApplicationStateRestorationBundleVersionKey: string;

declare var UIApplicationStateRestorationSystemVersionKey: string;

declare var UIApplicationStateRestorationTimestampKey: string;

declare var UIApplicationStateRestorationUserInterfaceIdiomKey: string;

declare var UIApplicationStatusBarFrameUserInfoKey: string;

declare var UIApplicationStatusBarOrientationUserInfoKey: string;

declare var UIApplicationUserDidTakeScreenshotNotification: string;

declare var UIApplicationWillChangeStatusBarFrameNotification: string;

declare var UIApplicationWillChangeStatusBarOrientationNotification: string;

declare var UIApplicationWillEnterForegroundNotification: string;

declare var UIApplicationWillResignActiveNotification: string;

declare var UIApplicationWillTerminateNotification: string;

declare class UIAttachmentBehavior extends UIDynamicBehavior {

	static fixedAttachmentWithItemAttachedToItemAttachmentAnchor(item1: UIDynamicItem, item2: UIDynamicItem, point: CGPoint): UIAttachmentBehavior;

	static limitAttachmentWithItemOffsetFromCenterAttachedToItemOffsetFromCenter(item1: UIDynamicItem, offset1: UIOffset, item2: UIDynamicItem, offset2: UIOffset): UIAttachmentBehavior;

	static pinAttachmentWithItemAttachedToItemAttachmentAnchor(item1: UIDynamicItem, item2: UIDynamicItem, point: CGPoint): UIAttachmentBehavior;

	static slidingAttachmentWithItemAttachedToItemAttachmentAnchorAxisOfTranslation(item1: UIDynamicItem, item2: UIDynamicItem, point: CGPoint, axis: CGVector): UIAttachmentBehavior;

	static slidingAttachmentWithItemAttachmentAnchorAxisOfTranslation(item: UIDynamicItem, point: CGPoint, axis: CGVector): UIAttachmentBehavior;

	anchorPoint: CGPoint;

	/* readonly */ attachedBehaviorType: UIAttachmentBehaviorType;

	attachmentRange: UIFloatRange;

	damping: number;

	frequency: number;

	frictionTorque: number;

	/* readonly */ items: NSArray<UIDynamicItem>;

	length: number;

	constructor(o: { item: UIDynamicItem; attachedToAnchor: CGPoint; });

	constructor(o: { item: UIDynamicItem; attachedToItem: UIDynamicItem; });

	constructor(o: { item: UIDynamicItem; offsetFromCenter: UIOffset; attachedToAnchor: CGPoint; });

	constructor(o: { item: UIDynamicItem; offsetFromCenter: UIOffset; attachedToItem: UIDynamicItem; offsetFromCenter2: UIOffset; });
}

declare const enum UIAttachmentBehaviorType {

	Items = 0,

	Anchor = 1
}

declare const enum UIBackgroundFetchResult {

	NewData = 0,

	NoData = 1,

	Failed = 2
}

declare const enum UIBackgroundRefreshStatus {

	Restricted = 0,

	Denied = 1,

	Available = 2
}

declare var UIBackgroundTaskInvalid: number;

declare class UIBarButtonItem extends UIBarItem implements NSCoding {

	static appearance(): UIBarButtonItem; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIBarButtonItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIBarButtonItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIBarButtonItem; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIBarButtonItem; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIBarButtonItem; // inherited from UIAppearance

	action: string;

	/* readonly */ buttonGroup: UIBarButtonItemGroup;

	customView: UIView;

	possibleTitles: NSSet<string>;

	style: UIBarButtonItemStyle;

	target: any;

	tintColor: UIColor;

	width: number;

	constructor(o: { barButtonSystemItem: UIBarButtonSystemItem; target: any; action: string; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { customView: UIView; });

	constructor(o: { image: UIImage; landscapeImagePhone: UIImage; style: UIBarButtonItemStyle; target: any; action: string; });

	constructor(o: { image: UIImage; style: UIBarButtonItemStyle; target: any; action: string; });

	constructor(o: { title: string; style: UIBarButtonItemStyle; target: any; action: string; });

	backButtonBackgroundImageForStateBarMetrics(state: UIControlState, barMetrics: UIBarMetrics): UIImage;

	backButtonBackgroundVerticalPositionAdjustmentForBarMetrics(barMetrics: UIBarMetrics): number;

	backButtonTitlePositionAdjustmentForBarMetrics(barMetrics: UIBarMetrics): UIOffset;

	backgroundImageForStateBarMetrics(state: UIControlState, barMetrics: UIBarMetrics): UIImage;

	backgroundImageForStateStyleBarMetrics(state: UIControlState, style: UIBarButtonItemStyle, barMetrics: UIBarMetrics): UIImage;

	backgroundVerticalPositionAdjustmentForBarMetrics(barMetrics: UIBarMetrics): number;

	self(): UIBarButtonItem; // inherited from NSObjectProtocol

	setBackButtonBackgroundImageForStateBarMetrics(backgroundImage: UIImage, state: UIControlState, barMetrics: UIBarMetrics): void;

	setBackButtonBackgroundVerticalPositionAdjustmentForBarMetrics(adjustment: number, barMetrics: UIBarMetrics): void;

	setBackButtonTitlePositionAdjustmentForBarMetrics(adjustment: UIOffset, barMetrics: UIBarMetrics): void;

	setBackgroundImageForStateBarMetrics(backgroundImage: UIImage, state: UIControlState, barMetrics: UIBarMetrics): void;

	setBackgroundImageForStateStyleBarMetrics(backgroundImage: UIImage, state: UIControlState, style: UIBarButtonItemStyle, barMetrics: UIBarMetrics): void;

	setBackgroundVerticalPositionAdjustmentForBarMetrics(adjustment: number, barMetrics: UIBarMetrics): void;

	setTitlePositionAdjustmentForBarMetrics(adjustment: UIOffset, barMetrics: UIBarMetrics): void;

	titlePositionAdjustmentForBarMetrics(barMetrics: UIBarMetrics): UIOffset;
}

declare class UIBarButtonItemGroup extends NSObject implements NSCoding {

	static alloc(): UIBarButtonItemGroup; // inherited from NSObject

	static new(): UIBarButtonItemGroup; // inherited from NSObject

	barButtonItems: NSArray<UIBarButtonItem>;

	/* readonly */ displayingRepresentativeItem: boolean;

	representativeItem: UIBarButtonItem;

	constructor(); // inherited from NSObject

	constructor(o: { barButtonItems: NSArray<UIBarButtonItem>; representativeItem: UIBarButtonItem; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): UIBarButtonItemGroup; // inherited from NSObjectProtocol
}

declare const enum UIBarButtonItemStyle {

	Plain = 0,

	Bordered = 1,

	Done = 2
}

declare const enum UIBarButtonSystemItem {

	Done = 0,

	Cancel = 1,

	Edit = 2,

	Save = 3,

	Add = 4,

	FlexibleSpace = 5,

	FixedSpace = 6,

	Compose = 7,

	Reply = 8,

	Action = 9,

	Organize = 10,

	Bookmarks = 11,

	Search = 12,

	Refresh = 13,

	Stop = 14,

	Camera = 15,

	Trash = 16,

	Play = 17,

	Pause = 18,

	Rewind = 19,

	FastForward = 20,

	Undo = 21,

	Redo = 22,

	PageCurl = 23
}

declare class UIBarItem extends NSObject implements NSCoding, UIAccessibilityIdentification, UIAppearance {

	static alloc(): UIBarItem; // inherited from NSObject

	static appearance(): UIBarItem; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIBarItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIBarItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIBarItem; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIBarItem; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIBarItem; // inherited from UIAppearance

	static new(): UIBarItem; // inherited from NSObject

	enabled: boolean;

	image: UIImage;

	imageInsets: UIEdgeInsets;

	landscapeImagePhone: UIImage;

	landscapeImagePhoneInsets: UIEdgeInsets;

	tag: number;

	title: string;

	accessibilityIdentifier: string; // inherited from UIAccessibilityIdentification

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): UIBarItem; // inherited from NSObjectProtocol

	setTitleTextAttributesForState(attributes: NSDictionary<string, any>, state: UIControlState): void;

	titleTextAttributesForState(state: UIControlState): NSDictionary<string, any>;
}

declare const enum UIBarMetrics {

	Default = 0,

	Compact = 1,

	DefaultPrompt = 101,

	CompactPrompt = 102,

	LandscapePhone = 1,

	LandscapePhonePrompt = 102
}

declare const enum UIBarPosition {

	Any = 0,

	Bottom = 1,

	Top = 2,

	TopAttached = 3
}

interface UIBarPositioning extends NSObjectProtocol {

	barPosition: UIBarPosition;
}
declare var UIBarPositioning: {

	prototype: UIBarPositioning;
};

interface UIBarPositioningDelegate extends NSObjectProtocol {

	positionForBar?(bar: UIBarPositioning): UIBarPosition;
}
declare var UIBarPositioningDelegate: {

	prototype: UIBarPositioningDelegate;
};

declare const enum UIBarStyle {

	Default = 0,

	Black = 1,

	BlackOpaque = 1,

	BlackTranslucent = 2
}

declare const enum UIBaselineAdjustment {

	AlignBaselines = 0,

	AlignCenters = 1,

	None = 2
}

declare class UIBezierPath extends NSObject implements NSCoding, NSCopying {

	static alloc(): UIBezierPath; // inherited from NSObject

	static bezierPath(): UIBezierPath;

	static bezierPathWithArcCenterRadiusStartAngleEndAngleClockwise(center: CGPoint, radius: number, startAngle: number, endAngle: number, clockwise: boolean): UIBezierPath;

	static bezierPathWithCGPath(CGPath: any): UIBezierPath;

	static bezierPathWithOvalInRect(rect: CGRect): UIBezierPath;

	static bezierPathWithRect(rect: CGRect): UIBezierPath;

	static bezierPathWithRoundedRectByRoundingCornersCornerRadii(rect: CGRect, corners: UIRectCorner, cornerRadii: CGSize): UIBezierPath;

	static bezierPathWithRoundedRectCornerRadius(rect: CGRect, cornerRadius: number): UIBezierPath;

	static new(): UIBezierPath; // inherited from NSObject

	CGPath: any;

	/* readonly */ bounds: CGRect;

	/* readonly */ currentPoint: CGPoint;

	/* readonly */ empty: boolean;

	flatness: number;

	lineCapStyle: CGLineCap;

	lineJoinStyle: CGLineJoin;

	lineWidth: number;

	miterLimit: number;

	usesEvenOddFillRule: boolean;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	addArcWithCenterRadiusStartAngleEndAngleClockwise(center: CGPoint, radius: number, startAngle: number, endAngle: number, clockwise: boolean): void;

	addClip(): void;

	addCurveToPointControlPoint1ControlPoint2(endPoint: CGPoint, controlPoint1: CGPoint, controlPoint2: CGPoint): void;

	addLineToPoint(point: CGPoint): void;

	addQuadCurveToPointControlPoint(endPoint: CGPoint, controlPoint: CGPoint): void;

	appendPath(bezierPath: UIBezierPath): void;

	applyTransform(transform: CGAffineTransform): void;

	bezierPathByReversingPath(): UIBezierPath;

	closePath(): void;

	containsPoint(point: CGPoint): boolean;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	fill(): void;

	fillWithBlendModeAlpha(blendMode: CGBlendMode, alpha: number): void;

	getLineDashCountPhase(pattern: interop.Reference<number>, count: interop.Reference<number>, phase: interop.Reference<number>): void;

	moveToPoint(point: CGPoint): void;

	removeAllPoints(): void;

	self(): UIBezierPath; // inherited from NSObjectProtocol

	setLineDashCountPhase(pattern: interop.Reference<number>, count: number, phase: number): void;

	stroke(): void;

	strokeWithBlendModeAlpha(blendMode: CGBlendMode, alpha: number): void;
}

declare class UIBlurEffect extends UIVisualEffect {

	static effectWithStyle(style: UIBlurEffectStyle): UIBlurEffect;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare const enum UIBlurEffectStyle {

	ExtraLight = 0,

	Light = 1,

	Dark = 2
}

declare class UIButton extends UIControl implements NSCoding {

	static buttonWithType(buttonType: UIButtonType): UIButton;

	adjustsImageWhenDisabled: boolean;

	adjustsImageWhenHighlighted: boolean;

	/* readonly */ buttonType: UIButtonType;

	contentEdgeInsets: UIEdgeInsets;

	/* readonly */ currentAttributedTitle: NSAttributedString;

	/* readonly */ currentBackgroundImage: UIImage;

	/* readonly */ currentImage: UIImage;

	/* readonly */ currentTitle: string;

	/* readonly */ currentTitleColor: UIColor;

	/* readonly */ currentTitleShadowColor: UIColor;

	font: UIFont;

	imageEdgeInsets: UIEdgeInsets;

	/* readonly */ imageView: UIImageView;

	lineBreakMode: NSLineBreakMode;

	reversesTitleShadowWhenHighlighted: boolean;

	showsTouchWhenHighlighted: boolean;

	titleEdgeInsets: UIEdgeInsets;

	/* readonly */ titleLabel: UILabel;

	titleShadowOffset: CGSize;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	attributedTitleForState(state: UIControlState): NSAttributedString;

	backgroundImageForState(state: UIControlState): UIImage;

	backgroundRectForBounds(bounds: CGRect): CGRect;

	contentRectForBounds(bounds: CGRect): CGRect;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	imageForState(state: UIControlState): UIImage;

	imageRectForContentRect(contentRect: CGRect): CGRect;

	setAttributedTitleForState(title: NSAttributedString, state: UIControlState): void;

	setBackgroundImageForState(image: UIImage, state: UIControlState): void;

	setImageForState(image: UIImage, state: UIControlState): void;

	setTitleColorForState(color: UIColor, state: UIControlState): void;

	setTitleForState(title: string, state: UIControlState): void;

	setTitleShadowColorForState(color: UIColor, state: UIControlState): void;

	titleColorForState(state: UIControlState): UIColor;

	titleForState(state: UIControlState): string;

	titleRectForContentRect(contentRect: CGRect): CGRect;

	titleShadowColorForState(state: UIControlState): UIColor;
}

declare const enum UIButtonType {

	Custom = 0,

	System = 1,

	DetailDisclosure = 2,

	InfoLight = 3,

	InfoDark = 4,

	ContactAdd = 5,

	RoundedRect = 1
}

declare const enum UICollectionElementCategory {

	Cell = 0,

	SupplementaryView = 1,

	DecorationView = 2
}

declare var UICollectionElementKindSectionFooter: string;

declare var UICollectionElementKindSectionHeader: string;

declare class UICollectionReusableView extends UIView {

	static appearance(): UICollectionReusableView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UICollectionReusableView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UICollectionReusableView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UICollectionReusableView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UICollectionReusableView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UICollectionReusableView; // inherited from UIAppearance

	/* readonly */ reuseIdentifier: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	applyLayoutAttributes(layoutAttributes: UICollectionViewLayoutAttributes): void;

	didTransitionFromLayoutToLayout(oldLayout: UICollectionViewLayout, newLayout: UICollectionViewLayout): void;

	preferredLayoutAttributesFittingAttributes(layoutAttributes: UICollectionViewLayoutAttributes): UICollectionViewLayoutAttributes;

	prepareForReuse(): void;

	self(): UICollectionReusableView; // inherited from NSObjectProtocol

	willTransitionFromLayoutToLayout(oldLayout: UICollectionViewLayout, newLayout: UICollectionViewLayout): void;
}

declare const enum UICollectionUpdateAction {

	Insert = 0,

	Delete = 1,

	Reload = 2,

	Move = 3,

	None = 4
}

declare class UICollectionView extends UIScrollView {

	allowsMultipleSelection: boolean;

	allowsSelection: boolean;

	backgroundView: UIView;

	collectionViewLayout: UICollectionViewLayout;

	dataSource: UICollectionViewDataSource;

	delegate: any; /*UICollectionViewDelegate */

	remembersLastFocusedIndexPath: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; collectionViewLayout: UICollectionViewLayout; });

	beginInteractiveMovementForItemAtIndexPath(indexPath: NSIndexPath): boolean;

	cancelInteractiveMovement(): void;

	cancelInteractiveTransition(): void;

	cellForItemAtIndexPath(indexPath: NSIndexPath): UICollectionViewCell;

	deleteItemsAtIndexPaths(indexPaths: NSArray<NSIndexPath>): void;

	deleteSections(sections: NSIndexSet): void;

	dequeueReusableCellWithReuseIdentifierForIndexPath(identifier: string, indexPath: NSIndexPath): UICollectionViewCell;

	dequeueReusableSupplementaryViewOfKindWithReuseIdentifierForIndexPath(elementKind: string, identifier: string, indexPath: NSIndexPath): UICollectionReusableView;

	deselectItemAtIndexPathAnimated(indexPath: NSIndexPath, animated: boolean): void;

	endInteractiveMovement(): void;

	finishInteractiveTransition(): void;

	indexPathForCell(cell: UICollectionViewCell): NSIndexPath;

	indexPathForItemAtPoint(point: CGPoint): NSIndexPath;

	indexPathsForSelectedItems(): NSArray<NSIndexPath>;

	indexPathsForVisibleItems(): NSArray<NSIndexPath>;

	indexPathsForVisibleSupplementaryElementsOfKind(elementKind: string): NSArray<NSIndexPath>;

	insertItemsAtIndexPaths(indexPaths: NSArray<NSIndexPath>): void;

	insertSections(sections: NSIndexSet): void;

	layoutAttributesForItemAtIndexPath(indexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	layoutAttributesForSupplementaryElementOfKindAtIndexPath(kind: string, indexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	moveItemAtIndexPathToIndexPath(indexPath: NSIndexPath, newIndexPath: NSIndexPath): void;

	moveSectionToSection(section: number, newSection: number): void;

	numberOfItemsInSection(section: number): number;

	numberOfSections(): number;

	performBatchUpdatesCompletion(updates: () => void, completion: (p1: boolean) => void): void;

	registerClassForCellWithReuseIdentifier(cellClass: typeof NSObject, identifier: string): void;

	registerClassForSupplementaryViewOfKindWithReuseIdentifier(viewClass: typeof NSObject, elementKind: string, identifier: string): void;

	registerNibForCellWithReuseIdentifier(nib: UINib, identifier: string): void;

	registerNibForSupplementaryViewOfKindWithReuseIdentifier(nib: UINib, kind: string, identifier: string): void;

	reloadData(): void;

	reloadItemsAtIndexPaths(indexPaths: NSArray<NSIndexPath>): void;

	reloadSections(sections: NSIndexSet): void;

	scrollToItemAtIndexPathAtScrollPositionAnimated(indexPath: NSIndexPath, scrollPosition: UICollectionViewScrollPosition, animated: boolean): void;

	selectItemAtIndexPathAnimatedScrollPosition(indexPath: NSIndexPath, animated: boolean, scrollPosition: UICollectionViewScrollPosition): void;

	setCollectionViewLayoutAnimated(layout: UICollectionViewLayout, animated: boolean): void;

	setCollectionViewLayoutAnimatedCompletion(layout: UICollectionViewLayout, animated: boolean, completion: (p1: boolean) => void): void;

	startInteractiveTransitionToCollectionViewLayoutCompletion(layout: UICollectionViewLayout, completion: (p1: boolean, p2: boolean) => void): UICollectionViewTransitionLayout;

	supplementaryViewForElementKindAtIndexPath(elementKind: string, indexPath: NSIndexPath): UICollectionReusableView;

	updateInteractiveMovementTargetPosition(targetPosition: CGPoint): void;

	visibleCells(): NSArray<UICollectionViewCell>;

	visibleSupplementaryViewsOfKind(elementKind: string): NSArray<UICollectionReusableView>;
}

declare class UICollectionViewCell extends UICollectionReusableView {

	backgroundView: UIView;

	/* readonly */ contentView: UIView;

	highlighted: boolean;

	selected: boolean;

	selectedBackgroundView: UIView;
}

declare class UICollectionViewController extends UIViewController implements UICollectionViewDataSource, UICollectionViewDelegate {

	clearsSelectionOnViewWillAppear: boolean;

	collectionView: UICollectionView;

	/* readonly */ collectionViewLayout: UICollectionViewLayout;

	installsStandardGestureForInteractiveMovement: boolean;

	useLayoutToLayoutNavigationTransitions: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { collectionViewLayout: UICollectionViewLayout; });

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean; // inherited from UICollectionViewDelegate

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean; // inherited from UICollectionViewDataSource

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean; // inherited from UICollectionViewDelegate

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell; // inherited from UICollectionViewDataSource

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void; // inherited from UICollectionViewDelegate

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void; // inherited from UICollectionViewDelegate

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void; // inherited from UICollectionViewDelegate

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void; // inherited from UICollectionViewDelegate

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void; // inherited from UICollectionViewDelegate

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void; // inherited from UICollectionViewDelegate

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void; // inherited from UICollectionViewDelegate

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void; // inherited from UICollectionViewDataSource

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number; // inherited from UICollectionViewDataSource

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void; // inherited from UICollectionViewDelegate

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean; // inherited from UICollectionViewDelegate

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean; // inherited from UICollectionViewDelegate

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean; // inherited from UICollectionViewDelegate

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean; // inherited from UICollectionViewDelegate

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean; // inherited from UICollectionViewDelegate

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint; // inherited from UICollectionViewDelegate

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath; // inherited from UICollectionViewDelegate

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout; // inherited from UICollectionViewDelegate

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView; // inherited from UICollectionViewDataSource

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void; // inherited from UICollectionViewDelegate

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void; // inherited from UICollectionViewDelegate

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath; // inherited from UICollectionViewDelegate

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number; // inherited from UICollectionViewDataSource

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void; // inherited from UIScrollViewDelegate

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void; // inherited from UIScrollViewDelegate

	scrollViewDidScroll(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewDidScrollToTop(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewDidZoom(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean; // inherited from UIScrollViewDelegate

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewWillBeginDragging(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void; // inherited from UIScrollViewDelegate

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Reference<CGPoint>): void; // inherited from UIScrollViewDelegate

	self(): UICollectionViewController; // inherited from NSObjectProtocol

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView; // inherited from UIScrollViewDelegate
}

interface UICollectionViewDataSource extends NSObjectProtocol {

	collectionViewCanMoveItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewMoveItemAtIndexPathToIndexPath?(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath?(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	numberOfSectionsInCollectionView?(collectionView: UICollectionView): number;
}
declare var UICollectionViewDataSource: {

	prototype: UICollectionViewDataSource;
};

interface UICollectionViewDelegate extends UIScrollViewDelegate {

	collectionViewCanFocusItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender?(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewDidDeselectItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath?(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath?(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator?(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewPerformActionForItemAtIndexPathWithSender?(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldUpdateFocusInContext?(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset?(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath?(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout?(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewWillDisplayCellForItemAtIndexPath?(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath?(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	indexPathForPreferredFocusedViewInCollectionView?(collectionView: UICollectionView): NSIndexPath;
}
declare var UICollectionViewDelegate: {

	prototype: UICollectionViewDelegate;
};

interface UICollectionViewDelegateFlowLayout extends UICollectionViewDelegate {

	collectionViewLayoutInsetForSectionAtIndex?(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets;

	collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex?(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutMinimumLineSpacingForSectionAtIndex?(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutReferenceSizeForFooterInSection?(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutReferenceSizeForHeaderInSection?(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutSizeForItemAtIndexPath?(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize;
}
declare var UICollectionViewDelegateFlowLayout: {

	prototype: UICollectionViewDelegateFlowLayout;
};

declare class UICollectionViewFlowLayout extends UICollectionViewLayout {

	estimatedItemSize: CGSize;

	footerReferenceSize: CGSize;

	headerReferenceSize: CGSize;

	itemSize: CGSize;

	minimumInteritemSpacing: number;

	minimumLineSpacing: number;

	scrollDirection: UICollectionViewScrollDirection;

	sectionFootersPinToVisibleBounds: boolean;

	sectionHeadersPinToVisibleBounds: boolean;

	sectionInset: UIEdgeInsets;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare class UICollectionViewFlowLayoutInvalidationContext extends UICollectionViewLayoutInvalidationContext {

	invalidateFlowLayoutAttributes: boolean;

	invalidateFlowLayoutDelegateMetrics: boolean;
}

declare class UICollectionViewFocusUpdateContext extends UIFocusUpdateContext {

	/* readonly */ nextFocusedIndexPath: NSIndexPath;

	/* readonly */ previouslyFocusedIndexPath: NSIndexPath;
}

declare class UICollectionViewLayout extends NSObject implements NSCoding {

	static alloc(): UICollectionViewLayout; // inherited from NSObject

	static invalidationContextClass(): typeof NSObject;

	static layoutAttributesClass(): typeof NSObject;

	static new(): UICollectionViewLayout; // inherited from NSObject

	/* readonly */ collectionView: UICollectionView;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	collectionViewContentSize(): CGSize;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	finalLayoutAttributesForDisappearingDecorationElementOfKindAtIndexPath(elementKind: string, decorationIndexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	finalLayoutAttributesForDisappearingItemAtIndexPath(itemIndexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	finalLayoutAttributesForDisappearingSupplementaryElementOfKindAtIndexPath(elementKind: string, elementIndexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	finalizeAnimatedBoundsChange(): void;

	finalizeCollectionViewUpdates(): void;

	finalizeLayoutTransition(): void;

	indexPathsToDeleteForDecorationViewOfKind(elementKind: string): NSArray<NSIndexPath>;

	indexPathsToDeleteForSupplementaryViewOfKind(elementKind: string): NSArray<NSIndexPath>;

	indexPathsToInsertForDecorationViewOfKind(elementKind: string): NSArray<NSIndexPath>;

	indexPathsToInsertForSupplementaryViewOfKind(elementKind: string): NSArray<NSIndexPath>;

	initialLayoutAttributesForAppearingDecorationElementOfKindAtIndexPath(elementKind: string, decorationIndexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	initialLayoutAttributesForAppearingItemAtIndexPath(itemIndexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	initialLayoutAttributesForAppearingSupplementaryElementOfKindAtIndexPath(elementKind: string, elementIndexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	invalidateLayout(): void;

	invalidateLayoutWithContext(context: UICollectionViewLayoutInvalidationContext): void;

	invalidationContextForBoundsChange(newBounds: CGRect): UICollectionViewLayoutInvalidationContext;

	invalidationContextForEndingInteractiveMovementOfItemsToFinalIndexPathsPreviousIndexPathsMovementCancelled(indexPaths: NSArray<NSIndexPath>, previousIndexPaths: NSArray<NSIndexPath>, movementCancelled: boolean): UICollectionViewLayoutInvalidationContext;

	invalidationContextForInteractivelyMovingItemsWithTargetPositionPreviousIndexPathsPreviousPosition(targetIndexPaths: NSArray<NSIndexPath>, targetPosition: CGPoint, previousIndexPaths: NSArray<NSIndexPath>, previousPosition: CGPoint): UICollectionViewLayoutInvalidationContext;

	invalidationContextForPreferredLayoutAttributesWithOriginalAttributes(preferredAttributes: UICollectionViewLayoutAttributes, originalAttributes: UICollectionViewLayoutAttributes): UICollectionViewLayoutInvalidationContext;

	layoutAttributesForDecorationViewOfKindAtIndexPath(elementKind: string, indexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	layoutAttributesForElementsInRect(rect: CGRect): NSArray<UICollectionViewLayoutAttributes>;

	layoutAttributesForInteractivelyMovingItemAtIndexPathWithTargetPosition(indexPath: NSIndexPath, position: CGPoint): UICollectionViewLayoutAttributes;

	layoutAttributesForItemAtIndexPath(indexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	layoutAttributesForSupplementaryViewOfKindAtIndexPath(elementKind: string, indexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	prepareForAnimatedBoundsChange(oldBounds: CGRect): void;

	prepareForCollectionViewUpdates(updateItems: NSArray<UICollectionViewUpdateItem>): void;

	prepareForTransitionFromLayout(oldLayout: UICollectionViewLayout): void;

	prepareForTransitionToLayout(newLayout: UICollectionViewLayout): void;

	prepareLayout(): void;

	registerClassForDecorationViewOfKind(viewClass: typeof NSObject, elementKind: string): void;

	registerNibForDecorationViewOfKind(nib: UINib, elementKind: string): void;

	self(): UICollectionViewLayout; // inherited from NSObjectProtocol

	shouldInvalidateLayoutForBoundsChange(newBounds: CGRect): boolean;

	shouldInvalidateLayoutForPreferredLayoutAttributesWithOriginalAttributes(preferredAttributes: UICollectionViewLayoutAttributes, originalAttributes: UICollectionViewLayoutAttributes): boolean;

	targetContentOffsetForProposedContentOffset(proposedContentOffset: CGPoint): CGPoint;

	targetContentOffsetForProposedContentOffsetWithScrollingVelocity(proposedContentOffset: CGPoint, velocity: CGPoint): CGPoint;

	targetIndexPathForInteractivelyMovingItemWithPosition(previousIndexPath: NSIndexPath, position: CGPoint): NSIndexPath;
}

declare class UICollectionViewLayoutAttributes extends NSObject implements NSCopying, UIDynamicItem {

	static alloc(): UICollectionViewLayoutAttributes; // inherited from NSObject

	static layoutAttributesForCellWithIndexPath(indexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	static layoutAttributesForDecorationViewOfKindWithIndexPath(decorationViewKind: string, indexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	static layoutAttributesForSupplementaryViewOfKindWithIndexPath(elementKind: string, indexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	static new(): UICollectionViewLayoutAttributes; // inherited from NSObject

	alpha: number;

	bounds: CGRect;

	frame: CGRect;

	hidden: boolean;

	indexPath: NSIndexPath;

	/* readonly */ representedElementCategory: UICollectionElementCategory;

	/* readonly */ representedElementKind: string;

	size: CGSize;

	transform3D: CATransform3D;

	zIndex: number;

	center: CGPoint; // inherited from UIDynamicItem

	/* readonly */ collisionBoundingPath: UIBezierPath; // inherited from UIDynamicItem

	/* readonly */ collisionBoundsType: UIDynamicItemCollisionBoundsType; // inherited from UIDynamicItem

	transform: CGAffineTransform; // inherited from UIDynamicItem

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): UICollectionViewLayoutAttributes; // inherited from NSObjectProtocol
}

declare class UICollectionViewLayoutInvalidationContext extends NSObject {

	static alloc(): UICollectionViewLayoutInvalidationContext; // inherited from NSObject

	static new(): UICollectionViewLayoutInvalidationContext; // inherited from NSObject

	contentOffsetAdjustment: CGPoint;

	contentSizeAdjustment: CGSize;

	/* readonly */ interactiveMovementTarget: CGPoint;

	/* readonly */ invalidateDataSourceCounts: boolean;

	/* readonly */ invalidateEverything: boolean;

	/* readonly */ invalidatedDecorationIndexPaths: NSDictionary<string, NSArray<NSIndexPath>>;

	/* readonly */ invalidatedItemIndexPaths: NSArray<NSIndexPath>;

	/* readonly */ invalidatedSupplementaryIndexPaths: NSDictionary<string, NSArray<NSIndexPath>>;

	/* readonly */ previousIndexPathsForInteractivelyMovingItems: NSArray<NSIndexPath>;

	/* readonly */ targetIndexPathsForInteractivelyMovingItems: NSArray<NSIndexPath>;

	constructor(); // inherited from NSObject

	invalidateDecorationElementsOfKindAtIndexPaths(elementKind: string, indexPaths: NSArray<NSIndexPath>): void;

	invalidateItemsAtIndexPaths(indexPaths: NSArray<NSIndexPath>): void;

	invalidateSupplementaryElementsOfKindAtIndexPaths(elementKind: string, indexPaths: NSArray<NSIndexPath>): void;

	self(): UICollectionViewLayoutInvalidationContext; // inherited from NSObjectProtocol
}

declare const enum UICollectionViewScrollDirection {

	Vertical = 0,

	Horizontal = 1
}

declare const enum UICollectionViewScrollPosition {

	None = 0,

	Top = 1,

	CenteredVertically = 2,

	Bottom = 4,

	Left = 8,

	CenteredHorizontally = 16,

	Right = 32
}

declare class UICollectionViewTransitionLayout extends UICollectionViewLayout {

	/* readonly */ currentLayout: UICollectionViewLayout;

	/* readonly */ nextLayout: UICollectionViewLayout;

	transitionProgress: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { currentLayout: UICollectionViewLayout; nextLayout: UICollectionViewLayout; });

	updateValueForAnimatedKey(value: number, key: string): void;

	valueForAnimatedKey(key: string): number;
}

declare class UICollectionViewUpdateItem extends NSObject {

	static alloc(): UICollectionViewUpdateItem; // inherited from NSObject

	static new(): UICollectionViewUpdateItem; // inherited from NSObject

	/* readonly */ indexPathAfterUpdate: NSIndexPath;

	/* readonly */ indexPathBeforeUpdate: NSIndexPath;

	/* readonly */ updateAction: UICollectionUpdateAction;

	constructor(); // inherited from NSObject

	self(): UICollectionViewUpdateItem; // inherited from NSObjectProtocol
}

declare class UICollisionBehavior extends UIDynamicBehavior {

	/* readonly */ boundaryIdentifiers: NSArray<NSCopying>;

	collisionDelegate: UICollisionBehaviorDelegate;

	collisionMode: UICollisionBehaviorMode;

	/* readonly */ items: NSArray<UIDynamicItem>;

	translatesReferenceBoundsIntoBoundary: boolean;

	constructor(o: { items: NSArray<UIDynamicItem>; });

	addBoundaryWithIdentifierForPath(identifier: NSCopying, bezierPath: UIBezierPath): void;

	addBoundaryWithIdentifierFromPointToPoint(identifier: NSCopying, p1: CGPoint, p2: CGPoint): void;

	addItem(item: UIDynamicItem): void;

	boundaryWithIdentifier(identifier: NSCopying): UIBezierPath;

	removeAllBoundaries(): void;

	removeBoundaryWithIdentifier(identifier: NSCopying): void;

	removeItem(item: UIDynamicItem): void;

	setTranslatesReferenceBoundsIntoBoundaryWithInsets(insets: UIEdgeInsets): void;
}

interface UICollisionBehaviorDelegate extends NSObjectProtocol {

	collisionBehaviorBeganContactForItemWithBoundaryIdentifierAtPoint?(behavior: UICollisionBehavior, item: UIDynamicItem, identifier: NSCopying, p: CGPoint): void;

	collisionBehaviorBeganContactForItemWithItemAtPoint?(behavior: UICollisionBehavior, item1: UIDynamicItem, item2: UIDynamicItem, p: CGPoint): void;

	collisionBehaviorEndedContactForItemWithBoundaryIdentifier?(behavior: UICollisionBehavior, item: UIDynamicItem, identifier: NSCopying): void;

	collisionBehaviorEndedContactForItemWithItem?(behavior: UICollisionBehavior, item1: UIDynamicItem, item2: UIDynamicItem): void;
}
declare var UICollisionBehaviorDelegate: {

	prototype: UICollisionBehaviorDelegate;
};

declare const enum UICollisionBehaviorMode {

	Items = 1,

	Boundaries = 2,

	Everything = 4294967295
}

declare class UIColor extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): UIColor; // inherited from NSObject

	static blackColor(): UIColor;

	static blueColor(): UIColor;

	static brownColor(): UIColor;

	static clearColor(): UIColor;

	static colorWithCGColor(cgColor: any): UIColor;

	static colorWithCIColor(ciColor: CIColor): UIColor;

	static colorWithHueSaturationBrightnessAlpha(hue: number, saturation: number, brightness: number, alpha: number): UIColor;

	static colorWithPatternImage(image: UIImage): UIColor;

	static colorWithRedGreenBlueAlpha(red: number, green: number, blue: number, alpha: number): UIColor;

	static colorWithWhiteAlpha(white: number, alpha: number): UIColor;

	static cyanColor(): UIColor;

	static darkGrayColor(): UIColor;

	static darkTextColor(): UIColor;

	static grayColor(): UIColor;

	static greenColor(): UIColor;

	static groupTableViewBackgroundColor(): UIColor;

	static lightGrayColor(): UIColor;

	static lightTextColor(): UIColor;

	static magentaColor(): UIColor;

	static new(): UIColor; // inherited from NSObject

	static orangeColor(): UIColor;

	static purpleColor(): UIColor;

	static redColor(): UIColor;

	static scrollViewTexturedBackgroundColor(): UIColor;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static underPageBackgroundColor(): UIColor;

	static viewFlipsideBackgroundColor(): UIColor;

	static whiteColor(): UIColor;

	static yellowColor(): UIColor;

	/* readonly */ CGColor: any;

	/* readonly */ CIColor: CIColor;

	constructor(); // inherited from NSObject

	constructor(o: { CGColor: any; });

	constructor(o: { CIColor: CIColor; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { hue: number; saturation: number; brightness: number; alpha: number; });

	constructor(o: { patternImage: UIImage; });

	constructor(o: { red: number; green: number; blue: number; alpha: number; });

	constructor(o: { white: number; alpha: number; });

	colorWithAlphaComponent(alpha: number): UIColor;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	getHueSaturationBrightnessAlpha(hue: interop.Reference<number>, saturation: interop.Reference<number>, brightness: interop.Reference<number>, alpha: interop.Reference<number>): boolean;

	getRedGreenBlueAlpha(red: interop.Reference<number>, green: interop.Reference<number>, blue: interop.Reference<number>, alpha: interop.Reference<number>): boolean;

	getWhiteAlpha(white: interop.Reference<number>, alpha: interop.Reference<number>): boolean;

	self(): UIColor; // inherited from NSObjectProtocol

	set(): void;

	setFill(): void;

	setStroke(): void;
}

interface UIContentContainer extends NSObjectProtocol {

	preferredContentSize: CGSize;

	preferredContentSizeDidChangeForChildContentContainer(container: UIContentContainer): void;

	sizeForChildContentContainerWithParentContainerSize(container: UIContentContainer, parentSize: CGSize): CGSize;

	systemLayoutFittingSizeDidChangeForChildContentContainer(container: UIContentContainer): void;

	viewWillTransitionToSizeWithTransitionCoordinator(size: CGSize, coordinator: UIViewControllerTransitionCoordinator): void;

	willTransitionToTraitCollectionWithTransitionCoordinator(newCollection: UITraitCollection, coordinator: UIViewControllerTransitionCoordinator): void;
}
declare var UIContentContainer: {

	prototype: UIContentContainer;
};

declare var UIContentSizeCategoryAccessibilityExtraExtraExtraLarge: string;

declare var UIContentSizeCategoryAccessibilityExtraExtraLarge: string;

declare var UIContentSizeCategoryAccessibilityExtraLarge: string;

declare var UIContentSizeCategoryAccessibilityLarge: string;

declare var UIContentSizeCategoryAccessibilityMedium: string;

declare var UIContentSizeCategoryDidChangeNotification: string;

declare var UIContentSizeCategoryExtraExtraExtraLarge: string;

declare var UIContentSizeCategoryExtraExtraLarge: string;

declare var UIContentSizeCategoryExtraLarge: string;

declare var UIContentSizeCategoryExtraSmall: string;

declare var UIContentSizeCategoryLarge: string;

declare var UIContentSizeCategoryMedium: string;

declare var UIContentSizeCategoryNewValueKey: string;

declare var UIContentSizeCategorySmall: string;

declare class UIControl extends UIView {

	static appearance(): UIControl; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIControl; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIControl; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIControl; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIControl; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIControl; // inherited from UIAppearance

	contentHorizontalAlignment: UIControlContentHorizontalAlignment;

	contentVerticalAlignment: UIControlContentVerticalAlignment;

	enabled: boolean;

	highlighted: boolean;

	selected: boolean;

	/* readonly */ state: UIControlState;

	/* readonly */ touchInside: boolean;

	/* readonly */ tracking: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	actionsForTargetForControlEvent(target: any, controlEvent: UIControlEvents): NSArray<string>;

	addTargetActionForControlEvents(target: any, action: string, controlEvents: UIControlEvents): void;

	allControlEvents(): UIControlEvents;

	allTargets(): NSSet<any>;

	beginTrackingWithTouchWithEvent(touch: UITouch, event: UIEvent): boolean;

	cancelTrackingWithEvent(event: UIEvent): void;

	continueTrackingWithTouchWithEvent(touch: UITouch, event: UIEvent): boolean;

	endTrackingWithTouchWithEvent(touch: UITouch, event: UIEvent): void;

	removeTargetActionForControlEvents(target: any, action: string, controlEvents: UIControlEvents): void;

	self(): UIControl; // inherited from NSObjectProtocol

	sendActionToForEvent(action: string, target: any, event: UIEvent): void;

	sendActionsForControlEvents(controlEvents: UIControlEvents): void;
}

declare const enum UIControlContentHorizontalAlignment {

	Center = 0,

	Left = 1,

	Right = 2,

	Fill = 3
}

declare const enum UIControlContentVerticalAlignment {

	Center = 0,

	Top = 1,

	Bottom = 2,

	Fill = 3
}

declare const enum UIControlEvents {

	TouchDown = 1,

	TouchDownRepeat = 2,

	TouchDragInside = 4,

	TouchDragOutside = 8,

	TouchDragEnter = 16,

	TouchDragExit = 32,

	TouchUpInside = 64,

	TouchUpOutside = 128,

	TouchCancel = 256,

	ValueChanged = 4096,

	PrimaryActionTriggered = 8192,

	EditingDidBegin = 65536,

	EditingChanged = 131072,

	EditingDidEnd = 262144,

	EditingDidEndOnExit = 524288,

	AllTouchEvents = 4095,

	AllEditingEvents = 983040,

	ApplicationReserved = 251658240,

	SystemReserved = 4026531840,

	AllEvents = 4294967295
}

declare const enum UIControlState {

	Normal = 0,

	Highlighted = 1,

	Disabled = 2,

	Selected = 4,

	Focused = 8,

	Application = 16711680,

	Reserved = 4278190080
}

interface UICoordinateSpace extends NSObjectProtocol {

	bounds: CGRect;

	convertPointFromCoordinateSpace(point: CGPoint, coordinateSpace: UICoordinateSpace): CGPoint;

	convertPointToCoordinateSpace(point: CGPoint, coordinateSpace: UICoordinateSpace): CGPoint;

	convertRectFromCoordinateSpace(rect: CGRect, coordinateSpace: UICoordinateSpace): CGRect;

	convertRectToCoordinateSpace(rect: CGRect, coordinateSpace: UICoordinateSpace): CGRect;
}
declare var UICoordinateSpace: {

	prototype: UICoordinateSpace;
};

declare const enum UIDataDetectorTypes {

	PhoneNumber = 1,

	Link = 2,

	Address = 4,

	CalendarEvent = 8,

	None = 0,

	All = 4294967295
}

interface UIDataSourceModelAssociation {

	indexPathForElementWithModelIdentifierInView(identifier: string, view: UIView): NSIndexPath;

	modelIdentifierForElementAtIndexPathInView(idx: NSIndexPath, view: UIView): string;
}
declare var UIDataSourceModelAssociation: {

	prototype: UIDataSourceModelAssociation;
};

declare class UIDatePicker extends UIControl implements NSCoding {

	calendar: NSCalendar;

	countDownDuration: number;

	date: Date;

	datePickerMode: UIDatePickerMode;

	locale: NSLocale;

	maximumDate: Date;

	minimumDate: Date;

	minuteInterval: number;

	timeZone: NSTimeZone;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	setDateAnimated(date: Date, animated: boolean): void;
}

declare const enum UIDatePickerMode {

	Time = 0,

	Date = 1,

	DateAndTime = 2,

	CountDownTimer = 3
}

declare class UIDevice extends NSObject {

	static alloc(): UIDevice; // inherited from NSObject

	static currentDevice(): UIDevice;

	static new(): UIDevice; // inherited from NSObject

	/* readonly */ batteryLevel: number;

	batteryMonitoringEnabled: boolean;

	/* readonly */ batteryState: UIDeviceBatteryState;

	/* readonly */ generatesDeviceOrientationNotifications: boolean;

	/* readonly */ identifierForVendor: NSUUID;

	/* readonly */ localizedModel: string;

	/* readonly */ model: string;

	/* readonly */ multitaskingSupported: boolean;

	/* readonly */ name: string;

	/* readonly */ orientation: UIDeviceOrientation;

	proximityMonitoringEnabled: boolean;

	/* readonly */ proximityState: boolean;

	/* readonly */ systemName: string;

	/* readonly */ systemVersion: string;

	/* readonly */ userInterfaceIdiom: UIUserInterfaceIdiom;

	constructor(); // inherited from NSObject

	beginGeneratingDeviceOrientationNotifications(): void;

	endGeneratingDeviceOrientationNotifications(): void;

	playInputClick(): void;

	self(): UIDevice; // inherited from NSObjectProtocol
}

declare var UIDeviceBatteryLevelDidChangeNotification: string;

declare const enum UIDeviceBatteryState {

	Unknown = 0,

	Unplugged = 1,

	Charging = 2,

	Full = 3
}

declare var UIDeviceBatteryStateDidChangeNotification: string;

declare const enum UIDeviceOrientation {

	Unknown = 0,

	Portrait = 1,

	PortraitUpsideDown = 2,

	LandscapeLeft = 3,

	LandscapeRight = 4,

	FaceUp = 5,

	FaceDown = 6
}

declare var UIDeviceOrientationDidChangeNotification: string;

declare var UIDeviceProximityStateDidChangeNotification: string;

declare class UIDictationPhrase extends NSObject {

	static alloc(): UIDictationPhrase; // inherited from NSObject

	static new(): UIDictationPhrase; // inherited from NSObject

	/* readonly */ alternativeInterpretations: NSArray<string>;

	/* readonly */ text: string;

	constructor(); // inherited from NSObject

	self(): UIDictationPhrase; // inherited from NSObjectProtocol
}

declare class UIDocument extends NSObject implements NSFilePresenter, NSProgressReporting {

	static alloc(): UIDocument; // inherited from NSObject

	static new(): UIDocument; // inherited from NSObject

	/* readonly */ documentState: UIDocumentState;

	fileModificationDate: Date;

	/* readonly */ fileType: string;

	/* readonly */ fileURL: NSURL;

	/* readonly */ localizedName: string;

	undoManager: NSUndoManager;

	userActivity: NSUserActivity;

	/* readonly */ presentedItemOperationQueue: NSOperationQueue; // inherited from NSFilePresenter

	/* readonly */ presentedItemURL: NSURL; // inherited from NSFilePresenter

	/* readonly */ progress: NSProgress; // inherited from NSProgressReporting

	constructor(); // inherited from NSObject

	constructor(o: { fileURL: NSURL; });

	accommodatePresentedItemDeletionWithCompletionHandler(completionHandler: (p1: NSError) => void): void; // inherited from NSFilePresenter

	accommodatePresentedSubitemDeletionAtURLCompletionHandler(url: NSURL, completionHandler: (p1: NSError) => void): void; // inherited from NSFilePresenter

	autosaveWithCompletionHandler(completionHandler: (p1: boolean) => void): void;

	changeCountTokenForSaveOperation(saveOperation: UIDocumentSaveOperation): any;

	closeWithCompletionHandler(completionHandler: (p1: boolean) => void): void;

	contentsForTypeError(typeName: string): any;

	disableEditing(): void;

	enableEditing(): void;

	fileAttributesToWriteToURLForSaveOperationError(url: NSURL, saveOperation: UIDocumentSaveOperation): NSDictionary<any, any>;

	fileNameExtensionForTypeSaveOperation(typeName: string, saveOperation: UIDocumentSaveOperation): string;

	finishedHandlingErrorRecovered(error: NSError, recovered: boolean): void;

	handleErrorUserInteractionPermitted(error: NSError, userInteractionPermitted: boolean): void;

	hasUnsavedChanges(): boolean;

	loadFromContentsOfTypeError(contents: any, typeName: string): boolean;

	openWithCompletionHandler(completionHandler: (p1: boolean) => void): void;

	performAsynchronousFileAccessUsingBlock(block: () => void): void;

	presentedItemDidChange(): void; // inherited from NSFilePresenter

	presentedItemDidGainVersion(version: NSFileVersion): void; // inherited from NSFilePresenter

	presentedItemDidLoseVersion(version: NSFileVersion): void; // inherited from NSFilePresenter

	presentedItemDidMoveToURL(newURL: NSURL): void; // inherited from NSFilePresenter

	presentedItemDidResolveConflictVersion(version: NSFileVersion): void; // inherited from NSFilePresenter

	presentedSubitemAtURLDidGainVersion(url: NSURL, version: NSFileVersion): void; // inherited from NSFilePresenter

	presentedSubitemAtURLDidLoseVersion(url: NSURL, version: NSFileVersion): void; // inherited from NSFilePresenter

	presentedSubitemAtURLDidMoveToURL(oldURL: NSURL, newURL: NSURL): void; // inherited from NSFilePresenter

	presentedSubitemAtURLDidResolveConflictVersion(url: NSURL, version: NSFileVersion): void; // inherited from NSFilePresenter

	presentedSubitemDidAppearAtURL(url: NSURL): void; // inherited from NSFilePresenter

	presentedSubitemDidChangeAtURL(url: NSURL): void; // inherited from NSFilePresenter

	readFromURLError(url: NSURL): boolean;

	relinquishPresentedItemToReader(reader: (p1: () => void) => void): void; // inherited from NSFilePresenter

	relinquishPresentedItemToWriter(writer: (p1: () => void) => void): void; // inherited from NSFilePresenter

	restoreUserActivityState(userActivity: NSUserActivity): void;

	revertToContentsOfURLCompletionHandler(url: NSURL, completionHandler: (p1: boolean) => void): void;

	savePresentedItemChangesWithCompletionHandler(completionHandler: (p1: NSError) => void): void; // inherited from NSFilePresenter

	saveToURLForSaveOperationCompletionHandler(url: NSURL, saveOperation: UIDocumentSaveOperation, completionHandler: (p1: boolean) => void): void;

	savingFileType(): string;

	self(): UIDocument; // inherited from NSObjectProtocol

	updateChangeCount(change: UIDocumentChangeKind): void;

	updateChangeCountWithTokenForSaveOperation(changeCountToken: any, saveOperation: UIDocumentSaveOperation): void;

	updateUserActivityState(userActivity: NSUserActivity): void;

	userInteractionNoLongerPermittedForError(error: NSError): void;

	writeContentsAndAttributesSafelyToURLForSaveOperationError(contents: any, additionalFileAttributes: NSDictionary<any, any>, url: NSURL, saveOperation: UIDocumentSaveOperation): boolean;

	writeContentsToURLForSaveOperationOriginalContentsURLError(contents: any, url: NSURL, saveOperation: UIDocumentSaveOperation, originalContentsURL: NSURL): boolean;
}

declare const enum UIDocumentChangeKind {

	Done = 0,

	Undone = 1,

	Redone = 2,

	Cleared = 3
}

declare class UIDocumentInteractionController extends NSObject implements UIActionSheetDelegate {

	static alloc(): UIDocumentInteractionController; // inherited from NSObject

	static interactionControllerWithURL(url: NSURL): UIDocumentInteractionController;

	static new(): UIDocumentInteractionController; // inherited from NSObject

	URL: NSURL;

	UTI: string;

	annotation: any;

	delegate: UIDocumentInteractionControllerDelegate;

	/* readonly */ gestureRecognizers: NSArray<UIGestureRecognizer>;

	/* readonly */ icons: NSArray<UIImage>;

	name: string;

	constructor(); // inherited from NSObject

	actionSheetCancel(actionSheet: UIActionSheet): void; // inherited from UIActionSheetDelegate

	actionSheetClickedButtonAtIndex(actionSheet: UIActionSheet, buttonIndex: number): void; // inherited from UIActionSheetDelegate

	actionSheetDidDismissWithButtonIndex(actionSheet: UIActionSheet, buttonIndex: number): void; // inherited from UIActionSheetDelegate

	actionSheetWillDismissWithButtonIndex(actionSheet: UIActionSheet, buttonIndex: number): void; // inherited from UIActionSheetDelegate

	didPresentActionSheet(actionSheet: UIActionSheet): void; // inherited from UIActionSheetDelegate

	dismissMenuAnimated(animated: boolean): void;

	dismissPreviewAnimated(animated: boolean): void;

	presentOpenInMenuFromBarButtonItemAnimated(item: UIBarButtonItem, animated: boolean): boolean;

	presentOpenInMenuFromRectInViewAnimated(rect: CGRect, view: UIView, animated: boolean): boolean;

	presentOptionsMenuFromBarButtonItemAnimated(item: UIBarButtonItem, animated: boolean): boolean;

	presentOptionsMenuFromRectInViewAnimated(rect: CGRect, view: UIView, animated: boolean): boolean;

	presentPreviewAnimated(animated: boolean): boolean;

	self(): UIDocumentInteractionController; // inherited from NSObjectProtocol

	willPresentActionSheet(actionSheet: UIActionSheet): void; // inherited from UIActionSheetDelegate
}

interface UIDocumentInteractionControllerDelegate extends NSObjectProtocol {

	documentInteractionControllerCanPerformAction?(controller: UIDocumentInteractionController, action: string): boolean;

	documentInteractionControllerDidDismissOpenInMenu?(controller: UIDocumentInteractionController): void;

	documentInteractionControllerDidDismissOptionsMenu?(controller: UIDocumentInteractionController): void;

	documentInteractionControllerDidEndPreview?(controller: UIDocumentInteractionController): void;

	documentInteractionControllerDidEndSendingToApplication?(controller: UIDocumentInteractionController, application: string): void;

	documentInteractionControllerPerformAction?(controller: UIDocumentInteractionController, action: string): boolean;

	documentInteractionControllerRectForPreview?(controller: UIDocumentInteractionController): CGRect;

	documentInteractionControllerViewControllerForPreview?(controller: UIDocumentInteractionController): UIViewController;

	documentInteractionControllerViewForPreview?(controller: UIDocumentInteractionController): UIView;

	documentInteractionControllerWillBeginPreview?(controller: UIDocumentInteractionController): void;

	documentInteractionControllerWillBeginSendingToApplication?(controller: UIDocumentInteractionController, application: string): void;

	documentInteractionControllerWillPresentOpenInMenu?(controller: UIDocumentInteractionController): void;

	documentInteractionControllerWillPresentOptionsMenu?(controller: UIDocumentInteractionController): void;
}
declare var UIDocumentInteractionControllerDelegate: {

	prototype: UIDocumentInteractionControllerDelegate;
};

interface UIDocumentMenuDelegate extends NSObjectProtocol {

	documentMenuDidPickDocumentPicker(documentMenu: UIDocumentMenuViewController, documentPicker: UIDocumentPickerViewController): void;

	documentMenuWasCancelled?(documentMenu: UIDocumentMenuViewController): void;
}
declare var UIDocumentMenuDelegate: {

	prototype: UIDocumentMenuDelegate;
};

declare const enum UIDocumentMenuOrder {

	First = 0,

	Last = 1
}

declare class UIDocumentMenuViewController extends UIViewController {

	delegate: UIDocumentMenuDelegate;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { documentTypes: NSArray<string>; inMode: UIDocumentPickerMode; });

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	constructor(o: { URL: NSURL; inMode: UIDocumentPickerMode; });

	addOptionWithTitleImageOrderHandler(title: string, image: UIImage, order: UIDocumentMenuOrder, handler: () => void): void;

	self(): UIDocumentMenuViewController; // inherited from NSObjectProtocol
}

interface UIDocumentPickerDelegate extends NSObjectProtocol {

	documentPickerDidPickDocumentAtURL(controller: UIDocumentPickerViewController, url: NSURL): void;

	documentPickerWasCancelled?(controller: UIDocumentPickerViewController): void;
}
declare var UIDocumentPickerDelegate: {

	prototype: UIDocumentPickerDelegate;
};

declare class UIDocumentPickerExtensionViewController extends UIViewController {

	/* readonly */ documentPickerMode: UIDocumentPickerMode;

	/* readonly */ documentStorageURL: NSURL;

	/* readonly */ originalURL: NSURL;

	/* readonly */ providerIdentifier: string;

	/* readonly */ validTypes: NSArray<string>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	dismissGrantingAccessToURL(url: NSURL): void;

	prepareForPresentationInMode(mode: UIDocumentPickerMode): void;

	self(): UIDocumentPickerExtensionViewController; // inherited from NSObjectProtocol
}

declare const enum UIDocumentPickerMode {

	Import = 0,

	Open = 1,

	ExportToService = 2,

	MoveToService = 3
}

declare class UIDocumentPickerViewController extends UIViewController {

	delegate: UIDocumentPickerDelegate;

	/* readonly */ documentPickerMode: UIDocumentPickerMode;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { documentTypes: NSArray<string>; inMode: UIDocumentPickerMode; });

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	constructor(o: { URL: NSURL; inMode: UIDocumentPickerMode; });

	self(): UIDocumentPickerViewController; // inherited from NSObjectProtocol
}

declare const enum UIDocumentSaveOperation {

	ForCreating = 0,

	ForOverwriting = 1
}

declare const enum UIDocumentState {

	Normal = 0,

	Closed = 1,

	InConflict = 2,

	SavingError = 4,

	EditingDisabled = 8,

	ProgressAvailable = 16
}

declare var UIDocumentStateChangedNotification: string;

declare class UIDynamicAnimator extends NSObject {

	static alloc(): UIDynamicAnimator; // inherited from NSObject

	static new(): UIDynamicAnimator; // inherited from NSObject

	/* readonly */ behaviors: NSArray<UIDynamicBehavior>;

	delegate: UIDynamicAnimatorDelegate;

	/* readonly */ referenceView: UIView;

	/* readonly */ running: boolean;

	constructor(); // inherited from NSObject

	constructor(o: { collectionViewLayout: UICollectionViewLayout; });

	constructor(o: { referenceView: UIView; });

	addBehavior(behavior: UIDynamicBehavior): void;

	elapsedTime(): number;

	itemsInRect(rect: CGRect): NSArray<UIDynamicItem>;

	layoutAttributesForCellAtIndexPath(indexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	layoutAttributesForDecorationViewOfKindAtIndexPath(decorationViewKind: string, indexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	layoutAttributesForSupplementaryViewOfKindAtIndexPath(kind: string, indexPath: NSIndexPath): UICollectionViewLayoutAttributes;

	removeAllBehaviors(): void;

	removeBehavior(behavior: UIDynamicBehavior): void;

	self(): UIDynamicAnimator; // inherited from NSObjectProtocol

	updateItemUsingCurrentState(item: UIDynamicItem): void;
}

interface UIDynamicAnimatorDelegate extends NSObjectProtocol {

	dynamicAnimatorDidPause?(animator: UIDynamicAnimator): void;

	dynamicAnimatorWillResume?(animator: UIDynamicAnimator): void;
}
declare var UIDynamicAnimatorDelegate: {

	prototype: UIDynamicAnimatorDelegate;
};

declare class UIDynamicBehavior extends NSObject {

	static alloc(): UIDynamicBehavior; // inherited from NSObject

	static new(): UIDynamicBehavior; // inherited from NSObject

	action: () => void;

	/* readonly */ childBehaviors: NSArray<UIDynamicBehavior>;

	/* readonly */ dynamicAnimator: UIDynamicAnimator;

	constructor(); // inherited from NSObject

	addChildBehavior(behavior: UIDynamicBehavior): void;

	removeChildBehavior(behavior: UIDynamicBehavior): void;

	self(): UIDynamicBehavior; // inherited from NSObjectProtocol

	willMoveToAnimator(dynamicAnimator: UIDynamicAnimator): void;
}

interface UIDynamicItem extends NSObjectProtocol {

	bounds: CGRect;

	center: CGPoint;

	collisionBoundingPath?: UIBezierPath;

	collisionBoundsType?: UIDynamicItemCollisionBoundsType;

	transform: CGAffineTransform;
}
declare var UIDynamicItem: {

	prototype: UIDynamicItem;
};

declare class UIDynamicItemBehavior extends UIDynamicBehavior {

	allowsRotation: boolean;

	anchored: boolean;

	angularResistance: number;

	charge: number;

	density: number;

	elasticity: number;

	friction: number;

	/* readonly */ items: NSArray<UIDynamicItem>;

	resistance: number;

	constructor(o: { items: NSArray<UIDynamicItem>; });

	addAngularVelocityForItem(velocity: number, item: UIDynamicItem): void;

	addItem(item: UIDynamicItem): void;

	addLinearVelocityForItem(velocity: CGPoint, item: UIDynamicItem): void;

	angularVelocityForItem(item: UIDynamicItem): number;

	linearVelocityForItem(item: UIDynamicItem): CGPoint;

	removeItem(item: UIDynamicItem): void;
}

declare const enum UIDynamicItemCollisionBoundsType {

	Rectangle = 0,

	Ellipse = 1,

	Path = 2
}

declare class UIDynamicItemGroup extends NSObject implements UIDynamicItem {

	static alloc(): UIDynamicItemGroup; // inherited from NSObject

	static new(): UIDynamicItemGroup; // inherited from NSObject

	/* readonly */ items: NSArray<UIDynamicItem>;

	/* readonly */ bounds: CGRect; // inherited from UIDynamicItem

	center: CGPoint; // inherited from UIDynamicItem

	/* readonly */ collisionBoundingPath: UIBezierPath; // inherited from UIDynamicItem

	/* readonly */ collisionBoundsType: UIDynamicItemCollisionBoundsType; // inherited from UIDynamicItem

	transform: CGAffineTransform; // inherited from UIDynamicItem

	constructor(); // inherited from NSObject

	constructor(o: { items: NSArray<UIDynamicItem>; });

	self(): UIDynamicItemGroup; // inherited from NSObjectProtocol
}

interface UIEdgeInsets {
	top: number;
	left: number;
	bottom: number;
	right: number;
}
declare var UIEdgeInsets: interop.StructType<UIEdgeInsets>;

declare function UIEdgeInsetsFromString(string: string): UIEdgeInsets;

declare var UIEdgeInsetsZero: UIEdgeInsets;

declare class UIEvent extends NSObject {

	static alloc(): UIEvent; // inherited from NSObject

	static new(): UIEvent; // inherited from NSObject

	/* readonly */ subtype: UIEventSubtype;

	/* readonly */ timestamp: number;

	/* readonly */ type: UIEventType;

	constructor(); // inherited from NSObject

	allTouches(): NSSet<UITouch>;

	coalescedTouchesForTouch(touch: UITouch): NSArray<UITouch>;

	predictedTouchesForTouch(touch: UITouch): NSArray<UITouch>;

	self(): UIEvent; // inherited from NSObjectProtocol

	touchesForGestureRecognizer(gesture: UIGestureRecognizer): NSSet<UITouch>;

	touchesForView(view: UIView): NSSet<UITouch>;

	touchesForWindow(window: UIWindow): NSSet<UITouch>;
}

declare const enum UIEventSubtype {

	None = 0,

	MotionShake = 1,

	RemoteControlPlay = 100,

	RemoteControlPause = 101,

	RemoteControlStop = 102,

	RemoteControlTogglePlayPause = 103,

	RemoteControlNextTrack = 104,

	RemoteControlPreviousTrack = 105,

	RemoteControlBeginSeekingBackward = 106,

	RemoteControlEndSeekingBackward = 107,

	RemoteControlBeginSeekingForward = 108,

	RemoteControlEndSeekingForward = 109
}

declare const enum UIEventType {

	Touches = 0,

	Motion = 1,

	RemoteControl = 2,

	Presses = 3
}

declare class UIFieldBehavior extends UIDynamicBehavior {

	static dragField(): UIFieldBehavior;

	static electricField(): UIFieldBehavior;

	static fieldWithEvaluationBlock(block: (p1: UIFieldBehavior, p2: CGPoint, p3: CGVector, p4: number, p5: number, p6: number) => CGVector): UIFieldBehavior;

	static linearGravityFieldWithVector(direction: CGVector): UIFieldBehavior;

	static magneticField(): UIFieldBehavior;

	static noiseFieldWithSmoothnessAnimationSpeed(smoothness: number, speed: number): UIFieldBehavior;

	static radialGravityFieldWithPosition(position: CGPoint): UIFieldBehavior;

	static springField(): UIFieldBehavior;

	static turbulenceFieldWithSmoothnessAnimationSpeed(smoothness: number, speed: number): UIFieldBehavior;

	static velocityFieldWithVector(direction: CGVector): UIFieldBehavior;

	static vortexField(): UIFieldBehavior;

	animationSpeed: number;

	direction: CGVector;

	falloff: number;

	/* readonly */ items: NSArray<UIDynamicItem>;

	minimumRadius: number;

	position: CGPoint;

	region: UIRegion;

	smoothness: number;

	strength: number;

	addItem(item: UIDynamicItem): void;

	removeItem(item: UIDynamicItem): void;
}

interface UIFloatRange {
	minimum: number;
	maximum: number;
}
declare var UIFloatRange: interop.StructType<UIFloatRange>;

declare var UIFloatRangeInfinite: UIFloatRange;

declare function UIFloatRangeIsEqualToRange(range: UIFloatRange, otherRange: UIFloatRange): boolean;

declare function UIFloatRangeIsInfinite(range: UIFloatRange): boolean;

declare var UIFloatRangeZero: UIFloatRange;

declare class UIFocusAnimationCoordinator extends NSObject {

	static alloc(): UIFocusAnimationCoordinator; // inherited from NSObject

	static new(): UIFocusAnimationCoordinator; // inherited from NSObject

	constructor(); // inherited from NSObject

	addCoordinatedAnimationsCompletion(animations: () => void, completion: () => void): void;

	self(): UIFocusAnimationCoordinator; // inherited from NSObjectProtocol
}

interface UIFocusEnvironment extends NSObjectProtocol {

	preferredFocusedView: UIView;

	didUpdateFocusInContextWithAnimationCoordinator(context: UIFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	setNeedsFocusUpdate(): void;

	shouldUpdateFocusInContext(context: UIFocusUpdateContext): boolean;

	updateFocusIfNeeded(): void;
}
declare var UIFocusEnvironment: {

	prototype: UIFocusEnvironment;
};

declare class UIFocusGuide extends UILayoutGuide {

	enabled: boolean;

	preferredFocusedView: UIView;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare const enum UIFocusHeading {

	Up = 1,

	Down = 2,

	Left = 4,

	Right = 8,

	Next = 16,

	Previous = 32
}

declare class UIFocusUpdateContext extends NSObject {

	static alloc(): UIFocusUpdateContext; // inherited from NSObject

	static new(): UIFocusUpdateContext; // inherited from NSObject

	/* readonly */ focusHeading: UIFocusHeading;

	/* readonly */ nextFocusedView: UIView;

	/* readonly */ previouslyFocusedView: UIView;

	constructor(); // inherited from NSObject

	self(): UIFocusUpdateContext; // inherited from NSObjectProtocol
}

declare class UIFont extends NSObject implements NSCopying {

	static alloc(): UIFont; // inherited from NSObject

	static boldSystemFontOfSize(fontSize: number): UIFont;

	static buttonFontSize(): number;

	static familyNames(): NSArray<string>;

	static fontNamesForFamilyName(familyName: string): NSArray<string>;

	static fontWithDescriptorSize(descriptor: UIFontDescriptor, pointSize: number): UIFont;

	static fontWithNameSize(fontName: string, fontSize: number): UIFont;

	static italicSystemFontOfSize(fontSize: number): UIFont;

	static labelFontSize(): number;

	static monospacedDigitSystemFontOfSizeWeight(fontSize: number, weight: number): UIFont;

	static new(): UIFont; // inherited from NSObject

	static preferredFontForTextStyle(style: string): UIFont;

	static smallSystemFontSize(): number;

	static systemFontOfSize(fontSize: number): UIFont;

	static systemFontOfSizeWeight(fontSize: number, weight: number): UIFont;

	static systemFontSize(): number;

	/* readonly */ ascender: number;

	/* readonly */ capHeight: number;

	/* readonly */ descender: number;

	/* readonly */ familyName: string;

	/* readonly */ fontName: string;

	/* readonly */ leading: number;

	/* readonly */ lineHeight: number;

	/* readonly */ pointSize: number;

	/* readonly */ xHeight: number;

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	fontDescriptor(): UIFontDescriptor;

	fontWithSize(fontSize: number): UIFont;

	self(): UIFont; // inherited from NSObjectProtocol
}

declare class UIFontDescriptor extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): UIFontDescriptor; // inherited from NSObject

	static fontDescriptorWithFontAttributes(attributes: NSDictionary<string, any>): UIFontDescriptor;

	static fontDescriptorWithNameMatrix(fontName: string, matrix: CGAffineTransform): UIFontDescriptor;

	static fontDescriptorWithNameSize(fontName: string, size: number): UIFontDescriptor;

	static new(): UIFontDescriptor; // inherited from NSObject

	static preferredFontDescriptorWithTextStyle(style: string): UIFontDescriptor;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ matrix: CGAffineTransform;

	/* readonly */ pointSize: number;

	/* readonly */ postscriptName: string;

	/* readonly */ symbolicTraits: UIFontDescriptorSymbolicTraits;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { fontAttributes: NSDictionary<string, any>; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	fontAttributes(): NSDictionary<string, any>;

	fontDescriptorByAddingAttributes(attributes: NSDictionary<string, any>): UIFontDescriptor;

	fontDescriptorWithFace(newFace: string): UIFontDescriptor;

	fontDescriptorWithFamily(newFamily: string): UIFontDescriptor;

	fontDescriptorWithMatrix(matrix: CGAffineTransform): UIFontDescriptor;

	fontDescriptorWithSize(newPointSize: number): UIFontDescriptor;

	fontDescriptorWithSymbolicTraits(symbolicTraits: UIFontDescriptorSymbolicTraits): UIFontDescriptor;

	matchingFontDescriptorsWithMandatoryKeys(mandatoryKeys: NSSet<string>): NSArray<UIFontDescriptor>;

	objectForKey(anAttribute: string): any;

	self(): UIFontDescriptor; // inherited from NSObjectProtocol
}

declare var UIFontDescriptorCascadeListAttribute: string;

declare var UIFontDescriptorCharacterSetAttribute: string;

declare var UIFontDescriptorFaceAttribute: string;

declare var UIFontDescriptorFamilyAttribute: string;

declare var UIFontDescriptorFeatureSettingsAttribute: string;

declare var UIFontDescriptorFixedAdvanceAttribute: string;

declare var UIFontDescriptorMatrixAttribute: string;

declare var UIFontDescriptorNameAttribute: string;

declare var UIFontDescriptorSizeAttribute: string;

declare const enum UIFontDescriptorSymbolicTraits {

	TraitItalic = 1,

	TraitBold = 2,

	TraitExpanded = 32,

	TraitCondensed = 64,

	TraitMonoSpace = 1024,

	TraitVertical = 2048,

	TraitUIOptimized = 4096,

	TraitTightLeading = 32768,

	TraitLooseLeading = 65536,

	ClassMask = 4026531840,

	ClassUnknown = 0,

	ClassOldStyleSerifs = 268435456,

	ClassTransitionalSerifs = 536870912,

	ClassModernSerifs = 805306368,

	ClassClarendonSerifs = 1073741824,

	ClassSlabSerifs = 1342177280,

	ClassFreeformSerifs = 1879048192,

	ClassSansSerif = 2147483648,

	ClassOrnamentals = 2415919104,

	ClassScripts = 2684354560,

	ClassSymbolic = 3221225472
}

declare var UIFontDescriptorTextStyleAttribute: string;

declare var UIFontDescriptorTraitsAttribute: string;

declare var UIFontDescriptorVisibleNameAttribute: string;

declare var UIFontFeatureSelectorIdentifierKey: string;

declare var UIFontFeatureTypeIdentifierKey: string;

declare var UIFontSlantTrait: string;

declare var UIFontSymbolicTrait: string;

declare var UIFontTextStyleBody: string;

declare var UIFontTextStyleCallout: string;

declare var UIFontTextStyleCaption1: string;

declare var UIFontTextStyleCaption2: string;

declare var UIFontTextStyleFootnote: string;

declare var UIFontTextStyleHeadline: string;

declare var UIFontTextStyleSubheadline: string;

declare var UIFontTextStyleTitle1: string;

declare var UIFontTextStyleTitle2: string;

declare var UIFontTextStyleTitle3: string;

declare var UIFontWeightBlack: number;

declare var UIFontWeightBold: number;

declare var UIFontWeightHeavy: number;

declare var UIFontWeightLight: number;

declare var UIFontWeightMedium: number;

declare var UIFontWeightRegular: number;

declare var UIFontWeightSemibold: number;

declare var UIFontWeightThin: number;

declare var UIFontWeightTrait: string;

declare var UIFontWeightUltraLight: number;

declare var UIFontWidthTrait: string;

declare const enum UIForceTouchCapability {

	Unknown = 0,

	Unavailable = 1,

	Available = 2
}

declare class UIGestureRecognizer extends NSObject {

	static alloc(): UIGestureRecognizer; // inherited from NSObject

	static new(): UIGestureRecognizer; // inherited from NSObject

	allowedPressTypes: NSArray<number>;

	allowedTouchTypes: NSArray<number>;

	cancelsTouchesInView: boolean;

	delaysTouchesBegan: boolean;

	delaysTouchesEnded: boolean;

	delegate: UIGestureRecognizerDelegate;

	enabled: boolean;

	/* readonly */ state: UIGestureRecognizerState;

	/* readonly */ view: UIView;

	constructor(); // inherited from NSObject

	constructor(o: { target: any; action: string; });

	addTargetAction(target: any, action: string): void;

	canBePreventedByGestureRecognizer(preventingGestureRecognizer: UIGestureRecognizer): boolean;

	canPreventGestureRecognizer(preventedGestureRecognizer: UIGestureRecognizer): boolean;

	ignorePressForEvent(button: UIPress, event: UIPressesEvent): void;

	ignoreTouchForEvent(touch: UITouch, event: UIEvent): void;

	locationInView(view: UIView): CGPoint;

	locationOfTouchInView(touchIndex: number, view: UIView): CGPoint;

	numberOfTouches(): number;

	pressesBeganWithEvent(presses: NSSet<UIPress>, event: UIPressesEvent): void;

	pressesCancelledWithEvent(presses: NSSet<UIPress>, event: UIPressesEvent): void;

	pressesChangedWithEvent(presses: NSSet<UIPress>, event: UIPressesEvent): void;

	pressesEndedWithEvent(presses: NSSet<UIPress>, event: UIPressesEvent): void;

	removeTargetAction(target: any, action: string): void;

	requireGestureRecognizerToFail(otherGestureRecognizer: UIGestureRecognizer): void;

	reset(): void;

	self(): UIGestureRecognizer; // inherited from NSObjectProtocol

	shouldBeRequiredToFailByGestureRecognizer(otherGestureRecognizer: UIGestureRecognizer): boolean;

	shouldRequireFailureOfGestureRecognizer(otherGestureRecognizer: UIGestureRecognizer): boolean;

	touchesBeganWithEvent(touches: NSSet<UITouch>, event: UIEvent): void;

	touchesCancelledWithEvent(touches: NSSet<UITouch>, event: UIEvent): void;

	touchesEndedWithEvent(touches: NSSet<UITouch>, event: UIEvent): void;

	touchesEstimatedPropertiesUpdated(touches: NSSet<any>): void;

	touchesMovedWithEvent(touches: NSSet<UITouch>, event: UIEvent): void;
}

interface UIGestureRecognizerDelegate extends NSObjectProtocol {

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer?(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin?(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress?(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch?(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer?(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer?(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;
}
declare var UIGestureRecognizerDelegate: {

	prototype: UIGestureRecognizerDelegate;
};

declare const enum UIGestureRecognizerState {

	Possible = 0,

	Began = 1,

	Changed = 2,

	Ended = 3,

	Cancelled = 4,

	Failed = 5,

	Recognized = 3
}

declare function UIGraphicsAddPDFContextDestinationAtPoint(name: string, point: CGPoint): void;

declare function UIGraphicsBeginImageContext(size: CGSize): void;

declare function UIGraphicsBeginImageContextWithOptions(size: CGSize, opaque: boolean, scale: number): void;

declare function UIGraphicsBeginPDFContextToData(data: NSMutableData, bounds: CGRect, documentInfo: NSDictionary<any, any>): void;

declare function UIGraphicsBeginPDFContextToFile(path: string, bounds: CGRect, documentInfo: NSDictionary<any, any>): boolean;

declare function UIGraphicsBeginPDFPage(): void;

declare function UIGraphicsBeginPDFPageWithInfo(bounds: CGRect, pageInfo: NSDictionary<any, any>): void;

declare function UIGraphicsEndImageContext(): void;

declare function UIGraphicsEndPDFContext(): void;

declare function UIGraphicsGetCurrentContext(): any;

declare function UIGraphicsGetImageFromCurrentImageContext(): UIImage;

declare function UIGraphicsGetPDFContextBounds(): CGRect;

declare function UIGraphicsPopContext(): void;

declare function UIGraphicsPushContext(context: any): void;

declare function UIGraphicsSetPDFContextDestinationForRect(name: string, rect: CGRect): void;

declare function UIGraphicsSetPDFContextURLForRect(url: NSURL, rect: CGRect): void;

declare class UIGravityBehavior extends UIDynamicBehavior {

	angle: number;

	gravityDirection: CGVector;

	/* readonly */ items: NSArray<UIDynamicItem>;

	magnitude: number;

	constructor(o: { items: NSArray<UIDynamicItem>; });

	addItem(item: UIDynamicItem): void;

	removeItem(item: UIDynamicItem): void;

	setAngleMagnitude(angle: number, magnitude: number): void;
}

interface UIGuidedAccessRestrictionDelegate extends NSObjectProtocol {

	detailTextForGuidedAccessRestrictionWithIdentifier?(restrictionIdentifier: string): string;

	guidedAccessRestrictionIdentifiers(): NSArray<string>;

	guidedAccessRestrictionWithIdentifierDidChangeState(restrictionIdentifier: string, newRestrictionState: UIGuidedAccessRestrictionState): void;

	textForGuidedAccessRestrictionWithIdentifier(restrictionIdentifier: string): string;
}
declare var UIGuidedAccessRestrictionDelegate: {

	prototype: UIGuidedAccessRestrictionDelegate;
};

declare const enum UIGuidedAccessRestrictionState {

	Allow = 0,

	Deny = 1
}

declare function UIGuidedAccessRestrictionStateForIdentifier(restrictionIdentifier: string): UIGuidedAccessRestrictionState;

declare class UIImage extends NSObject implements NSSecureCoding, UIAccessibilityIdentification {

	static alloc(): UIImage; // inherited from NSObject

	static animatedImageNamedDuration(name: string, duration: number): UIImage;

	static animatedImageWithImagesDuration(images: NSArray<UIImage>, duration: number): UIImage;

	static animatedResizableImageNamedCapInsetsDuration(name: string, capInsets: UIEdgeInsets, duration: number): UIImage;

	static animatedResizableImageNamedCapInsetsResizingModeDuration(name: string, capInsets: UIEdgeInsets, resizingMode: UIImageResizingMode, duration: number): UIImage;

	static imageNamed(name: string): UIImage;

	static imageNamedInBundleCompatibleWithTraitCollection(name: string, bundle: NSBundle, traitCollection: UITraitCollection): UIImage;

	static imageWithCGImage(cgImage: any): UIImage;

	static imageWithCGImageScaleOrientation(cgImage: any, scale: number, orientation: UIImageOrientation): UIImage;

	static imageWithCIImage(ciImage: CIImage): UIImage;

	static imageWithCIImageScaleOrientation(ciImage: CIImage, scale: number, orientation: UIImageOrientation): UIImage;

	static imageWithContentsOfFile(path: string): UIImage;

	static imageWithData(data: NSData): UIImage;

	static imageWithDataScale(data: NSData, scale: number): UIImage;

	static new(): UIImage; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ CGImage: any;

	/* readonly */ CIImage: CIImage;

	/* readonly */ alignmentRectInsets: UIEdgeInsets;

	/* readonly */ capInsets: UIEdgeInsets;

	/* readonly */ duration: number;

	/* readonly */ flipsForRightToLeftLayoutDirection: boolean;

	/* readonly */ imageAsset: UIImageAsset;

	/* readonly */ imageOrientation: UIImageOrientation;

	/* readonly */ images: NSArray<UIImage>;

	/* readonly */ leftCapWidth: number;

	/* readonly */ renderingMode: UIImageRenderingMode;

	/* readonly */ resizingMode: UIImageResizingMode;

	/* readonly */ scale: number;

	/* readonly */ size: CGSize;

	/* readonly */ topCapHeight: number;

	/* readonly */ traitCollection: UITraitCollection;

	accessibilityIdentifier: string; // inherited from UIAccessibilityIdentification

	constructor(); // inherited from NSObject

	constructor(o: { CGImage: any; });

	constructor(o: { CGImage: any; scale: number; orientation: UIImageOrientation; });

	constructor(o: { CIImage: CIImage; });

	constructor(o: { CIImage: CIImage; scale: number; orientation: UIImageOrientation; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { contentsOfFile: string; });

	constructor(o: { data: NSData; });

	constructor(o: { data: NSData; scale: number; });

	drawAsPatternInRect(rect: CGRect): void;

	drawAtPoint(point: CGPoint): void;

	drawAtPointBlendModeAlpha(point: CGPoint, blendMode: CGBlendMode, alpha: number): void;

	drawInRect(rect: CGRect): void;

	drawInRectBlendModeAlpha(rect: CGRect, blendMode: CGBlendMode, alpha: number): void;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	imageFlippedForRightToLeftLayoutDirection(): UIImage;

	imageWithAlignmentRectInsets(alignmentInsets: UIEdgeInsets): UIImage;

	imageWithRenderingMode(renderingMode: UIImageRenderingMode): UIImage;

	resizableImageWithCapInsets(capInsets: UIEdgeInsets): UIImage;

	resizableImageWithCapInsetsResizingMode(capInsets: UIEdgeInsets, resizingMode: UIImageResizingMode): UIImage;

	self(): UIImage; // inherited from NSObjectProtocol

	stretchableImageWithLeftCapWidthTopCapHeight(leftCapWidth: number, topCapHeight: number): UIImage;
}

declare class UIImageAsset extends NSObject implements NSSecureCoding {

	static alloc(): UIImageAsset; // inherited from NSObject

	static new(): UIImageAsset; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	imageWithTraitCollection(traitCollection: UITraitCollection): UIImage;

	registerImageWithTraitCollection(image: UIImage, traitCollection: UITraitCollection): void;

	self(): UIImageAsset; // inherited from NSObjectProtocol

	unregisterImageWithTraitCollection(traitCollection: UITraitCollection): void;
}

declare function UIImageJPEGRepresentation(image: UIImage, compressionQuality: number): NSData;

declare const enum UIImageOrientation {

	Up = 0,

	Down = 1,

	Left = 2,

	Right = 3,

	UpMirrored = 4,

	DownMirrored = 5,

	LeftMirrored = 6,

	RightMirrored = 7
}

declare function UIImagePNGRepresentation(image: UIImage): NSData;

declare class UIImagePickerController extends UINavigationController implements NSCoding {

	static availableCaptureModesForCameraDevice(cameraDevice: UIImagePickerControllerCameraDevice): NSArray<number>;

	static availableMediaTypesForSourceType(sourceType: UIImagePickerControllerSourceType): NSArray<string>;

	static isCameraDeviceAvailable(cameraDevice: UIImagePickerControllerCameraDevice): boolean;

	static isFlashAvailableForCameraDevice(cameraDevice: UIImagePickerControllerCameraDevice): boolean;

	static isSourceTypeAvailable(sourceType: UIImagePickerControllerSourceType): boolean;

	allowsEditing: boolean;

	allowsImageEditing: boolean;

	cameraCaptureMode: UIImagePickerControllerCameraCaptureMode;

	cameraDevice: UIImagePickerControllerCameraDevice;

	cameraFlashMode: UIImagePickerControllerCameraFlashMode;

	cameraOverlayView: UIView;

	cameraViewTransform: CGAffineTransform;

	delegate: any; /*any */

	mediaTypes: NSArray<string>;

	showsCameraControls: boolean;

	sourceType: UIImagePickerControllerSourceType;

	videoMaximumDuration: number;

	videoQuality: UIImagePickerControllerQualityType;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { navigationBarClass: typeof NSObject; toolbarClass: typeof NSObject; }); // inherited from UINavigationController

	constructor(o: { rootViewController: UIViewController; }); // inherited from UINavigationController

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	startVideoCapture(): boolean;

	stopVideoCapture(): void;

	takePicture(): void;
}

declare const enum UIImagePickerControllerCameraCaptureMode {

	Photo = 0,

	Video = 1
}

declare const enum UIImagePickerControllerCameraDevice {

	Rear = 0,

	Front = 1
}

declare const enum UIImagePickerControllerCameraFlashMode {

	Off = -1,

	Auto = 0,

	On = 1
}

declare var UIImagePickerControllerCropRect: string;

interface UIImagePickerControllerDelegate extends NSObjectProtocol {

	imagePickerControllerDidCancel?(picker: UIImagePickerController): void;

	imagePickerControllerDidFinishPickingImageEditingInfo?(picker: UIImagePickerController, image: UIImage, editingInfo: NSDictionary<string, any>): void;

	imagePickerControllerDidFinishPickingMediaWithInfo?(picker: UIImagePickerController, info: NSDictionary<string, any>): void;
}
declare var UIImagePickerControllerDelegate: {

	prototype: UIImagePickerControllerDelegate;
};

declare var UIImagePickerControllerEditedImage: string;

declare var UIImagePickerControllerLivePhoto: string;

declare var UIImagePickerControllerMediaMetadata: string;

declare var UIImagePickerControllerMediaType: string;

declare var UIImagePickerControllerMediaURL: string;

declare var UIImagePickerControllerOriginalImage: string;

declare const enum UIImagePickerControllerQualityType {

	TypeHigh = 0,

	TypeMedium = 1,

	TypeLow = 2,

	Type640x480 = 3,

	TypeIFrame1280x720 = 4,

	TypeIFrame960x540 = 5
}

declare var UIImagePickerControllerReferenceURL: string;

declare const enum UIImagePickerControllerSourceType {

	PhotoLibrary = 0,

	Camera = 1,

	SavedPhotosAlbum = 2
}

declare const enum UIImageRenderingMode {

	Automatic = 0,

	AlwaysOriginal = 1,

	AlwaysTemplate = 2
}

declare const enum UIImageResizingMode {

	Tile = 0,

	Stretch = 1
}

declare class UIImageView extends UIView {

	static appearance(): UIImageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIImageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIImageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIImageView; // inherited from UIAppearance

	animationDuration: number;

	animationImages: NSArray<UIImage>;

	animationRepeatCount: number;

	highlighted: boolean;

	highlightedAnimationImages: NSArray<UIImage>;

	highlightedImage: UIImage;

	image: UIImage;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	constructor(o: { image: UIImage; });

	constructor(o: { image: UIImage; highlightedImage: UIImage; });

	isAnimating(): boolean;

	self(): UIImageView; // inherited from NSObjectProtocol

	startAnimating(): void;

	stopAnimating(): void;
}

declare function UIImageWriteToSavedPhotosAlbum(image: UIImage, completionTarget: any, completionSelector: string, contextInfo: interop.Pointer): void;

declare class UIInputView extends UIView {

	static appearance(): UIInputView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIInputView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIInputView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIInputView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIInputView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIInputView; // inherited from UIAppearance

	allowsSelfSizing: boolean;

	/* readonly */ inputViewStyle: UIInputViewStyle;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	constructor(o: { frame: CGRect; inputViewStyle: UIInputViewStyle; });

	self(): UIInputView; // inherited from NSObjectProtocol
}

interface UIInputViewAudioFeedback extends NSObjectProtocol {

	enableInputClicksWhenVisible?: boolean;
}
declare var UIInputViewAudioFeedback: {

	prototype: UIInputViewAudioFeedback;
};

declare class UIInputViewController extends UIViewController implements UITextInputDelegate {

	inputView: UIInputView;

	primaryLanguage: string;

	/* readonly */ textDocumentProxy: UITextDocumentProxy;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	advanceToNextInputMode(): void;

	dismissKeyboard(): void;

	requestSupplementaryLexiconWithCompletion(completionHandler: (p1: UILexicon) => void): void;

	selectionDidChange(textInput: UITextInput): void; // inherited from UITextInputDelegate

	selectionWillChange(textInput: UITextInput): void; // inherited from UITextInputDelegate

	self(): UIInputViewController; // inherited from NSObjectProtocol

	textDidChange(textInput: UITextInput): void; // inherited from UITextInputDelegate

	textWillChange(textInput: UITextInput): void; // inherited from UITextInputDelegate
}

declare const enum UIInputViewStyle {

	Default = 0,

	Keyboard = 1
}

declare const enum UIInterfaceOrientation {

	Unknown = 0,

	Portrait = 1,

	PortraitUpsideDown = 2,

	LandscapeLeft = 4,

	LandscapeRight = 3
}

declare const enum UIInterfaceOrientationMask {

	Portrait = 2,

	LandscapeLeft = 16,

	LandscapeRight = 8,

	PortraitUpsideDown = 4,

	Landscape = 24,

	All = 30,

	AllButUpsideDown = 26
}

declare class UIInterpolatingMotionEffect extends UIMotionEffect {

	/* readonly */ keyPath: string;

	maximumRelativeValue: any;

	minimumRelativeValue: any;

	/* readonly */ type: UIInterpolatingMotionEffectType;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { keyPath: string; type: UIInterpolatingMotionEffectType; });
}

declare const enum UIInterpolatingMotionEffectType {

	TiltAlongHorizontalAxis = 0,

	TiltAlongVerticalAxis = 1
}

declare class UIKeyCommand extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): UIKeyCommand; // inherited from NSObject

	static keyCommandWithInputModifierFlagsAction(input: string, modifierFlags: UIKeyModifierFlags, action: string): UIKeyCommand;

	static keyCommandWithInputModifierFlagsActionDiscoverabilityTitle(input: string, modifierFlags: UIKeyModifierFlags, action: string, discoverabilityTitle: string): UIKeyCommand;

	static new(): UIKeyCommand; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	discoverabilityTitle: string;

	/* readonly */ input: string;

	/* readonly */ modifierFlags: UIKeyModifierFlags;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): UIKeyCommand; // inherited from NSObjectProtocol
}

interface UIKeyInput extends UITextInputTraits {

	deleteBackward(): void;

	hasText(): boolean;

	insertText(text: string): void;
}
declare var UIKeyInput: {

	prototype: UIKeyInput;
};

declare var UIKeyInputDownArrow: string;

declare var UIKeyInputEscape: string;

declare var UIKeyInputLeftArrow: string;

declare var UIKeyInputRightArrow: string;

declare var UIKeyInputUpArrow: string;

declare const enum UIKeyModifierFlags {

	AlphaShift = 65536,

	Shift = 131072,

	Control = 262144,

	Alternate = 524288,

	Command = 1048576,

	NumericPad = 2097152
}

declare var UIKeyboardAnimationCurveUserInfoKey: string;

declare var UIKeyboardAnimationDurationUserInfoKey: string;

declare const enum UIKeyboardAppearance {

	Default = 0,

	Dark = 1,

	Light = 2,

	Alert = 1
}

declare var UIKeyboardBoundsUserInfoKey: string;

declare var UIKeyboardCenterBeginUserInfoKey: string;

declare var UIKeyboardCenterEndUserInfoKey: string;

declare var UIKeyboardDidChangeFrameNotification: string;

declare var UIKeyboardDidHideNotification: string;

declare var UIKeyboardDidShowNotification: string;

declare var UIKeyboardFrameBeginUserInfoKey: string;

declare var UIKeyboardFrameEndUserInfoKey: string;

declare var UIKeyboardIsLocalUserInfoKey: string;

declare const enum UIKeyboardType {

	Default = 0,

	ASCIICapable = 1,

	NumbersAndPunctuation = 2,

	URL = 3,

	NumberPad = 4,

	PhonePad = 5,

	NamePhonePad = 6,

	EmailAddress = 7,

	DecimalPad = 8,

	Twitter = 9,

	WebSearch = 10,

	Alphabet = 1
}

declare var UIKeyboardWillChangeFrameNotification: string;

declare var UIKeyboardWillHideNotification: string;

declare var UIKeyboardWillShowNotification: string;

declare class UILabel extends UIView implements NSCoding {

	static appearance(): UILabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UILabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UILabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UILabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UILabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UILabel; // inherited from UIAppearance

	adjustsFontSizeToFitWidth: boolean;

	adjustsLetterSpacingToFitWidth: boolean;

	allowsDefaultTighteningForTruncation: boolean;

	attributedText: NSAttributedString;

	baselineAdjustment: UIBaselineAdjustment;

	enabled: boolean;

	font: UIFont;

	highlighted: boolean;

	highlightedTextColor: UIColor;

	lineBreakMode: NSLineBreakMode;

	minimumFontSize: number;

	minimumScaleFactor: number;

	numberOfLines: number;

	preferredMaxLayoutWidth: number;

	shadowColor: UIColor;

	shadowOffset: CGSize;

	text: string;

	textAlignment: NSTextAlignment;

	textColor: UIColor;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	drawTextInRect(rect: CGRect): void;

	self(): UILabel; // inherited from NSObjectProtocol

	textRectForBoundsLimitedToNumberOfLines(bounds: CGRect, numberOfLines: number): CGRect;
}

declare const enum UILayoutConstraintAxis {

	Horizontal = 0,

	Vertical = 1
}

declare var UILayoutFittingCompressedSize: CGSize;

declare var UILayoutFittingExpandedSize: CGSize;

declare class UILayoutGuide extends NSObject implements NSCoding {

	static alloc(): UILayoutGuide; // inherited from NSObject

	static new(): UILayoutGuide; // inherited from NSObject

	/* readonly */ bottomAnchor: NSLayoutYAxisAnchor;

	/* readonly */ centerXAnchor: NSLayoutXAxisAnchor;

	/* readonly */ centerYAnchor: NSLayoutYAxisAnchor;

	/* readonly */ heightAnchor: NSLayoutDimension;

	identifier: string;

	/* readonly */ layoutFrame: CGRect;

	/* readonly */ leadingAnchor: NSLayoutXAxisAnchor;

	/* readonly */ leftAnchor: NSLayoutXAxisAnchor;

	owningView: UIView;

	/* readonly */ rightAnchor: NSLayoutXAxisAnchor;

	/* readonly */ topAnchor: NSLayoutYAxisAnchor;

	/* readonly */ trailingAnchor: NSLayoutXAxisAnchor;

	/* readonly */ widthAnchor: NSLayoutDimension;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): UILayoutGuide; // inherited from NSObjectProtocol
}

declare var UILayoutPriorityDefaultHigh: number;

declare var UILayoutPriorityDefaultLow: number;

declare var UILayoutPriorityFittingSizeLevel: number;

declare var UILayoutPriorityRequired: number;

interface UILayoutSupport extends NSObjectProtocol {

	bottomAnchor: NSLayoutYAxisAnchor;

	heightAnchor: NSLayoutDimension;

	length: number;

	topAnchor: NSLayoutYAxisAnchor;
}
declare var UILayoutSupport: {

	prototype: UILayoutSupport;
};

declare class UILexicon extends NSObject implements NSCopying {

	static alloc(): UILexicon; // inherited from NSObject

	static new(): UILexicon; // inherited from NSObject

	/* readonly */ entries: NSArray<UILexiconEntry>;

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): UILexicon; // inherited from NSObjectProtocol
}

declare class UILexiconEntry extends NSObject implements NSCopying {

	static alloc(): UILexiconEntry; // inherited from NSObject

	static new(): UILexiconEntry; // inherited from NSObject

	/* readonly */ documentText: string;

	/* readonly */ userInput: string;

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): UILexiconEntry; // inherited from NSObjectProtocol
}

declare const enum UILineBreakMode {

	WordWrap = 0,

	CharacterWrap = 1,

	Clip = 2,

	HeadTruncation = 3,

	TailTruncation = 4,

	MiddleTruncation = 5
}

declare class UILocalNotification extends NSObject implements NSCoding, NSCopying {

	static alloc(): UILocalNotification; // inherited from NSObject

	static new(): UILocalNotification; // inherited from NSObject

	alertAction: string;

	alertBody: string;

	alertLaunchImage: string;

	alertTitle: string;

	applicationIconBadgeNumber: number;

	category: string;

	fireDate: Date;

	hasAction: boolean;

	region: CLRegion;

	regionTriggersOnce: boolean;

	repeatCalendar: NSCalendar;

	repeatInterval: NSCalendarUnit;

	soundName: string;

	timeZone: NSTimeZone;

	userInfo: NSDictionary<any, any>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): UILocalNotification; // inherited from NSObjectProtocol
}

declare var UILocalNotificationDefaultSoundName: string;

declare class UILocalizedIndexedCollation extends NSObject {

	static alloc(): UILocalizedIndexedCollation; // inherited from NSObject

	static currentCollation(): UILocalizedIndexedCollation;

	static new(): UILocalizedIndexedCollation; // inherited from NSObject

	/* readonly */ sectionIndexTitles: NSArray<string>;

	/* readonly */ sectionTitles: NSArray<string>;

	constructor(); // inherited from NSObject

	sectionForObjectCollationStringSelector(object: any, selector: string): number;

	sectionForSectionIndexTitleAtIndex(indexTitleIndex: number): number;

	self(): UILocalizedIndexedCollation; // inherited from NSObjectProtocol

	sortedArrayFromArrayCollationStringSelector(array: NSArray<any>, selector: string): NSArray<any>;
}

declare class UILongPressGestureRecognizer extends UIGestureRecognizer {

	allowableMovement: number;

	minimumPressDuration: number;

	numberOfTapsRequired: number;

	numberOfTouchesRequired: number;

	constructor(o: { target: any; action: string; }); // inherited from UIGestureRecognizer
}

declare class UIManagedDocument extends UIDocument {

	static persistentStoreName(): string;

	/* readonly */ managedObjectContext: NSManagedObjectContext;

	/* readonly */ managedObjectModel: NSManagedObjectModel;

	modelConfiguration: string;

	persistentStoreOptions: NSDictionary<any, any>;

	constructor(o: { fileURL: NSURL; }); // inherited from UIDocument

	additionalContentForURLError(absoluteURL: NSURL): any;

	configurePersistentStoreCoordinatorForURLOfTypeModelConfigurationStoreOptionsError(storeURL: NSURL, fileType: string, configuration: string, storeOptions: NSDictionary<any, any>): boolean;

	persistentStoreTypeForFileType(fileType: string): string;

	readAdditionalContentFromURLError(absoluteURL: NSURL): boolean;

	self(): UIManagedDocument; // inherited from NSObjectProtocol

	writeAdditionalContentToURLOriginalContentsURLError(content: any, absoluteURL: NSURL, absoluteOriginalContentsURL: NSURL): boolean;
}

declare class UIMarkupTextPrintFormatter extends UIPrintFormatter {

	markupText: string;

	constructor(o: { markupText: string; });
}

declare class UIMenuController extends NSObject {

	static alloc(): UIMenuController; // inherited from NSObject

	static new(): UIMenuController; // inherited from NSObject

	static sharedMenuController(): UIMenuController;

	arrowDirection: UIMenuControllerArrowDirection;

	/* readonly */ menuFrame: CGRect;

	menuItems: NSArray<UIMenuItem>;

	menuVisible: boolean;

	constructor(); // inherited from NSObject

	self(): UIMenuController; // inherited from NSObjectProtocol

	setMenuVisibleAnimated(menuVisible: boolean, animated: boolean): void;

	setTargetRectInView(targetRect: CGRect, targetView: UIView): void;

	update(): void;
}

declare const enum UIMenuControllerArrowDirection {

	Default = 0,

	Up = 1,

	Down = 2,

	Left = 3,

	Right = 4
}

declare var UIMenuControllerDidHideMenuNotification: string;

declare var UIMenuControllerDidShowMenuNotification: string;

declare var UIMenuControllerMenuFrameDidChangeNotification: string;

declare var UIMenuControllerWillHideMenuNotification: string;

declare var UIMenuControllerWillShowMenuNotification: string;

declare class UIMenuItem extends NSObject {

	static alloc(): UIMenuItem; // inherited from NSObject

	static new(): UIMenuItem; // inherited from NSObject

	action: string;

	title: string;

	constructor(); // inherited from NSObject

	constructor(o: { title: string; action: string; });

	self(): UIMenuItem; // inherited from NSObjectProtocol
}

declare var UIMinimumKeepAliveTimeout: number;

declare const enum UIModalPresentationStyle {

	FullScreen = 0,

	PageSheet = 1,

	FormSheet = 2,

	CurrentContext = 3,

	Custom = 4,

	OverFullScreen = 5,

	OverCurrentContext = 6,

	Popover = 7,

	None = -1
}

declare const enum UIModalTransitionStyle {

	CoverVertical = 0,

	FlipHorizontal = 1,

	CrossDissolve = 2,

	PartialCurl = 3
}

declare class UIMotionEffect extends NSObject implements NSCoding, NSCopying {

	static alloc(): UIMotionEffect; // inherited from NSObject

	static new(): UIMotionEffect; // inherited from NSObject

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	keyPathsAndRelativeValuesForViewerOffset(viewerOffset: UIOffset): NSDictionary<string, any>;

	self(): UIMotionEffect; // inherited from NSObjectProtocol
}

declare class UIMotionEffectGroup extends UIMotionEffect {

	motionEffects: NSArray<UIMotionEffect>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare class UIMutableApplicationShortcutItem extends UIApplicationShortcutItem {

	icon: UIApplicationShortcutIcon;

	localizedSubtitle: string;

	localizedTitle: string;

	type: string;

	userInfo: NSDictionary<string, NSSecureCoding>;

	constructor(o: { type: string; localizedTitle: string; }); // inherited from UIApplicationShortcutItem

	constructor(o: { type: string; localizedTitle: string; localizedSubtitle: string; icon: UIApplicationShortcutIcon; userInfo: NSDictionary<any, any>; }); // inherited from UIApplicationShortcutItem
}

declare class UIMutableUserNotificationAction extends UIUserNotificationAction {

	activationMode: UIUserNotificationActivationMode;

	authenticationRequired: boolean;

	behavior: UIUserNotificationActionBehavior;

	destructive: boolean;

	identifier: string;

	parameters: NSDictionary<any, any>;

	title: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare class UIMutableUserNotificationCategory extends UIUserNotificationCategory {

	identifier: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	setActionsForContext(actions: NSArray<UIUserNotificationAction>, context: UIUserNotificationActionContext): void;
}

declare class UINavigationBar extends UIView implements NSCoding, UIBarPositioning {

	static appearance(): UINavigationBar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UINavigationBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UINavigationBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UINavigationBar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UINavigationBar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UINavigationBar; // inherited from UIAppearance

	backIndicatorImage: UIImage;

	backIndicatorTransitionMaskImage: UIImage;

	/* readonly */ backItem: UINavigationItem;

	barStyle: UIBarStyle;

	barTintColor: UIColor;

	delegate: UINavigationBarDelegate;

	items: NSArray<UINavigationItem>;

	shadowImage: UIImage;

	titleTextAttributes: NSDictionary<string, any>;

	/* readonly */ topItem: UINavigationItem;

	translucent: boolean;

	/* readonly */ barPosition: UIBarPosition; // inherited from UIBarPositioning

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	backgroundImageForBarMetrics(barMetrics: UIBarMetrics): UIImage;

	backgroundImageForBarPositionBarMetrics(barPosition: UIBarPosition, barMetrics: UIBarMetrics): UIImage;

	popNavigationItemAnimated(animated: boolean): UINavigationItem;

	pushNavigationItemAnimated(item: UINavigationItem, animated: boolean): void;

	self(): UINavigationBar; // inherited from NSObjectProtocol

	setBackgroundImageForBarMetrics(backgroundImage: UIImage, barMetrics: UIBarMetrics): void;

	setBackgroundImageForBarPositionBarMetrics(backgroundImage: UIImage, barPosition: UIBarPosition, barMetrics: UIBarMetrics): void;

	setItemsAnimated(items: NSArray<UINavigationItem>, animated: boolean): void;

	setTitleVerticalPositionAdjustmentForBarMetrics(adjustment: number, barMetrics: UIBarMetrics): void;

	titleVerticalPositionAdjustmentForBarMetrics(barMetrics: UIBarMetrics): number;
}

interface UINavigationBarDelegate extends UIBarPositioningDelegate {

	navigationBarDidPopItem?(navigationBar: UINavigationBar, item: UINavigationItem): void;

	navigationBarDidPushItem?(navigationBar: UINavigationBar, item: UINavigationItem): void;

	navigationBarShouldPopItem?(navigationBar: UINavigationBar, item: UINavigationItem): boolean;

	navigationBarShouldPushItem?(navigationBar: UINavigationBar, item: UINavigationItem): boolean;
}
declare var UINavigationBarDelegate: {

	prototype: UINavigationBarDelegate;
};

declare class UINavigationController extends UIViewController {

	/* readonly */ barHideOnSwipeGestureRecognizer: UIPanGestureRecognizer;

	/* readonly */ barHideOnTapGestureRecognizer: UITapGestureRecognizer;

	delegate: UINavigationControllerDelegate;

	hidesBarsOnSwipe: boolean;

	hidesBarsOnTap: boolean;

	hidesBarsWhenKeyboardAppears: boolean;

	hidesBarsWhenVerticallyCompact: boolean;

	/* readonly */ interactivePopGestureRecognizer: UIGestureRecognizer;

	/* readonly */ navigationBar: UINavigationBar;

	navigationBarHidden: boolean;

	/* readonly */ toolbar: UIToolbar;

	toolbarHidden: boolean;

	/* readonly */ topViewController: UIViewController;

	viewControllers: NSArray<UIViewController>;

	/* readonly */ visibleViewController: UIViewController;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { navigationBarClass: typeof NSObject; toolbarClass: typeof NSObject; });

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	constructor(o: { rootViewController: UIViewController; });

	popToRootViewControllerAnimated(animated: boolean): NSArray<UIViewController>;

	popToViewControllerAnimated(viewController: UIViewController, animated: boolean): NSArray<UIViewController>;

	popViewControllerAnimated(animated: boolean): UIViewController;

	pushViewControllerAnimated(viewController: UIViewController, animated: boolean): void;

	self(): UINavigationController; // inherited from NSObjectProtocol

	setNavigationBarHiddenAnimated(hidden: boolean, animated: boolean): void;

	setToolbarHiddenAnimated(hidden: boolean, animated: boolean): void;

	setViewControllersAnimated(viewControllers: NSArray<UIViewController>, animated: boolean): void;
}

interface UINavigationControllerDelegate extends NSObjectProtocol {

	navigationControllerAnimationControllerForOperationFromViewControllerToViewController?(navigationController: UINavigationController, operation: UINavigationControllerOperation, fromVC: UIViewController, toVC: UIViewController): UIViewControllerAnimatedTransitioning;

	navigationControllerDidShowViewControllerAnimated?(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	navigationControllerInteractionControllerForAnimationController?(navigationController: UINavigationController, animationController: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	navigationControllerPreferredInterfaceOrientationForPresentation?(navigationController: UINavigationController): UIInterfaceOrientation;

	navigationControllerSupportedInterfaceOrientations?(navigationController: UINavigationController): UIInterfaceOrientationMask;

	navigationControllerWillShowViewControllerAnimated?(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;
}
declare var UINavigationControllerDelegate: {

	prototype: UINavigationControllerDelegate;
};

declare var UINavigationControllerHideShowBarDuration: number;

declare const enum UINavigationControllerOperation {

	None = 0,

	Push = 1,

	Pop = 2
}

declare class UINavigationItem extends NSObject implements NSCoding {

	static alloc(): UINavigationItem; // inherited from NSObject

	static new(): UINavigationItem; // inherited from NSObject

	backBarButtonItem: UIBarButtonItem;

	hidesBackButton: boolean;

	leftBarButtonItem: UIBarButtonItem;

	leftBarButtonItems: NSArray<UIBarButtonItem>;

	leftItemsSupplementBackButton: boolean;

	prompt: string;

	rightBarButtonItem: UIBarButtonItem;

	rightBarButtonItems: NSArray<UIBarButtonItem>;

	title: string;

	titleView: UIView;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { title: string; });

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): UINavigationItem; // inherited from NSObjectProtocol

	setHidesBackButtonAnimated(hidesBackButton: boolean, animated: boolean): void;

	setLeftBarButtonItemAnimated(item: UIBarButtonItem, animated: boolean): void;

	setLeftBarButtonItemsAnimated(items: NSArray<UIBarButtonItem>, animated: boolean): void;

	setRightBarButtonItemAnimated(item: UIBarButtonItem, animated: boolean): void;

	setRightBarButtonItemsAnimated(items: NSArray<UIBarButtonItem>, animated: boolean): void;
}

declare class UINib extends NSObject {

	static alloc(): UINib; // inherited from NSObject

	static new(): UINib; // inherited from NSObject

	static nibWithDataBundle(data: NSData, bundleOrNil: NSBundle): UINib;

	static nibWithNibNameBundle(name: string, bundleOrNil: NSBundle): UINib;

	constructor(); // inherited from NSObject

	instantiateWithOwnerOptions(ownerOrNil: any, optionsOrNil: NSDictionary<any, any>): NSArray<any>;

	self(): UINib; // inherited from NSObjectProtocol
}

declare var UINibExternalObjects: string;

declare var UINibProxiedObjectsKey: string;

interface UIObjectRestoration {
}
declare var UIObjectRestoration: {

	prototype: UIObjectRestoration;

	objectWithRestorationIdentifierPathCoder(identifierComponents: NSArray<string>, coder: NSCoder): UIStateRestoring;
};

interface UIOffset {
	horizontal: number;
	vertical: number;
}
declare var UIOffset: interop.StructType<UIOffset>;

declare function UIOffsetFromString(string: string): UIOffset;

declare var UIOffsetZero: UIOffset;

declare class UIPageControl extends UIControl {

	currentPage: number;

	currentPageIndicatorTintColor: UIColor;

	defersCurrentPageDisplay: boolean;

	hidesForSinglePage: boolean;

	numberOfPages: number;

	pageIndicatorTintColor: UIColor;

	sizeForNumberOfPages(pageCount: number): CGSize;

	updateCurrentPageDisplay(): void;
}

declare class UIPageViewController extends UIViewController {

	dataSource: UIPageViewControllerDataSource;

	delegate: UIPageViewControllerDelegate;

	doubleSided: boolean;

	/* readonly */ gestureRecognizers: NSArray<UIGestureRecognizer>;

	/* readonly */ navigationOrientation: UIPageViewControllerNavigationOrientation;

	/* readonly */ spineLocation: UIPageViewControllerSpineLocation;

	/* readonly */ transitionStyle: UIPageViewControllerTransitionStyle;

	/* readonly */ viewControllers: NSArray<UIViewController>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	constructor(o: { transitionStyle: UIPageViewControllerTransitionStyle; navigationOrientation: UIPageViewControllerNavigationOrientation; options: NSDictionary<string, any>; });

	self(): UIPageViewController; // inherited from NSObjectProtocol

	setViewControllersDirectionAnimatedCompletion(viewControllers: NSArray<UIViewController>, direction: UIPageViewControllerNavigationDirection, animated: boolean, completion: (p1: boolean) => void): void;
}

interface UIPageViewControllerDataSource extends NSObjectProtocol {

	pageViewControllerViewControllerAfterViewController(pageViewController: UIPageViewController, viewController: UIViewController): UIViewController;

	pageViewControllerViewControllerBeforeViewController(pageViewController: UIPageViewController, viewController: UIViewController): UIViewController;

	presentationCountForPageViewController?(pageViewController: UIPageViewController): number;

	presentationIndexForPageViewController?(pageViewController: UIPageViewController): number;
}
declare var UIPageViewControllerDataSource: {

	prototype: UIPageViewControllerDataSource;
};

interface UIPageViewControllerDelegate extends NSObjectProtocol {

	pageViewControllerDidFinishAnimatingPreviousViewControllersTransitionCompleted?(pageViewController: UIPageViewController, finished: boolean, previousViewControllers: NSArray<UIViewController>, completed: boolean): void;

	pageViewControllerPreferredInterfaceOrientationForPresentation?(pageViewController: UIPageViewController): UIInterfaceOrientation;

	pageViewControllerSpineLocationForInterfaceOrientation?(pageViewController: UIPageViewController, orientation: UIInterfaceOrientation): UIPageViewControllerSpineLocation;

	pageViewControllerSupportedInterfaceOrientations?(pageViewController: UIPageViewController): UIInterfaceOrientationMask;

	pageViewControllerWillTransitionToViewControllers?(pageViewController: UIPageViewController, pendingViewControllers: NSArray<UIViewController>): void;
}
declare var UIPageViewControllerDelegate: {

	prototype: UIPageViewControllerDelegate;
};

declare const enum UIPageViewControllerNavigationDirection {

	Forward = 0,

	Reverse = 1
}

declare const enum UIPageViewControllerNavigationOrientation {

	Horizontal = 0,

	Vertical = 1
}

declare var UIPageViewControllerOptionInterPageSpacingKey: string;

declare var UIPageViewControllerOptionSpineLocationKey: string;

declare const enum UIPageViewControllerSpineLocation {

	None = 0,

	Min = 1,

	Mid = 2,

	Max = 3
}

declare const enum UIPageViewControllerTransitionStyle {

	PageCurl = 0,

	Scroll = 1
}

declare class UIPanGestureRecognizer extends UIGestureRecognizer {

	maximumNumberOfTouches: number;

	minimumNumberOfTouches: number;

	constructor(o: { target: any; action: string; }); // inherited from UIGestureRecognizer

	setTranslationInView(translation: CGPoint, view: UIView): void;

	translationInView(view: UIView): CGPoint;

	velocityInView(view: UIView): CGPoint;
}

declare class UIPasteboard extends NSObject {

	static alloc(): UIPasteboard; // inherited from NSObject

	static generalPasteboard(): UIPasteboard;

	static new(): UIPasteboard; // inherited from NSObject

	static pasteboardWithNameCreate(pasteboardName: string, create: boolean): UIPasteboard;

	static pasteboardWithUniqueName(): UIPasteboard;

	static removePasteboardWithName(pasteboardName: string): void;

	URL: NSURL;

	URLs: NSArray<NSURL>;

	/* readonly */ changeCount: number;

	color: UIColor;

	colors: NSArray<UIColor>;

	image: UIImage;

	images: NSArray<UIImage>;

	items: NSArray<any>;

	/* readonly */ name: string;

	/* readonly */ numberOfItems: number;

	persistent: boolean;

	string: string;

	strings: NSArray<string>;

	constructor(); // inherited from NSObject

	addItems(items: NSArray<NSDictionary<string, any>>): void;

	containsPasteboardTypes(pasteboardTypes: NSArray<string>): boolean;

	containsPasteboardTypesInItemSet(pasteboardTypes: NSArray<string>, itemSet: NSIndexSet): boolean;

	dataForPasteboardType(pasteboardType: string): NSData;

	dataForPasteboardTypeInItemSet(pasteboardType: string, itemSet: NSIndexSet): NSArray<any>;

	itemSetWithPasteboardTypes(pasteboardTypes: NSArray<any>): NSIndexSet;

	pasteboardTypes(): NSArray<string>;

	pasteboardTypesForItemSet(itemSet: NSIndexSet): NSArray<any>;

	self(): UIPasteboard; // inherited from NSObjectProtocol

	setDataForPasteboardType(data: NSData, pasteboardType: string): void;

	setValueForPasteboardType(value: any, pasteboardType: string): void;

	valueForPasteboardType(pasteboardType: string): any;

	valuesForPasteboardTypeInItemSet(pasteboardType: string, itemSet: NSIndexSet): NSArray<any>;
}

declare var UIPasteboardChangedNotification: string;

declare var UIPasteboardChangedTypesAddedKey: string;

declare var UIPasteboardChangedTypesRemovedKey: string;

declare var UIPasteboardNameFind: string;

declare var UIPasteboardNameGeneral: string;

declare var UIPasteboardRemovedNotification: string;

declare var UIPasteboardTypeListColor: NSArray<string>;

declare var UIPasteboardTypeListImage: NSArray<string>;

declare var UIPasteboardTypeListString: NSArray<string>;

declare var UIPasteboardTypeListURL: NSArray<string>;

declare class UIPercentDrivenInteractiveTransition extends NSObject implements UIViewControllerInteractiveTransitioning {

	static alloc(): UIPercentDrivenInteractiveTransition; // inherited from NSObject

	static new(): UIPercentDrivenInteractiveTransition; // inherited from NSObject

	completionCurve: UIViewAnimationCurve;

	completionSpeed: number;

	/* readonly */ duration: number;

	/* readonly */ percentComplete: number;

	constructor(); // inherited from NSObject

	cancelInteractiveTransition(): void;

	finishInteractiveTransition(): void;

	self(): UIPercentDrivenInteractiveTransition; // inherited from NSObjectProtocol

	startInteractiveTransition(transitionContext: UIViewControllerContextTransitioning): void; // inherited from UIViewControllerInteractiveTransitioning

	updateInteractiveTransition(percentComplete: number): void;
}

declare class UIPickerView extends UIView implements NSCoding, UITableViewDataSource {

	static appearance(): UIPickerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIPickerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIPickerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIPickerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIPickerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIPickerView; // inherited from UIAppearance

	dataSource: UIPickerViewDataSource;

	delegate: UIPickerViewDelegate;

	/* readonly */ numberOfComponents: number;

	showsSelectionIndicator: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	numberOfRowsInComponent(component: number): number;

	numberOfSectionsInTableView(tableView: UITableView): number; // inherited from UITableViewDataSource

	reloadAllComponents(): void;

	reloadComponent(component: number): void;

	rowSizeForComponent(component: number): CGSize;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>; // inherited from UITableViewDataSource

	selectRowInComponentAnimated(row: number, component: number, animated: boolean): void;

	selectedRowInComponent(component: number): number;

	self(): UIPickerView; // inherited from NSObjectProtocol

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean; // inherited from UITableViewDataSource

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean; // inherited from UITableViewDataSource

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell; // inherited from UITableViewDataSource

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void; // inherited from UITableViewDataSource

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void; // inherited from UITableViewDataSource

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number; // inherited from UITableViewDataSource

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number; // inherited from UITableViewDataSource

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string; // inherited from UITableViewDataSource

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string; // inherited from UITableViewDataSource

	viewForRowForComponent(row: number, component: number): UIView;
}

interface UIPickerViewAccessibilityDelegate extends UIPickerViewDelegate {

	pickerViewAccessibilityHintForComponent?(pickerView: UIPickerView, component: number): string;

	pickerViewAccessibilityLabelForComponent?(pickerView: UIPickerView, component: number): string;
}
declare var UIPickerViewAccessibilityDelegate: {

	prototype: UIPickerViewAccessibilityDelegate;
};

interface UIPickerViewDataSource extends NSObjectProtocol {

	numberOfComponentsInPickerView(pickerView: UIPickerView): number;

	pickerViewNumberOfRowsInComponent(pickerView: UIPickerView, component: number): number;
}
declare var UIPickerViewDataSource: {

	prototype: UIPickerViewDataSource;
};

interface UIPickerViewDelegate extends NSObjectProtocol {

	pickerViewAttributedTitleForRowForComponent?(pickerView: UIPickerView, row: number, component: number): NSAttributedString;

	pickerViewDidSelectRowInComponent?(pickerView: UIPickerView, row: number, component: number): void;

	pickerViewRowHeightForComponent?(pickerView: UIPickerView, component: number): number;

	pickerViewTitleForRowForComponent?(pickerView: UIPickerView, row: number, component: number): string;

	pickerViewViewForRowForComponentReusingView?(pickerView: UIPickerView, row: number, component: number, view: UIView): UIView;

	pickerViewWidthForComponent?(pickerView: UIPickerView, component: number): number;
}
declare var UIPickerViewDelegate: {

	prototype: UIPickerViewDelegate;
};

declare class UIPinchGestureRecognizer extends UIGestureRecognizer {

	scale: number;

	/* readonly */ velocity: number;

	constructor(o: { target: any; action: string; }); // inherited from UIGestureRecognizer
}

declare const enum UIPopoverArrowDirection {

	Up = 1,

	Down = 2,

	Left = 4,

	Right = 8,

	Any = 15,

	Unknown = 4294967295
}

declare class UIPopoverBackgroundView extends UIView implements UIPopoverBackgroundViewMethods {

	static appearance(): UIPopoverBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIPopoverBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIPopoverBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIPopoverBackgroundView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIPopoverBackgroundView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIPopoverBackgroundView; // inherited from UIAppearance

	static arrowBase(): number; // inherited from UIPopoverBackgroundViewMethods

	static arrowHeight(): number; // inherited from UIPopoverBackgroundViewMethods

	static contentViewInsets(): UIEdgeInsets; // inherited from UIPopoverBackgroundViewMethods

	static wantsDefaultContentAppearance(): boolean;

	arrowDirection: UIPopoverArrowDirection;

	arrowOffset: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	self(): UIPopoverBackgroundView; // inherited from NSObjectProtocol
}

interface UIPopoverBackgroundViewMethods {
}
declare var UIPopoverBackgroundViewMethods: {

	prototype: UIPopoverBackgroundViewMethods;

	arrowBase(): number;

	arrowHeight(): number;

	contentViewInsets(): UIEdgeInsets;
};

declare class UIPopoverController extends NSObject implements UIAppearanceContainer {

	static alloc(): UIPopoverController; // inherited from NSObject

	static new(): UIPopoverController; // inherited from NSObject

	backgroundColor: UIColor;

	contentViewController: UIViewController;

	delegate: UIPopoverControllerDelegate;

	passthroughViews: NSArray<UIView>;

	/* readonly */ popoverArrowDirection: UIPopoverArrowDirection;

	popoverBackgroundViewClass: typeof NSObject;

	popoverContentSize: CGSize;

	popoverLayoutMargins: UIEdgeInsets;

	/* readonly */ popoverVisible: boolean;

	constructor(); // inherited from NSObject

	constructor(o: { contentViewController: UIViewController; });

	dismissPopoverAnimated(animated: boolean): void;

	presentPopoverFromBarButtonItemPermittedArrowDirectionsAnimated(item: UIBarButtonItem, arrowDirections: UIPopoverArrowDirection, animated: boolean): void;

	presentPopoverFromRectInViewPermittedArrowDirectionsAnimated(rect: CGRect, view: UIView, arrowDirections: UIPopoverArrowDirection, animated: boolean): void;

	self(): UIPopoverController; // inherited from NSObjectProtocol

	setContentViewControllerAnimated(viewController: UIViewController, animated: boolean): void;

	setPopoverContentSizeAnimated(size: CGSize, animated: boolean): void;
}

interface UIPopoverControllerDelegate extends NSObjectProtocol {

	popoverControllerDidDismissPopover?(popoverController: UIPopoverController): void;

	popoverControllerShouldDismissPopover?(popoverController: UIPopoverController): boolean;

	popoverControllerWillRepositionPopoverToRectInView?(popoverController: UIPopoverController, rect: interop.Reference<CGRect>, view: interop.Reference<UIView>): void;
}
declare var UIPopoverControllerDelegate: {

	prototype: UIPopoverControllerDelegate;
};

declare class UIPopoverPresentationController extends UIPresentationController {

	/* readonly */ arrowDirection: UIPopoverArrowDirection;

	backgroundColor: UIColor;

	barButtonItem: UIBarButtonItem;

	canOverlapSourceViewRect: boolean;

	delegate: any; /*UIPopoverPresentationControllerDelegate */

	passthroughViews: NSArray<UIView>;

	permittedArrowDirections: UIPopoverArrowDirection;

	popoverBackgroundViewClass: typeof NSObject;

	popoverLayoutMargins: UIEdgeInsets;

	sourceRect: CGRect;

	sourceView: UIView;

	constructor(o: { presentedViewController: UIViewController; presentingViewController: UIViewController; }); // inherited from UIPresentationController

	self(): UIPopoverPresentationController; // inherited from NSObjectProtocol
}

interface UIPopoverPresentationControllerDelegate extends UIAdaptivePresentationControllerDelegate {

	popoverPresentationControllerDidDismissPopover?(popoverPresentationController: UIPopoverPresentationController): void;

	popoverPresentationControllerShouldDismissPopover?(popoverPresentationController: UIPopoverPresentationController): boolean;

	popoverPresentationControllerWillRepositionPopoverToRectInView?(popoverPresentationController: UIPopoverPresentationController, rect: interop.Reference<CGRect>, view: interop.Reference<UIView>): void;

	prepareForPopoverPresentation?(popoverPresentationController: UIPopoverPresentationController): void;
}
declare var UIPopoverPresentationControllerDelegate: {

	prototype: UIPopoverPresentationControllerDelegate;
};

declare class UIPresentationController extends NSObject implements UIAppearanceContainer, UIContentContainer, UIFocusEnvironment, UITraitEnvironment {

	static alloc(): UIPresentationController; // inherited from NSObject

	static new(): UIPresentationController; // inherited from NSObject

	/* readonly */ containerView: UIView;

	delegate: UIAdaptivePresentationControllerDelegate;

	overrideTraitCollection: UITraitCollection;

	/* readonly */ presentationStyle: UIModalPresentationStyle;

	/* readonly */ presentedViewController: UIViewController;

	/* readonly */ presentingViewController: UIViewController;

	/* readonly */ preferredContentSize: CGSize; // inherited from UIContentContainer

	/* readonly */ preferredFocusedView: UIView; // inherited from UIFocusEnvironment

	/* readonly */ traitCollection: UITraitCollection; // inherited from UITraitEnvironment

	constructor(); // inherited from NSObject

	constructor(o: { presentedViewController: UIViewController; presentingViewController: UIViewController; });

	adaptivePresentationStyle(): UIModalPresentationStyle;

	adaptivePresentationStyleForTraitCollection(traitCollection: UITraitCollection): UIModalPresentationStyle;

	containerViewDidLayoutSubviews(): void;

	containerViewWillLayoutSubviews(): void;

	didUpdateFocusInContextWithAnimationCoordinator(context: UIFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void; // inherited from UIFocusEnvironment

	dismissalTransitionDidEnd(completed: boolean): void;

	dismissalTransitionWillBegin(): void;

	frameOfPresentedViewInContainerView(): CGRect;

	preferredContentSizeDidChangeForChildContentContainer(container: UIContentContainer): void; // inherited from UIContentContainer

	presentationTransitionDidEnd(completed: boolean): void;

	presentationTransitionWillBegin(): void;

	presentedView(): UIView;

	self(): UIPresentationController; // inherited from NSObjectProtocol

	setNeedsFocusUpdate(): void; // inherited from UIFocusEnvironment

	shouldPresentInFullscreen(): boolean;

	shouldRemovePresentersView(): boolean;

	shouldUpdateFocusInContext(context: UIFocusUpdateContext): boolean; // inherited from UIFocusEnvironment

	sizeForChildContentContainerWithParentContainerSize(container: UIContentContainer, parentSize: CGSize): CGSize; // inherited from UIContentContainer

	systemLayoutFittingSizeDidChangeForChildContentContainer(container: UIContentContainer): void; // inherited from UIContentContainer

	traitCollectionDidChange(previousTraitCollection: UITraitCollection): void; // inherited from UITraitEnvironment

	updateFocusIfNeeded(): void; // inherited from UIFocusEnvironment

	viewWillTransitionToSizeWithTransitionCoordinator(size: CGSize, coordinator: UIViewControllerTransitionCoordinator): void; // inherited from UIContentContainer

	willTransitionToTraitCollectionWithTransitionCoordinator(newCollection: UITraitCollection, coordinator: UIViewControllerTransitionCoordinator): void; // inherited from UIContentContainer
}

declare class UIPress extends NSObject {

	static alloc(): UIPress; // inherited from NSObject

	static new(): UIPress; // inherited from NSObject

	/* readonly */ force: number;

	/* readonly */ gestureRecognizers: NSArray<UIGestureRecognizer>;

	/* readonly */ phase: UIPressPhase;

	/* readonly */ responder: UIResponder;

	/* readonly */ timestamp: number;

	/* readonly */ type: UIPressType;

	/* readonly */ window: UIWindow;

	constructor(); // inherited from NSObject

	self(): UIPress; // inherited from NSObjectProtocol
}

declare const enum UIPressPhase {

	Began = 0,

	Changed = 1,

	Stationary = 2,

	Ended = 3,

	Cancelled = 4
}

declare const enum UIPressType {

	UpArrow = 0,

	DownArrow = 1,

	LeftArrow = 2,

	RightArrow = 3,

	Select = 4,

	Menu = 5,

	PlayPause = 6
}

declare class UIPressesEvent extends UIEvent {

	allPresses(): NSSet<UIPress>;

	pressesForGestureRecognizer(gesture: UIGestureRecognizer): NSSet<UIPress>;
}

declare class UIPreviewAction extends NSObject implements NSCopying, UIPreviewActionItem {

	static actionWithTitleStyleHandler(title: string, style: UIPreviewActionStyle, handler: (p1: UIPreviewAction, p2: UIViewController) => void): UIPreviewAction;

	static alloc(): UIPreviewAction; // inherited from NSObject

	static new(): UIPreviewAction; // inherited from NSObject

	/* readonly */ handler: (p1: UIPreviewActionItem, p2: UIViewController) => void;

	/* readonly */ title: string; // inherited from UIPreviewActionItem

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): UIPreviewAction; // inherited from NSObjectProtocol
}

declare class UIPreviewActionGroup extends NSObject implements NSCopying, UIPreviewActionItem {

	static actionGroupWithTitleStyleActions(title: string, style: UIPreviewActionStyle, actions: NSArray<UIPreviewAction>): UIPreviewActionGroup;

	static alloc(): UIPreviewActionGroup; // inherited from NSObject

	static new(): UIPreviewActionGroup; // inherited from NSObject

	/* readonly */ title: string; // inherited from UIPreviewActionItem

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): UIPreviewActionGroup; // inherited from NSObjectProtocol
}

interface UIPreviewActionItem extends NSObjectProtocol {

	title: string;
}
declare var UIPreviewActionItem: {

	prototype: UIPreviewActionItem;
};

declare const enum UIPreviewActionStyle {

	Default = 0,

	Selected = 1,

	Destructive = 2
}

declare var UIPrintErrorDomain: string;

declare class UIPrintFormatter extends NSObject implements NSCopying {

	static alloc(): UIPrintFormatter; // inherited from NSObject

	static new(): UIPrintFormatter; // inherited from NSObject

	contentInsets: UIEdgeInsets;

	maximumContentHeight: number;

	maximumContentWidth: number;

	/* readonly */ pageCount: number;

	perPageContentInsets: UIEdgeInsets;

	/* readonly */ printPageRenderer: UIPrintPageRenderer;

	startPage: number;

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	drawInRectForPageAtIndex(rect: CGRect, pageIndex: number): void;

	rectForPageAtIndex(pageIndex: number): CGRect;

	removeFromPrintPageRenderer(): void;

	self(): UIPrintFormatter; // inherited from NSObjectProtocol
}

declare class UIPrintInfo extends NSObject implements NSCoding, NSCopying {

	static alloc(): UIPrintInfo; // inherited from NSObject

	static new(): UIPrintInfo; // inherited from NSObject

	static printInfo(): UIPrintInfo;

	static printInfoWithDictionary(dictionary: NSDictionary<any, any>): UIPrintInfo;

	duplex: UIPrintInfoDuplex;

	jobName: string;

	orientation: UIPrintInfoOrientation;

	outputType: UIPrintInfoOutputType;

	printerID: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	dictionaryRepresentation(): NSDictionary<any, any>;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): UIPrintInfo; // inherited from NSObjectProtocol
}

declare const enum UIPrintInfoDuplex {

	None = 0,

	LongEdge = 1,

	ShortEdge = 2
}

declare const enum UIPrintInfoOrientation {

	Portrait = 0,

	Landscape = 1
}

declare const enum UIPrintInfoOutputType {

	General = 0,

	Photo = 1,

	Grayscale = 2,

	PhotoGrayscale = 3
}

declare class UIPrintInteractionController extends NSObject {

	static alloc(): UIPrintInteractionController; // inherited from NSObject

	static canPrintData(data: NSData): boolean;

	static canPrintURL(url: NSURL): boolean;

	static isPrintingAvailable(): boolean;

	static new(): UIPrintInteractionController; // inherited from NSObject

	static printableUTIs(): NSSet<string>;

	static sharedPrintController(): UIPrintInteractionController;

	delegate: UIPrintInteractionControllerDelegate;

	printFormatter: UIPrintFormatter;

	printInfo: UIPrintInfo;

	printPageRenderer: UIPrintPageRenderer;

	/* readonly */ printPaper: UIPrintPaper;

	printingItem: any;

	printingItems: NSArray<any>;

	showsNumberOfCopies: boolean;

	showsPageRange: boolean;

	showsPaperSelectionForLoadedPapers: boolean;

	constructor(); // inherited from NSObject

	dismissAnimated(animated: boolean): void;

	presentAnimatedCompletionHandler(animated: boolean, completion: (p1: UIPrintInteractionController, p2: boolean, p3: NSError) => void): boolean;

	presentFromBarButtonItemAnimatedCompletionHandler(item: UIBarButtonItem, animated: boolean, completion: (p1: UIPrintInteractionController, p2: boolean, p3: NSError) => void): boolean;

	presentFromRectInViewAnimatedCompletionHandler(rect: CGRect, view: UIView, animated: boolean, completion: (p1: UIPrintInteractionController, p2: boolean, p3: NSError) => void): boolean;

	printToPrinterCompletionHandler(printer: UIPrinter, completion: (p1: UIPrintInteractionController, p2: boolean, p3: NSError) => void): boolean;

	self(): UIPrintInteractionController; // inherited from NSObjectProtocol
}

interface UIPrintInteractionControllerDelegate extends NSObjectProtocol {

	printInteractionControllerChooseCutterBehavior?(printInteractionController: UIPrintInteractionController, availableBehaviors: NSArray<any>): UIPrinterCutterBehavior;

	printInteractionControllerChoosePaper?(printInteractionController: UIPrintInteractionController, paperList: NSArray<UIPrintPaper>): UIPrintPaper;

	printInteractionControllerCutLengthForPaper?(printInteractionController: UIPrintInteractionController, paper: UIPrintPaper): number;

	printInteractionControllerDidDismissPrinterOptions?(printInteractionController: UIPrintInteractionController): void;

	printInteractionControllerDidFinishJob?(printInteractionController: UIPrintInteractionController): void;

	printInteractionControllerDidPresentPrinterOptions?(printInteractionController: UIPrintInteractionController): void;

	printInteractionControllerParentViewController?(printInteractionController: UIPrintInteractionController): UIViewController;

	printInteractionControllerWillDismissPrinterOptions?(printInteractionController: UIPrintInteractionController): void;

	printInteractionControllerWillPresentPrinterOptions?(printInteractionController: UIPrintInteractionController): void;

	printInteractionControllerWillStartJob?(printInteractionController: UIPrintInteractionController): void;
}
declare var UIPrintInteractionControllerDelegate: {

	prototype: UIPrintInteractionControllerDelegate;
};

declare class UIPrintPageRenderer extends NSObject {

	static alloc(): UIPrintPageRenderer; // inherited from NSObject

	static new(): UIPrintPageRenderer; // inherited from NSObject

	footerHeight: number;

	headerHeight: number;

	/* readonly */ paperRect: CGRect;

	printFormatters: NSArray<UIPrintFormatter>;

	/* readonly */ printableRect: CGRect;

	constructor(); // inherited from NSObject

	addPrintFormatterStartingAtPageAtIndex(formatter: UIPrintFormatter, pageIndex: number): void;

	drawContentForPageAtIndexInRect(pageIndex: number, contentRect: CGRect): void;

	drawFooterForPageAtIndexInRect(pageIndex: number, footerRect: CGRect): void;

	drawHeaderForPageAtIndexInRect(pageIndex: number, headerRect: CGRect): void;

	drawPageAtIndexInRect(pageIndex: number, printableRect: CGRect): void;

	drawPrintFormatterForPageAtIndex(printFormatter: UIPrintFormatter, pageIndex: number): void;

	numberOfPages(): number;

	prepareForDrawingPages(range: NSRange): void;

	printFormattersForPageAtIndex(pageIndex: number): NSArray<UIPrintFormatter>;

	self(): UIPrintPageRenderer; // inherited from NSObjectProtocol
}

declare class UIPrintPaper extends NSObject {

	static alloc(): UIPrintPaper; // inherited from NSObject

	static bestPaperForPageSizeWithPapersFromArray(contentSize: CGSize, paperList: NSArray<UIPrintPaper>): UIPrintPaper;

	static new(): UIPrintPaper; // inherited from NSObject

	/* readonly */ paperSize: CGSize;

	/* readonly */ printableRect: CGRect;

	constructor(); // inherited from NSObject

	printRect(): CGRect;

	self(): UIPrintPaper; // inherited from NSObjectProtocol
}

declare class UIPrinter extends NSObject {

	static alloc(): UIPrinter; // inherited from NSObject

	static new(): UIPrinter; // inherited from NSObject

	static printerWithURL(url: NSURL): UIPrinter;

	/* readonly */ URL: NSURL;

	/* readonly */ displayLocation: string;

	/* readonly */ displayName: string;

	/* readonly */ makeAndModel: string;

	/* readonly */ supportedJobTypes: UIPrinterJobTypes;

	/* readonly */ supportsColor: boolean;

	/* readonly */ supportsDuplex: boolean;

	constructor(); // inherited from NSObject

	contactPrinter(completionHandler: (p1: boolean) => void): void;

	self(): UIPrinter; // inherited from NSObjectProtocol
}

declare const enum UIPrinterCutterBehavior {

	NoCut = 0,

	PrinterDefault = 1,

	CutAfterEachPage = 2,

	CutAfterEachCopy = 3,

	CutAfterEachJob = 4
}

declare const enum UIPrinterJobTypes {

	Unknown = 0,

	Document = 1,

	Envelope = 2,

	Label = 4,

	Photo = 8,

	Receipt = 16,

	Roll = 32,

	LargeFormat = 64,

	Postcard = 128
}

declare class UIPrinterPickerController extends NSObject {

	static alloc(): UIPrinterPickerController; // inherited from NSObject

	static new(): UIPrinterPickerController; // inherited from NSObject

	static printerPickerControllerWithInitiallySelectedPrinter(printer: UIPrinter): UIPrinterPickerController;

	delegate: UIPrinterPickerControllerDelegate;

	/* readonly */ selectedPrinter: UIPrinter;

	constructor(); // inherited from NSObject

	dismissAnimated(animated: boolean): void;

	presentAnimatedCompletionHandler(animated: boolean, completion: (p1: UIPrinterPickerController, p2: boolean, p3: NSError) => void): boolean;

	presentFromBarButtonItemAnimatedCompletionHandler(item: UIBarButtonItem, animated: boolean, completion: (p1: UIPrinterPickerController, p2: boolean, p3: NSError) => void): boolean;

	presentFromRectInViewAnimatedCompletionHandler(rect: CGRect, view: UIView, animated: boolean, completion: (p1: UIPrinterPickerController, p2: boolean, p3: NSError) => void): boolean;

	self(): UIPrinterPickerController; // inherited from NSObjectProtocol
}

interface UIPrinterPickerControllerDelegate extends NSObjectProtocol {

	printerPickerControllerDidDismiss?(printerPickerController: UIPrinterPickerController): void;

	printerPickerControllerDidPresent?(printerPickerController: UIPrinterPickerController): void;

	printerPickerControllerDidSelectPrinter?(printerPickerController: UIPrinterPickerController): void;

	printerPickerControllerParentViewController?(printerPickerController: UIPrinterPickerController): UIViewController;

	printerPickerControllerShouldShowPrinter?(printerPickerController: UIPrinterPickerController, printer: UIPrinter): boolean;

	printerPickerControllerWillDismiss?(printerPickerController: UIPrinterPickerController): void;

	printerPickerControllerWillPresent?(printerPickerController: UIPrinterPickerController): void;
}
declare var UIPrinterPickerControllerDelegate: {

	prototype: UIPrinterPickerControllerDelegate;
};

declare class UIProgressView extends UIView implements NSCoding {

	static appearance(): UIProgressView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIProgressView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIProgressView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIProgressView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIProgressView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIProgressView; // inherited from UIAppearance

	observedProgress: NSProgress;

	progress: number;

	progressImage: UIImage;

	progressTintColor: UIColor;

	progressViewStyle: UIProgressViewStyle;

	trackImage: UIImage;

	trackTintColor: UIColor;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	constructor(o: { progressViewStyle: UIProgressViewStyle; });

	self(): UIProgressView; // inherited from NSObjectProtocol

	setProgressAnimated(progress: number, animated: boolean): void;
}

declare const enum UIProgressViewStyle {

	Default = 0,

	Bar = 1
}

declare class UIPushBehavior extends UIDynamicBehavior {

	active: boolean;

	angle: number;

	/* readonly */ items: NSArray<UIDynamicItem>;

	magnitude: number;

	/* readonly */ mode: UIPushBehaviorMode;

	pushDirection: CGVector;

	constructor(o: { items: NSArray<UIDynamicItem>; mode: UIPushBehaviorMode; });

	addItem(item: UIDynamicItem): void;

	removeItem(item: UIDynamicItem): void;

	setAngleMagnitude(angle: number, magnitude: number): void;

	setTargetOffsetFromCenterForItem(o: UIOffset, item: UIDynamicItem): void;

	targetOffsetFromCenterForItem(item: UIDynamicItem): UIOffset;
}

declare const enum UIPushBehaviorMode {

	Continuous = 0,

	Instantaneous = 1
}

declare function UIRectClip(rect: CGRect): void;

declare const enum UIRectCorner {

	TopLeft = 1,

	TopRight = 2,

	BottomLeft = 4,

	BottomRight = 8,

	AllCorners = 4294967295
}

declare const enum UIRectEdge {

	None = 0,

	Top = 1,

	Left = 2,

	Bottom = 4,

	Right = 8,

	All = 15
}

declare function UIRectFill(rect: CGRect): void;

declare function UIRectFillUsingBlendMode(rect: CGRect, blendMode: CGBlendMode): void;

declare function UIRectFrame(rect: CGRect): void;

declare function UIRectFrameUsingBlendMode(rect: CGRect, blendMode: CGBlendMode): void;

declare class UIReferenceLibraryViewController extends UIViewController {

	static dictionaryHasDefinitionForTerm(term: string): boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	constructor(o: { term: string; });

	self(): UIReferenceLibraryViewController; // inherited from NSObjectProtocol
}

declare class UIRefreshControl extends UIControl {

	attributedTitle: NSAttributedString;

	/* readonly */ refreshing: boolean;

	beginRefreshing(): void;

	endRefreshing(): void;
}

declare class UIRegion extends NSObject implements NSCoding, NSCopying {

	static alloc(): UIRegion; // inherited from NSObject

	static infiniteRegion(): UIRegion;

	static new(): UIRegion; // inherited from NSObject

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { radius: number; });

	constructor(o: { size: CGSize; });

	containsPoint(point: CGPoint): boolean;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	inverseRegion(): UIRegion;

	regionByDifferenceFromRegion(region: UIRegion): UIRegion;

	regionByIntersectionWithRegion(region: UIRegion): UIRegion;

	regionByUnionWithRegion(region: UIRegion): UIRegion;

	self(): UIRegion; // inherited from NSObjectProtocol
}

declare const enum UIRemoteNotificationType {

	None = 0,

	Badge = 1,

	Sound = 2,

	Alert = 4,

	NewsstandContentAvailability = 8
}

declare class UIResponder extends NSObject {

	static alloc(): UIResponder; // inherited from NSObject

	static clearTextInputContextIdentifier(identifier: string): void;

	static new(): UIResponder; // inherited from NSObject

	/* readonly */ inputAccessoryView: UIView;

	/* readonly */ inputAccessoryViewController: UIInputViewController;

	/* readonly */ inputAssistantItem: UITextInputAssistantItem;

	/* readonly */ inputView: UIView;

	/* readonly */ inputViewController: UIInputViewController;

	/* readonly */ keyCommands: NSArray<UIKeyCommand>;

	/* readonly */ textInputContextIdentifier: string;

	/* readonly */ textInputMode: UITextInputMode;

	/* readonly */ undoManager: NSUndoManager;

	userActivity: NSUserActivity;

	constructor(); // inherited from NSObject

	becomeFirstResponder(): boolean;

	canBecomeFirstResponder(): boolean;

	canPerformActionWithSender(action: string, sender: any): boolean;

	canResignFirstResponder(): boolean;

	isFirstResponder(): boolean;

	motionBeganWithEvent(motion: UIEventSubtype, event: UIEvent): void;

	motionCancelledWithEvent(motion: UIEventSubtype, event: UIEvent): void;

	motionEndedWithEvent(motion: UIEventSubtype, event: UIEvent): void;

	nextResponder(): UIResponder;

	pressesBeganWithEvent(presses: NSSet<UIPress>, event: UIPressesEvent): void;

	pressesCancelledWithEvent(presses: NSSet<UIPress>, event: UIPressesEvent): void;

	pressesChangedWithEvent(presses: NSSet<UIPress>, event: UIPressesEvent): void;

	pressesEndedWithEvent(presses: NSSet<UIPress>, event: UIPressesEvent): void;

	reloadInputViews(): void;

	remoteControlReceivedWithEvent(event: UIEvent): void;

	resignFirstResponder(): boolean;

	restoreUserActivityState(activity: NSUserActivity): void;

	self(): UIResponder; // inherited from NSObjectProtocol

	targetForActionWithSender(action: string, sender: any): any;

	touchesBeganWithEvent(touches: NSSet<UITouch>, event: UIEvent): void;

	touchesCancelledWithEvent(touches: NSSet<UITouch>, event: UIEvent): void;

	touchesEndedWithEvent(touches: NSSet<UITouch>, event: UIEvent): void;

	touchesEstimatedPropertiesUpdated(touches: NSSet<any>): void;

	touchesMovedWithEvent(touches: NSSet<UITouch>, event: UIEvent): void;

	updateUserActivityState(activity: NSUserActivity): void;
}

declare const enum UIReturnKeyType {

	Default = 0,

	Go = 1,

	Google = 2,

	Join = 3,

	Next = 4,

	Route = 5,

	Search = 6,

	Send = 7,

	Yahoo = 8,

	Done = 9,

	EmergencyCall = 10,

	Continue = 11
}

declare class UIRotationGestureRecognizer extends UIGestureRecognizer {

	rotation: number;

	/* readonly */ velocity: number;

	constructor(o: { target: any; action: string; }); // inherited from UIGestureRecognizer
}

declare function UISaveVideoAtPathToSavedPhotosAlbum(videoPath: string, completionTarget: any, completionSelector: string, contextInfo: interop.Pointer): void;

declare class UIScreen extends NSObject implements UITraitEnvironment {

	static alloc(): UIScreen; // inherited from NSObject

	static mainScreen(): UIScreen;

	static new(): UIScreen; // inherited from NSObject

	static screens(): NSArray<UIScreen>;

	/* readonly */ applicationFrame: CGRect;

	/* readonly */ availableModes: NSArray<UIScreenMode>;

	/* readonly */ bounds: CGRect;

	brightness: number;

	/* readonly */ coordinateSpace: UICoordinateSpace;

	currentMode: UIScreenMode;

	/* readonly */ fixedCoordinateSpace: UICoordinateSpace;

	/* readonly */ focusedView: UIView;

	/* readonly */ mirroredScreen: UIScreen;

	/* readonly */ nativeBounds: CGRect;

	/* readonly */ nativeScale: number;

	overscanCompensation: UIScreenOverscanCompensation;

	/* readonly */ overscanCompensationInsets: UIEdgeInsets;

	/* readonly */ preferredMode: UIScreenMode;

	/* readonly */ scale: number;

	/* readonly */ supportsFocus: boolean;

	wantsSoftwareDimming: boolean;

	/* readonly */ traitCollection: UITraitCollection; // inherited from UITraitEnvironment

	constructor(); // inherited from NSObject

	displayLinkWithTargetSelector(target: any, sel: string): CADisplayLink;

	self(): UIScreen; // inherited from NSObjectProtocol

	snapshotViewAfterScreenUpdates(afterUpdates: boolean): UIView;

	traitCollectionDidChange(previousTraitCollection: UITraitCollection): void; // inherited from UITraitEnvironment
}

declare var UIScreenBrightnessDidChangeNotification: string;

declare var UIScreenDidConnectNotification: string;

declare var UIScreenDidDisconnectNotification: string;

declare class UIScreenEdgePanGestureRecognizer extends UIPanGestureRecognizer {

	edges: UIRectEdge;
}

declare class UIScreenMode extends NSObject {

	static alloc(): UIScreenMode; // inherited from NSObject

	static new(): UIScreenMode; // inherited from NSObject

	/* readonly */ pixelAspectRatio: number;

	/* readonly */ size: CGSize;

	constructor(); // inherited from NSObject

	self(): UIScreenMode; // inherited from NSObjectProtocol
}

declare var UIScreenModeDidChangeNotification: string;

declare const enum UIScreenOverscanCompensation {

	Scale = 0,

	InsetBounds = 1,

	None = 2,

	InsetApplicationFrame = 2
}

declare class UIScrollView extends UIView implements NSCoding {

	static appearance(): UIScrollView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIScrollView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIScrollView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIScrollView; // inherited from UIAppearance

	alwaysBounceHorizontal: boolean;

	alwaysBounceVertical: boolean;

	bounces: boolean;

	bouncesZoom: boolean;

	canCancelContentTouches: boolean;

	contentInset: UIEdgeInsets;

	contentOffset: CGPoint;

	contentSize: CGSize;

	/* readonly */ decelerating: boolean;

	decelerationRate: number;

	delaysContentTouches: boolean;

	delegate: UIScrollViewDelegate;

	directionalLockEnabled: boolean;

	/* readonly */ dragging: boolean;

	indicatorStyle: UIScrollViewIndicatorStyle;

	keyboardDismissMode: UIScrollViewKeyboardDismissMode;

	maximumZoomScale: number;

	minimumZoomScale: number;

	pagingEnabled: boolean;

	/* readonly */ panGestureRecognizer: UIPanGestureRecognizer;

	/* readonly */ pinchGestureRecognizer: UIPinchGestureRecognizer;

	scrollEnabled: boolean;

	scrollIndicatorInsets: UIEdgeInsets;

	scrollsToTop: boolean;

	showsHorizontalScrollIndicator: boolean;

	showsVerticalScrollIndicator: boolean;

	/* readonly */ tracking: boolean;

	/* readonly */ zoomBouncing: boolean;

	zoomScale: number;

	/* readonly */ zooming: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	flashScrollIndicators(): void;

	scrollRectToVisibleAnimated(rect: CGRect, animated: boolean): void;

	self(): UIScrollView; // inherited from NSObjectProtocol

	setContentOffsetAnimated(contentOffset: CGPoint, animated: boolean): void;

	setZoomScaleAnimated(scale: number, animated: boolean): void;

	touchesShouldBeginWithEventInContentView(touches: NSSet<UITouch>, event: UIEvent, view: UIView): boolean;

	touchesShouldCancelInContentView(view: UIView): boolean;

	zoomToRectAnimated(rect: CGRect, animated: boolean): void;
}

interface UIScrollViewAccessibilityDelegate extends UIScrollViewDelegate {

	accessibilityScrollStatusForScrollView?(scrollView: UIScrollView): string;
}
declare var UIScrollViewAccessibilityDelegate: {

	prototype: UIScrollViewAccessibilityDelegate;
};

declare var UIScrollViewDecelerationRateFast: number;

declare var UIScrollViewDecelerationRateNormal: number;

interface UIScrollViewDelegate extends NSObjectProtocol {

	scrollViewDidEndDecelerating?(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate?(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation?(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale?(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll?(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop?(scrollView: UIScrollView): void;

	scrollViewDidZoom?(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop?(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating?(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging?(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView?(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset?(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Reference<CGPoint>): void;

	viewForZoomingInScrollView?(scrollView: UIScrollView): UIView;
}
declare var UIScrollViewDelegate: {

	prototype: UIScrollViewDelegate;
};

declare const enum UIScrollViewIndicatorStyle {

	Default = 0,

	Black = 1,

	White = 2
}

declare const enum UIScrollViewKeyboardDismissMode {

	None = 0,

	OnDrag = 1,

	Interactive = 2
}

declare class UISearchBar extends UIView implements UIBarPositioning, UITextInputTraits {

	static appearance(): UISearchBar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UISearchBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UISearchBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UISearchBar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UISearchBar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UISearchBar; // inherited from UIAppearance

	backgroundImage: UIImage;

	barStyle: UIBarStyle;

	barTintColor: UIColor;

	delegate: UISearchBarDelegate;

	inputAccessoryView: UIView;

	placeholder: string;

	prompt: string;

	scopeBarBackgroundImage: UIImage;

	scopeButtonTitles: NSArray<string>;

	searchBarStyle: UISearchBarStyle;

	searchFieldBackgroundPositionAdjustment: UIOffset;

	searchResultsButtonSelected: boolean;

	searchTextPositionAdjustment: UIOffset;

	selectedScopeButtonIndex: number;

	showsBookmarkButton: boolean;

	showsCancelButton: boolean;

	showsScopeBar: boolean;

	showsSearchResultsButton: boolean;

	text: string;

	translucent: boolean;

	autocapitalizationType: UITextAutocapitalizationType; // inherited from UITextInputTraits

	autocorrectionType: UITextAutocorrectionType; // inherited from UITextInputTraits

	/* readonly */ barPosition: UIBarPosition; // inherited from UIBarPositioning

	enablesReturnKeyAutomatically: boolean; // inherited from UITextInputTraits

	keyboardAppearance: UIKeyboardAppearance; // inherited from UITextInputTraits

	keyboardType: UIKeyboardType; // inherited from UITextInputTraits

	returnKeyType: UIReturnKeyType; // inherited from UITextInputTraits

	secureTextEntry: boolean; // inherited from UITextInputTraits

	spellCheckingType: UITextSpellCheckingType; // inherited from UITextInputTraits

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	backgroundImageForBarPositionBarMetrics(barPosition: UIBarPosition, barMetrics: UIBarMetrics): UIImage;

	imageForSearchBarIconState(icon: UISearchBarIcon, state: UIControlState): UIImage;

	positionAdjustmentForSearchBarIcon(icon: UISearchBarIcon): UIOffset;

	scopeBarButtonBackgroundImageForState(state: UIControlState): UIImage;

	scopeBarButtonDividerImageForLeftSegmentStateRightSegmentState(leftState: UIControlState, rightState: UIControlState): UIImage;

	scopeBarButtonTitleTextAttributesForState(state: UIControlState): NSDictionary<string, any>;

	searchFieldBackgroundImageForState(state: UIControlState): UIImage;

	self(): UISearchBar; // inherited from NSObjectProtocol

	setBackgroundImageForBarPositionBarMetrics(backgroundImage: UIImage, barPosition: UIBarPosition, barMetrics: UIBarMetrics): void;

	setImageForSearchBarIconState(iconImage: UIImage, icon: UISearchBarIcon, state: UIControlState): void;

	setPositionAdjustmentForSearchBarIcon(adjustment: UIOffset, icon: UISearchBarIcon): void;

	setScopeBarButtonBackgroundImageForState(backgroundImage: UIImage, state: UIControlState): void;

	setScopeBarButtonDividerImageForLeftSegmentStateRightSegmentState(dividerImage: UIImage, leftState: UIControlState, rightState: UIControlState): void;

	setScopeBarButtonTitleTextAttributesForState(attributes: NSDictionary<string, any>, state: UIControlState): void;

	setSearchFieldBackgroundImageForState(backgroundImage: UIImage, state: UIControlState): void;

	setShowsCancelButtonAnimated(showsCancelButton: boolean, animated: boolean): void;
}

interface UISearchBarDelegate extends UIBarPositioningDelegate {

	searchBarBookmarkButtonClicked?(searchBar: UISearchBar): void;

	searchBarCancelButtonClicked?(searchBar: UISearchBar): void;

	searchBarResultsListButtonClicked?(searchBar: UISearchBar): void;

	searchBarSearchButtonClicked?(searchBar: UISearchBar): void;

	searchBarSelectedScopeButtonIndexDidChange?(searchBar: UISearchBar, selectedScope: number): void;

	searchBarShouldBeginEditing?(searchBar: UISearchBar): boolean;

	searchBarShouldChangeTextInRangeReplacementText?(searchBar: UISearchBar, range: NSRange, text: string): boolean;

	searchBarShouldEndEditing?(searchBar: UISearchBar): boolean;

	searchBarTextDidBeginEditing?(searchBar: UISearchBar): void;

	searchBarTextDidChange?(searchBar: UISearchBar, searchText: string): void;

	searchBarTextDidEndEditing?(searchBar: UISearchBar): void;
}
declare var UISearchBarDelegate: {

	prototype: UISearchBarDelegate;
};

declare const enum UISearchBarIcon {

	Search = 0,

	Clear = 1,

	Bookmark = 2,

	ResultsList = 3
}

declare const enum UISearchBarStyle {

	Default = 0,

	Prominent = 1,

	Minimal = 2
}

declare class UISearchContainerViewController extends UIViewController {

	/* readonly */ searchController: UISearchController;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	constructor(o: { searchController: UISearchController; });

	self(): UISearchContainerViewController; // inherited from NSObjectProtocol
}

declare class UISearchController extends UIViewController implements UIViewControllerAnimatedTransitioning, UIViewControllerTransitioningDelegate {

	active: boolean;

	delegate: UISearchControllerDelegate;

	dimsBackgroundDuringPresentation: boolean;

	hidesNavigationBarDuringPresentation: boolean;

	obscuresBackgroundDuringPresentation: boolean;

	/* readonly */ searchBar: UISearchBar;

	/* readonly */ searchResultsController: UIViewController;

	searchResultsUpdater: UISearchResultsUpdating;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	constructor(o: { searchResultsController: UIViewController; });

	animateTransition(transitionContext: UIViewControllerContextTransitioning): void; // inherited from UIViewControllerAnimatedTransitioning

	animationControllerForDismissedController(dismissed: UIViewController): UIViewControllerAnimatedTransitioning; // inherited from UIViewControllerTransitioningDelegate

	animationControllerForPresentedControllerPresentingControllerSourceController(presented: UIViewController, presenting: UIViewController, source: UIViewController): UIViewControllerAnimatedTransitioning; // inherited from UIViewControllerTransitioningDelegate

	animationEnded(transitionCompleted: boolean): void; // inherited from UIViewControllerAnimatedTransitioning

	interactionControllerForDismissal(animator: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning; // inherited from UIViewControllerTransitioningDelegate

	interactionControllerForPresentation(animator: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning; // inherited from UIViewControllerTransitioningDelegate

	presentationControllerForPresentedViewControllerPresentingViewControllerSourceViewController(presented: UIViewController, presenting: UIViewController, source: UIViewController): UIPresentationController; // inherited from UIViewControllerTransitioningDelegate

	self(): UISearchController; // inherited from NSObjectProtocol

	transitionDuration(transitionContext: UIViewControllerContextTransitioning): number; // inherited from UIViewControllerAnimatedTransitioning
}

interface UISearchControllerDelegate extends NSObjectProtocol {

	didDismissSearchController?(searchController: UISearchController): void;

	didPresentSearchController?(searchController: UISearchController): void;

	presentSearchController?(searchController: UISearchController): void;

	willDismissSearchController?(searchController: UISearchController): void;

	willPresentSearchController?(searchController: UISearchController): void;
}
declare var UISearchControllerDelegate: {

	prototype: UISearchControllerDelegate;
};

declare class UISearchDisplayController extends NSObject {

	static alloc(): UISearchDisplayController; // inherited from NSObject

	static new(): UISearchDisplayController; // inherited from NSObject

	active: boolean;

	delegate: UISearchDisplayDelegate;

	displaysSearchBarInNavigationBar: boolean;

	/* readonly */ navigationItem: UINavigationItem;

	/* readonly */ searchBar: UISearchBar;

	/* readonly */ searchContentsController: UIViewController;

	searchResultsDataSource: UITableViewDataSource;

	searchResultsDelegate: UITableViewDelegate;

	/* readonly */ searchResultsTableView: UITableView;

	searchResultsTitle: string;

	constructor(); // inherited from NSObject

	constructor(o: { searchBar: UISearchBar; contentsController: UIViewController; });

	self(): UISearchDisplayController; // inherited from NSObjectProtocol

	setActiveAnimated(visible: boolean, animated: boolean): void;
}

interface UISearchDisplayDelegate extends NSObjectProtocol {

	searchDisplayControllerDidBeginSearch?(controller: UISearchDisplayController): void;

	searchDisplayControllerDidEndSearch?(controller: UISearchDisplayController): void;

	searchDisplayControllerDidHideSearchResultsTableView?(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerDidLoadSearchResultsTableView?(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerDidShowSearchResultsTableView?(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerShouldReloadTableForSearchScope?(controller: UISearchDisplayController, searchOption: number): boolean;

	searchDisplayControllerShouldReloadTableForSearchString?(controller: UISearchDisplayController, searchString: string): boolean;

	searchDisplayControllerWillBeginSearch?(controller: UISearchDisplayController): void;

	searchDisplayControllerWillEndSearch?(controller: UISearchDisplayController): void;

	searchDisplayControllerWillHideSearchResultsTableView?(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerWillShowSearchResultsTableView?(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerWillUnloadSearchResultsTableView?(controller: UISearchDisplayController, tableView: UITableView): void;
}
declare var UISearchDisplayDelegate: {

	prototype: UISearchDisplayDelegate;
};

interface UISearchResultsUpdating extends NSObjectProtocol {

	updateSearchResultsForSearchController(searchController: UISearchController): void;
}
declare var UISearchResultsUpdating: {

	prototype: UISearchResultsUpdating;
};

declare class UISegmentedControl extends UIControl implements NSCoding {

	apportionsSegmentWidthsByContent: boolean;

	momentary: boolean;

	/* readonly */ numberOfSegments: number;

	segmentedControlStyle: UISegmentedControlStyle;

	selectedSegmentIndex: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { items: NSArray<any>; });

	backgroundImageForStateBarMetrics(state: UIControlState, barMetrics: UIBarMetrics): UIImage;

	contentOffsetForSegmentAtIndex(segment: number): CGSize;

	contentPositionAdjustmentForSegmentTypeBarMetrics(leftCenterRightOrAlone: UISegmentedControlSegment, barMetrics: UIBarMetrics): UIOffset;

	dividerImageForLeftSegmentStateRightSegmentStateBarMetrics(leftState: UIControlState, rightState: UIControlState, barMetrics: UIBarMetrics): UIImage;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	imageForSegmentAtIndex(segment: number): UIImage;

	insertSegmentWithImageAtIndexAnimated(image: UIImage, segment: number, animated: boolean): void;

	insertSegmentWithTitleAtIndexAnimated(title: string, segment: number, animated: boolean): void;

	isEnabledForSegmentAtIndex(segment: number): boolean;

	removeAllSegments(): void;

	removeSegmentAtIndexAnimated(segment: number, animated: boolean): void;

	setBackgroundImageForStateBarMetrics(backgroundImage: UIImage, state: UIControlState, barMetrics: UIBarMetrics): void;

	setContentOffsetForSegmentAtIndex(offset: CGSize, segment: number): void;

	setContentPositionAdjustmentForSegmentTypeBarMetrics(adjustment: UIOffset, leftCenterRightOrAlone: UISegmentedControlSegment, barMetrics: UIBarMetrics): void;

	setDividerImageForLeftSegmentStateRightSegmentStateBarMetrics(dividerImage: UIImage, leftState: UIControlState, rightState: UIControlState, barMetrics: UIBarMetrics): void;

	setEnabledForSegmentAtIndex(enabled: boolean, segment: number): void;

	setImageForSegmentAtIndex(image: UIImage, segment: number): void;

	setTitleForSegmentAtIndex(title: string, segment: number): void;

	setTitleTextAttributesForState(attributes: NSDictionary<any, any>, state: UIControlState): void;

	setWidthForSegmentAtIndex(width: number, segment: number): void;

	titleForSegmentAtIndex(segment: number): string;

	titleTextAttributesForState(state: UIControlState): NSDictionary<any, any>;

	widthForSegmentAtIndex(segment: number): number;
}

declare const enum UISegmentedControlSegment {

	Any = 0,

	Left = 1,

	Center = 2,

	Right = 3,

	Alone = 4
}

declare const enum UISegmentedControlStyle {

	Plain = 0,

	Bordered = 1,

	Bar = 2,

	Bezeled = 3
}

declare const enum UISemanticContentAttribute {

	Unspecified = 0,

	Playback = 1,

	Spatial = 2,

	ForceLeftToRight = 3,

	ForceRightToLeft = 4
}

declare class UISimpleTextPrintFormatter extends UIPrintFormatter {

	attributedText: NSAttributedString;

	color: UIColor;

	font: UIFont;

	text: string;

	textAlignment: NSTextAlignment;

	constructor(o: { attributedText: NSAttributedString; });

	constructor(o: { text: string; });
}

declare class UISlider extends UIControl implements NSCoding {

	continuous: boolean;

	/* readonly */ currentMaximumTrackImage: UIImage;

	/* readonly */ currentMinimumTrackImage: UIImage;

	/* readonly */ currentThumbImage: UIImage;

	maximumTrackTintColor: UIColor;

	maximumValue: number;

	maximumValueImage: UIImage;

	minimumTrackTintColor: UIColor;

	minimumValue: number;

	minimumValueImage: UIImage;

	thumbTintColor: UIColor;

	value: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	maximumTrackImageForState(state: UIControlState): UIImage;

	maximumValueImageRectForBounds(bounds: CGRect): CGRect;

	minimumTrackImageForState(state: UIControlState): UIImage;

	minimumValueImageRectForBounds(bounds: CGRect): CGRect;

	setMaximumTrackImageForState(image: UIImage, state: UIControlState): void;

	setMinimumTrackImageForState(image: UIImage, state: UIControlState): void;

	setThumbImageForState(image: UIImage, state: UIControlState): void;

	setValueAnimated(value: number, animated: boolean): void;

	thumbImageForState(state: UIControlState): UIImage;

	thumbRectForBoundsTrackRectValue(bounds: CGRect, rect: CGRect, value: number): CGRect;

	trackRectForBounds(bounds: CGRect): CGRect;
}

declare class UISnapBehavior extends UIDynamicBehavior {

	damping: number;

	snapPoint: CGPoint;

	constructor(o: { item: UIDynamicItem; snapToPoint: CGPoint; });
}

declare class UISplitViewController extends UIViewController {

	/* readonly */ collapsed: boolean;

	delegate: UISplitViewControllerDelegate;

	/* readonly */ displayMode: UISplitViewControllerDisplayMode;

	maximumPrimaryColumnWidth: number;

	minimumPrimaryColumnWidth: number;

	preferredDisplayMode: UISplitViewControllerDisplayMode;

	preferredPrimaryColumnWidthFraction: number;

	presentsWithGesture: boolean;

	/* readonly */ primaryColumnWidth: number;

	viewControllers: NSArray<UIViewController>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	displayModeButtonItem(): UIBarButtonItem;

	self(): UISplitViewController; // inherited from NSObjectProtocol
}

declare var UISplitViewControllerAutomaticDimension: number;

interface UISplitViewControllerDelegate {

	primaryViewControllerForCollapsingSplitViewController?(splitViewController: UISplitViewController): UIViewController;

	primaryViewControllerForExpandingSplitViewController?(splitViewController: UISplitViewController): UIViewController;

	splitViewControllerCollapseSecondaryViewControllerOntoPrimaryViewController?(splitViewController: UISplitViewController, secondaryViewController: UIViewController, primaryViewController: UIViewController): boolean;

	splitViewControllerPopoverControllerWillPresentViewController?(svc: UISplitViewController, pc: UIPopoverController, aViewController: UIViewController): void;

	splitViewControllerPreferredInterfaceOrientationForPresentation?(splitViewController: UISplitViewController): UIInterfaceOrientation;

	splitViewControllerSeparateSecondaryViewControllerFromPrimaryViewController?(splitViewController: UISplitViewController, primaryViewController: UIViewController): UIViewController;

	splitViewControllerShouldHideViewControllerInOrientation?(svc: UISplitViewController, vc: UIViewController, orientation: UIInterfaceOrientation): boolean;

	splitViewControllerShowDetailViewControllerSender?(splitViewController: UISplitViewController, vc: UIViewController, sender: any): boolean;

	splitViewControllerShowViewControllerSender?(splitViewController: UISplitViewController, vc: UIViewController, sender: any): boolean;

	splitViewControllerSupportedInterfaceOrientations?(splitViewController: UISplitViewController): UIInterfaceOrientationMask;

	splitViewControllerWillChangeToDisplayMode?(svc: UISplitViewController, displayMode: UISplitViewControllerDisplayMode): void;

	splitViewControllerWillHideViewControllerWithBarButtonItemForPopoverController?(svc: UISplitViewController, aViewController: UIViewController, barButtonItem: UIBarButtonItem, pc: UIPopoverController): void;

	splitViewControllerWillShowViewControllerInvalidatingBarButtonItem?(svc: UISplitViewController, aViewController: UIViewController, barButtonItem: UIBarButtonItem): void;

	targetDisplayModeForActionInSplitViewController?(svc: UISplitViewController): UISplitViewControllerDisplayMode;
}
declare var UISplitViewControllerDelegate: {

	prototype: UISplitViewControllerDelegate;
};

declare const enum UISplitViewControllerDisplayMode {

	Automatic = 0,

	PrimaryHidden = 1,

	AllVisible = 2,

	PrimaryOverlay = 3
}

declare class UIStackView extends UIView {

	static appearance(): UIStackView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIStackView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIStackView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIStackView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIStackView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIStackView; // inherited from UIAppearance

	alignment: UIStackViewAlignment;

	/* readonly */ arrangedSubviews: NSArray<UIView>;

	axis: UILayoutConstraintAxis;

	baselineRelativeArrangement: boolean;

	distribution: UIStackViewDistribution;

	layoutMarginsRelativeArrangement: boolean;

	spacing: number;

	constructor(o: { arrangedSubviews: NSArray<UIView>; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	addArrangedSubview(view: UIView): void;

	insertArrangedSubviewAtIndex(view: UIView, stackIndex: number): void;

	removeArrangedSubview(view: UIView): void;

	self(): UIStackView; // inherited from NSObjectProtocol
}

declare const enum UIStackViewAlignment {

	Fill = 0,

	Leading = 1,

	Top = 1,

	FirstBaseline = 2,

	Center = 3,

	Trailing = 4,

	Bottom = 4,

	LastBaseline = 5
}

declare const enum UIStackViewDistribution {

	Fill = 0,

	FillEqually = 1,

	FillProportionally = 2,

	EqualSpacing = 3,

	EqualCentering = 4
}

declare var UIStateRestorationViewControllerStoryboardKey: string;

interface UIStateRestoring extends NSObjectProtocol {

	objectRestorationClass?: typeof NSObject;

	restorationParent?: UIStateRestoring;

	applicationFinishedRestoringState?(): void;

	decodeRestorableStateWithCoder?(coder: NSCoder): void;

	encodeRestorableStateWithCoder?(coder: NSCoder): void;
}
declare var UIStateRestoring: {

	prototype: UIStateRestoring;
};

declare const enum UIStatusBarAnimation {

	None = 0,

	Fade = 1,

	Slide = 2
}

declare const enum UIStatusBarStyle {

	Default = 0,

	LightContent = 1,

	BlackTranslucent = 1,

	BlackOpaque = 2
}

declare class UIStepper extends UIControl {

	autorepeat: boolean;

	continuous: boolean;

	maximumValue: number;

	minimumValue: number;

	stepValue: number;

	value: number;

	wraps: boolean;

	backgroundImageForState(state: UIControlState): UIImage;

	decrementImageForState(state: UIControlState): UIImage;

	dividerImageForLeftSegmentStateRightSegmentState(state: UIControlState, state1: UIControlState): UIImage;

	incrementImageForState(state: UIControlState): UIImage;

	setBackgroundImageForState(image: UIImage, state: UIControlState): void;

	setDecrementImageForState(image: UIImage, state: UIControlState): void;

	setDividerImageForLeftSegmentStateRightSegmentState(image: UIImage, leftState: UIControlState, rightState: UIControlState): void;

	setIncrementImageForState(image: UIImage, state: UIControlState): void;
}

declare class UIStoryboard extends NSObject {

	static alloc(): UIStoryboard; // inherited from NSObject

	static new(): UIStoryboard; // inherited from NSObject

	static storyboardWithNameBundle(name: string, storyboardBundleOrNil: NSBundle): UIStoryboard;

	constructor(); // inherited from NSObject

	instantiateInitialViewController(): UIViewController;

	instantiateViewControllerWithIdentifier(identifier: string): UIViewController;

	self(): UIStoryboard; // inherited from NSObjectProtocol
}

declare class UIStoryboardPopoverSegue extends UIStoryboardSegue {

	static segueWithIdentifierSourceDestinationPerformHandler(identifier: string, source: UIViewController, destination: UIViewController, performHandler: () => void): UIStoryboardPopoverSegue; // inherited from UIStoryboardSegue

	/* readonly */ popoverController: UIPopoverController;

	constructor(o: { identifier: string; source: UIViewController; destination: UIViewController; }); // inherited from UIStoryboardSegue
}

declare class UIStoryboardSegue extends NSObject {

	static alloc(): UIStoryboardSegue; // inherited from NSObject

	static new(): UIStoryboardSegue; // inherited from NSObject

	static segueWithIdentifierSourceDestinationPerformHandler(identifier: string, source: UIViewController, destination: UIViewController, performHandler: () => void): UIStoryboardSegue;

	/* readonly */ destinationViewController: UIViewController;

	/* readonly */ identifier: string;

	/* readonly */ sourceViewController: UIViewController;

	constructor(); // inherited from NSObject

	constructor(o: { identifier: string; source: UIViewController; destination: UIViewController; });

	perform(): void;

	self(): UIStoryboardSegue; // inherited from NSObjectProtocol
}

declare class UIStoryboardUnwindSegueSource extends NSObject {

	static alloc(): UIStoryboardUnwindSegueSource; // inherited from NSObject

	static new(): UIStoryboardUnwindSegueSource; // inherited from NSObject

	/* readonly */ sender: any;

	/* readonly */ sourceViewController: UIViewController;

	/* readonly */ unwindAction: string;

	constructor(); // inherited from NSObject

	self(): UIStoryboardUnwindSegueSource; // inherited from NSObjectProtocol
}

declare class UISwipeGestureRecognizer extends UIGestureRecognizer {

	direction: UISwipeGestureRecognizerDirection;

	numberOfTouchesRequired: number;

	constructor(o: { target: any; action: string; }); // inherited from UIGestureRecognizer
}

declare const enum UISwipeGestureRecognizerDirection {

	Right = 1,

	Left = 2,

	Up = 4,

	Down = 8
}

declare class UISwitch extends UIControl implements NSCoding {

	offImage: UIImage;

	on: boolean;

	onImage: UIImage;

	onTintColor: UIColor;

	thumbTintColor: UIColor;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	setOnAnimated(on: boolean, animated: boolean): void;
}

declare const enum UISystemAnimation {

	Delete = 0
}

declare class UITabBar extends UIView {

	static appearance(): UITabBar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UITabBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UITabBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UITabBar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UITabBar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UITabBar; // inherited from UIAppearance

	backgroundImage: UIImage;

	barStyle: UIBarStyle;

	barTintColor: UIColor;

	delegate: UITabBarDelegate;

	itemPositioning: UITabBarItemPositioning;

	itemSpacing: number;

	itemWidth: number;

	items: NSArray<UITabBarItem>;

	selectedImageTintColor: UIColor;

	selectedItem: UITabBarItem;

	selectionIndicatorImage: UIImage;

	shadowImage: UIImage;

	translucent: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	beginCustomizingItems(items: NSArray<UITabBarItem>): void;

	endCustomizingAnimated(animated: boolean): boolean;

	isCustomizing(): boolean;

	self(): UITabBar; // inherited from NSObjectProtocol

	setItemsAnimated(items: NSArray<UITabBarItem>, animated: boolean): void;
}

declare class UITabBarController extends UIViewController implements NSCoding, UITabBarDelegate {

	customizableViewControllers: NSArray<UIViewController>;

	delegate: UITabBarControllerDelegate;

	/* readonly */ moreNavigationController: UINavigationController;

	selectedIndex: number;

	selectedViewController: UIViewController;

	/* readonly */ tabBar: UITabBar;

	viewControllers: NSArray<UIViewController>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	self(): UITabBarController; // inherited from NSObjectProtocol

	setViewControllersAnimated(viewControllers: NSArray<UIViewController>, animated: boolean): void;

	tabBarDidBeginCustomizingItems(tabBar: UITabBar, items: NSArray<UITabBarItem>): void; // inherited from UITabBarDelegate

	tabBarDidEndCustomizingItemsChanged(tabBar: UITabBar, items: NSArray<UITabBarItem>, changed: boolean): void; // inherited from UITabBarDelegate

	tabBarDidSelectItem(tabBar: UITabBar, item: UITabBarItem): void; // inherited from UITabBarDelegate

	tabBarWillBeginCustomizingItems(tabBar: UITabBar, items: NSArray<UITabBarItem>): void; // inherited from UITabBarDelegate

	tabBarWillEndCustomizingItemsChanged(tabBar: UITabBar, items: NSArray<UITabBarItem>, changed: boolean): void; // inherited from UITabBarDelegate
}

interface UITabBarControllerDelegate extends NSObjectProtocol {

	tabBarControllerAnimationControllerForTransitionFromViewControllerToViewController?(tabBarController: UITabBarController, fromVC: UIViewController, toVC: UIViewController): UIViewControllerAnimatedTransitioning;

	tabBarControllerDidEndCustomizingViewControllersChanged?(tabBarController: UITabBarController, viewControllers: NSArray<UIViewController>, changed: boolean): void;

	tabBarControllerDidSelectViewController?(tabBarController: UITabBarController, viewController: UIViewController): void;

	tabBarControllerInteractionControllerForAnimationController?(tabBarController: UITabBarController, animationController: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	tabBarControllerPreferredInterfaceOrientationForPresentation?(tabBarController: UITabBarController): UIInterfaceOrientation;

	tabBarControllerShouldSelectViewController?(tabBarController: UITabBarController, viewController: UIViewController): boolean;

	tabBarControllerSupportedInterfaceOrientations?(tabBarController: UITabBarController): UIInterfaceOrientationMask;

	tabBarControllerWillBeginCustomizingViewControllers?(tabBarController: UITabBarController, viewControllers: NSArray<UIViewController>): void;

	tabBarControllerWillEndCustomizingViewControllersChanged?(tabBarController: UITabBarController, viewControllers: NSArray<UIViewController>, changed: boolean): void;
}
declare var UITabBarControllerDelegate: {

	prototype: UITabBarControllerDelegate;
};

interface UITabBarDelegate extends NSObjectProtocol {

	tabBarDidBeginCustomizingItems?(tabBar: UITabBar, items: NSArray<UITabBarItem>): void;

	tabBarDidEndCustomizingItemsChanged?(tabBar: UITabBar, items: NSArray<UITabBarItem>, changed: boolean): void;

	tabBarDidSelectItem?(tabBar: UITabBar, item: UITabBarItem): void;

	tabBarWillBeginCustomizingItems?(tabBar: UITabBar, items: NSArray<UITabBarItem>): void;

	tabBarWillEndCustomizingItemsChanged?(tabBar: UITabBar, items: NSArray<UITabBarItem>, changed: boolean): void;
}
declare var UITabBarDelegate: {

	prototype: UITabBarDelegate;
};

declare class UITabBarItem extends UIBarItem {

	static appearance(): UITabBarItem; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UITabBarItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UITabBarItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UITabBarItem; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UITabBarItem; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UITabBarItem; // inherited from UIAppearance

	badgeValue: string;

	selectedImage: UIImage;

	titlePositionAdjustment: UIOffset;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { tabBarSystemItem: UITabBarSystemItem; tag: number; });

	constructor(o: { title: string; image: UIImage; selectedImage: UIImage; });

	constructor(o: { title: string; image: UIImage; tag: number; });

	finishedSelectedImage(): UIImage;

	finishedUnselectedImage(): UIImage;

	self(): UITabBarItem; // inherited from NSObjectProtocol

	setFinishedSelectedImageWithFinishedUnselectedImage(selectedImage: UIImage, unselectedImage: UIImage): void;
}

declare const enum UITabBarItemPositioning {

	Automatic = 0,

	Fill = 1,

	Centered = 2
}

declare const enum UITabBarSystemItem {

	More = 0,

	Favorites = 1,

	Featured = 2,

	TopRated = 3,

	Recents = 4,

	Contacts = 5,

	History = 6,

	Bookmarks = 7,

	Search = 8,

	Downloads = 9,

	MostRecent = 10,

	MostViewed = 11
}

declare class UITableView extends UIScrollView implements NSCoding {

	allowsMultipleSelection: boolean;

	allowsMultipleSelectionDuringEditing: boolean;

	allowsSelection: boolean;

	allowsSelectionDuringEditing: boolean;

	backgroundView: UIView;

	cellLayoutMarginsFollowReadableWidth: boolean;

	dataSource: UITableViewDataSource;

	delegate: any; /*UITableViewDelegate */

	editing: boolean;

	estimatedRowHeight: number;

	estimatedSectionFooterHeight: number;

	estimatedSectionHeaderHeight: number;

	/* readonly */ indexPathForSelectedRow: NSIndexPath;

	/* readonly */ indexPathsForSelectedRows: NSArray<NSIndexPath>;

	/* readonly */ indexPathsForVisibleRows: NSArray<NSIndexPath>;

	/* readonly */ numberOfSections: number;

	remembersLastFocusedIndexPath: boolean;

	rowHeight: number;

	sectionFooterHeight: number;

	sectionHeaderHeight: number;

	sectionIndexBackgroundColor: UIColor;

	sectionIndexColor: UIColor;

	sectionIndexMinimumDisplayRowCount: number;

	sectionIndexTrackingBackgroundColor: UIColor;

	separatorColor: UIColor;

	separatorEffect: UIVisualEffect;

	separatorInset: UIEdgeInsets;

	separatorStyle: UITableViewCellSeparatorStyle;

	/* readonly */ style: UITableViewStyle;

	tableFooterView: UIView;

	tableHeaderView: UIView;

	/* readonly */ visibleCells: NSArray<UITableViewCell>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; style: UITableViewStyle; });

	beginUpdates(): void;

	cellForRowAtIndexPath(indexPath: NSIndexPath): UITableViewCell;

	deleteRowsAtIndexPathsWithRowAnimation(indexPaths: NSArray<NSIndexPath>, animation: UITableViewRowAnimation): void;

	deleteSectionsWithRowAnimation(sections: NSIndexSet, animation: UITableViewRowAnimation): void;

	dequeueReusableCellWithIdentifier(identifier: string): UITableViewCell;

	dequeueReusableCellWithIdentifierForIndexPath(identifier: string, indexPath: NSIndexPath): UITableViewCell;

	dequeueReusableHeaderFooterViewWithIdentifier(identifier: string): UITableViewHeaderFooterView;

	deselectRowAtIndexPathAnimated(indexPath: NSIndexPath, animated: boolean): void;

	endUpdates(): void;

	footerViewForSection(section: number): UITableViewHeaderFooterView;

	headerViewForSection(section: number): UITableViewHeaderFooterView;

	indexPathForCell(cell: UITableViewCell): NSIndexPath;

	indexPathForRowAtPoint(point: CGPoint): NSIndexPath;

	indexPathsForRowsInRect(rect: CGRect): NSArray<NSIndexPath>;

	insertRowsAtIndexPathsWithRowAnimation(indexPaths: NSArray<NSIndexPath>, animation: UITableViewRowAnimation): void;

	insertSectionsWithRowAnimation(sections: NSIndexSet, animation: UITableViewRowAnimation): void;

	moveRowAtIndexPathToIndexPath(indexPath: NSIndexPath, newIndexPath: NSIndexPath): void;

	moveSectionToSection(section: number, newSection: number): void;

	numberOfRowsInSection(section: number): number;

	rectForFooterInSection(section: number): CGRect;

	rectForHeaderInSection(section: number): CGRect;

	rectForRowAtIndexPath(indexPath: NSIndexPath): CGRect;

	rectForSection(section: number): CGRect;

	registerClassForCellReuseIdentifier(cellClass: typeof NSObject, identifier: string): void;

	registerClassForHeaderFooterViewReuseIdentifier(aClass: typeof NSObject, identifier: string): void;

	registerNibForCellReuseIdentifier(nib: UINib, identifier: string): void;

	registerNibForHeaderFooterViewReuseIdentifier(nib: UINib, identifier: string): void;

	reloadData(): void;

	reloadRowsAtIndexPathsWithRowAnimation(indexPaths: NSArray<NSIndexPath>, animation: UITableViewRowAnimation): void;

	reloadSectionIndexTitles(): void;

	reloadSectionsWithRowAnimation(sections: NSIndexSet, animation: UITableViewRowAnimation): void;

	scrollToNearestSelectedRowAtScrollPositionAnimated(scrollPosition: UITableViewScrollPosition, animated: boolean): void;

	scrollToRowAtIndexPathAtScrollPositionAnimated(indexPath: NSIndexPath, scrollPosition: UITableViewScrollPosition, animated: boolean): void;

	selectRowAtIndexPathAnimatedScrollPosition(indexPath: NSIndexPath, animated: boolean, scrollPosition: UITableViewScrollPosition): void;

	setEditingAnimated(editing: boolean, animated: boolean): void;
}

declare var UITableViewAutomaticDimension: number;

declare class UITableViewCell extends UIView implements NSCoding, UIGestureRecognizerDelegate {

	static appearance(): UITableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UITableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UITableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UITableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UITableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UITableViewCell; // inherited from UIAppearance

	accessoryAction: string;

	accessoryType: UITableViewCellAccessoryType;

	accessoryView: UIView;

	backgroundView: UIView;

	/* readonly */ contentView: UIView;

	/* readonly */ detailTextLabel: UILabel;

	editAction: string;

	editing: boolean;

	editingAccessoryType: UITableViewCellAccessoryType;

	editingAccessoryView: UIView;

	/* readonly */ editingStyle: UITableViewCellEditingStyle;

	focusStyle: UITableViewCellFocusStyle;

	font: UIFont;

	hidesAccessoryWhenEditing: boolean;

	highlighted: boolean;

	image: UIImage;

	/* readonly */ imageView: UIImageView;

	indentationLevel: number;

	indentationWidth: number;

	lineBreakMode: NSLineBreakMode;

	multipleSelectionBackgroundView: UIView;

	/* readonly */ reuseIdentifier: string;

	selected: boolean;

	selectedBackgroundView: UIView;

	selectedImage: UIImage;

	selectedTextColor: UIColor;

	selectionStyle: UITableViewCellSelectionStyle;

	separatorInset: UIEdgeInsets;

	shouldIndentWhileEditing: boolean;

	/* readonly */ showingDeleteConfirmation: boolean;

	showsReorderControl: boolean;

	target: any;

	text: string;

	textAlignment: NSTextAlignment;

	textColor: UIColor;

	/* readonly */ textLabel: UILabel;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	constructor(o: { frame: CGRect; reuseIdentifier: string; });

	constructor(o: { style: UITableViewCellStyle; reuseIdentifier: string; });

	didTransitionToState(state: UITableViewCellStateMask): void;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean; // inherited from UIGestureRecognizerDelegate

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean; // inherited from UIGestureRecognizerDelegate

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean; // inherited from UIGestureRecognizerDelegate

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean; // inherited from UIGestureRecognizerDelegate

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean; // inherited from UIGestureRecognizerDelegate

	prepareForReuse(): void;

	self(): UITableViewCell; // inherited from NSObjectProtocol

	setEditingAnimated(editing: boolean, animated: boolean): void;

	setHighlightedAnimated(highlighted: boolean, animated: boolean): void;

	setSelectedAnimated(selected: boolean, animated: boolean): void;

	willTransitionToState(state: UITableViewCellStateMask): void;
}

declare const enum UITableViewCellAccessoryType {

	None = 0,

	DisclosureIndicator = 1,

	DetailDisclosureButton = 2,

	Checkmark = 3,

	DetailButton = 4
}

declare const enum UITableViewCellEditingStyle {

	None = 0,

	Delete = 1,

	Insert = 2
}

declare const enum UITableViewCellFocusStyle {

	Default = 0,

	Custom = 1
}

declare const enum UITableViewCellSelectionStyle {

	None = 0,

	Blue = 1,

	Gray = 2,

	Default = 3
}

declare const enum UITableViewCellSeparatorStyle {

	None = 0,

	SingleLine = 1,

	SingleLineEtched = 2
}

declare const enum UITableViewCellStateMask {

	DefaultMask = 0,

	ShowingEditControlMask = 1,

	ShowingDeleteConfirmationMask = 2
}

declare const enum UITableViewCellStyle {

	Default = 0,

	Value1 = 1,

	Value2 = 2,

	Subtitle = 3
}

declare class UITableViewController extends UIViewController implements UITableViewDataSource, UITableViewDelegate {

	clearsSelectionOnViewWillAppear: boolean;

	refreshControl: UIRefreshControl;

	tableView: UITableView;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	constructor(o: { style: UITableViewStyle; });

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath; // inherited from UITableViewDelegate

	numberOfSectionsInTableView(tableView: UITableView): number; // inherited from UITableViewDataSource

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void; // inherited from UIScrollViewDelegate

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void; // inherited from UIScrollViewDelegate

	scrollViewDidScroll(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewDidScrollToTop(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewDidZoom(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean; // inherited from UIScrollViewDelegate

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewWillBeginDragging(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void; // inherited from UIScrollViewDelegate

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Reference<CGPoint>): void; // inherited from UIScrollViewDelegate

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>; // inherited from UITableViewDataSource

	self(): UITableViewController; // inherited from NSObjectProtocol

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void; // inherited from UITableViewDelegate

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType; // inherited from UITableViewDelegate

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean; // inherited from UITableViewDataSource

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean; // inherited from UITableViewDelegate

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean; // inherited from UITableViewDataSource

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean; // inherited from UITableViewDelegate

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell; // inherited from UITableViewDataSource

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void; // inherited from UITableViewDataSource

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void; // inherited from UITableViewDelegate

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void; // inherited from UITableViewDelegate

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void; // inherited from UITableViewDelegate

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void; // inherited from UITableViewDelegate

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void; // inherited from UITableViewDelegate

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void; // inherited from UITableViewDelegate

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void; // inherited from UITableViewDelegate

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void; // inherited from UITableViewDelegate

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void; // inherited from UITableViewDelegate

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>; // inherited from UITableViewDelegate

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle; // inherited from UITableViewDelegate

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number; // inherited from UITableViewDelegate

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number; // inherited from UITableViewDelegate

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number; // inherited from UITableViewDelegate

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number; // inherited from UITableViewDelegate

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number; // inherited from UITableViewDelegate

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number; // inherited from UITableViewDelegate

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number; // inherited from UITableViewDelegate

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void; // inherited from UITableViewDataSource

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number; // inherited from UITableViewDataSource

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void; // inherited from UITableViewDelegate

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number; // inherited from UITableViewDataSource

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean; // inherited from UITableViewDelegate

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean; // inherited from UITableViewDelegate

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean; // inherited from UITableViewDelegate

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean; // inherited from UITableViewDelegate

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath; // inherited from UITableViewDelegate

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string; // inherited from UITableViewDelegate

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string; // inherited from UITableViewDataSource

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string; // inherited from UITableViewDataSource

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView; // inherited from UITableViewDelegate

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView; // inherited from UITableViewDelegate

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void; // inherited from UITableViewDelegate

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath; // inherited from UITableViewDelegate

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void; // inherited from UITableViewDelegate

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void; // inherited from UITableViewDelegate

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void; // inherited from UITableViewDelegate

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath; // inherited from UITableViewDelegate

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView; // inherited from UIScrollViewDelegate
}

interface UITableViewDataSource extends NSObjectProtocol {

	numberOfSectionsInTableView?(tableView: UITableView): number;

	sectionIndexTitlesForTableView?(tableView: UITableView): NSArray<string>;

	tableViewCanEditRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath?(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewMoveRowAtIndexPathToIndexPath?(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewSectionForSectionIndexTitleAtIndex?(tableView: UITableView, title: string, index: number): number;

	tableViewTitleForFooterInSection?(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection?(tableView: UITableView, section: number): string;
}
declare var UITableViewDataSource: {

	prototype: UITableViewDataSource;
};

interface UITableViewDelegate extends NSObjectProtocol, UIScrollViewDelegate {

	indexPathForPreferredFocusedViewInTableView?(tableView: UITableView): NSIndexPath;

	tableViewAccessoryButtonTappedForRowWithIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath?(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanFocusRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender?(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewDidDeselectRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath?(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection?(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection?(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator?(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection?(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection?(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection?(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection?(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewPerformActionForRowAtIndexPathWithSender?(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewShouldHighlightRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldUpdateFocusInContext?(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath?(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewViewForFooterInSection?(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection?(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath?(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection?(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection?(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;
}
declare var UITableViewDelegate: {

	prototype: UITableViewDelegate;
};

declare class UITableViewFocusUpdateContext extends UIFocusUpdateContext {

	/* readonly */ nextFocusedIndexPath: NSIndexPath;

	/* readonly */ previouslyFocusedIndexPath: NSIndexPath;
}

declare class UITableViewHeaderFooterView extends UIView {

	static appearance(): UITableViewHeaderFooterView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UITableViewHeaderFooterView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UITableViewHeaderFooterView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UITableViewHeaderFooterView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UITableViewHeaderFooterView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UITableViewHeaderFooterView; // inherited from UIAppearance

	backgroundView: UIView;

	/* readonly */ contentView: UIView;

	/* readonly */ detailTextLabel: UILabel;

	/* readonly */ reuseIdentifier: string;

	/* readonly */ textLabel: UILabel;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	constructor(o: { reuseIdentifier: string; });

	prepareForReuse(): void;

	self(): UITableViewHeaderFooterView; // inherited from NSObjectProtocol
}

declare var UITableViewIndexSearch: string;

declare class UITableViewRowAction extends NSObject implements NSCopying {

	static alloc(): UITableViewRowAction; // inherited from NSObject

	static new(): UITableViewRowAction; // inherited from NSObject

	static rowActionWithStyleTitleHandler(style: UITableViewRowActionStyle, title: string, handler: (p1: UITableViewRowAction, p2: NSIndexPath) => void): UITableViewRowAction;

	backgroundColor: UIColor;

	backgroundEffect: UIVisualEffect;

	/* readonly */ style: UITableViewRowActionStyle;

	title: string;

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): UITableViewRowAction; // inherited from NSObjectProtocol
}

declare const enum UITableViewRowActionStyle {

	Default = 0,

	Destructive = 0,

	Normal = 1
}

declare const enum UITableViewRowAnimation {

	Fade = 0,

	Right = 1,

	Left = 2,

	Top = 3,

	Bottom = 4,

	None = 5,

	Middle = 6,

	Automatic = 100
}

declare const enum UITableViewScrollPosition {

	None = 0,

	Top = 1,

	Middle = 2,

	Bottom = 3
}

declare var UITableViewSelectionDidChangeNotification: string;

declare const enum UITableViewStyle {

	Plain = 0,

	Grouped = 1
}

declare class UITapGestureRecognizer extends UIGestureRecognizer {

	numberOfTapsRequired: number;

	numberOfTouchesRequired: number;

	constructor(o: { target: any; action: string; }); // inherited from UIGestureRecognizer
}

declare const enum UITextAlignment {

	Left = 0,

	Center = 1,

	Right = 2
}

declare var UITextAttributeFont: string;

declare var UITextAttributeTextColor: string;

declare var UITextAttributeTextShadowColor: string;

declare var UITextAttributeTextShadowOffset: string;

declare const enum UITextAutocapitalizationType {

	None = 0,

	Words = 1,

	Sentences = 2,

	AllCharacters = 3
}

declare const enum UITextAutocorrectionType {

	Default = 0,

	No = 1,

	Yes = 2
}

declare const enum UITextBorderStyle {

	None = 0,

	Line = 1,

	Bezel = 2,

	RoundedRect = 3
}

declare class UITextChecker extends NSObject {

	static alloc(): UITextChecker; // inherited from NSObject

	static availableLanguages(): NSArray<any>;

	static hasLearnedWord(word: string): boolean;

	static learnWord(word: string): void;

	static new(): UITextChecker; // inherited from NSObject

	static unlearnWord(word: string): void;

	constructor(); // inherited from NSObject

	completionsForPartialWordRangeInStringLanguage(range: NSRange, string: string, language: string): NSArray<any>;

	guessesForWordRangeInStringLanguage(range: NSRange, string: string, language: string): NSArray<any>;

	ignoreWord(wordToIgnore: string): void;

	ignoredWords(): NSArray<any>;

	rangeOfMisspelledWordInStringRangeStartingAtWrapLanguage(stringToCheck: string, range: NSRange, startingOffset: number, wrapFlag: boolean, language: string): NSRange;

	self(): UITextChecker; // inherited from NSObjectProtocol

	setIgnoredWords(words: NSArray<any>): void;
}

interface UITextDocumentProxy extends UIKeyInput {

	documentContextAfterInput: string;

	documentContextBeforeInput: string;

	adjustTextPositionByCharacterOffset(offset: number): void;
}
declare var UITextDocumentProxy: {

	prototype: UITextDocumentProxy;
};

declare class UITextField extends UIControl implements NSCoding, UITextInput {

	adjustsFontSizeToFitWidth: boolean;

	allowsEditingTextAttributes: boolean;

	attributedPlaceholder: NSAttributedString;

	attributedText: NSAttributedString;

	background: UIImage;

	borderStyle: UITextBorderStyle;

	clearButtonMode: UITextFieldViewMode;

	clearsOnBeginEditing: boolean;

	clearsOnInsertion: boolean;

	defaultTextAttributes: NSDictionary<string, any>;

	delegate: UITextFieldDelegate;

	disabledBackground: UIImage;

	/* readonly */ editing: boolean;

	font: UIFont;

	inputAccessoryView: UIView;

	inputView: UIView;

	leftView: UIView;

	leftViewMode: UITextFieldViewMode;

	minimumFontSize: number;

	placeholder: string;

	rightView: UIView;

	rightViewMode: UITextFieldViewMode;

	text: string;

	textAlignment: NSTextAlignment;

	textColor: UIColor;

	typingAttributes: NSDictionary<string, any>;

	autocapitalizationType: UITextAutocapitalizationType; // inherited from UITextInputTraits

	autocorrectionType: UITextAutocorrectionType; // inherited from UITextInputTraits

	/* readonly */ beginningOfDocument: UITextPosition; // inherited from UITextInput

	/* readonly */ debugDescription: string; // inherited from NSObjectProtocol

	/* readonly */ description: string; // inherited from NSObjectProtocol

	enablesReturnKeyAutomatically: boolean; // inherited from UITextInputTraits

	/* readonly */ endOfDocument: UITextPosition; // inherited from UITextInput

	/* readonly */ hash: number; // inherited from NSObjectProtocol

	inputDelegate: UITextInputDelegate; // inherited from UITextInput

	/* readonly */ isProxy: boolean; // inherited from NSObjectProtocol

	keyboardAppearance: UIKeyboardAppearance; // inherited from UITextInputTraits

	keyboardType: UIKeyboardType; // inherited from UITextInputTraits

	/* readonly */ markedTextRange: UITextRange; // inherited from UITextInput

	markedTextStyle: NSDictionary<any, any>; // inherited from UITextInput

	returnKeyType: UIReturnKeyType; // inherited from UITextInputTraits

	secureTextEntry: boolean; // inherited from UITextInputTraits

	selectedTextRange: UITextRange; // inherited from UITextInput

	selectionAffinity: UITextStorageDirection; // inherited from UITextInput

	spellCheckingType: UITextSpellCheckingType; // inherited from UITextInputTraits

	/* readonly */ superclass: typeof NSObject; // inherited from NSObjectProtocol

	/* readonly */ textInputView: UIView; // inherited from UITextInput

	/* readonly */ tokenizer: UITextInputTokenizer; // inherited from UITextInput

	/* readonly */ zone: interop.Pointer; // inherited from NSObjectProtocol

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	baseWritingDirectionForPositionInDirection(position: UITextPosition, direction: UITextStorageDirection): UITextWritingDirection; // inherited from UITextInput

	beginFloatingCursorAtPoint(point: CGPoint): void; // inherited from UITextInput

	borderRectForBounds(bounds: CGRect): CGRect;

	caretRectForPosition(position: UITextPosition): CGRect; // inherited from UITextInput

	characterOffsetOfPositionWithinRange(position: UITextPosition, range: UITextRange): number; // inherited from UITextInput

	characterRangeAtPoint(point: CGPoint): UITextRange; // inherited from UITextInput

	characterRangeByExtendingPositionInDirection(position: UITextPosition, direction: UITextLayoutDirection): UITextRange; // inherited from UITextInput

	class(): typeof NSObject; // inherited from NSObjectProtocol

	clearButtonRectForBounds(bounds: CGRect): CGRect;

	closestPositionToPoint(point: CGPoint): UITextPosition; // inherited from UITextInput

	closestPositionToPointWithinRange(point: CGPoint, range: UITextRange): UITextPosition; // inherited from UITextInput

	comparePositionToPosition(position: UITextPosition, other: UITextPosition): NSComparisonResult; // inherited from UITextInput

	conformsToProtocol(aProtocol: any /* Protocol */): boolean; // inherited from NSObjectProtocol

	deleteBackward(): void; // inherited from UIKeyInput

	dictationRecognitionFailed(): void; // inherited from UITextInput

	dictationRecordingDidEnd(): void; // inherited from UITextInput

	drawPlaceholderInRect(rect: CGRect): void;

	drawTextInRect(rect: CGRect): void;

	editingRectForBounds(bounds: CGRect): CGRect;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	endFloatingCursor(): void; // inherited from UITextInput

	firstRectForRange(range: UITextRange): CGRect; // inherited from UITextInput

	frameForDictationResultPlaceholder(placeholder: any): CGRect; // inherited from UITextInput

	hasText(): boolean; // inherited from UIKeyInput

	insertDictationResult(dictationResult: NSArray<UIDictationPhrase>): void; // inherited from UITextInput

	insertDictationResultPlaceholder(): any; // inherited from UITextInput

	insertText(text: string): void; // inherited from UIKeyInput

	isEqual(object: any): boolean; // inherited from NSObjectProtocol

	isKindOfClass(aClass: typeof NSObject): boolean; // inherited from NSObjectProtocol

	isMemberOfClass(aClass: typeof NSObject): boolean; // inherited from NSObjectProtocol

	leftViewRectForBounds(bounds: CGRect): CGRect;

	offsetFromPositionToPosition(from: UITextPosition, toPosition: UITextPosition): number; // inherited from UITextInput

	performSelector(aSelector: string): any; // inherited from NSObjectProtocol

	performSelectorWithObject(aSelector: string, object: any): any; // inherited from NSObjectProtocol

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any; // inherited from NSObjectProtocol

	placeholderRectForBounds(bounds: CGRect): CGRect;

	positionFromPositionInDirectionOffset(position: UITextPosition, direction: UITextLayoutDirection, offset: number): UITextPosition; // inherited from UITextInput

	positionFromPositionOffset(position: UITextPosition, offset: number): UITextPosition; // inherited from UITextInput

	positionWithinRangeAtCharacterOffset(range: UITextRange, offset: number): UITextPosition; // inherited from UITextInput

	positionWithinRangeFarthestInDirection(range: UITextRange, direction: UITextLayoutDirection): UITextPosition; // inherited from UITextInput

	removeDictationResultPlaceholderWillInsertResult(placeholder: any, willInsertResult: boolean): void; // inherited from UITextInput

	replaceRangeWithText(range: UITextRange, text: string): void; // inherited from UITextInput

	respondsToSelector(aSelector: string): boolean; // inherited from NSObjectProtocol

	retainCount(): number; // inherited from NSObjectProtocol

	rightViewRectForBounds(bounds: CGRect): CGRect;

	selectionRectsForRange(range: UITextRange): NSArray<any>; // inherited from UITextInput

	self(): UITextField; // inherited from NSObjectProtocol

	setBaseWritingDirectionForRange(writingDirection: UITextWritingDirection, range: UITextRange): void; // inherited from UITextInput

	setMarkedTextSelectedRange(markedText: string, selectedRange: NSRange): void; // inherited from UITextInput

	shouldChangeTextInRangeReplacementText(range: UITextRange, text: string): boolean; // inherited from UITextInput

	textInRange(range: UITextRange): string; // inherited from UITextInput

	textRangeFromPositionToPosition(fromPosition: UITextPosition, toPosition: UITextPosition): UITextRange; // inherited from UITextInput

	textRectForBounds(bounds: CGRect): CGRect;

	textStylingAtPositionInDirection(position: UITextPosition, direction: UITextStorageDirection): NSDictionary<string, any>; // inherited from UITextInput

	unmarkText(): void; // inherited from UITextInput

	updateFloatingCursorAtPoint(point: CGPoint): void; // inherited from UITextInput
}

interface UITextFieldDelegate extends NSObjectProtocol {

	textFieldDidBeginEditing?(textField: UITextField): void;

	textFieldDidEndEditing?(textField: UITextField): void;

	textFieldShouldBeginEditing?(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString?(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldClear?(textField: UITextField): boolean;

	textFieldShouldEndEditing?(textField: UITextField): boolean;

	textFieldShouldReturn?(textField: UITextField): boolean;
}
declare var UITextFieldDelegate: {

	prototype: UITextFieldDelegate;
};

declare var UITextFieldTextDidBeginEditingNotification: string;

declare var UITextFieldTextDidChangeNotification: string;

declare var UITextFieldTextDidEndEditingNotification: string;

declare const enum UITextFieldViewMode {

	Never = 0,

	WhileEditing = 1,

	UnlessEditing = 2,

	Always = 3
}

declare const enum UITextGranularity {

	Character = 0,

	Word = 1,

	Sentence = 2,

	Paragraph = 3,

	Line = 4,

	Document = 5
}

interface UITextInput extends UIKeyInput {

	beginningOfDocument: UITextPosition;

	endOfDocument: UITextPosition;

	inputDelegate: UITextInputDelegate;

	markedTextRange: UITextRange;

	markedTextStyle: NSDictionary<any, any>;

	selectedTextRange: UITextRange;

	selectionAffinity?: UITextStorageDirection;

	textInputView?: UIView;

	tokenizer: UITextInputTokenizer;

	baseWritingDirectionForPositionInDirection(position: UITextPosition, direction: UITextStorageDirection): UITextWritingDirection;

	beginFloatingCursorAtPoint?(point: CGPoint): void;

	caretRectForPosition(position: UITextPosition): CGRect;

	characterOffsetOfPositionWithinRange?(position: UITextPosition, range: UITextRange): number;

	characterRangeAtPoint(point: CGPoint): UITextRange;

	characterRangeByExtendingPositionInDirection(position: UITextPosition, direction: UITextLayoutDirection): UITextRange;

	closestPositionToPoint(point: CGPoint): UITextPosition;

	closestPositionToPointWithinRange(point: CGPoint, range: UITextRange): UITextPosition;

	comparePositionToPosition(position: UITextPosition, other: UITextPosition): NSComparisonResult;

	dictationRecognitionFailed?(): void;

	dictationRecordingDidEnd?(): void;

	endFloatingCursor?(): void;

	firstRectForRange(range: UITextRange): CGRect;

	frameForDictationResultPlaceholder?(placeholder: any): CGRect;

	insertDictationResult?(dictationResult: NSArray<UIDictationPhrase>): void;

	insertDictationResultPlaceholder?(): any;

	offsetFromPositionToPosition(from: UITextPosition, toPosition: UITextPosition): number;

	positionFromPositionInDirectionOffset(position: UITextPosition, direction: UITextLayoutDirection, offset: number): UITextPosition;

	positionFromPositionOffset(position: UITextPosition, offset: number): UITextPosition;

	positionWithinRangeAtCharacterOffset?(range: UITextRange, offset: number): UITextPosition;

	positionWithinRangeFarthestInDirection(range: UITextRange, direction: UITextLayoutDirection): UITextPosition;

	removeDictationResultPlaceholderWillInsertResult?(placeholder: any, willInsertResult: boolean): void;

	replaceRangeWithText(range: UITextRange, text: string): void;

	selectionRectsForRange(range: UITextRange): NSArray<any>;

	setBaseWritingDirectionForRange(writingDirection: UITextWritingDirection, range: UITextRange): void;

	setMarkedTextSelectedRange(markedText: string, selectedRange: NSRange): void;

	shouldChangeTextInRangeReplacementText?(range: UITextRange, text: string): boolean;

	textInRange(range: UITextRange): string;

	textRangeFromPositionToPosition(fromPosition: UITextPosition, toPosition: UITextPosition): UITextRange;

	textStylingAtPositionInDirection?(position: UITextPosition, direction: UITextStorageDirection): NSDictionary<string, any>;

	unmarkText(): void;

	updateFloatingCursorAtPoint?(point: CGPoint): void;
}
declare var UITextInput: {

	prototype: UITextInput;
};

declare class UITextInputAssistantItem extends NSObject {

	static alloc(): UITextInputAssistantItem; // inherited from NSObject

	static new(): UITextInputAssistantItem; // inherited from NSObject

	allowsHidingShortcuts: boolean;

	leadingBarButtonGroups: NSArray<UIBarButtonItemGroup>;

	trailingBarButtonGroups: NSArray<UIBarButtonItemGroup>;

	constructor(); // inherited from NSObject

	self(): UITextInputAssistantItem; // inherited from NSObjectProtocol
}

declare var UITextInputCurrentInputModeDidChangeNotification: string;

interface UITextInputDelegate extends NSObjectProtocol {

	selectionDidChange(textInput: UITextInput): void;

	selectionWillChange(textInput: UITextInput): void;

	textDidChange(textInput: UITextInput): void;

	textWillChange(textInput: UITextInput): void;
}
declare var UITextInputDelegate: {

	prototype: UITextInputDelegate;
};

declare class UITextInputMode extends NSObject implements NSSecureCoding {

	static activeInputModes(): NSArray<string>;

	static alloc(): UITextInputMode; // inherited from NSObject

	static currentInputMode(): UITextInputMode;

	static new(): UITextInputMode; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ primaryLanguage: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): UITextInputMode; // inherited from NSObjectProtocol
}

declare class UITextInputStringTokenizer extends NSObject implements UITextInputTokenizer {

	static alloc(): UITextInputStringTokenizer; // inherited from NSObject

	static new(): UITextInputStringTokenizer; // inherited from NSObject

	constructor(); // inherited from NSObject

	constructor(o: { textInput: UIResponder; });

	isPositionAtBoundaryInDirection(position: UITextPosition, granularity: UITextGranularity, direction: number): boolean; // inherited from UITextInputTokenizer

	isPositionWithinTextUnitInDirection(position: UITextPosition, granularity: UITextGranularity, direction: number): boolean; // inherited from UITextInputTokenizer

	positionFromPositionToBoundaryInDirection(position: UITextPosition, granularity: UITextGranularity, direction: number): UITextPosition; // inherited from UITextInputTokenizer

	rangeEnclosingPositionWithGranularityInDirection(position: UITextPosition, granularity: UITextGranularity, direction: number): UITextRange; // inherited from UITextInputTokenizer

	self(): UITextInputStringTokenizer; // inherited from NSObjectProtocol
}

declare var UITextInputTextBackgroundColorKey: string;

declare var UITextInputTextColorKey: string;

declare var UITextInputTextFontKey: string;

interface UITextInputTokenizer extends NSObjectProtocol {

	isPositionAtBoundaryInDirection(position: UITextPosition, granularity: UITextGranularity, direction: number): boolean;

	isPositionWithinTextUnitInDirection(position: UITextPosition, granularity: UITextGranularity, direction: number): boolean;

	positionFromPositionToBoundaryInDirection(position: UITextPosition, granularity: UITextGranularity, direction: number): UITextPosition;

	rangeEnclosingPositionWithGranularityInDirection(position: UITextPosition, granularity: UITextGranularity, direction: number): UITextRange;
}
declare var UITextInputTokenizer: {

	prototype: UITextInputTokenizer;
};

interface UITextInputTraits extends NSObjectProtocol {

	autocapitalizationType?: UITextAutocapitalizationType;

	autocorrectionType?: UITextAutocorrectionType;

	enablesReturnKeyAutomatically?: boolean;

	keyboardAppearance?: UIKeyboardAppearance;

	keyboardType?: UIKeyboardType;

	returnKeyType?: UIReturnKeyType;

	secureTextEntry?: boolean;

	spellCheckingType?: UITextSpellCheckingType;
}
declare var UITextInputTraits: {

	prototype: UITextInputTraits;
};

declare const enum UITextLayoutDirection {

	Right = 2,

	Left = 3,

	Up = 4,

	Down = 5
}

declare class UITextPosition extends NSObject {

	static alloc(): UITextPosition; // inherited from NSObject

	static new(): UITextPosition; // inherited from NSObject

	constructor(); // inherited from NSObject

	self(): UITextPosition; // inherited from NSObjectProtocol
}

declare class UITextRange extends NSObject {

	static alloc(): UITextRange; // inherited from NSObject

	static new(): UITextRange; // inherited from NSObject

	/* readonly */ empty: boolean;

	/* readonly */ end: UITextPosition;

	/* readonly */ start: UITextPosition;

	constructor(); // inherited from NSObject

	self(): UITextRange; // inherited from NSObjectProtocol
}

declare class UITextSelectionRect extends NSObject {

	static alloc(): UITextSelectionRect; // inherited from NSObject

	static new(): UITextSelectionRect; // inherited from NSObject

	/* readonly */ containsEnd: boolean;

	/* readonly */ containsStart: boolean;

	/* readonly */ isVertical: boolean;

	/* readonly */ rect: CGRect;

	/* readonly */ writingDirection: UITextWritingDirection;

	constructor(); // inherited from NSObject

	self(): UITextSelectionRect; // inherited from NSObjectProtocol
}

declare const enum UITextSpellCheckingType {

	Default = 0,

	No = 1,

	Yes = 2
}

declare const enum UITextStorageDirection {

	Forward = 0,

	Backward = 1
}

declare class UITextView extends UIScrollView implements UITextInput {

	allowsEditingTextAttributes: boolean;

	attributedText: NSAttributedString;

	clearsOnInsertion: boolean;

	dataDetectorTypes: UIDataDetectorTypes;

	delegate: any; /*UITextViewDelegate */

	editable: boolean;

	font: UIFont;

	inputAccessoryView: UIView;

	inputView: UIView;

	/* readonly */ layoutManager: NSLayoutManager;

	linkTextAttributes: NSDictionary<string, any>;

	selectable: boolean;

	selectedRange: NSRange;

	text: string;

	textAlignment: NSTextAlignment;

	textColor: UIColor;

	/* readonly */ textContainer: NSTextContainer;

	textContainerInset: UIEdgeInsets;

	/* readonly */ textStorage: NSTextStorage;

	typingAttributes: NSDictionary<string, any>;

	autocapitalizationType: UITextAutocapitalizationType; // inherited from UITextInputTraits

	autocorrectionType: UITextAutocorrectionType; // inherited from UITextInputTraits

	/* readonly */ beginningOfDocument: UITextPosition; // inherited from UITextInput

	/* readonly */ debugDescription: string; // inherited from NSObjectProtocol

	/* readonly */ description: string; // inherited from NSObjectProtocol

	enablesReturnKeyAutomatically: boolean; // inherited from UITextInputTraits

	/* readonly */ endOfDocument: UITextPosition; // inherited from UITextInput

	/* readonly */ hash: number; // inherited from NSObjectProtocol

	inputDelegate: UITextInputDelegate; // inherited from UITextInput

	/* readonly */ isProxy: boolean; // inherited from NSObjectProtocol

	keyboardAppearance: UIKeyboardAppearance; // inherited from UITextInputTraits

	keyboardType: UIKeyboardType; // inherited from UITextInputTraits

	/* readonly */ markedTextRange: UITextRange; // inherited from UITextInput

	markedTextStyle: NSDictionary<any, any>; // inherited from UITextInput

	returnKeyType: UIReturnKeyType; // inherited from UITextInputTraits

	secureTextEntry: boolean; // inherited from UITextInputTraits

	selectedTextRange: UITextRange; // inherited from UITextInput

	selectionAffinity: UITextStorageDirection; // inherited from UITextInput

	spellCheckingType: UITextSpellCheckingType; // inherited from UITextInputTraits

	/* readonly */ superclass: typeof NSObject; // inherited from NSObjectProtocol

	/* readonly */ textInputView: UIView; // inherited from UITextInput

	/* readonly */ tokenizer: UITextInputTokenizer; // inherited from UITextInput

	/* readonly */ zone: interop.Pointer; // inherited from NSObjectProtocol

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; textContainer: NSTextContainer; });

	baseWritingDirectionForPositionInDirection(position: UITextPosition, direction: UITextStorageDirection): UITextWritingDirection; // inherited from UITextInput

	beginFloatingCursorAtPoint(point: CGPoint): void; // inherited from UITextInput

	caretRectForPosition(position: UITextPosition): CGRect; // inherited from UITextInput

	characterOffsetOfPositionWithinRange(position: UITextPosition, range: UITextRange): number; // inherited from UITextInput

	characterRangeAtPoint(point: CGPoint): UITextRange; // inherited from UITextInput

	characterRangeByExtendingPositionInDirection(position: UITextPosition, direction: UITextLayoutDirection): UITextRange; // inherited from UITextInput

	class(): typeof NSObject; // inherited from NSObjectProtocol

	closestPositionToPoint(point: CGPoint): UITextPosition; // inherited from UITextInput

	closestPositionToPointWithinRange(point: CGPoint, range: UITextRange): UITextPosition; // inherited from UITextInput

	comparePositionToPosition(position: UITextPosition, other: UITextPosition): NSComparisonResult; // inherited from UITextInput

	conformsToProtocol(aProtocol: any /* Protocol */): boolean; // inherited from NSObjectProtocol

	deleteBackward(): void; // inherited from UIKeyInput

	dictationRecognitionFailed(): void; // inherited from UITextInput

	dictationRecordingDidEnd(): void; // inherited from UITextInput

	endFloatingCursor(): void; // inherited from UITextInput

	firstRectForRange(range: UITextRange): CGRect; // inherited from UITextInput

	frameForDictationResultPlaceholder(placeholder: any): CGRect; // inherited from UITextInput

	hasText(): boolean; // inherited from UIKeyInput

	insertDictationResult(dictationResult: NSArray<UIDictationPhrase>): void; // inherited from UITextInput

	insertDictationResultPlaceholder(): any; // inherited from UITextInput

	insertText(text: string): void; // inherited from UIKeyInput

	isEqual(object: any): boolean; // inherited from NSObjectProtocol

	isKindOfClass(aClass: typeof NSObject): boolean; // inherited from NSObjectProtocol

	isMemberOfClass(aClass: typeof NSObject): boolean; // inherited from NSObjectProtocol

	offsetFromPositionToPosition(from: UITextPosition, toPosition: UITextPosition): number; // inherited from UITextInput

	performSelector(aSelector: string): any; // inherited from NSObjectProtocol

	performSelectorWithObject(aSelector: string, object: any): any; // inherited from NSObjectProtocol

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any; // inherited from NSObjectProtocol

	positionFromPositionInDirectionOffset(position: UITextPosition, direction: UITextLayoutDirection, offset: number): UITextPosition; // inherited from UITextInput

	positionFromPositionOffset(position: UITextPosition, offset: number): UITextPosition; // inherited from UITextInput

	positionWithinRangeAtCharacterOffset(range: UITextRange, offset: number): UITextPosition; // inherited from UITextInput

	positionWithinRangeFarthestInDirection(range: UITextRange, direction: UITextLayoutDirection): UITextPosition; // inherited from UITextInput

	removeDictationResultPlaceholderWillInsertResult(placeholder: any, willInsertResult: boolean): void; // inherited from UITextInput

	replaceRangeWithText(range: UITextRange, text: string): void; // inherited from UITextInput

	respondsToSelector(aSelector: string): boolean; // inherited from NSObjectProtocol

	retainCount(): number; // inherited from NSObjectProtocol

	scrollRangeToVisible(range: NSRange): void;

	selectionRectsForRange(range: UITextRange): NSArray<any>; // inherited from UITextInput

	self(): UITextView; // inherited from NSObjectProtocol

	setBaseWritingDirectionForRange(writingDirection: UITextWritingDirection, range: UITextRange): void; // inherited from UITextInput

	setMarkedTextSelectedRange(markedText: string, selectedRange: NSRange): void; // inherited from UITextInput

	shouldChangeTextInRangeReplacementText(range: UITextRange, text: string): boolean; // inherited from UITextInput

	textInRange(range: UITextRange): string; // inherited from UITextInput

	textRangeFromPositionToPosition(fromPosition: UITextPosition, toPosition: UITextPosition): UITextRange; // inherited from UITextInput

	textStylingAtPositionInDirection(position: UITextPosition, direction: UITextStorageDirection): NSDictionary<string, any>; // inherited from UITextInput

	unmarkText(): void; // inherited from UITextInput

	updateFloatingCursorAtPoint(point: CGPoint): void; // inherited from UITextInput
}

interface UITextViewDelegate extends NSObjectProtocol, UIScrollViewDelegate {

	textViewDidBeginEditing?(textView: UITextView): void;

	textViewDidChange?(textView: UITextView): void;

	textViewDidChangeSelection?(textView: UITextView): void;

	textViewDidEndEditing?(textView: UITextView): void;

	textViewShouldBeginEditing?(textView: UITextView): boolean;

	textViewShouldChangeTextInRangeReplacementText?(textView: UITextView, range: NSRange, text: string): boolean;

	textViewShouldEndEditing?(textView: UITextView): boolean;

	textViewShouldInteractWithTextAttachmentInRange?(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

	textViewShouldInteractWithURLInRange?(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;
}
declare var UITextViewDelegate: {

	prototype: UITextViewDelegate;
};

declare var UITextViewTextDidBeginEditingNotification: string;

declare var UITextViewTextDidChangeNotification: string;

declare var UITextViewTextDidEndEditingNotification: string;

declare const enum UITextWritingDirection {

	Natural = -1,

	LeftToRight = 0,

	RightToLeft = 1
}

declare class UIToolbar extends UIView implements UIBarPositioning {

	static appearance(): UIToolbar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIToolbar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIToolbar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIToolbar; // inherited from UIAppearance

	barStyle: UIBarStyle;

	barTintColor: UIColor;

	delegate: UIToolbarDelegate;

	items: NSArray<UIBarButtonItem>;

	translucent: boolean;

	/* readonly */ barPosition: UIBarPosition; // inherited from UIBarPositioning

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	backgroundImageForToolbarPositionBarMetrics(topOrBottom: UIBarPosition, barMetrics: UIBarMetrics): UIImage;

	self(): UIToolbar; // inherited from NSObjectProtocol

	setBackgroundImageForToolbarPositionBarMetrics(backgroundImage: UIImage, topOrBottom: UIBarPosition, barMetrics: UIBarMetrics): void;

	setItemsAnimated(items: NSArray<UIBarButtonItem>, animated: boolean): void;

	setShadowImageForToolbarPosition(shadowImage: UIImage, topOrBottom: UIBarPosition): void;

	shadowImageForToolbarPosition(topOrBottom: UIBarPosition): UIImage;
}

interface UIToolbarDelegate extends UIBarPositioningDelegate {
}
declare var UIToolbarDelegate: {

	prototype: UIToolbarDelegate;
};

declare class UITouch extends NSObject {

	static alloc(): UITouch; // inherited from NSObject

	static new(): UITouch; // inherited from NSObject

	/* readonly */ altitudeAngle: number;

	/* readonly */ estimatedProperties: UITouchProperties;

	/* readonly */ estimatedPropertiesExpectingUpdates: UITouchProperties;

	/* readonly */ estimationUpdateIndex: number;

	/* readonly */ force: number;

	/* readonly */ gestureRecognizers: NSArray<UIGestureRecognizer>;

	/* readonly */ majorRadius: number;

	/* readonly */ majorRadiusTolerance: number;

	/* readonly */ maximumPossibleForce: number;

	/* readonly */ phase: UITouchPhase;

	/* readonly */ tapCount: number;

	/* readonly */ timestamp: number;

	/* readonly */ type: UITouchType;

	/* readonly */ view: UIView;

	/* readonly */ window: UIWindow;

	constructor(); // inherited from NSObject

	azimuthAngleInView(view: UIView): number;

	azimuthUnitVectorInView(view: UIView): CGVector;

	locationInNode(node: SKNode): CGPoint;

	locationInView(view: UIView): CGPoint;

	preciseLocationInView(view: UIView): CGPoint;

	precisePreviousLocationInView(view: UIView): CGPoint;

	previousLocationInNode(node: SKNode): CGPoint;

	previousLocationInView(view: UIView): CGPoint;

	self(): UITouch; // inherited from NSObjectProtocol
}

declare const enum UITouchPhase {

	Began = 0,

	Moved = 1,

	Stationary = 2,

	Ended = 3,

	Cancelled = 4
}

declare const enum UITouchProperties {

	PropertyForce = 1,

	PropertyAzimuth = 2,

	PropertyAltitude = 4,

	PropertyLocation = 8
}

declare const enum UITouchType {

	Direct = 0,

	Indirect = 1,

	Stylus = 2
}

declare var UITrackingRunLoopMode: string;

declare class UITraitCollection extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): UITraitCollection; // inherited from NSObject

	static new(): UITraitCollection; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static traitCollectionWithDisplayScale(scale: number): UITraitCollection;

	static traitCollectionWithForceTouchCapability(capability: UIForceTouchCapability): UITraitCollection;

	static traitCollectionWithHorizontalSizeClass(horizontalSizeClass: UIUserInterfaceSizeClass): UITraitCollection;

	static traitCollectionWithTraitsFromCollections(traitCollections: NSArray<UITraitCollection>): UITraitCollection;

	static traitCollectionWithUserInterfaceIdiom(idiom: UIUserInterfaceIdiom): UITraitCollection;

	static traitCollectionWithVerticalSizeClass(verticalSizeClass: UIUserInterfaceSizeClass): UITraitCollection;

	/* readonly */ displayScale: number;

	/* readonly */ forceTouchCapability: UIForceTouchCapability;

	/* readonly */ horizontalSizeClass: UIUserInterfaceSizeClass;

	/* readonly */ userInterfaceIdiom: UIUserInterfaceIdiom;

	/* readonly */ verticalSizeClass: UIUserInterfaceSizeClass;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	containsTraitsInCollection(trait: UITraitCollection): boolean;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): UITraitCollection; // inherited from NSObjectProtocol
}

interface UITraitEnvironment extends NSObjectProtocol {

	traitCollection: UITraitCollection;

	traitCollectionDidChange(previousTraitCollection: UITraitCollection): void;
}
declare var UITraitEnvironment: {

	prototype: UITraitEnvironment;
};

declare var UITransitionContextFromViewControllerKey: string;

declare var UITransitionContextFromViewKey: string;

declare var UITransitionContextToViewControllerKey: string;

declare var UITransitionContextToViewKey: string;

declare const enum UIUserInterfaceIdiom {

	Unspecified = -1,

	Phone = 0,

	Pad = 1,

	TV = 2,

	CarPlay = 3
}

declare const enum UIUserInterfaceLayoutDirection {

	LeftToRight = 0,

	RightToLeft = 1
}

declare const enum UIUserInterfaceSizeClass {

	Unspecified = 0,

	Compact = 1,

	Regular = 2
}

declare class UIUserNotificationAction extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	static alloc(): UIUserNotificationAction; // inherited from NSObject

	static new(): UIUserNotificationAction; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ activationMode: UIUserNotificationActivationMode;

	/* readonly */ authenticationRequired: boolean;

	/* readonly */ behavior: UIUserNotificationActionBehavior;

	/* readonly */ destructive: boolean;

	/* readonly */ identifier: string;

	/* readonly */ parameters: NSDictionary<any, any>;

	/* readonly */ title: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	mutableCopyWithZone(zone: interop.Pointer): any; // inherited from NSMutableCopying

	self(): UIUserNotificationAction; // inherited from NSObjectProtocol
}

declare const enum UIUserNotificationActionBehavior {

	Default = 0,

	TextInput = 1
}

declare const enum UIUserNotificationActionContext {

	Default = 0,

	Minimal = 1
}

declare var UIUserNotificationActionResponseTypedTextKey: string;

declare const enum UIUserNotificationActivationMode {

	Foreground = 0,

	Background = 1
}

declare class UIUserNotificationCategory extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	static alloc(): UIUserNotificationCategory; // inherited from NSObject

	static new(): UIUserNotificationCategory; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ identifier: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	actionsForContext(context: UIUserNotificationActionContext): NSArray<UIUserNotificationAction>;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	mutableCopyWithZone(zone: interop.Pointer): any; // inherited from NSMutableCopying

	self(): UIUserNotificationCategory; // inherited from NSObjectProtocol
}

declare class UIUserNotificationSettings extends NSObject {

	static alloc(): UIUserNotificationSettings; // inherited from NSObject

	static new(): UIUserNotificationSettings; // inherited from NSObject

	static settingsForTypesCategories(types: UIUserNotificationType, categories: NSSet<UIUserNotificationCategory>): UIUserNotificationSettings;

	/* readonly */ categories: NSSet<UIUserNotificationCategory>;

	/* readonly */ types: UIUserNotificationType;

	constructor(); // inherited from NSObject

	self(): UIUserNotificationSettings; // inherited from NSObjectProtocol
}

declare var UIUserNotificationTextInputActionButtonTitleKey: string;

declare const enum UIUserNotificationType {

	None = 0,

	Badge = 1,

	Sound = 2,

	Alert = 4
}

declare class UIVibrancyEffect extends UIVisualEffect {

	static effectForBlurEffect(blurEffect: UIBlurEffect): UIVibrancyEffect;

	static notificationCenterVibrancyEffect(): UIVibrancyEffect;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare function UIVideoAtPathIsCompatibleWithSavedPhotosAlbum(videoPath: string): boolean;

declare class UIVideoEditorController extends UINavigationController {

	static canEditVideoAtPath(videoPath: string): boolean;

	delegate: any; /*any */

	videoMaximumDuration: number;

	videoPath: string;

	videoQuality: UIImagePickerControllerQualityType;

	constructor(o: { navigationBarClass: typeof NSObject; toolbarClass: typeof NSObject; }); // inherited from UINavigationController

	constructor(o: { rootViewController: UIViewController; }); // inherited from UINavigationController
}

interface UIVideoEditorControllerDelegate extends NSObjectProtocol {

	videoEditorControllerDidCancel?(editor: UIVideoEditorController): void;

	videoEditorControllerDidFailWithError?(editor: UIVideoEditorController, error: NSError): void;

	videoEditorControllerDidSaveEditedVideoToPath?(editor: UIVideoEditorController, editedVideoPath: string): void;
}
declare var UIVideoEditorControllerDelegate: {

	prototype: UIVideoEditorControllerDelegate;
};

declare class UIView extends UIResponder implements NSCoding, UIAccessibilityIdentification, UIAppearance, UIAppearanceContainer, UICoordinateSpace, UIDynamicItem, UIFocusEnvironment, UITraitEnvironment {

	static addKeyframeWithRelativeStartTimeRelativeDurationAnimations(frameStartTime: number, frameDuration: number, animations: () => void): void;

	static animateKeyframesWithDurationDelayOptionsAnimationsCompletion(duration: number, delay: number, options: UIViewKeyframeAnimationOptions, animations: () => void, completion: (p1: boolean) => void): void;

	static animateWithDurationAnimations(duration: number, animations: () => void): void;

	static animateWithDurationAnimationsCompletion(duration: number, animations: () => void, completion: (p1: boolean) => void): void;

	static animateWithDurationDelayOptionsAnimationsCompletion(duration: number, delay: number, options: UIViewAnimationOptions, animations: () => void, completion: (p1: boolean) => void): void;

	static animateWithDurationDelayUsingSpringWithDampingInitialSpringVelocityOptionsAnimationsCompletion(duration: number, delay: number, dampingRatio: number, velocity: number, options: UIViewAnimationOptions, animations: () => void, completion: (p1: boolean) => void): void;

	static appearance(): UIView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIView; // inherited from UIAppearance

	static areAnimationsEnabled(): boolean;

	static beginAnimationsContext(animationID: string, context: interop.Pointer): void;

	static commitAnimations(): void;

	static inheritedAnimationDuration(): number;

	static layerClass(): typeof NSObject;

	static performSystemAnimationOnViewsOptionsAnimationsCompletion(animation: UISystemAnimation, views: NSArray<UIView>, options: UIViewAnimationOptions, parallelAnimations: () => void, completion: (p1: boolean) => void): void;

	static performWithoutAnimation(actionsWithoutAnimation: () => void): void;

	static requiresConstraintBasedLayout(): boolean;

	static setAnimationBeginsFromCurrentState(fromCurrentState: boolean): void;

	static setAnimationCurve(curve: UIViewAnimationCurve): void;

	static setAnimationDelay(delay: number): void;

	static setAnimationDelegate(delegate: any): void;

	static setAnimationDidStopSelector(selector: string): void;

	static setAnimationDuration(duration: number): void;

	static setAnimationRepeatAutoreverses(repeatAutoreverses: boolean): void;

	static setAnimationRepeatCount(repeatCount: number): void;

	static setAnimationStartDate(startDate: Date): void;

	static setAnimationTransitionForViewCache(transition: UIViewAnimationTransition, view: UIView, cache: boolean): void;

	static setAnimationWillStartSelector(selector: string): void;

	static setAnimationsEnabled(enabled: boolean): void;

	static transitionFromViewToViewDurationOptionsCompletion(fromView: UIView, toView: UIView, duration: number, options: UIViewAnimationOptions, completion: (p1: boolean) => void): void;

	static transitionWithViewDurationOptionsAnimationsCompletion(view: UIView, duration: number, options: UIViewAnimationOptions, animations: () => void, completion: (p1: boolean) => void): void;

	static userInterfaceLayoutDirectionForSemanticContentAttribute(attribute: UISemanticContentAttribute): UIUserInterfaceLayoutDirection;

	alpha: number;

	autoresizesSubviews: boolean;

	autoresizingMask: UIViewAutoresizing;

	backgroundColor: UIColor;

	/* readonly */ bottomAnchor: NSLayoutYAxisAnchor;

	bounds: CGRect;

	/* readonly */ centerXAnchor: NSLayoutXAxisAnchor;

	/* readonly */ centerYAnchor: NSLayoutYAxisAnchor;

	clearsContextBeforeDrawing: boolean;

	clipsToBounds: boolean;

	/* readonly */ constraints: NSArray<NSLayoutConstraint>;

	contentMode: UIViewContentMode;

	contentScaleFactor: number;

	contentStretch: CGRect;

	exclusiveTouch: boolean;

	/* readonly */ firstBaselineAnchor: NSLayoutYAxisAnchor;

	/* readonly */ focused: boolean;

	frame: CGRect;

	gestureRecognizers: NSArray<UIGestureRecognizer>;

	/* readonly */ heightAnchor: NSLayoutDimension;

	hidden: boolean;

	/* readonly */ lastBaselineAnchor: NSLayoutYAxisAnchor;

	/* readonly */ layer: CALayer;

	/* readonly */ layoutGuides: NSArray<UILayoutGuide>;

	layoutMargins: UIEdgeInsets;

	/* readonly */ layoutMarginsGuide: UILayoutGuide;

	/* readonly */ leadingAnchor: NSLayoutXAxisAnchor;

	/* readonly */ leftAnchor: NSLayoutXAxisAnchor;

	maskView: UIView;

	motionEffects: NSArray<UIMotionEffect>;

	multipleTouchEnabled: boolean;

	opaque: boolean;

	preservesSuperviewLayoutMargins: boolean;

	/* readonly */ readableContentGuide: UILayoutGuide;

	restorationIdentifier: string;

	/* readonly */ rightAnchor: NSLayoutXAxisAnchor;

	semanticContentAttribute: UISemanticContentAttribute;

	/* readonly */ subviews: NSArray<UIView>;

	/* readonly */ superview: UIView;

	tag: number;

	tintAdjustmentMode: UIViewTintAdjustmentMode;

	tintColor: UIColor;

	/* readonly */ topAnchor: NSLayoutYAxisAnchor;

	/* readonly */ trailingAnchor: NSLayoutXAxisAnchor;

	translatesAutoresizingMaskIntoConstraints: boolean;

	userInteractionEnabled: boolean;

	/* readonly */ viewForFirstBaselineLayout: UIView;

	/* readonly */ viewForLastBaselineLayout: UIView;

	/* readonly */ widthAnchor: NSLayoutDimension;

	/* readonly */ window: UIWindow;

	accessibilityIdentifier: string; // inherited from UIAccessibilityIdentification

	center: CGPoint; // inherited from UIDynamicItem

	/* readonly */ collisionBoundingPath: UIBezierPath; // inherited from UIDynamicItem

	/* readonly */ collisionBoundsType: UIDynamicItemCollisionBoundsType; // inherited from UIDynamicItem

	/* readonly */ debugDescription: string; // inherited from NSObjectProtocol

	/* readonly */ description: string; // inherited from NSObjectProtocol

	/* readonly */ hash: number; // inherited from NSObjectProtocol

	/* readonly */ isProxy: boolean; // inherited from NSObjectProtocol

	/* readonly */ preferredFocusedView: UIView; // inherited from UIFocusEnvironment

	/* readonly */ superclass: typeof NSObject; // inherited from NSObjectProtocol

	/* readonly */ traitCollection: UITraitCollection; // inherited from UITraitEnvironment

	transform: CGAffineTransform; // inherited from UIDynamicItem

	/* readonly */ zone: interop.Pointer; // inherited from NSObjectProtocol

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; });

	addConstraint(constraint: NSLayoutConstraint): void;

	addConstraints(constraints: NSArray<NSLayoutConstraint>): void;

	addGestureRecognizer(gestureRecognizer: UIGestureRecognizer): void;

	addLayoutGuide(layoutGuide: UILayoutGuide): void;

	addMotionEffect(effect: UIMotionEffect): void;

	addSubview(view: UIView): void;

	alignmentRectForFrame(frame: CGRect): CGRect;

	alignmentRectInsets(): UIEdgeInsets;

	bringSubviewToFront(view: UIView): void;

	canBecomeFocused(): boolean;

	class(): typeof NSObject; // inherited from NSObjectProtocol

	conformsToProtocol(aProtocol: any /* Protocol */): boolean; // inherited from NSObjectProtocol

	constraintsAffectingLayoutForAxis(axis: UILayoutConstraintAxis): NSArray<NSLayoutConstraint>;

	contentCompressionResistancePriorityForAxis(axis: UILayoutConstraintAxis): number;

	contentHuggingPriorityForAxis(axis: UILayoutConstraintAxis): number;

	convertPointFromCoordinateSpace(point: CGPoint, coordinateSpace: UICoordinateSpace): CGPoint; // inherited from UICoordinateSpace

	convertPointFromView(point: CGPoint, view: UIView): CGPoint;

	convertPointToCoordinateSpace(point: CGPoint, coordinateSpace: UICoordinateSpace): CGPoint; // inherited from UICoordinateSpace

	convertPointToView(point: CGPoint, view: UIView): CGPoint;

	convertRectFromCoordinateSpace(rect: CGRect, coordinateSpace: UICoordinateSpace): CGRect; // inherited from UICoordinateSpace

	convertRectFromView(rect: CGRect, view: UIView): CGRect;

	convertRectToCoordinateSpace(rect: CGRect, coordinateSpace: UICoordinateSpace): CGRect; // inherited from UICoordinateSpace

	convertRectToView(rect: CGRect, view: UIView): CGRect;

	decodeRestorableStateWithCoder(coder: NSCoder): void;

	didAddSubview(subview: UIView): void;

	didMoveToSuperview(): void;

	didMoveToWindow(): void;

	didUpdateFocusInContextWithAnimationCoordinator(context: UIFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void; // inherited from UIFocusEnvironment

	drawRect(rect: CGRect): void;

	drawRectForViewPrintFormatter(rect: CGRect, formatter: UIViewPrintFormatter): void;

	drawViewHierarchyInRectAfterScreenUpdates(rect: CGRect, afterUpdates: boolean): boolean;

	encodeRestorableStateWithCoder(coder: NSCoder): void;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	endEditing(force: boolean): boolean;

	exchangeSubviewAtIndexWithSubviewAtIndex(index1: number, index2: number): void;

	exerciseAmbiguityInLayout(): void;

	frameForAlignmentRect(alignmentRect: CGRect): CGRect;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	hasAmbiguousLayout(): boolean;

	hitTestWithEvent(point: CGPoint, event: UIEvent): UIView;

	insertSubviewAboveSubview(view: UIView, siblingSubview: UIView): void;

	insertSubviewAtIndex(view: UIView, index: number): void;

	insertSubviewBelowSubview(view: UIView, siblingSubview: UIView): void;

	intrinsicContentSize(): CGSize;

	invalidateIntrinsicContentSize(): void;

	isDescendantOfView(view: UIView): boolean;

	isEqual(object: any): boolean; // inherited from NSObjectProtocol

	isKindOfClass(aClass: typeof NSObject): boolean; // inherited from NSObjectProtocol

	isMemberOfClass(aClass: typeof NSObject): boolean; // inherited from NSObjectProtocol

	layoutIfNeeded(): void;

	layoutMarginsDidChange(): void;

	layoutSubviews(): void;

	needsUpdateConstraints(): boolean;

	performSelector(aSelector: string): any; // inherited from NSObjectProtocol

	performSelectorWithObject(aSelector: string, object: any): any; // inherited from NSObjectProtocol

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any; // inherited from NSObjectProtocol

	pointInsideWithEvent(point: CGPoint, event: UIEvent): boolean;

	removeConstraint(constraint: NSLayoutConstraint): void;

	removeConstraints(constraints: NSArray<NSLayoutConstraint>): void;

	removeFromSuperview(): void;

	removeGestureRecognizer(gestureRecognizer: UIGestureRecognizer): void;

	removeLayoutGuide(layoutGuide: UILayoutGuide): void;

	removeMotionEffect(effect: UIMotionEffect): void;

	resizableSnapshotViewFromRectAfterScreenUpdatesWithCapInsets(rect: CGRect, afterUpdates: boolean, capInsets: UIEdgeInsets): UIView;

	respondsToSelector(aSelector: string): boolean; // inherited from NSObjectProtocol

	retainCount(): number; // inherited from NSObjectProtocol

	self(): UIView; // inherited from NSObjectProtocol

	sendSubviewToBack(view: UIView): void;

	setContentCompressionResistancePriorityForAxis(priority: number, axis: UILayoutConstraintAxis): void;

	setContentHuggingPriorityForAxis(priority: number, axis: UILayoutConstraintAxis): void;

	setNeedsDisplay(): void;

	setNeedsDisplayInRect(rect: CGRect): void;

	setNeedsFocusUpdate(): void; // inherited from UIFocusEnvironment

	setNeedsLayout(): void;

	setNeedsUpdateConstraints(): void;

	shouldUpdateFocusInContext(context: UIFocusUpdateContext): boolean; // inherited from UIFocusEnvironment

	sizeThatFits(size: CGSize): CGSize;

	sizeToFit(): void;

	snapshotViewAfterScreenUpdates(afterUpdates: boolean): UIView;

	systemLayoutSizeFittingSize(targetSize: CGSize): CGSize;

	systemLayoutSizeFittingSizeWithHorizontalFittingPriorityVerticalFittingPriority(targetSize: CGSize, horizontalFittingPriority: number, verticalFittingPriority: number): CGSize;

	tintColorDidChange(): void;

	traitCollectionDidChange(previousTraitCollection: UITraitCollection): void; // inherited from UITraitEnvironment

	updateConstraints(): void;

	updateConstraintsIfNeeded(): void;

	updateFocusIfNeeded(): void; // inherited from UIFocusEnvironment

	viewForBaselineLayout(): UIView;

	viewPrintFormatter(): UIViewPrintFormatter;

	viewWithTag(tag: number): UIView;

	willMoveToSuperview(newSuperview: UIView): void;

	willMoveToWindow(newWindow: UIWindow): void;

	willRemoveSubview(subview: UIView): void;
}

declare const enum UIViewAnimationCurve {

	EaseInOut = 0,

	EaseIn = 1,

	EaseOut = 2,

	Linear = 3
}

declare const enum UIViewAnimationOptions {

	LayoutSubviews = 1,

	AllowUserInteraction = 2,

	BeginFromCurrentState = 4,

	Repeat = 8,

	Autoreverse = 16,

	OverrideInheritedDuration = 32,

	OverrideInheritedCurve = 64,

	AllowAnimatedContent = 128,

	ShowHideTransitionViews = 256,

	OverrideInheritedOptions = 512,

	CurveEaseInOut = 0,

	CurveEaseIn = 65536,

	CurveEaseOut = 131072,

	CurveLinear = 196608,

	TransitionNone = 0,

	TransitionFlipFromLeft = 1048576,

	TransitionFlipFromRight = 2097152,

	TransitionCurlUp = 3145728,

	TransitionCurlDown = 4194304,

	TransitionCrossDissolve = 5242880,

	TransitionFlipFromTop = 6291456,

	TransitionFlipFromBottom = 7340032
}

declare const enum UIViewAnimationTransition {

	None = 0,

	FlipFromLeft = 1,

	FlipFromRight = 2,

	CurlUp = 3,

	CurlDown = 4
}

declare const enum UIViewAutoresizing {

	None = 0,

	FlexibleLeftMargin = 1,

	FlexibleWidth = 2,

	FlexibleRightMargin = 4,

	FlexibleTopMargin = 8,

	FlexibleHeight = 16,

	FlexibleBottomMargin = 32
}

declare const enum UIViewContentMode {

	ScaleToFill = 0,

	ScaleAspectFit = 1,

	ScaleAspectFill = 2,

	Redraw = 3,

	Center = 4,

	Top = 5,

	Bottom = 6,

	Left = 7,

	Right = 8,

	TopLeft = 9,

	TopRight = 10,

	BottomLeft = 11,

	BottomRight = 12
}

declare class UIViewController extends UIResponder implements NSCoding, NSExtensionRequestHandling, UIAppearanceContainer, UIContentContainer, UIFocusEnvironment, UIStateRestoring, UITraitEnvironment {

	static attemptRotationToDeviceOrientation(): void;

	static prepareInterstitialAds(): void;

	automaticallyAdjustsScrollViewInsets: boolean;

	/* readonly */ bottomLayoutGuide: UILayoutSupport;

	canDisplayBannerAds: boolean;

	/* readonly */ childViewControllers: NSArray<UIViewController>;

	contentSizeForViewInPopover: CGSize;

	definesPresentationContext: boolean;

	/* readonly */ displayingBannerAd: boolean;

	edgesForExtendedLayout: UIRectEdge;

	editing: boolean;

	extendedLayoutIncludesOpaqueBars: boolean;

	/* readonly */ extensionContext: NSExtensionContext;

	hidesBottomBarWhenPushed: boolean;

	/* readonly */ interfaceOrientation: UIInterfaceOrientation;

	interstitialPresentationPolicy: ADInterstitialPresentationPolicy;

	modalInPopover: boolean;

	modalPresentationCapturesStatusBarAppearance: boolean;

	modalPresentationStyle: UIModalPresentationStyle;

	modalTransitionStyle: UIModalTransitionStyle;

	/* readonly */ modalViewController: UIViewController;

	/* readonly */ navigationController: UINavigationController;

	/* readonly */ navigationItem: UINavigationItem;

	/* readonly */ nibBundle: NSBundle;

	/* readonly */ nibName: string;

	/* readonly */ originalContentView: UIView;

	/* readonly */ parentViewController: UIViewController;

	/* readonly */ popoverPresentationController: UIPopoverPresentationController;

	preferredContentSize: CGSize;

	/* readonly */ presentationController: UIPresentationController;

	/* readonly */ presentedViewController: UIViewController;

	/* readonly */ presentingFullScreenAd: boolean;

	/* readonly */ presentingViewController: UIViewController;

	providesPresentationContextTransitionStyle: boolean;

	restorationClass: typeof NSObject;

	restorationIdentifier: string;

	/* readonly */ searchDisplayController: UISearchDisplayController;

	/* readonly */ shouldPresentInterstitialAd: boolean;

	/* readonly */ splitViewController: UISplitViewController;

	/* readonly */ storyboard: UIStoryboard;

	/* readonly */ tabBarController: UITabBarController;

	tabBarItem: UITabBarItem;

	title: string;

	toolbarItems: NSArray<UIBarButtonItem>;

	/* readonly */ topLayoutGuide: UILayoutSupport;

	transitioningDelegate: UIViewControllerTransitioningDelegate;

	view: UIView;

	/* readonly */ viewIfLoaded: UIView;

	wantsFullScreenLayout: boolean;

	/* readonly */ debugDescription: string; // inherited from NSObjectProtocol

	/* readonly */ description: string; // inherited from NSObjectProtocol

	/* readonly */ hash: number; // inherited from NSObjectProtocol

	/* readonly */ isProxy: boolean; // inherited from NSObjectProtocol

	/* readonly */ objectRestorationClass: typeof NSObject; // inherited from UIStateRestoring

	/* readonly */ preferredFocusedView: UIView; // inherited from UIFocusEnvironment

	/* readonly */ restorationParent: UIStateRestoring; // inherited from UIStateRestoring

	/* readonly */ superclass: typeof NSObject; // inherited from NSObjectProtocol

	/* readonly */ traitCollection: UITraitCollection; // inherited from UITraitEnvironment

	/* readonly */ zone: interop.Pointer; // inherited from NSObjectProtocol

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { nibName: string; bundle: NSBundle; });

	addChildViewController(childController: UIViewController): void;

	addKeyCommand(keyCommand: UIKeyCommand): void;

	allowedChildViewControllersForUnwindingFromSource(source: UIStoryboardUnwindSegueSource): NSArray<UIViewController>;

	applicationFinishedRestoringState(): void; // inherited from UIStateRestoring

	automaticallyForwardAppearanceAndRotationMethodsToChildViewControllers(): boolean;

	beginAppearanceTransitionAnimated(isAppearing: boolean, animated: boolean): void;

	beginRequestWithExtensionContext(context: NSExtensionContext): void; // inherited from NSExtensionRequestHandling

	canPerformUnwindSegueActionFromViewControllerWithSender(action: string, fromViewController: UIViewController, sender: any): boolean;

	childViewControllerContainingSegueSource(source: UIStoryboardUnwindSegueSource): UIViewController;

	childViewControllerForStatusBarHidden(): UIViewController;

	childViewControllerForStatusBarStyle(): UIViewController;

	class(): typeof NSObject; // inherited from NSObjectProtocol

	collapseSecondaryViewControllerForSplitViewController(secondaryViewController: UIViewController, splitViewController: UISplitViewController): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean; // inherited from NSObjectProtocol

	decodeRestorableStateWithCoder(coder: NSCoder): void; // inherited from UIStateRestoring

	didAnimateFirstHalfOfRotationToInterfaceOrientation(toInterfaceOrientation: UIInterfaceOrientation): void;

	didMoveToParentViewController(parent: UIViewController): void;

	didReceiveMemoryWarning(): void;

	didRotateFromInterfaceOrientation(fromInterfaceOrientation: UIInterfaceOrientation): void;

	didUpdateFocusInContextWithAnimationCoordinator(context: UIFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void; // inherited from UIFocusEnvironment

	disablesAutomaticKeyboardDismissal(): boolean;

	dismissModalViewControllerAnimated(animated: boolean): void;

	dismissMoviePlayerViewControllerAnimated(): void;

	dismissViewControllerAnimatedCompletion(flag: boolean, completion: () => void): void;

	editButtonItem(): UIBarButtonItem;

	encodeRestorableStateWithCoder(coder: NSCoder): void; // inherited from UIStateRestoring

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	endAppearanceTransition(): void;

	isBeingDismissed(): boolean;

	isBeingPresented(): boolean;

	isEqual(object: any): boolean; // inherited from NSObjectProtocol

	isKindOfClass(aClass: typeof NSObject): boolean; // inherited from NSObjectProtocol

	isMemberOfClass(aClass: typeof NSObject): boolean; // inherited from NSObjectProtocol

	isMovingFromParentViewController(): boolean;

	isMovingToParentViewController(): boolean;

	isViewLoaded(): boolean;

	loadView(): void;

	loadViewIfNeeded(): void;

	overrideTraitCollectionForChildViewController(childViewController: UIViewController): UITraitCollection;

	performSegueWithIdentifierSender(identifier: string, sender: any): void;

	performSelector(aSelector: string): any; // inherited from NSObjectProtocol

	performSelectorWithObject(aSelector: string, object: any): any; // inherited from NSObjectProtocol

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any; // inherited from NSObjectProtocol

	preferredContentSizeDidChangeForChildContentContainer(container: UIContentContainer): void; // inherited from UIContentContainer

	preferredInterfaceOrientationForPresentation(): UIInterfaceOrientation;

	preferredStatusBarStyle(): UIStatusBarStyle;

	preferredStatusBarUpdateAnimation(): UIStatusBarAnimation;

	prefersStatusBarHidden(): boolean;

	prepareForSegueSender(segue: UIStoryboardSegue, sender: any): void;

	presentModalViewControllerAnimated(modalViewController: UIViewController, animated: boolean): void;

	presentMoviePlayerViewControllerAnimated(moviePlayerViewController: MPMoviePlayerViewController): void;

	presentViewControllerAnimatedCompletion(viewControllerToPresent: UIViewController, flag: boolean, completion: () => void): void;

	previewActionItems(): NSArray<UIPreviewActionItem>;

	registerForPreviewingWithDelegateSourceView(delegate: UIViewControllerPreviewingDelegate, sourceView: UIView): UIViewControllerPreviewing;

	removeFromParentViewController(): void;

	removeKeyCommand(keyCommand: UIKeyCommand): void;

	requestInterstitialAdPresentation(): boolean;

	respondsToSelector(aSelector: string): boolean; // inherited from NSObjectProtocol

	retainCount(): number; // inherited from NSObjectProtocol

	rotatingFooterView(): UIView;

	rotatingHeaderView(): UIView;

	segueForUnwindingToViewControllerFromViewControllerIdentifier(toViewController: UIViewController, fromViewController: UIViewController, identifier: string): UIStoryboardSegue;

	self(): UIViewController; // inherited from NSObjectProtocol

	separateSecondaryViewControllerForSplitViewController(splitViewController: UISplitViewController): UIViewController;

	setEditingAnimated(editing: boolean, animated: boolean): void;

	setNeedsFocusUpdate(): void; // inherited from UIFocusEnvironment

	setNeedsStatusBarAppearanceUpdate(): void;

	setOverrideTraitCollectionForChildViewController(collection: UITraitCollection, childViewController: UIViewController): void;

	setToolbarItemsAnimated(toolbarItems: NSArray<UIBarButtonItem>, animated: boolean): void;

	shouldAutomaticallyForwardAppearanceMethods(): boolean;

	shouldAutomaticallyForwardRotationMethods(): boolean;

	shouldAutorotate(): boolean;

	shouldAutorotateToInterfaceOrientation(toInterfaceOrientation: UIInterfaceOrientation): boolean;

	shouldPerformSegueWithIdentifierSender(identifier: string, sender: any): boolean;

	shouldUpdateFocusInContext(context: UIFocusUpdateContext): boolean; // inherited from UIFocusEnvironment

	showDetailViewControllerSender(vc: UIViewController, sender: any): void;

	showViewControllerSender(vc: UIViewController, sender: any): void;

	sizeForChildContentContainerWithParentContainerSize(container: UIContentContainer, parentSize: CGSize): CGSize; // inherited from UIContentContainer

	supportedInterfaceOrientations(): UIInterfaceOrientationMask;

	systemLayoutFittingSizeDidChangeForChildContentContainer(container: UIContentContainer): void; // inherited from UIContentContainer

	targetViewControllerForActionSender(action: string, sender: any): UIViewController;

	traitCollectionDidChange(previousTraitCollection: UITraitCollection): void; // inherited from UITraitEnvironment

	transitionCoordinator(): UIViewControllerTransitionCoordinator;

	transitionFromViewControllerToViewControllerDurationOptionsAnimationsCompletion(fromViewController: UIViewController, toViewController: UIViewController, duration: number, options: UIViewAnimationOptions, animations: () => void, completion: (p1: boolean) => void): void;

	unregisterForPreviewingWithContext(previewing: UIViewControllerPreviewing): void;

	unwindForSegueTowardsViewController(unwindSegue: UIStoryboardSegue, subsequentVC: UIViewController): void;

	updateFocusIfNeeded(): void; // inherited from UIFocusEnvironment

	updateViewConstraints(): void;

	viewControllerForUnwindSegueActionFromViewControllerWithSender(action: string, fromViewController: UIViewController, sender: any): UIViewController;

	viewDidAppear(animated: boolean): void;

	viewDidDisappear(animated: boolean): void;

	viewDidLayoutSubviews(): void;

	viewDidLoad(): void;

	viewDidUnload(): void;

	viewWillAppear(animated: boolean): void;

	viewWillDisappear(animated: boolean): void;

	viewWillLayoutSubviews(): void;

	viewWillTransitionToSizeWithTransitionCoordinator(size: CGSize, coordinator: UIViewControllerTransitionCoordinator): void; // inherited from UIContentContainer

	viewWillUnload(): void;

	willAnimateFirstHalfOfRotationToInterfaceOrientationDuration(toInterfaceOrientation: UIInterfaceOrientation, duration: number): void;

	willAnimateRotationToInterfaceOrientationDuration(toInterfaceOrientation: UIInterfaceOrientation, duration: number): void;

	willAnimateSecondHalfOfRotationFromInterfaceOrientationDuration(fromInterfaceOrientation: UIInterfaceOrientation, duration: number): void;

	willMoveToParentViewController(parent: UIViewController): void;

	willRotateToInterfaceOrientationDuration(toInterfaceOrientation: UIInterfaceOrientation, duration: number): void;

	willTransitionToTraitCollectionWithTransitionCoordinator(newCollection: UITraitCollection, coordinator: UIViewControllerTransitionCoordinator): void; // inherited from UIContentContainer
}

interface UIViewControllerAnimatedTransitioning extends NSObjectProtocol {

	animateTransition(transitionContext: UIViewControllerContextTransitioning): void;

	animationEnded?(transitionCompleted: boolean): void;

	transitionDuration(transitionContext: UIViewControllerContextTransitioning): number;
}
declare var UIViewControllerAnimatedTransitioning: {

	prototype: UIViewControllerAnimatedTransitioning;
};

interface UIViewControllerContextTransitioning extends NSObjectProtocol {

	cancelInteractiveTransition(): void;

	completeTransition(didComplete: boolean): void;

	containerView(): UIView;

	finalFrameForViewController(vc: UIViewController): CGRect;

	finishInteractiveTransition(): void;

	initialFrameForViewController(vc: UIViewController): CGRect;

	isAnimated(): boolean;

	isInteractive(): boolean;

	presentationStyle(): UIModalPresentationStyle;

	targetTransform(): CGAffineTransform;

	transitionWasCancelled(): boolean;

	updateInteractiveTransition(percentComplete: number): void;

	viewControllerForKey(key: string): UIViewController;

	viewForKey(key: string): UIView;
}
declare var UIViewControllerContextTransitioning: {

	prototype: UIViewControllerContextTransitioning;
};

declare var UIViewControllerHierarchyInconsistencyException: string;

interface UIViewControllerInteractiveTransitioning extends NSObjectProtocol {

	completionCurve: UIViewAnimationCurve;

	completionSpeed: number;

	startInteractiveTransition(transitionContext: UIViewControllerContextTransitioning): void;
}
declare var UIViewControllerInteractiveTransitioning: {

	prototype: UIViewControllerInteractiveTransitioning;
};

interface UIViewControllerPreviewing extends NSObjectProtocol {

	delegate: UIViewControllerPreviewingDelegate;

	previewingGestureRecognizerForFailureRelationship: UIGestureRecognizer;

	sourceRect: CGRect;

	sourceView: UIView;
}
declare var UIViewControllerPreviewing: {

	prototype: UIViewControllerPreviewing;
};

interface UIViewControllerPreviewingDelegate extends NSObjectProtocol {

	previewingContextCommitViewController(previewingContext: UIViewControllerPreviewing, viewControllerToCommit: UIViewController): void;

	previewingContextViewControllerForLocation(previewingContext: UIViewControllerPreviewing, location: CGPoint): UIViewController;
}
declare var UIViewControllerPreviewingDelegate: {

	prototype: UIViewControllerPreviewingDelegate;
};

interface UIViewControllerRestoration {
}
declare var UIViewControllerRestoration: {

	prototype: UIViewControllerRestoration;

	viewControllerWithRestorationIdentifierPathCoder(identifierComponents: NSArray<any>, coder: NSCoder): UIViewController;
};

declare var UIViewControllerShowDetailTargetDidChangeNotification: string;

interface UIViewControllerTransitionCoordinator extends UIViewControllerTransitionCoordinatorContext {

	animateAlongsideTransitionCompletion(animation: (p1: UIViewControllerTransitionCoordinatorContext) => void, completion: (p1: UIViewControllerTransitionCoordinatorContext) => void): boolean;

	animateAlongsideTransitionInViewAnimationCompletion(view: UIView, animation: (p1: UIViewControllerTransitionCoordinatorContext) => void, completion: (p1: UIViewControllerTransitionCoordinatorContext) => void): boolean;

	notifyWhenInteractionEndsUsingBlock(handler: (p1: UIViewControllerTransitionCoordinatorContext) => void): void;
}
declare var UIViewControllerTransitionCoordinator: {

	prototype: UIViewControllerTransitionCoordinator;
};

interface UIViewControllerTransitionCoordinatorContext extends NSObjectProtocol {

	completionCurve(): UIViewAnimationCurve;

	completionVelocity(): number;

	containerView(): UIView;

	initiallyInteractive(): boolean;

	isAnimated(): boolean;

	isCancelled(): boolean;

	isInteractive(): boolean;

	percentComplete(): number;

	presentationStyle(): UIModalPresentationStyle;

	targetTransform(): CGAffineTransform;

	transitionDuration(): number;

	viewControllerForKey(key: string): UIViewController;

	viewForKey(key: string): UIView;
}
declare var UIViewControllerTransitionCoordinatorContext: {

	prototype: UIViewControllerTransitionCoordinatorContext;
};

interface UIViewControllerTransitioningDelegate extends NSObjectProtocol {

	animationControllerForDismissedController?(dismissed: UIViewController): UIViewControllerAnimatedTransitioning;

	animationControllerForPresentedControllerPresentingControllerSourceController?(presented: UIViewController, presenting: UIViewController, source: UIViewController): UIViewControllerAnimatedTransitioning;

	interactionControllerForDismissal?(animator: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	interactionControllerForPresentation?(animator: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	presentationControllerForPresentedViewControllerPresentingViewControllerSourceViewController?(presented: UIViewController, presenting: UIViewController, source: UIViewController): UIPresentationController;
}
declare var UIViewControllerTransitioningDelegate: {

	prototype: UIViewControllerTransitioningDelegate;
};

declare const enum UIViewKeyframeAnimationOptions {

	LayoutSubviews = 1,

	AllowUserInteraction = 2,

	BeginFromCurrentState = 4,

	Repeat = 8,

	Autoreverse = 16,

	OverrideInheritedDuration = 32,

	OverrideInheritedOptions = 512,

	CalculationModeLinear = 0,

	CalculationModeDiscrete = 1024,

	CalculationModePaced = 2048,

	CalculationModeCubic = 3072,

	CalculationModeCubicPaced = 4096
}

declare var UIViewNoIntrinsicMetric: number;

declare class UIViewPrintFormatter extends UIPrintFormatter {

	/* readonly */ view: UIView;
}

declare const enum UIViewTintAdjustmentMode {

	Automatic = 0,

	Normal = 1,

	Dimmed = 2
}

declare class UIVisualEffect extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): UIVisualEffect; // inherited from NSObject

	static new(): UIVisualEffect; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): UIVisualEffect; // inherited from NSObjectProtocol
}

declare class UIVisualEffectView extends UIView implements NSSecureCoding {

	static appearance(): UIVisualEffectView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIVisualEffectView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIVisualEffectView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIVisualEffectView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIVisualEffectView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIVisualEffectView; // inherited from UIAppearance

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ contentView: UIView;

	effect: UIVisualEffect;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { effect: UIVisualEffect; });

	constructor(o: { frame: CGRect; }); // inherited from UIView

	self(): UIVisualEffectView; // inherited from NSObjectProtocol
}

declare const enum UIWebPaginationBreakingMode {

	Page = 0,

	Column = 1
}

declare const enum UIWebPaginationMode {

	Unpaginated = 0,

	LeftToRight = 1,

	TopToBottom = 2,

	BottomToTop = 3,

	RightToLeft = 4
}

declare class UIWebView extends UIView implements NSCoding, UIScrollViewDelegate {

	static appearance(): UIWebView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIWebView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIWebView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIWebView; // inherited from UIAppearance

	allowsInlineMediaPlayback: boolean;

	allowsLinkPreview: boolean;

	allowsPictureInPictureMediaPlayback: boolean;

	/* readonly */ canGoBack: boolean;

	/* readonly */ canGoForward: boolean;

	dataDetectorTypes: UIDataDetectorTypes;

	delegate: UIWebViewDelegate;

	detectsPhoneNumbers: boolean;

	gapBetweenPages: number;

	keyboardDisplayRequiresUserAction: boolean;

	/* readonly */ loading: boolean;

	mediaPlaybackAllowsAirPlay: boolean;

	mediaPlaybackRequiresUserAction: boolean;

	/* readonly */ pageCount: number;

	pageLength: number;

	paginationBreakingMode: UIWebPaginationBreakingMode;

	paginationMode: UIWebPaginationMode;

	/* readonly */ request: NSURLRequest;

	scalesPageToFit: boolean;

	/* readonly */ scrollView: UIScrollView;

	suppressesIncrementalRendering: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	goBack(): void;

	goForward(): void;

	loadDataMIMETypeTextEncodingNameBaseURL(data: NSData, MIMEType: string, textEncodingName: string, baseURL: NSURL): void;

	loadHTMLStringBaseURL(string: string, baseURL: NSURL): void;

	loadRequest(request: NSURLRequest): void;

	reload(): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void; // inherited from UIScrollViewDelegate

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void; // inherited from UIScrollViewDelegate

	scrollViewDidScroll(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewDidScrollToTop(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewDidZoom(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean; // inherited from UIScrollViewDelegate

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewWillBeginDragging(scrollView: UIScrollView): void; // inherited from UIScrollViewDelegate

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void; // inherited from UIScrollViewDelegate

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Reference<CGPoint>): void; // inherited from UIScrollViewDelegate

	self(): UIWebView; // inherited from NSObjectProtocol

	stopLoading(): void;

	stringByEvaluatingJavaScriptFromString(script: string): string;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView; // inherited from UIScrollViewDelegate
}

interface UIWebViewDelegate extends NSObjectProtocol {

	webViewDidFailLoadWithError?(webView: UIWebView, error: NSError): void;

	webViewDidFinishLoad?(webView: UIWebView): void;

	webViewDidStartLoad?(webView: UIWebView): void;

	webViewShouldStartLoadWithRequestNavigationType?(webView: UIWebView, request: NSURLRequest, navigationType: UIWebViewNavigationType): boolean;
}
declare var UIWebViewDelegate: {

	prototype: UIWebViewDelegate;
};

declare const enum UIWebViewNavigationType {

	LinkClicked = 0,

	FormSubmitted = 1,

	BackForward = 2,

	Reload = 3,

	FormResubmitted = 4,

	Other = 5
}

declare class UIWindow extends UIView {

	static appearance(): UIWindow; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UIWindow; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UIWindow; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UIWindow; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UIWindow; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UIWindow; // inherited from UIAppearance

	/* readonly */ keyWindow: boolean;

	rootViewController: UIViewController;

	screen: UIScreen;

	windowLevel: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	becomeKeyWindow(): void;

	convertPointFromWindow(point: CGPoint, window: UIWindow): CGPoint;

	convertPointToWindow(point: CGPoint, window: UIWindow): CGPoint;

	convertRectFromWindow(rect: CGRect, window: UIWindow): CGRect;

	convertRectToWindow(rect: CGRect, window: UIWindow): CGRect;

	makeKeyAndVisible(): void;

	makeKeyWindow(): void;

	resignKeyWindow(): void;

	self(): UIWindow; // inherited from NSObjectProtocol

	sendEvent(event: UIEvent): void;
}

declare var UIWindowDidBecomeHiddenNotification: string;

declare var UIWindowDidBecomeKeyNotification: string;

declare var UIWindowDidBecomeVisibleNotification: string;

declare var UIWindowDidResignKeyNotification: string;

declare var UIWindowLevelAlert: number;

declare var UIWindowLevelNormal: number;

declare var UIWindowLevelStatusBar: number;
