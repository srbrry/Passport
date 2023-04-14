<h1 align="center">Passport</h1>

<div align="center">
  <h3>
    <a href="https://passport-7k56.onrender.com/">
      Website
    </a>
    <span> | </span>
    <a href="https://docs.google.com/presentation/d/1rvcr-buYfBZFSCqZEOmnaqw9-EmvTFUklsb2EMRC8g8/edit#slide=id.p">
      Pitch Deck
    </a>
  </h3>
</div>


## Description

*Passport* is a travel journaling app for those who take their travel seriously. A digital scrapbook of sorts, *Passport* lets you log the trips you've taken, as well certain details like notes, date traveled, and more!

The app was born from a mutual love for travel shared by everyone involved in creating the app. If you've ever dreamed of being able to keep note of all the memories of your vacations without the hassle of having to have a physical notebook or journal, this is the app for you.

The design team even made sure to make the app itself shaped like a passport to speak to this desire of wanting an authentic scrapbooking experiences. Consider ever entry in your *Passport* app like a stamp in your real passport!

## Login Page
![Log In Page](assets/LogIn.png)


## Sign Up Page
![Sign Up Page](assets/SignUp.png)


## Locations Page
![Locations Page](assets/MyDestinations.png)


## Destination Detail Page
![Destination Detail](assets/DestinationDetail.png)

## ERD
![ERD](assets/ERD.jpeg)


# Technologies Used

Javascript | HTML | CSS | React.js | Mongoose | MongoDB | Nodemon | Express | Cors | Passport | Passport-Jwt | Node

#  Routes 
| Name | Path | Http Verb | Purpose |
| --- | --- | --- | --- |
| Index | /api/locations | GET | Get all locations |
| Show | /api/locations/:id | GET | Get one location |
| Create | /api/locations | POST | Create one location |
| Update | /api/locations/:id | PATCH | Update one location |
| Delete | /api/locations/:id | DELETE | Delete one location |
| Create | /api/notes | POST | Create one note |
| Update | /api/notes/:id | PATCH | Update one note |
| Delete | /api/notes/:id | DELETE | Delete one note |
| Sing Up | /api/users | POST | Create a user and token |
| Log In | /api/users/login | POST | Log in and create token |

## User Stories
Version 2
- As a user, I want to be able to add a wishlist.
- As a user, I want to be able to update the wishlist.
- As a user, I want to be able to delete from the wishlist.
- As a user, I want to be able to move locations from the wishlist. to the locations list.

Version 3
- As a user, I want to see an interactive map of places I have been to.
- As a user, I want to be able to rate my locations .
- As a user, I want to see my locations based on the ratings.