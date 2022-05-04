import React, { useState } from "react";
import axios from "axios";
import "style.css";
import "requests";

function App() {



CLIENT_ID = 'yourclientid'
CLIENT_SECRET = 'yourclientsecret'

  

  /*

  CLIENT_ID = "9416a3648ff34ebf98a5ea7ff927c732";
  CLIENT_SECRET = "89d705a1f05e49a7ad054be859027c2f";


  AUTH_URL = 'https://accounts.spotify.com/api/token'

  auth_response = requests.post(AUTH_URL, {
      'grant_type': 'client_credentials',
      'client_id': CLIENT_ID,
      'client_secret': CLIENT_SECRET,
  })

  auth_response_data = auth_response.json()

  access_token = auth_response_data['access_token']

  headers = {
    'Authorization': 'Bearer {token}'.format(token=access_token)
}

  BASE_URL = 'https://api.spotify.com/v1/'

  track_id = '6y0igZArWVi6Iz0rj35c1Y'

  r = requests.get(BASE_URL + 'audio-features/' + track_id, headers=headers)

  r = r.json()

  return (
    <div>
      <p>r</p>
    </div>
  );  */

  /* 
  fetch(‘https://rickandmortyapi.com/api/character/’)
   .then(response => response.json())
   .then(characters => showCharacters(characters.results));   */
      
   /* function fetchData() {
      const options = {
        CLIENT_ID: "9416a3648ff34ebf98a5ea7ff927c732";
        CLIENT_SECRET: "89d705a1f05e49a7ad054be859027c2f";
        method: "HOST",
        url: "api.spotify.com",
        headers: {
          "content-type": "application/json",
        },
        data: {
          language: "english",
          text: text
        }
      };
  
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  
    return (
      <div>
      </div>
    );  */
  } 
  export default App; 

