## Shopping List
App created with MERN stack.
Following Traversy Media tut.

Master branch is ready to be deployed to heroku app.

## Prerequisites
- [Account on Heroku](heroku.com)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- [MongoDB Account](https://cloud.mongodb.com/user#/atlas/login) or another mongodb service

## How to deploy - Step-by-step
If you came accross some error create an issue :)

Firstly you need a Mongo database. I would suggest creating a cluster at mongodb.com since I am also using this service. After creating account and/or cluster click on `connect` then click on `Connect Your Application` and select `Node.js` as driver (version 3.0 or later). Then copy the `Connection String Only`. This will be your value for DB key on Heroku app -explained below.
If you are asked to type in a name of collection during creation of database, type in `shopping-list`. There is a bug if you do not type this. This bug is fixed in develop branch and will be merged into master in later commits.

In terminal type these commands (in order shown below)
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
Value: `mongodb+srv://<user>:<password>@cluster0.mongodb.net/<nameofdatabase>?ssl=true&authSource=admin`
  
While in your heroku app dashboard click on `Open app`. 

Done! Now go! Prepare your shopping list for your next trip to the mall :blush:
