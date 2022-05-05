import { stringField, textField, objectField, hiddenField } from "./fields";

export const collectionDefaults = (label, name) => ({
  label,
  name,
  editor: {
    preview: false
  }
});

export const pageDefaults = (templateKey = "", startCollapsed = true) => [
  stringField("Menu title", "title", true),
  hiddenField("templateKey", "Template", templateKey),
  objectField(
    "SEO",
    "seo",
    [
      stringField("SEO title", "title"),
      textField("SEO description", "description")
    ],
    true,
    startCollapsed
  )
];

export const multiColorTitleDefaults = objectField("Title", "title", [
  stringField("Text part 1", "text_part_1"),
  stringField("Text part 2", "text_part_2")
]);

export const buttonDefaults = (label = "Button", name = "button") =>
  objectField(label, name, [
    stringField("Text", "text", true),
    stringField("URL", "url", true)
  ]);

export const titleWithSubtitleDefaults = (subtitleIsMarkdown = false) => [
  multiColorTitleDefaults,
  subtitleIsMarkdown
    ? stringField("Subtitle", "subtitle")
    : textField("Subtitle", "subtitle")
];
