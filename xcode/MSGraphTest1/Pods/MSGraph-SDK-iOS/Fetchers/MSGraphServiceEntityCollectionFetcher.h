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


#ifndef MSGRAPHSERVICEENTITYCOLLECTIONFETCHER_H
#define MSGRAPHSERVICEENTITYCOLLECTIONFETCHER_H

@class MSGraphServiceEntityFetcher;

#import "core/MSOrcCollectionFetcher.h"
#import "api/api.h"
#import "core/core.h"
#import "MSGraphServiceModels.h"

/** MSGraphServiceEntityCollectionFetcher
 *
 */
@interface MSGraphServiceEntityCollectionFetcher : MSOrcCollectionFetcher

- (instancetype)initWithUrl:(NSString *)urlComponent parent:(id<MSOrcExecutable>)parent;

- (void)readWithCallback:(void (^)(NSArray *, MSOrcError *))callback;

- (MSGraphServiceEntityFetcher *)getById: (id) identifier;
- (void)add:(MSGraphServiceEntity *)entity callback:(void (^)(MSGraphServiceEntity *, MSOrcError *))callback;

- (MSGraphServiceEntityCollectionFetcher *)select:(NSString *)params;
- (MSGraphServiceEntityCollectionFetcher *)filter:(NSString *)params;
- (MSGraphServiceEntityCollectionFetcher *)search:(NSString *)params;
- (MSGraphServiceEntityCollectionFetcher *)top:(int)value;
- (MSGraphServiceEntityCollectionFetcher *)skip:(int)value;
- (MSGraphServiceEntityCollectionFetcher *)expand:(NSString *)value;
- (MSGraphServiceEntityCollectionFetcher *)orderBy:(NSString *)params;
- (MSGraphServiceEntityCollectionFetcher *)addCustomParametersWithName:(NSString *)name value:(id)value;
- (MSGraphServiceEntityCollectionFetcher *)addCustomHeaderWithName:(NSString *)name value:(NSString *)value;

@end

#endif
