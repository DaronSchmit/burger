# Fullstack Burger

## Description 

This project is focused around building and deploying a heroku project from scratch, front to back, using the MVC model. This specific project uses the example of burgers for fun and simplicity. 

## Installation

You can clone the files by forking the repository found athttps://github.com/DaronSchmit/burger. You'll have to run npm i to install the necessary dependencies, then use the command `node server.js` to run the server. Go to localhost:8080 on your browser to see it in action.

Additionally, you can skip the downloading and go straight to https://pure-springs-30503.herokuapp.com/ to see the webpage deployed live. You can then use the inspect tool to see the page's innards in-browser. 

## Usage 

A user submits a burger, which writes it to the db (generated using mysql and jawsdb) using a POST request. The website reloads and the burger will show up in the "Serve" column where a button will update it using a PUT request and reloading the page where the burger will be in the "eat" category. Clicking the eat button will update it in the db again, using another PUT request causing it to be removed from the page. Note: removing a burger from the webage does not delete it from the database, as that was out of the scope of the project. Anything entered as a burger will be able to be viewed by the developer.


## Credits

credit to the University of Minnesota coding bootcamp for the cat activity files which were a great resource. That activity's files are in a private gitlab, so I cannot share it. 
Special thanks to Charlie, the instructor, as well as Jake, Paul, and the other TAs for answering so many questions. Big shoutout to Kristina Hamilton https://github.com/Kay0s and Dimitri Dillard https://github.com/Meechlouch for their help troubleshooting this project.

## License

MIT License

Copyright (c) 2020 Daron Schmit

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

