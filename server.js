const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;
const kingsGateRouter = express.Router();
let Clients = require("./kingsgate.model");
let Factories = require("./kingsgate_factories.model");
let Groups = require("./kingsgate_groups.model");
let Subscription = require("./kingsgate_subscription.model");
let Challan = require("./kingsgate_challan.model");
let Staff = require("./kingsgate_staff.model");
let Payment = require("./kingsgate_payments.model");
let Task = require("./kingsgate_tasks.model");
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/kingsgate", {
  useNewUrlParser: true,
});
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

kingsGateRouter.route("/").get(function (req, res) {
  Clients.find(function (err, clients) {
    if (err) {
      console.log(err);
    } else {
      res.json(clients);
    }
  });
});

kingsGateRouter.route("/factories/").get(function (req, res) {
  Factories.find(function (err, factories) {
    if (err) {
      console.log(err);
    } else {
      res.json(factories);
    }
  });
});
kingsGateRouter.route("/groups/").get(function (req, res) {
  Groups.find(function (err, groups) {
    if (err) {
      console.log(err);
    } else {
      res.json(groups);
    }
  });
});
kingsGateRouter.route("/subscription/").get(function (req, res) {
  Subscription.find(function (err, subs) {
    if (err) {
      console.log(err);
    } else {
      res.json(subs);
    }
  });
});
kingsGateRouter.route("/challan/").get(function (req, res) {
  Challan.find(function (err, challan) {
    if (err) {
      console.log(err);
    } else {
      res.json(challan);
    }
  });
});
kingsGateRouter.route("/staff/").get(function (req, res) {
  Staff.find(function (err, staff) {
    if (err) {
      console.log(err);
    } else {
      res.json(staff);
    }
  });
});
kingsGateRouter.route("/payments/").get(function (req, res) {
  Payment.find(function (err, pays) {
    if (err) {
      console.log(err);
    } else {
      res.json(pays);
    }
  });
});

kingsGateRouter.route("/tasks/").get(function (req, res) {
  Task.find(function (err, task) {
    if (task) {
      console.log(err);
    } else {
      res.json(task);
    }
  });
});

kingsGateRouter.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Clients.findById(id, function (err, client) {
    res.json(client);
  });
});

kingsGateRouter.route("/update/:id").post(function (req, res) {
  Clients.findById(req.params.id, function (err, client) {
    if (!client) res.status(404).send("data is not found");
    else
      (client.client_name = req.body.client_name),
        (client.mobile_number = req.body.mobile_number),
        (client.phone_number = req.body.phone_number),
        (client.email_id = req.body.email_id),
        (client.sector = req.body.sector),
        (client.block = req.body.block),
        (client.factories = req.body.factories),
        (client.address = req.body.address),
        (client.company = req.body.company),
        (client.gst_num = req.body.gst_num),
        client
          .save()
          .then((client) => {
            res.json("Client Update Successfully");
          })
          .catch((err) => {
            res.status(400).send("Update not possible");
          });
  });
});

kingsGateRouter.route("/delete_client/:id").delete((req, res, next) => {
  Clients.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(next(err));
      res.status(200).json({data:"deleted"})
    } else {
      console.log("deleted_succesfully");
    }
  });
});
kingsGateRouter.route("/delete_factory/:id").delete((req,res,next)=>{
  Factories.findByIdAndDelete(req.params.id,(err,data)=>{
    if(err){
      console.log(next(err))
      res.status(200).json({data:"deleted"})
    }
    else{
      console.log("deleted successfully")
    }
  })
})

kingsGateRouter.route("/add").post(function (req, res) {
  let client = new Clients(req.body);
  client
    .save()
    .then((client) => {
      res.status(200).json({ client: "client added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new Client failed");
    });
});

kingsGateRouter.route("/addfactory").post(function (req, res) {
  let factory = new Factories(req.body);
  factory
    .save()
    .then((factory) => {
      res.status(200).json({ factory: "factory added successfully" });
    })
    .catch((err) => {
      res.status(400).send("Failed");
    });
});

kingsGateRouter.route("/addgroups").post(function (req, res) {
  let group = new Groups(req.body);
  group
    .save()
    .then((group) => {
      res.status(200).json({ groups: "Success" });
    })
    .catch((err) => {
      res.status(400).send("Failed");
    });
});
kingsGateRouter.route("/addsubs").post(function (req, res) {
  let subs = new Subscription(req.body);
  subs
    .save()
    .then((subs) => {
      res.status(200).json({ subs: "Success" });
    })
    .catch((err) => {
      res.status(400).send("Failed");
    });
});
kingsGateRouter.route("/addchallan").post(function (req, res) {
  let challan = new Challan(req.body);
  challan
    .save()
    .then((challan) => {
      res.status(200).json({ challan: "Success" });
    })
    .catch((err) => {
      res.status(400).send("failed");
    });
});
kingsGateRouter.route("/addstaff").post(function (req, res) {
  let staff = new Staff(req.body);
  staff
    .save()
    .then((staff) => {
      res.status(200).json({ staff: "Success" });
    })
    .catch((err) => {
      res.status(400).send("failed");
    });
});
kingsGateRouter.route("/addpayment").post(function (req, res) {
  let payment = new Payment(req.body);
  payment
    .save()
    .then((payment) => {
      res.status(200).json({ payment: "Success" });
    })
    .catch((err) => {
      res.status(400).send("Failed");
    });
});
kingsGateRouter.route("/addtask").post(function (req, res) {
  let task = new Task(req.body);
  task
    .save()
    .then((task) => {
      res.status(200).json({ task: "Success" });
    })
    .catch((err) => {
      res.status(400).send("Failed");
    });
});
app.use("/kingsgate", kingsGateRouter);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
