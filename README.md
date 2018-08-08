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

3. Once data is stored, the user can call on each song entered by clicking on the "Find Song" button. Within this category, the user can search a song by 3 input types: songTitle, SongArtist, & songGenre.

    a. If a user searches with 1 category and there are multiple duplicate data within it, the "SEARCH" button will return multiple collections of data [JSON]. Same happens for duplicate data if multiple form inputs are filled. 
    b. If there are no matches when user enters "SEARCH" button, the computer will return notification "No Songs Found".

4. When user chooses "Edit Song" from the navigation bar, 
