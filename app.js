const express = require("express");

const app = express();

const data = {
  data: {
    board: {
      _id: "board-id-01",
      title: "Phan Hai MERN Stack Board",
      description: "Pro MERN stack Course",
      type: "public",
      ownerIds: [],
      memberIds: [],
      columnOrderIds: [
        "column-id-01",
        "column-id-02",
        "column-id-03",
        "column-id-04",
      ],
      columns: [
        {
          _id: "column-id-01",
          boardId: "board-id-01",
          title: "To Do Column 01",
          cardOrderIds: [
            "card-id-01",
            "card-id-02",
            "card-id-03",
            "card-id-04",
            "card-id-05",
            "card-id-06",
            "card-id-07",
          ],
          cards: [
            {
              _id: "card-id-01",
              boardId: "board-id-01",
              columnId: "column-id-01",
              title: "Title of card 01",
              description: "Markdown Syntax (sẽ ở khóa nâng cao nhé)",
              cover:
                "https://images.unsplash.com/photo-1550935114-99de2f488f47?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              memberIds: ["test-user-id-01"],
              comments: ["test comment 01", "test comment 02"],
              attachments: [
                "test attachment 01",
                "test attachment 02",
                "test attachment 03",
              ],
            },
            {
              _id: "card-id-02",
              boardId: "board-id-01",
              columnId: "column-id-01",
              title: "Title of card 02",
              description: null,
              cover: null,
              memberIds: [],
              comments: [],
              attachments: [],
            },
            {
              _id: "card-id-03",
              boardId: "board-id-01",
              columnId: "column-id-01",
              title: "Title of card 03",
              description: null,
              cover: null,
              memberIds: [],
              comments: [],
              attachments: [],
            },
            {
              _id: "card-id-04",
              boardId: "board-id-01",
              columnId: "column-id-01",
              title: "Title of card 04",
              description: null,
              cover: null,
              memberIds: [],
              comments: [],
              attachments: [],
            },
            {
              _id: "card-id-05",
              boardId: "board-id-01",
              columnId: "column-id-01",
              title: "Title of card 05",
              description: null,
              cover: null,
              memberIds: [],
              comments: [],
              attachments: [],
            },
            {
              _id: "card-id-06",
              boardId: "board-id-01",
              columnId: "column-id-01",
              title: "Title of card 06",
              description: null,
              cover: null,
              memberIds: [],
              comments: [],
              attachments: [],
            },
            {
              _id: "card-id-07",
              boardId: "board-id-01",
              columnId: "column-id-01",
              title: "Title of card 07",
              description: null,
              cover: null,
              memberIds: [],
              comments: [],
              attachments: [],
            },
          ],
        },
        {
          _id: "column-id-02",
          boardId: "board-id-01",
          title: "Inprogress Column 02",
          cardOrderIds: ["card-id-08", "card-id-09", "card-id-10"],
          cards: [
            {
              _id: "card-id-08",
              boardId: "board-id-01",
              columnId: "column-id-02",
              title: "Title of card 08",
              description: null,
              cover: null,
              memberIds: [],
              comments: [],
              attachments: [],
            },
            {
              _id: "card-id-09",
              boardId: "board-id-01",
              columnId: "column-id-02",
              title: "Title of card 09",
              description: null,
              cover: null,
              memberIds: [],
              comments: [],
              attachments: [],
            },
            {
              _id: "card-id-10",
              boardId: "board-id-01",
              columnId: "column-id-02",
              title: "Title of card 10",
              description: null,
              cover: null,
              memberIds: [],
              comments: [],
              attachments: [],
            },
          ],
        },
        {
          _id: "column-id-03",
          boardId: "board-id-01",
          title: "Done Column 03",
          cardOrderIds: ["card-id-11", "card-id-12", "card-id-13"],
          cards: [
            {
              _id: "card-id-11",
              boardId: "board-id-01",
              columnId: "column-id-03",
              title: "Title of card 11",
              description: null,
              cover: null,
              memberIds: [],
              comments: [],
              attachments: [],
            },
            {
              _id: "card-id-12",
              boardId: "board-id-01",
              columnId: "column-id-03",
              title: "Title of card 12",
              description: null,
              cover: null,
              memberIds: [],
              comments: [],
              attachments: [],
            },
            {
              _id: "card-id-13",
              boardId: "board-id-01",
              columnId: "column-id-03",
              title: "Title of card 13",
              description: null,
              cover: null,
              memberIds: [],
              comments: [],
              attachments: [],
            },
          ],
        },
        {
          _id: "column-id-04",
          boardId: "board-id-01",
          title: "Empty Column 04",
          cardOrderIds: ["card-id-04-placeholder-card"],
          cards: [
            {
              _id: "card-id-04-placeholder-card",
              boardId: "board-id-01",
              columnId: "column-id-04",
              FE_PlaceholderCard: true,
            },
          ],
        },
      ],
    },
  },
};

app.use(express.json());

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.json(data);
});

app.listen(3000, () => console.log("connect"));
