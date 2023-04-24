import CryptoJS from 'crypto-js';

// Encrypt data
export const encryptData = (data, secretKey) => {
  const encryptedData = CryptoJS.AES.encrypt(data, secretKey);
  return encryptedData.toString();
};

// Decrypt data
export const decryptData = (encryptedData, secretKey) => {
  const decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return decryptedData.toString(CryptoJS.enc.Utf8);
};
