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


#ifndef MSGRAPHSERVICEPOSTOPERATIONS_H
#define MSGRAPHSERVICEPOSTOPERATIONS_H
				  		


#import "MSGraphServiceModels.h"
#import "api/api.h"
#import "core/core.h"
#import "MSGraphServiceOutlookItemOperations.h"


/** MSGraphServicePostOperations
 *
 */
@interface MSGraphServicePostOperations : MSGraphServiceOutlookItemOperations

- (instancetype)initOperationWithUrl:(NSString *)urlComponent parent:(id<MSOrcExecutable>)parent;

- (void)forwardWithComment:(NSString *)comment toRecipients:(MSGraphServiceRecipient *)toRecipients callback:(void (^)(int, MSOrcError*))callback ;
- (void)forwardRawWithComment:(NSString *)comment toRecipients:(NSString *)toRecipients callback:(void (^)(NSString *, MSOrcError*))callback ;
- (void)replyWithPost:(MSGraphServicePost *)post callback:(void (^)(int, MSOrcError*))callback ;
- (void)replyRawWithPost:(NSString *)post callback:(void (^)(NSString *, MSOrcError*))callback ;

@end

#endif
