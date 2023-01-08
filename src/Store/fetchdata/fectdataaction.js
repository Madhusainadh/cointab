import axios from "axios";

export const fetchdata = () => async (dispatch) => {
  dispatch({ type: "LOADING" });
  try {
    let { data } = await axios.get("https://backendcointab-production.up.railway.app/users");
    console.log(data);
    dispatch({ type: "SetData", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

//https://randomuser.me/api/?page=100&results=5&seed=abc

export const fetchuserdetails =
  ({page=1, sort,limit=10} ) =>
  async (dispatch) => {
    page = page||1
    console.log(page, sort,limit,"kughfgghcfgxhdxfcm");
    dispatch({ type: "LOADING" });
    try {
      let { data } = await axios.get(
        `https://backendcointab-production.up.railway.app/users/filter?page=${page}&limit=${limit}&sort=${sort}`
      );
      console.log(data, "users");
      dispatch({ type: "SetUsersDetailsData", payload: data });
      
    } catch (err) {
      console.log(err.message);
    }
  };
