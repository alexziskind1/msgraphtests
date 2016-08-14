var ComplexType, complex_types;

ComplexType = require('./complex_type');

module.exports = complex_types = {
  'microsoft.graph.alternativeSecurityId': new ComplexType({
    name: 'microsoft.graph.alternativeSecurityId',
    properties: {
      type: {
        type: 'Edm.Int32'
      },
      identityProvider: {
        type: 'Edm.String'
      },
      key: {
        type: 'Edm.Binary'
      }
    }
  }),
  'microsoft.graph.licenseUnitsDetail': new ComplexType({
    name: 'microsoft.graph.licenseUnitsDetail',
    properties: {
      enabled: {
        type: 'Edm.Int32'
      },
      suspended: {
        type: 'Edm.Int32'
      },
      warning: {
        type: 'Edm.Int32'
      }
    }
  }),
  'microsoft.graph.servicePlanInfo': new ComplexType({
    name: 'microsoft.graph.servicePlanInfo',
    properties: {
      servicePlanId: {
        type: 'Edm.Guid'
      },
      servicePlanName: {
        type: 'Edm.String'
      },
      provisioningStatus: {
        type: 'Edm.String'
      },
      appliesTo: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.assignedPlan': new ComplexType({
    name: 'microsoft.graph.assignedPlan',
    properties: {
      assignedDateTime: {
        type: 'Edm.DateTimeOffset'
      },
      capabilityStatus: {
        type: 'Edm.String'
      },
      service: {
        type: 'Edm.String'
      },
      servicePlanId: {
        type: 'Edm.Guid'
      }
    }
  }),
  'microsoft.graph.provisionedPlan': new ComplexType({
    name: 'microsoft.graph.provisionedPlan',
    properties: {
      capabilityStatus: {
        type: 'Edm.String'
      },
      provisioningStatus: {
        type: 'Edm.String'
      },
      service: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.verifiedDomain': new ComplexType({
    name: 'microsoft.graph.verifiedDomain',
    properties: {
      capabilities: {
        type: 'Edm.String'
      },
      isDefault: {
        type: 'Edm.Boolean'
      },
      isInitial: {
        type: 'Edm.Boolean'
      },
      name: {
        type: 'Edm.String'
      },
      type: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.assignedLicense': new ComplexType({
    name: 'microsoft.graph.assignedLicense',
    properties: {
      disabledPlans: {
        type: 'Collection(Edm.Guid)'
      },
      skuId: {
        type: 'Edm.Guid'
      }
    }
  }),
  'microsoft.graph.passwordProfile': new ComplexType({
    name: 'microsoft.graph.passwordProfile',
    properties: {
      password: {
        type: 'Edm.String'
      },
      forceChangePasswordNextSignIn: {
        type: 'Edm.Boolean'
      }
    }
  }),
  'microsoft.graph.reminder': new ComplexType({
    name: 'microsoft.graph.reminder',
    properties: {
      eventId: {
        type: 'Edm.String'
      },
      eventStartTime: {
        type: 'microsoft.graph.dateTimeTimeZone'
      },
      eventEndTime: {
        type: 'microsoft.graph.dateTimeTimeZone'
      },
      changeKey: {
        type: 'Edm.String'
      },
      eventSubject: {
        type: 'Edm.String'
      },
      eventLocation: {
        type: 'microsoft.graph.location'
      },
      eventWebLink: {
        type: 'Edm.String'
      },
      reminderFireTime: {
        type: 'microsoft.graph.dateTimeTimeZone'
      }
    }
  }),
  'microsoft.graph.dateTimeTimeZone': new ComplexType({
    name: 'microsoft.graph.dateTimeTimeZone',
    properties: {
      dateTime: {
        type: 'Edm.String'
      },
      timeZone: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.location': new ComplexType({
    name: 'microsoft.graph.location',
    properties: {
      displayName: {
        type: 'Edm.String'
      },
      address: {
        type: 'microsoft.graph.physicalAddress'
      }
    }
  }),
  'microsoft.graph.physicalAddress': new ComplexType({
    name: 'microsoft.graph.physicalAddress',
    properties: {
      street: {
        type: 'Edm.String'
      },
      city: {
        type: 'Edm.String'
      },
      state: {
        type: 'Edm.String'
      },
      countryOrRegion: {
        type: 'Edm.String'
      },
      postalCode: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.itemBody': new ComplexType({
    name: 'microsoft.graph.itemBody',
    properties: {
      contentType: {
        type: 'microsoft.graph.bodyType'
      },
      content: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.recipient': new ComplexType({
    name: 'microsoft.graph.recipient',
    properties: {
      emailAddress: {
        type: 'microsoft.graph.emailAddress'
      }
    }
  }),
  'microsoft.graph.emailAddress': new ComplexType({
    name: 'microsoft.graph.emailAddress',
    properties: {
      name: {
        type: 'Edm.String'
      },
      address: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.responseStatus': new ComplexType({
    name: 'microsoft.graph.responseStatus',
    properties: {
      response: {
        type: 'microsoft.graph.responseType'
      },
      time: {
        type: 'Edm.DateTimeOffset'
      }
    }
  }),
  'microsoft.graph.patternedRecurrence': new ComplexType({
    name: 'microsoft.graph.patternedRecurrence',
    properties: {
      pattern: {
        type: 'microsoft.graph.recurrencePattern'
      },
      range: {
        type: 'microsoft.graph.recurrenceRange'
      }
    }
  }),
  'microsoft.graph.recurrencePattern': new ComplexType({
    name: 'microsoft.graph.recurrencePattern',
    properties: {
      type: {
        type: 'microsoft.graph.recurrencePatternType'
      },
      interval: {
        type: 'Edm.Int32'
      },
      month: {
        type: 'Edm.Int32'
      },
      dayOfMonth: {
        type: 'Edm.Int32'
      },
      daysOfWeek: {
        type: 'Collection(microsoft.graph.dayOfWeek)'
      },
      firstDayOfWeek: {
        type: 'microsoft.graph.dayOfWeek'
      },
      index: {
        type: 'microsoft.graph.weekIndex'
      }
    }
  }),
  'microsoft.graph.recurrenceRange': new ComplexType({
    name: 'microsoft.graph.recurrenceRange',
    properties: {
      type: {
        type: 'microsoft.graph.recurrenceRangeType'
      },
      startDate: {
        type: 'Edm.Date'
      },
      endDate: {
        type: 'Edm.Date'
      },
      recurrenceTimeZone: {
        type: 'Edm.String'
      },
      numberOfOccurrences: {
        type: 'Edm.Int32'
      }
    }
  }),
  'microsoft.graph.attendee': new ComplexType({
    name: 'microsoft.graph.attendee',
    properties: {
      status: {
        type: 'microsoft.graph.responseStatus'
      },
      type: {
        type: 'microsoft.graph.attendeeType'
      }
    }
  }),
  'microsoft.graph.identitySet': new ComplexType({
    name: 'microsoft.graph.identitySet',
    properties: {
      application: {
        type: 'microsoft.graph.identity'
      },
      device: {
        type: 'microsoft.graph.identity'
      },
      user: {
        type: 'microsoft.graph.identity'
      }
    }
  }),
  'microsoft.graph.identity': new ComplexType({
    name: 'microsoft.graph.identity',
    properties: {
      displayName: {
        type: 'Edm.String'
      },
      id: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.quota': new ComplexType({
    name: 'microsoft.graph.quota',
    properties: {
      deleted: {
        type: 'Edm.Int64'
      },
      remaining: {
        type: 'Edm.Int64'
      },
      state: {
        type: 'Edm.String'
      },
      total: {
        type: 'Edm.Int64'
      },
      used: {
        type: 'Edm.Int64'
      }
    }
  }),
  'microsoft.graph.itemReference': new ComplexType({
    name: 'microsoft.graph.itemReference',
    properties: {
      driveId: {
        type: 'Edm.String'
      },
      id: {
        type: 'Edm.String'
      },
      path: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.audio': new ComplexType({
    name: 'microsoft.graph.audio',
    properties: {
      album: {
        type: 'Edm.String'
      },
      albumArtist: {
        type: 'Edm.String'
      },
      artist: {
        type: 'Edm.String'
      },
      bitrate: {
        type: 'Edm.Int64'
      },
      composers: {
        type: 'Edm.String'
      },
      copyright: {
        type: 'Edm.String'
      },
      disc: {
        type: 'Edm.Int16'
      },
      discCount: {
        type: 'Edm.Int16'
      },
      duration: {
        type: 'Edm.Int64'
      },
      genre: {
        type: 'Edm.String'
      },
      hasDrm: {
        type: 'Edm.Boolean'
      },
      isVariableBitrate: {
        type: 'Edm.Boolean'
      },
      title: {
        type: 'Edm.String'
      },
      track: {
        type: 'Edm.Int32'
      },
      trackCount: {
        type: 'Edm.Int32'
      },
      year: {
        type: 'Edm.Int32'
      }
    }
  }),
  'microsoft.graph.deleted': new ComplexType({
    name: 'microsoft.graph.deleted',
    properties: {
      state: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.file': new ComplexType({
    name: 'microsoft.graph.file',
    properties: {
      hashes: {
        type: 'microsoft.graph.hashes'
      },
      mimeType: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.hashes': new ComplexType({
    name: 'microsoft.graph.hashes',
    properties: {
      crc32Hash: {
        type: 'Edm.String'
      },
      sha1Hash: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.fileSystemInfo': new ComplexType({
    name: 'microsoft.graph.fileSystemInfo',
    properties: {
      createdDateTime: {
        type: 'Edm.DateTimeOffset'
      },
      lastModifiedDateTime: {
        type: 'Edm.DateTimeOffset'
      }
    }
  }),
  'microsoft.graph.folder': new ComplexType({
    name: 'microsoft.graph.folder',
    properties: {
      childCount: {
        type: 'Edm.Int32'
      }
    }
  }),
  'microsoft.graph.image': new ComplexType({
    name: 'microsoft.graph.image',
    properties: {
      height: {
        type: 'Edm.Int32'
      },
      width: {
        type: 'Edm.Int32'
      }
    }
  }),
  'microsoft.graph.geoCoordinates': new ComplexType({
    name: 'microsoft.graph.geoCoordinates',
    properties: {
      altitude: {
        type: 'Edm.Double'
      },
      latitude: {
        type: 'Edm.Double'
      },
      longitude: {
        type: 'Edm.Double'
      }
    }
  }),
  'microsoft.graph.photo': new ComplexType({
    name: 'microsoft.graph.photo',
    properties: {
      cameraMake: {
        type: 'Edm.String'
      },
      cameraModel: {
        type: 'Edm.String'
      },
      exposureDenominator: {
        type: 'Edm.Double'
      },
      exposureNumerator: {
        type: 'Edm.Double'
      },
      focalLength: {
        type: 'Edm.Double'
      },
      fNumber: {
        type: 'Edm.Double'
      },
      takenDateTime: {
        type: 'Edm.DateTimeOffset'
      },
      iso: {
        type: 'Edm.Int32'
      }
    }
  }),
  'microsoft.graph.remoteItem': new ComplexType({
    name: 'microsoft.graph.remoteItem',
    properties: {
      file: {
        type: 'microsoft.graph.file'
      },
      fileSystemInfo: {
        type: 'microsoft.graph.fileSystemInfo'
      },
      folder: {
        type: 'microsoft.graph.folder'
      },
      id: {
        type: 'Edm.String'
      },
      name: {
        type: 'Edm.String'
      },
      parentReference: {
        type: 'microsoft.graph.itemReference'
      },
      size: {
        type: 'Edm.Int64'
      }
    }
  }),
  'microsoft.graph.searchResult': new ComplexType({
    name: 'microsoft.graph.searchResult',
    properties: {
      onClickTelemetryUrl: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.shared': new ComplexType({
    name: 'microsoft.graph.shared',
    properties: {
      owner: {
        type: 'microsoft.graph.identitySet'
      },
      scope: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.specialFolder': new ComplexType({
    name: 'microsoft.graph.specialFolder',
    properties: {
      name: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.video': new ComplexType({
    name: 'microsoft.graph.video',
    properties: {
      bitrate: {
        type: 'Edm.Int32'
      },
      duration: {
        type: 'Edm.Int64'
      },
      height: {
        type: 'Edm.Int32'
      },
      width: {
        type: 'Edm.Int32'
      }
    }
  }),
  'microsoft.graph.package': new ComplexType({
    name: 'microsoft.graph.package',
    properties: {
      type: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.sharingInvitation': new ComplexType({
    name: 'microsoft.graph.sharingInvitation',
    properties: {
      email: {
        type: 'Edm.String'
      },
      invitedBy: {
        type: 'microsoft.graph.identitySet'
      },
      redeemedBy: {
        type: 'Edm.String'
      },
      signInRequired: {
        type: 'Edm.Boolean'
      }
    }
  }),
  'microsoft.graph.sharingLink': new ComplexType({
    name: 'microsoft.graph.sharingLink',
    properties: {
      application: {
        type: 'microsoft.graph.identity'
      },
      type: {
        type: 'Edm.String'
      },
      webUrl: {
        type: 'Edm.String'
      }
    }
  }),
  'microsoft.graph.thumbnail': new ComplexType({
    name: 'microsoft.graph.thumbnail',
    properties: {
      content: {
        type: 'Edm.Stream'
      },
      height: {
        type: 'Edm.Int32'
      },
      url: {
        type: 'Edm.String'
      },
      width: {
        type: 'Edm.Int32'
      }
    }
  })
};