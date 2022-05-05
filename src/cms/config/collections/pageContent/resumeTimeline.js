import {
  boolSelect,
  colorPicker,
  listObject,
  mdEditor,
  objectField,
  stringField
} from "../../fields";
import { pageDefaults } from "../../patterns";

const timelineItem = [
  stringField("Title", "heading", true),
  stringField("Company", "subheading", true),
  stringField("Dates", "dates", true),
  stringField("Iconify Icon Code", "icon", true),
  mdEditor("Body Text", "body")
];

const resumeTimeline = {
  label: "Resume Timeline",
  name: "resumeTimeline",
  file: "src/pages/resume/index.mdx",
  fields: [
    ...pageDefaults("resume-page"),
    objectField("Timeline Options", "timelineOptions", [
      boolSelect("Animate Entry?", "animate", true),
      colorPicker("Line Color", "lineColor")
    ]),
    listObject("Timeline Entries", "items", timelineItem, true, true, false)
  ]
};
export default resumeTimeline;
