import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Action } from '.';
// import '../../../.storybook/chromatic.hack.scss';

export default {
  title: 'Molecules/Action (button & link Button)',
  component: Action,
  argTypes: {
    target: {
      options: ['_self', '_blank', '_parent', '_top'],
      control: { type: 'select' },
    },
    href: { control: { type: 'text' } },
    to: { control: { type: 'text' } },
    children: { control: { type: 'text' } },
  },
} as Meta;

const ButtonStory: StoryFn = args => {
  const [buttonBusy, setButtonBusy] = useState(false);
  const buttonInteraction = () => {
    setButtonBusy(true);
    setTimeout(() => setButtonBusy(false), 3000);
  };

  const label = args.children ?? (args?.href?.length > 0 ? 'Link' : 'Button');

  return (
    <>
      <h2>Button vs Link</h2>
      <p>
        The Action component is either a button or a link depending on if an href is passed. These are both styled the
        same with the same variants. The Accessible properties are different and necessary. If the component is linking
        to another page or another area of the view, please pass an href.
      </p>
      <br />
      <h2>Using the "loading" prop.</h2>
      <p>
        When set to "true" the logic in the consuming application will trigger the loading state of the button. When the
        button is in the "loading" state, the "aria-disabled" attribute is added. The consumer must provide logic to the
        button to ovveride the default click funcitonality since the button isn't fully disabled.
      </p>
      <p>Button will go to loading state for 3 seconds and return to natural state upon activation.</p>
      <br />
      <Action {...args} children={label} onClick={buttonInteraction} loading={buttonBusy} />
    </>
  );
};

const AllStateTemplate: StoryFn = args => {
  return (
    <>
      <h2>Primary</h2>
      <Action children={'Primary click'} {...args} />

      <h2>Primary hover</h2>
      <Action className="stateHover" children={'Primary click'} {...args} />

      <h2>Primary Focus, Active</h2>
      <Action className="stateFocus" children={'Primary click'} {...args} />

      <h2>Primary Loading</h2>
      <Action loading children={'Primary click'} {...args} />

      <h2>Primary Disabled</h2>
      <Action children={'Primary click'} {...args} disabled={true} />

      <h2>Primary Destructive</h2>
      <Action children={'Primary click'} {...args} destructive={true} />

      <h2>Primary Destructive Hover</h2>
      <Action className="stateHover" children={'Primary click'} {...args} destructive={true} />

      <h2>Primary Destructive Active, Focus</h2>
      <Action className="stateFocus" children={'Primary click'} {...args} destructive={true} />

      <h2>Primary Destructive Loading</h2>
      <Action loading children={'Primary click'} {...args} destructive={true} />

      <h2>Primary Large</h2>
      <Action large children={'Primary click'} {...args} />

      <h2>Primary Large Hover</h2>
      <Action large className="stateHover" children={'Primary click'} {...args} />

      <h2>Primary Large Active, Focus</h2>
      <Action large className="stateFocus" children={'Primary click'} {...args} />

      <h2>Primary Large Disabled</h2>
      <Action large disabled children={'Primary click'} {...args} />

      <h2>Primary Large Loading</h2>
      <Action loading large children={'Primary click'} {...args} />

      <h2>Primary Large Destructive</h2>
      <Action large destructive children={'Primary click'} {...args} />

      <h2>Primary Large Hover Destructive</h2>
      <Action large destructive className="stateHover" children={'Primary click'} {...args} />

      <h2>Primary Large Active, Focus Destructive</h2>
      <Action large destructive className="stateFocus" children={'Primary click'} {...args} />

      <h2>Primary Large Destructive Loading</h2>
      <Action loading large destructive children={'Primary click'} {...args} />

      <h2>Primary Fullwidth</h2>
      <Action fullwidth children={'Primary click fullwidth'} {...args} />

      <h2>Primary Fullwidth Hover</h2>
      <Action fullwidth className="stateHover" children={'Primary click fullwidth'} {...args} />

      <h2>Primary Fullwidth Active, Focus</h2>
      <Action fullwidth className="stateFocus" children={'Primary click fullwidth'} {...args} />

      <h2>Primary Fullwidth Loading</h2>
      <Action loading fullwidth children={'Primary click fullwidth'} {...args} />

      <h2>Primary Fullwidth Disabled</h2>
      <Action disabled fullwidth className="stateFocus" children={'Primary click fullwidth'} {...args} />

      <h2>Primary Fullwidth Destructive</h2>
      <Action destructive fullwidth children={'Primary click fullwidth'} {...args} />

      <h2>Primary Fullwidth Destructive Hover</h2>
      <Action destructive fullwidth className="stateHover" children={'Primary click fullwidth'} {...args} />

      <h2>Primary Fullwidth Destructive Active, Focus</h2>
      <Action destructive fullwidth className="stateFocus" children={'Primary click fullwidth'} {...args} />

      <h2>Primary Fullwidth Destructive Loading</h2>
      <Action loading destructive fullwidth children={'Primary click fullwidth'} {...args} />

      <h2>Secondary</h2>
      <Action variant={'secondary'} children={'Secondary click'} {...args} />

      <h2>Secondary hover</h2>
      <Action variant={'secondary'} className="stateHover" children={'Secondary click'} {...args} />

      <h2>Secondary Focus, Active</h2>
      <Action variant={'secondary'} className="stateFocus" children={'Secondary click'} {...args} />

      <h2>Secondary Loading</h2>
      <Action loading variant={'secondary'} children={'Secondary click'} {...args} />

      <h2>Secondary Disabled</h2>
      <Action variant={'secondary'} children={'Secondary click'} {...args} disabled={true} />

      <h2>Secondary Destructive</h2>
      <Action destructive variant={'secondary'} children={'Secondary click'} {...args} />

      <h2>Secondary Destructive Hover</h2>
      <Action destructive variant={'secondary'} className="stateHover" children={'Secondary click'} {...args} />

      <h2>Secondary Destructive Active, Focus</h2>
      <Action destructive variant={'secondary'} className="stateFocus" children={'Secondary click'} {...args} />

      <h2>Secondary Destructive Loading</h2>
      <Action loading destructive variant={'secondary'} children={'Secondary click'} {...args} />

      <h2>Secondary Gray</h2>
      <Action variant={'secondaryGray'} children={'Secondary click'} {...args} />

      <h2>Secondary Gray Hover</h2>
      <Action variant={'secondaryGray'} className="stateHover" children={'Secondary click'} {...args} />

      <h2>Secondary Gray Active, Focus</h2>
      <Action variant={'secondaryGray'} className="stateFocus" children={'Secondary click'} {...args} />

      <h2>Secondary Gray Loading</h2>
      <Action loading variant={'secondaryGray'} children={'Secondary click'} {...args} />

      <h2>Secondary Large</h2>
      <Action variant={'secondary'} large children={'Secondary click'} {...args} />

      <h2>Secondary Large Hover</h2>
      <Action variant={'secondary'} large className="stateHover" children={'Secondary click'} {...args} />

      <h2>Secondary Large Active, Focus</h2>
      <Action variant={'secondary'} large className="stateFocus" children={'Secondary click'} {...args} />

      <h2>Secondary Large Loading</h2>
      <Action loading variant={'secondary'} large children={'Secondary click'} {...args} />

      <h2>Secondary Large Disabled</h2>
      <Action variant={'secondary'} large disabled children={'Secondary click'} {...args} />

      <h2>Secondary Large Destructive</h2>
      <Action large destructive variant={'secondary'} children={'Secondary click'} {...args} />

      <h2>Secondary Large Destructive Hover</h2>
      <Action large destructive variant={'secondary'} className="stateHover" children={'Secondary click'} {...args} />

      <h2>Secondary Large Destructive Active, Focus</h2>
      <Action large destructive variant={'secondary'} className="stateFocus" children={'Secondary click'} {...args} />

      <h2>Secondary Large Destructive Loading</h2>
      <Action loading large destructive variant={'secondary'} children={'Secondary click'} {...args} />

      <h2>Secondary Gray Large</h2>
      <Action large variant={'secondaryGray'} children={'Secondary click'} {...args} />

      <h2>Secondary Gray Large Hover</h2>
      <Action large variant={'secondaryGray'} className="stateHover" children={'Secondary click'} {...args} />

      <h2>Secondary Gray Large Active, Focus</h2>
      <Action large variant={'secondaryGray'} className="stateFocus" children={'Secondary click'} {...args} />

      <h2>Secondary Gray Large Loading</h2>
      <Action large loading variant={'secondaryGray'} children={'Secondary click'} {...args} />

      <h2>Secondary Fullwidth</h2>
      <Action variant={'secondary'} fullwidth children={'Secondary click fullwidth'} {...args} />

      <h2>Secondary Fullwidth Hover</h2>
      <Action variant={'secondary'} fullwidth className="stateHover" children={'Secondary click fullwidth'} {...args} />

      <h2>Secondary Fullwidth Active, Focus</h2>
      <Action variant={'secondary'} fullwidth className="stateFocus" children={'Secondary click fullwidth'} {...args} />

      <h2>Secondary Fullwidth Disabled</h2>
      <Action
        variant={'secondary'}
        disabled
        fullwidth
        className="stateFocus"
        children={'Secondary click fullwidth'}
        {...args}
      />

      <h2>Secondary Fullwidth Destructive</h2>
      <Action destructive variant={'secondary'} fullwidth children={'Secondary click fullwidth'} {...args} />

      <h2>Secondary Fullwidth Destructive Hover</h2>
      <Action
        destructive
        variant={'secondary'}
        fullwidth
        className="stateHover"
        children={'Secondary click fullwidth'}
        {...args}
      />

      <h2>Secondary Fullwidth Destructive Active, Focus</h2>
      <Action
        destructive
        variant={'secondary'}
        fullwidth
        className="stateFocus"
        children={'Secondary click fullwidth'}
        {...args}
      />

      <h2>Secondary Gray Fullwidth</h2>
      <Action fullwidth variant={'secondaryGray'} children={'Secondary click'} {...args} />

      <h2>Secondary Gray Fullwidth Hover</h2>
      <Action fullwidth variant={'secondaryGray'} className="stateHover" children={'Secondary click'} {...args} />

      <h2>Secondary Gray Fullwidth Active, Focus</h2>
      <Action fullwidth variant={'secondaryGray'} className="stateFocus" children={'Secondary click'} {...args} />

      <h2>Secondary Gray Fullwidth Loading</h2>
      <Action fullwidth loading variant={'secondaryGray'} children={'Secondary click'} {...args} />

      <h2>Tertiary</h2>
      <Action variant={'tertiary'} children={'Tertiary click'} {...args} />

      <h2>Tertiary hover</h2>
      <Action variant={'tertiary'} className="stateHover" children={'Tertiary click'} {...args} />

      <h2>Tertiary Focus, Active</h2>
      <Action variant={'tertiary'} className="stateFocus" children={'Tertiary click'} {...args} />

      <h2>Tertiary Loading</h2>
      <Action loading variant={'tertiary'} children={'Tertiary click'} {...args} />

      <h2>Tertiary Disabled</h2>
      <Action variant={'tertiary'} disabled children={'Tertiary click'} {...args} />

      <h2>Tertiary Destructive</h2>
      <Action destructive variant={'tertiary'} children={'Tertiary click'} {...args} />

      <h2>Tertiary Destructive Hover</h2>
      <Action destructive variant={'tertiary'} className="stateHover" children={'Tertiary click'} {...args} />

      <h2>Tertiary Destructive Active, Focus</h2>
      <Action destructive variant={'tertiary'} className="stateFocus" children={'Tertiary click'} {...args} />

      <h2>Tertiary Destructive Loading</h2>
      <Action loading destructive variant={'tertiary'} children={'Tertiary click'} {...args} />

      <h2>Tertiary Large</h2>
      <Action variant={'tertiary'} large children={'Tertiary click'} {...args} />

      <h2>Tertiary Large Hover</h2>
      <Action variant={'tertiary'} large className="stateHover" children={'Tertiary click'} {...args} />

      <h2>Tertiary Large Active, Focus</h2>
      <Action variant={'tertiary'} large className="stateFocus" children={'Tertiary click'} {...args} />

      <h2>Tertiary Large Loading</h2>
      <Action loading variant={'tertiary'} large children={'Tertiary click'} {...args} />

      <h2>Tertiary Large Disabled</h2>
      <Action variant={'tertiary'} large disabled children={'Tertiary click'} {...args} />

      <h2>Tertiary Large Destructive</h2>
      <Action large destructive variant={'tertiary'} children={'Tertiary click'} {...args} />

      <h2>Tertiary Large Destructive Hover</h2>
      <Action large destructive variant={'tertiary'} className="stateHover" children={'Tertiary click'} {...args} />

      <h2>Tertiary Large Destructive Active, Focus</h2>
      <Action large destructive variant={'tertiary'} className="stateFocus" children={'Tertiary click'} {...args} />

      <h2>Tertiary Large Destructive Loading</h2>
      <Action loading large destructive variant={'tertiary'} children={'Tertiary click'} {...args} />

      <h2>Tertiary Fullwidth</h2>
      <Action variant={'tertiary'} fullwidth children={'Tertiary click fullwidth'} {...args} />

      <h2>Tertiary Fullwidth Hover</h2>
      <Action variant={'tertiary'} fullwidth className="stateHover" children={'Tertiary click fullwidth'} {...args} />

      <h2>Tertiary Fullwidth Active, Focus</h2>
      <Action variant={'tertiary'} fullwidth className="stateFocus" children={'Tertiary click fullwidth'} {...args} />

      <h2>Tertiary Fullwidth Loading</h2>
      <Action loading variant={'tertiary'} fullwidth children={'Tertiary click fullwidth'} {...args} />

      <h2>Tertiary Fullwidth Disabled</h2>
      <Action
        variant={'tertiary'}
        disabled
        fullwidth
        className="stateFocus"
        children={'Tertiary click fullwidth'}
        {...args}
      />

      <h2>Tertiary Fullwidth Destructive</h2>
      <Action destructive variant={'tertiary'} fullwidth children={'Tertiary click fullwidth'} {...args} />

      <h2>Tertiary Fullwidth Destructive Hover</h2>
      <Action
        destructive
        variant={'tertiary'}
        fullwidth
        className="stateHover"
        children={'Tertiary click fullwidth'}
        {...args}
      />

      <h2>Tertiary Fullwidth Destructive Active, Focus</h2>
      <Action
        destructive
        variant={'tertiary'}
        fullwidth
        className="stateFocus"
        children={'Tertiary click fullwidth'}
        {...args}
      />

      <h2>Tertiary Fullwidth Destructive Loading</h2>
      <Action loading destructive variant={'tertiary'} fullwidth children={'Tertiary click fullwidth'} {...args} />

      <h2>Link Button</h2>
      <Action href="/hello" children={'Link button'} {...args} />

      <h2>Link Button Hover</h2>
      <Action className="stateHover" href="/hello" children={'Link button'} {...args} />

      <h2>Link Button Active, Focus</h2>
      <Action className="stateFocus" href="/hello" children={'Link button'} {...args} />

      <h2>Link Button Secondary</h2>
      <Action variant={'secondary'} href="/hello" children={'Link button'} {...args} />

      <h2>Link Button Secondary Hover</h2>
      <Action variant={'secondary'} className="stateHover" href="/hello" children={'Link button'} {...args} />

      <h2>Link Button Secondary Active, Focus</h2>
      <Action variant={'secondary'} className="stateFocus" href="/hello" children={'Link button'} {...args} />

      <h2>Link Button Large</h2>
      <Action large href="/hello" children={'Link button'} {...args} />

      <h2>Link Button Hover Large</h2>
      <Action large className="stateHover" href="/hello" children={'Link button'} {...args} />

      <h2>Link Button Active, Focus Large</h2>
      <Action large className="stateFocus" href="/hello" children={'Link button'} {...args} />

      <h2>Link Button Fullwidth</h2>
      <Action fullwidth href="/hello" children={'Link button fullwidth'} {...args} />

      <h2>Link Button Hover Fullwidth</h2>
      <Action fullwidth className="stateHover" href="/hello" children={'Link button fullwidth'} {...args} />

      <h2>Link Button Active, Focus Fullwidth</h2>
      <Action fullwidth className="stateFocus" href="/hello" children={'Link button fullwidth'} {...args} />
    </>
  );
};

export const ActionComponent = ButtonStory.bind({});
ActionComponent.args = {
  destructive: false,
  disabled: false,
  fullwidth: false,
  large: false,
};

export const ForChromatic = AllStateTemplate.bind({});
ForChromatic.parameters = {
  pseudo: {
    hover: '.stateHover',
    focus: '.stateFocus',
  },
};
