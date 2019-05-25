## Shopping List
App created with MERN stack.
Following Traversy Media tut.

Master branch is ready to be deployed to heroku app.

## How to deploy - Step-by-step
If you came accross some error create an issue :)
In terminal
- `git clone` this repo
- `cd` into the cloned repo
- `heroku login` -  login to your heroku account
- `heroku create` - this will create an app of some sort on your heroku acc.
- `heroku git:remote <name of the created heroku app>`
- `git push heroku master` - push into the heroku repo
This will build an app on your acc.
- Since I am using env variables you need to go into your heroku app -> settings -> Config Vars
- In there click on reveal config vars
- Add new key `DB` (all caps) with value of your mongodb URI
For [example](https://docs.atlas.mongodb.com/driver-connection/#connect-your-application)
Key: DB
Value: mongodb+srv://<user>:<password>@cluster0.mongodb.net/<nameofdatabase>?ssl=true&authSource=admin
While in your heroku app dashboard click on `Open app`. 
Done!
Now you are good to go.
