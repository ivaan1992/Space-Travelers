import rocketList from '../../components/rockets/Rockets';

const GET_ROCKETS_SUCCESS = 'spaceTravelers/rockets/GET_ROCKETS_SUCCESS';
const REGISTER_ROCKET = 'spaceTravelers/rockets/REGISTER_ROCKET';
const CANCEL_REGISTER = 'spaceTravelers/rockets/CANCEL_REGISTER';

const initialState = [];

export const getRocketSuccess = (payload) => ({
  type: GET_ROCKETS_SUCCESS,
  payload,
});

export const registerRocket = (payload) => ({
  type: REGISTER_ROCKET,
  payload,
});

export const cancelRegister = (payload) => ({
  type: CANCEL_REGISTER,
  payload,
});

export const getRockets = () => (dispach) => {
  rocketList().then((data) => {
    const rockets = data.map((rocket) => ({
      id: rocket.id,
      image: rocket.image,
      name: rocket.active,
      description: rocket.description,
      reserved: false,
    }));
    dispach(GET_ROCKETS_SUCCESS(rockets));
  });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS_SUCCESS:
      return [...action.payload];

    case REGISTER_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });

    case CANCEL_REGISTER:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};
export default rocketsReducer;
