const mongoose = require("mongoose");

const AllblogSchema = new mongoose.Schema({
  post_id: {
    type: String,
    required: [true, "Please provide post id"],
    unique: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: [10, "post body must not be less than 10 characters"],
  },

  post_author: {
    type: String,
    default: "John Terry",
    unique: true,
    trim: true,
  },

  post_created_date: {
    type: Date,
    default: new Date().toLocaleString(),
    unique: true,
    trim: true,
  },

  allow_comments: {
    type: Boolean,
    unique: true,
    trim: true,
  },

  require_approval: {
    type: Boolean,
    default: false,
    unique: true,
    trim: true,
  },

  post_url: {
    type: String,
    unique: true,
    trim: true,
  },

  shared_message: {
    type: String,
    unique: true,
    trim: true,
  },

  seo_title: {
    type: String,
    unique: true,
    trim: true,
  },

  seo_description: {
    type: String,
    unique: true,
    trim: true,
  },

  tags: [
    {
      type: strings,
      unique: true,
      trim: true,
      default: "posts",
    },
  ],

  commenting_system: {
    type: String,
    default: "default",
    unique: true,
    trim: true,
  },

  created_date: {
    type: Date,
    unique: true,
    trim: true,
  },

  updated_date: {
    type: Date,
    unique: true,
    trim: true,
  },

  date_format: {
    type: String,
    default: "j/n/y",
    unique: true,
    trim: true,
  },
});

module.exports = mongoose.model("blog", AllblogSchema);
