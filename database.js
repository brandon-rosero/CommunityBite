// -------------------------------------------------------------
// File Name: database.js
// Description: Contains functions to easily read/write to Firebase database from other .js files.
//
// Author: Joshua Hontanosas
// -------------------------------------------------------------

import { db } from './firebaseConfig.js'
import { collection, addDoc, getDocs } from "firebase/firestore"

// addFoodListing() - Adds a document to the 'foodListings' collection.
// Parameter(s): string _productName, int _quantity, string _location
// Return value(s): N/A
export async function addFoodListing(_fullname, _phonenumber, _donationtype, _address, _latitude, _longitude, _donationmethod, _listofitems){
  const doc = await addDoc(collection(db, "foodListings"), {
      fullname: _fullname,
      phonenumber: _phonenumber,
      donationtype: _donationtype,
      address: _address,
      latitude: _latitude,
      longitude: _longitude,
      donationmethod: _donationmethod,
      listofitems: _listofitems
    })
    .then(function() {
      console.log("Product added!");
      return 1; // Indicate success
    })
    .catch(function(error){
      console.error("Error writing document for foodListings: ", error);
      return -1;  // Indicate error
    });
}
// export async function addFoodListing(_productName, _quantity, _location){
//     const doc = await addDoc(collection(db, "foodListings"), {
//         productName: _productName,
//         quantity: _quantity,
//         location: _location
//       })
//       .then(function() {
//         console.log("Product added!");
//       })
//       .catch(function(error){
//         console.error("Error writing document for foodListings: ", error);
//       });
// }

// getFoodListings() - Retrieves all entries in 'foodListings'
// Parameter(s): N/A
// Return Value(s): 2D-array of food listings.
export async function getFoodListings(){ 
  foodListingArray = [] // Stores food listing entries in an array.
  console.log("-- FOOD LISTINGS -- ")
  const querySnapshot = await getDocs(collection(db, "foodListings"));  // Get QuerySnapshot of 'foodListings'
    querySnapshot.forEach((doc) =>{ // Print each food listing to console.
      // Store document data into local variables
      productName = doc.data().productName
      quantity = doc.data().quantity
      location = doc.data().location
      // Display values to console
      console.log("- Product Name:", productName, "| Quantity:", quantity, "| Location:", location)
      // Add entry to the food listing array
      foodListingArray.push([productName, quantity, location])
    });
    //return foodListingArray   // Return array
}

// addForumPost() - Add message to 'forumMessages' collection.
// Parameter(s): string _user, string _subject, string _message
// Return value(s): N/A
export async function addForumPost(_user, _subject, _message){
  const doc = await addDoc(collection(db, "forumMessages"), {
      user: _user,
      subject: _subject,
      message: _message
    })
    .then(function() {
      console.log("Message added!");
    })
    .catch(function(error){
      console.error("Error writing document for forumMessages: ", error);
    });
}

// getForumPosts() - Retrieves all entries in 'forumMessages'
// Parameter(s): N/A
// Return Value(s): 2D-array of forum messages.
export async function getForumPosts(){ 
  forumMessagesArray = [] // Stores forum entries in an array.
  console.log("-- FORUM POSTS -- ")
  const querySnapshot = await getDocs(collection(db, "forumMessages"));  // Get QuerySnapshot of 'forumMessages'
    querySnapshot.forEach((doc) =>{ // Print each forum message to console.
      // Store document data into local variables
      user = doc.data().user
      subject = doc.data().subject
      message = doc.data().message
      // Display values to console
      console.log("- User Name:", user, "| Subject:", subject, "| Message:", message)
      // Add entry to the forum messages array
      forumMessagesArray.push([user, subject, message])
    });
    //return forumMessagesArray   // Return array
}
