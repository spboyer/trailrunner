#Getting Started
1. Go to http://get.asp.net to get the ASP.NET 5 runtime installed

#Creating a Project
Yeoman Generator

Install using npm
```
npm install -g yo generator-aspnet
```

Create a Web API Project

```
$ yo aspnet

? What type of application do you want to create? Web API Application
? What's the name of your ASP.NET application? (WebAPIApplication) trailrunner
```

Restore the ASP.NET dependencies from nuget
```
dnu restore or dotnet restore
```

Add PeopleController
```
$ cd Controllers
$ yo aspnet:MvcController PeopleController
```

* Add the runner Class
* Add the code for RunnerController
* Add the routes for [HttpGetAttribute]
