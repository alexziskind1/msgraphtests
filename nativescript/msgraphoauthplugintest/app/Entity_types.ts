//var EntityType, _, completeEntityData, entityTypesData, getAllFor, inheritanceChainFor;

var EntityType = require('./entity_type');

import * as _ from 'lodash';


export var e = {};

var entityTypesData = {
  msg: {
    navigationProperties: {
      directoryObjects: {
        type: 'Collection(microsoft.graph.directoryObject)'
      },
      devices: {
        type: 'Collection(microsoft.graph.device)'
      },
      groups: {
        type: 'Collection(microsoft.graph.group)'
      },
      directoryRoles: {
        type: 'Collection(microsoft.graph.directoryRole)'
      },
      directoryRoleTemplates: {
        type: 'Collection(microsoft.graph.directoryRoleTemplate)'
      },
      organization: {
        type: 'Collection(microsoft.graph.organization)'
      },
      subscribedSkus: {
        type: 'Collection(microsoft.graph.subscribedSku)'
      },
      users: {
        type: 'Collection(microsoft.graph.user)'
      },
      drives: {
        type: 'Collection(microsoft.graph.drive)'
      },
      subscriptions: {
        type: 'Collection(microsoft.graph.subscription)'
      },
      me: {
        type: 'microsoft.graph.user'
      },
      drive: {
        type: 'microsoft.graph.drive'
      }
    }
  },
  msgEntity: {
    abstract: true,
    properties: {
      id: {
        type: 'Edm.String'
      }
    }
  },
  msgDirectoryObject: {
    baseType: 'microsoft.graph.entity',
    openType: true,
    methods: {
      checkMemberGroups: {
        requestMethod: 'POST',
        returnType: 'Collection(Edm.String)',
        parameters: {
          groupIds: {
            type: 'Collection(Edm.String)'
          }
        }
      },
      getMemberGroups: {
        requestMethod: 'POST',
        returnType: 'Collection(Edm.String)',
        parameters: {
          securityEnabledOnly: {
            type: 'Edm.Boolean'
          }
        }
      },
      getMemberObjects: {
        requestMethod: 'POST',
        returnType: 'Collection(Edm.String)',
        parameters: {
          securityEnabledOnly: {
            type: 'Edm.Boolean'
          }
        }
      }
    }
  },
  msgDevice: {
    baseType: 'microsoft.graph.directoryObject',
    openType: true,
    properties: {
      accountEnabled: {
        type: 'Edm.Boolean',
        nullable: true
      },
      alternativeSecurityIds: {
        type: 'Collection(microsoft.graph.alternativeSecurityId)'
      },
      approximateLastSignInDateTime: {
        type: 'Edm.DateTimeOffset',
        nullable: true
      },
      deviceId: {
        type: 'Edm.String',
        nullable: true
      },
      deviceMetadata: {
        type: 'Edm.String',
        nullable: true
      },
      deviceVersion: {
        type: 'Edm.Int32',
        nullable: true
      },
      displayName: {
        type: 'Edm.String',
        nullable: true
      },
      isCompliant: {
        type: 'Edm.Boolean',
        nullable: true
      },
      isManaged: {
        type: 'Edm.Boolean',
        nullable: true
      },
      onPremisesLastSyncDateTime: {
        type: 'Edm.DateTimeOffset',
        nullable: true
      },
      onPremisesSyncEnabled: {
        type: 'Edm.Boolean',
        nullable: true
      },
      operatingSystem: {
        type: 'Edm.String',
        nullable: true
      },
      operatingSystemVersion: {
        type: 'Edm.String',
        nullable: true
      },
      physicalIds: {
        type: 'Collection(Edm.String)'
      },
      trustType: {
        type: 'Edm.String',
        nullable: true
      }
    },
    navigationProperties: {
      registeredOwners: {
        type: 'Collection(microsoft.graph.directoryObject)',
        nullable: true
      },
      registeredUsers: {
        type: 'Collection(microsoft.graph.directoryObject)',
        nullable: true
      }
    }
  },
  msgDirectoryRole: {
    baseType: 'microsoft.graph.directoryObject',
    openType: true,
    properties: {
      description: {
        type: 'Edm.String',
        nullable: true
      },
      displayName: {
        type: 'Edm.String',
        nullable: true
      },
      roleTemplateId: {
        type: 'Edm.String',
        nullable: true
      }
    },
    navigationProperties: {
      members: {
        type: 'Collection(microsoft.graph.directoryObject)',
        nullable: true
      }
    }
  },
  msgDirectoryRoleTemplate: {
    baseType: 'microsoft.graph.directoryObject',
    openType: true,
    properties: {
      description: {
        type: 'Edm.String',
        nullable: true
      },
      displayName: {
        type: 'Edm.String',
        nullable: true
      }
    }
  },
  msgGroup: {
    baseType: 'microsoft.graph.directoryObject',
    openType: true,
    properties: {
      description: {
        type: 'Edm.String',
        nullable: true
      },
      displayName: {
        type: 'Edm.String',
        nullable: true
      },
      groupTypes: {
        type: 'Collection(Edm.String)'
      },
      mail: {
        type: 'Edm.String',
        nullable: true
      },
      mailEnabled: {
        type: 'Edm.Boolean',
        nullable: true
      },
      mailNickname: {
        type: 'Edm.String',
        nullable: true
      },
      onPremisesLastSyncDateTime: {
        type: 'Edm.DateTimeOffset',
        nullable: true
      },
      onPremisesSecurityIdentifier: {
        type: 'Edm.String',
        nullable: true
      },
      onPremisesSyncEnabled: {
        type: 'Edm.Boolean',
        nullable: true
      },
      proxyAddresses: {
        type: 'Collection(Edm.String)'
      },
      securityEnabled: {
        type: 'Edm.Boolean',
        nullable: true
      },
      visibility: {
        type: 'Edm.String',
        nullable: true
      },
      allowExternalSenders: {
        type: 'Edm.Boolean',
        nullable: true
      },
      autoSubscribeNewMembers: {
        type: 'Edm.Boolean',
        nullable: true
      },
      isSubscribedByMail: {
        type: 'Edm.Boolean',
        nullable: true
      },
      unseenCount: {
        type: 'Edm.Int32',
        nullable: true
      }
    },
    navigationProperties: {
      members: {
        type: 'Collection(microsoft.graph.directoryObject)',
        nullable: true
      },
      memberOf: {
        type: 'Collection(microsoft.graph.directoryObject)',
        nullable: true
      },
      createdOnBehalfOf: {
        type: 'microsoft.graph.directoryObject',
        nullable: true
      },
      owners: {
        type: 'Collection(microsoft.graph.directoryObject)',
        nullable: true
      },
      threads: {
        type: 'Collection(microsoft.graph.conversationThread)',
        nullable: true,
        containsTarget: true
      },
      calendar: {
        type: 'microsoft.graph.calendar',
        nullable: true,
        containsTarget: true
      },
      calendarView: {
        type: 'Collection(microsoft.graph.event)',
        nullable: true,
        containsTarget: true
      },
      events: {
        type: 'Collection(microsoft.graph.event)',
        nullable: true,
        containsTarget: true
      },
      conversations: {
        type: 'Collection(microsoft.graph.conversation)',
        nullable: true,
        containsTarget: true
      },
      photo: {
        type: 'microsoft.graph.profilePhoto',
        nullable: true,
        containsTarget: true
      },
      acceptedSenders: {
        type: 'Collection(microsoft.graph.directoryObject)',
        nullable: true,
        containsTarget: true
      },
      rejectedSenders: {
        type: 'Collection(microsoft.graph.directoryObject)',
        nullable: true,
        containsTarget: true
      },
      drive: {
        type: 'microsoft.graph.drive',
        nullable: true,
        containsTarget: true
      }
    },
    methods: {
      subscribeByMail: {
        requestMethod: 'POST'
      },
      unsubscribeByMail: {
        requestMethod: 'POST'
      },
      addFavorite: {
        requestMethod: 'POST'
      },
      removeFavorite: {
        requestMethod: 'POST'
      },
      resetUnseenCount: {
        requestMethod: 'POST'
      }
    }
  },
  msgConversationThread: {
    baseType: 'microsoft.graph.entity',
    properties: {
      toRecipients: {
        type: 'Collection(microsoft.graph.recipient)'
      },
      topic: {
        type: 'Edm.String'
      },
      hasAttachments: {
        type: 'Edm.Boolean'
      },
      lastDeliveredDateTime: {
        type: 'Edm.DateTimeOffset'
      },
      uniqueSenders: {
        type: 'Collection(Edm.String)'
      },
      ccRecipients: {
        type: 'Collection(microsoft.graph.recipient)'
      },
      preview: {
        type: 'Edm.String'
      },
      isLocked: {
        type: 'Edm.Boolean'
      }
    },
    navigationProperties: {
      posts: {
        type: 'Collection(microsoft.graph.post)',
        nullable: true,
        containsTarget: true
      }
    },
    methods: {
      reply: {
        requestMethod: 'POST',
        parameters: {
          Post: {
            type: 'microsoft.graph.post'
          }
        }
      }
    }
  },
  msgCalendar: {
    baseType: 'microsoft.graph.entity',
    properties: {
      name: {
        type: 'Edm.String',
        nullable: true
      },
      color: {
        type: 'microsoft.graph.calendarColor',
        nullable: true
      },
      changeKey: {
        type: 'Edm.String',
        nullable: true
      }
    },
    navigationProperties: {
      events: {
        type: 'Collection(microsoft.graph.event)',
        nullable: true,
        containsTarget: true
      },
      calendarView: {
        type: 'Collection(microsoft.graph.event)',
        nullable: true,
        containsTarget: true
      }
    }
  },
  msgOutlookItem: {
    abstract: true,
    baseType: 'microsoft.graph.entity',
    properties: {
      createdDateTime: {
        type: 'Edm.DateTimeOffset',
        nullable: true
      },
      lastModifiedDateTime: {
        type: 'Edm.DateTimeOffset',
        nullable: true
      },
      changeKey: {
        type: 'Edm.String',
        nullable: true
      },
      categories: {
        type: 'Collection(Edm.String)',
        nullable: true
      }
    }
  },
  msgEvent: {
    baseType: 'microsoft.graph.outlookItem',
    properties: {
      originalStartTimeZone: {
        type: 'Edm.String',
        nullable: true
      },
      originalEndTimeZone: {
        type: 'Edm.String',
        nullable: true
      },
      responseStatus: {
        type: 'microsoft.graph.responseStatus',
        nullable: true
      },
      iCalUId: {
        type: 'Edm.String',
        nullable: true
      },
      reminderMinutesBeforeStart: {
        type: 'Edm.Int32',
        nullable: true
      },
      isReminderOn: {
        type: 'Edm.Boolean',
        nullable: true
      },
      hasAttachments: {
        type: 'Edm.Boolean',
        nullable: true
      },
      subject: {
        type: 'Edm.String',
        nullable: true
      },
      body: {
        type: 'microsoft.graph.itemBody',
        nullable: true
      },
      bodyPreview: {
        type: 'Edm.String',
        nullable: true
      },
      importance: {
        type: 'microsoft.graph.importance',
        nullable: true
      },
      sensitivity: {
        type: 'microsoft.graph.sensitivity',
        nullable: true
      },
      start: {
        type: 'microsoft.graph.dateTimeTimeZone',
        nullable: true
      },
      originalStart: {
        type: 'Edm.DateTimeOffset',
        nullable: true
      },
      end: {
        type: 'microsoft.graph.dateTimeTimeZone',
        nullable: true
      },
      location: {
        type: 'microsoft.graph.location',
        nullable: true
      },
      isAllDay: {
        type: 'Edm.Boolean',
        nullable: true
      },
      isCancelled: {
        type: 'Edm.Boolean',
        nullable: true
      },
      isOrganizer: {
        type: 'Edm.Boolean',
        nullable: true
      },
      recurrence: {
        type: 'microsoft.graph.patternedRecurrence',
        nullable: true
      },
      responseRequested: {
        type: 'Edm.Boolean',
        nullable: true
      },
      seriesMasterId: {
        type: 'Edm.String',
        nullable: true
      },
      showAs: {
        type: 'microsoft.graph.freeBusyStatus',
        nullable: true
      },
      type: {
        type: 'microsoft.graph.eventType',
        nullable: true
      },
      attendees: {
        type: 'Collection(microsoft.graph.attendee)',
        nullable: true
      },
      organizer: {
        type: 'microsoft.graph.recipient',
        nullable: true
      },
      webLink: {
        type: 'Edm.String',
        nullable: true
      }
    },
    navigationProperties: {
      calendar: {
        type: 'microsoft.graph.calendar',
        nullable: true,
        containsTarget: true
      },
      instances: {
        type: 'Collection(microsoft.graph.event)',
        nullable: true,
        containsTarget: true
      },
      extensions: {
        type: 'Collection(microsoft.graph.extension)',
        nullable: true,
        containsTarget: true
      },
      attachments: {
        type: 'Collection(microsoft.graph.attachment)',
        nullable: true,
        containsTarget: true
      }
    },
    methods: {
      accept: {
        requestMethod: 'POST',
        parameters: {
          Comment: {
            type: 'Edm.String'
          },
          SendResponse: {
            type: 'Edm.Boolean'
          }
        }
      },
      decline: {
        requestMethod: 'POST',
        parameters: {
          Comment: {
            type: 'Edm.String'
          },
          SendResponse: {
            type: 'Edm.Boolean'
          }
        }
      },
      tentativelyAccept: {
        requestMethod: 'POST',
        parameters: {
          Comment: {
            type: 'Edm.String'
          },
          SendResponse: {
            type: 'Edm.Boolean'
          }
        }
      },
      snoozeReminder: {
        requestMethod: 'POST',
        parameters: {
          NewReminderTime: {
            type: 'microsoft.graph.dateTimeTimeZone'
          }
        }
      },
      dismissReminder: {
        requestMethod: 'POST'
      }
    }
  },
  msgConversation: {
    baseType: 'microsoft.graph.entity',
    properties: {
      topic: {
        type: 'Edm.String'
      },
      hasAttachments: {
        type: 'Edm.Boolean'
      },
      lastDeliveredDateTime: {
        type: 'Edm.DateTimeOffset'
      },
      uniqueSenders: {
        type: 'Collection(Edm.String)'
      },
      preview: {
        type: 'Edm.String'
      }
    },
    navigationProperties: {
      threads: {
        type: 'Collection(microsoft.graph.conversationThread)',
        nullable: true,
        containsTarget: true
      }
    }
  },
  msgProfilePhoto: {
    hasStream: true,
    baseType: 'microsoft.graph.entity',
    properties: {
      height: {
        type: 'Edm.Int32',
        nullable: true
      },
      width: {
        type: 'Edm.Int32',
        nullable: true
      }
    }
  },
  msgDrive: {
    baseType: 'microsoft.graph.entity',
    properties: {
      driveType: {
        type: 'Edm.String',
        nullable: true
      },
      owner: {
        type: 'microsoft.graph.identitySet',
        nullable: true
      },
      quota: {
        type: 'microsoft.graph.quota',
        nullable: true
      }
    },
    navigationProperties: {
      items: {
        type: 'Collection(microsoft.graph.driveItem)',
        nullable: true,
        containsTarget: true
      },
      special: {
        type: 'Collection(microsoft.graph.driveItem)',
        nullable: true,
        containsTarget: true
      },
      root: {
        type: 'microsoft.graph.driveItem',
        nullable: true,
        containsTarget: true
      }
    },
    methods: {
      recent: {
        requestMethod: 'ANY',
        returnType: 'Collection(microsoft.graph.driveItem)'
      },
      sharedWithMe: {
        requestMethod: 'ANY',
        returnType: 'Collection(microsoft.graph.driveItem)'
      }
    }
  },
  msgSubscribedSku: {
    baseType: 'microsoft.graph.entity',
    properties: {
      capabilityStatus: {
        type: 'Edm.String',
        nullable: true
      },
      consumedUnits: {
        type: 'Edm.Int32',
        nullable: true
      },
      prepaidUnits: {
        type: 'microsoft.graph.licenseUnitsDetail',
        nullable: true
      },
      servicePlans: {
        type: 'Collection(microsoft.graph.servicePlanInfo)'
      },
      skuId: {
        type: 'Edm.Guid',
        nullable: true
      },
      skuPartNumber: {
        type: 'Edm.String',
        nullable: true
      },
      appliesTo: {
        type: 'Edm.String',
        nullable: true
      }
    }
  },
  msgOrganization: {
    baseType: 'microsoft.graph.directoryObject',
    openType: true,
    properties: {
      assignedPlans: {
        type: 'Collection(microsoft.graph.assignedPlan)'
      },
      businessPhones: {
        type: 'Collection(Edm.String)'
      },
      city: {
        type: 'Edm.String',
        nullable: true
      },
      country: {
        type: 'Edm.String',
        nullable: true
      },
      countryLetterCode: {
        type: 'Edm.String',
        nullable: true
      },
      displayName: {
        type: 'Edm.String',
        nullable: true
      },
      marketingNotificationEmails: {
        type: 'Collection(Edm.String)'
      },
      onPremisesLastSyncDateTime: {
        type: 'Edm.DateTimeOffset',
        nullable: true
      },
      onPremisesSyncEnabled: {
        type: 'Edm.Boolean',
        nullable: true
      },
      postalCode: {
        type: 'Edm.String',
        nullable: true
      },
      preferredLanguage: {
        type: 'Edm.String',
        nullable: true
      },
      provisionedPlans: {
        type: 'Collection(microsoft.graph.provisionedPlan)'
      },
      securityComplianceNotificationMails: {
        type: 'Collection(Edm.String)'
      },
      securityComplianceNotificationPhones: {
        type: 'Collection(Edm.String)'
      },
      state: {
        type: 'Edm.String',
        nullable: true
      },
      street: {
        type: 'Edm.String',
        nullable: true
      },
      technicalNotificationMails: {
        type: 'Collection(Edm.String)'
      },
      verifiedDomains: {
        type: 'Collection(microsoft.graph.verifiedDomain)'
      }
    }
  },
  msgUser: {
    baseType: 'microsoft.graph.directoryObject',
    openType: true,
    properties: {
      accountEnabled: {
        type: 'Edm.Boolean',
        nullable: true
      },
      assignedLicenses: {
        type: 'Collection(microsoft.graph.assignedLicense)'
      },
      assignedPlans: {
        type: 'Collection(microsoft.graph.assignedPlan)'
      },
      businessPhones: {
        type: 'Collection(Edm.String)'
      },
      city: {
        type: 'Edm.String',
        nullable: true
      },
      companyName: {
        type: 'Edm.String',
        nullable: true
      },
      country: {
        type: 'Edm.String',
        nullable: true
      },
      department: {
        type: 'Edm.String',
        nullable: true
      },
      displayName: {
        type: 'Edm.String',
        nullable: true
      },
      givenName: {
        type: 'Edm.String',
        nullable: true
      },
      jobTitle: {
        type: 'Edm.String',
        nullable: true
      },
      mail: {
        type: 'Edm.String',
        nullable: true
      },
      mailNickname: {
        type: 'Edm.String',
        nullable: true
      },
      mobilePhone: {
        type: 'Edm.String',
        nullable: true
      },
      onPremisesImmutableId: {
        type: 'Edm.String',
        nullable: true
      },
      onPremisesLastSyncDateTime: {
        type: 'Edm.DateTimeOffset',
        nullable: true
      },
      onPremisesSecurityIdentifier: {
        type: 'Edm.String',
        nullable: true
      },
      onPremisesSyncEnabled: {
        type: 'Edm.Boolean',
        nullable: true
      },
      passwordPolicies: {
        type: 'Edm.String',
        nullable: true
      },
      passwordProfile: {
        type: 'microsoft.graph.passwordProfile',
        nullable: true
      },
      officeLocation: {
        type: 'Edm.String',
        nullable: true
      },
      postalCode: {
        type: 'Edm.String',
        nullable: true
      },
      preferredLanguage: {
        type: 'Edm.String',
        nullable: true
      },
      provisionedPlans: {
        type: 'Collection(microsoft.graph.provisionedPlan)'
      },
      proxyAddresses: {
        type: 'Collection(Edm.String)'
      },
      state: {
        type: 'Edm.String',
        nullable: true
      },
      streetAddress: {
        type: 'Edm.String',
        nullable: true
      },
      surname: {
        type: 'Edm.String',
        nullable: true
      },
      usageLocation: {
        type: 'Edm.String',
        nullable: true
      },
      userPrincipalName: {
        type: 'Edm.String',
        nullable: true
      },
      userType: {
        type: 'Edm.String',
        nullable: true
      },
      aboutMe: {
        type: 'Edm.String',
        nullable: true
      },
      birthday: {
        type: 'Edm.DateTimeOffset'
      },
      hireDate: {
        type: 'Edm.DateTimeOffset'
      },
      interests: {
        type: 'Collection(Edm.String)',
        nullable: true
      },
      mySite: {
        type: 'Edm.String',
        nullable: true
      },
      pastProjects: {
        type: 'Collection(Edm.String)',
        nullable: true
      },
      preferredName: {
        type: 'Edm.String',
        nullable: true
      },
      responsibilities: {
        type: 'Collection(Edm.String)',
        nullable: true
      },
      schools: {
        type: 'Collection(Edm.String)',
        nullable: true
      },
      skills: {
        type: 'Collection(Edm.String)',
        nullable: true
      }
    },
    navigationProperties: {
      ownedDevices: {
        type: 'Collection(microsoft.graph.directoryObject)',
        nullable: true
      },
      registeredDevices: {
        type: 'Collection(microsoft.graph.directoryObject)',
        nullable: true
      },
      manager: {
        type: 'microsoft.graph.directoryObject',
        nullable: true
      },
      directReports: {
        type: 'Collection(microsoft.graph.directoryObject)',
        nullable: true
      },
      memberOf: {
        type: 'Collection(microsoft.graph.directoryObject)',
        nullable: true
      },
      createdObjects: {
        type: 'Collection(microsoft.graph.directoryObject)',
        nullable: true
      },
      ownedObjects: {
        type: 'Collection(microsoft.graph.directoryObject)',
        nullable: true
      },
      messages: {
        type: 'Collection(microsoft.graph.message)',
        nullable: true,
        containsTarget: true
      },
      mailFolders: {
        type: 'Collection(microsoft.graph.mailFolder)',
        nullable: true,
        containsTarget: true
      },
      calendar: {
        type: 'microsoft.graph.calendar',
        nullable: true,
        containsTarget: true
      },
      calendars: {
        type: 'Collection(microsoft.graph.calendar)',
        nullable: true,
        containsTarget: true
      },
      calendarGroups: {
        type: 'Collection(microsoft.graph.calendarGroup)',
        nullable: true,
        containsTarget: true
      },
      calendarView: {
        type: 'Collection(microsoft.graph.event)',
        nullable: true,
        containsTarget: true
      },
      events: {
        type: 'Collection(microsoft.graph.event)',
        nullable: true,
        containsTarget: true
      },
      contacts: {
        type: 'Collection(microsoft.graph.contact)',
        nullable: true,
        containsTarget: true
      },
      contactFolders: {
        type: 'Collection(microsoft.graph.contactFolder)',
        nullable: true,
        containsTarget: true
      },
      inferenceClassification: {
        type: 'microsoft.graph.inferenceClassification',
        nullable: true,
        containsTarget: true
      },
      photo: {
        type: 'microsoft.graph.profilePhoto',
        nullable: true,
        containsTarget: true
      },
      drive: {
        type: 'microsoft.graph.drive',
        nullable: true,
        containsTarget: true
      }
    },
    methods: {
      assignLicense: {
        requestMethod: 'POST',
        returnType: 'microsoft.graph.user',
        parameters: {
          addLicenses: {
            type: 'Collection(microsoft.graph.assignedLicense)'
          },
          removeLicenses: {
            type: 'Collection(Edm.Guid)'
          }
        }
      },
      changePassword: {
        requestMethod: 'POST',
        parameters: {
          currentPassword: {
            type: 'Edm.String'
          },
          newPassword: {
            type: 'Edm.String'
          }
        }
      },
      sendMail: {
        requestMethod: 'POST',
        parameters: {
          Message: {
            type: 'microsoft.graph.message'
          },
          SaveToSentItems: {
            type: 'Edm.Boolean'
          }
        }
      },
      reminderView: {
        requestMethod: 'ANY',
        returnType: 'Collection(microsoft.graph.reminder)',
        parameters: {
          StartDateTime: {
            type: 'Edm.String'
          },
          EndDateTime: {
            type: 'Edm.String'
          }
        }
      }
    }
  },
  msgMessage: {
    baseType: 'microsoft.graph.outlookItem',
    properties: {
      receivedDateTime: {
        type: 'Edm.DateTimeOffset',
        nullable: true
      },
      sentDateTime: {
        type: 'Edm.DateTimeOffset',
        nullable: true
      },
      hasAttachments: {
        type: 'Edm.Boolean',
        nullable: true
      },
      internetMessageId: {
        type: 'Edm.String',
        nullable: true
      },
      subject: {
        type: 'Edm.String',
        nullable: true
      },
      body: {
        type: 'microsoft.graph.itemBody',
        nullable: true
      },
      bodyPreview: {
        type: 'Edm.String',
        nullable: true
      },
      importance: {
        type: 'microsoft.graph.importance',
        nullable: true
      },
      parentFolderId: {
        type: 'Edm.String',
        nullable: true
      },
      sender: {
        type: 'microsoft.graph.recipient',
        nullable: true
      },
      from: {
        type: 'microsoft.graph.recipient',
        nullable: true
      },
      toRecipients: {
        type: 'Collection(microsoft.graph.recipient)',
        nullable: true
      },
      ccRecipients: {
        type: 'Collection(microsoft.graph.recipient)',
        nullable: true
      },
      bccRecipients: {
        type: 'Collection(microsoft.graph.recipient)',
        nullable: true
      },
      replyTo: {
        type: 'Collection(microsoft.graph.recipient)',
        nullable: true
      },
      conversationId: {
        type: 'Edm.String',
        nullable: true
      },
      uniqueBody: {
        type: 'microsoft.graph.itemBody',
        nullable: true
      },
      isDeliveryReceiptRequested: {
        type: 'Edm.Boolean',
        nullable: true
      },
      isReadReceiptRequested: {
        type: 'Edm.Boolean',
        nullable: true
      },
      isRead: {
        type: 'Edm.Boolean',
        nullable: true
      },
      isDraft: {
        type: 'Edm.Boolean',
        nullable: true
      },
      webLink: {
        type: 'Edm.String',
        nullable: true
      },
      inferenceClassification: {
        type: 'microsoft.graph.inferenceClassificationType',
        nullable: true
      }
    },
    navigationProperties: {
      extensions: {
        type: 'Collection(microsoft.graph.extension)',
        nullable: true,
        containsTarget: true
      },
      attachments: {
        type: 'Collection(microsoft.graph.attachment)',
        nullable: true,
        containsTarget: true
      }
    },
    methods: {
      copy: {
        requestMethod: 'POST',
        returnType: 'microsoft.graph.message',
        parameters: {
          DestinationId: {
            type: 'Edm.String'
          }
        }
      },
      move: {
        requestMethod: 'POST',
        returnType: 'microsoft.graph.message',
        parameters: {
          DestinationId: {
            type: 'Edm.String'
          }
        }
      },
      createReply: {
        requestMethod: 'POST',
        returnType: 'microsoft.graph.message'
      },
      createReplyAll: {
        requestMethod: 'POST',
        returnType: 'microsoft.graph.message'
      },
      createForward: {
        requestMethod: 'POST',
        returnType: 'microsoft.graph.message'
      },
      reply: {
        requestMethod: 'POST',
        parameters: {
          Comment: {
            type: 'Edm.String'
          }
        }
      },
      replyAll: {
        requestMethod: 'POST',
        parameters: {
          Comment: {
            type: 'Edm.String'
          }
        }
      },
      forward: {
        requestMethod: 'POST',
        parameters: {
          Comment: {
            type: 'Edm.String'
          },
          ToRecipients: {
            type: 'Collection(microsoft.graph.recipient)'
          }
        }
      },
      send: {
        requestMethod: 'POST'
      }
    }
  },
  msgMailFolder: {
    baseType: 'microsoft.graph.entity',
    properties: {
      displayName: {
        type: 'Edm.String',
        nullable: true
      },
      parentFolderId: {
        type: 'Edm.String',
        nullable: true
      },
      childFolderCount: {
        type: 'Edm.Int32',
        nullable: true
      },
      unreadItemCount: {
        type: 'Edm.Int32',
        nullable: true
      },
      totalItemCount: {
        type: 'Edm.Int32',
        nullable: true
      }
    },
    navigationProperties: {
      messages: {
        type: 'Collection(microsoft.graph.message)',
        nullable: true,
        containsTarget: true
      },
      childFolders: {
        type: 'Collection(microsoft.graph.mailFolder)',
        nullable: true,
        containsTarget: true
      }
    },
    methods: {
      copy: {
        requestMethod: 'POST',
        returnType: 'microsoft.graph.mailFolder',
        parameters: {
          DestinationId: {
            type: 'Edm.String'
          }
        }
      },
      move: {
        requestMethod: 'POST',
        returnType: 'microsoft.graph.mailFolder',
        parameters: {
          DestinationId: {
            type: 'Edm.String'
          }
        }
      }
    }
  },
  msgCalendarGroup: {
    baseType: 'microsoft.graph.entity',
    properties: {
      name: {
        type: 'Edm.String',
        nullable: true
      },
      classId: {
        type: 'Edm.Guid',
        nullable: true
      },
      changeKey: {
        type: 'Edm.String',
        nullable: true
      }
    },
    navigationProperties: {
      calendars: {
        type: 'Collection(microsoft.graph.calendar)',
        nullable: true,
        containsTarget: true
      }
    }
  },
  msgContact: {
    baseType: 'microsoft.graph.outlookItem',
    properties: {
      parentFolderId: {
        type: 'Edm.String',
        nullable: true
      },
      birthday: {
        type: 'Edm.DateTimeOffset',
        nullable: true
      },
      fileAs: {
        type: 'Edm.String',
        nullable: true
      },
      displayName: {
        type: 'Edm.String',
        nullable: true
      },
      givenName: {
        type: 'Edm.String',
        nullable: true
      },
      initials: {
        type: 'Edm.String',
        nullable: true
      },
      middleName: {
        type: 'Edm.String',
        nullable: true
      },
      nickName: {
        type: 'Edm.String',
        nullable: true
      },
      surname: {
        type: 'Edm.String',
        nullable: true
      },
      title: {
        type: 'Edm.String',
        nullable: true
      },
      yomiGivenName: {
        type: 'Edm.String',
        nullable: true
      },
      yomiSurname: {
        type: 'Edm.String',
        nullable: true
      },
      yomiCompanyName: {
        type: 'Edm.String',
        nullable: true
      },
      generation: {
        type: 'Edm.String',
        nullable: true
      },
      emailAddresses: {
        type: 'Collection(microsoft.graph.emailAddress)',
        nullable: true
      },
      imAddresses: {
        type: 'Collection(Edm.String)',
        nullable: true
      },
      jobTitle: {
        type: 'Edm.String',
        nullable: true
      },
      companyName: {
        type: 'Edm.String',
        nullable: true
      },
      department: {
        type: 'Edm.String',
        nullable: true
      },
      officeLocation: {
        type: 'Edm.String',
        nullable: true
      },
      profession: {
        type: 'Edm.String',
        nullable: true
      },
      businessHomePage: {
        type: 'Edm.String',
        nullable: true
      },
      assistantName: {
        type: 'Edm.String',
        nullable: true
      },
      manager: {
        type: 'Edm.String',
        nullable: true
      },
      homePhones: {
        type: 'Collection(Edm.String)',
        nullable: true
      },
      mobilePhone: {
        type: 'Edm.String',
        nullable: true
      },
      businessPhones: {
        type: 'Collection(Edm.String)',
        nullable: true
      },
      homeAddress: {
        type: 'microsoft.graph.physicalAddress',
        nullable: true
      },
      businessAddress: {
        type: 'microsoft.graph.physicalAddress',
        nullable: true
      },
      otherAddress: {
        type: 'microsoft.graph.physicalAddress',
        nullable: true
      },
      spouseName: {
        type: 'Edm.String',
        nullable: true
      },
      personalNotes: {
        type: 'Edm.String',
        nullable: true
      },
      children: {
        type: 'Collection(Edm.String)',
        nullable: true
      }
    },
    navigationProperties: {
      extensions: {
        type: 'Collection(microsoft.graph.extension)',
        nullable: true,
        containsTarget: true
      },
      photo: {
        type: 'microsoft.graph.profilePhoto',
        nullable: true,
        containsTarget: true
      }
    }
  },
  msgContactFolder: {
    baseType: 'microsoft.graph.entity',
    properties: {
      parentFolderId: {
        type: 'Edm.String',
        nullable: true
      },
      displayName: {
        type: 'Edm.String',
        nullable: true
      }
    },
    navigationProperties: {
      contacts: {
        type: 'Collection(microsoft.graph.contact)',
        nullable: true,
        containsTarget: true
      },
      childFolders: {
        type: 'Collection(microsoft.graph.contactFolder)',
        nullable: true,
        containsTarget: true
      }
    }
  },
  msgInferenceClassification: {
    baseType: 'microsoft.graph.entity',
    navigationProperties: {
      overrides: {
        type: 'Collection(microsoft.graph.inferenceClassificationOverride)',
        nullable: true,
        containsTarget: true
      }
    }
  },
  msgAttachment: {
    abstract: true,
    baseType: 'microsoft.graph.entity',
    properties: {
      lastModifiedDateTime: {
        type: 'Edm.DateTimeOffset',
        nullable: true
      },
      name: {
        type: 'Edm.String',
        nullable: true
      },
      contentType: {
        type: 'Edm.String',
        nullable: true
      },
      size: {
        type: 'Edm.Int32'
      },
      isInline: {
        type: 'Edm.Boolean'
      }
    }
  },
  msgExtension: {
    abstract: true,
    baseType: 'microsoft.graph.entity'
  },
  msgFileAttachment: {
    baseType: 'microsoft.graph.attachment',
    properties: {
      contentId: {
        type: 'Edm.String',
        nullable: true
      },
      contentLocation: {
        type: 'Edm.String',
        nullable: true
      },
      contentBytes: {
        type: 'Edm.Binary',
        nullable: true
      }
    }
  },
  msgItemAttachment: {
    baseType: 'microsoft.graph.attachment',
    navigationProperties: {
      item: {
        type: 'microsoft.graph.outlookItem',
        nullable: true,
        containsTarget: true
      }
    }
  },
  msgEventMessage: {
    baseType: 'microsoft.graph.message',
    properties: {
      meetingMessageType: {
        type: 'microsoft.graph.meetingMessageType',
        nullable: true
      }
    },
    navigationProperties: {
      event: {
        type: 'microsoft.graph.event',
        nullable: true,
        containsTarget: true
      }
    }
  },
  msgReferenceAttachment: {
    baseType: 'microsoft.graph.attachment'
  },
  msgOpenTypeExtension: {
    baseType: 'microsoft.graph.extension',
    openType: true,
    properties: {
      extensionName: {
        type: 'Edm.String'
      }
    }
  },
  msgPost: {
    baseType: 'microsoft.graph.outlookItem',
    properties: {
      body: {
        type: 'microsoft.graph.itemBody',
        nullable: true
      },
      receivedDateTime: {
        type: 'Edm.DateTimeOffset'
      },
      hasAttachments: {
        type: 'Edm.Boolean'
      },
      from: {
        type: 'microsoft.graph.recipient'
      },
      sender: {
        type: 'microsoft.graph.recipient'
      },
      conversationThreadId: {
        type: 'Edm.String',
        nullable: true
      },
      newParticipants: {
        type: 'Collection(microsoft.graph.recipient)'
      },
      conversationId: {
        type: 'Edm.String',
        nullable: true
      }
    },
    navigationProperties: {
      extensions: {
        type: 'Collection(microsoft.graph.extension)',
        nullable: true,
        containsTarget: true
      },
      inReplyTo: {
        type: 'microsoft.graph.post',
        nullable: true,
        containsTarget: true
      },
      attachments: {
        type: 'Collection(microsoft.graph.attachment)',
        nullable: true,
        containsTarget: true
      }
    },
    methods: {
      forward: {
        requestMethod: 'POST',
        parameters: {
          Comment: {
            type: 'Edm.String'
          },
          ToRecipients: {
            type: 'Collection(microsoft.graph.recipient)'
          }
        }
      },
      reply: {
        requestMethod: 'POST',
        parameters: {
          Post: {
            type: 'microsoft.graph.post'
          }
        }
      }
    }
  },
  msgInferenceClassificationOverride: {
    baseType: 'microsoft.graph.entity',
    properties: {
      classifyAs: {
        type: 'microsoft.graph.inferenceClassificationType',
        nullable: true
      },
      senderEmailAddress: {
        type: 'microsoft.graph.emailAddress',
        nullable: true
      }
    }
  },
  msgDriveItem: {
    baseType: 'microsoft.graph.entity',
    openType: true,
    properties: {
      content: {
        type: 'Edm.Stream',
        nullable: true
      },
      createdBy: {
        type: 'microsoft.graph.identitySet',
        nullable: true
      },
      createdDateTime: {
        type: 'Edm.DateTimeOffset',
        nullable: true
      },
      cTag: {
        type: 'Edm.String',
        nullable: true
      },
      description: {
        type: 'Edm.String',
        nullable: true
      },
      eTag: {
        type: 'Edm.String',
        nullable: true
      },
      lastModifiedBy: {
        type: 'microsoft.graph.identitySet',
        nullable: true
      },
      lastModifiedDateTime: {
        type: 'Edm.DateTimeOffset',
        nullable: true
      },
      name: {
        type: 'Edm.String',
        nullable: true
      },
      parentReference: {
        type: 'microsoft.graph.itemReference',
        nullable: true
      },
      size: {
        type: 'Edm.Int64',
        nullable: true
      },
      webDavUrl: {
        type: 'Edm.String',
        nullable: true
      },
      webUrl: {
        type: 'Edm.String',
        nullable: true
      },
      audio: {
        type: 'microsoft.graph.audio',
        nullable: true
      },
      deleted: {
        type: 'microsoft.graph.deleted',
        nullable: true
      },
      file: {
        type: 'microsoft.graph.file',
        nullable: true
      },
      fileSystemInfo: {
        type: 'microsoft.graph.fileSystemInfo',
        nullable: true
      },
      folder: {
        type: 'microsoft.graph.folder',
        nullable: true
      },
      image: {
        type: 'microsoft.graph.image',
        nullable: true
      },
      location: {
        type: 'microsoft.graph.geoCoordinates',
        nullable: true
      },
      photo: {
        type: 'microsoft.graph.photo',
        nullable: true
      },
      remoteItem: {
        type: 'microsoft.graph.remoteItem',
        nullable: true
      },
      searchResult: {
        type: 'microsoft.graph.searchResult',
        nullable: true
      },
      shared: {
        type: 'microsoft.graph.shared',
        nullable: true
      },
      specialFolder: {
        type: 'microsoft.graph.specialFolder',
        nullable: true
      },
      video: {
        type: 'microsoft.graph.video',
        nullable: true
      },
      "package": {
        type: 'microsoft.graph.package',
        nullable: true
      }
    },
    navigationProperties: {
      createdByUser: {
        type: 'microsoft.graph.user',
        nullable: true
      },
      lastModifiedByUser: {
        type: 'microsoft.graph.user',
        nullable: true
      },
      permissions: {
        type: 'Collection(microsoft.graph.permission)',
        nullable: true,
        containsTarget: true
      },
      children: {
        type: 'Collection(microsoft.graph.driveItem)',
        nullable: true,
        containsTarget: true
      },
      thumbnails: {
        type: 'Collection(microsoft.graph.thumbnailSet)',
        nullable: true,
        containsTarget: true
      }
    },
    methods: {
      createLink: {
        requestMethod: 'POST',
        returnType: 'microsoft.graph.permission',
        parameters: {
          type: {
            type: 'Edm.String'
          },
          scope: {
            type: 'Edm.String'
          }
        }
      },
      copy: {
        requestMethod: 'POST',
        returnType: 'microsoft.graph.driveItem',
        parameters: {
          name: {
            type: 'Edm.String'
          },
          parentReference: {
            type: 'microsoft.graph.itemReference'
          }
        }
      },
      search: {
        requestMethod: 'ANY',
        returnType: 'Collection(microsoft.graph.driveItem)',
        parameters: {
          q: {
            type: 'Edm.String'
          }
        }
      },
      delta: {
        requestMethod: 'ANY',
        returnType: 'Collection(microsoft.graph.driveItem)',
        parameters: {
          token: {
            type: 'Edm.String'
          }
        }
      }
    }
  },
  msgPermission: {
    baseType: 'microsoft.graph.entity',
    properties: {
      grantedTo: {
        type: 'microsoft.graph.identitySet',
        nullable: true
      },
      invitation: {
        type: 'microsoft.graph.sharingInvitation',
        nullable: true
      },
      inheritedFrom: {
        type: 'microsoft.graph.itemReference',
        nullable: true
      },
      link: {
        type: 'microsoft.graph.sharingLink',
        nullable: true
      },
      roles: {
        type: 'Collection(Edm.String)',
        nullable: true
      },
      shareId: {
        type: 'Edm.String',
        nullable: true
      }
    }
  },
  msgThumbnailSet: {
    baseType: 'microsoft.graph.entity',
    openType: true,
    properties: {
      large: {
        type: 'microsoft.graph.thumbnail',
        nullable: true
      },
      medium: {
        type: 'microsoft.graph.thumbnail',
        nullable: true
      },
      small: {
        type: 'microsoft.graph.thumbnail',
        nullable: true
      },
      source: {
        type: 'microsoft.graph.thumbnail',
        nullable: true
      }
    }
  },
  msgSubscription: {
    baseType: 'microsoft.graph.entity',
    properties: {
      resource: {
        type: 'Edm.String'
      },
      changeType: {
        type: 'Edm.String'
      },
      clientState: {
        type: 'Edm.String',
        nullable: true
      },
      notificationUrl: {
        type: 'Edm.String'
      },
      expirationDateTime: {
        type: 'Edm.DateTimeOffset'
      }
    }
  }
};

let getAllFor = function(key, entityName) {
  var entityData;
  entityData = entityTypesData[entityName];
  if (entityData.baseType) {
    return _.merge({}, entityData[key], getAllFor(key, entityData.baseType));
  } else {
    return entityData[key];
  }
};

let inheritanceChainFor = function(entityName) {
  var baseType, baseTypeChain;
  baseTypeChain = [];
  baseType = entityTypesData[entityName].baseType;
  while (baseType) {
    baseTypeChain.push(baseType);
    baseType = entityTypesData[baseType].baseType;
  }
  return baseTypeChain;
};

let completeEntityData = function(name) {
  var entityData, inheritanceChain, methods, navigationProperties, properties;
  entityData = entityTypesData[name];
  properties = getAllFor('properties', name);
  navigationProperties = getAllFor('navigationProperties', name);
  methods = getAllFor('methods', name);
  inheritanceChain = inheritanceChainFor(name);
  return _.merge({}, entityData, {
    properties: properties,
    navigationProperties: navigationProperties,
    inheritanceChain: inheritanceChain,
    methods: methods,
    name: name
  });
};

_(entityTypesData).keys().forEach(function(entityName) {
  return e[entityName] = new EntityType(completeEntityData(entityName));
});