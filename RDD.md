## Features

  - Ability to create an ask.
  - Ability to reject a specific ask.
  - Ability to accept a specific ask.
  - Ability to update an ask (question and askee).
  - Display a list of asked questions.
  - Display a running score.

## Data Store

We can write pure function reducers without installing redux just yet.

- Data requirements
    - List of asks.

- Operations
    - Setters
        - Create an ask.
        - Update an ask.
        - Reject an ask.
        - Accept an ask.

    -  Getters
         - Return all asks.
         - return an ask by id.
         - calculate score

## View

One page is sufficient

- Tab to display list of asks
- Tab to display score
- CRUD tab
      - create
      - edit
      - reject
      - accept
