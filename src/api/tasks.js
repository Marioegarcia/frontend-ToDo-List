import { basePath, apiVersion } from "./config";


export function postTaskApi(task) {
  
  const url = `${basePath}/${apiVersion}/task`;
  const params = {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
    
      return { result };
    })
    .catch(err => {
      return { ok: false, message: err.message };
    });
}

export function getTasksApi() {
  
  const url = `${basePath}/${apiVersion}/task`;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      
    }
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err.message;
    });
}

export function deleteTasksApi(id) {
  
    const url = `${basePath}/${apiVersion}/task/${id}`;
  
    const params = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",

      }
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result;
      })
      .catch(err => {
        return err.message;
      });
}


export function doneTasksApi(id,action) {
  
  const url = `${basePath}/${apiVersion}/task/${id}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",

    },
    body: JSON.stringify(action),
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err.message;
    });
}


