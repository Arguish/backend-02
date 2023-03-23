const { Contact } = require("../models/Contact.model");

const createContact = async (req, res) => {
  try {
    const result = await Contact.create(req.body);

    res.status(200).json({
      message: "POST OK ^,_,^",
      contact: result,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getContact = async (req, res) => {
  try {
    const result = await Contact.findAll(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!result) {
      res.status(404).send("Contact not found");
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllContact = async (req, res) => {
  try {
    const result = await Contact.findAll();
    if (!result) {
      res.status(404).send("Contacts not found");
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateContact = async (req, res) => {
  try {
    const result = await Contact.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!result) {
      res.status(404).send("Contact not found");
    }
    res.status(200).send("Contact Updated");
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteContact = async (req, res) => {
  try {
    const result = await Contact.destroy(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!result) {
      res.status(404).send("Contact not found");
    }
    res.status(200).send("Contact Deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createContact,
  getContact,
  getAllContact,
  updateContact,
  deleteContact,
};
