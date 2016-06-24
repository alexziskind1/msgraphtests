/*******************************************************************************
**NOTE** This code was generated by a tool and will occasionally be
overwritten. We welcome comments and issues regarding this code; they will be
addressed in the generation tool. If you wish to submit pull requests, please
do so for the templates in that tool.

This code was generated by Vipr (https://github.com/microsoft/vipr) using
the T4TemplateWriter (https://github.com/msopentech/vipr-t4templatewriter).

Copyright (c) Microsoft Corporation. All Rights Reserved.
Licensed under the Apache License 2.0; see LICENSE in the source repository
root for authoritative license information.﻿
******************************************************************************/



#ifndef MSGRAPHSERVICEMESSAGEFETCHER_H
#define MSGRAPHSERVICEMESSAGEFETCHER_H

#import "MSGraphServiceModels.h"
#import "api/api.h"
#import "core/core.h"
#import "core/MSOrcEntityFetcher.h"

@class MSGraphServiceItemBodyFetcher;
@class MSGraphServiceRecipientFetcher;
@class MSGraphServiceRecipientCollectionFetcher;
@class MSGraphServiceAttachmentCollectionFetcher;
@class MSGraphServiceEventMessageFetcher;	
@class MSGraphServiceAttachmentCollectionFetcher;
@class MSGraphServiceAttachmentFetcher;
@class MSGraphServiceMessageOperations;


/** MSGraphServiceMessageFetcher
 *
 */
@interface MSGraphServiceMessageFetcher : MSOrcEntityFetcher

@property (copy, nonatomic, readonly) MSGraphServiceMessageOperations *operations;

- (instancetype)initWithUrl:(NSString*)urlComponent parent:(id<MSOrcExecutable>)parent;
- (void)readWithCallback:(void (^)(MSGraphServiceMessage *, MSOrcError *))callback;
- (void)update:(MSGraphServiceMessage *)message callback:(void (^)(MSGraphServiceMessage *, MSOrcError*))callback ;
- (void)delete:(void(^)(int status, MSOrcError *))callback;
- (MSGraphServiceMessageFetcher *)addCustomParametersWithName:(NSString *)name value:(id)value;
- (MSGraphServiceMessageFetcher *)addCustomHeaderWithName:(NSString *)name value:(NSString *)value;
- (MSGraphServiceMessageFetcher *)select:(NSString *)params;
- (MSGraphServiceMessageFetcher *)expand:(NSString *)value;
@property (strong, nonatomic, readonly, getter=attachments) MSGraphServiceAttachmentCollectionFetcher *attachments;

- (MSGraphServiceAttachmentFetcher *)attachmentsById:(id)identifier;

- (MSGraphServiceEventMessageFetcher *)asEventMessage;	

@end

#endif
