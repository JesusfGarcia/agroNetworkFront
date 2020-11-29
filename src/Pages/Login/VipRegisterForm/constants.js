export const initialState = {
  user: {
    name: "",
    phone: "",
    email: "",
    password: "",
    userType: "OFERTANTE",
    interestReason: "",
    description: "",
    img: null,
    state: "",
    city: "",
    address: "",
    turn: "",
  },
  buttonText: "Registrarme",
  saveUserLoading: false,
  saveUserError: null,
  register: {
    isEnterprise: false,
  },
};
