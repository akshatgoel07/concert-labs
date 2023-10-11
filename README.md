# Concert Labs

Link to application - concert-labs.vercel.app/

NOTE: This code is admittedly not super clean as I was in quite a time crunch when I originally wrote it and never got the chance to really go back and fix everything, so sorry in advance! Despite this, I am making it public as a few people have asked me about it :) When I have time, I hope to refactor & clean this up though!

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

Removing reload bug on generate page

Fixing the issue with redundant Node modules
