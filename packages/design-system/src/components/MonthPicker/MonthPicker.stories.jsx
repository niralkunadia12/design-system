import React from 'react';

import MonthPicker from './MonthPicker';

export default {
  title: 'Components/Month Picker',
  component: MonthPicker,
  argTypes: {
    buttonVariation: {
      description: `Variation string to be applied to buttons. See [Button component](https://design.cms.gov/components/button/#components.button.react).`,
      control: 'radio',
      options: ['primary', 'success', 'transparent'],
    },
    requirementLabel: {
      description: `Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields](https://design.cms.gov/guidelines/forms/#required-and-optional-fields).`,
      control: 'radio',
      options: ['Optional', 'Required'],
    },
    inversed: {
      control: 'radio',
      options: [true, false],
      defaultValue: false,
    },
    errorPlacement: {
      defaultValue: 'top',
    },
  },
  args: {
    hint:
      "Month Picker can receive optional help text, giving the user additional information of what's required.",
    errorMessage: 'Please meet form requirements.',
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#fff',
        },
        {
          name: 'Hcgov dark',
          value: '#112e51',
        },
        {
          name: 'Mgov dark',
          value: '#146a5d',
        },
      ],
    },
  },
};

const Template = ({ data, ...args }) => <MonthPicker {...args} />;

export const DefaultMonthPicker = Template.bind({});
DefaultMonthPicker.args = {
  name: 'DefaultMonthPicker',
  label: 'Select a month from Default Month Picker',
};

export const SelectedMonthPicker = Template.bind({});
SelectedMonthPicker.args = {
  name: 'SelectedMonthPicker',
  label: 'Select additional months from Selected Month Picker',
  hint:
    'Preselected values are `readonly` when `selectedMonths` property is used. For mutable values, use the `defaultSelectedMonths` property.',
  selectedMonths: [1, 2, 3, 4, 5, 6],
};

export const DisabledMonthPicker = Template.bind({});
DisabledMonthPicker.args = {
  name: 'DisabledMonthPicker',
  label: 'Select available months from Disabled Month Picker',
  disabledMonths: [7, 8, 9, 10, 11, 12],
};

export const InverseMonthPicker = Template.bind({});
InverseMonthPicker.args = {
  name: 'InverseMonthPicker',
  label: 'Select a month from Inverse Month Picker',
  inversed: true,
};
InverseMonthPicker.parameters = {
  backgrounds: { default: process.env.STORYBOOK_DS === 'mgov' ? 'Mgov dark' : 'Hcgov dark' },
};

export const InverseSelectedMonthPicker = Template.bind({});
InverseSelectedMonthPicker.args = {
  name: 'InverseSelectedMonthPicker',
  label: 'Select additional months from Inverse Selected Month Picker',
  hint:
    'Preselected values are `readonly` when `selectedMonths` property is used. For mutable values, use the `defaultSelectedMonths` property.',
  inversed: true,
  selectedMonths: [1, 2, 3, 4, 5, 6],
};
InverseSelectedMonthPicker.parameters = {
  backgrounds: { default: process.env.STORYBOOK_DS === 'mgov' ? 'Mgov dark' : 'Hcgov dark' },
};

export const InverseDisabledMonthPicker = Template.bind({});
InverseDisabledMonthPicker.args = {
  name: 'InverseDisabledMonthPicker',
  label: 'Select available months from Inverse Disabled Month Picker',
  inversed: true,
  disabledMonths: [7, 8, 9, 10, 11, 12],
};
InverseDisabledMonthPicker.parameters = {
  backgrounds: { default: process.env.STORYBOOK_DS === 'mgov' ? 'Mgov dark' : 'Hcgov dark' },
};
