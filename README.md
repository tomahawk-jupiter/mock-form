# Mock form

A form with live frontend validation using vanilla JavaScript. Assignment for the Odin Project.

[Live Page](https://tomahawk-jupiter.github.io/mock-form/)

When a user leaves a field it is automatically validated. It is then highlighted until filled in correctly.

There is an error or success message when the form is submitted. The form isn't connected to anything.

## Overview

### JavaScript

Each form input has a listener listening for the blur event. When its triggered, it checks if the input is valid with the `element.validity.valid` method.

If its invalid an error class is added to the element and a message is displayed. Another listener for the event `input` is added to the element that watches for the input to meet the requirements.

When the value becomes valid the valid class is added. The classes are used to add the different styles.

### HTML

RegEx can be used to validate input element values using the `pattern` attribute.

## Useful Notes

### Turn off browser auto validate

Set this attribute on the form to disable the default validation behaviour so that you can set your own.

    <form novalidate>

### Blur Event

Listen for the `blur` event in the event listeners. This event happens when an element loses focus.

### Check an elements validity

    element.validity.valid
