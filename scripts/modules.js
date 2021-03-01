const fs = require('fs');

const htmlBase = () => {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" 
    crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/style.css">
    <title>Team Organisation Chart</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Team Organisation Chart</h1>
      </div>
    </div>
    <div class="container main">
  `;
  fs.writeFile('index.html', html, err => {
    if (err) {
      console.log(err);
    }
  });
};

const htmlProfiles = (role, response) => {
  // return new Promise((resolve, reject) => {
    let profile = '';
    if (role === 'Manager') {
      profile = `
      <!-- Manager profile -->
      <div class="container main">
        <div class="box rounded">
          <div class="title-box">
            <h5 class="name">Name: ${response.name}</h5>
            <h5 class="role">Role: ${role}</h5>
          </div>
          <div class="details">
            <table class="table table-dark">
              <tbody>
                <tr>
                  <td scope="row">ID: ${response.id}</td>
                </tr>
                <tr>
                  <td scope="row">Email: ${response.email}</td>
                </tr>
                <tr>
                  <td scope="row">Phone: ${response.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>  
      `;
    } else if (role === 'Engineer') {
      profile = `
        <!-- Engineer profile -->
        <div class="box rounded">
          <div class="title-box">
            <h4 class="name">Name: ${response.name}</h4>
            <h4 class="role">Role: ${role}</h4>
          </div>
          <div class="details">
            <table class="table table-dark">
              <tbody>
                <tr>
                  <td scope="row">ID: ${response.id}</td>
                </tr>
                <tr>
                  <td scope="row">Email: ${response.email}</td>
                </tr>
                <tr>
                  <td scope="row">Github: ${response.git}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        `;
    } else if (role === 'Intern') {
      profile = `
        <!-- Intern profile -->
        <div class="box rounded">
          <div class="title-box">
            <h4 class="name">Name: ${response.name}</h4>
            <h4 class="role">Role: ${role}</h4>
          </div>
          <div class="details">
            <table class="table table-dark">
              <tbody>
                <tr>
                  <td scope="row">ID: ${response.id}</td>
                </tr>
                <tr>
                  <td scope="row">Email: ${response.email}</td>
                </tr>
                <tr>
                  <td scope="row">School: ${response.school}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>  
      `;
    }
  
    fs.appendFile('index.html', profile, error => {
      if (error) {
        return (error);
      }
    });
  // });
};

const htmlEnd = () => {
  const end = `  
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" 
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" 
    crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" 
    integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" 
    crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" 
    integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" 
    crossorigin="anonymous"></script>
  </body>
  </html>
  `;
  fs.appendFile('index.html', end, error => {
    if (error) {
      return (error);
    }
  });
};

module.exports = { htmlBase, htmlProfiles, htmlEnd };

