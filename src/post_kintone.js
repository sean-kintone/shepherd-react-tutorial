const { KintoneRestAPIClient } = require("@kintone/rest-api-client");

async function postKintone(score) {
  const token = "AN0VJ6l2AgvWLcQ8675BpWX8QxWCQfMhKcKtQ42G";
  const id = "36";
  console.log("ready to fetch");
  const kintone = new KintoneRestAPIClient({
    baseUrl: "https://sean.kintone.com",
    auth: { apiToken: token }
  });
  var body = {
    'app': id,
    'records': [
      {
        'score': {
          'value': score
        }
      }
    ]
  };
  kintone.api('https://sean.kintone.com/k/v1/records', 'POST', body, function (resp) {
    // success
    console.log(resp);
  }, function (error) {
    // error
    console.log(error);
  });
}

export default postKintone;