import imageCompression from "browser-image-compression";


const KB = 1024;
export const maxStoragePurchase = 10000

let debounce_timeout;

export const debounce = (fn,value)=>{
  // clear old timeout
  if(debounce_timeout) clearTimeout(debounce_timeout);

  // set new timeout
  debounce_timeout = setTimeout(() => {
    // execute the function after the timeout period
    fn(value);
  }, 700);
}


export const isEmpty = (obj) => {
    return (obj == null || Object.keys(obj).length === 0);
  };


export const asyncRequest = async (url, options, json = true) => {
    const pinia = useStore();
   return fetch(url, options)
   .then(response => {
     const statusCode = response.status;
     if(statusCode == 401){
       // if(pinia.currentNavMenu === 'home') return  pinia.state.isAuthenticated = false
       pinia.clearUser()
       navigateTo("/");
       return;
     }
     return json ? response.json() : response.text();
   })
   .then((data) => {
     return data;
   })
   .catch((error) => {
     return error;
   });
 };


 export const numberWithCommas = (number) =>{
    // Convert the number to a string
    let numStr = number.toString();
  
    // Split the string into integer and fractional parts
    let [integerPart, fractionalPart] = numStr.split('.');
  
    // Use a regular expression to add commas to the integer part
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Reconstruct the number with the modified integer part and the original fractional part
    return fractionalPart ? `${integerPart}.${fractionalPart}` : integerPart;
  }
  



 export const  handleNumApproximation =(num)=> {
    // Convert the number to a string in scientific notation
    let scientific = num.toExponential();
  
    // Extract the exponent part
    let exponent = parseInt(scientific.split('e')[1]);
  
    // Determine the number of decimal places based on the exponent
    let decimalPlaces;
    if (exponent < -5) {
      decimalPlaces = 8; // For very small numbers
    } else if (exponent > 5) {
      decimalPlaces = 2;  // For very large numbers
    } else if (exponent > -1) {
      decimalPlaces = 2;  // For very large numbers
    } else {
      decimalPlaces = 4;  // For numbers in between
    }
  
    // Use toFixed to format the number
    return numberWithCommas(num.toFixed(decimalPlaces));
  }


  export const compressImage = async (file) => {
    const options = {
      maxSizeMB: 0.1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
  
    // if (psgFunc) {
    //   options.onProgress = psgFunc;
    // }
  
    try {
      return await imageCompression(file, options);
    } catch (error) {
      return ["error", error?.message];
    }
  };
  
  export const  copyToClipboard =(text,symbol) =>{
    // Create a temporary textarea element to hold the text
    const textarea = document.createElement('textarea');
    
    // Set the text content of the textarea to the text you want to copy
    textarea.value = text;
    
    // Make the textarea not visible to the user
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    
    // Append the textarea to the document body
    document.body.appendChild(textarea);
    
    // Select the text content of the textarea
    textarea.select();
    
    // Execute the copy command
    document.execCommand('copy');
    
    // Remove the textarea element from the document
    document.body.removeChild(textarea);

    push.success(`Copied ${symbol} wallet address successfully`)
    
    console.log('Text copied to clipboard:', text);
  }

  