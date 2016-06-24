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



#ifndef MSGRAPHSERVICEMAILFOLDERFETCHER_H
#define MSGRAPHSERVICEMAILFOLDERFETCHER_H

#import "MSGraphServiceModels.h"
#import "api/api.h"
#import "core/core.h"
#import "core/MSOrcEntityFetcher.h"

@class MSGraphServiceMessageCollectionFetcher;
@class MSGraphServiceMessageCollectionFetcher;
@class MSGraphServiceMessageFetcher;
@class MSGraphServiceMailFolderFetcher;
@class MSGraphServiceMailFolderOperations;


/** MSGraphServiceMailFolderFetcher
 *
 */
@interface MSGraphServiceMailFolderFetcher : MSOrcEntityFetcher

@property (copy, nonatomic, readonly) MSGraphServiceMailFolderOperations *operations;

- (instancetype)initWithUrl:(NSString*)urlComponent parent:(id<MSOrcExecutable>)parent;
- (void)readWithCallback:(void (^)(MSGraphServiceMailFolder *, MSOrcError *))callback;
- (void)update:(MSGraphServiceMailFolder *)mailFolder callback:(void (^)(MSGraphServiceMailFolder *, MSOrcError*))callback ;
- (void)delete:(void(^)(int status, MSOrcError *))callback;
- (MSGraphServiceMailFolderFetcher *)addCustomParametersWithName:(NSString *)name value:(id)value;
- (MSGraphServiceMailFolderFetcher *)addCustomHeaderWithName:(NSString *)name value:(NSString *)value;
- (MSGraphServiceMailFolderFetcher *)select:(NSString *)params;
- (MSGraphServiceMailFolderFetcher *)expand:(NSString *)value;
@property (strong, nonatomic, readonly, getter=messages) MSGraphServiceMessageCollectionFetcher *messages;

- (MSGraphServiceMessageFetcher *)messagesById:(id)identifier;

@property (strong, nonatomic, readonly, getter=childFolders) MSGraphServiceMailFolderCollectionFetcher *childFolders;

- (MSGraphServiceMailFolderFetcher *)childFoldersById:(id)identifier;


@end

#endif
