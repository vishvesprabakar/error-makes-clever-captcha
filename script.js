function generateCaptchaString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaString = '';
    for (let i = 0; i < length; i++) {
      captchaString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captchaString;
  }
  
  function generateCaptcha() {
    const captchaElement = document.getElementById('captcha');
    const userInputElement = document.getElementById('userInput');
    const resultElement = document.getElementById('result');
  
    const captchaString = generateCaptchaString(6);
  
    captchaElement.innerText = captchaString;
  
    // Clear input
    userInputElement.value = '';
    resultElement.innerText = '';
  }
  
  function verifyCaptcha() {
    const captchaElement = document.getElementById('captcha');
    const userInputElement = document.getElementById('userInput');
    const resultElement = document.getElementById('result');
  
    const captchaString = captchaElement.innerText;
    const userInput = userInputElement.value;
  
    // Verification output
    if (userInput === captchaString) {
      resultElement.innerText = 'CAPTCHA verified!';
    } else {
      resultElement.innerText = 'CAPTCHA verification failed. Please try again.';
    }
  }
  
  // Generate a CAPTCHA on page load
  generateCaptcha();
  