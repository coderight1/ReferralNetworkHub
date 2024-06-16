import axios from "axios";
import { Config } from "../../App";
import { generateSnackbar } from "../../utility/snackbarGenerator";
import { catchError } from "../../utility/catchError";
import { validateUserData } from "../../utility/validateUserInput";
import { persistUser } from "../../utility/userPersistence";

/**
 * Fetches user details from the API.
 * 
 * @param {string} userId - The ID of the user.
 * @param {string} token - The Bearer token for authentication.
 * @returns {Object} - The user details if the request is successful.
 */
const fetchUserDetails = async (userId, token) => {
  try {
    let response = await axios.get(`${Config.endpoint}user/details/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      generateSnackbar(response.data.message, "success", 2000);
      return response.data;
    }
  } catch (err) {
    catchError(err);
  }
};

/**
 * Logs in a user by validating the user data, sending a login request to the API,
 * and handling the user session.
 * 
 * @param {Object} userData - The user data containing email and password.
 * @param {Function} setIsLoading - Function to set the loading state.
 * @param {boolean} rememberMe - Flag indicating if the user wants to be remembered.
 * @param {Function} setUserData - Function to set the user data state.
 * @param {Function} navigate - Function to navigate to a different route.
 */
const loginUser = async (
  userData,
  setIsLoading,
  rememberMe,
  setUserData,
  navigate
) => {
  try {
    const validationMessage = validateUserData(userData);
    if (validationMessage === true) {
      setIsLoading(true);
      const response = await axios.post(
        `${Config.endpoint}auth/login`,
        userData
      );

      if (response.status === 200) {
        const userData = await fetchUserDetails(
          response?.data?.user?._id,
          response?.data?.token?.token
        );
        generateSnackbar(response?.data?.message, "success", 2000);
        rememberMe
          ? persistUser(
              response.data.user._id,
              response.data.token.token,
              "rememberMe"
            )
          : persistUser(
              response.data.user._id,
              response.data.token.token,
              "none"
            );

        setUserData({ email: "", password: "" });

        if (!userData?.userInfo?.userDetails) {
          navigate("/editAccountInfo");
        } else {
          navigate("/");
        }
      }
      setIsLoading(false);
    } else {
      generateSnackbar(validationMessage, "warning", 2000);
    }
  } catch (err) {
    catchError(err);
    setIsLoading(false);
  }
};

export { loginUser };
