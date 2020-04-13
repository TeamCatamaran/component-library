import React from 'react';
import { action } from '@storybook/addon-actions';
import '../../../index.scss';
import Button from './button';
import Toggle from './toggle';
import Card from '../card/card';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

export default {
    title:      'Elements/Button',
    component:  Button,
    decorators: [withKnobs],
};

export const Base = () => {
    const sizeOptions = ["default", "small", "large"];
    const sizeValue = select("Size", sizeOptions, "default", "Properties");
    

    const textValue = text("Text", "Button Text", "Content");

    const iconOptions = ["none", "sync"];
    let iconValue = select("Icon", iconOptions, "none", "Properties");

    if (iconValue === "none") {
        iconValue = null;
    }


    const tags = [];

    if (boolean("Primary", false, "Properties")) {
        tags.push("primary");
    }

    return (
        <article>
            <Button
                onClick     = { action('onClick') }
                disabled    = { boolean("Disabled", false, "Properties") }
                size        = { sizeValue }
                tags        = { tags }
                icon        = { iconValue }
            >
                { textValue }
            </Button>
        </article>
    );
}


export const ToggleButton = () => {
    const sizeOptions = ["default", "small", "large"];
    const sizeValue = select("Size", sizeOptions, "default", "Properties");


    const tags = [];

    return (
        <article>
            <Card tags={["edgeless"]}>
                <Toggle
                    checked     = { true }
                    disabled    = { boolean("Disabled", false, "Properties") }
                    size        = { sizeValue }
                    tags        = { tags }
                />
            </Card>
            <Card tags={["edgeless"]}>
                <Toggle
                    checked     = { false }
                    disabled    = { boolean("Disabled", false, "Properties") }
                    size        = { sizeValue }
                    tags        = { tags }
                />
            </Card>
        </article>
    );
}