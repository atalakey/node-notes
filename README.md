# node-notes

A NodeJS app.

The app uses the Yargs library and the File System module to add, list, read and remove notes from a JSON file.

## App description (the app has four commands)

### Command 1 (add)
Allows the user to save a note with a unique title and a body.

### Command 2 (list)
Allows the user to list all saved notes.

### Command 3 (read)
Allows the user to read a note from a list of saved notes by searching for the note by it's title.

### Command 4 (remove)
Allows the user to remove a note from a list of saved notes by providing the note's title.

## Installation

Be sure to have NodeJS installed.

### Prerequisites:
```
You must have npm and nodejs installed.
```

### To install the prerequisites (macOS only)
```
1. Install Homebrew:

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. Install nodejs:

    brew install node
```

### To use the application:
``` 
1. Clone the project:

    git clone https://github.com/atalakey/node-notes.git ~/Desktop/node-notes

2. Navigate to where you cloned the project:

    cd ~/Desktop/node-notes

2. Install App local packages:

    npm install
```

## Run the App

```
node app.js add -t "some title" -b "some body"
node app.js list
node app.js read -t "some title"
node app.js remove -t "some title"
```

# Disclaimer:
This app is for demo purposes only.
