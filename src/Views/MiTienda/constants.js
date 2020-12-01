export const initialState = {
  myProducts: [],
  loading: false,
  product: {
    name: "",
    typeTransaction: "COMPRA",
    typeOffer: "PRODUCTO",
    description: "",
    unitMeasurement: "",
    priceUnit: 0,
    address: "",
    stock: 0,
    images: [],
  },
  loadingForm: false,
  reload: false,
  open: false,
};
