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



#ifndef MSGRAPHSERVICEITEMBODY_H
#define MSGRAPHSERVICEITEMBODY_H

#import <Foundation/Foundation.h>
#import "core/MSOrcChangesTrackingArray.h"

#import "MSGraphServiceBodyType.h"
#import "core/MSOrcBaseEntity.h"
#import "api/MSOrcInteroperableWithDictionary.h"

/** Interface MSGraphServiceItemBody
 *
 */
@interface MSGraphServiceItemBody : MSOrcBaseEntity <MSOrcInteroperableWithDictionary>

/** Property contentType
 *
 */
@property (nonatomic,  setter=setContentType:, getter=contentType) MSGraphServiceBodyType contentType;

- (void)setContentTypeString:(NSString *)string;

/** Property content
 *
 */
@property (nonatomic,  copy, setter=setContent:, getter=content) NSString * content;


+ (NSDictionary *) $$$_$$$propertiesNamesMappings;


@end

#endif
