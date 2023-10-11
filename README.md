# Concert Labs

Link to application - concert-labs.vercel.app

NOTE: Code is very obscure, working on improving it

## Running the App Locally

Clone the repository and install its dependencies running:

    $ npm install

### Using your own credentials

You will need to register your app and get your own credentials from the Spotify for Developers Dashboard.

To do so, go to [your Spotify for Developers Dashboard](https://beta.developer.spotify.com/dashboard) and create your application. In my own development process, I registered these Redirect URIs:

- http://localhost:3000 (needed for the implicit grant flow)

Then, open `http://localhost:3000` in a browser.

### What I'm working on right now

Refactoring the code

Removing the reload bug on the generate page

Fixing the issue with redundant Node modules
