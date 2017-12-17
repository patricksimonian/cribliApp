// ItemService.js

import axios from "axios";

class ItemService {
  sendData(data) {
    axios
      .post("http://localhost:8080/add-item", {
        item: data
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}

export default ItemService;
