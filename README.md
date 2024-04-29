# json-form
Create forms from a Json 

(WIP)

## Getting started

This simple example below creates a form with three inputs, one for entering text, another for entering a password, and the last one for entering an email.
There is also a button when you click on it, which will display a popup window (alert) where the values of username and password fields are displayed.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>TypeScript Web Component</title>
</head>
<script src="../dist-webpack/bundle.js"></script>
<body style="margin: 0;padding: 0;">
    <div class="wrapper" style="height:100vh">
      <c-form id="login" bodyjson='{
          "username": {
              "type": "text",
              "label": "User Name",
              "value": "Juan",
              "mandatory": false
            },
            "password": {
              "type": "password",
              "label": "Password",
              "value": "MyPassword",
              "mandatory": true
            },
            "email": {
              "type": "email",
              "label": "Email",
              "value": "myEmail@ggmail.com",
              "mandatory": true
            },
            "submit": {
              "type": "button",
              "label": "Submit",
              "actions": [{
                "methodname": "example",
                "parameters": {
                  "username": "${username}",
                  "password": "${password}",
                  "email": "email"
                }
              }]
            }
          }'
      ></c-form>
    </div>
</body>
<script>
   const appController = new AppController();
   const methods = appController.methodCollection;
   function example(password, email, username) {
     alert(password + " " + email + " " + username);
    }
   methods.add([example]);
   const formController = appController.getFormController("login");
   //get Values from the form identified by the id "login"
   let values = formController.getValues();
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

v 0.1.7 : 
Another Alternative, if you want to use web components, would be without using the jsonbody property of c-form, like this: 

-----------------------

```html
<c-form id="login">
    <c-input id="username" type="text" label="User name" value="Juan"></c-input>
    <c-input id="password" type="password" label="Password" value="MyPassword"></c-input>
    <c-input id="email" type="email" label="Email" value="myEmail@ggmail.com" mandatory="true"></c-input>
    <c-button id="submit" label="Submit" actions='[{
      "methodname": "example",
      "parameters": {
        "username": "${username}",
        "password": "${password}",
        "email": "email"
      }
    }]'></c-button>
</c-form>
```