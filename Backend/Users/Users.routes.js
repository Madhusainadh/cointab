const { default: axios } = require("axios");
const express = require("express");
const Users = require("./Post.model");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    const newUsers = await Users.find({}).limit(100);
    if (newUsers) return res.send(newUsers);
    else {
      return res.send("Nothing is there yet");
    }
  } catch (e) {
    res.status(500).send(e.message);
  }

});
app.get("/filter", async (req, res) => {
try {
  const page = parseInt(req.query.page) - 1 || 0;
  const limit = parseInt(req.query.limit) || 5;
  const search = req.query.search || "";
  let sort = req.query.sort || "rating";
 

  const check = await Users.find({ })
  if(check.length==0){
   let {data}= await axios.get("https://randomuser.me/api/?results=100")
    await Users.insertMany(data.results).limit(100)
  }
  
  req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

  let sortBy = {};
  if (sort[1]) {
    sortBy[sort[0]] = sort[1];
  } else {
    sortBy[sort[0]] = "asc";
  }
// console.log(sortBy)
  const Usersdata = await Users.find({ })
    .sort(sortBy)
    .skip(page * limit)
    .limit(limit);

    
  const total = await Users.countDocuments({
  });

  const response = {
    error: false,
    total,
    totalpages:(total/limit),
    page: page + 1,
    limit,
    data:Usersdata,
  };

  res.status(200).json(response);
} catch (err) {
  console.log(err);
  res.status(500).json({ error: true, message: "Internal Server Error" });
}
})
app.get("/:id", async (req, res) => {
    let { id } = req.params;
  
    try {
      let data = await Users.findById(id);
      return res.send(data);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });

app.post("/", async (req, res) => {
  try {
    let {data}= await axios.get("https://randomuser.me/api/?results=100")
    // res.send(data.results)
    let newUsers = await Users.insertMany(data.results).limit(100);
    console.log(newUsers);
    return res.status(201).send(newUsers);
  } catch (e) {
    res.status(500).send(e.message);
  }
});


app.delete("/", async (req, res) => {
 
  try {
    let data = await Users.deleteMany({});
    console.log(data);
    return res.send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
app.delete("/:id", async (req, res) => {
  let { id } = req.params;

  try {
    let data = await Users.findByIdAndRemove(id, { new: true });
    console.log(data);
    return res.send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;
