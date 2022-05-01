import { boolSelect, listObject, stringField } from '../../fields'

const socials = {
  label: 'Social Media Links',
  name: 'socials',
  file: 'src/data/socials/socials.json',
  fields: [
    listObject(
      'Social Media Links',
      'Socials',
      [
        stringField('Site name', 'service', true),
        stringField('URL', 'url', true),
        stringField(
          'Iconify code',
          'icon',
          true,
          'From https://icon-sets.iconify.design/'
        ),
        boolSelect('Active?', 'active', true)
      ],
      true,
      true,
      false
    )
  ]
}

export default socials
