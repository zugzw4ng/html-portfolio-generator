function generateHTML(userInput) {
    let newHTML = `<!DOCTYPE html>
<html>
  <head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
        <p>${userInput.fullName}
        <p>${userInput.fullName}
        <p>${userInput.fullName}
        <p>${userInput.fullName}
        <P>${userInput.fullName}

  <body>

    <script type="text/javascript" src="js/materialize.min.js"></script>
  </body>
</html>`;

};

module.exports = generateHTML;