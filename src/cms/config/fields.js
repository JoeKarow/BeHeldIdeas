export const textField = (label = 'Text', name = 'text', required = false) => ({
  label,
  name,
  widget: 'text',
  required
})

export const stringField = (
  label = 'String',
  name = 'string',
  required = false,
  defaultVal = '',
  hint = ''
) => ({
  label,
  name,
  widget: 'string',
  required,
  default: defaultVal,
  hint
})

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
  required
})

export const imageField = (
  label = 'image',
  name = 'image',
  media_folder = '',
  choose_url = false,
  required = true
) => ({
  label,
  name,
  widget: 'image',
  choose_url,
  media_folder,
  required
})

export const dateField = (label = 'date', name = 'date', required = true) => ({
  label,
  name,
  widget: 'datetime',
  required
})

// const mdButtons = [
//   'bold',
//   'italic',
//   'code',
//   'link',
//   'heading-one',
//   'heading-two',
//   'heading-three',
//   'heading-four',
//   'heading-five',
//   'heading-six',
//   'quote',
//   'bulleted-list',
//   'numbered-list'
// ]
export const mdButtons = {
  all: [
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
    'numbered-list'
  ],
  para: ['bold', 'italic', 'link'],
  noH1: [
    'bold',
    'italic',
    'code',
    'link',
    'heading-two',
    'heading-three',
    'heading-four',
    'heading-five',
    'heading-six',
    'quote',
    'bulleted-list',
    'numbered-list'
  ]
}

export const mdEditor = (
  label = 'body',
  name = 'body',
  buttons = mdButtons.all,
  editor_components = []
) => ({
  label,
  name,
  // buttons,
  editor_components,
  required: true,
  widget: 'markdown'
})

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
  multiple
})

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
  fields
})

export const boolSelect = (
  label = 'bool',
  name = 'bool',
  defaultVal = true
) => ({
  label,
  name,
  widget: 'boolean',
  default: defaultVal
})

export const hiddenField = (
  label = 'hidden',
  name = 'hidden',
  defaultVal = ''
) => ({
  label,
  name,
  widget: 'hidden',
  default: defaultVal
})
