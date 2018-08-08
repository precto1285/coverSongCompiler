# coverSongCompiler

A songs library where a user can add, view, edit, and remove (CRUD). 

How to use the application:

1. Starting from the main page, there are four options on the navigation bar within the header. A stand alone button for each CRUD command ("Add Song", "Find Song", "Edit Song", & "Remove Song".

2. The "Add Song" button will open a form with 3 inputs for the user to fill.
    a. First input: songTitle ['string', *]
    b. Second input: songArtist ['string', *]
    c. Third input: songGenre ['string', *]
    d. Fourth input: songLyrics ['string', *]

        *All inputs must be filled in order to click on "Submit" button or pressing "Enter" key. 

3. Once data is stored, the user can call on each song entered by clicking on the "Find Song" button. Within this category, the user can search a song by 3 input types: songTitle, SongArtist, & songGenre. An additional button on the screen titled "All Songs" will return all inputted songs.

    a. If a user searches with 1 category and there are multiple duplicate data within it, the "Search" button will return multiple collections of data [JSON]. Same happens for duplicate data if multiple form inputs are filled. 
    b. If there are no matches when user enters "Search" button, the computer will return notification "No Songs Found".

4. When user chooses "Edit Song" from the navigation bar, The same 3 input types starts in the page empty. Each listed song that appears from the user search will return along with 4 additional buttions: "title", "artist", "genre", and "lyrics". Each button will open the input form with the previously entered string within it. The user can than edit over the text and press the "save" button.

5. When user chooses "Remove Song" from the navigation bar, The 3 input types reset to empty and the user can than search for a specific song title, genre, artist and pull up the list of songs matching the request. each song in the list will appear with an "X" button to delete the file. Once clicked, the an alert pop up will return to confirm action. Two additional buttons appear "Cancel", and "REMOVE".

