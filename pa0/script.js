
		function runEncrypt(isDecrypt){                                // runs when button is pressed
			var shift = document.getElementById("key").value;        //get key value
			var plaintext = document.getElementById("plaintext").value;
            			
			if(plaintext.length==0){                                       //if input is empty
				alert("Plaintext/Ciphertext field cannot be empty!");
				return;
		}
			var key = parseInt(shift, 10);                    
			
		if (isDecrypt)                                 //if selected decrypt
			key = (26 - key) % 26;
			var plaintext = document.getElementById("plaintext");
			document.getElementById("ciphertext").value = caesarShift(plaintext.value, key);
		
	}
		
		

		function caesarShift(text, shift) {
			var ciphertext = "";
			
			for (var i = 0; i < text.length; i++){
				var ch = text.charCodeAt(i);
				
				if(65 <= ch && ch <=  90) {
					ciphertext += String.fromCharCode((ch - 65 + shift) % 26 + 65); // for Uppercase Unicode
				} 
				else if(97 <= ch && ch <= 122){
					ciphertext += String.fromCharCode((ch - 97 + shift) % 26 + 97);  // for Lowercase Unicode
				}
				else{
					ciphertext += text.charAt(i);
				}
		}
		return ciphertext;
	}  