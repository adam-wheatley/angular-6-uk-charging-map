export interface ChargingData {
  Scheme: Scheme;
  ChargeDevice: ChargeDeviceItem[];
}
interface Scheme {
  SchemeCode: string;
  SchemeData: SchemeData;
}
interface SchemeData {
  OrganisationName: string;
  Website: string;
  TelephoneNo: string;
}
export interface ChargeDeviceItem {
  ChargeDeviceId: string;
  ChargeDeviceRef: string;
  ChargeDeviceName: string;
  ChargeDeviceText: string | null;
  ChargeDeviceLocation: ChargeDeviceLocation;
  ChargeDeviceManufacturer: null | string;
  ChargeDeviceModel: null | string;
  PublishStatusID: string;
  DateCreated: string;
  DateUpdated: string;
  Attribution: string;
  DateDeleted: string;
  Connector: ConnectorItem[];
  DeviceOwner: DeviceOwner;
  DeviceController: DeviceController;
  DeviceAccess: DeviceAccess | any[];
  DeviceNetworks: string;
  ChargeDeviceStatus: string;
  PublishStatus: string;
  DeviceValidated: string;
  RecordModerated: string;
  RecordLastUpdated: null | string;
  RecordLastUpdatedBy: string;
  PaymentRequiredFlag: boolean;
  PaymentDetails: null | string;
  SubscriptionRequiredFlag: boolean;
  SubscriptionDetails: null | string;
  ParkingFeesFlag: boolean;
  ParkingFeesDetails: null | string;
  ParkingFeesUrl: null | string;
  AccessRestrictionFlag: boolean;
  AccessRestrictionDetails: null | string;
  PhysicalRestrictionFlag: boolean;
  PhysicalRestrictionText: null | string;
  OnStreetFlag: boolean;
  LocationType: string;
  Bearing: null;
  Accessible24Hours: boolean;
}
interface ChargeDeviceLocation {
  Latitude: string;
  Longitude: string;
  Address: Address;
  LocationShortDescription: string | null;
  LocationLongDescription: string | null;
}
export interface Address {
  SubBuildingName: string | null;
  BuildingName: string | null;
  BuildingNumber: null | string;
  Thoroughfare: null | string;
  Street: string;
  DoubleDependantLocality: null;
  DependantLocality: null | string;
  PostTown: string;
  County: string;
  PostCode: string;
  Country: string;
  UPRN: null | string;
}
export interface ConnectorItem {
  ConnectorId: string;
  ConnectorType: string;
  RatedOutputkW: string;
  RatedOutputVoltage: string;
  RatedOutputCurrent: string;
  ChargeMethod: string;
  ChargeMode: string;
  ChargePointStatus: string;
  TetheredCable: string;
  Information: null | string;
  Validated: string;
}
interface DeviceOwner {
  OrganisationName: string;
  SchemeCode: string;
  Website: string;
  TelephoneNo: string;
}
interface DeviceController {
  OrganisationName: string;
  SchemeCode: string;
  Website: string;
  TelephoneNo: string;
}
interface DeviceAccess {
  Open24Hours?: boolean;
  RegularOpenings?: RegularOpeningsItem[];
}
interface RegularOpeningsItem {
  Days: string;
  Hours: Hours;
}
interface Hours {
  From: string;
  To: string;
}
