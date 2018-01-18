import {queryUrl, exlusions} from 'utils/config';

export const getData = (parameters, callback) => {
  const queryString = `${queryUrl}${parameters.location[0]},${parameters.location[1]},${parameters.time}${exlusions}`
  let request = new XMLHttpRequest();
  request.open('GET', queryString, true);
  request.send();

  request.onreadystatechange = function(request){

    if(request.target.readyState === 4){
      let data = JSON.parse(request.target.response);
      console.log(data);
      callback(data);
    }
  };
}
