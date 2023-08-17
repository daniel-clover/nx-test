import React, { Fragment } from 'react';
import { Button } from '../Button';

  export const ButtonExample =  ({...args}) => {
    return (
        <Fragment>
           <div>
                <label>Primary Button</label>
            </div>
            <div>
              <Button {...args} />
            </div>
            <div>
                <label>Secondary Button</label>
            </div>
            <div>
              <Button variant={'secondary'} destructive ={false}  disabled= {false} {...args} />
            </div>
            <div>
                <label>Secondary Destructive Button</label>
            </div>
            <div>
              <Button variant={'secondary'} destructive ={true}  disabled= {false} {...args} />
            </div>
            <div>
                <label>Tertiary  Button</label>
            </div>
            <div>
              <Button variant={'tertiary'} destructive ={false}  disabled= {false} {...args} />
            </div>
            <div>
                <label>Tertiary Destructive Button</label>
            </div>
            <div>
              <Button variant={'tertiary'} destructive ={true}  disabled= {false} {...args} />
            </div>
        </Fragment>
    );
  };