import React, { Fragment } from 'react';
import { Action } from '../Action';
  export const ActionButtonTemplate =  () => {
    return (
            <Fragment>
                <div>
                    <label>Primary Destructive</label>
                </div>
                <div>
                    <Action destructive>
                        Primary Destructive
                    </Action>
                </div>
                <div>
                    <label>Secondary</label>
                </div>
                <div>
                    <Action variant="secondary">
                        Secondary Click
                    </Action>
                </div>
                <div>
                    <label>Secondary Destructive</label>
                </div>
                <div>
                    <Action variant="secondary" destructive>
                        Secondary destructive
                    </Action>
                </div>
                <div>
                    <label>Tertiary Destructive</label>
                </div>
                <div>
                    <Action variant="tertiary" >
                    Tertiary Click
                    </Action>
                </div>
                <div>
                    <label>Tertiary Destructive</label>
                </div>
                <div>
                    <Action variant="tertiary" destructive>
                    Tertiary destructive
                    </Action>
                </div>
                <div>
                    <label>Link Button</label>
                </div>
                <div> 
                    <br/>
                    <Action href="/hello">
                        Link Button
                    </Action>
                </div>
            </Fragment>
       
    );
  };