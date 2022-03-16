let db;
// const newUser = [
//   {
//     name: '',
//     lastName: '',
//     email: '',
//     score: 0,
//   },
// ];

function displayUsersData() {
  // first clear the content of the users list so that we don't get
  // a huge long list of duplicate stuff each time
  // the display is updated.
  // while (usersList.firstChild) {
  //   usersList.removeChild(usersList.lastChild);
  // }

  const usersStore = db.transaction('match-match-DB').objectStore('match-match-DB');

  usersStore.openCursor().onsuccess = function (event) {
    const cursor = event.target.result;
    // if there is still another cursor to go, keep runing this code
    if (cursor) {
      // build the to-do list entry and put it into the list item.
      // const newUserData = `${cursor.value.name}, ${cursor.value.lastName},
      //  ${cursor.value.email}, ${cursor.value.score}`;
      // const singleUser = createUsersList(newUserData);

      if (cursor.value.notified === 'yes') {
        // listItem.style.textDecoration = "line-through";
      }

      // put the user inside the users list
      // usersList.appendChild(singleUser);

      // deleteButton.onclick = function (event) {
      //   deleteUser(event);
      //   // continue on to the next item in the cursor
      //   cursor.continue();

      //   // if there are no more cursor items to iterate through, say so, and exit the function
      // };
    } else {
      console.log('Entries all displayed.');
    }
  };
}

window.onload = function () {
  console.log('App initialised.');
  const DBOpenRequest = window.indexedDB.open('match-match-DB', 4);
  DBOpenRequest.onerror = function () {
    console.log('Error loading database.');
  };

  DBOpenRequest.onsuccess = function () {
    console.log('Database initialised.');

    // store the result of opening the database in the db variable. This is used a lot below
    db = DBOpenRequest.result;

    // Run  function to populate users list with all users data already in the IDB
    displayUsersData();
  };
};

// function addData(e) {
//   // prevent default - we don't want the form to submit in the conventional way
//   e.preventDefault();

//   // open a read/write db transaction, ready for adding the data
//   const transaction = db.transaction(['toDoList'], 'readwrite');

//   // report on the success of the transaction completing, when everything is done
//   transaction.oncomplete = function () {
//     console.log('Transaction completed: database modification finished.');

//     // update the display of data to show the newly added item, by running displayData() again.
//     // displayData();
//   };

//   transaction.onerror = function () {
//     console.log(`Transaction not opened due to error: ${transaction.error}`);
//   };

//   // call an object store that's already been added to the database
//   const objectStore = transaction.objectStore('match-match-DB');
//   console.log(objectStore.indexNames);
//   console.log(objectStore.keyPath);
//   console.log(objectStore.name);
//   console.log(objectStore.transaction);
//   console.log(objectStore.autoIncrement);

//   // Make a request to add our new user object to the object store
//   const objectStoreRequest = objectStore.add(newUser[0]);
//   objectStoreRequest.onsuccess = function () {
//     // report the success of our request
//     // (to detect whether it has been succesfully
//     // added to the database, you'd look at transaction.oncomplete)
//     console.log('Request successful.');

//     // clear the form, ready for adding the next entry
//    newUser = [
//   {
//     name: '',
//     lastName: '',
//     email: '',
//     score: 0,
//   },
// ];
//   };
// }
