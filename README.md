# Lab 8 - Starter
## Xuechen (Daniel) Kan with no partner

### Questions
1.  1, `Within a Github action that runs whenever code is pushed,` this is because we want to adopt the use of automation testing, in which scripts are written to automatically test your new and existing software based on certain events. In this case, it is the event of being pushed. 

2. No, that is the unit test part. 

3. We shouldn't use unit test for 'message' function, because messaaging require more than unit test, which is only testing the output of funcitons. In this case, we need to test the entire page as a whole using the same format in the first part of this lab (E2E).
   
4. Yes, a unit text would be enough to test a function, an example would be `expect(maxMessageLength("hahaha")).toBe(true);` assuming we are checking the length of message to be less than 80 characters. 