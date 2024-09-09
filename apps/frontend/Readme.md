## Authentication

Authentication in frontend is implemented using third party library React-Auth-Kit.

However the on the day when i have implemented the authentication, there was an issue in the library. It doesnot render the component/ application immediately after perfoming authentication related changes. User was required to reload the application in order to see the authentication successful.

So to overcome this rendering issue, i have used Redux which renders the application correctly on Signin and Signout operation of user.
