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


#ifndef MSGRAPHSERVICEPOST_H
#define MSGRAPHSERVICEPOST_H

#import <Foundation/Foundation.h>
#import "core/MSOrcChangesTrackingArray.h"

@class MSGraphServiceItemBody;
@class MSGraphServiceRecipient;
@class MSGraphServiceAttachment;
#import "MSGraphServiceOutlookItem.h"
#import "api/MSOrcInteroperableWithDictionary.h"

/** Interface MSGraphServicePost
 *
 */
@interface MSGraphServicePost : MSGraphServiceOutlookItem <MSOrcInteroperableWithDictionary>

/** Property body
 *
 */
@property (nonatomic,  copy, setter=setBody:, getter=body) MSGraphServiceItemBody * body;

/** Property receivedDateTime
 *
 */
@property (nonatomic,  copy, setter=setReceivedDateTime:, getter=receivedDateTime) NSDate * receivedDateTime;

/** Property hasAttachments
 *
 */
@property (nonatomic,  setter=setHasAttachments:, getter=hasAttachments) bool hasAttachments;

/** Property from
 *
 */
@property (nonatomic,  copy, setter=setFrom:, getter=from) MSGraphServiceRecipient * from;

/** Property sender
 *
 */
@property (nonatomic,  copy, setter=setSender:, getter=sender) MSGraphServiceRecipient * sender;

/** Property conversationThreadId
 *
 */
@property (nonatomic,  copy, setter=setConversationThreadId:, getter=conversationThreadId) NSString * conversationThreadId;

/** Property newParticipants
 *
 */
@property (nonatomic,  copy, setter=setNewParticipants:, getter=getNewParticipants) NSMutableArray * newParticipants;

/** Property conversationId
 *
 */
@property (nonatomic,  copy, setter=setConversationId:, getter=conversationId) NSString * conversationId;

/** Property inReplyTo
 *
 */
@property (nonatomic,  copy, setter=setInReplyTo:, getter=inReplyTo) MSGraphServicePost * inReplyTo;

/** Property attachments
 *
 */
@property (nonatomic,  copy, setter=setAttachments:, getter=attachments) NSMutableArray * attachments;


+ (NSDictionary *) $$$_$$$propertiesNamesMappings;


@end

#endif
