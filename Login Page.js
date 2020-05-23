API Key = aJFRaLHjMXvYZgLPwiJkroYLGRkNBW

<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>File Cube's BCFT System</title>

    <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
    <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
    <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
    <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
    <link rel="stylesheet" type="text/css" href="css/util.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
</head>

<body>

    <div class="limiter">
    <div class="container-login100">
    <div class="wrap-login100">
    <div class="login100-pic js-tilt" data-tilt><img src="images/filecubelogo.png" alt="IMG">
    </div>

<h1>Member Login</h1>

<div>
    <a class="login100-form-btn">Home</a>
    </div>

<!-- 
This .jsp calls the "UserProfile" servlet at the point in which the user 
input's their username and password into the form's text fields
-->

<form class="login100-form validate-form" action="UserProfile" method="post">

<div class="wrap-input100 validate-input" data-validate = "Valid username is required: FileCubeUser100">

    Username: EMarseille99
    
    <span class="focus-input100"></span>
    <span class="symbol-input100">
    <i class="fa fa-chain" aria-hidden="true"></i>
    </span>
    
</div> 


<div class="wrap-input100 validate-input" data-validate = "Password is required">

    Password: UGljYXNzb0JhZ3VldHRlOTk=
    Password(base64)
    
    <span class="focus-input100"></span>
    <span class="symbol-input100">
    <i class="fa fa-lock" aria-hidden="true"></i>
    </span>
</div>

<div>
    <input class="login100-form-btn" type="submit" value="Login">
</div>

</form>

</body>

</html>
