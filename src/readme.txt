after starting the server, if you face "Cross Origin" error in the console window...
For window user only with chrome installed:

1) Press ( window + R ),to use Run Command

2) paste : 
	chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security  
	
	 ... in the input box
	 now a security disabled version of chrome will run

3) type : localhost:4200 in the address bar