const axios = require("axios");

class VirtuSim {
  constructor() {
    this.apikey = "0Op2HL5nslTioVMFmxd1YqCNb6ZRI9";
    this.baseurl = "https://virtusim.com/api/json.php";
  }

  async Request(params) {
    let res = await axios(this.baseurl, {
      method: "GET",
      params: {
        api_key: this.apikey,
        ...params,
      },
    });
    return res.data;
  }

  async Services(country = "indo") {
    return await this.Request({
      action: "services",
      country: country,
    });
  }

  async OrderNumber(IDSERVICE) {
    return await this.Request({
      action: "order",
      service: IDSERVICE,
      operator: "any",
    });
  }

  async ChangeStatusNumber(id, status) {
    return await this.Request({
      action: "set_status",
      id,
      status,
    });
  }

  async CheckAllActiveNumber() {
    return await this.Request({
      action: "active_order",
    });
  }

  async CheckOrderStatus(id) {
    return await this.Request({
      action: "status",
      id,
    });
  }
}

const virtu = new VirtuSim();

module.exports = virtu;
