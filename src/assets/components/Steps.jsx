import React from "react";

const steps = [
  {
    id: "1",
    message:
      "Hello! This is a sample conversational form with HTML UI Elements ",
    trigger: "2",
  },
  {
    id: "2",
    message: "Please Select Gender",
    trigger: "3",
  },

  {
    id: "3",
    options: [
      { value: 1, label: "male", trigger: "male" },
      { value: 2, label: "female", trigger: "female" },
    ],
  },
  {
    id: "male",
    message: "Name please",
    trigger: "malename",
  },
  {
    id: "female",
    message: "Name please",
    trigger: "femalename",
  },
  {
    id: "malename",
    user: true,
    trigger: "malecareer",
  },
  {
    id: "malecareer",
    message:
      "Hi {previousValue}, What inspired you to pursue your current career?",
    trigger: "malecareervalue",
  },
  {
    id: "malecareervalue",
    user: true,
    trigger: "maleweekends",
  },
  {
    id: "maleweekends",
    message: "How do you usually spend your weekends?",
    trigger: "maleweekendsvalue",
  },
  {
    id: "maleweekendsvalue",
    user: true,
    trigger: "maletravel",
  },
  {
    id: "maletravel",
    message: "What has been your most memorable travel experience?",
    trigger: "maletravelvalue",
  },
  {
    id: "maletravelvalue",
    user: true,
    trigger: "end",
  },
  // {
  //   id: "end",
  //   message: "Thank You ",
  //   end: true,
  // },

  {
    id: "femalename",
    user: true,
    trigger: "femalepersonal",
  },
  {
    id: "femalepersonal",
    message:
      "Hi {previousValue}, How do you balance your professional and personal life?",
    trigger: "femalepersonalvalue",
  },
  {
    id: "femalepersonalvalue",
    user: true,
    trigger: "femalehealthy",
  },
  {
    id: "femalehealthy",
    message: "What are your favorite healthy meals or snacks?",
    trigger: "femalehealthyvalue",
  },
  {
    id: "femalehealthyvalue",
    user: true,
    trigger: "end",
  },
  {
    id: "end",
    message: "Thank You For Watching The DEMO ",
    end: true,
  },
];

export default steps;
