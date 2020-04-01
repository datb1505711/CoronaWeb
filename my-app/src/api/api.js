import axios from "axios";

class API {
  async Login(username, password) {
    var result = false;
    await axios
      .post("/login", {
        username: username,
        password: password,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        proxy: {
          host: "http://127.0.0.1",
          port: 4000
        }
      })
      .then(function(response) {
        console.log("response is : " + JSON.stringify(response.data));
        result = JSON.stringify(response.data);

        if (response.status == 200 && response.data.status == "OK")
          result = true;
      })
      .catch(function(error) {
        if (error.response) {
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error.message);
        }
        console.log(error.config);
      });
    console.log("result is : " + result);

    return result;
  }

  async getGlobalTotal() {
    var result = "";
    await axios
      .get("/getGlobalTotals", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        proxy: {
          host: "http://127.0.0.1",
          port: 4000
        }
      })
      .then(function(response) {
        // console.log("response is : " + JSON.stringify(response.data));
        result = JSON.stringify(response.data);

        if (response.status == 200) result = response.data;
      })
      .catch(function(error) {
        if (error.response) {
          result = "failed";
          console.log(error.response.headers);
        } else if (error.request) {
          result = "failed";

          console.log(error.request);
        } else {
          result = "failed";

          console.log(error.message);
        }
        console.log(error.config);
      });
    return result;
  }

  async getCaseWithCountry() {
    var result = "";
    await axios
      .get("/getCaseWithCountry", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        proxy: {
          host: "http://127.0.0.1",
          port: 4000
        }
      })
      .then(function(response) {
        // console.log("response is : " + JSON.stringify(response.data));
        result = JSON.stringify(response.data);

        if (response.status == 200) result = response.data;
      })
      .catch(function(error) {
        if (error.response) {
          result = "failed";
          console.log(error.response.headers);
        } else if (error.request) {
          result = "failed";

          console.log(error.request);
        } else {
          result = "failed";

          console.log(error.message);
        }
        console.log(error.config);
      });
    return result;
  }
}

export default API;
