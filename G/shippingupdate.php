<?xml version="1.0" encoding="UTF-8" ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<?php session_start(); ?>
<head>
    <title>G! - Home</title>
    <meta http-equiv="Content-Type" content="text/html; UTF-8" />
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <link rel="stylesheet" href="css/form.css" type="text/css" />
    <script type="text/javascript" src="js/jquery.js"></script>
    <script src="js/valide.js"></script>

</head>

<body>
	<div class="navbg" >
		<ul id="nav"> 
			 <li><a href="index.php">Home</a></li> 
			 <li><a href="http://www.divcss5.com/html/">Shipping</a></li> 
			 <li><a href="http://www.divcss5.com/rumen/">Billing</a></li> 
			 <li><a href="postinfo.php">Accout info</a></li> 
			 <li><a href="http://www.divcss5.com/css-texiao/">Readme</a></li> 
		</ul>
	</div> 
	<div class="contain">
                <h1>Update Shipping Infomation</h1>
                <?php if(empty($_SESSION['username'])){ ?>
                 You must login firstly!
                <?php }else{ ?>
		<div class="infoleft">
			<form action="shippingback.php" method="post" class="basic-grey" id="Form" name="Form">
				<label>
				<span>Address Name :</span>
				<input id="addressid" type="text" name="addressid" value="<?php echo $_GET['addressid']; ?>" readonly="true" />
				</label>
				<label>
				<span>Name :</span>
				<input id="name" type="text" name="name" value="<?php echo $_GET['name']; ?>" required />
				</label>
				<label>
				<span>Address1 :</span>
				<input id="address1" type="text" name="address1" value="<?php echo $_GET['address1']; ?>" required />
				</label>
				<label>
				<span>Address2 :</span>
				<input id="address2" type="text" name="address2" value="<?php echo $_GET['address2']; ?>" required />
				</label>
				<label>
				<span>City :</span>
				<input id="city" type="text" name="city" value="<?php echo $_GET['city']; ?>" required />
				</label>
				<label>
				<span>State :</span>
				<input id="state" type="text" name="state" value="<?php echo $_GET['state']; ?>" required />
				</label>
				<label>
				<span>Zip :</span>
				<input id="zip" type="digits" name="zip" value="<?php echo $_GET['zip']; ?>" required />
				</label>
				<label>
				<span>&nbsp;</span>
				<input type="submit" class="button" value="Update" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</label>
			</form>
		</div>
		<?php 
                  } 
                 ?>
	</div>

</body>
</html>
