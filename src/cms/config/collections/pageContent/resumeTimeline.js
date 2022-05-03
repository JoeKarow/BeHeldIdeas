import {
  boolSelect,
  colorPicker,
  listObject,
  mdEditor,
  objectField,
  stringField
} from '../../fields'
import { pageDefaults } from '../../patterns'

const timelineItem = [
  stringField('Title', 'heading', true),
  stringField('Company', 'subheading', true),
  objectField(
    'Dates',
    'dates',
    [
      stringField('Display', 'text', true),
      colorPicker('Background Color', 'background'),
      colorPicker('Text Color', 'color')
    ],
    true
  ),
  mdEditor('Body Text', 'body')
]

export const resumeTimeline = {
  label: 'Resume Timeline',
  name: 'resumeTimeline',
  file: 'src/pages/resume/index.mdx',
  fields: [
    ...pageDefaults('resume-page'),
    objectField('Timeline Options', 'timelineOptions', [
      boolSelect('Animate Entry?', 'animate', true),
      colorPicker('Line Color', 'lineColor')
    ]),
    listObject('Timeline Entries', 'items', timelineItem, true, true)
  ]
}
