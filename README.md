# json-form
Create forms from a Json 

(WIP)

## Getting started

This simple example below creates a form with two inputs, one for entering text and another one for entering a password

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>TypeScript Web Component</title>
</head>
<script src="dist-webpack/bundle.js"></script>
<body>
    <c-form id="login" bodyjson='{
        "username": {
            "type": "text",
            "label": "User Name:",
            "value": "Juan",
            "required": true
          },
          "password": {
            "type": "password",
            "label": "Password :",
            "value": "MyPassword",
            "required": true
          }
        }'
    ></c-form>
</body>
<script>
   const formController = new __.FormController("login");
   //get Values from the form identified by the id "login"
   let values = Object(formController.getValues());
   console.log(values);
   //edit the values of the form called login in 5 seconds for you can see the changes. The username value will change of "Juan" to "Carlos"
   setTimeout(function() {
    values.username = "Carlos";
    formController.setValues(values);
    // get the values of the form after the edit
    console.log(formController.getValues());
  }, 5000);
</script>
</html>
```
-----------------------