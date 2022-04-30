export const textField = (label = 'Text', name = 'text', required = false) => ({
  label,
  name,
  widget: 'text',
  required,
});

export const stringField = (
  label = 'String',
  name = 'string',
  required = false,
  defaultVal = ''
) => ({
  label,
  name,
  widget: 'string',
  required,
  default: defaultVal,
});

export const objectField = (
  label = 'Object',
  name = 'object',
  fields = [],
  required = true
) => ({
  label,
  name,
  widget: 'object',
  fields,
  required,
});

export const imageField = (
  label = 'image',
  name = 'image',
  choose_url = false,
  required = true
) => ({
  label,
  name,
  widget: 'image',
  choose_url,
  required,
});

export const dateField = (label = 'date', name = 'date', required = true) => ({
  label,
  name,
  widget: 'datetime',
  required,
});

const mdButtons = [
  'bold',
  'italic',
  'code',
  'link',
  'heading-one',
  'heading-two',
  'heading-three',
  'heading-four',
  'heading-five',
  'heading-six',
  'quote',
  'bulleted-list',
  'numbered-list',
];

export const mdEditor = (
  label = 'body',
  name = 'body',
  h1Allowed = false,
  editor_components = []
) => ({
  label,
  name,
  buttons: h1Allowed
    ? mdButtons
    : mdButtons.filter((opt) => opt !== 'heading-one'),
  editor_components,
  required: true,
});

export const relationSelection = (
  label = 'relation',
  name = 'relation',
  collection = 'collection',
  file = 'file',
  field = 'searchDisplayValuefield',
  multiple = true
) => ({
  label,
  name,
  widget: 'relation',
  collection,
  file,
  search_fields: [`${field}.*`],
  display_fields: [`${field}.*`],
  value_field: [`${field}.*`],
  multiple,
});

export const listObject = (
  label = 'list',
  name = 'list',
  fields = [],
  allow_add = true,
  collapsed = true,
  minimize_collapsed = true
) => ({
  label,
  name,
  widget: 'list',
  allow_add,
  collapsed,
  minimize_collapsed,
  fields,
});

export const boolSelect = (
  label = 'bool',
  name = 'bool',
  defaultVal = true
) => ({
  label,
  name,
  widget: 'boolean',
  default: defaultVal,
});

export const hiddenField = (name = 'hidden') => ({
  name,
  widget: 'hidden',
});
