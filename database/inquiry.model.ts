import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  phone: {
    type: String,
    trim: true,
  },
  services: {
    type: [String],
    required: [true, "At least one service must be selected"],
    validate: {
      validator: function (v: string[]) {
        return Array.isArray(v) && v.length > 0;
      },
      message: "Please select at least one service",
    },
  },
  // budget: {
  //   type: String,
  //   enum: {
  //     values: ["<25000", "25000-50000", "50000-100000", ">100000"],
  //     message: "Invalid budget range selected",
  //   },
  // },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  status: {
    type: String,
    enum: ["new", "contacted", "in-progress", "completed", "cancelled"],
    default: "new",
  },
});

// Index for efficient querying
InquirySchema.index({ createdAt: -1 });
InquirySchema.index({ email: 1 });
InquirySchema.index({ status: 1 });

// Ensure model isn't registered twice
export default mongoose.models.Inquiry ||
  mongoose.model("Inquiry", InquirySchema);
