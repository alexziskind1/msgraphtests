
declare var NEAppProxyErrorDomain: string;

declare class NEAppProxyFlow extends NSObject {

	static alloc(): NEAppProxyFlow; // inherited from NSObject

	static new(): NEAppProxyFlow; // inherited from NSObject

	/* readonly */ metaData: NEFlowMetaData;

	constructor(); // inherited from NSObject

	closeReadWithError(error: NSError): void;

	closeWriteWithError(error: NSError): void;

	openWithLocalEndpointCompletionHandler(localEndpoint: NWHostEndpoint, completionHandler: (p1: NSError) => void): void;

	self(): NEAppProxyFlow; // inherited from NSObjectProtocol
}

declare const enum NEAppProxyFlowError {

	NotConnected = 1,

	PeerReset = 2,

	HostUnreachable = 3,

	InvalidArgument = 4,

	Aborted = 5,

	Refused = 6,

	TimedOut = 7,

	Internal = 8,

	DatagramTooLarge = 9,

	ReadAlreadyPending = 10
}

declare class NEAppProxyProvider extends NETunnelProvider {

	cancelProxyWithError(error: NSError): void;

	handleNewFlow(flow: NEAppProxyFlow): boolean;

	startProxyWithOptionsCompletionHandler(options: NSDictionary<string, any>, completionHandler: (p1: NSError) => void): void;

	stopProxyWithReasonCompletionHandler(reason: NEProviderStopReason, completionHandler: () => void): void;
}

declare class NEAppProxyProviderManager extends NETunnelProviderManager {
}

declare class NEAppProxyTCPFlow extends NEAppProxyFlow {

	/* readonly */ remoteEndpoint: NWEndpoint;

	readDataWithCompletionHandler(completionHandler: (p1: NSData, p2: NSError) => void): void;

	writeDataWithCompletionHandler(data: NSData, completionHandler: (p1: NSError) => void): void;
}

declare class NEAppProxyUDPFlow extends NEAppProxyFlow {

	/* readonly */ localEndpoint: NWEndpoint;

	readDatagramsWithCompletionHandler(completionHandler: (p1: NSArray<NSData>, p2: NSArray<NWEndpoint>, p3: NSError) => void): void;

	writeDatagramsSentByEndpointsCompletionHandler(datagrams: NSArray<NSData>, remoteEndpoints: NSArray<NWEndpoint>, completionHandler: (p1: NSError) => void): void;
}

declare class NEAppRule extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NEAppRule; // inherited from NSObject

	static new(): NEAppRule; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	matchDomains: NSArray<any>;

	matchPath: string;

	/* readonly */ matchSigningIdentifier: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { signingIdentifier: string; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NEAppRule; // inherited from NSObjectProtocol
}

declare class NEDNSSettings extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NEDNSSettings; // inherited from NSObject

	static new(): NEDNSSettings; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	domainName: string;

	matchDomains: NSArray<string>;

	matchDomainsNoSearch: boolean;

	searchDomains: NSArray<string>;

	/* readonly */ servers: NSArray<string>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { servers: NSArray<string>; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NEDNSSettings; // inherited from NSObjectProtocol
}

declare class NEEvaluateConnectionRule extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NEEvaluateConnectionRule; // inherited from NSObject

	static new(): NEEvaluateConnectionRule; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ action: NEEvaluateConnectionRuleAction;

	/* readonly */ matchDomains: NSArray<string>;

	probeURL: NSURL;

	useDNSServers: NSArray<string>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { matchDomains: NSArray<string>; andAction: NEEvaluateConnectionRuleAction; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NEEvaluateConnectionRule; // inherited from NSObjectProtocol
}

declare const enum NEEvaluateConnectionRuleAction {

	ConnectIfNeeded = 1,

	NeverConnect = 2
}

declare class NEFilterBrowserFlow extends NEFilterFlow implements NSCopying, NSSecureCoding {

	/* readonly */ parentURL: NSURL;

	/* readonly */ request: NSURLRequest;

	/* readonly */ response: NSURLResponse;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare var NEFilterConfigurationDidChangeNotification: string;

declare class NEFilterControlProvider extends NEFilterProvider {

	URLAppendStringMap: NSDictionary<string, string>;

	remediationMap: NSDictionary<string, NSDictionary<string, NSObject>>;

	handleNewFlowCompletionHandler(flow: NEFilterFlow, completionHandler: (p1: NEFilterControlVerdict) => void): void;

	handleRemediationForFlowCompletionHandler(flow: NEFilterFlow, completionHandler: (p1: NEFilterControlVerdict) => void): void;

	notifyRulesChanged(): void;
}

declare class NEFilterControlVerdict extends NEFilterNewFlowVerdict implements NSCopying, NSSecureCoding {

	static allowVerdictWithUpdateRules(updateRules: boolean): NEFilterControlVerdict;

	static dropVerdictWithUpdateRules(updateRules: boolean): NEFilterControlVerdict;

	static updateRules(): NEFilterControlVerdict;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare class NEFilterDataProvider extends NEFilterProvider {

	handleInboundDataCompleteForFlow(flow: NEFilterFlow): NEFilterDataVerdict;

	handleInboundDataFromFlowReadBytesStartOffsetReadBytes(flow: NEFilterFlow, offset: number, readBytes: NSData): NEFilterDataVerdict;

	handleNewFlow(flow: NEFilterFlow): NEFilterNewFlowVerdict;

	handleOutboundDataCompleteForFlow(flow: NEFilterFlow): NEFilterDataVerdict;

	handleOutboundDataFromFlowReadBytesStartOffsetReadBytes(flow: NEFilterFlow, offset: number, readBytes: NSData): NEFilterDataVerdict;

	handleRemediationForFlow(flow: NEFilterFlow): NEFilterRemediationVerdict;

	handleRulesChanged(): void;
}

declare class NEFilterDataVerdict extends NEFilterVerdict implements NSCopying, NSSecureCoding {

	static allowVerdict(): NEFilterDataVerdict;

	static dataVerdictWithPassBytesPeekBytes(passBytes: number, peekBytes: number): NEFilterDataVerdict;

	static dropVerdict(): NEFilterDataVerdict;

	static needRulesVerdict(): NEFilterDataVerdict;

	static remediateVerdictWithRemediationURLMapKeyRemediationButtonTextMapKey(remediationURLMapKey: string, remediationButtonTextMapKey: string): NEFilterDataVerdict;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare var NEFilterErrorDomain: string;

declare class NEFilterFlow extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NEFilterFlow; // inherited from NSObject

	static new(): NEFilterFlow; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ URL: NSURL;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NEFilterFlow; // inherited from NSObjectProtocol
}

declare class NEFilterManager extends NSObject {

	static alloc(): NEFilterManager; // inherited from NSObject

	static new(): NEFilterManager; // inherited from NSObject

	static sharedManager(): NEFilterManager;

	enabled: boolean;

	localizedDescription: string;

	providerConfiguration: NEFilterProviderConfiguration;

	constructor(); // inherited from NSObject

	loadFromPreferencesWithCompletionHandler(completionHandler: (p1: NSError) => void): void;

	removeFromPreferencesWithCompletionHandler(completionHandler: (p1: NSError) => void): void;

	saveToPreferencesWithCompletionHandler(completionHandler: (p1: NSError) => void): void;

	self(): NEFilterManager; // inherited from NSObjectProtocol
}

declare const enum NEFilterManagerError {

	ConfigurationInvalid = 1,

	ConfigurationDisabled = 2,

	ConfigurationStale = 3,

	ConfigurationCannotBeRemoved = 4
}

declare class NEFilterNewFlowVerdict extends NEFilterVerdict implements NSCopying, NSSecureCoding {

	static URLAppendStringVerdictWithMapKey(urlAppendMapKey: string): NEFilterNewFlowVerdict;

	static allowVerdict(): NEFilterNewFlowVerdict;

	static dropVerdict(): NEFilterNewFlowVerdict;

	static filterDataVerdictWithFilterInboundPeekInboundBytesFilterOutboundPeekOutboundBytes(filterInbound: boolean, peekInboundBytes: number, filterOutbound: boolean, peekOutboundBytes: number): NEFilterNewFlowVerdict;

	static needRulesVerdict(): NEFilterNewFlowVerdict;

	static remediateVerdictWithRemediationURLMapKeyRemediationButtonTextMapKey(remediationURLMapKey: string, remediationButtonTextMapKey: string): NEFilterNewFlowVerdict;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare class NEFilterProvider extends NEProvider {

	/* readonly */ filterConfiguration: NEFilterProviderConfiguration;

	startFilterWithCompletionHandler(completionHandler: (p1: NSError) => void): void;

	stopFilterWithReasonCompletionHandler(reason: NEProviderStopReason, completionHandler: () => void): void;
}

declare class NEFilterProviderConfiguration extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NEFilterProviderConfiguration; // inherited from NSObject

	static new(): NEFilterProviderConfiguration; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	filterBrowsers: boolean;

	filterSockets: boolean;

	identityReference: NSData;

	organization: string;

	passwordReference: NSData;

	serverAddress: string;

	username: string;

	vendorConfiguration: NSDictionary<string, any>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NEFilterProviderConfiguration; // inherited from NSObjectProtocol
}

declare var NEFilterProviderRemediationMapRemediationButtonTexts: string;

declare var NEFilterProviderRemediationMapRemediationURLs: string;

declare class NEFilterRemediationVerdict extends NEFilterVerdict implements NSCopying, NSSecureCoding {

	static allowVerdict(): NEFilterRemediationVerdict;

	static dropVerdict(): NEFilterRemediationVerdict;

	static needRulesVerdict(): NEFilterRemediationVerdict;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare class NEFilterSocketFlow extends NEFilterFlow implements NSCopying, NSSecureCoding {

	/* readonly */ localEndpoint: NWEndpoint;

	/* readonly */ remoteEndpoint: NWEndpoint;

	socketFamily: number;

	socketProtocol: number;

	socketType: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare class NEFilterVerdict extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NEFilterVerdict; // inherited from NSObject

	static new(): NEFilterVerdict; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NEFilterVerdict; // inherited from NSObjectProtocol
}

declare class NEFlowMetaData extends NSObject {

	static alloc(): NEFlowMetaData; // inherited from NSObject

	static new(): NEFlowMetaData; // inherited from NSObject

	/* readonly */ sourceAppSigningIdentifier: string;

	/* readonly */ sourceAppUniqueIdentifier: NSData;

	constructor(); // inherited from NSObject

	self(): NEFlowMetaData; // inherited from NSObjectProtocol
}

declare class NEHotspotHelper extends NSObject {

	static alloc(): NEHotspotHelper; // inherited from NSObject

	static logoff(network: NEHotspotNetwork): boolean;

	static new(): NEHotspotHelper; // inherited from NSObject

	static registerWithOptionsQueueHandler(options: NSDictionary<string, NSObject>, queue: NSObject, handler: (p1: NEHotspotHelperCommand) => void): boolean;

	static supportedNetworkInterfaces(): NSArray<any>;

	constructor(); // inherited from NSObject

	self(): NEHotspotHelper; // inherited from NSObjectProtocol
}

declare class NEHotspotHelperCommand extends NSObject {

	static alloc(): NEHotspotHelperCommand; // inherited from NSObject

	static new(): NEHotspotHelperCommand; // inherited from NSObject

	/* readonly */ commandType: NEHotspotHelperCommandType;

	/* readonly */ network: NEHotspotNetwork;

	/* readonly */ networkList: NSArray<NEHotspotNetwork>;

	constructor(); // inherited from NSObject

	createResponse(result: NEHotspotHelperResult): NEHotspotHelperResponse;

	createTCPConnection(endpoint: NWEndpoint): NWTCPConnection;

	createUDPSession(endpoint: NWEndpoint): NWUDPSession;

	self(): NEHotspotHelperCommand; // inherited from NSObjectProtocol
}

declare const enum NEHotspotHelperCommandType {

	kNEHotspotHelperCommandTypeNone = 0,

	kNEHotspotHelperCommandTypeFilterScanList = 1,

	kNEHotspotHelperCommandTypeEvaluate = 2,

	kNEHotspotHelperCommandTypeAuthenticate = 3,

	kNEHotspotHelperCommandTypePresentUI = 4,

	kNEHotspotHelperCommandTypeMaintain = 5,

	kNEHotspotHelperCommandTypeLogoff = 6
}

declare const enum NEHotspotHelperConfidence {

	kNEHotspotHelperConfidenceNone = 0,

	kNEHotspotHelperConfidenceLow = 1,

	kNEHotspotHelperConfidenceHigh = 2
}

declare class NEHotspotHelperResponse extends NSObject {

	static alloc(): NEHotspotHelperResponse; // inherited from NSObject

	static new(): NEHotspotHelperResponse; // inherited from NSObject

	constructor(); // inherited from NSObject

	deliver(): void;

	self(): NEHotspotHelperResponse; // inherited from NSObjectProtocol

	setNetwork(network: NEHotspotNetwork): void;

	setNetworkList(networkList: NSArray<NEHotspotNetwork>): void;
}

declare const enum NEHotspotHelperResult {

	kNEHotspotHelperResultSuccess = 0,

	kNEHotspotHelperResultFailure = 1,

	kNEHotspotHelperResultUIRequired = 2,

	kNEHotspotHelperResultCommandNotRecognized = 3,

	kNEHotspotHelperResultAuthenticationRequired = 4,

	kNEHotspotHelperResultUnsupportedNetwork = 5,

	kNEHotspotHelperResultTemporaryFailure = 6
}

declare class NEHotspotNetwork extends NSObject {

	static alloc(): NEHotspotNetwork; // inherited from NSObject

	static new(): NEHotspotNetwork; // inherited from NSObject

	/* readonly */ BSSID: string;

	/* readonly */ SSID: string;

	/* readonly */ autoJoined: boolean;

	/* readonly */ chosenHelper: boolean;

	/* readonly */ justJoined: boolean;

	/* readonly */ secure: boolean;

	/* readonly */ signalStrength: number;

	constructor(); // inherited from NSObject

	self(): NEHotspotNetwork; // inherited from NSObjectProtocol

	setConfidence(confidence: NEHotspotHelperConfidence): void;

	setPassword(password: string): void;
}

declare class NEIPv4Route extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NEIPv4Route; // inherited from NSObject

	static defaultRoute(): NEIPv4Route;

	static new(): NEIPv4Route; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ destinationAddress: string;

	/* readonly */ destinationSubnetMask: string;

	gatewayAddress: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { destinationAddress: string; subnetMask: string; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NEIPv4Route; // inherited from NSObjectProtocol
}

declare class NEIPv4Settings extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NEIPv4Settings; // inherited from NSObject

	static new(): NEIPv4Settings; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ addresses: NSArray<string>;

	excludedRoutes: NSArray<NEIPv4Route>;

	includedRoutes: NSArray<NEIPv4Route>;

	/* readonly */ subnetMasks: NSArray<string>;

	constructor(); // inherited from NSObject

	constructor(o: { addresses: NSArray<string>; subnetMasks: NSArray<string>; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NEIPv4Settings; // inherited from NSObjectProtocol
}

declare class NEIPv6Route extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NEIPv6Route; // inherited from NSObject

	static defaultRoute(): NEIPv6Route;

	static new(): NEIPv6Route; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ destinationAddress: string;

	/* readonly */ destinationNetworkPrefixLength: number;

	gatewayAddress: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { destinationAddress: string; networkPrefixLength: number; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NEIPv6Route; // inherited from NSObjectProtocol
}

declare class NEIPv6Settings extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NEIPv6Settings; // inherited from NSObject

	static new(): NEIPv6Settings; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ addresses: NSArray<string>;

	excludedRoutes: NSArray<NEIPv6Route>;

	includedRoutes: NSArray<NEIPv6Route>;

	/* readonly */ networkPrefixLengths: NSArray<number>;

	constructor(); // inherited from NSObject

	constructor(o: { addresses: NSArray<string>; networkPrefixLengths: NSArray<number>; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NEIPv6Settings; // inherited from NSObjectProtocol
}

declare class NEOnDemandRule extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NEOnDemandRule; // inherited from NSObject

	static new(): NEOnDemandRule; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	DNSSearchDomainMatch: NSArray<string>;

	DNSServerAddressMatch: NSArray<string>;

	SSIDMatch: NSArray<string>;

	/* readonly */ action: NEOnDemandRuleAction;

	interfaceTypeMatch: NEOnDemandRuleInterfaceType;

	probeURL: NSURL;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NEOnDemandRule; // inherited from NSObjectProtocol
}

declare const enum NEOnDemandRuleAction {

	Connect = 1,

	Disconnect = 2,

	EvaluateConnection = 3,

	Ignore = 4
}

declare class NEOnDemandRuleConnect extends NEOnDemandRule {

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare class NEOnDemandRuleDisconnect extends NEOnDemandRule {

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare class NEOnDemandRuleEvaluateConnection extends NEOnDemandRule {

	connectionRules: NSArray<NEEvaluateConnectionRule>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare class NEOnDemandRuleIgnore extends NEOnDemandRule {

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare const enum NEOnDemandRuleInterfaceType {

	Any = 0,

	Ethernet = 1,

	WiFi = 2,

	Cellular = 3
}

declare class NEPacketTunnelFlow extends NSObject {

	static alloc(): NEPacketTunnelFlow; // inherited from NSObject

	static new(): NEPacketTunnelFlow; // inherited from NSObject

	constructor(); // inherited from NSObject

	readPacketsWithCompletionHandler(completionHandler: (p1: NSArray<NSData>, p2: NSArray<number>) => void): void;

	self(): NEPacketTunnelFlow; // inherited from NSObjectProtocol

	writePacketsWithProtocols(packets: NSArray<NSData>, protocols: NSArray<number>): boolean;
}

declare class NEPacketTunnelNetworkSettings extends NETunnelNetworkSettings {

	IPv4Settings: NEIPv4Settings;

	IPv6Settings: NEIPv6Settings;

	MTU: number;

	tunnelOverheadBytes: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { tunnelRemoteAddress: string; }); // inherited from NETunnelNetworkSettings
}

declare class NEPacketTunnelProvider extends NETunnelProvider {

	/* readonly */ packetFlow: NEPacketTunnelFlow;

	cancelTunnelWithError(error: NSError): void;

	createTCPConnectionThroughTunnelToEndpointEnableTLSTLSParametersDelegate(remoteEndpoint: NWEndpoint, enableTLS: boolean, TLSParameters: NWTLSParameters, delegate: any): NWTCPConnection;

	createUDPSessionThroughTunnelToEndpointFromEndpoint(remoteEndpoint: NWEndpoint, localEndpoint: NWHostEndpoint): NWUDPSession;

	startTunnelWithOptionsCompletionHandler(options: NSDictionary<string, NSObject>, completionHandler: (p1: NSError) => void): void;

	stopTunnelWithReasonCompletionHandler(reason: NEProviderStopReason, completionHandler: () => void): void;
}

declare class NEProvider extends NSObject {

	static alloc(): NEProvider; // inherited from NSObject

	static new(): NEProvider; // inherited from NSObject

	/* readonly */ defaultPath: NWPath;

	constructor(); // inherited from NSObject

	createTCPConnectionToEndpointEnableTLSTLSParametersDelegate(remoteEndpoint: NWEndpoint, enableTLS: boolean, TLSParameters: NWTLSParameters, delegate: any): NWTCPConnection;

	createUDPSessionToEndpointFromEndpoint(remoteEndpoint: NWEndpoint, localEndpoint: NWHostEndpoint): NWUDPSession;

	self(): NEProvider; // inherited from NSObjectProtocol

	sleepWithCompletionHandler(completionHandler: () => void): void;

	wake(): void;
}

declare const enum NEProviderStopReason {

	None = 0,

	UserInitiated = 1,

	ProviderFailed = 2,

	NoNetworkAvailable = 3,

	UnrecoverableNetworkChange = 4,

	ProviderDisabled = 5,

	AuthenticationCanceled = 6,

	ConfigurationFailed = 7,

	IdleTimeout = 8,

	ConfigurationDisabled = 9,

	ConfigurationRemoved = 10,

	Superceded = 11,

	UserLogout = 12,

	UserSwitch = 13,

	ConnectionFailed = 14
}

declare class NEProxyServer extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NEProxyServer; // inherited from NSObject

	static new(): NEProxyServer; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ address: string;

	authenticationRequired: boolean;

	password: string;

	/* readonly */ port: number;

	username: string;

	constructor(); // inherited from NSObject

	constructor(o: { address: string; port: number; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NEProxyServer; // inherited from NSObjectProtocol
}

declare class NEProxySettings extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NEProxySettings; // inherited from NSObject

	static new(): NEProxySettings; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	HTTPEnabled: boolean;

	HTTPSEnabled: boolean;

	HTTPSServer: NEProxyServer;

	HTTPServer: NEProxyServer;

	autoProxyConfigurationEnabled: boolean;

	exceptionList: NSArray<string>;

	excludeSimpleHostnames: boolean;

	matchDomains: NSArray<string>;

	proxyAutoConfigurationJavaScript: string;

	proxyAutoConfigurationURL: NSURL;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NEProxySettings; // inherited from NSObjectProtocol
}

declare class NETunnelNetworkSettings extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NETunnelNetworkSettings; // inherited from NSObject

	static new(): NETunnelNetworkSettings; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	DNSSettings: NEDNSSettings;

	proxySettings: NEProxySettings;

	/* readonly */ tunnelRemoteAddress: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { tunnelRemoteAddress: string; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NETunnelNetworkSettings; // inherited from NSObjectProtocol
}

declare class NETunnelProvider extends NEProvider {

	/* readonly */ appRules: NSArray<NEAppRule>;

	/* readonly */ protocolConfiguration: NEVPNProtocol;

	reasserting: boolean;

	/* readonly */ routingMethod: NETunnelProviderRoutingMethod;

	handleAppMessageCompletionHandler(messageData: NSData, completionHandler: (p1: NSData) => void): void;

	setTunnelNetworkSettingsCompletionHandler(tunnelNetworkSettings: NETunnelNetworkSettings, completionHandler: (p1: NSError) => void): void;
}

declare const enum NETunnelProviderError {

	NetworkSettingsInvalid = 1,

	NetworkSettingsCanceled = 2,

	NetworkSettingsFailed = 3
}

declare var NETunnelProviderErrorDomain: string;

declare class NETunnelProviderManager extends NEVPNManager {

	static loadAllFromPreferencesWithCompletionHandler(completionHandler: (p1: NSArray<NETunnelProviderManager>, p2: NSError) => void): void;

	/* readonly */ routingMethod: NETunnelProviderRoutingMethod;

	copyAppRules(): NSArray<NEAppRule>;
}

declare class NETunnelProviderProtocol extends NEVPNProtocol {

	providerBundleIdentifier: string;

	providerConfiguration: NSDictionary<string, any>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare const enum NETunnelProviderRoutingMethod {

	DestinationIP = 1,

	SourceApplication = 2
}

declare class NETunnelProviderSession extends NEVPNConnection {

	sendProviderMessageReturnErrorResponseHandler(messageData: NSData, error: interop.Reference<NSError>, responseHandler: (p1: NSData) => void): boolean;

	startTunnelWithOptionsAndReturnError(options: NSDictionary<string, any>): boolean;

	stopTunnel(): void;
}

declare var NEVPNConfigurationChangeNotification: string;

declare class NEVPNConnection extends NSObject {

	static alloc(): NEVPNConnection; // inherited from NSObject

	static new(): NEVPNConnection; // inherited from NSObject

	/* readonly */ connectedDate: Date;

	/* readonly */ status: NEVPNStatus;

	constructor(); // inherited from NSObject

	self(): NEVPNConnection; // inherited from NSObjectProtocol

	startVPNTunnelAndReturnError(): boolean;

	startVPNTunnelWithOptionsAndReturnError(options: NSDictionary<string, NSObject>): boolean;

	stopVPNTunnel(): void;
}

declare var NEVPNConnectionStartOptionPassword: string;

declare var NEVPNConnectionStartOptionUsername: string;

declare const enum NEVPNError {

	ConfigurationInvalid = 1,

	ConfigurationDisabled = 2,

	ConnectionFailed = 3,

	ConfigurationStale = 4,

	ConfigurationReadWriteFailed = 5,

	ConfigurationUnknown = 6
}

declare var NEVPNErrorDomain: string;

declare const enum NEVPNIKEAuthenticationMethod {

	None = 0,

	Certificate = 1,

	SharedSecret = 2
}

declare const enum NEVPNIKEv2CertificateType {

	RSA = 1,

	ECDSA256 = 2,

	ECDSA384 = 3,

	ECDSA521 = 4
}

declare const enum NEVPNIKEv2DeadPeerDetectionRate {

	None = 0,

	Low = 1,

	Medium = 2,

	High = 3
}

declare const enum NEVPNIKEv2DiffieHellmanGroup {

	Group0 = 0,

	Group1 = 1,

	Group2 = 2,

	Group5 = 5,

	Group14 = 14,

	Group15 = 15,

	Group16 = 16,

	Group17 = 17,

	Group18 = 18,

	Group19 = 19,

	Group20 = 20,

	Group21 = 21
}

declare const enum NEVPNIKEv2EncryptionAlgorithm {

	AlgorithmDES = 1,

	Algorithm3DES = 2,

	AlgorithmAES128 = 3,

	AlgorithmAES256 = 4,

	AlgorithmAES128GCM = 5,

	AlgorithmAES256GCM = 6
}

declare const enum NEVPNIKEv2IntegrityAlgorithm {

	SHA96 = 1,

	SHA160 = 2,

	SHA256 = 3,

	SHA384 = 4,

	SHA512 = 5
}

declare class NEVPNIKEv2SecurityAssociationParameters extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NEVPNIKEv2SecurityAssociationParameters; // inherited from NSObject

	static new(): NEVPNIKEv2SecurityAssociationParameters; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	diffieHellmanGroup: NEVPNIKEv2DiffieHellmanGroup;

	encryptionAlgorithm: NEVPNIKEv2EncryptionAlgorithm;

	integrityAlgorithm: NEVPNIKEv2IntegrityAlgorithm;

	lifetimeMinutes: number;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NEVPNIKEv2SecurityAssociationParameters; // inherited from NSObjectProtocol
}

declare class NEVPNManager extends NSObject {

	static alloc(): NEVPNManager; // inherited from NSObject

	static new(): NEVPNManager; // inherited from NSObject

	static sharedManager(): NEVPNManager;

	/* readonly */ connection: NEVPNConnection;

	enabled: boolean;

	localizedDescription: string;

	onDemandEnabled: boolean;

	onDemandRules: NSArray<NEOnDemandRule>;

	protocol: NEVPNProtocol;

	protocolConfiguration: NEVPNProtocol;

	constructor(); // inherited from NSObject

	loadFromPreferencesWithCompletionHandler(completionHandler: (p1: NSError) => void): void;

	removeFromPreferencesWithCompletionHandler(completionHandler: (p1: NSError) => void): void;

	saveToPreferencesWithCompletionHandler(completionHandler: (p1: NSError) => void): void;

	self(): NEVPNManager; // inherited from NSObjectProtocol
}

declare class NEVPNProtocol extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): NEVPNProtocol; // inherited from NSObject

	static new(): NEVPNProtocol; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	disconnectOnSleep: boolean;

	identityData: NSData;

	identityDataPassword: string;

	identityReference: NSData;

	passwordReference: NSData;

	proxySettings: NEProxySettings;

	serverAddress: string;

	username: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): NEVPNProtocol; // inherited from NSObjectProtocol
}

declare class NEVPNProtocolIKEv2 extends NEVPNProtocolIPSec {

	/* readonly */ IKESecurityAssociationParameters: NEVPNIKEv2SecurityAssociationParameters;

	certificateType: NEVPNIKEv2CertificateType;

	/* readonly */ childSecurityAssociationParameters: NEVPNIKEv2SecurityAssociationParameters;

	deadPeerDetectionRate: NEVPNIKEv2DeadPeerDetectionRate;

	disableMOBIKE: boolean;

	disableRedirect: boolean;

	enablePFS: boolean;

	enableRevocationCheck: boolean;

	serverCertificateCommonName: string;

	serverCertificateIssuerCommonName: string;

	strictRevocationCheck: boolean;

	useConfigurationAttributeInternalIPSubnet: boolean;
}

declare class NEVPNProtocolIPSec extends NEVPNProtocol {

	authenticationMethod: NEVPNIKEAuthenticationMethod;

	localIdentifier: string;

	remoteIdentifier: string;

	sharedSecretReference: NSData;

	useExtendedAuthentication: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare const enum NEVPNStatus {

	Invalid = 0,

	Disconnected = 1,

	Connecting = 2,

	Connected = 3,

	Reasserting = 4,

	Disconnecting = 5
}

declare var NEVPNStatusDidChangeNotification: string;

declare class NWBonjourServiceEndpoint extends NWEndpoint {

	static endpointWithNameTypeDomain(name: string, type: string, domain: string): NWBonjourServiceEndpoint;

	/* readonly */ domain: string;

	/* readonly */ name: string;

	/* readonly */ type: string;
}

declare class NWEndpoint extends NSObject {

	static alloc(): NWEndpoint; // inherited from NSObject

	static new(): NWEndpoint; // inherited from NSObject

	constructor(); // inherited from NSObject

	self(): NWEndpoint; // inherited from NSObjectProtocol
}

declare class NWHostEndpoint extends NWEndpoint {

	static endpointWithHostnamePort(hostname: string, port: string): NWHostEndpoint;

	/* readonly */ hostname: string;

	/* readonly */ port: string;
}

declare class NWPath extends NSObject {

	static alloc(): NWPath; // inherited from NSObject

	static new(): NWPath; // inherited from NSObject

	/* readonly */ expensive: boolean;

	/* readonly */ status: NWPathStatus;

	constructor(); // inherited from NSObject

	isEqualToPath(path: NWPath): boolean;

	self(): NWPath; // inherited from NSObjectProtocol
}

declare const enum NWPathStatus {

	Invalid = 0,

	Satisfied = 1,

	Unsatisfied = 2,

	Satisfiable = 3
}

declare class NWTCPConnection extends NSObject {

	static alloc(): NWTCPConnection; // inherited from NSObject

	static new(): NWTCPConnection; // inherited from NSObject

	/* readonly */ connectedPath: NWPath;

	/* readonly */ endpoint: NWEndpoint;

	/* readonly */ error: NSError;

	/* readonly */ hasBetterPath: boolean;

	/* readonly */ localAddress: NWEndpoint;

	/* readonly */ remoteAddress: NWEndpoint;

	/* readonly */ state: NWTCPConnectionState;

	/* readonly */ txtRecord: NSData;

	/* readonly */ viable: boolean;

	constructor(); // inherited from NSObject

	constructor(o: { upgradeForConnection: NWTCPConnection; });

	cancel(): void;

	readLengthCompletionHandler(length: number, completion: (p1: NSData, p2: NSError) => void): void;

	readMinimumLengthMaximumLengthCompletionHandler(minimum: number, maximum: number, completion: (p1: NSData, p2: NSError) => void): void;

	self(): NWTCPConnection; // inherited from NSObjectProtocol

	writeClose(): void;

	writeCompletionHandler(data: NSData, completion: (p1: NSError) => void): void;
}

interface NWTCPConnectionAuthenticationDelegate extends NSObjectProtocol {

	evaluateTrustForConnectionPeerCertificateChainCompletionHandler?(connection: NWTCPConnection, peerCertificateChain: NSArray<any>, completion: (p1: any) => void): void;

	provideIdentityForConnectionCompletionHandler?(connection: NWTCPConnection, completion: (p1: any, p2: NSArray<any>) => void): void;

	shouldEvaluateTrustForConnection?(connection: NWTCPConnection): boolean;

	shouldProvideIdentityForConnection?(connection: NWTCPConnection): boolean;
}
declare var NWTCPConnectionAuthenticationDelegate: {

	prototype: NWTCPConnectionAuthenticationDelegate;
};

declare const enum NWTCPConnectionState {

	Invalid = 0,

	Connecting = 1,

	Waiting = 2,

	Connected = 3,

	Disconnected = 4,

	Cancelled = 5
}

declare class NWTLSParameters extends NSObject {

	static alloc(): NWTLSParameters; // inherited from NSObject

	static new(): NWTLSParameters; // inherited from NSObject

	SSLCipherSuites: NSSet<number>;

	TLSSessionID: NSData;

	maximumSSLProtocolVersion: number;

	minimumSSLProtocolVersion: number;

	constructor(); // inherited from NSObject

	self(): NWTLSParameters; // inherited from NSObjectProtocol
}

declare class NWUDPSession extends NSObject {

	static alloc(): NWUDPSession; // inherited from NSObject

	static new(): NWUDPSession; // inherited from NSObject

	/* readonly */ currentPath: NWPath;

	/* readonly */ endpoint: NWEndpoint;

	/* readonly */ hasBetterPath: boolean;

	/* readonly */ maximumDatagramLength: number;

	/* readonly */ resolvedEndpoint: NWEndpoint;

	/* readonly */ state: NWUDPSessionState;

	/* readonly */ viable: boolean;

	constructor(); // inherited from NSObject

	constructor(o: { upgradeForSession: NWUDPSession; });

	cancel(): void;

	self(): NWUDPSession; // inherited from NSObjectProtocol

	setReadHandlerMaxDatagrams(handler: (p1: NSArray<NSData>, p2: NSError) => void, maxDatagrams: number): void;

	tryNextResolvedEndpoint(): void;

	writeDatagramCompletionHandler(datagram: NSData, completionHandler: (p1: NSError) => void): void;

	writeMultipleDatagramsCompletionHandler(datagramArray: NSArray<NSData>, completionHandler: (p1: NSError) => void): void;
}

declare const enum NWUDPSessionState {

	Invalid = 0,

	Waiting = 1,

	Preparing = 2,

	Ready = 3,

	Failed = 4,

	Cancelled = 5
}

declare var kNEHotspotHelperOptionDisplayName: string;
