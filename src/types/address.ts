type Address = {
  id: string,
  street: string,
  postCode: string,
  city: string,
  country: string
}

type AddAddressReq = Omit<Address, 'id'>;

type UpdateAddressReq = {
  id: string,
  addressNewData: AddAddressReq,
}

export type {
  Address,
  AddAddressReq,
  UpdateAddressReq,
};