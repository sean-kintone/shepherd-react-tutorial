// postRecord.js - Passes the POST API request from React to Express server

// Connect with the Express server
const addRecordEndpoint = 'http://localhost:5050/postData';

async function PostRecord(onboardingStatus) {

  /* Pass the POST API request from React to Express server */
  // - - - - - - - START - - - - - - - -

  const recordBodyParameters = {
    'completed': onboardingStatus.completed,
    'percent': onboardingStatus.percent
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recordBodyParameters)
  }

  const response = await fetch(addRecordEndpoint, options);
  const jsonResponse = await response.json();

  console.log(JSON.stringify(jsonResponse));

  return jsonResponse;

  // - - - - - - - END - - - - - - - - -
};

export default PostRecord;